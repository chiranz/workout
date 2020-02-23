import React from "react";
import { Paper, Typography } from "@material-ui/core";

export default function RightPane({ styles }) {
  return (
    <Paper style={styles.Paper}>
      <Typography variant="h3">Welcome!</Typography>
      <Typography variant="body1" style={{ marginTop: 20 }}>
        Please select an exercise from the left!
      </Typography>
    </Paper>
  );
}
