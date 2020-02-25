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
      .then(({ data: { token } }) => {
        dispatch({
          type: "session/LOGIN",
          payload: {
            token
            //email weggehaald
          }
        });
        history.push("/");
      })
      .catch(error => console.error(error));
  };
}
