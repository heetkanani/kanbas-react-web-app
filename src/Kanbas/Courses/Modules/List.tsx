import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { addModule, deleteModule, setModule, updateModule } from "./reducer";
function ModuleList() {
  // const { courseId } = useParams();
  // const [moduleList, setModuleList] = useState<any[]>(modules);
  // const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  // const [module, setModule] = useState({
  //   _id: "0",
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId || "",
  // });

  // const addModule = (module: any) => {
  //   const newModule = { ...module, _id: new Date().getTime().toString() };
  //   const newModuleList = [newModule, ...moduleList];
  //   setModuleList(newModuleList);
  // };
  // const deleteModule = (moduleId: string) => {
  //   const newModuleList = moduleList.filter(
  //     (module) => module._id !== moduleId
  //   );
  //   setModuleList(newModuleList);
  // };
  // const updateModule = () => {
  //   const newModuleList = moduleList.map((m) => {
  //     if (m._id === module._id) {
  //       return module;
  //     } else {
  //       return m;
  //     }
  //   });
  //   setModuleList(newModuleList);
  // };
  const { courseId } = useParams();

  const moduleList = useSelector((state: KanbasState) => 
  state.modulesReducer.modules);
const module = useSelector((state: KanbasState) => 
  state.modulesReducer.module);
const dispatch = useDispatch();
const [selectedModule, setSelectedModule] = useState(moduleList[0]);


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
      <li className="list-group-item d-flex gap-2 p-2">
          <input value={module.name} className="form-control"
           onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
          <textarea value={module.description} className="form-control"
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }/>
          <button className="btn btn-success rounded-2 px-4" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
          <button className="btn btn-warning rounded-2 px-4" onClick={() => dispatch(updateModule(module))}>Update</button>
      </li>
        {moduleList
              .filter((module) => module.course === courseId)
        .map((module,index) => (
          <li key={index} className="list-group-item"
          onClick={() => setSelectedModule(module)}>
             <div>
                <FaEllipsisV className="me-2" />
                {module.name}
            <span className="float-end">
                <button className="btn btn-warning rounded-2 px-4"
                onClick={() => dispatch(setModule(module))}>
                Edit
                </button>
                <button className="btn btn-danger rounded-2 px-4"
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
                </button>
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
              </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson :any) => (
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