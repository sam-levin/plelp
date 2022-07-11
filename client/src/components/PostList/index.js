import React from "react";

const PostList = ({ posts }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      <h3>Posts</h3>
      {posts &&
        posts.map((post) => {
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{post.title}</h4>
              <p>{post.postText}</p>
              <p>{post.username}</p>
              <p>{post.createdAt}</p>
            </div>
          </div>;
        })}
    </div>
  );
};

export default PostList;
