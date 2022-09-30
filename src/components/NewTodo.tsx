import React, { useRef } from "react";
import classes from './newTodo.module.css'

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = inputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">new todo</label>
      <input type={"text"} id="text" ref={inputRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
