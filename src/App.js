import './App.css';
import React from 'react'; //we should import jsx, react is library from node modules
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import classes from "./components/Navbar/Navbar.module.css";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Routes>
                        {/* Route is not NavLink */}
                        <Route path='/profile/:userId'
                               element={<ProfileContainer  />}
                        />
                        <Route path='/profile'
                               element={<ProfileContainer  />}
                        />
                        <Route path={'/dialogs'}
                               element= {<DialogsContainer />} />
                        <Route path={'/users'}
                               element= {<UsersContainer />} />

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;


