import React from "react";

const CustomizeTheme = () => {
    const active = true;
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
        /* 1200:grid  */
        <div className="hidden customize-theme bg-[rgba(255,255,255,0.5)] w-screen h-screen fixed top-0 left-0 z-[100] text-center place-items-center text-[0.9rem]">
            <div className="card bg-hWhite p-12 rounded-[1rem] w-1/2 ">
                <h2 className="text-[1.5rem]">Customize your view</h2>
                <p className="text-hGray text-[1rem]">
                    Manage your font size, color, and background
                </p>
                {/* **************** Font - Size*********** */}
                <div className="font-size mt-20">
                    <h4 className="text-[1rem]">Font Size</h4>
                    <div className="flex justify-between items-center bg-hLight py-[0.6rem] px-4 rounded-[1rem]">
                        <h6 className="text-[0.67rem]">Aa</h6>
                        <div className="choose-size bg-hSecondary h-[0.3rem] w-full mx-4 flex  justify-between items-center">
                            <span
                                className={`font-size-1 w-4 h-4 ${
                                    active ? "bg-hPrimary" : "bg-hSecondary"
                                } rounded-[50%] cursor-pointer `}
                            ></span>
                            <span
                                className={`font-size-2 w-4 h-4 bg-hSecondary rounded-[50%] cursor-pointer`}
                            ></span>
                            <span
                                className={`font-size-3 w-4 h-4 bg-hSecondary rounded-[50%] cursor-pointer`}
                            ></span>
                            <span
                                className={`font-size-4 w-4 h-4 bg-hSecondary rounded-[50%] cursor-pointer`}
                            ></span>
                            <span
                                className={`font-size-5 w-4 h-4 bg-hSecondary rounded-[50%] cursor-pointer`}
                            ></span>
                        </div>
                        <h3 className="text-[1.17em]">Aa</h3>
                    </div>
                </div>
                {/* **************** Primary Colors *********** */}
                <div className="color mt-8">
                    <h4 className="text-[1rem]">Color</h4>
                    <div className="choose-color bg-hLight py-[0.6rem] px-4 rounded-[1rem] flex items-center justify-between">
                        <span
                            className={`w-[2.2rem] h-[2.2rem] rounded-[50%] bg-hPrimary ${
                                active
                                    ? "border-[5px] border-solid border-[white]"
                                    : ""
                            } cursor-pointer`}
                        ></span>
                        <span
                            className={`w-[2.2rem] h-[2.2rem] rounded-[50%] bg-[hsl(152,75%,60%)] cursor-pointer`}
                        ></span>
                        <span
                            className={`w-[2.2rem] h-[2.2rem] rounded-[50%] bg-[hsl(52,75%,60%)] cursor-pointer`}
                        ></span>
                        <span
                            className={`w-[2.2rem] h-[2.2rem] rounded-[50%] bg-[hsl(352,75%,60%)] cursor-pointer`}
                        ></span>
                        <span
                            className={`w-[2.2rem] h-[2.2rem] rounded-[50%] bg-[hsl(202,75%,60%)] cursor-pointer`}
                        ></span>
                    </div>
                </div>
                {/* **************** Background Colors *********** */}
                <div className="background mt-8">
                    <h4 className="text-[1rem]">Background</h4>
                    <div className="choose-bg flex items-center justify-center gap-[1.5rem]">
                        <div
                            className={`bg-1 py-[0.6rem] px-4 w-full flex items-center text-[1rem] font-bold rounded-[0.4rem] cursor-pointer ${
                                active
                                    ? "border-2 border-solid border-hPrimary"
                                    : ""
                            } bg-[white] text-black`}
                        >
                            <span
                                className={`w-8 h-8 border-2 border-solid border-hGray rounded-[50%] mr-4`}
                            ></span>
                            <h5 className="text-[0.83em]">Light</h5>
                        </div>
                        <div
                            className={`bg-2 py-[0.6rem] px-4 w-full flex items-center text-[1rem] font-bold rounded-[0.4rem] cursor-pointer bg-[hsl(252,30%,17%)] text-[white]`}
                        >
                            <span
                                className={`w-8 h-8 border-2 border-solid border-hGray rounded-[50%] mr-4`}
                            ></span>
                            <h5 className="text-[0.83em]">Dim</h5>
                        </div>
                        <div
                            className={`bg-3 py-[0.6rem] px-4 w-full flex items-center text-[1rem] font-bold rounded-[0.4rem] cursor-pointer bg-[hsl(252,30%,10%)] text-[white]`}
                        >
                            <span
                                className={`w-8 h-8 border-2 border-solid border-hGray rounded-[50%] mr-4`}
                            ></span>
                            <h5 className="text-[0.83em]">Lights Out</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomizeTheme;
