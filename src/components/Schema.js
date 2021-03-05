import * as yup from "yup";

const Schema = yup.object().shape({
  //input string, get rid of white space, name is required and minimum characters at least 2
  nickname: yup
    .string()
    .trim()
    .required("Nickname is required.")
    .min(2, "Nickname must be at least 2 characters."),
  species: yup
    .string()
    .trim()
    .required("Species is required.")
    .min(3, "Species must be at least 3 characters."),
  date: yup
    .string()
    .required("Start Date is required."),//"MM/dd/yyyy"
  time: yup.string(), //NOT required
  frequency: yup
    .string()
    .required("Frequency is required."),
  interval: yup
    .string()
    .required("Interval is required."),
  img: yup.string()
});

export default Schema;
