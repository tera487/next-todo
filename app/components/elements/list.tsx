"use client";

import * as React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material/";
import model from "@/app/features/todo";

type Props = {
  todoList: [...model[]];
  handleToggle: Function;
};

export default function CheckboxList(props: Props) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {props.todoList.map((value, index) => {
        const labelId = `checkbox-list-label-${value.id}`;

        return (
          <ListItem
            key={value.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <Delete />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={props.handleToggle(index)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={value.status === "done"}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.title} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
