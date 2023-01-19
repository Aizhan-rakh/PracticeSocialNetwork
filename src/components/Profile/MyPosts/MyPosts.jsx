import React from 'react'; //we should import jsx, react is library from node modules
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, Form} from "react-final-form"; //собирать данные и отправить их в handleSubmit
import {composeValidators, maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


let AddNewPostForm =(props) => {
    return (
        <Form
            onSubmit={props.onSubmit}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field component= {Textarea} name={"newPostText"}
                               validate={composeValidators[required, maxLengthCreator(15)]}
                        placeholder ={"Post message"}/>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </form>
            )}
        />
    )
}

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post id={p.id} key={p.id} message={p.message} like={p.like} />)

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
   props.addPost(values.newPostText);
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
        <AddNewPostForm onSubmit = {onAddPost}/>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;