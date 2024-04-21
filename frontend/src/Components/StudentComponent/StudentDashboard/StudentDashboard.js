import { NavLink, Switch, Route, BrowserRouter, useHistory } from "react-router-dom";
import style from "./StudentDashboard.module.css";
import Subject from "./Subject/Subject";
import Result from "./ResultComponent/Result";
import Exam from "./ExamComponent/Exam";
import Test from "./TestComponent/Test";

function StudentDashboard() {
    let history = useHistory();

    function logout() {
        sessionStorage.clear();
        history.push("/StudentLogin");
    }

    return (
        <>
            <BrowserRouter>
                <div id={style.header}>
                    <div id={style.headerHeadingBox}>
                        <h3>Online Exam System</h3>
                    </div>
                    <div id={style.headerMenuBox}>
                        <NavLink exact to="/StudentDashboard"><span>Subject</span></NavLink>
                        <NavLink exact to="/StudentDashboard/Result"><span>My Result</span></NavLink>
                        <NavLink onClick={logout} exact to="/StudentLogin"><span>Logout</span></NavLink>
                    </div>
                </div>
                <div id={style.displayBox}>
                    <Switch>
                        <Route exact path="/StudentDashboard" component={Subject}></Route>
                        <Route exact path="/StudentDashboard/Result" component={Result}></Route>
                        <Route exact path="/StudentDashboard/Exam/:category" component={Exam}></Route>
                        {/* Add static data for Test component */}
                        <Route exact path="/StudentDashboard/Exam/:category/:id" component={Test}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </>
    );
}

export default StudentDashboard;
