import { createBrowserRouter } from "react-router-dom";
import MainApp from "../../pages/MainApp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainApp />,
        // loader: rootLoader,
        children: [
            {
                // path: "team",
                // element: <Team />,
                // loader: teamLoader,
            },
        ],
    },
]);