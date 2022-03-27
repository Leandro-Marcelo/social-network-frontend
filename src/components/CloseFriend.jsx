export default function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend flex items-center mb-4">
      <img
        src={PF + user.profilePicture}
        alt=""
        className="sidebarFriendImg w-8 h-8 rounded-[50%] object-cover mr-3"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
