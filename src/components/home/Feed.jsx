import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Share from "./Share";
import Post from "./Post";
import { getPostsHome, getPostsName } from "../features/post/postSlice";

const Feed = ({ name }) => {
    const auth = useSelector((state) => state.auth);
    const post = useSelector((state) => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
        name
            ? dispatch(getPostsName({ name }))
            : dispatch(getPostsHome({ idUser: auth.user._id }));
    }, [name, auth.user, dispatch]);

    return (
        <>
            {!name || name === auth.user.name ? <Share /> : ""}
            <div className="feeds">
                {post.posts &&
                    post.posts.map((post) => {
                        return <Post post={post} key={post._id} />;
                    })}
            </div>
        </>
    );
};

export default Feed;
