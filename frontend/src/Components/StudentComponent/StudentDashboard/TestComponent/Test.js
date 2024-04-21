import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Test() {
    const history = useHistory();

    const allQuestions = [
        {
            questionId: 'q1',
            questionText: "What is the capital of France?",
            options: ["Paris", "London", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            questionId: 'q2',
            questionText: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            correctAnswer: "4"
        },
        {
            questionId: 'q3',
            questionText: "Who wrote Hamlet?",
            options: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"],
            correctAnswer: "William Shakespeare"
        },
        {
            questionId: 'q4',
            questionText: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correctAnswer: "Pacific Ocean"
        },
        {
            questionId: 'q5',
            questionText: "What year did the Titanic sink?",
            options: ["1912", "1905", "1898", "1923"],
            correctAnswer: "1912"
        }
    ];

    const [answers, setAnswers] = useState({});

    function handleAnswerChange(event, questionId) {
        setAnswers({
            ...answers,
            [questionId]: event.target.value
        });
    }

    function submitTest() {
        const score = allQuestions.reduce((totalScore, question) => {
            return totalScore + (answers[question.questionId] === question.correctAnswer ? 1 : 0);
        }, 0);

        const results = {
            answers: answers,
            score: score,
            totalQuestions: allQuestions.length
        };

        sessionStorage.setItem('examResults', JSON.stringify(results));
        history.push("/results");
    }

    // Inline styles
    const styles = {
        container: {
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            maxWidth: '600px',
            margin: '20px auto',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        },
        question: {
            marginBottom: '15px',
            paddingBottom: '10px',
            borderBottom: '1px solid #eee'
        },
        questionText: {
            fontSize: '18px',
            color: '#333'
        },
        label: {
            fontSize: '16px',
            display: 'block',
            margin: '5px 0',
            cursor: 'pointer'
        },
        radioButton: {
            marginRight: '10px'
        },
        submitButton: {
            display: 'block',
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%'
        }
    };

    return (
        <div style={styles.container}>
            {allQuestions.map((question) => (
                <div key={question.questionId} style={styles.question}>
                    <p style={styles.questionText}>{question.questionText}</p>
                    {question.options.map((option) => (
                        <label style={styles.label} key={option}>
                            <input
                                type="radio"
                                name={question.questionId}
                                value={option}
                                checked={answers[question.questionId] === option}
                                onChange={(e) => handleAnswerChange(e, question.questionId)}
                                style={styles.radioButton}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            ))}
            <button style={styles.submitButton} onClick={submitTest}>Submit Exam</button>
        </div>
    );
}

export default Test;
