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
} from "@/app/lib/material";
import { Delete } from "@mui/icons-material/";

type Props = {
  checked: number[];
  handleToggle: Function;
};

export default function CheckboxList(props: Props) {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <Delete />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={props.handleToggle(value)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={props.checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
