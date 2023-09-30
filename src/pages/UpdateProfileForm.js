import React from "react";
import { useFirebaseContext } from "../context/FirebaseContext";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";


const UpdateProfileForm = () => {

    const { currentUser, updatedDisplayName, setUpdatedDisplayName, updateUserProfile,isLoading } = useFirebaseContext();


    if (isLoading) {

        return <Loading />

    }
    else {

        return (
            <div className="updateprofileform-container">
                {currentUser ? (
                    <div>
                        <h1 className="title">Update Your Profile</h1>
                        <div className="input-container">
                            <input
                                type="text"
                                className="display-name-input"
                                value={updatedDisplayName}
                                onChange={(event) => {
                                    setUpdatedDisplayName(event.target.value);
                                }}
                                placeholder="Display Name"
                            />
                            <input
                                type="text"
                                className="email-input"
                                value={currentUser.email}
                                disabled
                            />
                        </div>
                        <button className="update-button" onClick={() => { updateUserProfile() }}>
                            Update
                        </button>
                        <button className="back-button">
                            <Link to={"/"} className="link-text">
                                Back To HomePage
                            </Link>
                        </button>
                    </div>
                ) : (
                    <h1></h1>
                )}
            </div>
        );
    }




};

export default UpdateProfileForm;
