import React, { useRef } from "react";
import "../Styles/App.css";
import { useState, useEffect } from "react";
import Postlist from "../Components/PostList";
import Postform from "../Components/PostForm";
import PostFilter from "../Components/PostFilter";
import MyModal from "../Components/UI/MyModal/MyModal";
import MyButton from "../Components/UI/button/MyButton";
import { usePosts, useSortedPost } from "../hooks/usePosts";
import apiPosts from "../API/apiPosts";
import Loader from "../Components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPagesCount } from "../utils/pages";
import Pagination from "../Components/UI/pagination/Pagination";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({ searchQuery: "", selectedSort: "" });
  const [totalPages, setTotaPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedPosts = useSortedPost(posts, filter.selectedSort);
  const sortedAndSearchedPosts = usePosts(sortedPosts, filter.searchQuery);
  const [fetching, isPostsLoading, postError] = useFetching(fetchPosts);
  const lastElement = useRef();
  const observer = useRef();

  useEffect(() => {
    fetching(limit, page);
  }, [page]);

  useEffect(() => {
    if (isPostsLoading) return;
    if (observer.current) observer.current.disconnect();
    var callback = function (entries, observer) {
      if (entries[0].isIntersecting && page < totalPages) {
        console.log("див в зоне видимости");
        setPage(page + 1);
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [isPostsLoading]);

  async function fetchPosts(limit, page) {
    const respons = await apiPosts.getALL(limit, page);
    setPosts([...posts, ...respons.data]);
    const totalPosts = respons.headers["x-total-count"];
    setTotaPages(getPagesCount(totalPosts, limit));
  }

  const changePage = (page) => {
    setPage(page);
  };

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
      {postError && (
        <h1 style={{ textAlign: "center", fontSize: "42px" }}>
          Произошла ошибка ${postError}{" "}
        </h1>
      )}
      <Postlist
        removePost={removePost}
        posts={sortedAndSearchedPosts}
        title={"Список постов"}
      />
      <div ref={lastElement}></div>
      {isPostsLoading && <Loader />}
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}
