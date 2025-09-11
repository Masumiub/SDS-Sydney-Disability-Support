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
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                index: true,
                element: <UserDashboard></UserDashboard>
            },
            {
                path: 'yourServices',
                element: <YourServices></YourServices>
            },
            {
                path: 'requestServices',
                element: <RequestServices></RequestServices>
            },
            {
                path: 'serviceRequestStatus',
                element: <ServiceRequestStatus></ServiceRequestStatus>
            },
            {
                path: 'serviceDetails',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: "assignedService",
                Component: AssignedService,
            },

        ],
    }
]);




export default router;