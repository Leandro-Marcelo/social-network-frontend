import {
    PermMedia,
    Label,
    Room,
    EmojiEmotions,
    Cancel,
} from "@material-ui/icons";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { aPost } from "../axios";

export default function Share({ updatedPost }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const user = useSelector((state) => state.user);
    const loggedUser = user.loggedUser;
    /* pendiente */
    /* const [file, setFile] = useState(null); */

    /* Otra forma de registrarse sería hacer todo en el evento sign in / submit, es decir, agarrar recien los datos ya que probablemente son los finales y crearlo, pero la ventaja de que esten controlados es que puedo hacer validaciones */
    const initialState = {
        desc: "",
        img: null,
    };

    const [credentials, setCredentials] = useState(initialState);
    const handleSubmit = async () => {
        //como chota puedo saber que tiene dentro el formData este xd
        const newPost = new FormData();
        newPost.append("userId", loggedUser._id);
        newPost.append("desc", credentials.desc);
        newPost.append("img", credentials.img);
        console.log(loggedUser._id, credentials.desc, credentials.img);
        await aPost(PF + "/api/posts/", newPost);
        updatedPost();
        /* dispatch(signUp(user)); */

        //redireccionarlo
        //handleClose();
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

    /*  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: loggedUser._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await aPost("api/upload", data);
      } catch (err) {}
      setFile(!file);
    }
    try {
     // podríamos crear un posts context y de ahí actualizar el estado del post
      await aPost(`api/posts`, newPost);
      updatedPost();
      desc.current.value = "";
    } catch (err) {
      console.log(err);
    }
  }; */
    return (
        <div className="share w-full  rounded-xl shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)]">
            <div className="shareWrapper py-3 px-3">
                <div className="shareTop flex items-center">
                    <img
                        className="shareProfileImg w-12 h-12 rounded-[50%] object-cover mr-2"
                        src={
                            loggedUser?.profilePicture ||
                            PF + "/files/noAvatar.png"
                        }
                        alt="person1"
                    />

                    <input
                        placeholder={`What's in your mind ${loggedUser?.username}?`}
                        className="shareInput border-none w-[80%] focus:outline-none  text-[15px]"
                        value={credentials.desc}
                        name={"desc"}
                        onChange={handleChange}
                    />
                </div>
                <hr className="shareHr mx-5 my-5" />

                {/* {file && (
                    <div className="shareImgContainer pt-0 pr-5 pb-3 pl-5 relative">
                        <img
                            className="shareImg w-full object-cover"
                         //   coomo hace esto xd
                            src={URL.createObjectURL(file)}
                            alt="shareImg"
                        />
                        <div
                            onClick={() => setFile(null)}
                            className="absolute top-0 right-[20px] cursor-pointer"
                        >
                            <Cancel className="shareCancelImg" />
                        </div>
                    </div>
                )} */}
                <div className="shareBottom flex items-center justify-between">
                    <div className="shareOptions flex ml-5">
                        <label
                            htmlFor="img"
                            className="file shareOption flex items-center mr-4 cursor-pointer"
                        >
                            <PermMedia
                                htmlColor="tomato"
                                className="shareIcon mr-1"
                            />
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
                        <div className="shareOption flex items-center mr-4 cursor-pointer">
                            <Label
                                htmlColor="blue"
                                className="shareIcon mr-1"
                            />
                            <span className="hidden sm:inline-block shareOptionText text-[14px] font-medium">
                                Tag
                            </span>
                        </div>
                        <div className="shareOption flex items-center mr-4 cursor-pointer">
                            <Room
                                htmlColor="green"
                                className="shareIcon mr-1"
                            />
                            <span className="hidden sm:inline-block shareOptionText text-[14px] font-medium">
                                Location
                            </span>
                        </div>
                        <div className="shareOption flex items-center mr-4 cursor-pointer">
                            <EmojiEmotions
                                htmlColor="goldenrod"
                                className="shareIcon mr-1"
                            />
                            <span className="hidden sm:inline-block shareOptionText text-[14px] font-medium">
                                Feelings
                            </span>
                        </div>
                    </div>
                    <button
                        className="shareButton border-none px-2 py-2 text-xs sm:text-[16px]  rounded-md bg-green-600 font-medium mr-5 cursor-pointer text-white"
                        onClick={handleSubmit}
                    >
                        Share
                    </button>
                </div>
            </div>
        </div>
    );
}
