const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
    posts: [
        { id: 1, message: "It's my first post", like: "25" },
        { id: 2, message: "It's my second post", like: "30" }
    ],
    newPostText: 'aizhan.com',
    profile: null
};

const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: "0"
            };
            return {
                ...state,
                posts: [...state.posts, newPost ],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText

            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile // поменяем профиль на профиль, который сидит в экшне
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})

export default profileReducer;