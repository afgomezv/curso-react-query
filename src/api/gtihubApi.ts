import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
