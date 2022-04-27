import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Login from "./pages/Login";
import Login2 from "./pages/Login2";
import Profile from "./pages/Profile";
import Profile2 from "./pages/Profile2";
import SignUp from "./pages/SignUp";
import SignUp2 from "./pages/SignUp2";
import SetAvatar from "./pages/SetAvatar";
import Chat from "./pages/Chat";
import Casa from "./pages/Casa";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validate } from "./features/auth/authSlice";
import Hola from "./pages/Hola";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(validate());
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                {/* social-network-frontend */}
                <Route path="/social-network-frontend" element={<Home />} />
                <Route path="/home2" element={<Home2 />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login2" element={<Login2 />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signup2" element={<SignUp2 />} />
                <Route path="/profile/:name" element={<Profile />} />
                <Route path="/setAvatar" element={<SetAvatar />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/casa" element={<Casa />} />
                <Route path="/hola" element={<Hola />} />
                <Route path="/profile2/:name" element={<Profile2 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
