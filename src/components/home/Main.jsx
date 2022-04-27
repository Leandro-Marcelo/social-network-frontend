import React from "react";
import CustomizeTheme from "./CustomizeTheme";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

const Main = ({ name, profileId }) => {
    return (
        /* container grid-cols-[3rem_auto_0] 992:grid-cols-[5rem_auto_30vw] gap-4 w-[96%] 680:w-[80%] mx-auto grid 1200:grid-cols-[18vw_auto_20vw] 1200:gap-x-[2rem] relative mt-[5.4rem] 1450:grid-cols-[16vw_auto_18vw] */
        <div className="container grid-cols-[3rem_auto_0] 992:grid-cols-[5rem_auto_30vw] gap-4 w-[96%] 680:w-[80%] mx-auto grid 1200:grid-cols-[18vw_auto_20vw] 1200:gap-x-[2rem] relative  1450:grid-cols-[16vw_auto_18vw]">
            <Left />
            <Middle name={name} profileId={profileId} />
            {name ? <div></div> : <Right />}
            {/* <CustomizeTheme /> */}
        </div>
    );
};

export default Main;
