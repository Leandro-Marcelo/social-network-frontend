import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";

export default function Share() {
  return (
    <div className="share w-full h-[170px] rounded-xl shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)]">
      <div className="shareWrapper py-3 px-3">
        <div className="shareTop flex items-center">
          <img
            className="shareProfileImg w-12 h-12 rounded-[50%] object-cover mr-2"
            src="/assets/person/1.jpeg"
            alt="person1"
          />

          <input
            placeholder={"What's in your mind Lean?"}
            className="shareInput border-none w-[80%] focus:outline-none  text-[15px]"
          />
        </div>
        <hr className="shareHr mx-5 my-5" />
        {/* 
        <div className="shareImgContainer">
          <img className="shareImg" src="" alt="" />
          <Cancel className="shareCancelImg" />
        </div> */}

        <form className="shareBottom flex items-center justify-between">
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
              {/* <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
              /> */}
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
