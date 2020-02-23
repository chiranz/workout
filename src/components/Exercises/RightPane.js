import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

export default function RightPane({ styles }) {
  let exercise = useSelector(state => state.exercises.exercise);
  if (!Object.keys(exercise).length) {
    exercise.title = "Welcome!";
    exercise.description = "Please select an exercise from the left!";
  }
  return (
    <Paper style={styles.Paper}>
      <Typography variant="h4">{exercise.title}</Typography>
      <Typography variant="body1" style={{ marginTop: 20 }}>
        {exercise.description}
      </Typography>
    </Paper>
  );
}
