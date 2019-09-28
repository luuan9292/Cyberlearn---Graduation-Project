import React from "react";

import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";
import CartPage from "../pages/CartPage";
import CourseItemPage from "../pages/CourseItemPage";
import CoursesPage from "../pages/CoursesPage";
import UserPage from "../pages/UserPage";
import NotfoundPage from "../pages/NotfoundPage";
import CheckoutPage from "../pages/CheckoutPage";
import AdminPage from "../pages/AdminPage";
import EventsPage from "../pages/EventsPage";
import AboutPage from "../pages/AboutPage";

export const routes = [
    {
        path: "/",
        exact: true,
        main: ({history}) => <HomePage history={history}/>
    },
    {
        path: "/courses",
        exact: true,
        main: ({history, match}) => <CoursesPage history={history} match={match}/>
    },
    {
        path: "/courses/:id",
        exact: true,
        main: ({match}) => <CourseItemPage  match={match}/>
    },
    {
        path: "/cart",
        exact: false,
        main: ({match}) => <CartPage match={match} />
    },
    {
        path: "/checkout",
        exact: false,
        main: ({match}) => <CheckoutPage match={match} />
    },
    {
        path: "/user/:id",
        exact: false,
        main: ({match}) => <UserPage match={match} />
    },
    {
        path: "/blog",
        exact: false,
        main: ({match}) => <BlogPage match={match} />
    },
    {
        path: "/events",
        exact: false,
        main: () => <EventsPage />
    },
    {
        path: "/about",
        exact: false,
        main: ({match}) => <AboutPage match={match} />
    },
    {
        path: "/admin",
        exact: false,
        main: () => <AdminPage />
    },
    {
        path: "",
        exact: true,
        main: () => <NotfoundPage />
    }
]