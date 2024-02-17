import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
