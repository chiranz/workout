import {
  GET_EXERCISES,
  CHANGE_CATEGORY,
  CHANGE_EXERCISE
} from "../actions/types";
import { exercises } from "../constant";

const getExercisesByMuscles = () => {
  return Object.entries(
    exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;
      exercises[muscles] = exercises[muscles]
        ? [...exercises[muscles], exercise]
        : [exercise];
      return exercises;
    }, {})
  );
};

const getMuscles = () => {
  return exercises.reduce((musclesList, exercise) => {
    const { muscles } = exercise;
    if (!musclesList.includes(muscles)) {
      musclesList.push(muscles);
    }
    return musclesList;
  }, []);
};
const initialState = {
  exercises: getExercisesByMuscles(),
  muscles: getMuscles(),
  loading: false,
  category: "",
  exercise: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EXERCISES:
      return {
        ...state,
        exercises: action.payload
      };
    case CHANGE_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    case CHANGE_EXERCISE:
      return {
        ...state,
        exercise: action.payload
      };
    default:
      return state;
  }
}
