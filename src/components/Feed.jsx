import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Share from "./Share";
import Post from "./Post";
import { getPostsHome, getPostsName } from "../features/post/postSlice";
export default function Feed({ name }) {
    const auth = useSelector((state) => state.auth);
    const post = useSelector((state) => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
        name
            ? dispatch(getPostsName({ name }))
            : dispatch(getPostsHome({ idUser: auth.user._id }));
    }, [name, auth.user, dispatch]);

    return (
        <div className="feed flex-[5.5] ">
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
