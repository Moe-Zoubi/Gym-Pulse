import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import "./style.css";
import scheduleData from "../../data/ScheduleData";


const Schedule = () => {

    const [day, setDay] = useState("Monday");

    return(
        <div className="schedul-section">
            <Navbar />
            <div className="page-header">
                <h2>Schedule By Day</h2>
            </div>
            <div className="schedule-container">
                <div className="schedule-days">
                    <button className={day === "Monday" ? "day-btn active" : "day-btn"} onClick={() => setDay("Monday")}>Monday</button>
                    <button className={day === "Tuesday" ? "day-btn active" : "day-btn"} onClick={() => setDay("Tuesday")}>Tuesday</button>
                    <button className={day === "Wednesday" ? "day-btn active" : "day-btn"} onClick={() => setDay("Wednesday")}>Wednesday</button>
                    <button className={day === "Thursday" ? "day-btn active" : "day-btn"} onClick={() => setDay("Thursday")}>Thursday</button>
                    <button className={day === "Friday" ? "day-btn active" : "day-btn"} onClick={() => setDay("Friday")}>Friday</button>
                    <button className={day === "Saturday" ? "day-btn active" : "day-btn"} onClick={() => setDay("Saturday")}>Saturday</button>
                </div>
                <div className="schedule-classes">
                    {
                        scheduleData.filter((item) => item.day === day).map((item) => (
                            <div key={item.classname} className="schedule-class">
                                <div className="schedule-text">
                                    <p>Class Name</p>
                                    <p>{item.classname}</p>
                                </div>
                                <div className="schedule-text">
                                    <p className="center">Time</p>
                                    <p className="center">{item.time}</p>
                                </div>
                                <div className="schedule-text">
                                    <p className="center">Trainer</p>
                                    <p className="center">{item.trainer}</p>
                                </div>
                                <button>Join Now</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Schedule;
