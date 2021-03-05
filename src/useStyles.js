import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  primarycolor: "#b3be9f",

  root:{
    flexFlow: "row",
    padding: "2%",
    fontFamily: "'Roboto', sans-serif",
    alignItems: "center",
  },

  buttons: {
    background: "#b3be9f",
    color: "white",
    borderRadius: "10px",
  },
  buttonsContainer: {
    width: "100%"
  },
  input: {
    display: "none"
  },

  uploadButton: {
    opacity: '1',
    border:'5px solid white',
    color: 'white',
    width:'150px',
    height:'150px'
  },

  textInputs:{
    fontFamily: "'Roboto', sans-serif",
    background: '#b3be9f',
    borderRadius: '10px',
    width:"25%",
    marginRight:'2%',
    marginLeft: '3%',
    paddingTop: '1.8%'
  },

  textField:{
    background: "white",

  },
  textNickname:{
    background: 'white',
    marginBottom: ".5%",
    marginTop: "2%"
  },
  
  textSpecies:{
    background: 'white',
    margin: "5% 0 5% 0"
  },

  dropdown:{
    fontFamily: "'Roboto', sans-serif",
    border: '2px solid white',
    minWidth:"120px"
  },

  frequency:{
    fontFamily: "'Roboto', sans-serif",
  },

  date:{
    marginBottom: "5%",
    
  },

  uploadPic:{
    textAlign: 'center',
  },

  frequencyField:{
    minWidth:"115px",
    background: 'rgba(76, 175, 80, 0.1)'
  },

  h1:{
    fontSize: "2rem",
    textAlign: "center"
  },
  h6:{
    fontFamily: "'Roboto', sans-serif",
    fontSize: "1rem",
    fontWeight: "100"
  },

  waterInfo:{
    background: '#b3be9f',
    borderRadius: '10px',
    width: "30%",
    marginLeft:'2%',
    padding: "1.4%"
  }
}));
 // imageContainer:{
  //   width:'30%',
  //   paddingLeft: "5%",
  //   background: '#b3be9f',
  //   borderRadius: '10px',
  //   justify: 'center',
  //   alignItems: 'center'
  // },
  // formContainer:{
  //   backgroundImage: "url('https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')",
  //   fontSize: "1.35rem",
  //   marginBlockStart: "0",
  //   marginBlockEnd: "0",
  //   color: "white",
  //   fontFamily: "'Roboto', sans-serif",
  // },