import style from "./StudentLogin.module.css";
import { NavLink, useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function StudentLogin() {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const history = useHistory();

    const handleLogin = async () => {
        try {
            // Send login data to backend
            const response = await axios.post('http://localhost:5000/api/login', user);
            if (response.status === 200) {
                alert("Login successful");
                sessionStorage.setItem("user", user.email);
                history.push("/StudentDashboard");
            } else {
                alert("Invalid email or password");
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert("Failed to login. Please try again later.");
        }
    };

    const onTextFieldChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div id={style.container}>
            <div id={style.containerHeadingBox}>
                <h1>Student Login</h1>
            </div>
            <div id={style.emailBox}>
                <label htmlFor="email"> Email
                    <input name="email" onChange={onTextFieldChange} type="text" id={style.email} />
                </label>
            </div>
            <div id={style.passwordBox}>
                <label htmlFor="password"> Password
                    <input name="password" onChange={onTextFieldChange} type="password" id={style.password} />
                </label>
            </div>
            <button id={style.login} onClick={handleLogin}>Login</button>
            <div id={style.signup}>
                New to Portal? <NavLink exact to="/StudentSignup"> Register</NavLink>
                <NavLink id={style.goBackLink} exact to="/"> Go Back</NavLink>
            </div>
        </div>
    );
}
export default StudentLogin;