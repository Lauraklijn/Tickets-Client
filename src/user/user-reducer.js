import { USER_CREATED } from "../user/user-action";
import { USER_LOGIN_SUCESS } from "../user/user-action";

const initialState = {
  userCreated: false,
  jwt: null,
  email: null
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_CREATED:
      return {
        ...state,
        userCreated: true
      };
    case USER_LOGIN_SUCESS:
      return {
        ...state,
        jwt: action.payload.token,
        email: action.payload.email
      };
    default:
      return state;
  }
};
