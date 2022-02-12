import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import apiPosts from "../API/apiPosts";
import Loader from "../Components/UI/loader/Loader";

export default function PostIdItem() {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const [fetchPost, isLoadin, error] = useFetching(async (id) => {
    const respons = await apiPosts.getPostById(id);
    setPost(respons.data);
  });

  const [fetchComments, isLoadinComments, errorComments] = useFetching(
    async (id) => {
      const respons = await apiPosts.getCommentsById(id);
      setComments(respons.data);
    }
  );

  useEffect(() => {
    fetchPost(id);
    fetchComments(id);
  }, []);
  console.log(id);
  return (
    <div>
      {isLoadin ? (
        <Loader />
      ) : (
        <div>
          <h1>
            {id}. {post.title}
          </h1>
        </div>
      )}
      <div>
        <h2>Comments:</h2>
        {isLoadinComments ? (
          <Loader />
        ) : (
          comments.map((comm) => {
            return (
              <div style={{margin:'15px 0'}}>
                <div>
                  Name: <strong> {comm.name}</strong> Email:
                  <strong>{comm.email}</strong>
                </div>
                <p>{comm.body}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
