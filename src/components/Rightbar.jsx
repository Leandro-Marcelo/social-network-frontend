/* import { Users } from "../../dummyData";
import Online from "../online/Online"; */
import { Link } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";

export default function Rightbar({ user }) {
  /* const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  }; */

  /* const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 1
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  }; */
  return (
    <div className="rightbar hidden md:block flex-[3.5]">
      <div className="rightbarWrapper pt-5 pr-5 pb-0 pl-0">
        {/* {user ? <ProfileRightbar /> : <HomeRightbar />} */}
        <div className="birthdayContainer flex items-center">
          <img
            className="birthdayImg w-10 h-10 mr-3"
            src="assets/gift.png"
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
          <li className="rightbarFriend flex items-center mb-4">
            <div className="rightbarProfileImgContainer mr-3 relative ">
              <img
                className="rightbarProfileImg w-10 h-10 rounded-[50%] object-cover"
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className="rightbarOnline w-3 h-3 rounded-[50%] bg-[limegreen] absolute top-[-2px] right-0 border-2 border-white"></span>
            </div>
            <span className="rightbarUsername font-medium">Alexis Yucra</span>
          </li>
          <li className="rightbarFriend flex items-center mb-4">
            <div className="rightbarProfileImgContainer mr-3 relative ">
              <img
                className="rightbarProfileImg w-10 h-10 rounded-[50%] object-cover"
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className="rightbarOnline w-3 h-3 rounded-[50%] bg-[limegreen] absolute top-[-2px] right-0 border-2 border-white"></span>
            </div>
            <span className="rightbarUsername font-medium">Alexis Yucra</span>
          </li>
          <li className="rightbarFriend flex items-center mb-4">
            <div className="rightbarProfileImgContainer mr-3 relative ">
              <img
                className="rightbarProfileImg w-10 h-10 rounded-[50%] object-cover"
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className="rightbarOnline w-3 h-3 rounded-[50%] bg-[limegreen] absolute top-[-2px] right-0 border-2 border-white"></span>
            </div>
            <span className="rightbarUsername font-medium">Alexis Yucra</span>
          </li>
          <li className="rightbarFriend flex items-center mb-4">
            <div className="rightbarProfileImgContainer mr-3 relative ">
              <img
                className="rightbarProfileImg w-10 h-10 rounded-[50%] object-cover"
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className="rightbarOnline w-3 h-3 rounded-[50%] bg-[limegreen] absolute top-[-2px] right-0 border-2 border-white"></span>
            </div>
            <span className="rightbarUsername font-medium">Alexis Yucra</span>
          </li>
          <li className="rightbarFriend flex items-center mb-4">
            <div className="rightbarProfileImgContainer mr-3 relative ">
              <img
                className="rightbarProfileImg w-10 h-10 rounded-[50%] object-cover"
                src="/assets/person/3.jpeg"
                alt=""
              />
              <span className="rightbarOnline w-3 h-3 rounded-[50%] bg-[limegreen] absolute top-[-2px] right-0 border-2 border-white"></span>
            </div>
            <span className="rightbarUsername font-medium">Alexis Yucra</span>
          </li>
        </ul>

        {/* <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul> */}
      </div>
    </div>
  );
}
