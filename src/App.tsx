import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./assets/index.css"
import {useDispatch} from "react-redux";
import {userProfile} from "./actions/user.action.ts";
import {useEffect} from "react";
import Header from "./components/Layout/Header/Header.tsx";
import SignIn from "./components/SignIn/SignIn.tsx";
import Home from "./components/Home/Home.tsx";
import Footer from "./components/Layout/Footer/Footer.tsx";
import Profile from "./components/Profile/Profile.tsx";
import Error from "./components/Error/Error.tsx";
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
                    <Route element={<NotAuthRoute/>}>
                        <Route path="/signin" element={<SignIn/>}/>
                    </Route>
                    <Route path="/" element={<Home/>}/>
                    <Route path="*" element={<Error/>}/>
                    <Route element={<AuthRoute/>}>
                        <Route path="/profile" element={<Profile/>}/>
                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default App
