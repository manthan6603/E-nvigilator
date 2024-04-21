
import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import style from "../StudentDashboard.module.css";

// Assuming the baseURL is set globally, or set it locally if needed
axios.defaults.baseURL = 'http://localhost:5000/api';

function Subject() {
    const [exams, setExams] = useState([]);

    useEffect(() => {
        // Fetch exams when the component mounts
        const fetchExams = async () => {
            try {
                const response = await axios.get("/exams");
                setExams(response.data);
            } catch (error) {
                console.error('Error fetching exams:', error);
            }
        };

        fetchExams();
    }, []);

    return (
        <>
            <div id={style.displayBoxHeadingBox}>
                <h1>Choose Subjects</h1>
            </div>

            {exams.map((exam, i) => (
                <div id={style.displayBoxSubjectBox} key={i}>
                    <div id={style.subjectText}>
                        <span>{exam.name}</span>
                    </div>
                    <div id={style.subjectButton}>
                        <NavLink exact to={`/StudentDashboard/Exam/${exam.name}`}>
                            <button>Go to Exam</button>
                        </NavLink>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Subject;
