import {USER_SIGNIN, USER_PROFILE, USER_SIGNOUT} from "../actions/user.action.ts";
import {Action} from "@reduxjs/toolkit";

const initialState = {};

interface UserData {
    email: string,
    firstName: string,
    lastName: string,
    createdAt: string,
    updatedAt: string,
    id: string
}

interface UserAction extends Action {
    payload: UserData;
}

export default function userReducer(state = initialState, action: UserAction) {
    switch (action.type) {
        case USER_SIGNIN:
            return {
                ...state,
                user: action.payload,
            }
        case USER_PROFILE:
            return {
                ...state,
                user: action.payload,
            }
        case USER_SIGNOUT:
            return initialState
        default:
            return state;
    }
}