import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Counter = () => {
  const { increment, increase, decrement, toggle } = counterActions;
  const dispatch = useDispatch();
  const { counter, showCounter } = useSelector((state) => state.counter);
  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };
  const increaseHandler = () => {
    dispatch(increase({ amount: 10 })); // { type: SOME_UNIQUE_IDENTIFIER , payload:...}
  };
  const toggleCounterHandler = () => {
    dispatch(toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {showCounter && (
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseHandler}>Increase by 10</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
      )}

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
