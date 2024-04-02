
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: <any>[],
  assignment: {
     _id: "A101",
    name: "Propulsion Assignment",
    description: "Propulsion Assignment",
    dueDate: "2024-01-26",
    availableFromDate: "2024-01-26",
    availableUntilDate:"2024-01-30",
    week: "4",
    time: "11:59am",
    points: "100",
    course: "RS101"
  }
}

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments : (state,action) =>{
      state.assignments = action.payload;
    },
    addAssignment: (state, action) => {
      state.assignments = [
        {
          ...action.payload,
          _id: new Date().getTime().toString(),
        },
        ...state.assignments,
      ]
    },

    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter((assignment:any) => assignment._id != action.payload);
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment:any) => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        } else {
          return assignment;
        }
      });
    },
    selectAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  }
})

export const { setAssignments ,addAssignment, deleteAssignment,
  updateAssignment, selectAssignment } = assignmentSlice.actions;
export default assignmentSlice.reducer;
