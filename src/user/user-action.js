import axios from "axios";

export const USER_CREATED = "USER_CREATED";
export const USER_LOGIN_SUCESS = "USER_LOGIN_SUCCES";

export function signUp(email, password, history) {
  return function(dispatch, getState) {
    console.log(email, password);
    return axios
      .post("http://localhost:5050/signup", {
        email,
        password
      })
      .then(response => {
        console.log(response.data);
        history.push("/login");

        dispatch(signUpSucces(response));
      });
  };
}
function signUpSucces() {
  return { type: USER_CREATED };
}

// LOGIN_______________________________________
function loginSuccess(token) {
  return {
    type: USER_LOGIN_SUCESS,
    payload: { token: token }
  };
}

export function login(email, password, history) {
  return async function(dispatch, getState) {
    console.log(email, password);
    await axios
      .post("http://localhost:5050/login", {
        email,
        password
      })
      .then(response => {
        history.push("/");

        dispatch(loginSuccess(response.data));
      });
  };
}
