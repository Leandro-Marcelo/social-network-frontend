import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CancelIcon from "@mui/icons-material/Cancel";
import profile1 from "../../assets/Home/images/profile-1.jpg";
/* pendiente */
/* import CancelIcon from "@mui/icons-material/Cancel"; */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../features/post/postSlice";
import { Link } from "react-router-dom";

export default function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    /* pendiente */
    /* const [file, setFile] = useState(null); */

    /* Otra forma de registrarse sería hacer todo en el evento sign in / submit, es decir, agarrar recien los datos ya que probablemente son los finales y crearlo, pero la ventaja de que esten controlados es que puedo hacer validaciones */
    const initialState = {
        desc: "",
        /* null */
        img: false,
    };

    const [credentials, setCredentials] = useState(initialState);
    const handleSubmit = async () => {
        //como chota puedo saber que tiene dentro el formData este xd
        const newPost = new FormData();
        newPost.append("userId", auth.user._id);
        newPost.append("desc", credentials.desc);
        newPost.append("img", credentials.img);
        /* console.log(currentUserId._id, credentials.desc, credentials.img); *
        /* tendría que validar que todos tengan un nombre o me rompe el backend xd */
        const userData = {
            _id: auth.user._id,
            name: auth.user.name,
            img: auth.user.img ? auth.user.img : "/files/noAvatar.png",
        };
        dispatch(createPost({ newPost, userData }));
        setCredentials(initialState);
    };

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleChangeFile = (img) => {
        setCredentials({
            ...credentials,
            img: img,
        });
    };
    return (
        <div className="share w-full  rounded-[1rem] shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)] bg-[white] mt-4">
            <div className="shareWrapper py-3 px-3">
                <div className="shareTop flex items-center">
                    <form className="create-post w-full flex items-center justify-between mt-4 bg-hWhite py-[0.4rem] px-4 rounded-[2rem]">
                        <Link to={`/profile/${auth.user.name}`}>
                            <img
                                className="shareProfileImg w-12 h-12 rounded-[50%] object-cover mr-2"
                                src={profile1}
                                alt="person1"
                            />
                        </Link>
                        <input
                            type="text"
                            placeholder="Crea un Post"
                            name="desc"
                            className="w-full ml-4 bg-[transparent] text-hDark mr-4 outline-none"
                            value={credentials.desc}
                            onChange={handleChange}
                        />
                    </form>
                </div>
                {/*  <hr className="shareHr mx-5 my-5" /> */}
                <div className="flex justify-between items-center bg-hLight py-[0.1rem] mx-5 my-5 rounded-[1rem]"></div>
                {credentials.img && (
                    <div className="shareImgContainer pt-0 pr-5 pb-3 pl-5 relative">
                        <img
                            /* w-[486px] h-[286px] */
                            className="shareImg object-cover w-[286px] h-[286px] mx-auto"
                            src={URL.createObjectURL(credentials.img)}
                            alt="shareImg"
                        />
                        <div
                            onClick={() =>
                                setCredentials({
                                    ...credentials,
                                    img: false,
                                })
                            }
                            className="absolute top-0 right-[20px] cursor-pointer"
                        >
                            <CancelIcon className="shareCancelImg text-hPrimary" />
                        </div>
                    </div>
                )}
                <div className="shareBottom flex items-center justify-between">
                    <div className="shareOptions flex ml-5">
                        <label
                            htmlFor="img"
                            className="file shareOption flex items-center mr-4 cursor-pointer"
                        >
                            <PermMediaIcon className="shareIcon mr-1 text-[tomato]" />

                            <span className="hidden sm:inline-block shareOptionText text-[14px] font-medium">
                                Photo
                            </span>
                            <input
                                className="hidden"
                                id="img"
                                name="img"
                                type="file"
                                onChange={(e) =>
                                    handleChangeFile(e.target.files[0])
                                }
                            />
                        </label>
                        <div className="shareOption flex items-center mr-4 ">
                            <LabelIcon
                                htmlColor="blue"
                                className="shareIcon mr-1 text-[blue]"
                            />
                            <span className="hidden sm:inline-block shareOptionText text-[14px] font-medium">
                                Tag
                            </span>
                        </div>
                        <div className="shareOption flex items-center mr-4 ">
                            <RoomIcon
                                htmlColor="green"
                                className="shareIcon mr-1 text-[green]"
                            />
                            <span className="hidden sm:inline-block shareOptionText text-[14px] font-medium">
                                Location
                            </span>
                        </div>
                        <div className="shareOption flex items-center mr-4 ">
                            <EmojiEmotionsIcon className="shareIcon mr-1 text-[goldenrod]" />
                            <span className="hidden sm:inline-block shareOptionText text-[14px] font-medium">
                                Feelings
                            </span>
                        </div>
                    </div>
                    <button
                        className="shareButton flex py-[0.4rem] px-[0.7rem] font-medium rounded-[2rem] cursor-pointer text-[0.9rem] bg-hPrimary text-[white] transition-btn hover:opacity-80 mr-5 1450:py-[0.6rem] 1450:px-[1.3rem]"
                        onClick={handleSubmit}
                    >
                        Share
                    </button>
                </div>
            </div>
        </div>
    );
}
