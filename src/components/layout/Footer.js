import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { useSelector } from "react-redux";

export default function Footer() {
  const muscles = useSelector(state => state.exercises.muscles);
  return (
    <Paper>
      <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
        <Tab label="All" />
        {muscles.map(muscle => (
          <Tab label={muscle} />
        ))}
      </Tabs>
    </Paper>
  );
}
