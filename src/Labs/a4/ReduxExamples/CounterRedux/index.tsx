import { useSelector, useDispatch } from "react-redux";
import { LabState } from "../../../store";
import { increment, decrement } from "./counterReducer";
function CounterRedux() {
  const { count } = useSelector((state: LabState) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Counter Redux</h3>
      <h3>{count}</h3>
      <button className ="btn btn-success" onClick={() => dispatch(increment())}> Increment </button>
      <button style={{marginLeft: "12px"}} className ="btn btn-danger" onClick={() => dispatch(decrement())}> Decrement </button>
    </div>
  );
}
export default CounterRedux;