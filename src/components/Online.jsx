import { Link } from "react-router-dom";

export default function Online({ friend }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <li className="rightbarFriend flex items-center mb-4">
            <Link to={`/profile/${friend.name}`}>
                <div className="rightbarProfileImgContainer mr-3 relative ">
                    <img
                        className="rightbarProfileImg w-10 h-10 rounded-[50%] object-cover"
                        src={
                            friend.img
                                ? PF + friend.img
                                : PF + "/files/noAvatar.png"
                        }
                        alt=""
                    />
                    <span className="rightbarOnline w-3 h-3 rounded-[50%] bg-[limegreen] absolute top-[-2px] right-0 border-2 border-white"></span>
                </div>
            </Link>
            <span className="rightbarUsername font-medium">
                {friend.name ? friend.name : ""}
            </span>
        </li>
    );
}
