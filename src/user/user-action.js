import axios from "axios";

export const USER_CREATED = "user/SIGNUP";
export const USER_LOGIN = "user/LOGIN";

export function signUp(email, password, history) {
  return function(dispatch, getState) {
    console.log(email, password);
    return axios
      .post("http://localhost:4000/signup", {
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

export function login(email, password, history) {
  return function(dispatch, getState) {
    console.log(email, password);
    return axios
      .post("http://localhost:4000/login", {
        email,
        password
      })
      .then(response => {
        console.log(response.data);
        history.push("/eventpage"); //when logged in, it goes to the roompage
        dispatch(loginAction(response.data.token, response.data.email));
      });
  };
}

function loginAction(token, email) {
  return {
    type: USER_LOGIN,
    payload: { token, email }
  };
}
