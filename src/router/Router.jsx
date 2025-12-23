import { createBrowserRouter } from "react-router";
import Home from "../Components/Home";
import Error from "../Components/Error";
import BlogPage from "../Components/BlogPost";


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
        path: '/*',
        element: <Error></Error>
    }
]);

export default router;