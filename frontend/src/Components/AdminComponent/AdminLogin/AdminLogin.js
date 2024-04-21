import style from "./AdminLogin.module.css";
import { NavLink, useHistory } from "react-router-dom";
import { useState } from "react";

function AdminLogin() {
    const [admin, setAdmin] = useState({
        admin_name: "",
        admin_password: ""
    });

    const history = useHistory();

    function handleInput(e) {
        setAdmin({
            ...admin,
            [e.target.name]: e.target.value
        });
    }

    function login(e) {
        e.preventDefault();
        // Simulating a successful login with static credentials
        const staticAdminName = "admin";
        const staticAdminPassword = "admin123";

        if (admin.admin_name === staticAdminName && admin.admin_password === staticAdminPassword) {
            alert("Success");
            history.push("/AdminDashboard");
        } else {
            alert("Incorrect username or password");
        }
    }

    return (
        <div id={style.container}>
            <div id={style.containerHeadingBox}>
                <h1>Admin Login</h1>
            </div>

            <div id={style.emailBox}>
                <label htmlFor="email"> Email
                    <input name="admin_name" onChange={(e) => handleInput(e)} type="text" id={style.email} />
                </label>
            </div>

            <div id={style.passwordBox}>
                <label htmlFor="password"> Password
                    <input name="admin_password" onChange={(e) => handleInput(e)} type="password" id={style.password} />
                </label>
            </div>

            <button onClick={(e) => login(e)} id={style.login}>Login</button>

            <NavLink to="/" id={style.goBackLink}> Go Back</NavLink>
        </div>
    );
}

export default AdminLogin;
