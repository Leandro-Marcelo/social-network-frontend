import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import Topbar from "../components/Topbar";
/* import { useEffect } from "react"; */
import { useSelector } from "react-redux";
/* import { useNavigate } from "react-router-dom"; */

export default function Home() {
  const user = useSelector((state) => state.user);
  /*   const navigate = useNavigate(); */

  /* agregar el logout  */
  /*   useEffect(() => {
    if (!user.logged) {
      navigate("/login");
    }
  }, []); */

  return (
    <>
      {user?.logged && <Topbar />}
      <div className="homeContainer flex w-full">
        {user?.logged && <Sidebar />}
        {user?.logged && <Feed />}
        {/*   <Sidebar />
        <Feed username={false} />
        <Rightbar /> */}
        {user?.logged && <Rightbar />}
      </div>
    </>
  );
}
