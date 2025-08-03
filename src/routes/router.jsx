import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Signin from "../pages/Auth/Signin";
import Signup from "../pages/Auth/Signup";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword";
import EmailVerification from "../pages/Auth/EmailVerification";
import CandidateDetails from "../pages/FindCandidate/CandidateDetails";
import FindCandidate from "../pages/FindCandidate/FindCandidate";
import EmployerDetails from "../pages/FindEmployers/EmployerDetails";
import FindEmployers from "../pages/FindEmployers/FindEmployers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home />, },

            // auth related routes
            { path: "/signin", element: <Signin />, },
            { path: "/signup", element: <Signup />, },
            { path: "/forgot-password", element: <ForgotPassword />, },
            { path: "/reset-password", element: <ResetPassword />, },
            { path: "/email-verification", element: <EmailVerification />, },

            // jobs related routes
            { path: "/find-jobs", element: <ForgotPassword />, },
            { path: "/job-details", element: <ForgotPassword />, },

            // Employers related routes
            { path: "/find-employers", element: <FindEmployers />, },
            { path: "/employer-details", element: <EmployerDetails />, },

            // Candidate related routes
            { path: "/find-candidate", element: <FindCandidate />, },
            { path: "/candidate-details", element: <CandidateDetails />, },
 
        ]
    },
]);

export default router