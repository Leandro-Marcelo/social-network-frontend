import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userProfileData } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const user = useSelector((state) => state.user);
    const auth = useSelector((state) => state.auth);
    const nameParams = useParams().name;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.logged === false) navigate("/login");
    }, [auth]);

    useEffect(() => {
        console.log(`ESTO SE EJECUTA?`);
        dispatch(userProfileData(nameParams));
    }, [nameParams]);

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
                                src={
                                    user.userProfileData.coverPicture
                                        ? PF + user.userProfileData.coverPicture
                                        : PF + "/files/noCover.png"
                                }
                                alt="cover"
                            />
                            <img
                                className="profileUserImg w-[150px] h-[150px] rounded-[50%] object-cover absolute left-0 right-0 mx-auto top-[150px] border-[3px] border-white bg-white"
                                /* revisar si funciona el profile por defecto */
                                src={
                                    user.userProfileData.img
                                        ? PF + user.userProfileData.img
                                        : PF + "/files/noAvatar.png"
                                }
                                alt="profile"
                            />
                        </div>
                        <div className="profileInfo flex flex-col justify-center items-center">
                            <h4 className="profileInfoName text-2xl">
                                {user.userProfileData.name}
                            </h4>
                            <span className="profileInfoDesc font-light">
                                {user.userProfileData.desc}
                            </span>
                        </div>
                    </div>
                    <div className="profileRightBottom flex">
                        {user.userProfileData.name && (
                            <Feed name={user.userProfileData.name} />
                        )}
                        {user.userProfileData._id && (
                            <Rightbar profileId={user.userProfileData._id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
