import React from "react";
import CustomizeTheme from "./CustomizeTheme";
import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

const Main = () => {
    return (
        /* top-[5.4rem]  */
        <div className="main relative ">
            {/* w-[80%] mx-auto flex justify-between items-center  */}
            {/* grid-cols-[0_auto_5rem] */}
            <div className="container grid-cols-[3rem_auto_0] 992:grid-cols-[5rem_auto_30vw] gap-4 w-[96%] 680:w-[80%] mx-auto grid 1200:grid-cols-[18vw_auto_20vw] 1200:gap-x-[2rem] relative">
                <Left />
                <Middle />
                <Right />
                {/* <CustomizeTheme /> */}
            </div>
        </div>
    );
};

export default Main;
