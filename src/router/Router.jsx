import { createBrowserRouter } from "react-router";
import Home from "../Components/Home";
import Error from "../Components/Error";
import BlogPage from "../Components/BlogPost";
import BlogDetails from "../Components/Blogs/BlogDetails";


const router = createBrowserRouter ([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            
        ]
    },
    {
        path: '/blog',
        element: <BlogPage></BlogPage>
    },
    {
        path: "/blogs/:id",
        element: <BlogDetails></BlogDetails>
    },
    {
        path: '/*',
        element: <Error></Error>
    }
]);

export default router;