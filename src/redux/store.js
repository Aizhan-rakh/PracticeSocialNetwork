import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "It's my first post", like: "25" },
                { id: 2, message: "It's my second post", like: "30" }
            ],
            newPostText: 'aizhan.com'
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Margo' },
                { id: 2, name: 'Aisara' },
                { id: 3, name: 'Karro' }
            ]
        }
    },
    _callSubscriber() {
        console.log('state was changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;
