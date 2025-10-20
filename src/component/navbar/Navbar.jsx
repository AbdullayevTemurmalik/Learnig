import React from "react";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "../../features/counterSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <h1>Navbar</h1>
      <div className="buttons">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Navbar;
