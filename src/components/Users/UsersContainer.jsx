import React from 'react';
import {connect} from "react-redux";
import {
    follow, setCurrentPage, unfollow,
    toggleFollowingProcess, getUsers
} from "../../redux/users-reducer";
import Users from "./Users";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";
import {usersApi} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {
    // constructor(props) { Конструктор можем не писать, так как он только констириует своего перебрасывает с родительского, а это и так происходит за кадром
    //     super(props);
    //     //     props.setUsers( [
    //     //         { id: 1, photoUrl: 'https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png?w=1000&h=563&crop=1',
    //     //             followed: false, fullName: 'Aizhan', status: 'I am a boss', location: {city: 'Atyrau', country: 'KZ'}},
    //     //         { id: 2, photoUrl: 'https://variety.com/wp-content/uploads/2022/02/Screen-Shot-2022-05-09-at-10.04.13-AM.png?w=1000&h=563&crop=1',
    //     //             followed: true, fullName: 'Aisara', status: 'I am a boss too', location: {city: 'Atyrau', country: 'KZ'}}
    //     //     ]
    //     // ]
    //
    // } так как это происходит так

    // componentDidMount() {
    //     this.props.toggleIsFetching(true);
    //     usersApi.getUsers(this.props.currentPage, this.props.pageSize)
    //         .then(data => {
    //             this.props.toggleIsFetching(false);
    //             this.props.setUsers(data.items);
    //             this.props.setTotalUsersCount(data.totalCount);
    //         });
    // }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   // toggleFollowingProcess={this.props.toggleFollowingProcess}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,


    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProcess, getUsers})
)(UsersContainer);


// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUserAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//         //мы диспатчим не экшн креатр, а экшн=вызов экшн креатора, который возвращает экшн (объект)
//     }
// }

//    ПРО (connect(mapStateToProps, {follow, unfollow})(Функциональная компонента)  берет функциональную компоненту
// и оборачивает коннектом , чтобы прокинуть пропсы в нее