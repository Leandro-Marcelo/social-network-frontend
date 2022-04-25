import React from "react";
import Navbar from "../components/home/Navbar";
import Main from "../components/home/Main";

const Home2 = () => {
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
            <Navbar />
            <Main />
        </div>
    );
};

export default Home2;
