import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  //auth,
  signInWithGooglePopup,
  //Authenticate user with email and password
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

//Create object that hold initial state that the form should have or show
const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  //Create useState in React and set initial state to the form which is empty
  const [formFields, setFormFields] = useState(defaultFormField);

  //Destructured attributes from the fromFields
  const { email, password } = formFields;

  const resetFormFields = () => {
    //Set the formFields to the defaultFormField
    setFormFields(defaultFormField);
  };

  //Function that handle when the user click on the button
  //The button is the sign in with google button
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  //Function that handle when the form is submitted
  //The event is the event that triggered when the form is submitted
  const handleSubmit = async (event) => {
    //Prevent the default behavior of the form
    //The default behavior of the form is to refresh the page
    //So we need to prevent it
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      //Reset the form fields to the default form field
      resetFormFields();
    } catch (error) {
      //Check if the error is the wrong password or user not found
      //If the error is the wrong password or user not found
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Incorrect username or password");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log("user sign in encountered an error", error);
      }
    }
  };

  //Initial function that handle when the field in the input is on changing
  const handleChange = (event) => {
    const { name, value } = event.target;

    //...formFields => Get whatever current formFields had, change the name and value that on-changing
    //Ex: [name] = email      value = ethan.dang.canada@gmail.com
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          {/* type="button" is to prevent the form from submitting */}
          {/* buttonType="google" is to style the button */}
          {/* onClick={signInWithGoogle} is to call the function when the button is clicked */}
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
