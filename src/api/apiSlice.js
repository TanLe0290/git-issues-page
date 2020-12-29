import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "api",
  initialState: {
    issues: []
  },
  reducers: {
    getIssues: (state, action) => {
      state.issues.push(action.payload);
    }
  }
});
export default slice.reducer;
export const { getIssues } = slice.actions;
export const selectIssues = (state) => state.api.issues;
