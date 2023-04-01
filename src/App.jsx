import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { HotelPage } from "./pages/HotelPage";
import { ListPage } from "./pages/ListPage";
import LoginPage from "./pages/LoginPage";
import { Register } from "./pages/Register";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import { AdminPage } from "./admin/AdminPage";
import { Admin_DashBoard } from "./admin/Admin_DashBoard";
import { Admin_UserList } from "./admin/Admin_UserList";

function App() {
  const location = useLocation();
  const { user, dispatch: authDispatch } = useContext(AuthContext);

  const ProtectiveRoute = ({ children }) => {
    if (!user) {
      return <Navigate to={"/login"} />;
    } else if (user && !user.isAdmin) {
      return <Navigate to={"/login"} />;
    }
    return children;
  };

  const adminPage = location.pathname.split("/")[1] === "admin";
  console.log();
  return (
    <div className="w-full flex flex-col items-center ">
      {!adminPage && <Header homepage={location.pathname === "/"}></Header>}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/hotel/:id" element={<HotelPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin"
          element={
            <ProtectiveRoute>
              <AdminPage />
            </ProtectiveRoute>
          }
        >
          <Route index element={<Admin_DashBoard />} />
          <Route path="/admin/userlist" element={<Admin_UserList />} />
        </Route>
        <Route path="*" element={<h1>error page not found</h1>} />
      </Routes>
      {!adminPage && <Footer />}
    </div>
  );
}

export default App;
