import axios from "axios";
import parseLink, { Links } from "parse-link-header";

export async function fetchIssues(org, repo, page) {
  try {
    const url = `https://api.github.com/repos/${org}/${repo}/issues?per_page=25&page=${page}`;
    const issuesResponse = axios.get(url);
    return issuesResponse;
  } catch (err) {
    throw err;
  }
}

export async function fetchdata(url) {
  try {
    const res = axios.get(url);
    return res;
  } catch (err) {
    throw err;
  }
}
