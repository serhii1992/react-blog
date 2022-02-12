import About from "../pages/About";
import PostIdItem from "../pages/PostIdItem";
import Posts from "../pages/Posts";
import Login from "../pages/Login";


export const privateRouters = [
    {path: '/posts', Component: Posts},
    {path: '/posts/:id', Component: PostIdItem},
    {path: '/about', Component: About},
]

export const publicRouters = [
    {path: '/login', Component: Login},
]