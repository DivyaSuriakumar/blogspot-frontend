import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  // const PF = "http://localhost:5000/images/"
  const PF = "https://blogspot-api.onrender.com/images/"

  return (
    <div className="post">
      {/* link tag is added by me */}
      {/* <Link to="/post/:postId" className="link"> */}
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => {
            <span className="postCat">{c.name}</span>;
          })}
        </div>
        <Link to={`/post/${post._id}`} className="link" >
          <span className="postTitle">{post.title}</span>
          </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
      {/* </Link> */}
    </div>
  );
}
