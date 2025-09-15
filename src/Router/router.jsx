import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import RootLayout from "../Layouts/RootLayout";
import DashboardLayout from "../Layouts/DashboardLayout";
import UserDashboard from "../Pages/UserDashboard/UserDashboard";
import YourServices from "../Pages/YourServices/YourServices";
import RequestServices from "../Pages/RequestServices/RequestServices";
import ServiceRequestStatus from "../Pages/ServiceRequestStatus/ServiceRequestStatus";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import AssignedService from "../Pages/AssignedService/AssignedService";
import PrivateRoutes from "../routes/PrivateRoutes";
import PhoneAuth from "../Pages/Auth/PhoneAuth/PhoneAuth";
import StaffDashboard from "../Pages/UserDashboard/StaffDashboard";
import StaffRoute from "../routes/StaffRoute";
import YourClients from "../Pages/YourClients/YourClients";
import PreviousReferred from "../Pages/PreviousReferred/PreviousReferred";
import ReferralForm from "../Pages/ReferralForm/ReferralForm";
import ManageProfile from "../Pages/ManageProfile/ManageProfile";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "about",
                Component: About,
            },

        ]
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            { path: "login", Component: Login },
            { path: "register", Component: Register },
            {
                path: "/auth/phone",
                Component: PhoneAuth,
            }
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                index: true,
                element: <PrivateRoutes><UserDashboard></UserDashboard></PrivateRoutes>
            },
            {
                path: "manageProfile",
                element: <ManageProfile></ManageProfile>,
            },
            {
                path: 'yourServices',
                element: <PrivateRoutes><YourServices></YourServices></PrivateRoutes>
            },
            {
                path: 'requestServices',
                element: <PrivateRoutes><RequestServices></RequestServices></PrivateRoutes>
            },
            {
                path: 'serviceRequestStatus',
                element: <PrivateRoutes><ServiceRequestStatus></ServiceRequestStatus></PrivateRoutes>
            },
            {
                path: 'serviceDetails',
                element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>
            },
            {
                path: "assignedService",
                element: <StaffRoute><AssignedService></AssignedService> </StaffRoute>,
            },
            {
                path: "yourClients",
                element: <StaffRoute><YourClients></YourClients> </StaffRoute>,
            },
            {
                path: "previousReferred",
                element: <PreviousReferred></PreviousReferred>,
            },
            {
                path: "referralForm",
                element: <ReferralForm></ReferralForm>,
            },

        ],
    }
]);




export default router;