import { Navigate, createBrowserRouter } from "react-router-dom";
import MainApp from "../../pages/MainApp";
import { ACCUEIL_PATH, CONTACT_PATH, CV_PATH, TRAVAIL_PATH } from "./navigationPaths";
import AccueilHomePage from '../../pages/accueil/AccueilHomePage';
import CvHomePage from '../../pages/cv/CvHomePage';
import TravailHomePage from '../../pages/travail/TravailHomePage';
import ContactHomePage from '../../pages/contact/ContactHomePage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainApp />,
        // loader: rootLoader,
        children: [
            {
                path: '/',
                element: <Navigate to={ACCUEIL_PATH} replace />
            },
            {
                path: ACCUEIL_PATH,
                element: <AccueilHomePage />,
            },
            {
                path: CV_PATH,
                element: <CvHomePage />,
            },
            {
                path: TRAVAIL_PATH,
                element: <TravailHomePage />,
            },
            {
                path: CONTACT_PATH,
                element: <ContactHomePage />,
            },
        ],
    },
]);