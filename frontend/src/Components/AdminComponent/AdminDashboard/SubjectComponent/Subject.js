import React, { useState } from "react";
import style from "./Subject.module.css";

function Subject() {
    const [display, setDisplay] = useState({
        display: "none"
    });

    const [subjects, setSubjects] = useState([]);

    const [subject, setSubject] = useState({
        name: ""
    });

    const [status, setStatus] = useState(false);
    const [statusDelete, setStatusDelete] = useState(false);

    function handleAddSubject() {
        setDisplay({ display: "block" });
    }

    function handleCloseAdd() {
        setDisplay({ display: "none" });
    }

    function handleInput(e) {
        setSubject({
            name: e.target.value
        });
    }

    function handleAddNewSubject() {
        setSubjects([...subjects, subject]);
        setStatus(true);
    }

    function deleteSubject(name) {
        setSubjects(subjects.filter(sub => sub.name !== name));
        setStatusDelete(true);
    }

    if (statusDelete) return <Subject />;
    if (status) return <Subject />;

    if (subjects.length === 0) {
        return (
            <div id={style.content}>
                <div id={style.displayHeadingBox}>
                    <h2>No Subject Available</h2>
                </div>
                <div id={style.addSubjectBox}>
                    <button onClick={handleAddSubject}>Add Subject</button>
                </div>
                <div id={style.addBox} style={display}>
                    <label htmlFor="">Enter Subject </label>
                    <input onChange={handleInput} type="text" placeholder="Enter Subject name" />
                    <div id={style.buttonBox}>
                        <button onClick={handleAddNewSubject}>Add</button>
                        <button onClick={handleCloseAdd}>Close</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div id={style.content}>
            <div id={style.displayHeadingBox}>
                <h2>Subject List</h2>
            </div>
            <div id={style.tableBox}>
                <table>
                    <thead>
                        <tr>
                            <th id={style.center}>Subject Name</th>
                            <th id={style.center}>Options</th>
                        </tr>
                    </thead>
                    <tbody id={style.tbody}>
                        {subjects.map((data, i) => (
                            <tr key={i}>
                                <td>{data.name}</td>
                                <td><button onClick={() => deleteSubject(data.name)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div id={style.addSubjectBox}>
                <button onClick={handleAddSubject}>Add Subject</button>
            </div>
            <div id={style.addBox} style={display}>
                <label htmlFor="">Enter Subject </label>
                <input onChange={handleInput} type="text" placeholder="Enter Subject name" />
                <div id={style.buttonBox}>
                    <button onClick={handleAddNewSubject}>Add</button>
                    <button onClick={handleCloseAdd}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default Subject;
