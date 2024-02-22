import { FaFileExport, FaFileImport } from "react-icons/fa";
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-end gap-2 mb-3">
          <button className="btn btn-light" style={{backgroundColor: "lightgrey"}}>
           <FaFileImport/> Import
          </button>
          <div className="btn btn-light" style={{backgroundColor: "lightgrey"}}>
          <FaFileExport/>
            <select className="btn btn-light border-0" style={{backgroundColor: "lightgrey"}}>
              <option selected>Export</option>
            </select>
          </div>
          <button className="btn btn-light" style={{backgroundColor: "lightgrey"}}>
          <IoMdSettings />
          </button>
        </div> 
        <div className="d-flex w-100 flex-wrap ml-5">
          <div className="mb-3 w-25">
            <label className="form-label"><b>Student Name</b></label>
            <select className="form-select my-1">
              <option selected>Search Students</option>
            </select>
          </div>
          <div className="mb-3 w-25">
            <label className="form-label"><b>Assignment Name</b></label>
            <select className="form-select my-1">
              <option selected>Search Assignments</option>
            </select>
          </div>
        </div>
        <button className="btn btn-light mb-3" style={{backgroundColor: "lightgrey"}}>
          <i className="fa fa-filter"></i>Apply Filters
        </button>     
        <div className="table-responsive">
        <table border={1} className="table table-striped table-bordered w-75">
          <thead className="table-light">
            <th>Student Name</th>
            {as.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td style={{color: "red"}}>{user?.firstName} {user?.lastName}</td>
                   {as.map((assignment) => {
                     const grade = grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;


