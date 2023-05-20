import Home from "./components/Home/Home.tsx";
import Header from "./components/Layout/Header/Header.tsx";
import Footer from "./components/Layout/Footer/Footer.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./assets/index.css"
import SignIn from "./components/SignIn/SignIn.tsx";
import {useDispatch, useSelector,} from "react-redux";
import {userProfile} from "./actions/user.action.ts";
import {useEffect} from "react";
import Profile from "./components/Profile/Profile.tsx";
import AuthRoute from "./components/Private/AuthRoute.tsx";
import NotAuthRoute from "./components/Private/NotAuthRoute.tsx";


function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem('token') ?? sessionStorage.getItem('token')
        token && dispatch(userProfile())
    }, []);

    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route element={<NotAuthRoute />}>
                        <Route path="/signin" element={<SignIn/>}/>
                    </Route>
                    <Route path="/" element={<Home/>}/>
                    <Route element={<AuthRoute />}>
                        <Route path="/profile" element={<Profile/>}/>
                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default App
