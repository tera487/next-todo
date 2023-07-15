"use client";

import * as React from "react";
import Link from "next/link";
import List from "@/app/components/elements/list";
import TodoForm from "@/app/components/elements/todoForm";
import model from "@/app/features/todo";

const initialTodoList: model[] = [{ id: 1, title: "test", status: "doing" }];
const initialTodoId: number = 2;

export default function Home() {
  const [todoList, setTodoList] = React.useState(initialTodoList);
  const [todoId, setTodoId] = React.useState(initialTodoId);

  function handleToggle(value: number) {
    let newTodoList: model[] = [...todoList];
    if (newTodoList[value].status == "doing") {
      newTodoList[value].status = "done";
    } else {
      newTodoList[value].status = "doing";
    }
    setTodoList(newTodoList);
  }

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

  function handleDeleteTodo(value: number) {
    let newTodoList: model[] = [...todoList];
    newTodoList.splice(value, 1);
    setTodoList(newTodoList);
  }

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
      <Link href="/hello">Log</Link>
    </main>
  );
}
