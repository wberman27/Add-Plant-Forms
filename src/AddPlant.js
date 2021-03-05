import React, { useState, useEffect } from "react";
//Styles
import { useStyles } from "./useStyles";
import 'fontsource-roboto';
import "./styles.css";

//Dependencies
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Grid from "@material-ui/core/Grid";
import * as yup from "yup";

//Local Imports
import MaterialUIPickers from "./components/Date";
import SimpleSelect from "./components/Select";
import Schema from "./components/Schema";

const initialFormValues = {
  //intial form values
  nickname: "",
  species: "",
  date: "",
  time: "",
  frequency: "",
  interval: "",
  img: ""
};
// const initialFormErrors = {
//   //intial form errors
//   nickname: "",
//   species: "",
//   date: "",
//   time: "",
//   frequency: "",
//   interval: "",
//   img: ""
// };

// const initialDisabled = false; //button disabled intially


const AddPlant = (props) => {
  const classes = useStyles();

  const [formValues, setFormValues] = useState(initialFormValues);
  // const [formErrors, setFormErrors] = useState(initialFormErrors);
  // const [disabled, setDisabled] = useState(initialDisabled);
  // const [plant, setPlant] = useState([]);
  // const [photo, setPhoto] = useState("");
  

  //whenever form values change, check schema validation, then disable/enable button accordingly
  // useEffect(() => { 
  //   Schema.isValid(formValues).then((valid) => setDisabled(!valid));
  // }, [formValues]);


  //Validate values with Schema using names and values of event target, set form errors object accordingly
  // const inputChange = (name, value) => {
  //   yup
  //     .reach(Schema, name)
  //     .validate(value)
  //     .then(() => {
  //       setFormErrors({ ...formErrors, [name]: "" });
  //     })
  //     .catch((err) => {
  //       setFormErrors({ ...formErrors, [name]: err.errors[0] });
  //     });
  //   setFormValues({
  //     ...formValues,
  //     [name]: value
  //   });
  // };


  // //Invoke inputChange with name and value of evt.target
  // const onChange = (evt) => {
  //   const { name, value, type, checked } = evt.target;
  //   const valueToUse = type === "checkbox" ? checked : value; // use valueToUse with checkbox, otherwise use value
  //   inputChange(name, valueToUse);
  // };

  return (
    <>
      <form className={classes.formContainer}>
        
      
  {/* <Grid container className={classes.windowContainer}> */}

       {/* Header */}
      <Grid item>
         <h1 className={classes.h1}>Add a New Plant</h1>
     </Grid>

      {/* Root Container */}
      <Grid 
      container 
      className={classes.root}    
      justify="center"
      >

        {/**************** LEFT SIDE  **************/}
        
          <Grid
            container
            className={classes.textInputs}
            spacing={1}
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
          {/**___ PLANT  PICTURE ___**/}

            <Grid item>
              {/* Img */}
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
                name="img"
                value={formValues.img}
                // onChange={onChange}
              />

              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  className={classes.uploadButton}
                >
                  <PhotoCamera />
                </IconButton>
              </label>
              <Grid item className = {classes.uploadPic}><h6 className = {classes.h6}>Upload Picture</h6></Grid>
            </Grid>

          {/**___ TEXT FIELDS ___**/}

            <Grid item>
              {/* Nickname */}
              <TextField
                name="nickname"
                value={formValues.nickname}
                // onChange={onChange}
                label="Nickname"
                variant="filled"
                required
                className={classes.textNickname}
              />
              {/* <div className="errors">{formErrors.nickname}</div> */}
            </Grid>

            <Grid item>
              {/* Species */}
              <TextField
                label="Species"
                name="species"
                value={formValues.species}
                // onChange={onChange}
                variant="filled"
                required
                className={classes.textSpecies}
              />
              {/* <div className="errors">{formErrors.species}</div> */}
            </Grid>
          
          
          </Grid>






          {/**************** RIGHT  SIDE **************/}
          {/***************** WATERING  INFORMATION ***************/}

          <Grid
            container
            className={classes.waterInfo}
            spacing={2}
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item className={classes.h5}><h5>Watering Information</h5></Grid>



            {/* Date and Time */}
            <Grid item className={classes.dateTime}>
              <MaterialUIPickers value = {formValues.date} name="date" />
              {/* onChange={onChange} */}
              {/* <div className="errors">{formErrors.date}</div> */}
            </Grid>



            <Grid item className={classes.frequency}>
              {/* Frequency */}
              <Grid item ><h6 className = {classes.h6}>Frequency</h6></Grid>
                <input
                  type="number"
                  name="frequency"
                  min="1"
                  max="31"
                  value={formValues.frequency}
                  required
                  // onChange={onChange}
                  className={classes.frequencyField}
                />
                {/* <div className="errors">{formErrors.frequency}</div> */}
            </Grid>


            <Grid item className={classes.h5}><h6 className = {classes.h6}>Interval</h6></Grid>

            <Grid item className={classes.select}>
              {/* Interval */}
              <SimpleSelect name="interval" value={formValues.interval} />
              {/* onChange={onChange} */}
              {/* <div className="errors">{formErrors.interval}</div> */}
            </Grid>
          </Grid>
      </Grid>


      {/************** BOTTOM  SAVE/CANCEL BUTTONS ****************/}

        <Grid
          container
          className={classes.buttonsContainer}
          spacing={1}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            {/* Save */}
            <Button variant="contained" className={classes.buttons}>Save</Button>
            {/* onChange={onChange} */}
          </Grid>
          <Grid item>
            {/* Delete */}
            <Button variant="contained" className={classes.buttons} onClick={()=>{setFormValues(initialFormValues)}}>Cancel</Button>
            {/* onChange={onChange} */}
          </Grid>
        </Grid> 
    {/* </Grid> */}

    </form>
    </>
  );
};

export default AddPlant;
