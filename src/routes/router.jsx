import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Signin from "../pages/Auth/Signin";
import Signup from "../pages/Auth/Signup";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword";
import EmailVerification from "../pages/Auth/EmailVerification";
import CandidateDetails from "../pages/Candidate/CandidateDetails";
import FindCandidate from "../pages/Candidate/FindCandidate";
import EmployerDetails from "../pages/Employers/EmployerDetails";
import FindEmployers from "../pages/Employers/FindEmployers";
import FindJob from "../pages/Jobs/FindJob";
import JobDetails from "../pages/Jobs/JobDetails";
import Crountry from "../pages/CountryPage/Countries";
import CountryDetails from "../pages/CountryPage/CountryDetails";
import Countries from "../pages/CountryPage/Countries";

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
            { path: "/find-jobs", element: <FindJob />, },
            { path: "/job-details", element: <JobDetails />, },

            // Employers related routes
            { path: "/find-employers", element: <FindEmployers />, },
            { path: "/employer-details", element: <EmployerDetails />, },

            // Candidate related routes
            { path: "/find-candidate", element: <FindCandidate />, },
            { path: "/candidate-details", element: <CandidateDetails />, },
            
            { path: "/country", element: <Countries />, },
            { path: "/country-details/:id", element: <CountryDetails />, },
        ]
    },
]);

export default router