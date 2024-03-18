import React, { useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPencilAlt, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { AssignmentState } from "../../store";
import { deleteAssignment, selectAssignment } from "./assignmentsReducer";

function Assignments() {
  const { courseId } = useParams();
  const [isDelete, setIsDelete] = useState(false);
  const assignmentList = useSelector(
    (state: AssignmentState) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state: AssignmentState) => state.assignmentsReducer.assignment
  );

  const btnDelete = () => {
    dispatch(deleteAssignment(assignment._id))
    setIsDelete(false);
  };

  const btnCancel = () => {
    setIsDelete(false);
  };
  const dispatch = useDispatch();
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
            <Link to={`/Kanbas/Courses/${courseId}/Assignments/123`} type="button" className="btn btn-danger">
              + Assignments
            </Link>
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
            {assignmentList
            .filter((assignment) => assignment.course === courseId)
            .map((assignment) => (
              <li className="list-group-item">
                <BsPencilSquare className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}><b>{assignment.name}</b></Link>
                   <p>
                  Week {assignment.week} | Due {assignment.dueDate} at {assignment.time} | Available From {assignment.availableFromDate} | Available Until {assignment.availableUntilDate} | {assignment.points}pts
                  </p>
                <span className="float-end">
                <button
                      className="btn btn-danger btn-sm px-2 rounded-2"
                      onClick={() => {
                        setIsDelete(true)
                        dispatch(selectAssignment(assignment))
                      }}
                    >
                      Delete
                    </button>
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>

      {isDelete && (
        <div className="modal" tabIndex={-1} role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={btnCancel}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete the assignment?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={btnDelete}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={btnCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
);}
export default Assignments;