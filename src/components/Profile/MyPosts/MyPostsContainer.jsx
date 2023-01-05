import React from 'react'; //we should import jsx, react is library from node modules
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";


// const MyPostsContainer = () => {
//   return (
//       <StoreContext.Consumer>
//           {
//            (store) => {
//           let state = store.getState();
//
//           let onPostChange = (text) => {
//             let action = updateNewPostTextActionCreator(text);
//             store.dispatch(action);
//           }
//
//           let addPost = () => {
//             store.dispatch(addPostActionCreator());
//           }
//           return <MyPosts updateNewPostText={onPostChange}
//                           addPost={addPost}
//                           posts={state.profilePage.posts}
//                           newPostText={state.profilePage.newPostText} />
//         }
//       }
//       </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) =>{ // засунул это = store.getState().
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) =>{ // засунул store.dispatch.bind(store)
    return{
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer= connect(mapStateToProps, mapDispatchToProps )(MyPosts);


export default MyPostsContainer;