import Home from "./components/Home/Home.tsx";
import Header from "./components/Layout/Header/Header.tsx";
import Footer from "./components/Layout/Footer/Footer.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./assets/index.css"
import SignIn from "./components/SignIn/SignIn.tsx";
import {useDispatch} from "react-redux";
import {userProfile} from "./actions/user.action.ts";
import {useEffect} from "react";
import Profile from "./components/Profile/Profile.tsx";


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
                    <Route path="/" element={<Home/>}/>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default App
