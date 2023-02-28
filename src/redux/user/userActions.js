import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCESS,
} from "./userTypes";

import axios from "axios";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSucess = (users) => {
  return {
    type: FETCH_USERS_SUCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("http://localhost:8080/users")
      .then((res) => {
        const users = res.data;
        dispatch(fetchUsersSucess(users));
      })
      .catch((error) => dispatch(fetchUsersFailure(error.message)));
  };
};

export const postUsers = (user) => {
  return function (dispatch) {
    axios
      .post("http://localhost:8080/users", user)
      .then((res) => {
        console.log("posted");
        dispatch(fetchUsers());
      })
      .catch((error) => console.log(error));
  };
};
