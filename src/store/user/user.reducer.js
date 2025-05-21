import USER_ACTION_TYPES from "./user.types";

export const USER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

//userReducer function to manage the state of the user
// This function takes the current state and an action as arguments
export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      // If the action type is "SET_CURRENT_USER", update the state with the new user
      // Keep the rest of the state unchanged and only update the currentUser property
      // This is a common pattern in reducers to ensure that the state is immutable
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      // If the action type is "SET_CURRENT_USER", update the state with the new user
      // Keep the rest of the state unchanged and only update the currentUser property
      // This is a common pattern in reducers to ensure that the state is immutable
      return {
        ...state,
        error: payload,
      };
    default:
      // If the action type is not recognized, throw an error
      // This is a good practice to catch any potential issues in reducers
      // and ensure that all action types are handled
      return state;
  }
};
