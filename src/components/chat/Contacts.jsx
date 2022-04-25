import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/logo.svg";
import { setCurrentSelected } from "../../features/chat/chatsSlice";

export default function Contacts({ changeChat }) {
    const APIREST = process.env.REACT_APP_APIREST;
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const chats = useSelector((state) => state.chats);

    console.log(user.friendsList);

    const changeCurrentChat = (friend) => {
        dispatch(setCurrentSelected(friend._id));
        changeChat(friend);
    };

    return (
        <>
            <div className="Container grid grid-rows-[10%_75%_15%] overflow-hidden bg-[#080420]">
                <div className="brand flex items-center gap-[1rem] justify-center">
                    <img src={Logo} alt="logo" className="h-[2rem]" />
                    <h3 className="text-white uppercase">Lean</h3>
                </div>
                {/*
                  .contacts {
                    &::-webkit-scrollbar {
                      width: 0.2rem;
                      &-thumb {
                        background-color: #ffffff39;
                        width: 0.1rem;
                        border-radius: 1rem;
                      }
                    }
                  }
                */}
                <div className="contacts flex flex-col items-center overflow-auto gap-[0.8rem]">
                    {user.friendsList.map((friend, index) => {
                        return (
                            <div
                                key={friend._id}
                                className={`contact bg-[#ffffff34] min-h-[5rem] cursor-pointer w-[90%] rounded-[0.2rem] p-[0.4rem] flex gap-[1rem] items-center transition duration-500 ease-in-out ${
                                    friend._id === chats.currentSelected
                                        ? "bg-[#9a86f3]"
                                        : ""
                                }`}
                                onClick={() => changeCurrentChat(friend)}
                            >
                                <div className="avatar">
                                    <img
                                        src={APIREST + friend.img}
                                        alt=""
                                        className="h-[3rem]"
                                    />
                                </div>

                                <div className="username">
                                    <h3 className="text-white">
                                        {friend.name}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="current-user bg-[#0d0d30] flex justify-center items-center md:gap-[0.5rem]">
                    <div className="avatar" style={{ maxInlineSize: "100%" }}>
                        <img
                            src={APIREST + auth.user.img}
                            alt="avatar"
                            className=" h-[4rem]"
                        />
                    </div>
                    <div className="username text-white">
                        <h2 className="md:text-[1rem]">
                            {auth.user.name}12345
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}
