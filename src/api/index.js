import axios from "axios";

const instance = axios.create({
  baseURL: " https://newsapi.org/v2",
  headers: { "X-API-Key": "f51a492cc6d048c1bf3be301ee7bc19b" }
});

export default instance;
