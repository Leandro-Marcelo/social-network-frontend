import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import Topbar from "../components/Topbar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer flex w-full">
        <Sidebar />
        {/* <div className=" flex-[5.5] bg-violet-800">dsa</div> */}
        {/* md:block pero debe estar en flex */}
        <Feed />
        {/* <div className="hidden md:block flex-[3.5] bg-red-700">dsad</div> */}
        <Rightbar />
      </div>
    </>
  );
}
