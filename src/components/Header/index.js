import React, { useState } from "react";
import logo2 from "../../assets/logo2.png";
import Navigation from "../Navigation/index";
import SearchFilters from "../SearchFilters";
import { AuthUserContext } from "../Session";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    const value = !isOpen;
    setIsOpen(value);
  };

  const openIcon = (
    <svg
      className="w-6 h-6 text-gray-500 fill-current"
      viewBox="0 -53 384 384"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
      <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
      <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
    </svg>
  );
  const closeIcon = (
    <svg
      className="w-6 h-6 text-gray-600 fill-current"
      viewBox="0 0 329.26933 329"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
    </svg>
  );

  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div>
          <header className="bg-gray-900">
            <div className="flex flex-row justify-between px-2 py-3 text-white">
              <div className="flex flex-row w-auto h-auto">
                <img src={logo2} alt="Logo of website" className="w-12 h12" />
                <h1 className="w-auto h-12 py-1 font-serif text-2xl font-bold text-white">
                  BookStore
                </h1>
              </div>
              <div className="flex">
                <button className="pr-4" onClick={onClickHandler}>
                  {isOpen === true ? closeIcon : openIcon}
                </button>
              </div>
            </div>
            {isOpen === true ? <Navigation onClose={onClickHandler} /> : null}
          </header>
          {authUser.authUser ? <SearchFilters /> : null}
        </div>
      )}
    </AuthUserContext.Consumer>
  );
};

export default Header;
