import React from "react";
import { Grid } from "@material-ui/core";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const styles = {
  Paper: {
    padding: 20,
    margin: 10,
    height: 400,
    overflowY: "auto"
  }
};

export default function() {
  return (
    <Grid container>
      <Grid item sm>
        <LeftPane styles={styles} />
      </Grid>

      <Grid item sm>
        <RightPane styles={styles} />
      </Grid>
    </Grid>
  );
}
