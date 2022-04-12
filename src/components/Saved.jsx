import React from "react";

const Saved = () => {
    return (
        <>
            {/* {userProfileData.name !== auth.user.name && (
                <button
                    className="rightbarFollowButton mt-8  m-3 border-none bg-[#1872f2] text-white rounded-md px-4 py-2 flex items-center font-semibold ml-10 cursor-pointer"
                    onClick={handleClick}
                >
                    {followed ? "Unfollow" : "Follow"}
                    {followed ? <RemoveIcon /> : <AddIcon />}
                </button>
            )} */}
            <h4 className="rightbarTitle text-xl font-medium mb-3 ml-11">
                User information
            </h4>
            <div className="rightbarInfo mb-8 ml-11">
                <div className="rightbarInfoItem mb-3">
                    <span className="rightbarInfoKey mr-1">City:</span>
                    <span className="rightbarInfoValue">
                        {/*    {userProfileData.city ? userProfileData.city : ""} */}
                    </span>
                </div>
                <div className="rightbarInfoItem mb-3">
                    <span className="rightbarInfoKey mr-1">From:</span>
                    <span className="rightbarInfoValue">
                        {/*    {userProfileData.from ? userProfileData.from : ""} */}
                    </span>
                </div>
                <div className="rightbarInfoItem mb-3">
                    <span className="rightbarInfoKey  mr-1 font-medium text-[#555]">
                        Relationship:
                    </span>
                    {/* mi mente me dijo que esta lógica estaba mal 
                        <span className="rightbarInfoValue font-light">
                            {profileUser.relationship === 1
                                ? "Single"
                                : profileUser.relationship === 1
                                ? "Married"
                                : "-"}
                        </span> */}
                </div>
            </div>
            <h4 className="rightbarTitle text-xl font-medium mb-3 ml-11">
                User friends
            </h4>
            {/* flex flex-wrap justify-between */}
            {/* validación de 12 sino me rompe la ui */}
            {/* el username no mas de 12 letras, siino me rompe la ui */}
            <div className="rightbarFollowings mb-3 grid grid-cols-3 justify-items-center text-center">
                {/* {user.friendsList &&
                        user.friendsList.map((friend) => {
                            return (
                                <Link
                                    to={`/profile/${friend.name}`}
                                    key={friend._id}
                                >
                                    <div className="rightbarFollowing flex flex-col mb-5 cursor-pointer">
                                        <img
                                            src={
                                                friend.img
                                                    ? PF + friend.img
                                                    : PF + "/files/noAvatar.png"
                                            }
                                            alt=""
                                            className="rightbarFollowingImg w-[100px] h-[100px] object-cover rounded-md"
                                        />

                                        <span className="rightbarFollowingName">
                                            {friend.name ? friend.name : ""}
                                        </span>
                                    </div>
                                </Link>
                            );
                        })} */}
            </div>
        </>
    );
};

export default Saved;
