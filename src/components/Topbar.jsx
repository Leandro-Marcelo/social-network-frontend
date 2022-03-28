import React from "react";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Topbar = () => {
  const user = useSelector((state) => state.user);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(`también se renderiza?`);
  return (
    <div className="topbarContainer h-[50px] w-full bg-[#1877f2] flex items-center sticky top-0 z-50">
      <div className="topbarLeft flex-[2] md:flex-[3] ">
        <Link to={"/home"}>
          <span className="cursor-pointer font-semibold ml-5 text-white text-xs md:text-2xl ">
            Home
          </span>
        </Link>
      </div>
      <div className="topbarCenter flex-[3] md:flex-[5] ">
        <div className="searchBar w-[80%] md:w-full md:h-[30px] bg-white rounded-[30px] flex items-center ">
          <Search className="searchIcon text-xl ml-[10px] md:mr-[10px]" />
          <input
            /* Search for friend, post or video */
            placeholder="Search..."
            className="searchInput border-none w-[70%] text-xs md:text-xl focus:outline-none"
          />
        </div>
      </div>
      <div className="topbarRight flex-[4] flex items-center justify-around text-white">
        <div className="topbarLinks">
          <span className="topbarLink mr-[10px] text-xs md:text-xl cursor-pointer ">
            {user.logged ? "Logout" : ""}
          </span>
          <span className="topbarLink mr-[10px] text-xs md:text-xl cursor-pointer">
            Sign Up
          </span>
        </div>
        <div className="topbarIcons flex ">
          <div className="hidden md:block topbarIconsItem mr-6 cursor-pointer relative">
            <Person />
            <span className="topbarIconBadge w-4 h-4 bg-red-600 rounded-[50%] text-white absolute top-[-5px] right-[-5px] flex justify-center items-center text-xs">
              1
            </span>
          </div>
          <div className="hidden md:block topbarIconsItem mr-6 cursor-pointer relative">
            <Chat />
            <span className="topbarIconBadge w-4 h-4 bg-red-600 rounded-[50%] text-white absolute top-[-5px] right-[-5px] flex justify-center items-center text-xs">
              2
            </span>
          </div>
          <div className="hidden md:block topbarIconsItem mr-6 cursor-pointer relative">
            <Notifications />
            <span className="topbarIconBadge w-4 h-4 bg-red-600 rounded-[50%] text-white absolute top-[-5px] right-[-5px] flex justify-center items-center text-xs">
              1
            </span>
          </div>
        </div>
        <Link to={`/profile/${user?.loggedUser?.username}`}>
          <img
            src={
              user.loggedUser?.profilePicture
                ? user.loggedUser?.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt="person1"
            className="topbarImg w-8 h-8 rounded-[50%] object-cover cursor-pointer mr-4 md:mr-2"
          />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
