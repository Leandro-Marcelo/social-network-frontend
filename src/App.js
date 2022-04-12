import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import SignUp from "./pages/SignUp";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validate } from "./features/auth/authSlice";

function App() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(validate());
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile/:name" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
