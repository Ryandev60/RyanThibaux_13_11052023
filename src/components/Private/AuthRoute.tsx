import {Navigate, Outlet} from "react-router";

const AuthRoute =  () => {
    const user = localStorage.getItem('token') ?? sessionStorage.getItem('token')

    return user ? (
        <Outlet />
    ) : (
        <Navigate to="/signin" />
    );
};

export default AuthRoute;