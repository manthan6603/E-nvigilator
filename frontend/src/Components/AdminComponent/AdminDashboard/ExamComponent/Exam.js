import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import style from "../SubjectComponent/Subject.module.css";

// Assuming the baseURL is set globally, or set it locally if needed
axios.defaults.baseURL = 'http://localhost:5000/api';

function Exam() {
    const [display, setDisplay] = useState(false);
    const [exams, setExams] = useState([]);
    const [newExam, setNewExam] = useState({
        name: "",
        desc: "",
        level: "",
        passMarks: "",
        totalQuestion: "",
        marks: ""
    });

    useEffect(() => {
        fetchExams();
    }, []);

    const fetchExams = async () => {
        try {
            const response = await axios.get('/exams');
            setExams(response.data);
        } catch (error) {
            console.error('Error fetching exams:', error);
        }
    };

    const handleAddExam = () => {
        console.log("Add Exam button clicked");
        setDisplay(true);
    };

    const handleCloseExam = () => {
        setDisplay(false);
    };

    const handleInputChange = (e) => {
        setNewExam({
            ...newExam,
            [e.target.name]: e.target.value
        });
    };

    const handleAddNewExam = async () => {
        try {
            await axios.post('/exams', newExam);
            fetchExams(); // Refresh exam list after adding a new exam
            setNewExam({
                name: "",
                desc: "",
                level: "",
                passMarks: "",
                totalQuestion: "",
                marks: ""
            });
            setDisplay(false);
        } catch (error) {
            console.error('Error adding new exam:', error);
        }
    };

    const deleteExam = async (id) => {
        try {
            await axios.delete(`/exams/${id}`);
            fetchExams(); // Refresh exam list after deleting an exam
        } catch (error) {
            console.error('Error deleting exam:', error);
        }
    };

    return (
        <>
            <div id={style.displayHeadingBox}>
                <h2>Exam List</h2>
            </div>

            <div id={style.tableBox}>
                <table>
                    <thead>
                        <tr>
                            <th id={style.center}>Exam Name</th>
                            <th id={style.center}>Exam Desc.</th>
                            <th id={style.center}>Exam Creation Date</th>
                            <th id={style.center}>Exam Level</th>
                            <th id={style.center}>Options</th>
                        </tr>
                    </thead>
                    <tbody id={style.tbody}>
                        {exams.map((exam, i) => (
                            <tr key={i}>
                                <td>{exam.name}</td>
                                <td>{exam.desc}</td>
                                <td>{new Date(exam.date).toLocaleDateString()}</td>
                                <td>{exam.level}</td>
                                <td>
                                    <NavLink to={`/AdminDashboard/Exam/Details/${exam._id}`}>
                                        <button>Details</button>
                                    </NavLink>
                                    <NavLink to={`/AdminDashboard/Exam/ViewQuestion/${exam._id}`}>
                                        <button>View Question</button>
                                    </NavLink>
                                    <NavLink to={`/AdminDashboard/Exam/AddQuestion/${exam._id}`}>
                                        <button>Add Question</button>
                                    </NavLink>
                                    <button onClick={() => deleteExam(exam._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div id={style.addSubjectBox}>
                <button style={{ visibility: 'visible', position: 'relative' }} onClick={handleAddExam}>Add Exam</button>
            </div>

            {display && (
                <div id={style.addBox}>
                    <label htmlFor="name">Exam Name</label>
                    <input id="name" name="name" type="text" value={newExam.name} onChange={handleInputChange} placeholder="Enter Exam Name" />
                    <label htmlFor="desc">Exam Description</label>
                    <input id="desc" name="desc" type="text" value={newExam.desc} onChange={handleInputChange} placeholder="Enter Exam Description" />
                    <label htmlFor="level">Exam Level</label>
                    <input id="level" name="level" type="text" value={newExam.level} onChange={handleInputChange} placeholder="Enter Exam Level" />
                    <label htmlFor="passMarks">Pass Marks</label>
                    <input id="passMarks" name="passMarks" type="text" value={newExam.passMarks} onChange={handleInputChange} placeholder="Enter Pass Marks" />
                    <label htmlFor="totalQuestion">Total Questions</label>
                    <input id="totalQuestion" name="totalQuestion" type="text" value={newExam.totalQuestion} onChange={handleInputChange} placeholder="Enter Total Questions" />
                    <label htmlFor="marks">Marks</label>
                    <input id="marks" name="marks" type="text" value={newExam.marks} onChange={handleInputChange} placeholder="Enter Marks" />
                    <div id={style.buttonBox}>
                        <button onClick={handleAddNewExam}>Add</button>
                        <button onClick={handleCloseExam}>Cancel</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Exam;
