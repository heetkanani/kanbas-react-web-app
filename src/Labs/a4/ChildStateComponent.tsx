function ChildStateComponent({ counter, setCounter }:
    { counter: number;
      setCounter: (counter: number) => void;}) {
      return (
        <div>
          <h3>Counter {counter}</h3>
          <button type="button" className="btn btn-primary" onClick={() => setCounter(counter + 1)}>
            Increment</button>
          <button type="button" className="btn btn-primary" style={{marginLeft:"12px"}} onClick={() => setCounter(counter - 1)}>
            Decrement</button>
        </div>
      );
    }
    export default ChildStateComponent;