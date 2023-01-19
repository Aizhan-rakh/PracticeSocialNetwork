import React from 'react'; //we should import jsx, react is library from node modules
import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";


let mapStateToProps = (state) =>{ // засунул это = store.getState().
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) =>{ // засунул store.dispatch.bind(store)
    return{
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const MyPostsContainer= connect(mapStateToProps, mapDispatchToProps )(MyPosts);


export default MyPostsContainer;