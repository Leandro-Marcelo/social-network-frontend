import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { signUp, cleanUpToast } from "../features/auth/authSlice";

export default function SignUp2() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };
    const [credentials, setCredentials] = useState({
        /* despues tendría que cambiar todo lo que es name por username */
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    useEffect(() => {
        if (auth.logged) navigate("/social-network-frontend");
    }, [auth]);

    useEffect(() => {
        if (auth.statusSignUp === "rejected") {
            toast.error(auth.messageSignUp, toastOptions);
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

    const handleValidation = () => {
        const { password, confirmPassword, name, email } = credentials;
        if (password !== confirmPassword) {
            /* Password and confirm password should be same. */
            toast.error(
                "La contraseña y la contraseña de confirmación deben ser iguales.",
                toastOptions
            );
            return false;
        } else if (name.length < 3) {
            /* Username should be greater than 3 characters. */
            toast.error(
                "Un usuario debe tener al menos 3 caracteres.",
                toastOptions
            );
            return false;
        } else if (password.length < 8) {
            /* Password should be equal or greater than 8 characters. */
            toast.error(
                "La contraseña debe ser igual o mayor que 8 caracteres.",
                toastOptions
            );
            return false;
        } else if (email === "") {
            /* Email is required. */
            toast.error("El email es requerido.", toastOptions);
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        /* si no cumple una validación, retorna false, si todo sale bien retorna true, alta validación wacho */
        if (handleValidation()) {
            const user = new FormData();
            user.append("name", credentials.name);
            user.append("email", credentials.email);
            user.append("password", credentials.password);
            dispatch(signUp(user));
        }
    };

    return (
        <>
            <div className="h-screen w-screen flex flex-col justify-center gap-[1rem] items-center bg-[#131324]">
                <form
                    action=""
                    onSubmit={(e) => handleSubmit(e)}
                    className="flex flex-col gap-[2rem] bg-[#00000076] rounded-[2rem] p-[5rem]"
                >
                    <div className="brand flex items-center gap-[1rem] justify-center">
                        <img src={Logo} alt="logo" className="h-[5rem]" />
                        <h1 className="text-white uppercase text-[32px] font-bold">
                            Chat Lean
                        </h1>
                    </div>
                    <input
                        type="text"
                        /* Username */
                        placeholder="Usuario"
                        name="name"
                        onChange={(e) => handleChange(e)}
                        className="bg-transparent p-[1rem] border-[0.1rem] border-solid border-[#4e0eff] rounded-[0.4rem] text-white w-full text-[1rem] "
                    />
                    <input
                        type="email"
                        /* Email */
                        placeholder="Email"
                        name="email"
                        onChange={(e) => handleChange(e)}
                        className="bg-transparent p-[1rem] border-[0.1rem] border-solid border-[#4e0eff] rounded-[0.4rem] text-white w-full text-[1rem] "
                    />
                    <input
                        type="password"
                        /* Password */
                        placeholder="Contraseña"
                        name="password"
                        onChange={(e) => handleChange(e)}
                        className="bg-transparent p-[1rem] border-[0.1rem] border-solid border-[#4e0eff] rounded-[0.4rem] text-white w-full text-[1rem] "
                    />
                    <input
                        type="password"
                        /* Confirm Password */
                        placeholder="Confirmar Contraseña"
                        name="confirmPassword"
                        onChange={(e) => handleChange(e)}
                        className="bg-transparent p-[1rem] border-[0.1rem] border-solid border-[#4e0eff] rounded-[0.4rem] text-white w-full text-[1rem] "
                    />
                    {/* Create User */}
                    <button
                        type="submit"
                        className="bg-[#4e0eff] text-white py-4 px-8 border-none font-bold cursor-pointer rounded-[0.4rem] text-[1rem] uppercase hover:bg-[#997af0]"
                    >
                        Crear Usuario
                    </button>
                    {/* Already have an account ? */}
                    <span className="text-white uppercase">
                        ¿Ya tienes una cuenta?{" "}
                        <Link to="/login" className="text-[#4e0eff] font-bold">
                            Login.
                        </Link>
                    </span>
                </form>
            </div>
            <ToastContainer />
        </>
    );
}
