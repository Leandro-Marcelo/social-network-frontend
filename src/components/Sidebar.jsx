import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleFilledOutlinedIcon from "@mui/icons-material/PlayCircleFilledOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import CloseFriend from "./CloseFriend";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersList } from "../features/user/userSlice";

export default function Sidebar() {
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    /* const [usersList, setUsersList] = useState([]); */
    useEffect(() => {
        auth.user.name && dispatch(usersList(auth.user.name));
    }, [auth.user]);
    return (
        /* hidden para mobil, md:block para desktop, le dice 100vh y le resta 50px porque es lo mide el Navbar, scroll en y para que no tenga que bajar para ver a los amigos/o personas, creo que son personas que no tiene agregada */
        <div className="hidden md:block sidebar md:flex-[2] h-[calc(100vh-50px)] overflow-y-scroll sticky top-[50px]">
            <div className="sidebarWrapper px-5 py-5 ">
                <ul className="sidebarList">
                    <li className="sidebarListItem flex items-center mb-5">
                        <RssFeedIcon className="sidebarIcon mr-4" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem flex items-center mb-5">
                        <ChatIcon className="sidebarIcon mr-4" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem flex items-center mb-5">
                        <PlayCircleFilledOutlinedIcon className="sidebarIcon mr-4" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem flex items-center mb-5">
                        <GroupAddOutlinedIcon className="sidebarIcon mr-4" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem flex items-center mb-5">
                        <BookmarkIcon className="sidebarIcon mr-4" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem flex items-center mb-5">
                        <HelpOutlineIcon className="sidebarIcon mr-4" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem flex items-center mb-5">
                        <WorkOutlineIcon className="sidebarIcon mr-4" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem flex items-center mb-5">
                        <EventIcon className="sidebarIcon mr-4" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem flex items-center mb-5">
                        <SchoolIcon className="sidebarIcon mr-4" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton w-36 border-none px-3 py-3 rounded-md font-medium bg-[#ddd5] cursor-default">
                    Show More
                </button>
                <hr className="sidebarHr  my-5 mx-0" />
                <h4 className="rightbarTitle text-xl font-medium mb-3 ml-2">
                    Usuarios
                </h4>
                <ul className="sidebarFriendList">
                    {user.usersList
                        ? user.usersList.map((user) => (
                              <CloseFriend key={user._id} user={user} />
                          ))
                        : null}
                </ul>
            </div>
        </div>
    );
}
