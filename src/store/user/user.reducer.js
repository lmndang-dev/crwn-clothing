// Create a custom hook to use the UserContext
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};

//userReducer function to manage the state of the user
// This function takes the current state and an action as arguments
export const userReducer = (state = INITIAL_STATE, action) => {
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
      return state;
  }
};
