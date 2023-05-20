import {USER_SIGNIN, USER_PROFILE, USER_SIGNOUT} from "../actions/user.action.ts";
import {Action} from "@reduxjs/toolkit";

const initialState = {};

export default function userReducer(state = initialState, action: Action) {
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