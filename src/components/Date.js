// import 'date-fns';
import React from 'react';
import { useStyles } from "../useStyles";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';




export default function MaterialUIPickers() {

  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2021-03-02T14:12:00'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid item className={classes.date}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          id="date-picker-inline"
          label="Start Date"
          name="date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </Grid>
        <Grid item className={classes.time}>
        <KeyboardTimePicker
          id="time-picker"
          label="Time (optional)"
          name="time"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        </Grid>
    </MuiPickersUtilsProvider>
  );
}
