import React from "react";
import { sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);