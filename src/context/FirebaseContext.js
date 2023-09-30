import React, { createContext, useContext, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const firebaseConfig = {
    apiKey: "AIzaSyCZsCvNiTKBxJ_4Kl7YdcQFsKKjMKFuD2w",
    authDomain: "first-react-project-95a8c.firebaseapp.com",
    databaseURL: "https://first-react-project-95a8c-default-rtdb.firebaseio.com",
    projectId: "first-react-project-95a8c",
    storageBucket: "first-react-project-95a8c.appspot.com",
    messagingSenderId: "199067352432",
    appId: "1:199067352432:web:14139ea86d1976eb9d63b5"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();





const FirebaseContext = createContext();

export const useFirebaseContext = () => {
    return useContext(FirebaseContext);
};



export const FirebaseContextProvider = ({ children }) => {


    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(null);
    const [updatedDisplayName, setUpdatedDisplayName] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const signInWithGoogle = () => {

        signInWithPopup(auth, provider)
            .then((result) => {

            })
            .catch((error) => {

            })

    }



    const getTheCurrentSignedInUser = () => {
        onAuthStateChanged(auth, (user) => {

            if (user) {

                setCurrentUser(user);
                setUpdatedDisplayName(user.displayName);


            }
            else {
                setCurrentUser(null);
            }

            setIsLoading(false);
        })
    }



    const signOutUser = () => {

        auth.signOut()
            .then((result) => {

            })
            .catch((error) => {

            })
    }


    const updateUserProfile = () => {

        setIsLoading(true);
        updateProfile(auth.currentUser, {
            displayName: updatedDisplayName
        })
            .then(() => {

                setIsLoading(false);
                const updatedUser = { ...auth.currentUser };

                setCurrentUser(updatedUser);
                navigate("/");

            })
            .catch((error) => {

            });
    }


    useEffect(() => {
        getTheCurrentSignedInUser();

    }, []);



    return (
        <FirebaseContext.Provider value={{ signInWithGoogle, getTheCurrentSignedInUser, signOutUser, updateUserProfile, currentUser, updatedDisplayName, setUpdatedDisplayName, isLoading, setIsLoading }}>
            {children}
        </FirebaseContext.Provider>
    );
};

