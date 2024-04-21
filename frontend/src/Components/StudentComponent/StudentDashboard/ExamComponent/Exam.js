// student exam
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, NavLink, useHistory } from "react-router-dom";
import style from "../StudentDashboard.module.css";
// Assuming the baseURL is set globally, or set it locally if needed
axios.defaults.baseURL = 'http://localhost:5000/api';

function Exam() {
    let { category } = useParams();
    const history = useHistory();
    const [exams, setExams] = useState([]); // State to hold exams fetched from the backend

    useEffect(() => {
        // Function to fetch exams from the backend
        const fetchExams = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/exams"); // Adjust URL based on actual API endpoint
                setExams(response.data);
            } catch (error) {
                console.error("Error fetching exams:", error);
            }
        };
        fetchExams();
    }, []);

    const handleGoToExam = async (examId) => {
        try {
            // Placeholder for starting proctoring if necessary
            const proctoringResponse = await fetch("http://127.0.0.1:5000/start_proctoring", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ examId }) // Assume the backend needs to know which exam is being proctored
            });

            if (!proctoringResponse.ok) {
                throw new Error("Failed to start proctoring");
            }

            // Navigate to the exam page
            history.push(`/StudentDashboard/Exam/${category}/${examId}`);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <div id={style.displayBoxHeadingBox}>
                <h1>All {category} Exams</h1>
            </div>
            {
                exams.filter(exam => exam.name === category).map((exam, i) => (
                    <div id={style.displayBoxExamBox} key={i}>
                        <div id={style.div1}><span>{exam.name}</span></div>
                        <div id={style.div2}><span>Exam ID: {exam._id}</span></div>
                        <div id={style.div2}><span>Exam Description: {exam.desc}</span></div>
                        <div id={style.div3}><span>Pass Marks: {exam.passMarks}</span></div>
                        <div id={style.div4}><span>Total Marks: {exam.marks}</span></div>
                        <div id={style.div5}>
                            <button onClick={() => handleGoToExam(exam._id)}>Go to Exam</button>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default Exam;
