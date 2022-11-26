import createApiClient from "./api.service";

class SignupService {
  constructor(baseUrl = "/api/jewelshop/signup") {
    this.api = createApiClient(baseUrl);
  }
  // async getAll() {
  //   return (await this.api.get("/")).data;
  // }
  async create(data) {
    return (await this.api.post("/", data)).data;
  }
  // async deleteAll() {
  //   return (await this.api.delete("/")).data;
  // }
  // async get(id) {
  //   return (await this.api.get(`/${id}`)).data;
  // }
  // async update(id, data) {
  //   return (await this.api.put(`/${id}`, data)).data;
  // }
  // async delete(id) {
  //   return (await this.api.delete(`/${id}`)).data;
  // }
  async auth(data){
    return (await this.api.post("/auth", data)).data;

  }
}
export default new SignupService();
