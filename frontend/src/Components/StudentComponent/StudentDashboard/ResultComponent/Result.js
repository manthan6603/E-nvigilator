import React from "react";

function Result() {
    const results = JSON.parse(sessionStorage.getItem('examResults'));

    if (!results) {
        return <div>No results to display. Please take the exam first.</div>;
    }

    return (
        <div>
            <h2>Results for Your Exam</h2>
            <p>Score: {results.score} out of {results.totalQuestions}</p>
            <h3>Your Answers:</h3>
            <ul>
                {Object.entries(results.answers).map(([questionId, answer], index) => (
                    <li key={index}>Question ID {questionId}: Your Answer - {answer}</li>
                ))}
            </ul>
        </div>
    );
}

export default Result;
