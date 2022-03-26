import { MoreVert } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div className="post w-full rounded-xl shadow-[0_0_16px_-8px_rgba(0,0,0,0.68)] my-8 mx-0">
      <div className="postWrapper px-3 py-3">
        <div className="postTop flex items-center justify-between">
          <div className="postTopLeft flex items-center ml-2">
            <Link to={`/profile/`}>
              <img
                className="postProfileImg w-8 h-8 rounded-[50%] object-cover"
                src="/assets/person/1.jpeg"
                alt=""
              />
            </Link>
            <span className="postUsername text-[15px] font-medium my-0 mx-3">
              Leandro Marcelo
            </span>
            <span className="postDate text-[12px]">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter mx-2 my-4">
          {/* esto dice si existe post.desc ? post.desc : ""     aunque también podría verse como null */}
          <span className="postText">{post?.desc}</span>
          <img
            className="postImg mt-5 w-full max-h-[700px] object-contain"
            src="/assets/post/1.jpeg"
            alt=""
          />
        </div>
        <div className="postBottom flex items-center justify-between mx-2">
          <div className="postBottomLeft flex items-center">
            <img
              className="likeIcon w-6 h-6 mr-1 cursor-pointer"
              src="/assets/like.png"
              alt=""
            />
            <img
              className="likeIcon w-6 h-6 mr-1 cursor-pointer"
              src="/assets/heart.png"
              alt=""
            />
            <span className="postLikeCounter text-[15px]">
              {post.like} people like it
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText cursor-pointer border-b border-gray-400">
              {post.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
