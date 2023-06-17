import "./signInForm.scss"
import {FormEvent, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {userProfile, userSignIn} from "../../../redux/actions/user.action.ts";
import {useNavigate} from "react-router-dom";

const SignInForm = () => {
    const userNameIpt = useRef<HTMLInputElement>(null)
    const passwordIpt = useRef<HTMLInputElement>(null)
    const checkboxIpt = useRef<HTMLInputElement>(null)

    const [error, setError] = useState<string>('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit =  async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            email: userNameIpt.current?.value,
            password: passwordIpt.current?.value,
            rememberMe: checkboxIpt.current?.checked
        }
        try {
            await dispatch(userSignIn(data))
            dispatch(userProfile())
            navigate('/profile')

        } catch(error) {
            if(error.message === "Network Error" ){
                setError("Error 500 : Network Error")
            } else {
                setError(error.response.data.message)
            }
        }
    }
    return (
        <form className="sign-in__form" onSubmit={(e) => handleSubmit(e)}>
            <i className="fa fa-user-circle"></i>
            <legend className="sign-in__form__legend">Sign In</legend>
            <div className="sign-in__form__group">
                <label htmlFor="username" className="sign-in__form__group__label">Username</label>
                <input type="text" id="username" className="sign-in__form__group__input" ref={userNameIpt}/>
            </div>
            <div className="sign-in__form__group">
                <label htmlFor="password" className="sign-in__form__group__label">Password</label>
                <input type="password" id="password" className="sign-in__form__group__input" ref={passwordIpt}/>
            </div>
            <div className="sign-in__form__group--checkbox">
                <input type="checkbox" id="checkbox" className="sign-in__form__group--checkbox__input"
                       ref={checkboxIpt}/>
                <label htmlFor="checkbox" className="sign-in__form__group--checkbox__label">Remember me</label>
            </div>
            <button type="submit" className="sign-in__form__button">Sign In</button>
            {error && <p className="sign-in__form__error">{error}</p>}
        </form>
    );
};

export default SignInForm;
