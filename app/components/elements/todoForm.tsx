"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

type Props = {
  handleAddTodo: Function;
};

export default function TodoForm(props: Props) {
  const [title, setTitle] = React.useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    props.handleAddTodo(title);
    setTitle("");
  }

  return (
    <div className="flex">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </Box>
      <Button
        variant="contained"
        style={{ backgroundColor: "#1976d2", margin: "8px" }}
        onClick={handleSubmit}
        component="button"
      >
        <AddIcon />
      </Button>
    </div>
  );
}
