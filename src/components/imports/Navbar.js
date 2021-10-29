import React from "react";
import { Link } from "react-router-dom";
import { logoutAction } from "../../container/actions";
import { useDispatch } from "react-redux";
import Logout from "../imports/Logout";

function Navbar() {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutAction());
  };
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="/">
        Admin
      </a>

      <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Search for..."
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>

      <ul className="navbar-nav ml-auto ml-md-0">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            id="userDropdown"
            href="/#"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-user fa-fw"></i>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="userDropdown"
          >
            <Link className="dropdown-item text-center" to="/user">
              User
            </Link>
            <Logout className="dropdown-item" onLogout={logout}></Logout>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
