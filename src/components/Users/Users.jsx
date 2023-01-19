import React from 'react';
import styles from "./users.module.css"
import userPhoto from '../../assets/images/user.jpeg'
import { NavLink } from "react-router-dom";
import axios from "axios";
import {toggleFollowingProcess} from "../../redux/users-reducer";
import {usersApi} from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</span> //если стоит e=event, то это обработчик событии
            })
            }
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile'} >
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id == u.id)}
                                      onClick={() => {props.unfollow(u.id );}}>
                                Unfollow
                            </button>

                            : <button disabled={props.followingInProgress.some(id => id == u.id)}
                                      onClick={() =>  {props.follow(u.id ); }}>
                                Follow
                            </button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
    </div>


}

export default Users;