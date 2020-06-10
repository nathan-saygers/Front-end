import { 
  ADD_JOURNAL_START, 
  ADD_JOURNAL_SUCCESS, 
  ADD_JOURNAL_FAILURE, 
  LOGIN_START, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  REGISTER_START, 
  REGISTER_SUCCESS, 
  REGISTER_FAILURE, 
  DELETE_JOURNAL_START, 
  DELETE_JOURNAL_SUCCESS, 
  DELETE_JOURNAL_FAILURE, 
  FETCH_JOURNAL_SUCCESS,
  FETCH_EXERCISES_SUCCESS,
  EDIT_JOURNAL_START,
  EDIT_JOURNAL_SUCCESS,
  DELETE_EXERCISE_START,
  DELETE_EXERCISE_SUCCESS,
  DELETE_EXERCISE_FAILURE,
  ADD_EXERCISE_START,
  ADD_EXERCISE_SUCCESS,
  ADD_EXERCISE_FAILURE,
  EDIT_EXERCISE_START,
  EDIT_EXERCISE_SUCCESS,
  EDIT_EXERCISE_FAILURE,
} from '../actions/primaryActions';

export const initialState = {
  exercises: [],
  journals: [],
  userID: 0,
  loginLoading: false,
  registerLoading: false,
  addJournalLoading: false,
  isDeleting: false,
  isEditing: false,
  isDeletingExercise: false,
  isAddingExercise: false,
  isEditingExercise: false,
  error: '',
}

export const reducer = (state = initialState, action) => {
  console.log('payload from before the switch cases', action.payload)
  switch(action.type) {
    case ADD_JOURNAL_START:
      return {
        ...state,
        addJournalLoading: true,
      }
    case ADD_JOURNAL_SUCCESS:
      return {
        ...state,
        journals: [...state.journals, action.payload],
        addJournalLoading: false,
      }
    case ADD_JOURNAL_FAILURE:
      return {
        ...state,
        error: action.payload,
        addJournalLoading: false,
      }
    case DELETE_JOURNAL_START:
      return {
        ...state,
        isDeleting: true,
      }
    case DELETE_JOURNAL_SUCCESS:
      const filteredJournals = state.journals.filter(journal => journal.id !== action.payload)
      return {
        ...state,
        journals: filteredJournals,
        isDeleting: false,
      }
    case DELETE_JOURNAL_FAILURE:
      return {
        ...state,
        error: action.payload,
        isDeleting: false
      }
    case EDIT_JOURNAL_START:
      return {
        ...state,
        isEditing: true,
      }
    case EDIT_JOURNAL_SUCCESS:
      const updatedJournals = state.journals.map(journal => (journal.id === action.payload.id ? action.payload : journal)) 
      return {
        ...state,
        journals: updatedJournals,
        isEditing: false,
      }
    case LOGIN_START:
      return {
        ...state,
        loginLoading: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        userID: action.payload,
        loginLoading: false,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loginLoading: false,
      }
    case REGISTER_START:
      return {
        ...state,
        registerLoading: true,
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        userID: action.payload.id,
        registerLoading: false,
      }
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        registerLoading: false,
      }
    case FETCH_JOURNAL_SUCCESS:
      return {
        ...state,
        journals: action.payload
      }
    case FETCH_EXERCISES_SUCCESS:
      return {
        ...state,
        exercises: action.payload
      }
    case DELETE_EXERCISE_START:
      return {
        ...state,
        isDeletingExercise: true,
      }
    case DELETE_EXERCISE_SUCCESS:
      const filteredExercises = state.exercises.filter(exercise => exercise.id !== action.payload)
      return {
        ...state,
        exercises: filteredExercises,
        isDeletingExercise: false,
      }
    case DELETE_EXERCISE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isDeletingExercise: false,
      }
    case ADD_EXERCISE_START:
      return {
        ...state,
        isAddingExercise: true,
      }
    case ADD_EXERCISE_SUCCESS:
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
        isAddingExercise: false,
      }
    case ADD_EXERCISE_FAILURE:
      return {
        ...state,
        isAddingExercise: false,
        error: action.payload,
      }
    case EDIT_EXERCISE_START:
      return {
        ...state,
        isEditingExercise: true,
      }
    case EDIT_EXERCISE_SUCCESS:
      const updatedExercises = state.exercises.map(exercise => (exercise.id === action.payload.id ? action.payload : exercise))
      return {
        ...state,
        exercises: updatedExercises,
        isEditingExercise: false,
      }
    case EDIT_EXERCISE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isEditingExercise: false,
      }
    default:
      return state;
  }
}