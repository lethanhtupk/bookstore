import React from "react";

function Book(props) {
  return (
    <div className="mb-4 bg-white rounded-lg">
      <div className="flex flex-row">
        <img
          className="w-1/3 pt-0 rounded-lg shadow-md"
          alt="anh bia sach"
          src={props.url}
        />
        <div className="w-full mt-1 ml-2">
          <div className="flex items-center w-full">
            <span className="px-2 py-1 text-xs font-medium text-teal-800 uppercase bg-teal-200 rounded-full">
              available
            </span>
            <div className="ml-2 text-sm font-semibold tracking-wide text-gray-600 uppercase mr-7">
              &bull; 32 Cuốn
            </div>
          </div>
          <div className="flex flex-col">
            <h4 className="mt-1 text-lg font-semibold text-gray-900 text-start">
              The Hunger Games
            </h4>
            <span className="mt-1 font-light text-gray-800">
              Stephenie Meyer
            </span>
            <span className="mt-1 font-semibold text-gray-900">$14.9</span>
            <div className="text-sm text-gray-600">
              <div className="my-2">
                <span className="text-orange-600 fa fa-star"></span>
                <span className="ml-1 text-orange-600 fa fa-star"></span>
                <span className="ml-1 text-orange-600 fa fa-star"></span>
                <span className="ml-1 text-orange-600 fa fa-star"></span>
                <span className="ml-1 text-orange-600 fa fa-star-half-o"></span>
                <span className="ml-2">4.6</span>
              </div>
              34 Reviews
            </div>
          </div>
        </div>
      </div>
      <button className="w-full p-2 mt-3 text-xs font-semibold text-center text-white bg-pink-700 rounded-full focus:bg-pink-500">
        <span className="mr-3 text-white fa fa-shopping-cart"></span>ADD TO CART
      </button>
    </div>
  );
}

export default Book;
