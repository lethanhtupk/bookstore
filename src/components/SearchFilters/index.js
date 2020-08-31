import React, { useState } from "react";

const SearchFilters = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    const value = !isOpen;
    setIsOpen(value);
  };

  const filterForm = (
    <form>
      <div className="px-4 py-3 border-t border-gray-900 filterByStatus">
        <div>
          <label>
            <span className="mb-1 text-sm text-gray-500">Trạng thái</span>
            <select className="block w-full mt-1 text-white bg-gray-700 rounded-lg shadow form-select">
              <option>Có sẵn</option>
              <option>Tạm hết</option>
            </select>
          </label>
        </div>
      </div>
      <div className="px-4 py-3 border-t border-gray-900 filterByGenre">
        <span className="block mb-1 text-sm text-gray-500">Thể loại</span>
        <div className="sm:flex sm:flex-wrap">
          <label className="flex items-center sm:w-1/4">
            <input
              className="bg-gray-900 form-checkbox"
              type="checkbox"
              name="vanhoc"
            />
            <span className="ml-2 text-white">Văn học</span>
          </label>
          <label className="flex items-center sm:w-1/4">
            <input
              className="bg-gray-900 form-checkbox"
              type="checkbox"
              name="kinhte"
            />
            <span className="ml-2 text-white">Kinh tế</span>
          </label>
          <label className="flex items-center sm:w-1/4">
            <input
              className="bg-gray-900 form-checkbox"
              type="checkbox"
              name="kythuat"
            />
            <span className="ml-2 text-white">Kỹ thuật</span>
          </label>
          <label className="flex items-center sm:w-1/4">
            <input
              className="bg-gray-900 form-checkbox"
              type="checkbox"
              name="ngoaingu"
            />
            <span className="ml-2 text-white">Sách học ngoại ngữ</span>
          </label>
          <label className="flex items-center sm:w-1/4 sm:items-start">
            <input
              className="bg-gray-900 form-checkbox"
              type="checkbox"
              name="tamly-kinang"
            />
            <span className="ml-2 text-white">Tâm lý - Kĩ năng sống</span>
          </label>
        </div>
      </div>
      <div className="w-full px-4 py-3 bg-gray-900">
        <button
          className="block w-full px-4 py-2 font-semibold text-white bg-indigo-500 rounded-lg"
          type="button"
        >
          Update results
        </button>
      </div>
    </form>
  );

  return (
    <section className="bg-gray-800 ">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-6 h-6 text-gray-500 fill-current"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              width="64px"
              height="64px"
            >
              <path d="M79.2 25.5L79.2 25.5c-14.8-14.8-38.9-14.8-53.7 0-14.8 14.8-14.8 38.9 0 53.7 7.4 7.4 17.1 11.1 26.9 11.1s19.5-3.7 26.9-11.1C94 64.4 94 40.3 79.2 25.5zM75 75c-12.5 12.5-32.8 12.5-45.3 0-12.5-12.5-12.5-32.8 0-45.3 6.2-6.2 14.4-9.4 22.6-9.4 8.2 0 16.4 3.1 22.6 9.4C87.4 42.2 87.4 62.5 75 75zM104.7 113.7c2.3 0 4.6-.9 6.4-2.6l0 0c3.5-3.5 3.5-9.2 0-12.7L98.3 85.6c-1.7-1.7-4-2.6-6.4-2.6-1.4 0-2.7.3-3.9.9l-2.5-2.5c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l2.5 2.5c-.6 1.2-.9 2.5-.9 3.9 0 2.4.9 4.7 2.6 6.4L98.3 111C100.1 112.8 102.4 113.7 104.7 113.7zM88.9 91.9c0-.8.3-1.6.9-2.1.6-.6 1.3-.9 2.1-.9s1.6.3 2.1.9l12.7 12.7c1.2 1.2 1.2 3.1 0 4.2-1.2 1.2-3.1 1.2-4.2 0L89.8 94.1C89.2 93.5 88.9 92.7 88.9 91.9z" />
              <path d="M52.3 26.3C45.4 26.3 38.9 29 34 34c-4.7 4.7-7.3 10.8-7.6 17.4-.1 1.7 1.2 3 2.9 3.1 0 0 .1 0 .1 0 1.6 0 2.9-1.3 3-2.9.2-5.1 2.3-9.8 5.8-13.4 3.8-3.8 8.8-5.9 14.1-5.9 1.7 0 3-1.3 3-3S54 26.3 52.3 26.3zM35 64A3 3 0 1 0 35 70 3 3 0 1 0 35 64z" />
            </svg>
          </div>
          <input
            placeholder="Tìm kiếm"
            className="w-full py-2 pl-10 pr-4 m-2 ml-0 text-white bg-gray-900 rounded-lg focus:bg-white focus:outline-none focus:text-gray-900"
          />
        </div>
        <button
          onClick={onClickHandler}
          className="flex items-center py-1 pl-3 pr-4 ml-12 bg-gray-700 rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:outline-none focus:shadow-outline"
        >
          <svg
            className="w-8 h-8 text-gray-500 fill-current"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 36h8v-4h-8v4zm-14-24v4h36v-4h-36zm6 14h24v-4h-24v4z" />
            <path d="M0 0h48v48h-48z" fill="none" />
          </svg>
          <span className="ml-1 text-white font-large">Lọc</span>
        </button>
      </div>
      {isOpen === true ? filterForm : null}
    </section>
  );
};

export default SearchFilters;
