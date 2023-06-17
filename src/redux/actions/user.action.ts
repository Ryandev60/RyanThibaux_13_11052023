import axios from "axios";
import {URL_SIGNIN, URL_PROFILE, URL_UPDATE_USER} from "../../config.ts";
import {Action, Dispatch} from "@reduxjs/toolkit";

export const USER_SIGNIN = "USER_SIGNIN";
export const USER_PROFILE = "USER_PROFILE";
export const USER_SIGNOUT = "USER_SIGNOUT";

interface userSignInData {
    email: string,
    password: string,
    rememberMe: boolean
}

export const userSignIn = (data: userSignInData) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            const response = await axios.post(URL_SIGNIN, data)
            dispatch({type: USER_SIGNIN, payload: response.data})
            if (data.rememberMe) {
                localStorage.setItem("token", response.data.body.token)
                localStorage.setItem("email", response.data.body.email)
            } else {
                sessionStorage.setItem("token", response.data.body.token)
                sessionStorage.setItem("email", response.data.body.email)
            }
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}


export const userProfile = () => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            const token = await localStorage.getItem("token") ?? sessionStorage.getItem("token")
            const response = await axios.post(URL_PROFILE, token, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch({type: USER_PROFILE, payload: response.data.body})
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}

export const userSignOut = () => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            localStorage.removeItem("token")
            sessionStorage.removeItem("token")
            dispatch({type: USER_SIGNOUT, payload: {}})
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}

export const userUpdate = (data: any) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            const token = await localStorage.getItem("token") ?? sessionStorage.getItem("token")
            const response = await axios.put(URL_UPDATE_USER, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch({type: USER_PROFILE, payload: response.data.body})
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}