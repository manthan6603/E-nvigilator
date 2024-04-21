import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import style from "../../SubjectComponent/Subject.module.css";

function ViewQuestion() {
    const { id } = useParams();

    const [display, setDisplay] = useState({
        display: "none"
    });

    function handleEditQuestion(questionId) {
        setDisplay({ display: "block" });
        setDataInInputField(questionId);
    }

    function handleClose() {
        setDisplay({ display: "none" });
    }

    const [questions, setQuestions] = useState([
        {
            id: 1,
            qname: "Sample Question",
            optionOne: "Option A",
            optionTwo: "Option B",
            optionThree: "Option C",
            optionFour: "Option D",
            answer: "A",
            ename: 1,
            sname: { name: "Sample Subject" }
        }
    ]);

    const [updatedQ, setUpdatedQ] = useState({
        qname: "",
        optionOne: "",
        optionTwo: "",
        optionThree: "",
        optionFour: "",
        answer: "",
        ename: id,
        sname: { name: "" }
    });

    function onTextFieldChange(e) {
        setUpdatedQ({
            ...updatedQ,
            [e.target.name]: e.target.value
        });
    }

    const [qId, setQId] = useState();

    function setDataInInputField(questionId) {
        setQId(questionId);
        const question = questions.find(q => q.id === questionId);
        if (question) {
            setUpdatedQ(question);
        }
    }

    function updateQuestion() {
        setQuestions(questions.map(q => (q.id === qId ? updatedQ : q)));
        handleClose();
    }

    const history = useHistory();

    function handleGoBack() {
        history.push("/AdminDashboard/Exam");
    }

    function deleteQuestion(id) {
        setQuestions(questions.filter(q => q.id !== id));
    }

    return (
        <>
            <div id={style.displayHeadingBox}>
                <h2>Question List</h2>
            </div>

            <div id={style.tableBox}>
                <table>
                    <thead>
                        <tr>
                            <th id={style.center}>Question Name</th>
                            <th id={style.center}>Option one</th>
                            <th id={style.center}>Option two</th>
                            <th id={style.center}>Option three</th>
                            <th id={style.center}>Option four</th>
                            <th id={style.center}>Question Answer</th>
                            <th id={style.center}>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((data, i) => (
                            <tr key={i}>
                                <td>{data.qname}</td>
                                <td>{data.optionOne}</td>
                                <td>{data.optionTwo}</td>
                                <td>{data.optionThree}</td>
                                <td>{data.optionFour}</td>
                                <td>{data.answer}</td>
                                <td>
                                    <button onClick={() => handleEditQuestion(data.id)}>Edit</button>
                                    <button onClick={() => deleteQuestion(data.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div id={style.addSubjectBox}>
                <button onClick={handleGoBack}>Go Back</button>
            </div>

            <div id={style.addBox} style={display}>
                <label>Enter Question </label>
                <input
                    value={updatedQ.qname}
                    onChange={onTextFieldChange}
                    name="qname"
                    type="text"
                    placeholder="Enter Question "
                />

                {/* Rest of the input fields */}
                <div id={style.buttonBox}>
                    <button onClick={updateQuestion}>Update Question</button>
                    <button onClick={handleClose}>Close</button>
                </div>
            </div>
        </>
    );
}

export default ViewQuestion;
