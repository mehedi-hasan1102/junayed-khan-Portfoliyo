import { createBrowserRouter } from "react-router";
import Home from "../Components/Home";
import Error from "../Components/Error";


const router = createBrowserRouter ([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            
        ]
    },
    {
        path: '/*',
        element: <Error></Error>
    }
]);

export default router;