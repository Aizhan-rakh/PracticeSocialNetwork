import {authApi, usersApi} from "../api/api";
import {setUserProfile} from "./profile-reducer";
import {getAuthUserData, setAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
})


export const initializeApp = () => (dispatch) => { //it is THUNK CREATOR
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then( () => {
        dispatch(initializedSuccess())
        })
}

export default appReducer;