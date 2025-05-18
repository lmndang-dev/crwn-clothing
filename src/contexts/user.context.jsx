import { createContext, useState } from "react";

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

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

/* When the UserContext value has updated then re-rendering the component which is the hold application wrapped under the UserProvider */
