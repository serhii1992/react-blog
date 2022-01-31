import React from "react";
import "./Styles/App.css";
import { useState, useEffect } from "react";
import Postlist from "./Components/PostList";
import Postform from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal";
import MyButton from "./Components/UI/button/MyButton";
import { usePosts, useSortedPost } from "./hooks/usePosts";
import axios from "axios";
import apiPosts from "./API/apiPosts";
import Loader from "./Components/UI/loader/Loader";
import { useFetching } from "./hooks/useFetching";

function App() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({ searchQuery: "", selectedSort: "" });
  const sortedPosts = useSortedPost(posts, filter.selectedSort);
  const sortedAndSearchedPosts = usePosts(sortedPosts, filter.searchQuery);
  const [fetching, isPostsLoading, error] = useFetching(fetchPosts)

  useEffect(async () => {
    fetching()
  }, []);

  async function fetchPosts() {
    const posts = await apiPosts.getALL();
    setPosts(posts);
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    const sortedPosts = posts.filter((p) => p.id !== post.id);
    setPosts(sortedPosts);
  };

  return (
    <div className="App">
      <div>
        <MyButton onClick={fetchPosts}>GET POSTS</MyButton>
      </div>
      <MyButton
        onClick={() => {
          setModal(true);
        }}
        style={{ margenTop: 30 }}
      >
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <Postform create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {error && <h1>Произошла ошибка ${error} </h1>}
      {isPostsLoading 
      ? <Loader/>
      :  <Postlist
          removePost={removePost}
          posts={sortedAndSearchedPosts}
          title={"Список постов"}
        />
      }
    </div>
  );
}

export default App;
