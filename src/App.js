import React, { useState } from "react";
import "./styles.css";
import Api from "./api/api";
import IssuesPage from "./features/Issues/Issues";
import { selectSignInStatus, signIn } from "./features/register/slice";
import { useDispatch, useSelector } from "react-redux";
export default function App() {
  const dispatch = useDispatch();
  const signInStatus = useSelector(selectSignInStatus);
  console.log(signInStatus);
  let [isComment, showComments] = useState(false);
  return (
    <div>
      {signInStatus === "yet" ? (
        <div>
          <span>User name:</span>
          <input />
          <br />
          <span>Password:</span>
          <input />
          <br />
          <br />
          <button onClick={() => dispatch(signIn())}>Sign in</button>
          <button onClick={() => {}}>Register</button>
        </div>
      ) : (
        <div>
          <button onClick={() => showComments(!isComment)}>Show issues</button>
          {isComment ? <IssuesPage /> : <div></div>}
          <Api />
        </div>
      )}
    </div>
  );
}
