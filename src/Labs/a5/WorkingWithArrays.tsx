import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
function WorkingWithArrays() {
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2024-04-09",
        completed: false
    });

    const API = `${API_BASE}/a5/todos`;

    const [todos, setTodos] = useState<any[]>([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
      };

      const updateTodo = async () => {
        try {
        const response = await axios.put(`${API}/${todo.id}`, todo);
        setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
        } catch (error:any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
  
      };
    
      const deleteTodo = async (todo:any) => {
        try {
        const response = await axios.delete(`${API}/${todo.id}`);
        setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
  
      };
    
    
    const fetchTodos = async () => {
      const response = await axios.get(API);
      setTodos(response.data);
    };
    const removeTodo = async (todo:any) => {
        const response = await axios
          .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
      };

      const fetchTodoById = async (id:any) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
      };
    
      const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
      };
    
      const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
      };
    
    
    useEffect(() => {
      fetchTodos();
    }, [])
  
    return (
        <div className="form-control">
        <h3>Working with Arrays</h3>
        <h4>Retrieving Arrays</h4>
        <a href={API} className="btn btn-primary ms-2">
          Get Todos
        </a><br/>
        <input value={todo.id} className="form-control"
            onChange={(e) => setTodo({ ...todo,
            id: Number(e.target.value) })}/>

        <input type="text" value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })} className="form-control"/>

    <textarea className="form-control" value={todo.description}
        onChange={(e) => setTodo({ ...todo,
          description: e.target.value })} />
      <input value={todo.due} type="date"
        onChange={(e) => setTodo({
          ...todo, due: e.target.value })} className="form-control" />
      <label className="form-control" >
        <input  checked={todo.completed} type="checkbox"
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })} />
        Completed
      </label>
      <button onClick={postTodo} className="btn btn-primary"> Post Todo </button>
      <button onClick={updateTodo} className="btn btn-warning ms-2">
        Update Todo
      </button>
      <br></br><br></br>
        <div>
        <button onClick={createTodo} className="btn btn-primary">
        Create Todo
        </button>
        <button onClick={updateTitle} className="btn btn-success ms-2">
        Update Title
      </button>
        </div>
        {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}

        <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <input checked={todo.completed}
              type="checkbox" readOnly />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>                
            <button onClick={() => fetchTodoById(todo.id)} className="btn btn-warning">
                Edit
                </button>
                <button onClick={() => deleteTodo(todo)}
                className="btn btn-danger ms-2">
                    Delete
                </button>

            
          </li>
        ))}
      </ul>


        <h4>Retrieving an Item from an Array by ID</h4>
        <input value={todo.id} className="form-control"
            onChange={(e) => setTodo({ ...todo,
            id: Number(e.target.value) })}/>
        <a href={`${API}/${todo.id}`} className="btn btn-primary">
            Get Todo by ID
        </a>

        <h3>Filtering Array Items</h3>
        <a href={`${API}?completed=true`} className="btn btn-primary">
            Get Completed Todos
        </a>

        <h3>Creating new Items in an Array</h3>
        <a href={`${API}/create`} className="btn btn-primary">
            Create Todo
        </a>

        <h3>Deleting from an Array</h3>
        <input value={todo.id} className="form-control"
            onChange={(e) => setTodo({ ...todo,
            id: Number(e.target.value) })}/>
      <a href={`${API}/${todo.id}/delete`} className="btn btn-primary">
        Delete Todo with ID = {todo.id}
      </a>

      <input type="text" value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })} className="form-control"/>
      <h3>Updating an Item in an Array</h3>
      <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary">
        Update Title to {todo.title}
      </a>
      <br></br><br></br>
      <input className="form-check-input" type="checkbox" name="completed" id="completed" checked={todo.completed}
            onChange={(e) => setTodo({ ...todo,
            completed: e.target.checked })}/>
        <label htmlFor="completed">Completed</label><br></br><br></br>
        <a href={`${API}/${todo.id}/completed/${todo.completed}`} className="btn btn-primary">
            Complete Todo ID = {todo.id}
        </a>

        <input type="text" value={todo.description}
        onChange={(e) => setTodo({
          ...todo, description: e.target.value })} className="form-control"/>
        <a href={`${API}/${todo.id}/description/${todo.description}`} className="btn btn-primary">
            Describe Todo ID = {todo.id}
        </a>

        </div>


      
    );
  }
  export default WorkingWithArrays;
  
  