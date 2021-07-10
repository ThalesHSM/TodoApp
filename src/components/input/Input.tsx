import React, { useState } from "react";

import { StyledInput, StyledDiv, StyledButton } from "./styledInput";

interface IInput {
  todoList: any;
  setTodoList: any;
}

function Input({ todoList, setTodoList }: IInput) {
  const [inputValue, setInputValue] = useState<string>("");

  const [id, setId] = useState<number>(0);

  function handleCreateTodo() {
    const isEmpty = inputValue.trim();
    if (isEmpty === "") {
      alert("The input must have something!");
      return;
    }

    let newTodos = [...todoList];
    for (var i = 0; i < newTodos.length; i++) {
      if (inputValue === newTodos[i].title) {
        alert("The input already exists!");
        return;
      }
    }

    setId(id + 1);

    let newTodo = [
      ...todoList,
      { title: inputValue, completed: false, id: id },
    ];

    setTodoList(newTodo);
    setInputValue("");
    localStorage.setItem("todos", JSON.stringify(newTodo));
  }

  function onHandleSubmit(e: any) {
    if (e.keyCode === 13) {
      handleCreateTodo();
    }
  }

  return (
    <StyledDiv>
      <StyledInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyUp={onHandleSubmit}
        placeholder="Add details"
        maxLength={25}
      />
      <StyledButton onClick={handleCreateTodo}>Add</StyledButton>
    </StyledDiv>
  );
}

export default Input;
