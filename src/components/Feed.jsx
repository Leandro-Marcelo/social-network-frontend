import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Share from "./Share";
import Post from "./Post";
import { getPostsHome, getPostsName } from "../features/post/postSlice";
/* RECIBE USERNAME POR EL PROFILE */
export default function Feed({ name }) {
    /* console.log(`EXISTE UN NAME`, name); */
    /* console.log(`logic render se ejecutó`); */
    const auth = useSelector((state) => state.auth);
    const post = useSelector((state) => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
        /*   console.log(`ME EJECUTÉ`); */
        name
            ? dispatch(getPostsName({ name }))
            : dispatch(getPostsHome({ idUser: auth.user._id }));
    }, [name, auth.user, dispatch]);
    /* username, logged */
    return (
        <div className="feed flex-[5.5] ">
            {/* {console.log(`Render se ejecutó`)} */}
            <div className="feedWrapper px-5 py-5">
                {/* entender esta lógica xd */}
                {!name || name === auth.user.name ? <Share /> : ""}
                {post.posts &&
                    post.posts.map((post) => {
                        return <Post post={post} key={post._id} />;
                    })}
            </div>
        </div>
    );
}
