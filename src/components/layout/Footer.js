import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { CHANGE_CATEGORY } from "../../actions/types";

export default function Footer() {
  const { muscles, category } = useSelector(state => state.exercises);
  const dispatch = useDispatch();
  const index =
    category === "" ? 0 : muscles.findIndex(group => group === category) + 1;
  const handleChange = (_, index) => {
    const category = muscles[index - 1];
    dispatch({
      type: CHANGE_CATEGORY,
      payload: category
    });
  };
  return (
    <Paper>
      <Tabs
        value={index}
        indicatorColor="primary"
        textColor="primary"
        centered
        onChange={handleChange}
      >
        <Tab label="All" />
        {muscles.map((muscle, index) => (
          <Tab key={index} label={muscle} />
        ))}
      </Tabs>
    </Paper>
  );
}
