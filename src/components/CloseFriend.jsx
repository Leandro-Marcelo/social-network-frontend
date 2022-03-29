import { Link } from "react-router-dom";
export default function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <Link to={`/profile/${user.username}`}>
      <li className="sidebarFriend flex items-center mb-4">
        <img
          src={user.profilePicture || PF + "/person/noAvatar.png"}
          alt=""
          className="sidebarFriendImg w-8 h-8 rounded-[50%] object-cover mr-3"
        />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </Link>
  );
}
