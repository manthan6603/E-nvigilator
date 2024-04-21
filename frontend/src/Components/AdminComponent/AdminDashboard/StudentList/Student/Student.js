import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import style from "../../SubjectComponent/Subject.module.css";

function Student() {
    const { id } = useParams();
    const history = useHistory();

    const [email, setEmail] = useState("example@example.com");
    const [result, setResult] = useState([
        {
            id: 1,
            email: { email: "example@example.com" },
            sname: { name: "Sample Exam 1" },
            edate: "2024-03-16",
            status: "Pass",
            score: 80,
            totalMarks: 100
        },
        {
            id: 2,
            email: { email: "example@example.com" },
            sname: { name: "Sample Exam 2" },
            edate: "2024-03-17",
            status: "Fail",
            score: 50,
            totalMarks: 100
        }
    ]);

    useEffect(() => {
        
    }, [id]);

    const handleGoBack = () => {
        history.push("/AdminDashboard/StudentList");
    };

    return (
        <>
            <div id={style.displayHeadingBox}>
                <h2>Student Exam List</h2>
            </div>

            <div id={style.tableBox}>
                <table>
                    <thead>
                        <tr>
                            <th id={style.center}>User Email</th>
                            <th id={style.center}>Exam Name</th>
                            <th id={style.center}>Exam Date</th>
                            <th id={style.center}>Result Status</th>
                            <th id={style.center}>Total Marks</th>
                            <th id={style.center}>Result Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.map((data, i) => {
                            if (data.email.email === email) {
                                return (
                                    <tr key={i}>
                                        <td>{data.email.email}</td>
                                        <td>{data.sname.name}</td>
                                        <td>{data.edate}</td>
                                        <td>{data.status}</td>
                                        <td>{data.score}</td>
                                        <td>{data.totalMarks}</td>
                                    </tr>
                                );
                            }
                            return null;
                        })}
                    </tbody>
                </table>
            </div>

            <div id={style.addSubjectBox}>
                <button onClick={handleGoBack}>Go Back</button>
            </div>
        </>
    );
}

export default Student;
