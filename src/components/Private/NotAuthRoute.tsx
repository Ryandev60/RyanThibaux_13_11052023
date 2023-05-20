import {Navigate, Outlet} from "react-router";

const NotAuthRoute =  () => {
    const user = localStorage.getItem('token') ?? sessionStorage.getItem('token')

    return !user ? (
        <Outlet />
    ) : (
        <Navigate to="/" />
    );
};

export default NotAuthRoute;