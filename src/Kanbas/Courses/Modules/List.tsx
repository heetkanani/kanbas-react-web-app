import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      {<div className="d-flex w-100 flex-wrap justify-content-end gap-1">
              <button className="btn btn-light" style={{backgroundColor: "lightgrey"}}>Collapse All</button>
              <button className="btn btn-light" style={{backgroundColor: "lightgrey"}}>View Progress</button>
              <select className="btn btn-light" style={{backgroundColor: "lightgrey"}}>\
                <i className="fa fa-check-square fa-stack-2x" style={{color: "green"}}>
                </i>
                <option>Publish All</option>
                <option>Unpublish All</option>
                <option>Unpublish All</option>
              </select>
              <button className="list-group btn btn-danger">+ Module</button>
              <button className="btn btn-light " style={{backgroundColor: "lightgrey"}}><span><FaEllipsisV/></span></button>
              <hr />
            </div>}
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;