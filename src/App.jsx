import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="w-full flex flex-col items-center ">
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </div>
  );
}

export default App;
