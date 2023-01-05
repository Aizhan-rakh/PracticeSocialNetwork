import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const DialogsContainer = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key ={d.id} id={d.id} />)
    let messagesElements = state.messages.map(m => <Message id={m.id} key ={m.id} message={m.message} />)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder="Enter your message"></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send </button></div>
                </div>
            </div>
        </div>
    );
}

export default DialogsContainer;