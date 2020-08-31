import React from "react";
import { withAuthorization } from "../Session";
import BookList from "../../containers/BookList";

const HomePage = () => {
  return (
    <main className="px-4 py-6">
      <h3 className="text-xl text-gray-900">Phiêu lưu</h3>
      <p className="text-gray-600">
        Đắm mình vào những câu truyện cổ tích, nhập vai vào nhân vật chính để
        khám phá thế giới mới
      </p>
      <button className="w-full p-2 mt-3 text-sm font-semibold text-center text-white uppercase bg-orange-600 rounded-full focus:bg-pink-500">
        View all (20 books)
      </button>
      <BookList />
    </main>
  );
};

// authUser != null
const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);
