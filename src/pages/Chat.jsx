import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
/* import { io } from "socket.io-client"; */
/* import { allUsersRoute, host } from "../utils/APIRoutes"; */
import ChatContainer from "../components/chat/ChatContainer";
import Contacts from "../components/chat/Contacts";
import Welcome from "../components/chat/Welcome";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { getFriends } from "../features/user/userSlice";

export default function Chat() {
    const dispatch = useDispatch();
    const APIREST = process.env.REACT_APP_APIREST;
    const socket = useRef();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getFriends(auth.user._id));
    }, [auth]);

    const [currentChat, setCurrentChat] = useState(undefined);

    useEffect(() => {
        if (auth.user) {
            socket.current = io(APIREST);
            socket.current.emit("add-user", auth.user._id);
        }
    }, [auth.user]);

    useEffect(() => {
        if (auth.logged === false) navigate("/login");
    }, [auth]);

    const handleChatChange = (chat) => {
        setCurrentChat(chat);
    };

    return (
        <>
            {/* me ahorro traer a los amigos porque cada vez que recargo la página, lo lleva a home y en home es donde pide los amigos, entonces almomento de clickear en chatear pues al estar utilizando react router, es decir, el Link, no se recarga la página por lo que seguimos conservando los usuarios */}
            {auth.logged && (
                <div className="Container h-screen w-screen flex flex-col justify-center gap-4 items-center bg-[#131324] ">
                    <div className="container h-[85vh] w-[85vw] bg-[#00000076] grid grid-cols-[25%_75%] md:grid-cols-[35%_65%]">
                        <Contacts changeChat={handleChatChange} />
                        {currentChat === undefined ? (
                            <Welcome />
                        ) : (
                            <ChatContainer
                                socket={socket}
                                currentChat={currentChat}
                            />
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
