import axios from "axios";
axios.defaults.baseURL = "/api";
let Http = {
  async login(params) {
    return await axios.get("/user", { params: params });
  },
  async getUserData(params) {
    return await axios.get("/usersData", { params: params });
  },
  async postUserData(params) {
    return await axios.post("/usersData", params);
  },
  async delUserData(params) {
    return await axios.delete(`/usersData/${params}`);
  },
  async putUserData(id, params) {
    return await axios.put(`/usersData/${id}`, params);
  },
  async getqqUserData(params) {
    return await axios.get("/qqUsersData", { params: params });
  },
  async postqqUserData(params) {
    return await axios.post("/qqUsersData", params);
  },
  async delqqUserData(params) {
    return await axios.delete(`/qqUsersData/${params}`);
  },
  async putqqUserData(params) {
    return await axios.put("/qqUsersData", params);
  },
};
export { Http };
