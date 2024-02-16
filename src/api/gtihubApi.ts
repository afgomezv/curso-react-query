import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
    //`Bearer ${process.env.GITHUB_TOKEN}`,
  },
});
