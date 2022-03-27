/* import { Users } from "../../dummyData";
import Online from "../online/Online"; */
import { Link } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import { Users } from "../dummyData";
import Online from "./Online";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer flex items-center">
          <img
            className="birthdayImg w-10 h-10 mr-3"
            /* estas no les hace un src dinamico porque son una imagen static */
            src="/assets/gift.png"
            alt=""
          />
          <span className="birthdayText font-light text-[15px]">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img
          className="rightbarAd w-full rounded-xl my-8  mx-0"
          src="assets/ad.png"
          alt=""
        />
        <h4 className="rightbarTitle mb-5 font-bold text-xl">Online Friend</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {/*   {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )} */}
        <h4 className="rightbarTitle text-xl font-medium mb-3 ml-11">
          User information
        </h4>
        <div className="rightbarInfo mb-8 ml-11">
          <div className="rightbarInfoItem mb-3">
            <span className="rightbarInfoKey mr-1">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem mb-3">
            <span className="rightbarInfoKey mr-1">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem mb-3">
            <span className="rightbarInfoKey  mr-1 font-medium text-[#555]">
              Relationship:
            </span>
            <span className="rightbarInfoValue font-light">
              {/* esta lógica esta mal */}
              {user.relationship === 1
                ? "Single"
                : user.relationship === 1
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle text-xl font-medium mb-3 ml-11">
          User friends
        </h4>
        {/* flex flex-wrap justify-between */}
        {/* validación de 12 sino me rompe la ui */}
        <div className="rightbarFollowings mb-3 grid grid-cols-3 justify-items-center">
          <Link to={"/profile/"} style={{ textDecoration: "none" }}>
            <div className="rightbarFollowing flex flex-col mb-5 cursor-pointer">
              <img
                src={PF + "/person/1.jpeg"}
                alt=""
                className="rightbarFollowingImg w-[100px] h-[100px] object-cover rounded-md"
              />
              <span className="rightbarFollowingName">123456789012</span>
            </div>
          </Link>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar hidden md:block flex-[3.5]">
      <div className="rightbarWrapper pt-5 pr-5 pb-0 pl-0">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
