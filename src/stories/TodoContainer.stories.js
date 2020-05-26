import React from "react";
import TodoContainer from "../TodoContainer";

export default {
  title: "TodoContainer",
  component: TodoContainer,
};

export const NormalTodoContainer = () => (
  <TodoContainer
    todos={["Teach REACT", "Take dogs out", "Do the homework!!!"]}
  />
);
