import React from "react";
// import { AuthConsumer } from "../providers/AuthContext";
import * as ROUTER from "../constants/routes";
import * as ROLES from "../constants/roles";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut";
import AuthUserContext from "../Session/context";

const NavigationAuth = (props) => (
  <div>
    <div className="px-5 py-3 border-t border-b border-gray-800">
      <ul>
        <li onClick={props.onClose} className="block mt-2 text-gray-200">
          <Link to={ROUTER.HOME}>Trang chủ</Link>
        </li>
        <li onClick={props.onClose} className="block mt-2 text-gray-200">
          <Link to={ROUTER.HOME}>Sách đã mượn</Link>
        </li>
        <li onClick={props.onClose} className="block mt-2 text-gray-200">
          <Link to={ROUTER.HOME}>Sách đã lưu</Link>
        </li>
        <li onClick={props.onClose} className="block mt-2 text-gray-200">
          <Link to={ROUTER.HOME}>Sách đã thích</Link>
        </li>
        <li onClick={props.onClose} className="block mt-2 text-gray-200">
          <Link to={ROUTER.LANDING}>Giới thiệu</Link>
        </li>
      </ul>
    </div>
    <div className="px-5 py-3">
      <div className="flex items-center mt-2">
        <img
          className="object-cover w-10 h-10 border-2 border-gray-600 rounded-full"
          src={props.authUser.authUser.defaultAvatar}
          alt=""
        />
        <span className="ml-4 font-medium text-gray-200">
          {props.authUser.authUser.username}
        </span>
      </div>
      <div className="mt-5">
        <ul>
          <li onClick={props.onClose} className="block text-gray-200">
            <Link to={ROUTER.ACCOUNT}>Quản lý tài khoản</Link>
          </li>
          {!!props.authUser.authUser.roles[ROLES.ADMIN] && (
            <li onClick={props.onClose} className="block mt-3 text-gray-200">
              <Link to={ROUTER.ADMIN}>Quản lý hệ thống</Link>
            </li>
          )}

          <button onClick={props.onClose} className="block mt-3 text-gray-200">
            Hỗ trợ
          </button>
        </ul>
        <SignOutButton onClose={props.onClose} />
      </div>
    </div>
  </div>
);

const NavigationNonAuth = (props) => (
  <div>
    <div className="px-5 py-3 border-t border-b border-gray-800">
      <ul>
        <li onClick={props.onClose} className="block text-gray-200">
          <Link to={ROUTER.SIGN_UP}>Đăng ký</Link>
        </li>
        <li onClick={props.onClose} className="block mt-3 text-gray-200">
          <Link to={ROUTER.SIGN_IN}>Đăng nhập</Link>
        </li>
        <li onClick={props.onClose} className="block mt-3 text-gray-200">
          <Link to={ROUTER.LANDING}>Giới thiệu</Link>
        </li>
      </ul>
    </div>
  </div>
);

const Navigation = (props) => {
  return (
    <nav>
      <AuthUserContext.Consumer>
        {(authUser) =>
          authUser.authUser ? (
            <NavigationAuth onClose={props.onClose} authUser={authUser} />
          ) : (
            <NavigationNonAuth onClose={props.onClose} />
          )
        }
      </AuthUserContext.Consumer>
    </nav>
  );
};

export default Navigation;
