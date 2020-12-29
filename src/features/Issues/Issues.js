import React from "react";
import { useSelector } from "react-redux";
import { selectIssues } from "../../api/apiSlice";

export default function Issue() {
  const issues = useSelector(selectIssues);
  const issuesComponent = [];
  issues.forEach((para, index) => {
    const commentComponent = [];
    para.comment.forEach((para) => {
      commentComponent.push(<li>{para.body}</li>);
    });
    issuesComponent.push(
      <li key={index}>
        <div>
          Name: {para.user} ID: {para.user_id}
        </div>
        <div>Comment title: {para.comment_title}</div>
        {<div>Comment: {para.comment.length}</div>}
        <ol>{commentComponent}</ol>
      </li>
    );
  });
  return <ul>{issuesComponent}</ul>;
}
