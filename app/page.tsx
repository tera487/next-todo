"use client";

import * as React from "react";
import Link from "next/link";
import List from "@/app/components/elements/list";
import TextField from "@/app/components/elements/text-field";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

export default function Home() {
  const [checked, setChecked] = React.useState([0]);
  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
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
      <List checked={checked} handleToggle={handleToggle} />
      <Link href="/hello">Log</Link>
    </main>
  );
}
