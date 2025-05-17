import { useState } from "react";

//Create object that hold initial state that the form should have or show
const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    //Create useState in React and set initial state to the form which is empty
    const [formFields, setFormFields] = useState(defaultFormField);

    //Destructured attributes from the fromFields
    const {displayName, email, password, confirmPassword} = formFields;

    //Initial function that handle when the field in the input is on changing
    const handleChange = (event) => {
        const {name, value} = event.target;

        //Get whatever current formFields had, change the name and value that on-changing
        //Ex: [name] = displayName      value = Ethan Dang (user input text)
        setFormFields({...formFields, [name]: value});
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={()=> {}}>

                {/* type is the type of value input to the form
                required is the form cannot be blank
                onChange when the state that user's changing the content of the field, called the function handler
                name the attribute
                value is the current value on the input field */}
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName}/>

                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" value={ email}/>

                <label>Password</label>
                <input type="password" required onChange={handleChange}name="password" value={password}/>

                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange}name="confirmPassword" value={confirmPassword}/>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;