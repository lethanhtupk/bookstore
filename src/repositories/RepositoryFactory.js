import BooksRepository from "./BooksRepository";

const repositories = {
  books: BooksRepository,
};

export const RepositoryFactory = {
  get: (name) => repositories[name],
};
