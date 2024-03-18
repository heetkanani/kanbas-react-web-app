import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "../assignmentsReducer";
import { AssignmentState } from "../../../store";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const { courseId } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSave = () => {
    dispatch(addAssignment({ ...assignmentEdit, course: courseId }));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const handleUpdate = () => {
    dispatch(updateAssignment(assignmentEdit));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const assignmentList = useSelector(
    (state: AssignmentState) => state.assignmentsReducer.assignments
  );
  const assignment = assignmentList.find(
    (assignment) => assignment._id === assignmentId
  );
  const [assignmentEdit, setAssignmentEdit] = useState({
    _id: assignment?._id,
    name: assignment?.name,
    description: assignment?.description,
    dueDate: assignment?.dueDate,
    availableFromDate: assignment?.availableFromDate,
    availableUntilDate: assignment?.availableUntilDate,
    week: assignment?.week,
    time: assignment?.time,
    points: assignment?.points,
    course: assignment?.course,
  });
  return (
    <div className="flex-fill">
      <div className="d-flex justify-content-end align-items-center gap-2">
          <p className="m-0 text-success">
            <FaCheckCircle/><b>Published</b>
          </p>
          <button className="btn btn-light" style={{backgroundColor: "lightgrey"}}>
            <span><FaEllipsisV/></span>
          </button>
        </div>
        <hr />
        <form action={`/Kanbas/Courses/${courseId}/Assignments`}>
            <label htmlFor="assignmentName" className="form-label">Assignment Name</label>
      <input value={assignmentEdit?.name}
                  onChange={(e) => setAssignmentEdit({ ...assignmentEdit, name: e.target.value })}
                  className="form-control mb-2" />
      <div className="mb-2">
            <textarea
            value={assignmentEdit?.description}
            onChange={(e) => setAssignmentEdit({ ...assignmentEdit, description: e.target.value })}
            cols={25} rows={5} className="form-control">This assignment describes how to install the development environment</textarea>
          </div>
          <div>
            <div className="row">
              <div className="col-3 text-end">
                <label className="col-form-label"
                >Points</label>
              </div>
              <div className="col-5">
                <input className="form-control" 
                value={assignmentEdit?.points}
                onChange={(e) => setAssignmentEdit({ ...assignmentEdit, points: e.target.value })}
                type="number"/>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-3 text-end">
                <label className="col-form-label"
                  >Assignment Group</label>
              </div>
              <div className="col-5">
                <select className="form-select">
                  <option selected>ASSIGNMENTS</option>
                </select>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-3 text-end">
                <label className="col-form-label">Display Grade as</label>
              </div>
              <div className="col-5">
                <select className="form-select my-1">
                  <option selected>Percentage</option>
                  <option>Marks</option>
                </select>
                <div className="form-check my-4">
                  <input className="form-check-input" type="checkbox" value=""/>
                  <label className="form-check-label">
                    Do not count this assignment towards final grade
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-3 text-end">
                <label className="col-form-label">Assign</label>
              </div>
              <div className="col-5 rounded-3 p-3" style={{border: "1px solid lightgray"}}>
                <label><b>Assign to</b></label>
                <input className="form-control" type="text" value="Everyone"/>
                <label className="col-form-label"><b>Due</b></label>
                <input type="date"
                value={assignmentEdit?.dueDate}
                onChange={(e) => setAssignmentEdit({ ...assignmentEdit, dueDate: e.target.value })}
                className="form-control"/>
                <div className="d-flex flex-wrap gap-3">
                  <div>
                    <label className="col-form-label"><b>Available from</b></label>
                    <input className="form-control" 
                    value={assignmentEdit?.availableFromDate}
                    onChange={(e) => setAssignmentEdit({ ...assignmentEdit, availableFromDate: e.target.value })}
                    type="date"/>
                  </div>
                  <div>
                    <label className="col-form-label"><b>Available Until</b></label>
                    <input className="form-control" 
                     value={assignmentEdit?.availableUntilDate}
                     onChange={(e) => setAssignmentEdit({ ...assignmentEdit, availableUntilDate: e.target.value })}
                    type="date"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <div className="form-check">
              <input className="form-check-input" type="checkbox"/>
              <label className="form-check-label">
                 Notify users that this content has been changed.
              </label>
            </div>
            <div>

              <Link className="btn btn-light" to={`/Kanbas/Courses/${courseId}/Assignments`}>
              Cancel
              </Link>
              <button onClick={!assignment ? handleSave : handleUpdate} className="btn btn-danger">
              Save
              </button>
            </div>
    </div>
    </form>
    </div>
  );
}
export default AssignmentEditor;