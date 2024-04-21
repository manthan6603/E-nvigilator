// Import required modules
import { NavLink, useHistory } from "react-router-dom";
import { useState } from "react";
import style from "./StudentSignup.module.css";
import axios from "axios"; // Import Axios for making HTTP requests

function StudentSignup() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const endpointUrl = 'http://localhost:5000/api/signup'; // Correct backend server endpoint URL
    const [confirmPassword, setConfirmPassword] = useState("");

    const history = useHistory();

    function onTextFieldChange(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }

    function handlePasswordChange(e) {
        setConfirmPassword(e.target.value);
    }

    async function handleSignup() {
        if (userData.password === confirmPassword) {
            try {
                // Send signup data to backend using the correct endpoint URL
                await axios.post(endpointUrl, userData);
                alert("Your account has been created.");
                alert("Please login.");
                history.push("/StudentLogin");
            } catch (error) {
                console.error('Error creating user:', error);
                alert("Failed to create account. Please try again later.");
            }
        } else {
            alert("Password did not match.");
        }
    }

    return (
        <div id={style.container}>
            <div id={style.formHeading}>
                <h1>Student Signup</h1>
                <p>Please complete the form below to register with us</p>
            </div>
            <div id={style.nameBox}>
                <label htmlFor="name">Name
                    <input onChange={onTextFieldChange} type="text" name="name" required />
                </label>
            </div>
            <div id={style.emailBox}>
                <label htmlFor="email">Email
                    <input onChange={onTextFieldChange} type="text" name="email" required />
                </label>
            </div>
            <div id={style.passwordBox}>
                <label htmlFor="password">Password
                    <input onChange={onTextFieldChange} type="password" name="password" required />
                </label>
            </div>
            <div id={style.confirmPasswordBox}>
                <label htmlFor="confirmPassword">Confirm Password
                    <input onChange={handlePasswordChange} type="password" name="confirmPassword" required />
                </label>
            </div>
            <button id={style.signup} onClick={handleSignup}>Sign Up</button>
            <div id={style.login}>
                Have an account? <NavLink exact to="/StudentLogin">Log in</NavLink>
            </div>
        </div>
    );
}

export default StudentSignup;
