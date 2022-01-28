import React from "react";
import "./Styles/App.css";
import { useState, useMemo } from "react";
import Postlist from "./Components/PostList";
import Postform from "./Components/PostForm";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal";
import MyButton from "./Components/UI/button/MyButton";

function App() {
  console.log("компонент отрендирился");
  const [posts, setPosts] = useState([
    { id: 1, title: "бб", body: "Description" },
    { id: 2, title: "яя", body: "Description" },
    { id: 3, title: "гг", body: "Description" },
  ]);

const [modal, setModal] = useState(false)

  const [filter, setFilter] = useState({
    searchQuery: "",
    selectedSort: "",
  });

  const sortedPosts = useMemo(() => {
    console.log("Функция отработала");
    if (filter.selectedSort) {
      return [...posts].sort((a, b) =>
        a[filter.selectedSort].localeCompare(b[filter.selectedSort])
      );
    }
    return posts;
  }, [filter.selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.searchQuery.toLowerCase())
    );
  }, [posts, filter.searchQuery, filter.selectedSort]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  };

  const removePost = (post) => {
    const sortedPosts = posts.filter((p) => p.id !== post.id);
    setPosts(sortedPosts);
  };

  return (
    <div className="App">
      <MyButton onClick={()=>{setModal(true)} } style={{margenTop: 30}}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <Postform create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <Postlist
        removePost={removePost}
        posts={sortedAndSearchedPosts}
        title={"Список постов"}
      />
    </div>
  );
}

export default App;
