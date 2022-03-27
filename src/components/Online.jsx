export default function Online({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbarFriend flex items-center mb-4">
      <div className="rightbarProfileImgContainer mr-3 relative ">
        <img
          className="rightbarProfileImg w-10 h-10 rounded-[50%] object-cover"
          src={PF + user.profilePicture}
          alt=""
        />
        <span className="rightbarOnline w-3 h-3 rounded-[50%] bg-[limegreen] absolute top-[-2px] right-0 border-2 border-white"></span>
      </div>
      <span className="rightbarUsername font-medium">{user.username}</span>
    </li>
  );
}

/*  <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={PF + user.profilePicture}
          alt=""
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li> */
