import {Navigate} from "react-router-dom";


const PrivateRoute = ({isAuth, component: Component}) => {

    if (isAuth) {
        return <Component/>;
    } else {
        return <Navigate to="/login" />;
    }
};

export default PrivateRoute;
