import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getPoilicies() {
    return apiClient.get("/policies");
  },
  getPolicy(id) {
    return apiClient.get("policies/" + id);
  }
};
