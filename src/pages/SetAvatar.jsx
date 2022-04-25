import React, { useEffect, useState } from "react";
/* import loader from "../assets/loader.gif"; */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar } from "../features/user/userSlice";
/* import { setAvatar } from "../features/users/usersSlice"; */

const SetAvatar = () => {
    const APIREST = process.env.REACT_APP_PUBLIC_FOLDER;
    /* este inicial data, irían puros strings con PF + y el avatar que subi a cloud storage o mockear la api esa con api mocha */
    const initialData = [
        "avatar1.png",
        "avatar2.png",
        "avatar3.png",
        "avatar4.png",
    ];
    const dispatch = useDispatch();

    /* podría copiar esta api con api mocha */
    /*     const api = `https://api.multiavatar.com/4645646`; */
    const navigate = useNavigate();
    const [avatars, setAvatars] = useState(initialData);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedAvatar, setSelectedAvatar] = useState(undefined);
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        /* tiene el coso light xd */
        theme: "dark",
    };

    /*     useEffect(() => {
        if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY))
            navigate("/login");
    }, []);
 */
    /* Podría seleccionar un avatar, en este caso 3 y el cuarto sería subir tu propio avatar o profile picture, en vez de pedirle que se ponga una foto al momento de sign up xd */
    const setProfilePicture = async () => {
        if (selectedAvatar === undefined) {
            /* Acá cambiaria a, selecciona un avatar ó subí tu propio avatar y en el backend iría una validación diciendo, necesitas seleccionar un avatar para poder chatear */
            toast.error("Please select an avatar", toastOptions);
        } else {
            /* Ver que le establece */
            /*             const user = await JSON.parse(
                localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
            ); */

            dispatch(
                setAvatar({
                    img: "/files/" + avatars[selectedAvatar],
                })
            );

            navigate("/chat");
        }
    };
    return (
        <>
            <div className="flex justify-center items-center flex-col gap-[3rem] bg-[#131324] h-screen w-screen">
                <div className="title-container">
                    {/* Pick an Avatar as your profile picture */}
                    <h1 className="text-white text-[2rem] font-bold">
                        Elige un Avatar como Foto de Perfil
                    </h1>
                </div>
                <div className="avatars flex gap-[2rem]">
                    {avatars.map((avatar, index) => {
                        return (
                            /*    FALTA, APRENDER CON JONATHAN MIRCHA  TRANSITION, PAGINA DE TRANSICIONES QUE PASO YHONA transition: 0.5s ease-in-out; */
                            <div
                                className={`border-[0.2rem] border-solid border-transparent p-[0.4rem] rounded-[5rem] flex justify-center items-center  ${
                                    selectedAvatar === index
                                        ? "bg-[#4e0eff]"
                                        : ""
                                }`}
                                key={avatar}
                            >
                                <img
                                    /* Aca iría el PF + vos sabes  */
                                    src={APIREST + "/files/" + avatar}
                                    alt="avatar"
                                    key={avatar}
                                    className="h-[6rem] cursor-pointer "
                                    onClick={() => setSelectedAvatar(index)}
                                />
                            </div>
                        );
                    })}
                </div>
                <button
                    onClick={setProfilePicture}
                    className="submit-btn bg-[#4e0eff] text-white py-4 px-8 border-none font-bold cursor-pointer rounded-[0.4rem] text-[1rem] uppercase hover:bg-[#4e0eff] "
                >
                    Establece una Foto de Perfil
                </button>
                <ToastContainer />
            </div>
        </>
    );
};

export default SetAvatar;
