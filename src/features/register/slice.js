import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "register",
  initialState: {
    signInStatus: 'yet',
    userName: '',
    password: '',
  },
  reducers: {
    signIn: (state, action) => {
if(state.signInStatus==='yet'){
  state.signInStatus = 'done';
  console.log(state.signInStatus)

}}
  }
});
export default slice.reducer;
export const { signIn } = slice.actions;
export const selectSignInStatus = (state) => state.register.signInStatus;
export const selectUserName = (state) => state.register.userName;
export const selectPassword = (state) => state.register.password;