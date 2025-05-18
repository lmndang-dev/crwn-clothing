// import { useEffect } from 'react';
// import {getRedirectResult} from 'firebase/auth';

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  //Need to fix
  // useEffect(async () => {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  // }, [])

  return (
    <div className="authentication-container">
      {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
