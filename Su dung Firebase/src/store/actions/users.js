import * as type from "../../constants/actionType";
import { firebaseApp } from "../../services/firebase";
import { firestore } from "../../services/firebase";
import _ from "lodash";

import { notify } from "../../components/Notify/Notify";

export const signupRequest = (user, callback) => {
    firebaseApp
        .auth()
        .createUserWithEmailAndPassword(user.email, user.matKhau)
        .then(res => {
            let userData = _.omit(user, ["matKhau"]);
            firestore
                .collection("users")
                .doc(res.user.uid)
                .set({ ...userData, id: res.user.uid });
            callback(userData);
            notify("success", "Sign Up Successful");
        })
        .catch(err => {
            notify("error", "Something went wrong!");
        });
};

export const addUser = user => {
    return {
        type: type.ADD_USER,
        payload: user
    }
}

export const signinRequest = (user, callback) => {
    firebaseApp
        .auth()
        .signInWithEmailAndPassword(user.email, user.matKhau)
        .then(() => {
            callback();
            notify("success", "Sign In Successful");
        })
        .catch(err => {
            notify("error", "Something went wrong!");
        });
};

export const signoutRequest = () => {
    return dispatch => {
        firebaseApp
            .auth()
            .signOut()
            .then(() => {
                dispatch(setCurrentUser({}));
            });
    };
};

export const setCurrentUser = user => {
    return {
        type: type.SET__CURRENT__USER,
        payload: user
    };
};

export const getUsersRequest = () => {
    return dispatch => {
        firestore
            .collection("users")
            .get()
            .then(snapshot => {
                let usersData = [];
                snapshot.docs.forEach(doc => {
                    if (doc && doc.exists) {
                        let user = doc.data();
                        usersData.push(user);
                    }
                });
                dispatch(getUsers(usersData));
            })
            .catch(error => {
                console.log(error);
            });
    };
};

export const getUsers = usersData => {
    return {
        type: type.GET_USERS,
        payload: usersData
    };
};

export const getUserDetail = (taiKhoan, callback) => {
    firestore
        .collection("users")
        .doc(taiKhoan)
        .get()
        .then(snapshot => {
            callback(snapshot.data());
        })
        .catch(err => {
            console.log(err);
        });
};

export const searchUser = keyword => {
    return {
        type: type.SEARCH_USER,
        payload: keyword
    };
};