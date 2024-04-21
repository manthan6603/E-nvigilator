import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import style from "./Dashboard.module.css";

function Dashboard() {
    const [exam, setExam] = useState("Updating...");
    const [question, setQuestion] = useState("Updating...");
    const [user, setUser] = useState("Updating...");

    useEffect(() => {
        setExam("We have total 10 exams");
        setQuestion("We have total 50 questions");
        setUser("We have total 100 users");
    }, []);

    let history = useHistory();

    function showExam() {
        history.push("/AdminDashboard/Exam");
    }

    function showQuestions() {
        history.push("/AdminDashboard/Question");
    }

    function showUsers() {
        history.push("/AdminDashboard/StudentList");
    }

    return (
        <>
            <div id={style.displayHeadingBox}>
                <h1>Dashboard</h1>
            </div>

            <div id={style.box1}>
                <p id={style.countOfExam}>{exam}</p>
                <button onClick={showExam}>View Details</button>
            </div>

            <div id={style.box2}>
                <p id={style.countOfQuestion}>{question}</p>
                <button onClick={showQuestions}>View Details</button>
            </div>

            <div id={style.box3}>
                <p id={style.countOfUser}>{user}</p>
                <button onClick={showUsers}>View Details</button>
            </div>
        </>
    );
}

export default Dashboard;
