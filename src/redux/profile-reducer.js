import {profileApi, usersApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

let initialState = {
    posts: [
        { id: 1, message: "It's my first post", like: "25" },
        { id: 2, message: "It's my second post", like: "30" }
    ],
    profile: null,
    status: ""
};

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                like: "0"
            };
            return {
                ...state,
                posts: [...state.posts, newPost ],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile // поменяем профиль на профиль, который сидит в экшне
            };
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})
export const setStatus = (status) => ({
    type: SET_STATUS, status
})

export const getUserProfile = (userId ) => { // это по идее thunkCreator, we changed getUsersThunkCreator->getUsers
    return (dispatch) => {
        usersApi.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    }
}
export const getStatus = (status ) => { // это по идее thunkCreator, we changed getUsersThunkCreator->getUsers
    return (dispatch) => {
        profileApi.getStatus(status)
            .then(response => {
            dispatch(setStatus(response.data));
        });
    }
}
export const updateStatus = (status ) => { // это по идее thunkCreator, we changed getUsersThunkCreator->getUsers
    return (dispatch) => {
        profileApi.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0){
            dispatch(setStatus(status));
                }
        });
    }
}

export default profileReducer;