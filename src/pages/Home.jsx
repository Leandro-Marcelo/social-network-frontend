import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import Topbar from "../components/Topbar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();

    /* agregar el logout  */
    useEffect(() => {
        if (auth.logged === false) navigate("/login");
    }, [auth]);

    return (
        <>
            {auth.logged && <Topbar />}
            <div className="homeContainer flex w-full">
                {auth.logged && <Sidebar />}
                {auth.logged && <Feed />}
                {/*   <Sidebar /> */}
                {/* <Feed username={false} />
                <Rightbar /> */}
                {auth.logged && <Rightbar />}
            </div>
        </>
    );
}
