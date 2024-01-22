import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { decrement, increment } from "../../redux/slices/counter";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <div>
        <button aria-label="Increment" onClick={handleIncrement}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}
