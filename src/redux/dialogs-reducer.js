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
    ]
    // newMessageBody: ""
};

const dialogsReducer = (state= initialState, action) => {
    switch (action.type) {
        case SEND_MEESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 3, message: body}] //сейчас пишут так вместо push, for unshift просто меняешь местами
            }
        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MEESSAGE, newMessageBody })

export default dialogsReducer;