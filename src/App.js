import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
/* import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register"; */
/* 
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";mx-0
*/

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*           <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
