import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// Create the UserContext as the actual value that you want to access
// in your components. This will be the context object that you will use
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Create the UserProvider component
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

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
