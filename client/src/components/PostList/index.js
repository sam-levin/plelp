import React from "react";
import { Link } from "react-router-dom";
const PostList = ({ posts  }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      <h3>Post</h3>
      {posts &&
        posts.map(post => (
          <div key = {post._id} className="card">
            <div className="card-body">
              <h4 className="card-title">{post.title}</h4>
              <p>{post.postText}</p>
              <p>{post.username}</p>
              <p>{post.createdAt}</p>
              <Link to={`/post/${post._id}`}>View Post</Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
