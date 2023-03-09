import React from 'react'; //we should import jsx, react is library from node modules
import Header from "./Header";
import {logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component{
    render() {
    return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

});

export default connect(mapStateToProps, {logout})(HeaderContainer);