// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import Form from './Form'
import axios from 'axios'
import * as yup from 'yup'
import User from "./User";
import schema from './formSchema'

const userData =[
  {username:"Sri",
  email:"sriluanil@yahoo.com",
  Terms_of_Service: `false`,
  },
  {username:"Anil",
  email:"anil@yahoo.com",
  Terms_of_Service: `false`,
  },
  {username:"Savi",
  email:"savi@yahoo.com",
  Terms_of_Service: `true`,
 },
  {username:"Ansh",
  email:"ansh@yahoo.com",
  Terms_of_Service: `true`,
 }
]



const initialFormValues = {
  username: "",
  email: "",
  password: "",
  Terms_of_Service: false,
};
const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  Terms_of_Service:false,
};

// const initialList = [];
const initialDisabled = true;



function App() {

//STATES
 // const [users, setUsers] = useState([{username:"", email:"", password:"", Terms_of_Service:false}]); // array of user objects
 const [users, setUsers] = useState(userData);
 const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled); // boolean

  //HELPERS
  const postNewList =(newUser)=>{
    
    axios
      .post(`https://reqres.in/api/users`, newUser)
      .then((res) => {
        // debugger
        //  console.log(res.data);
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
          debugger
        console.log(err);
      });

  };

  //EVENT HANDLERS
  const inputChange = (name, value) =>{
    yup
    .reach(schema, name) // get to this part of the schema
    //we can then run validate using the value
    .validate(value) // validate this value
    .then(() => {
      // happy path and clear the error
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    })
    // if the validation is unsuccessful, we can set the error message to the message
    // returned from yup (that we created in our schema)
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        // validation error from schema
        [name]: err.errors[0],
      });
    });

    setFormValues({
      ...formValues, [name]:value,
    });
  }
  const formSubmit =() => {
    const newUser ={
      username:formValues.username.trim(),
      email:formValues.email.trim(),
      password: formValues.password.trim(),
      Terms_of_Service:`${formValues.Terms_of_Service}`
    }
    postNewList(newUser);
  }
//Setting the disabled to false based on the validations
  useEffect(() => {
    // debugger
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="container">
       <header>
        <h1>User Onboarding </h1>
      </header>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
        />

        {users.map((user, idx) => {
                return <User key={idx} details={user} />;
              })}
    </div>
  );
}

export default App;
