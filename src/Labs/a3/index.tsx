import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Classes from "./css/Classes";
import exp from "constants";
import Styles from "./css/Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight/Highlight";
import Add from "./Add/Add";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
function Assignment3() {
 return (
   <div>
     <h1>Assignment 3</h1>
     <ConditionalOutput/>
     <Styles/>
     <Classes/>
     <PathParameters/>
     <TodoList/>
     <Add a={3} b={4} /><br></br>
     <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
     <JavaScript/>
   </div>
 );
}

export default Assignment3;
