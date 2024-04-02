import axios from "axios";
const ASSIGNMENT_API = "https://kanbas-node-server-app-tb8k.onrender.com/api/assignments"; 

const COURSES_API = "https://kanbas-node-server-app-tb8k.onrender.com/api/courses";




export const createAssignment = async(courseId:any , assignment:any) => {
  const response = await axios
  .post(`${COURSES_API}/${courseId}/assignments`, assignment);
  return response.data
}

export const deleteAssignment = async(assignmentId:any) => {
    const response = await axios
    .delete(`${ASSIGNMENT_API}/${assignmentId}`);
    return response.data;
  };

export const findAssignmentsForCourse = async(courseId:any) =>{
  const response = await axios
  .get(`${COURSES_API}/${courseId}/assignments`);
  console.log()
  return response.data
}

export const updateAssignment = async(assignment:any) => {
    const response = await axios
    .put(`${ASSIGNMENT_API}/${assignment._id}`, assignment);
    return response.data;
  };
  