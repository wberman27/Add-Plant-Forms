// import Schema from "../components/Schema";

// const initialFormValues = {
//   //intial form values
//   nickname: "",
//   species: "",
//   date: "",
//   time: "",
//   amount: "",
//   freq: ""
// };
// const initialFormErrors = {
//   //intial form errors
//   nickname: "",
//   species: "",
//   date: "",
//   time: "",
//   amount: "",
//   freq: ""
// };

// const initialDisabled = false; //button disabled intially

// const getOrder = () =>{ //get order and set from api
//   axios
//     .get('https://pizzaplace.com/api/Orders')
//     .then(res =>{
//       setOrder(res.data)
//     })
//     .catch(err =>{
//       console.log(err)
//     })
// }

// const postNewOrder = newOrder => { //post order to api
//   axios
//     .post('https://pizzaplace.com/api/Orders', newOrder)
//     .then(res =>{
//       setOrder([res.data, ...order])
//     })
//     .catch(err => {
//       console.log(err)
//     })
//     setFormValues(initialFormValues) //reset form values
// }

// const formSubmit = () => { //function for submitting form
//   const newOrder = {
//     name: formValues.name.trim(),
//     size: formValues.size,
//     spec: formValues.spec.trim()
//   }
//   postNewOrder(newOrder) //post new order
// }

// const onSubmit = (evt) => {
//   //prevent submit's default refresh
//   evt.preventDefault();
//   formSubmit();
// };

// const onChange = (evt) => {
//   const { name, value, type, checked } = evt.target;
//   const valueToUse = type === "checkbox" ? checked : value; // use valueToUse with checkbox, otherwise use value
//   inputChange(name, valueToUse);
// };
