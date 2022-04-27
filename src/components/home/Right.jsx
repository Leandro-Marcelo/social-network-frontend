import React, { useState } from "react";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import SearchIcon from "@mui/icons-material/Search";
import profile1 from "../../assets/Home/images/profile-1.jpg";
const Right = () => {
    const [active, setActive] = useState(false);

    return (
        /* top-[-18rem]  */
        /* hidden 992:block right h-max sticky top-[5.4rem] bottom-0 */
        <div className="right hidden 992:block  h-max sticky top-[5.4rem]">
            <div className="messages bg-hWhite rounded-[1rem] p-4">
                <div className="heading flex items-center justify-between mb-4">
                    <h4>Messages</h4>
                    <ModeEditOutlinedIcon className="text-[1.4rem] text-[black]" />
                </div>
                {/* ******************* SEARCH BAR ************* */}
                <div className="search-bar flex mb-4 bg-hLight rounded-[2rem] py-[0.6rem] px-[1rem] ">
                    <SearchIcon className="text-[black]" />
                    <input
                        type="search"
                        placeholder="Search messages"
                        /* w-[30vw] */
                        className="w-[30vw] ml-4 text-[0.9rem] text-hDark bg-[transparent] outline-none"
                    />
                </div>
                {/* ******************* MESSAGE CATEGORY ************* */}
                <div className="category flex justify-between mb-4">
                    <h6
                        className={`w-full text-center border-b-4 border-solid ${
                            active ? "border-hDark" : "border-hLight"
                        } pb-[0.5rem] text-[0.85rem]`}
                    >
                        Primary
                    </h6>
                    <h6
                        className={`w-full text-center border-b-4 border-solid border-hLight pb-[0.5rem] text-[0.85rem]`}
                    >
                        General
                    </h6>
                    <h6
                        className={`w-full text-center border-b-4 border-solid border-hLight pb-[0.5rem] text-[0.85rem]`}
                    >
                        Request
                    </h6>
                </div>
                {/* ******************* MESSAGE  ************* */}
                <div className="message flex gap-4 mb-4 items-start">
                    <div className="profile-picture w-[2.7rem] rounded-[50%] relative visible">
                        {/* aspect-ratio 1/1 */}
                        <img
                            src={profile1}
                            alt="profile1"
                            className="block w-full rounded-[50%]"
                        />
                        <div
                            className={`${
                                active
                                    ? "w-[0.8rem] h-[0.8rem] rounded-[50%] border-[3px] border-solid border-hWhite bg-hSuccess absolute bottom-0 right-0"
                                    : ""
                            }`}
                        ></div>
                    </div>
                    <div className="message-body">
                        <h5>Edem Quist</h5>
                        <p className="text-hGray text-[0.8rem] font-bold">
                            Just woke up bruh
                        </p>
                    </div>
                </div>
                {/* ******************* END  OF MESSAGE  ************* */}
            </div>
            {/* borderRadius: rounded-[2rem] cardBorderRadius: rounded-[1rem]
            btnPadding: py-[0.6rem] px-[2rem] searchPadding: py-[0.6rem]
            px-[1rem] cardPadding: p-4 sticky-top-left: 5.4rem sticky-top-right:
            -18rem */}
            {/* ******************* MESSAGE CATEGORY ************* */}
            <div className="friend-requests mt-4 ">
                <h4 className="text-hGray my-4">Request</h4>
                <div className="request bg-hWhite p-4 rounded-[1rem] overflow-hidden mb-[0.7rem]">
                    <div className="info flex gap-4 mb-4">
                        <div className="profile-picture w-[2.7rem] rounded-[50%] overflow-hidden ">
                            {/* aspect-ratio 1/1 */}
                            <img
                                src={profile1}
                                alt="profile1"
                                className="block w-full"
                            />
                        </div>
                        <div>
                            <h5>Hajia Bintu</h5>
                            <p className="text-hGray">8 mutual friends</p>
                        </div>
                    </div>
                    <div className="action flex gap-4">
                        <button
                            className="btn bg-hPrimary "
                            onClick={() => setActive(!active)}
                        >
                            Accept
                        </button>
                        <button className="btn  bg-hLight">Decline</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Right;
