"use client";

import * as React from "react";
import Link from "next/link";
import List from "@/app/components/elements/list";
import TextField from "@/app/components/elements/text-field";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import model from "@/app/features/todo";

const initialTodoList: model[] = [{ id: 1, title: "test", status: "doing" }];

export default function Home() {
  const [todoList, setTodoList] = React.useState(initialTodoList);
  const handleToggle = (value: number) => () => {
    let newt: model[] = [...todoList];
    if (newt[value].status == "doing") {
      newt[value].status = "done";
    } else {
      newt[value].status = "doing";
    }
    setTodoList(newt);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Hello World!</h1>
      </div>
      <div className="flex">
        <TextField></TextField>
        <Button
          variant="contained"
          style={{ backgroundColor: "#1976d2", margin: "8px" }}
        >
          <AddIcon />
        </Button>
      </div>
      <List todoList={todoList} handleToggle={handleToggle} />
      <Link href="/hello">Log</Link>
    </main>
  );
}
