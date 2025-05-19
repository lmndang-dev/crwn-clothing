import { createContext, useEffect, useReducer } from "react";

import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

import { createAction } from "../utils/reducer/reducer.utils";

// Create the UserContext as the actual value that you want to access
// in your components. This will be the context object that you will use
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Create a custom hook to use the UserContext
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

//userReducer function to manage the state of the user
// This function takes the current state and an action as arguments
const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      // If the action type is "SET_CURRENT_USER", update the state with the new user
      // Keep the rest of the state unchanged and only update the currentUser property
      // This is a common pattern in reducers to ensure that the state is immutable
      return {
        ...state,
        currentUser: payload,
      };
    default:
      // If the action type is not recognized, throw an error
      // This is a good practice to catch any potential issues in reducers
      // and ensure that all action types are handled
      throw new Error(`Unhandled type: ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};
// Create the UserProvider component
export const UserProvider = ({ children }) => {
  //const [currentUser, setCurrentUser] = useState(null);

  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    // This function dispatches an action to update the current user in the state
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        // If the user is authenticated, create a user document in Firestore
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    // Cleanup the subscription when the component unmounts
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

/* When the UserContext value has updated then re-rendering the component which is the hold application wrapped under the UserProvider */
