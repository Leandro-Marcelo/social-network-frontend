import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* import { cleanUpToast, login } from "../features/auth/authSlice"; */
import { useDispatch, useSelector } from "react-redux";
import { login, cleanUpToast } from "../features/auth/authSlice";

/* ********************************************************** */

export default function Login2() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    useEffect(() => {
        if (auth.logged) navigate("/social-network-frontend");
    }, [auth]);

    useEffect(() => {
        if (auth.statusLogin === "rejected") {
            toast.error(auth.messageLogin, toastOptions);
            setTimeout(() => {
                dispatch(cleanUpToast());
            }, 3000);
        }
    }, [auth]);

    const handleChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        });
    };

    const validateForm = () => {
        const { email, password } = credentials;
        if (email === "") {
            /* Email and Password is required. */
            toast.error("El email y contraseña son requeridos", toastOptions);
            return false;
        } else if (password === "") {
            /* Email and Password is required. */
            toast.error("El email y contraseña son requeridos", toastOptions);
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const { email, password } = credentials;

            dispatch(login({ email, password }));
        }
    };

    const demoAccount = () => {
        dispatch(login({ email: "leandro@gmail.com", password: "leandro123" }));
    };

    /* ********************************************************************************** */

    return (
        <>
            <div className="h-screen w-screen flex flex-col justify-center gap-[1rem] items-center bg-[#131324] 1200:px-0">
                <form
                    action=""
                    onSubmit={(e) => handleSubmit(e)}
                    className="flex flex-col gap-[2rem] bg-[#00000076] rounded-[2rem] p-[5rem]"
                >
                    <div className="brand flex items-center gap-[1rem] justify-center">
                        <img src={Logo} alt="logo" className="h-[5rem]" />
                        <h1 className="text-[white] uppercase text-[32px] font-bold">
                            Chat Lean
                        </h1>
                    </div>
                    <input
                        type="text"
                        /* Username */
                        placeholder="Email"
                        name="email"
                        onChange={(e) => handleChange(e)}
                        min="3"
                        className="bg-transparent p-[1rem] border-[0.1rem] border-solid border-[#4e0eff] rounded-[0.4rem] text-white w-full text-[1rem] focus:border-[red]"
                    />
                    <input
                        type="password"
                        /* Password */
                        placeholder="Contraseña"
                        name="password"
                        onChange={(e) => handleChange(e)}
                        className="bg-transparent p-[1rem] border-[0.1rem] border-solid border-[#4e0eff] rounded-[0.4rem] text-white w-full text-[1rem] "
                    />
                    <button
                        type="submit"
                        className="bg-[#4e0eff] text-[white] py-4 px-8 border-none font-bold cursor-pointer rounded-[0.4rem] text-[1rem] uppercase hover:bg-[#997af0]"
                    >
                        Log In
                    </button>
                    {/* Don't have an account ? Create One */}
                    <span className="text-[white] uppercase">
                        ¿No tienes una cuenta?{" "}
                        <Link to="/signup" className="text-[#4e0eff] font-bold">
                            Create una.
                        </Link>
                    </span>
                </form>
            </div>
            <ToastContainer />
        </>
    );
}
