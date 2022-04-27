import React from "react";
import Navbar from "../components/home/Navbar";
import Main from "../components/home/Main";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home2 = () => {
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();
    /* 
    borderRadius: rounded-[2rem]  rounded-[1rem] 
    btnPadding: py-[0.6rem] px-[2rem] 
    searchPadding: py-[0.6rem] px-[1rem] 
    cardPadding: rounded-[1rem]
    */
    return (
        /* min-h-screen */
        /*  bg-hLight overflow-x-hidden text-hDark */
        /* bg-hLight overflow-x-hidden text-hDark min-h-screen */
        /* overflow-x-hidden esta wea me rompia el sticky wotofok */
        <div className="bg-hLight  text-hDark min-h-screen">
            {auth.logged && <Navbar />}
            {auth.logged && <Main />}
        </div>
    );
};

export default Home2;
