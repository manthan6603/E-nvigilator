import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import style from "../../SubjectComponent/Subject.module.css";

// Set base URL for Axios requests to communicate with the backend on port 5000
axios.defaults.baseURL = 'http://localhost:5000/api';

function AddQuestion() {
    const { id } = useParams(); // This is the exam ID

    const [question, setQuestion] = useState({
        questionText: "",
        options: ["", "", "", ""],
        correctOption: ""
    });

    const history = useHistory();

    const handleInputChange = (e, index) => {
        if (index !== undefined) { // This means it's one of the options being updated
            const updatedOptions = [...question.options];
            updatedOptions[index] = e.target.value;
            setQuestion({
                ...question,
                options: updatedOptions
            });
        } else {
            // For non-array fields like questionText and correctOption
            setQuestion({
                ...question,
                [e.target.name]: e.target.value
            });
        }
    };

    const addNewQuestion = async () => {
        try {
            // Ensure the base URL is correct and include the exam ID in the endpoint
            const response = await axios.post(`http://localhost:5000/api/exams/${id}/questions`, question);
            if (response.status === 201) {
                history.push(`/AdminDashboard/Exam/ViewQuestion/${id}`); // Redirect on successful post
            }
        } catch (error) {
            console.error('Error adding new question:', error.response.data);
        }
    };

    const handleGoBack = () => {
        history.goBack();
    };

    return (
        <>
            <div id={style.displayHeadingBox}>
                <h2>Adding Question</h2>
            </div>

            <div id={style.addBox} className={style.addQuestion}>
                <label>Question Text</label>
                <input
                    onChange={(e) => handleInputChange(e)}
                    name="questionText"
                    type="text"
                    placeholder="Enter Question Text"
                    value={question.questionText}
                />

                {question.options.map((option, index) => (
                    <div key={index}>
                        <label>Option {index + 1}</label>
                        <input
                            onChange={(e) => handleInputChange(e, index)}
                            type="text"
                            value={option}
                            placeholder={`Enter Option ${index + 1}`}
                        />
                    </div>
                ))}

                <label>Correct Option</label>
                <input
                    onChange={(e) => handleInputChange(e)}
                    name="correctOption"
                    type="text"
                    placeholder="Enter the correct option (e.g., 'Option 1')"
                    value={question.correctOption}
                />

                <div id={style.buttonBox}>
                    <button onClick={addNewQuestion}>Add</button>
                    <button onClick={handleGoBack}>Go back</button>
                </div>
            </div>
        </>
    );
}

export default AddQuestion;
