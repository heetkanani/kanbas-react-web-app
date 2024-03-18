import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { TodoType } from "../../../store";
function TodoItem({todo} : {todo: TodoType}) {
    const dispatch = useDispatch();
    return (
      <li key={todo.id} className="list-group-item">
        {todo.title}
        <button style={{marginLeft:"12px"}}  className="btn btn-danger" onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
        <button style={{marginLeft:"12px"}} className="btn btn-primary" onClick={() => dispatch(setTodo(todo))}> Edit </button>
      </li>
    );
  }
  export default TodoItem;
  
  