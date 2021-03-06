import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import profile1 from "../../assets/Home/images/profile-1.jpg";
import { useSelector } from "react-redux";

const Navbar = () => {
    const auth = useSelector((state) => state.auth);
    const APIREST = process.env.REACT_APP_APIREST;
    /* 
    borderRadius: rounded-[2rem]  
    cardBorderRadius: rounded-[1rem] 
    btnPadding: py-[0.6rem] px-[2rem] 
    searchPadding: py-[0.6rem] px-[1rem] 
    cardPadding: p-4
    sticky-top-left: 5.4rem
    sticky-top-right: -18rem
    */
    return (
        /* bg-hWhite */
        <div className="Navbar w-full bg-hWhite py-[0.7rem] fixed top-0 z-10">
            {/* 992:w-[96%] */}
            <div className="container w-[92%] 680:w-[80%] mx-auto flex justify-between items-center">
                <h2 className="log">Lean Social</h2>
                <div className="search-bar 992:block  bg-hLight rounded-[2rem] py-[0.6rem] px-[1rem]">
                    <SearchIcon className="text-hGray" />
                    <input
                        type="search"
                        placeholder="Search osakdoa"
                        className="bg-[transparent] w-[30vw] ml-[1rem] text-[0.9rem] text-hDark placeholder:text-hGray outline-none border-none"
                    />
                </div>
                <div className="create flex items-center gap-[2rem]">
                    <div className="profile-picture w-[2.7rem] rounded-[50%] overflow-hidden ">
                        {/* aspect-ratio 1/1 */}
                        <img
                            src={
                                auth.user.img
                                    ? APIREST + auth.user.img
                                    : APIREST + "/files/noAvatar.png"
                            }
                            alt="profile1"
                            className="block w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
