import React from "react";
/* import Logo from "..logo.png"; */
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="topbarContainer h-[50px] w-full bg-[#1877f2] flex items-center sticky top-0">
      <div className="topbarLeft flex-[2] md:flex-[3] ">
        <span className="cursor-pointer font-semibold ml-5 text-white text-xs md:text-2xl ">
          Leandro
        </span>
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
            Homepage
          </span>
          <span className="topbarLink mr-[10px] text-xs md:text-xl cursor-pointer">
            Timeline
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
        <img
          src="/assets/person/1.jpeg"
          alt="person1"
          className="topbarImg w-8 h-8 rounded-[50%] object-cover cursor-pointer mr-4 md:mr-2"
        />
      </div>
    </div>
  );
};

export default Topbar;

/* 

<div className="topbarContainer h-[50px] w-full bg-[#1877f2] flex items-center sticky top-0">
      <div className="topbarLeft flex-[3] ">
        <span className="cursor-pointer font-semibold ml-5 text-white text-2xl">
          Lean2785
        </span>
      </div>
      <div className="topbarCenter flex-[5] ">
        <div className="searchBar w-full h-[30px] bg-white rounded-[30px] flex items-center">
          <Search className="searchIcon text-xl ml-[10px]" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput border-none w-[70%] focus:outline-none"
          />
        </div>
      </div>
      <div className="topbarRight flex-[4] flex items-center justify-around text-white">
        <div className="topbarLinks">
          <span className="topbarLink mr-[10px] text-[14px] cursor-pointer">
            Homepage
          </span>
          <span className="topbarLink mr-[10px] text-[14px] cursor-pointer">
            Timeline
          </span>
        </div>
        <div className="topbarIcons flex ">
          <div className="topbarIconsItem mr-6 cursor-pointer relative">
            <Person />
            <span className="topbarIconBadge w-4 h-4 bg-red-600 rounded-[50%] text-white absolute top-[-5px] right-[-5px] flex justify-center items-center text-xs">
              1
            </span>
          </div>
          <div className="topbarIconsItem mr-6 cursor-pointer relative">
            <Chat />
            <span className="topbarIconBadge w-4 h-4 bg-red-600 rounded-[50%] text-white absolute top-[-5px] right-[-5px] flex justify-center items-center text-xs">
              2
            </span>
          </div>
          <div className="topbarIconsItem mr-6 cursor-pointer relative">
            <Notifications />
            <span className="topbarIconBadge w-4 h-4 bg-red-600 rounded-[50%] text-white absolute top-[-5px] right-[-5px] flex justify-center items-center text-xs">
              1
            </span>
          </div>
        </div>
        <img
          src="/assets/person/1.jpeg"
          alt="person1"
          className="topbarImg w-8 h-8 rounded-[50%] object-cover cursor-pointer"
        />
      </div>
    </div>









*/
