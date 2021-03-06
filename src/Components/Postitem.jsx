import React from "react";
import {useNavigate} from "react-router-dom";
import MyButton from "./UI/button/MyButton"

const Postitem = (props) => {
let navigate = useNavigate()

  return (
    <div className="post">
      <div className="post__content">
        <div> <strong>{props.post.title}</strong></div>
        <div className="body">{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick= {()=>{navigate(`/posts/${props.post.id}`)}}>Открыть</MyButton>
        <MyButton onClick= {()=>{props.removePost(props.post)}}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default Postitem;
