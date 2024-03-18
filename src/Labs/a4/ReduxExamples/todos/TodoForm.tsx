import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { LabState } from "../../../store";
function TodoForm() {
    const { todo } = useSelector((state: LabState) => state.todosReducer);
    const dispatch = useDispatch();
    return (
      <li className="list-group-item">
        <input 
          value={todo.title}
          onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        />
        <button style={{marginLeft:"12px"}}  className="btn btn-success" onClick={() => dispatch(addTodo(todo))}> Add </button>
        <button style={{marginLeft:"12px"}} className="btn btn-warning" onClick={() => dispatch(updateTodo(todo))}> Update </button>
        
      </li>
    );
  }
  export default TodoForm;