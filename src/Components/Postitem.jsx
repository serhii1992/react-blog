import React from "react";
import MyButton from "./UI/button/MyButton"

const Postitem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <div> <strong> {props.post.id}. {props.post.title}</strong></div>
        <div className="body">{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick= {()=>{props.removePost(props.post)}}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default Postitem;
