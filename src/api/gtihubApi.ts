import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
