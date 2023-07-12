"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

type Props = {
  handleAddTodo: Function;
};

export default function BasicTextFields(props: Props) {
  const [title, setTitle] = React.useState("");

  return (
    <div className="flex">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </Box>
      <Button
        variant="contained"
        style={{ backgroundColor: "#1976d2", margin: "8px" }}
        onClick={props.handleAddTodo(title)}
      >
        <AddIcon />
      </Button>
    </div>
  );
}
