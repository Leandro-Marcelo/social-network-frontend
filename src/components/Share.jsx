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
  const [file, setFile] = useState(null);
  const desc = useRef();
  const handleSubmit = async (e) => {
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
      /* podríamos crear un posts context y de ahí actualizar el estado del post */
      await aPost(`api/posts`, newPost);
      updatedPost();
      desc.current.value = "";
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="share w-full  rounded-xl shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)]">
      <div className="shareWrapper py-3 px-3">
        <div className="shareTop flex items-center">
          <img
            className="shareProfileImg w-12 h-12 rounded-[50%] object-cover mr-2"
            src={loggedUser?.profilePicture || PF + "person/noAvatar.png"}
            alt="person1"
          />

          <input
            placeholder={`What's in your mind ${loggedUser?.username}?`}
            className="shareInput border-none w-[80%] focus:outline-none  text-[15px]"
            ref={desc}
          />
        </div>
        <hr className="shareHr mx-5 my-5" />

        {file && (
          <div className="shareImgContainer pt-0 pr-5 pb-3 pl-5 relative">
            <img
              className="shareImg w-full object-cover"
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
        )}
        <form
          className="shareBottom flex items-center justify-between"
          onSubmit={handleSubmit}
        >
          <div className="shareOptions flex ml-5">
            <label
              htmlFor="file"
              className="shareOption flex items-center mr-4 cursor-pointer"
            >
              <PermMedia htmlColor="tomato" className="shareIcon mr-1" />
              {/* Photo or Video decía */}
              <span className="hidden sm:inline-block shareOptionText text-[14px] font-medium">
                Photo
              </span>
              <input
                /* style={{ display: "none" }} */
                /* puedo hacer que en determinado tamaño depantalla ponga photo and videos */
                className="hidden"
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                /* aquí le ponemos en el array 0 porque solo queremos agarrar un archivo y no todos */
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption flex items-center mr-4 cursor-pointer">
              <Label htmlColor="blue" className="shareIcon mr-1" />
              <span className="hidden sm:inline-block shareOptionText text-[14px] font-medium">
                Tag
              </span>
            </div>
            <div className="shareOption flex items-center mr-4 cursor-pointer">
              <Room htmlColor="green" className="shareIcon mr-1" />
              <span className="hidden sm:inline-block shareOptionText text-[14px] font-medium">
                Location
              </span>
            </div>
            <div className="shareOption flex items-center mr-4 cursor-pointer">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon mr-1" />
              <span className="hidden sm:inline-block shareOptionText text-[14px] font-medium">
                Feelings
              </span>
            </div>
          </div>
          <button
            className="shareButton border-none px-2 py-2 text-xs sm:text-[16px]  rounded-md bg-green-600 font-medium mr-5 cursor-pointer text-white"
            type="submit"
          >
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
