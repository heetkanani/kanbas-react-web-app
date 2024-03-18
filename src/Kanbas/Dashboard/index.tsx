import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import db from "../Database/db";
function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; })
 {
  return (
    <div className="p-4 wd-dashboard">
        <h1>Dashboard</h1><hr></hr>
        <div className="d-flex w-100 flex-wrap justify-content gap-1">
        <h5>Course</h5>
        <input value={course.name} className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <input value={course.number} className="form-control" 
            onChange={(e) => setCourse({ ...course, number: e.target.value }) } />        
        <input value={course.startDate} className="form-control" type="date" 
            onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
        <input value={course.endDate} className="form-control" type="date" 
            onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
        <button className="btn btn-success" onClick={addNewCourse} >
          Add
        </button>
        <button className="btn btn-warning" onClick={updateCourse} >
          Update
        </button>

      </div>
      <hr />
      <h2>Published Courses (12)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} 
                    
                    </Link>
                  <p className="card-text">{course.name}</p>
                  <div className="d-flex w-100 flex-wrap justify-content gap-1">

                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>
                    <button className="btn btn-danger" onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
                    </button>
                    <button className="btn btn-warning" onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}>
                      Edit
                    </button>
                    </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;