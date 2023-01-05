import React from "react";
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = () => { Собственный контейнер, который создали для понимания
//     debugger;
//     return <StoreContext.Consumer>
//         {
//          (store) => {
//             let state = store.getState().dialogsPage;
//
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator());
//             }
//
//             let onNewMessageChange = (body) => {
//                 store.dispatch(updateNewMessageBodyCreator(body));
//             }
//             return <Dialogs updateNewMessageBody={onNewMessageChange}
//                             sendMessage={onSendMessageClick}
//                             dialogsPage={state}/>;
//         }
//     }
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) =>{ // засунул это = store.getState().
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) =>{ // засунул store.dispatch.bind(store)
    return{
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

const DialogsContainer= connect(mapStateToProps, mapDispatchToProps )(Dialogs);
//мы говорим= Dialogs = ты презентационная компонента, мы хотим
// создать вокруг тебя контейнерную компоненту, которая снабдить тебя данными. Как бы мы dialogs законнектили к стору по этим правилам

export default DialogsContainer;