import React from 'react'; //we should import jsx, react is library from node modules
import Header from "./Header";
import {getAuthUserData } from "../../redux/auth-reducer";
import {connect} from "react-redux";



class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
    return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

});


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);