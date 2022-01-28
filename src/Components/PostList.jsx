import React from "react";

import Postitem from "./Postitem";

const Postlist = ({ posts, title, removePost }) => {
  if (!posts.length) {
    return (
      <h1 style={{ fontSize: "42px", textAlign: "center" }}>
        Посты отсутствуют
      </h1>
    );
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <Postitem
          removePost={removePost}
          post={post}
          key={post.id}
          number={index + 1}
        />
      ))}
    </div>
  );
};

export default Postlist;
