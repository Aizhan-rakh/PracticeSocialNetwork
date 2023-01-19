import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Navigate} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
// import Redirect from 'react-router-dom';


const DialogsContainer = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message id={m.id} key={m.id} message={m.message}/>)

    let addNewMessage = (values) =>{
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Navigate to={"/login"}/>

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <AddMessageForm onSubmit = {addNewMessage}/>
            </div>
        </div>
    );
}

export default DialogsContainer;