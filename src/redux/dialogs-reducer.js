const UPDATE_NEW_MEESSAGE_BODY = 'UPDATE-NEW-MEESSAGE-BODY';
const SEND_MEESSAGE = 'SEND_MEESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
    ],
    dialogs: [
        { id: 1, name: 'Aizhan' },
        { id: 2, name: 'Aisara' },
        { id: 3, name: 'Karro' },
        { id: 4, name: 'Ahmad' }
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MEESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MEESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 3, message: body}] //сейчас пишут так вместо push, for unshift просто меняешь местами
            }
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({ type: SEND_MEESSAGE })
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MEESSAGE_BODY, body: body
})

export default dialogsReducer;