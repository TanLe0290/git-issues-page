import { combineReducers, configureStore } from "@reduxjs/toolkit";
import apiReducer from "../api/apiSlice";
import registerReducer from "../features/register/slice";
const reducer = combineReducers({
  api: apiReducer,
  register: registerReducer
});
export default configureStore({
  reducer: reducer
});
