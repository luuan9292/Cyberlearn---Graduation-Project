import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import App from "./components/App.jsx";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk";

import { firebaseApp } from "./services/firebase";
import { firestore } from "./services/firebase";
import { setCurrentUser } from "./store/actions/users";

let store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

/**----------------------------------------
* Function: Kiem tra trang thai cua user, lang nghe theo thoi gian thuc
* Component: HomePage
----------------------------------------**/
firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        firestore
            .collection("users")
            .doc(user.uid)
            .get()
            .then(snapshot => {
                store.dispatch(setCurrentUser(snapshot.data()));
            });
            store.dispatch(setCurrentUser("loading"));
    } else {
        store.dispatch(setCurrentUser({}));
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
