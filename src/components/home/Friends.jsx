import React from "react";
import { Link } from "react-router-dom";
import profile1 from "../../assets/Home/images/profile-1.jpg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { follow, getFriends, unfollow } from "../../features/user/userSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const Friends = ({ profileId }) => {
    /*  console.log(`profileId`, profileId); */
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [followed, setFollowed] = useState(false);

    /* quizas no hace falta pasar un profileId sino que sacar ese id del user.userProfileData del estado de redux y si debería estar ya que dijimos que se renderizará main cuando user.userProfileData.name existía, eso implica que también existe el _id, pero bueno podría hacer un bucle infinito al useefect que esta debejo, el segundo porque depende de este user */
    useEffect(() => {
        if (profileId) {
            console.log(`se ejecuta?`);
            /* console.log(`USER PROFILE DATA`); */
            dispatch(getFriends(profileId));
        }
    }, [auth.user._id, profileId]);

    useEffect(() => {
        if (profileId) {
            /*  console.log(`el segundo useefect se ejecuta?`); */
            setFollowed(user.userProfileData.followers.includes(auth.user._id));
        }
    }, [user.userProfileData]);

    const handleClick = async () => {
        if (!followed) {
            dispatch(follow({ userId: auth.user._id, profileId: profileId }));
        } else {
            dispatch(unfollow({ userId: auth.user._id, profileId: profileId }));
        }
        setFollowed(!followed);
    };

    const APIREST = process.env.REACT_APP_APIREST;
    return (
        <div className="w-full  rounded-[1rem] shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)] bg-[white] mt-4">
            <div className="flex justify-between items-center px-4 md:px-12">
                <h4 className="text-center py-4 text-[1rem]">Friends</h4>
                {user.userProfileData.name !== auth.user.name && (
                    <button
                        className="shareButton flex py-[0.4rem] px-[0.7rem] font-medium rounded-[2rem] cursor-pointer text-[0.9rem] bg-hPrimary text-[white] transition-btn hover:opacity-80  1450:py-[0.6rem] 1450:px-[1.3rem] items-center"
                        onClick={handleClick}
                    >
                        {followed ? "Unfollow" : "Follow"}
                        {/*  {followed ? <RemoveIcon /> : <AddIcon />} */}
                    </button>
                )}
                <button className="shareButton flex py-[0.4rem] px-[0.7rem] font-medium rounded-[2rem] cursor-pointer text-[0.9rem] bg-hPrimary text-[white] transition-btn hover:opacity-80  1450:py-[0.6rem] 1450:px-[1.3rem]">
                    Share
                </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 w-full justify-items-center">
                {user.friendsList.length > 0 &&
                    user.friendsList.map((friend) => {
                        return (
                            <Link
                                to={`/profile/${friend.name}`}
                                key={friend._id}
                            >
                                <div className="profile-picture w-[2.7rem] rounded-[50%] overflow-hidden mx-auto">
                                    <img
                                        src={
                                            friend.img
                                                ? APIREST + friend.img
                                                : APIREST +
                                                  "/files/noAvatar.png"
                                        }
                                        alt=""
                                        className="block w-full"
                                    />
                                </div>
                                <h4> {friend.name ? friend.name : ""}</h4>
                                <h4> {friend.name ? friend.name : ""}</h4>
                            </Link>
                        );
                    })}
            </div>
        </div>
    );
};

export default Friends;
