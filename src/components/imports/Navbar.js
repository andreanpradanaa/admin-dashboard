import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logoutAction } from "../../container/actions";
import { useDispatch } from "react-redux";
import Logout from "../imports/Logout";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

function Navbar() {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutAction());
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="/">
        Admin
      </a>

      {/* <button
        class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
      >
        <i class="fas fa-bars"></i>
      </button> */}

      <div className="d-none d-md-inline-block ml-auto mr-0 mr-md-3 my-2 my-md-0"></div>

      <ul className="navbar-nav ml-auto ml-md-0 ">
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
            <i class="fas fa-bars"></i>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="userDropdown"
          >
            <Link className="dropdown-item text-center" to={{ pathname: `/` }}>
              Dashboard
            </Link>
            <Link
              className="dropdown-item text-center"
              to={{ pathname: `/clients` }}
            >
              Clients
            </Link>
            <Link
              className="dropdown-item text-center"
              to={{ pathname: `/teams` }}
            >
              Teams
            </Link>
            <Link
              className="dropdown-item text-center"
              to={{ pathname: `/projects` }}
            >
              Projects
            </Link>
          </div>
        </li>
      </ul>

      <ul className="navbar-nav ">
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
