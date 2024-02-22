import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPencilAlt, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { BsPencilSquare } from "react-icons/bs";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      <div className="d-flex gap-2 flex-wrap justify-content-between">
            <input
              className="form-control w-25"
              placeholder="Search for Assignments"
            />
            <div className="d-flex">
              <button className="btn btn-light"style={{backgroundColor: "lightgrey"}}>+ Group
            </button>
            <button className="btn btn-danger">+ Assignments</button>
            <select className="btn btn-light" style={{backgroundColor: "lightgrey"}}>
              <option>Edit Assignment Dates</option>
            </select>
            <button className="btn btn-light" style={{backgroundColor: "lightgrey"}}>
              <span><FaEllipsisV/></span>
            </button>
            </div>
        </div>
          <hr></hr>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" />ASSIGNMENTS
            <span className="float-end">
            <button className="rounded-5" style={{border: "1px solid black" , fontSize: "0.9em;"}}> 40% of Total </button>
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <BsPencilSquare className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}><b>{assignment.title}</b></Link>
                   <p>
                  Week {assignment.week} | Due {assignment.date} at {assignment.time} | {assignment.points}pts
                  </p>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;