import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useStyles } from "../useStyles";

export default function SimpleSelect() {
  const classes = useStyles();
  const [interval, setInterval] = React.useState("");

  const handleChange = (event) => {
    setInterval(event.target.value);
  };

  return (
    <div>
        <Select
          value={interval}
          onChange={handleChange}
          className={classes.dropdown}
        >
          <MenuItem value="daily">Daily</MenuItem>
          <MenuItem value="weekly">Weekly</MenuItem>
          <MenuItem value="monthly">Monthly</MenuItem>
        </Select>
      
    </div>
  );
}
