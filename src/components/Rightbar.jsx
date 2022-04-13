import { Link } from "react-router-dom";
/* import { Add, Remove } from "@material-ui/icons"; */
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Online from "./Online";
import { useEffect, useState } from "react";
import { aGet, aPut } from "../axios";
import { useDispatch, useSelector } from "react-redux";
import { follow, getFriends, unfollow } from "../features/user/userSlice";

export default function Rightbar({ profileId }) {
    /*  console.log(`profileId`, profileId); */
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [followed, setFollowed] = useState(false);

    useEffect(() => {
        if (profileId) {
            /* console.log(`USER PROFILE DATA`); */
            dispatch(getFriends(profileId));
        } else {
            /*     console.log(`AUTH USER ID`); */
            dispatch(getFriends(auth.user._id));
        }
    }, [auth.user._id, profileId]);

    /*     useEffect(() => {
        let isCancelled = false;
        const getFriendsCurrentUser = async () => {
            const usersList = await aGet(
                "api/users/friend/" + user.loggedUser._id
            );
            if (!isCancelled) {
                setUsersList(usersList.data);
            }
        };

        if (user.loggedUser?._id) {
            getFriendsCurrentUser();
        }

        return () => {
            isCancelled = true;
        };
    }, [user.loggedUser?._id]); */

    /*    useEffect(() => {
        let isCancelled = false;
        const getFriends = async () => {
            const friendList = await aGet(
                "api/users/friend/" + profileUser._id
            );
            if (!isCancelled) {
                setFriends(friendList.data);
            }
        };

        if (profileUser?._id) {
            getFriends();
        }

        return () => {
            isCancelled = true;
        };
    }, [profileUser?._id]); */

    /* useEffect(() => {
        if (profileUser?._id) {
            setFollowed(profileUser.followers.includes(user.loggedUser?._id));
        }
        return () => {};
    }, [profileUser, user?.loggedUser?._id]); */

    useEffect(() => {
        if (profileId) {
            /*  console.log(`el segundo useefect se ejecuta?`); */
            setFollowed(user.userProfileData.followers.includes(auth.user._id));
        }
    }, [user.userProfileData]);

    /*     const handleClick = async () => {
        if (!followed) {
            await aPut(`api/users/${profileId}/follow`, {
                userId: auth.user._id,
            });
        } else {
            await aPut(`api/users/${profileId}/unfollow`, {
                userId: auth.user._id,
            });
        }
        setFollowed(!followed);
    }; */

    const handleClick = async () => {
        if (!followed) {
            dispatch(follow({ userId: auth.user._id, profileId: profileId }));
        } else {
            dispatch(unfollow({ userId: auth.user._id, profileId: profileId }));
        }
        setFollowed(!followed);
    };

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer flex items-center">
                    <img
                        className="birthdayImg w-10 h-10 mr-3"
                        /* estas no les hace un src dinamico porque son una imagen static */
                        src={PF + "/files/gift.png"}
                        alt=""
                    />
                    <span className="birthdayText font-light text-[15px]">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a
                        birhday today.
                    </span>
                </div>
                <img
                    className="rightbarAd w-full rounded-xl my-8  mx-0"
                    src={PF + "/files/ad.png"}
                    alt=""
                />
                {/* Online Friend */}
                <h4 className="rightbarTitle mb-5 font-bold text-xl">Online</h4>
                <ul className="rightbarFriendList">
                    {user.friendsList.length > 0 &&
                        user.friendsList.map((friend) => (
                            //console.log(`devuelve un choclo xd como id:`,userList._id);
                            <Online key={friend._id} friend={friend} />
                        ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
                {user.userProfileData.name !== auth.user.name && (
                    <button
                        className="rightbarFollowButton mt-8  m-3 border-none bg-[#1872f2] text-white rounded-md px-4 py-2 flex items-center font-semibold ml-10 cursor-pointer"
                        onClick={handleClick}
                    >
                        {followed ? "Unfollow" : "Follow"}
                        {followed ? <RemoveIcon /> : <AddIcon />}
                    </button>
                )}
                <h4 className="rightbarTitle text-xl font-medium mb-3 ml-11">
                    User information
                </h4>
                <div className="rightbarInfo mb-8 ml-11">
                    <div className="rightbarInfoItem mb-3">
                        <span className="rightbarInfoKey mr-1">City:</span>
                        <span className="rightbarInfoValue">
                            {user.userProfileData.city
                                ? user.userProfileData.city
                                : ""}
                        </span>
                    </div>
                    <div className="rightbarInfoItem mb-3">
                        <span className="rightbarInfoKey mr-1">From:</span>
                        <span className="rightbarInfoValue">
                            {user.userProfileData.from
                                ? user.userProfileData.from
                                : ""}
                        </span>
                    </div>
                    {/* <div className="rightbarInfoItem mb-3">
                        <span className="rightbarInfoKey  mr-1 font-medium text-[#555]">
                            Relationship:
                        </span>
                        mi mente me dijo que esta lógica estaba mal 
                        <span className="rightbarInfoValue font-light">
                            {profileUser.relationship === 1
                                ? "Single"
                                : profileUser.relationship === 1
                                ? "Married"
                                : "-"}
                        </span>
                    </div> */}
                </div>
                {/* User friends */}
                <h4 className="rightbarTitle text-xl font-medium mb-3 ml-11">
                    Following
                </h4>
                {/* flex flex-wrap justify-between */}
                {/* validación de 12 sino me rompe la ui */}
                {/* el username no mas de 12 letras, siino me rompe la ui */}
                <div className="rightbarFollowings mb-3 grid grid-cols-3 justify-items-center text-center">
                    {user.friendsList.length > 0 &&
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
                        })}
                </div>
            </>
        );
    };
    return (
        <div className="rightbar hidden md:block flex-[3.5]">
            <div className="rightbarWrapper pt-5 pr-5 pb-0 pl-0">
                {profileId ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}
