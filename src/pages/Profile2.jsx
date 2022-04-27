import React from "react";
import Navbar from "../components/home/Navbar";
import Main from "../components/home/Main";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userProfileData } from "../features/user/userSlice";

const Profile2 = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const user = useSelector((state) => state.user);
    const auth = useSelector((state) => state.auth);
    const nameParams = useParams().name;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    /*   useEffect(() => {
        if (auth.logged === false) navigate("/login");
    }, [auth]); */

    useEffect(() => {
        dispatch(userProfileData(nameParams));
    }, [nameParams]);

    return (
        <div className="bg-hLight  text-hDark min-h-screen">
            {auth.logged && <Navbar />}
            {user.userProfileData.name && (
                <Main
                    profile={true}
                    name={user.userProfileData.name}
                    profileId={user.userProfileData._id}
                />
            )}
        </div>
    );
};

export default Profile2;
