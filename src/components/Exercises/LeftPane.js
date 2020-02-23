import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { CHANGE_EXERCISE } from "../../actions/types";

export default function LeftPane({ styles }) {
  const { exercises, category } = useSelector(state => state.exercises);
  const dispatch = useDispatch();
  const handleClick = item => {
    dispatch({
      type: CHANGE_EXERCISE,
      payload: item
    });
  };

  return (
    <Paper style={styles.Paper}>
      {exercises.map(([group, exercise], index) =>
        !category || category === group ? (
          <div key={index}>
            <Typography variant="h6" style={{ textTransform: "capitalize" }}>
              {group}
            </Typography>
            <List component="ul" aria-label="exercise-titles">
              {exercise.map((item, index) => (
                <ListItem button key={index} onClick={() => handleClick(item)}>
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
            </List>
          </div>
        ) : null
      )}
    </Paper>
  );
}
