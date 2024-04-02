import React, { useEffect, useState } from "react";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
            id: 1, title: "NodeJS Assignment",
            description: "Create a NodeJS server with ExpressJS",
            due: "2024-04-07", completed: false, score: 0
        });
    
    const [module, setModule] = useState({
            id: 1, name: "NodeJS Module",
            description: "Create a NodeJS server with ExpressJS",
            course: "Node JS Web Development Course"
        });
    const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`
    const MODULE_URL = `${API_BASE}/a5/module`

    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
      };
      const updateTitle = async () => {
        const response = await axios
          .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
      };
      useEffect(() => {
        fetchAssignment();
      }, []);
    

    return (
    <div className="form-control">
        <h3>Working With Objects</h3>
        <h4>Modifying Properties</h4>
      <input className="form-control" onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <button className="btn btn-primary" onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button className="btn btn-primary" onClick={fetchAssignment} >
        Fetch Assignment
      </button>
        
        <input className="form-control" type="number" 
            onChange={(e) => setAssignment({ ...assignment,
            score: Number(e.target.value) })}
            value={assignment.score}/>
        <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
            Update Assignment Score
        </a>
        <br></br>
        <br></br>
        <input className="form-check-input" type="checkbox" name="completed" id="completed" checked={assignment.completed}
            onChange={(e) => setAssignment({ ...assignment,
            completed: e.target.checked })}/>
        <label htmlFor="completed">Completed</label><br></br><br></br>
        <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
            Update Assignment Completed
        </a>

        <input className="form-control" type="text" 
            onChange={(e) => setAssignment({ ...assignment,
                title: e.target.value })}
            value={assignment.title}/>
        <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
            Update Assignment Title
        </a>

        {/* <input className="form-control" type="text" 
            onChange={(e) => setAssignment({ ...assignment,
                title: e.target.value })}
            value={assignment.title}/>
        <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
            Update Assignment Title
        </a> */}


        <input className="form-control" type="text" 
            onChange={(e) => setModule({ ...module,
                name: e.target.value })}
            value={module.name}/>
        <a className="btn btn-primary" href={`${MODULE_URL}/name/${module.name}`}>
            Update Module Name
        </a>

        <input className="form-control" type="text" 
            onChange={(e) => setModule({ ...module,
                description: e.target.value })}
            value={module.description}/>
        <a className="btn btn-primary" href={`${MODULE_URL}/description/${module.description}`}>
            Update Module Description
        </a>

        <h4>Retrieving Objects</h4>
        <a className="btn btn-primary" href="${API_BASE}/a5/assignment">
        Get Assignment
        </a>
        <a className="btn btn-primary" href="${API_BASE}/a5/module">
        Get Module
        </a>

        <h4>Retrieving Properties</h4>
        <a className="btn btn-primary" href="${API_BASE}/a5/assignment/title">
        Get Title
        </a>
        <a className="btn btn-primary" href="${API_BASE}/a5/module/name">
        Get Module Name
        </a>
    </div>
    );
}
export default WorkingWithObjects;