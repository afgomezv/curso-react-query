import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
