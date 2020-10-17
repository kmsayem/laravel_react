import React from "react";
import axios from "axios";
import notification from "@/App/components/notification";
import { store } from "../redux/store";
// import authActions from "redux/auth/actions";
// import { isObject } from "../lib";
const cancelTokenSource = axios.CancelToken.source();
let isAlreadyFetchingAccessToken = false;
let subscribers = [];

const instance = axios.create({
  // .. where we make our configurations
  baseURL: 'http://127.0.0.1:8000/api/'
});

const set_token = () => {
  instance.defaults.headers.common["Authorization"] = `bearer ${localStorage.getItem('id_token')}`;
}
set_token();
// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common["Content-Type"] = "application/json";
// Also add/ configure interceptors && all the other cool stuff

// instance.interceptors.request...
instance.interceptors.response.use(
  response => response,
  error => {
    const {
      config,
      response: { status, data }
    } = error;

    const originalRequest = config;

    if (status === 401) {
      if (data.detail === "Invalid Token") {
        localStorage.removeItem("auth");
        return window.location.href = "/login";
      } else if (!isAlreadyFetchingAccessToken) {
        isAlreadyFetchingAccessToken = true;
        const auth = JSON.parse(localStorage.getItem("auth"));
        const value = { token: auth.token };
        delete instance.defaults.headers.common["Authorization"];
        store.dispatch(authActions.loginAction(value)).then(response => {
          isAlreadyFetchingAccessToken = false;
          let token = response.data.token;
          store.dispatch(authActions.login(response.data));
          originalRequest.headers[
            "Authorization"
          ] = `bearer ${response.data.token}`;
          onAccessTokenFetched(response);
        });
      }
      const retryOriginalRequest = new Promise(resolve => {
        addSubscriber(access_token => {
          resolve(axios(originalRequest));
        });
      });
      return retryOriginalRequest;
    } else {
      //if(status === 403)
      Promise.reject({ ...error }).catch(error => {
        // let data = error.response.data;
        if (data.detail) {
          notification(
            "error",
            data.detail
          );
        } else if (Array.isArray(data)) {
          notification("error", data[0]);
        } else if (isObject(data)) {
          Object.keys(data).map(function(key, index) {
            if (typeof data[key][0] == "string") {
              notification(
                "error",
                data[key][0]
              );
            }
            Object.keys(data[key]).map(function(k, i) {
              if (typeof data[key][k] == "object") {
                multipleNotification(data[key][k], status);
                // notification('error', `status: ${error.response.status}`, data[key][k][0]);
              }
            });
          });
        } else {
          const { status, statusText } = error.response;
          notification(
            "error",
            "Something went wrong! Please notify us!"
          );
        }
      });
    }
    return Promise.reject({ ...error });
  }
);

const multipleNotification = (data, status) => {
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    if (typeof element == "string") {
      notification("error", element);
    }
  }
};

function onAccessTokenFetched(response) {
  subscribers = subscribers.filter(callback => callback(response));
}

function addSubscriber(callback) {
  subscribers.push(callback);
}

export default instance;
export{
  cancelTokenSource
}
