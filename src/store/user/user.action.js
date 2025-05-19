import USER_ACTION_TYPES from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCurrentUser = (user) =>
  // This function dispatches an action to update the current user in the state
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
