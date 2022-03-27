import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { useEffect } from "react";
/* import { useContext } from "react";
import { AuthContext } from "./context/AuthContext"; */
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { validate } from "./userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(validate());
  }, []);

  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
