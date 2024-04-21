import React from "react";
import style from "../SubjectComponent/Subject.module.css";

function Question() {
    const questions = [
        {
            id: 1,
            qname: "Sample Question 1",
            optionOne: "Option A",
            optionTwo: "Option B",
            optionThree: "Option C",
            optionFour: "Option D",
            answer: "A",
            sname: { name: "Sample Subject 1" }
        },
        {
            id: 2,
            qname: "Sample Question 2",
            optionOne: "Option A",
            optionTwo: "Option B",
            optionThree: "Option C",
            optionFour: "Option D",
            answer: "B",
            sname: { name: "Sample Subject 2" }
        }
    ];

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
                            <th id={style.center}>Option Four</th>
                            <th id={style.center}>Question Answer</th>
                            <th id={style.center}>Subject Name</th>
                        </tr>
                    </thead>
                    <tbody id={style.tbody}>
                        {questions.map((data, i) => (
                            <tr key={i}>
                                <td>{data.qname}</td>
                                <td>{data.optionOne}</td>
                                <td>{data.optionTwo}</td>
                                <td>{data.optionThree}</td>
                                <td>{data.optionFour}</td>
                                <td>{data.answer}</td>
                                <td>{data.sname.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Question;
