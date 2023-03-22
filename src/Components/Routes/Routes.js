import { createBrowserRouter } from "react-router-dom";
import BookDetail from "../Books/BookDetail";
import Home from "../Home/Home";
import NotFound from "../Not Found/NotFound";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/book/:id',
        element: <BookDetail />
    },
    {
        path: '/*',
        element: <NotFound></NotFound>,
    }
]);