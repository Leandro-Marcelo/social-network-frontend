import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import { useEffect, useState } from "react";
import { aGet } from "../axios/index";
import { useParams } from "react-router";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      console.log(`username:`, username);
      const res = await aGet(`api/users?username=${username}`);
      console.log(res.data);
      setUser(res.data);
    };
    fetchUser();
    /*  si la database cambiará el id, sería correcto volver a renderizar todo */
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile flex">
        <Sidebar />
        <div className="profileRight flex-[9]">
          <div className="profileRightTop">
            <div className="profileCover  h-[320px] relative">
              <img
                className="profileCoverImg w-full h-[250px] object-cover "
                /* revisar si funciona el cover por defecto */
                src={user.coverPicture || PF + "person/noCover.png"}
                alt="cover"
              />
              <img
                className="profileUserImg w-[150px] h-[150px] rounded-[50%] object-cover absolute left-0 right-0 mx-auto top-[150px] border-[3px] border-white bg-white"
                /* revisar si funciona el profile por defecto */
                src={user.profilePicture || PF + "/person/noAvatar.png"}
                alt="profile"
              />
            </div>
            <div className="profileInfo flex flex-col justify-center items-center">
              <h4 className="profileInfoName text-2xl">{user.username}</h4>
              <span className="profileInfoDesc font-light">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom flex">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
