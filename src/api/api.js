import React, { useEffect } from "react";
import { fetchIssues, fetchdata } from "./apiFunction";
import { useDispatch } from "react-redux";
import { getIssues } from "./apiSlice";

export default function Api() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchEverthing() {
      //get issues list
      const issues = await fetchIssues("rails", "rails", 1);
      console.log(issues);
      issues.data.forEach(async (element) => {
        console.log(element.comments_url);
        const comment = await fetchdata(element.comments_url);
        console.log(comment.data);
        // console.log(element.user.login,element.user.id,element.user.avatar_url)
        dispatch(
          getIssues({
            user: element.user.login,
            user_id: element.user.id,
            user_avatar: element.user.avatar_url,
            comment_title: element.title,
            comment_url: element.comments_url,
            comment: comment.data
          })
        );
      });
    }
    fetchEverthing();
  });
  return <div></div>;
}
