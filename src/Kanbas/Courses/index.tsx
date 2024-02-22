import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import './index.css';
import NavResponsive from "./NavResponsive";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div >
      <div className="d-md-block d-none">
      <h1 style={{marginLeft:"98px"}}><HiMiniBars3 /> Course {course?.name}</h1>
      </div>
    
      <CourseNavigation />
      <NavResponsive/>
        <div
          className="wd-course-page wd-dashboard">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />            
            <Route path="Modules" element={<Modules/>} />            
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />            
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
  );
}
export default Courses;