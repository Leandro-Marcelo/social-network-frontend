import React, { useState, useEffect, useRef } from "react";
import ChatInput from "./ChatInput";
import Logout from "./Logout";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../features/chat/chatsSlice";
import { aPost } from "../../axios";
import { v4 as uuidv4 } from "uuid";
import { DateTime } from "luxon";
export default function ChatContainer({ socket, currentChat }) {
    const APIREST = process.env.REACT_APP_APIREST;
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const scrollRef = useRef();
    const [messages, setMessages] = useState([]);
    const [arrivalMessage, setArrivalMessage] = useState(null);

    useEffect(() => {
        const getMessages = async () => {
            const response = await aPost("/messages/getAllMessages/", {
                from: auth.user._id,
                to: currentChat._id,
            });
            setMessages(response.data);
        };

        getMessages();
    }, [currentChat]);

    const handleSendMsg = async (msg) => {
        const response = await aPost("/messages/addMessage/", {
            from: auth.user._id,
            to: currentChat._id,
            message: msg,
        });

        console.log(response.data);

        socket.current.emit("send-msg", {
            to: currentChat._id,
            from: auth.user._id,
            message: msg,
            _id: response.data._id,
            createdAt: response.data.createdAt,
        });

        /*  dispatch(
            addMessage({
                from: auth.user._id,
                to: currentChat._id,
                message: msg,
            })
        ); */

        const msgs = [...messages];
        msgs.push({
            fromSelf: true,
            message: msg,
            _id: response.data._id,
            createdAt: response.data.createdAt,
        });
        setMessages(msgs);
    };

    useEffect(() => {
        console.log(`recibo el mensaje?`);
        if (socket.current) {
            socket.current.on("msg-recieve", (data) => {
                const _id = uuidv4();
                console.log(`que recibo?`, data);
                setArrivalMessage({
                    fromSelf: false,
                    message: data.message,
                    _id: data._id,
                    createdAt: data.createdAt,
                });
            });
        }
    }, []);

    useEffect(() => {
        console.log(`te eejecutas?`);
        if (arrivalMessage) {
            setMessages([...messages, arrivalMessage]);
        }
    }, [arrivalMessage]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="grid grid-rows-[10%_80%_10%] gap-[0.1rem] overflow-hidden md:grid-rows-[15%_70%_15%]">
            <div className="chat-header flex justify-between items-center px-8">
                <div className="user-details flex items-center gap-[1rem]">
                    <div className="avatar ">
                        <img
                            src={
                                currentChat.img
                                    ? APIREST + currentChat.img
                                    : APIREST + "/files/noAvatar.png"
                            }
                            alt=""
                            className="h-[3rem]"
                        />
                    </div>
                    <div className="username">
                        <h3 className="text-white">{currentChat.name}</h3>
                    </div>
                </div>
                <Logout />
            </div>

            <div className="chat-messages py-4 px-2 flex flex-col gap-[1rem] overflow-auto">
                {messages.map((message) => {
                    console.log(message);
                    return (
                        <div key={message._id} ref={scrollRef}>
                            <div
                                className={`message flex items-center  ${
                                    message.fromSelf
                                        ? "justify-end"
                                        : "justify-start"
                                }`}
                            >
                                <div className="content max-w-[40%] p-4 text-[1.1rem] rounded-[1rem] text-[#d1d1d1] md:max-w-[70%]">
                                    <p>{message.message}</p>
                                    <p className="text-right">
                                        {new Date(
                                            message.createdAt
                                        ).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <ChatInput handleSendMsg={handleSendMsg} />
        </div>
    );
}
