import { Link } from "react-router-dom";
import { Add, Remove } from "@material-ui/icons";
import Online from "./Online";
import { useEffect, useState } from "react";
import { aGet, aPut } from "../axios";
import { useSelector } from "react-redux";

export default function Rightbar({ profileUser }) {
    const user = useSelector((state) => state.user);
    const [friends, setFriends] = useState(null);
    const [followed, setFollowed] = useState(false);
    const [usersList, setUsersList] = useState([]);
    console.log(`este es el valor de friends:`, friends);

    useEffect(() => {
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
    }, [user.loggedUser?._id]);

    useEffect(() => {
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
    }, [profileUser?._id]);

    useEffect(() => {
        if (profileUser?._id) {
            setFollowed(profileUser.followers.includes(user.loggedUser?._id));
        }
        return () => {};
    }, [profileUser, user?.loggedUser?._id]);

    const handleClick = async () => {
        if (!followed) {
            await aPut(`api/users/${profileUser._id}/follow`, {
                userId: user.loggedUser._id,
            });
        } else {
            await aPut(`api/users/${profileUser._id}/unfollow`, {
                userId: user.loggedUser._id,
            });
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
                <h4 className="rightbarTitle mb-5 font-bold text-xl">
                    Online Friend
                </h4>
                <ul className="rightbarFriendList">
                    {usersList.map((userList) => (
                        /* console.log(`devuelve un choclo xd como id:`,userList._id); */
                        <Online key={userList._id} user={userList} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
                {profileUser?.username !== user.loggedUser?.username && (
                    <button
                        className="rightbarFollowButton mt-8  m-3 border-none bg-[#1872f2] text-white rounded-md px-4 py-2 flex items-center font-semibold ml-10 cursor-pointer"
                        onClick={handleClick}
                    >
                        {followed ? "Unfollow" : "Follow"}
                        {followed ? <Remove /> : <Add />}
                    </button>
                )}
                <h4 className="rightbarTitle text-xl font-medium mb-3 ml-11">
                    User information
                </h4>
                <div className="rightbarInfo mb-8 ml-11">
                    <div className="rightbarInfoItem mb-3">
                        <span className="rightbarInfoKey mr-1">City:</span>
                        <span className="rightbarInfoValue">
                            {profileUser.city}
                        </span>
                    </div>
                    <div className="rightbarInfoItem mb-3">
                        <span className="rightbarInfoKey mr-1">From:</span>
                        <span className="rightbarInfoValue">
                            {profileUser.from}
                        </span>
                    </div>
                    <div className="rightbarInfoItem mb-3">
                        <span className="rightbarInfoKey  mr-1 font-medium text-[#555]">
                            Relationship:
                        </span>
                        <span className="rightbarInfoValue font-light">
                            {/* esta lógica esta mal */}
                            {profileUser.relationship === 1
                                ? "Single"
                                : profileUser.relationship === 1
                                ? "Married"
                                : "-"}
                        </span>
                    </div>
                </div>
                <h4 className="rightbarTitle text-xl font-medium mb-3 ml-11">
                    User friends
                </h4>
                {/* flex flex-wrap justify-between */}
                {/* validación de 12 sino me rompe la ui */}
                <div className="rightbarFollowings mb-3 grid grid-cols-3 justify-items-center text-center">
                    {friends &&
                        friends.map((friend) => {
                            return (
                                <Link
                                    to={`/profile/${friend?.username}`}
                                    key={friend?._id}
                                >
                                    <div className="rightbarFollowing flex flex-col mb-5 cursor-pointer">
                                        <img
                                            src={
                                                friend?.profilePicture ||
                                                PF + "/files/noAvatar.png"
                                            }
                                            alt=""
                                            className="rightbarFollowingImg w-[100px] h-[100px] object-cover rounded-md"
                                        />
                                        {/* el username no mas de 12 letras, siino me rompe la ui */}
                                        <span className="rightbarFollowingName">
                                            {friend?.username}
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
                {profileUser ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}
