import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import { Users } from "../dummyData";
import CloseFriend from "./CloseFriend";

export default function Sidebar() {
  return (
    /* hidden para mobil, md:block para desktop, le dice 100vh y le resta 50px porque es lo mide el Navbar, scroll en y para que no tenga que bajar para ver a los amigos/o personas, creo que son personas que no tiene agregada */
    <div className="hidden md:block sidebar md:flex-[2] h-[calc(100vh-50px)] overflow-y-scroll sticky top-[50px]">
      <div className="sidebarWrapper px-5 py-5 ">
        <ul className="sidebarList">
          <li className="sidebarListItem flex items-center mb-5">
            <RssFeed className="sidebarIcon mr-4" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <Chat className="sidebarIcon mr-4" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <PlayCircleFilledOutlined className="sidebarIcon mr-4" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <Group className="sidebarIcon mr-4" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <Bookmark className="sidebarIcon mr-4" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <HelpOutline className="sidebarIcon mr-4" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <WorkOutline className="sidebarIcon mr-4" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <Event className="sidebarIcon mr-4" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem flex items-center mb-5">
            <School className="sidebarIcon mr-4" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton w-36 border-none px-3 py-3 rounded-md font-medium bg-[#ddd5]">
          Show More
        </button>
        <hr className="sidebarHr  my-5 mx-0" />
        <ul className="sidebarFriendList"></ul>
        <ul className="sidebarFriendList">
          {Users.map((user) => (
            <CloseFriend key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}
