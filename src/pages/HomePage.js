import React from "react";
import { useFirebaseContext } from "../context/FirebaseContext";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import 'font-awesome/css/font-awesome.min.css';
const HomePage = () => {
    const { signInWithGoogle, currentUser, signOutUser, isLoading } = useFirebaseContext();


    if (isLoading) {

        return <Loading />

    }
    else {

        return (
            <div className="home-container">

                {currentUser ? (
                    <div className="user-container">
                        <h1 className="welcome-text">Welcome, {currentUser.displayName}</h1>
                        <p className="email-text">Email: {currentUser.email}</p>


                        <Link to={"/updateProfile"} className="link-text">
                            <button className="update-button"> Update Profile</button>
                        </Link>

                        <button className="logout-button" onClick={() => { signOutUser() }}>
                            Logout
                        </button>
                    </div>
                ) : (
                    
                    <div>
                 
                    <button className="signin-button" onClick={() => { signInWithGoogle() }}>   <i className="fa fa-google fa-lg"></i>Sign In With Google</button>
                    </div>
                )}
            </div>
        );
    }



};

export default HomePage;
