import { useState } from "react";

import FormInput from "../form-input/form-input.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

//Create object that hold initial state that the form should have or show
const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  //Create useState in React and set initial state to the form which is empty
  const [formFields, setFormFields] = useState(defaultFormField);

  //Destructured attributes from the fromFields
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    //Set the formFields to the defaultFormField
    setFormFields(defaultFormField);
  };

  //Function that handle when the form is submitted
  //The event is the event that triggered when the form is submitted
  const handleSubmit = async (event) => {
    //Prevent the default behavior of the form
    //The default behavior of the form is to refresh the page
    //So we need to prevent it
    event.preventDefault();

    //Check if the password and confirm password are the same
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }

    try {
      //Create user with email and password
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      //Create user document in the database
      await createUserDocumentFromAuth(user, { displayName });

      //Reset the form fields to the default form field
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }

      //console.log("user creation encountered an error", error);
    }
  };

  //Initial function that handle when the field in the input is on changing
  const handleChange = (event) => {
    const { name, value } = event.target;

    //...formFields => Get whatever current formFields had, change the name and value that on-changing
    //Ex: [name] = displayName      value = Ethan Dang (user input text)
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        {/* type is the type of value input to the form
                required is the form cannot be blank
                onChange when the state that user's changing the content of the field, called the function handler
                name the attribute
                value is the current value on the input field */}

        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
