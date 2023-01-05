import React from 'react'; //we should import jsx, react is library from node modules
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';


const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post id={p.id} key={p.id} message={p.message} like={p.like} />)

  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  let onAddPost = () => {
    props.addPost();
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange}
            value={props.newPostText} cols="30" rows="10" />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;