import React, { useState } from "react";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendIcon from "@mui/icons-material/Send";
import Picker from "emoji-picker-react";
import { cleanupMsg, setMsg } from "../../features/chat/chatsSlice";
import { useDispatch, useSelector } from "react-redux";
export default function ChatInput({ handleSendMsg }) {
    const dispatch = useDispatch();
    const chats = useSelector((state) => state.chats);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const handleEmojiPickerhideShow = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    console.log(chats.msg);
    const handleEmojiClick = (event, emojiObject) => {
        let message = chats.msg;
        message += emojiObject.emoji;
        dispatch(setMsg(message));
    };

    const handleChange = (e) => {
        dispatch(setMsg(e.target.value));
    };

    const sendChat = (event) => {
        event.preventDefault();
        if (chats.msg.length > 0) {
            handleSendMsg(chats.msg);
            dispatch(cleanupMsg());
        }
    };
    return (
        <div className="grid items-center grid-cols-[5% 95%] bg-[#080420] px-8 md:px-4 md:gap-[1rem]">
            <div className="button-container flex items-center text-white gap-4">
                {/* .emoji {
        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: #080420;
          width: 5px;
          &-thumb {
            background-color: #9a86f3;
          }
        }
        .emoji-categories {
          button {
            filter: contrast(0);
          }
        }
        .emoji-search {
          background-color: transparent;
          border-color: #9a86f3;
        }
        .emoji-group:before {
          background-color: #080420;
        }
      } */}
                <div className="emoji relative ">
                    <SentimentSatisfiedAltIcon
                        onClick={handleEmojiPickerhideShow}
                        className="text-[1.5rem] text-[#ffff00c8] cursor-pointer"
                    />
                    {showEmojiPicker && (
                        <Picker
                            onEmojiClick={handleEmojiClick}
                            className="absolute top-[-350px] bg-[#080420] shadow-[0_5px_10px_#9a86f3]"
                        />
                    )}
                </div>
            </div>
            <form
                className="input-container w-full rounded-[2rem] flex gap-8 bg-[#ffffff34]"
                onSubmit={(event) => sendChat(event)}
            >
                <input
                    type="text"
                    placeholder="type your message here"
                    onChange={(e) => handleChange(e)}
                    value={chats.msg}
                    className="w-[90%] h-[60%] bg-transparent text-white border-none pl-4 text-[1.2rem] focus:outline-none selection:bg-[#9a86f3]"
                />

                {/*  */}
                <button
                    type="submit"
                    className="py-[0.3rem] px-8 rounded-[2rem] flex justify-center items-center bg-[#9a86f3] border-none md:py-[0.3rem] 1rem"
                >
                    <SendIcon className="text-[1rem] text-white" />
                </button>
            </form>
        </div>
    );
}
