"use client";

import * as React from "react";
import Link from "next/link";
import List from "@/app/components/elements/list";
import TodoForm from "@/app/components/elements/todoForm";
import model from "@/app/features/todo";

const initialTodoList: model[] = [
  { id: 1, title: "test1", status: "done" },
  { id: 2, title: "test2", status: "doing" },
  { id: 3, title: "test3", status: "doing" },
  { id: 4, title: "tes4", status: "doing" },
];
const initialTodoId: number = 5;

export default function Home() {
  const [todoList, setTodoList] = React.useState(initialTodoList);
  const [todoId, setTodoId] = React.useState(initialTodoId);

  const handleToggle = (value: number) => () => {
    let newTodoList: model[] = [...todoList];
    if (newTodoList[value].status == "doing") {
      newTodoList[value].status = "done";
    } else {
      newTodoList[value].status = "doing";
    }
    setTodoList(newTodoList);
  };

  function handleAddTodo(value: string) {
    let newTodoList: model[] = [...todoList];
    let newTodoId = todoId;
    let newTodo: model = {
      id: newTodoId,
      title: value,
      status: "doing",
    };
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
    setTodoId(newTodoId + 1);
  }

  const handleDeleteTodo = (value: number) => () => {
    let newTodoList: model[] = [...todoList];
    newTodoList.splice(value, 1);
    setTodoList(newTodoList);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Hello World!</h1>
      </div>
      <TodoForm handleAddTodo={handleAddTodo} />
      <List
        todoList={todoList}
        handleToggle={handleToggle}
        handleDeleteTodo={handleDeleteTodo}
      />
      <Link href="/features/log">Log</Link>
    </main>
  );
}
