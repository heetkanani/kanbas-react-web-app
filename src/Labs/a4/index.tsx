import { useSelector } from "react-redux";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";
import { LabState } from "../store";
import TodoList from "./ReduxExamples/todos/TodoList";

function Assignment4() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);
  function sayHello() {
    alert("Hello");
  }

  return(
    <>
        <h2>Assignment 4</h2>
        <ClickEvent/>
        <PassingDataOnEvent/>
        <PassingFunctions theFunction={sayHello}/>
        <EventObject/>
        <Counter/>
        <BooleanStateVariables/>    
        <StringStateVariables/> 
        <DateStateVariable/>
        <ObjectStateVariable/>
        <ArrayStateVariable/>
        <ParentStateComponent/> 
        <ReduxExamples/>
        <TodoList/>
    </>
  );
};
export default Assignment4;

