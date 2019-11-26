import axios from "axios";

import {
  GET_TODOS,
  ADD_TODO,
  REMOVE_TODOS,
  MODIFY_TODO,
  MARK_TODO,
  UNMARK_TODO,
  SAVING_STATE
} from "./types";

/* export const addTodo = (__args__) => (dispatch, getState) => { 
  axios
  .post()
  .then(res => {
    dispatch({
      type:
      payload:
    });
  })
}
*/

export const getAllTodos = () => (dispatch, getState) => {
  axios
    .get("/api/todos/")
    .then(res => {
      console.log("got todos of " + res);
      dispatch({
        type: GET_TODOS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const addTodo = new_todo => (dispatch, getState) => {
  // First dispatch the todo being added to the reducer
  dispatch({ type: ADD_TODO, payload: new_todo });

  // then post it to the website, check we go it back, use that value
  // to set the id on that particular to-do
  dispatch({ type: SAVING_STATE, payload: false });
  axios
    .post("/api/todos/", new_todo)
    .then(res => {
      if (res.status === 200 || res.status === 201) {
        dispatch({
          type: SAVING_STATE,
          payload: true
        });
      } else {
        throw new Error(
          "Received non-200 status code from server: " + res.status
        );
      }
      return res;
    })
    .then(res => {
      dispatch({
        type: MODIFY_TODO,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const markTodo = ze_todo => (dispatch, getState) => {
  dispatch({ type: MARK_TODO, payload: ze_todo });
  dispatch({ type: SAVING_STATE, payload: false });

  console.log(ze_todo);

  axios
    .patch(`/api/todos/${ze_todo.id}/`, ze_todo)
    .then(res => {
      if (res.status === 200) {
        console.log("saved");
        dispatch({
          type: MODIFY_TODO,
          payload: res.data
        });
      }
    })
    .catch(err => console.log(err));
};

export const handleDelete = () => (dispatch, getState) => {
  // do I want to delete one or many URIs at a time?
  // parallel or not parallel?
  // hmm...

  dispatch({ type: SAVING_STATE, payload: true });

  axios.delete(`/api/todos/`);
  dispatch({
    type: REMOVE_TODOS,
    payload: []
  });
};
