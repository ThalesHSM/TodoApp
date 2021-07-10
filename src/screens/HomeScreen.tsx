import { useState, useEffect } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { FaTrash } from "react-icons/fa";
import Input from "../components/input/Input";
import {
  StyledDiv,
  StyledListDiv,
  StyledInputDiv,
  StyledCheckbox,
  StyledSpan,
  StyledButton,
  StyledButtonDiv,
} from "./styledHome";

function Home() {
  const [todoList, setTodoList] = useState<any>([]);

  useEffect(() => {
    const GetStorage = localStorage.getItem("todos");

    async function onHandleStorage() {
      if (GetStorage !== null) {
        const todos = await JSON.parse(GetStorage);

        setTodoList(todos);
      }
    }

    onHandleStorage();
  }, []);

  function handleCompleteTodo(title: any, completed: any) {
    let newTodo = [...todoList];
    for (var i = 0; i < newTodo.length; i++) {
      if (title === newTodo[i].title && completed === false) {
        newTodo[i].completed = true;
        break;
      }
      if (title === newTodo[i].title && completed === true) {
        newTodo[i].completed = false;
        break;
      }
    }

    setTodoList(newTodo);
    localStorage.setItem("todos", JSON.stringify(newTodo));
  }

  function handleDeleteTodo(title: any) {
    let newTodo = [...todoList];
    for (var i = 0; i < newTodo.length; i++) {
      if (title === newTodo[i].title) {
        newTodo.splice(i, 1);
        break;
      }
    }
    setTodoList(newTodo);
    localStorage.setItem("todos", JSON.stringify(newTodo));
  }

  function handleDeleteAllTodos() {
    let newTodo = [...todoList];
    var i = 0;

    while (i < newTodo.length) {
      for (i; i < newTodo.length; i++) {
        if (newTodo[i].completed === true) {
          newTodo.splice(i, 1);
          break;
        }
      }
    }
    setTodoList(newTodo);
    localStorage.setItem("todos", JSON.stringify(newTodo));
  }

  return (
    <StyledDiv>
      <header>
        <h1>#todo</h1>
      </header>

      <Tabs>
        <TabList>
          <Tab style={{ fontSize: 25 }}>All</Tab>
          <Tab style={{ fontSize: 25 }}>Active</Tab>
          <Tab style={{ fontSize: 25 }}>Completed </Tab>
        </TabList>

        <hr />

        <Input todoList={todoList} setTodoList={setTodoList} />

        <TabPanel>
          {todoList.map((item: any) => (
            <StyledListDiv key={item.id}>
              <StyledInputDiv>
                <StyledCheckbox
                  type="checkbox"
                  checked={item.completed}
                  onClick={() => handleCompleteTodo(item.title, item.completed)}
                />

                {item.completed === true ? (
                  <StyledSpan
                    style={{
                      textDecoration: "line-through",
                    }}
                  >
                    {item.title}
                  </StyledSpan>
                ) : (
                  <StyledSpan>{item.title}</StyledSpan>
                )}
              </StyledInputDiv>
              <FaTrash
                size={20}
                style={{ cursor: "pointer", color: "#9aa4ab" }}
                onClick={() => handleDeleteTodo(item.title)}
              />
            </StyledListDiv>
          ))}
        </TabPanel>

        <TabPanel>
          {todoList.map((item: any) => (
            <StyledListDiv key={item.id}>
              {!item.completed ? (
                <>
                  <StyledInputDiv>
                    <StyledCheckbox
                      type="checkbox"
                      checked={item.completed}
                      onClick={() =>
                        handleCompleteTodo(item.title, item.completed)
                      }
                    />

                    {item.completed === true ? null : (
                      <StyledSpan>{item.title}</StyledSpan>
                    )}
                  </StyledInputDiv>
                  <FaTrash
                    size={20}
                    style={{ cursor: "pointer", color: "#9aa4ab" }}
                    onClick={() => handleDeleteTodo(item.title)}
                  />
                </>
              ) : null}
            </StyledListDiv>
          ))}
        </TabPanel>

        <TabPanel>
          {todoList.map((item: any) => (
            <StyledListDiv key={item.id}>
              {item.completed ? (
                <>
                  <StyledInputDiv style={{}}>
                    <StyledCheckbox
                      type="checkbox"
                      checked={item.completed}
                      onClick={() =>
                        handleCompleteTodo(item.title, item.completed)
                      }
                    />

                    {item.completed === true ? (
                      <StyledSpan
                        style={{
                          textDecoration: "line-through",
                        }}
                      >
                        {item.title}
                      </StyledSpan>
                    ) : (
                      <StyledSpan>{item.title}</StyledSpan>
                    )}
                  </StyledInputDiv>

                  <FaTrash
                    size={20}
                    style={{ cursor: "pointer", color: "#9aa4ab" }}
                    onClick={() => handleDeleteTodo(item.title)}
                  />
                </>
              ) : null}
            </StyledListDiv>
          ))}
        </TabPanel>

        <StyledButtonDiv>
          <StyledButton onClick={handleDeleteAllTodos}>
            Delete all completed Todos
          </StyledButton>
        </StyledButtonDiv>
      </Tabs>
    </StyledDiv>
  );
}

export default Home;
