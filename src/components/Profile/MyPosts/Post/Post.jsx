import React from 'react'; //we should import jsx, react is library from node modules
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://i.guim.co.uk/img/media/3e48a86cfcc3bed66fd690ddeae40378c7eb3103/124_0_1799_1080/master/1799.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d1837e6746af8df41d218e34ecb7bdde" alt="" />
      {props.message}
      <div>
        <span>{props.like} likes </span>
      </div>
    </div>
  )
}

export default Post;