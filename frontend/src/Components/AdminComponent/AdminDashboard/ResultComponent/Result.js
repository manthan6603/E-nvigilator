import React from "react";
import style from "../SubjectComponent/Subject.module.css";

function Result() {
    const results = [
        {
            id: 1,
            email: { email: "example1@example.com" },
            sname: { name: "Sample Exam 1" },
            edate: "2024-03-16",
            status: "Pass",
            score: 80,
            totalMarks: 100,
            totalQuestion: 20
        },
        {
            id: 2,
            email: { email: "example2@example.com" },
            sname: { name: "Sample Exam 2" },
            edate: "2024-03-17",
            status: "Fail",
            score: 50,
            totalMarks: 100,
            totalQuestion: 20
        }
    ];

    return (
        <>
            <div id={style.displayHeadingBox}>
                <h2>Exam List</h2>
            </div>

            <div id={style.tableBox}>
                <table>
                    <thead>
                        <tr>
                            <th id="center">User Email</th>
                            <th id="center">Exam Name</th>
                            <th id="center">Exam Date</th>
                            <th id="center">Result Status</th>
                            <th id="center">Your Score</th>
                            <th id="center">Total Marks</th>
                            <th id="center">Total Question</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((data, i) => (
                            <tr key={i}>
                                <td>{data.email.email}</td>
                                <td>{data.sname.name}</td>
                                <td>{data.edate}</td>
                                <td>{data.status}</td>
                                <td>{data.score}</td>
                                <td>{data.totalMarks}</td>
                                <td>{data.totalQuestion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Result;
