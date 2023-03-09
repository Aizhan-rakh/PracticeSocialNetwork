import './App.css';
import React from 'react'; //we should import jsx, react is library from node modules
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Loginpage from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
// import classes from "./components/Navbar/Navbar.module.css";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            {/* Route is not NavLink */}
                            <Route path='/profile/:userId'
                                   element={<ProfileContainer/>}/>
                            <Route path='/profile'
                                   element={<ProfileContainer/>}/>
                            <Route path={'/dialogs'}
                                   element={<DialogsContainer/>}/>
                            <Route path={'/users'}
                                   element={<UsersContainer/>}/>
                            <Route path={'/login'}
                                   element={<Loginpage/>}/>

                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }

}

export default connect(mapStateToProps, {initializeApp})(App);

// withRouter,


