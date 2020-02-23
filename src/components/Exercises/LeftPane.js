import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { useSelector } from "react-redux";

export default function LeftPane({ styles }) {
  const { exercises } = useSelector(state => state.exercises);

  return (
    <Paper style={styles.Paper}>
      {exercises.map(([group, exercise]) => {
        return (
          <>
            <Typography variant="h6" style={{ textTransform: "capitalize" }}>
              {group}
            </Typography>
            <List component="ul" aria-label="exercise-titles">
              {exercise.map((item, index) => (
                <ListItem button>
                  <ListItemText primary={item.title} key={index} />
                </ListItem>
              ))}
            </List>
          </>
        );
      })}
    </Paper>
  );
}
