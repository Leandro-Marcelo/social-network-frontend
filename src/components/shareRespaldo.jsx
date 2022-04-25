import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import RoomIcon from "@mui/icons-material/Room";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CancelIcon from "@mui/icons-material/Cancel";
import profile1 from "../assets/Home/images/profile-1.jpg";
/* pendiente */
/* import CancelIcon from "@mui/icons-material/Cancel"; */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../features/post/postSlice";
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
        <div className="share w-full  rounded-xl shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)]">
            <div className="shareWrapper py-3 px-3">
                <div className="shareTop flex items-center">
                    <Link to={`/profile/${auth.user.name}`}>
                        <img
                            className="shareProfileImg w-12 h-12 rounded-[50%] object-cover mr-2"
                            /*  src={
                                auth.user.img
                                    ? PF + auth.user.img
                                    : PF + "/files/noAvatar.png"
                            } */
                            src={profile1}
                            alt="person1"
                        />
                    </Link>

                    {/* <input
                        placeholder={`What's in your mind ${
                            auth.user.name ? auth.user.username : "invitado"
                        }?`}
                        className="shareInput border-none w-[80%] focus:outline-none  text-[15px]"
                        value={credentials.desc}
                        name={"desc"}
                        onChange={handleChange}
                    /> */}
                    <form className="create-post w-full flex items-center justify-between mt-4 bg-hWhite py-[0.4rem] px-4 rounded-[2rem]">
                        <div className="profile-picture w-[2.7rem] rounded-[50%] overflow-hidden">
                            <img
                                src={profile1}
                                alt=""
                                className="block w-full"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="dsoakdsao"
                            className="w-full ml-4 bg-[transparent] text-hDark mr-4 outline-none"
                        />
                        <input
                            type="submit"
                            value={"Post"}
                            className="btn bg-hPrimary text-white"
                        />
                    </form>
                </div>
                <hr className="shareHr mx-5 my-5" />

                {credentials.img && (
                    /* pt-0 pr-5 pb-3 pl-5 relative */
                    <div className="shareImgContainer pt-0 pr-5 pb-3 pl-5 relative ">
                        <img
                            /* shareImg w-full object-cover */
                            className="shareImg object-cover w-[286px] h-[286px]"
                            //   coomo hace esto xd
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
                            <CancelIcon className="shareCancelImg" />
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
                            {/* Photo or Video decía */}
                            <span className="hidden sm:inline-block shareOptionText text-[14px] font-medium">
                                Photo
                            </span>
                            <input
                                /* style={{ display: "none" }} */
                                /* puedo hacer que en determinado tamaño depantalla ponga photo and videos */
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
                        className="shareButton border-none px-2 py-2 text-xs sm:text-[16px]  rounded-md bg-hPrimary font-medium mr-5 cursor-pointer text-white"
                        onClick={handleSubmit}
                    >
                        Share
                    </button>
                </div>
            </div>
        </div>
    );
}
