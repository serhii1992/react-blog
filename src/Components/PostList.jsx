import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
      <h1 style={{ textAlign: "center", fontSize: "42px" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <Postitem
              removePost={removePost}
              post={post}
              number={index + 1}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default Postlist;
