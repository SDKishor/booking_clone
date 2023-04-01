import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { HotelPage } from "./pages/HotelPage";
import { ListPage } from "./pages/ListPage";
import LoginPage from "./pages/LoginPage";
import { Register } from "./pages/Register";

function App() {
  const location = useLocation();

  return (
    <div className="w-full flex flex-col items-center ">
      <Header homepage={location.pathname === "/"}></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/hotel/:id" element={<HotelPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
