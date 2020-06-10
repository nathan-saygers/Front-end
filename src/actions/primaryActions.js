import axios from 'axios';

const token = localStorage.getItem('token');


export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const FETCH_JOURNAL_START = 'FETCH_JOURNAL_START';
export const FETCH_JOURNAL_SUCCESS = 'FETCH_JOURNAL_SUCCESS';
export const FETCH_JOURNAL_FAILURE = 'FETCH_JOURNAL_FAILURE';

export const ADD_JOURNAL_START = 'ADD_JOURNAL_START';
export const ADD_JOURNAL_SUCCESS = 'ADD_JOURNAL_SUCCESS';
export const ADD_JOURNAL_FAILURE = 'ADD_JOURNAL_FAILURE';

export const ADD_EXERCISE_START = 'ADD_EXERCISE_START';
export const ADD_EXERCISE_SUCCESS = 'ADD_EXERCISE_SUCCESS';
export const ADD_EXERCISE_FAILURE = 'ADD_EXERCISE_FAILURE';

export const DELETE_JOURNAL_START = 'DELETE_JOURNAL_START';
export const DELETE_JOURNAL_SUCCESS = 'DELETE_JOURNAL_SUCCESS';
export const DELETE_JOURNAL_FAILURE = 'DELETE_JOURNAL_FAILURE';

export const DELETE_EXERCISE_START = 'DELETE_EXERCISE_START';
export const DELETE_EXERCISE_SUCCESS = 'DELETE_EXERCISE_SUCCESS';
export const DELETE_EXERCISE_FAILURE = 'DELETE_EXERCISE_FAILURE';

export const EDIT_JOURNAL_START = 'EDIT_JOURNAL_START';
export const EDIT_JOURNAL_SUCCESS = 'EDIT_JOURNAL_SUCCESS';
export const EDIT_JOURNAL_FAILURE = 'EDIT_JOURNAL_FAILURE';

export const EDIT_EXERCISE_START = 'EDIT_EXERCISE_START';
export const EDIT_EXERCISE_SUCCESS = 'EDIT_EXERCISE_SUCCESS';
export const EDIT_EXERCISE_FAILURE = 'EDIT_EXERCISE_FAILURE';

export const FETCH_EXERCISES_SUCCESS = 'FETCH_EXERCISES_SUCCESS';

export const login = credentials => dispatch => {
  console.log('login firing from primaryActions')
  dispatch({ type: LOGIN_START });
  axios
    .post(
      "https://weight-lifting-journal-11.herokuapp.com/api/auth/login",
      credentials
    )
    .then(res => {
      console.log('login firing from primaryActions', res, res.data.id);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.id);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.id })
    })
    .catch(error => {
      dispatch({ type: LOGIN_FAILURE, payload: error.response })
    });
}

export const register = newUser => dispatch => {
  console.log('register firing from primaryActions')
  dispatch({ type: REGISTER_START });
  axios
    .post(
      "https://weight-lifting-journal-11.herokuapp.com/api/auth/register",
      newUser
    )
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.message.id);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data.message })
    })
    .catch(error => {
      dispatch({ type: REGISTER_FAILURE, payload: error.response })
    });
}

export const setJournals = journals => dispatch => {
  dispatch({ type: FETCH_JOURNAL_SUCCESS, payload: journals })
}

export const setExercises = exercises => dispatch => {
  dispatch({ type: FETCH_EXERCISES_SUCCESS, payload: exercises })
}

export const addJournal = (journal) => dispatch => {
  console.log('createNewJournal firing from primaryActions.js')
  dispatch({ type: ADD_JOURNAL_START });
  axios
    .post(`https://weight-lifting-journal-11.herokuapp.com/api/journals`, journal, {authorization: token})
    .then(res => {
      console.log('response from addJournal', res.data)
      dispatch({ type: ADD_JOURNAL_SUCCESS, payload: res.data })
    })
    .catch(error => {
      dispatch({ type: ADD_JOURNAL_FAILURE, payload: error.response })
    })
}

export const addExercise = (exercise) => dispatch => {
  console.log('addExercise firing from actions')
  dispatch({ type: ADD_EXERCISE_START });
  axios
    .post('https://weight-lifting-journal-11.herokuapp.com/api/exercises', exercise, {authorization: token})
    .then(res => {
      dispatch({ type: ADD_EXERCISE_SUCCESS, payload: res.data})
    })
    .catch(error => {
      dispatch({ type: ADD_EXERCISE_FAILURE, payload: error.response })
    })
}

export const deleteJournal = (id) => dispatch => {
  console.log('deleteJournal firing from primaryActions.js')
  dispatch({ type: DELETE_JOURNAL_START });
  axios
    .delete(`https://weight-lifting-journal-11.herokuapp.com/api/journals/${id}`, {authorization: token})
    .then(res => {
      console.log('response from within deleteJournal', res)
      dispatch({ type: DELETE_JOURNAL_SUCCESS, payload: id})
    })
    .catch(error => {
      dispatch({ type: DELETE_JOURNAL_FAILURE, payload: error.response })
    })
}

export const editJournal = (id, journal) => dispatch => {
  dispatch({ type: EDIT_JOURNAL_START });
  axios
    .put(`https://weight-lifting-journal-11.herokuapp.com/api/journals/${id}`, journal, {authorization: token})
    .then(res => {
      dispatch({ type: EDIT_JOURNAL_SUCCESS, payload: journal })
    })
    .catch(error => {
      dispatch({ type: EDIT_JOURNAL_FAILURE, payload: error.response })
    })
}

export const deleteExercise = (id) => dispatch => {
  console.log('deleteExercise firing from primaryActions.js')
  dispatch({ type: DELETE_EXERCISE_START });
  axios
    .delete(`https://weight-lifting-journal-11.herokuapp.com/api/exercises/${id}`, {authorization: token})
    .then(res => {
      dispatch({ type: DELETE_EXERCISE_SUCCESS, payload: id })
    })
    .catch(error => {
      dispatch({ type: DELETE_EXERCISE_FAILURE, payload: error.response })
    })
}

export const editExercise = (exercise) => dispatch => {
  dispatch({ type: EDIT_EXERCISE_START })
  axios
    .put(`https://weight-lifting-journal-11.herokuapp.com/api/exercises/${exercise.id}`, exercise, {authorization: token})
    .then(res => {
      console.log('response from inside redux editExercise', res)
      dispatch({ type: EDIT_EXERCISE_SUCCESS, payload: exercise })
    })
    .catch(error => {
      dispatch({ type: EDIT_EXERCISE_FAILURE, payload: error.response })
    })
} 