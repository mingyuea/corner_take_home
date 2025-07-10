import axios from "axios";

export const healthieApiClient = axios.create({
  baseURL: "https://api.gethealthie.com/graphql",
  headers: {
    Authorization: `Basic ${process.env.HEALTHIE_API_KEY}`,
    AuthorizationSource: "API",
    "Content-Type": "application/json",
  },
});
