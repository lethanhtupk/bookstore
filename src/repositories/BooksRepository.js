import Repository from "./Repository";

const resource = "/books";

export default {
  getBooks() {
    return Repository.get(`${resource}`);
  },
  createBook(payload) {
    return Repository.post(`${resource}`, payload);
  },
  getBook(id) {
    return Repository.get(`${resource}/${id}`);
  },
  updateBook(id, payload) {
    return Repository.put(`${resource}/${id}`, payload);
  },
  deleteBook(id) {
    return Repository.delete(`${resource}/${id}`);
  },
};
