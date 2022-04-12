import { Link } from "react-router-dom";
export default function CloseFriend({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    /*   console.log(user); */
    return (
        <Link to={`/profile/${user.name}`}>
            <li className="sidebarFriend flex items-center mb-4">
                <img
                    src={user.img ? PF + user.img : PF + "/files/noAvatar.png"}
                    alt={user.name}
                    className="sidebarFriendImg w-8 h-8 rounded-[50%] object-cover mr-3"
                />
                <span className="sidebarFriendName">{user.name}</span>
            </li>
        </Link>
    );
}
