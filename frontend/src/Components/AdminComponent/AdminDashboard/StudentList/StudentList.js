import React, { useState, useEffect } from "react";
import axios from "axios";

function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/students");
                setStudents(response.data.students);
            } catch (error) {
                console.error("Error fetching students:", error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div>
            <h2>Student List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default StudentList;
