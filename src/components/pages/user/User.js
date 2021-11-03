import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logoutAction } from "../../../container/actions";
import Logout from "../../imports/Logout";

const User = ({ posts }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const route = useCallback(() => {
    const token = localStorage.getItem("x-access-token");
    return token ? true : false;
  });
  useEffect(() => {
    if (!route()) {
      history.push("/login");
    }
  }, [route, history]);

  const logout = () => {
    dispatch(logoutAction());
  };

  const [user, setUser] = useState([]);
  // Delete by iD
  const UserData = (id) => {
    axios
      .get(`https://backend-intens.herokuapp.com/api/user/${id}`)
      .then((res) => alert(res.data));
    setUser(user.filter((elem) => elem._id !== id));
  };

  return (
    <div>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark ">
        <a className="navbar-brand" href="/#">
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
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark sticky-top"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Core</div>
                <Link className="nav-link" to={{ pathname: "/" }}>
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  Dashboard
                </Link>
                <div className="sb-sidenav-menu-heading">Interface</div>
              </div>

              <Link className="nav-link" to={{ pathname: `/clients` }}>
                <i className="fas fa-fw fa-table"></i>
                <span> Clients</span>
              </Link>

              <Link className="nav-link" to={{ pathname: `/teams` }}>
                <i className="fas fa-fw fa-table"></i>
                <span> Teams</span>
              </Link>

              <Link className="nav-link" to={{ pathname: `/projects` }}>
                <i className="fas fa-fw fa-table"></i>
                <span> Projects</span>
              </Link>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Logged in as:</div>
              Admin
            </div>
          </nav>
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid">
              <ol className="breadcrumb mb-4 mt-3">
                <li className="breadcrumb-item active">Data User</li>
              </ol>
              <div className="card mb-4">
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellSpacing="0"
                    >
                      <thead>
                        <tr className="text-center">
                          <th>USERNAME</th>
                          <th>PASSWORD</th>
                          <th>AKSI</th>
                        </tr>
                      </thead>
                      <tbody>
                        {posts.map((user, key) => (
                          <tr key={key} className="text-center">
                            <td>
                              <p>{user.username}</p>
                            </td>
                            <td>
                              <p>{user.password}</p>
                            </td>
                            <td>
                              <Link
                                to={{
                                  pathname: `/update-user/${user._id}`,
                                }}
                              >
                                <button
                                  className="btn btn-primary btn-circle"
                                  type="submit"
                                >
                                  <i className="fas fa-edit"></i>
                                </button>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">
                  Copyright &copy; Your Website 2020
                </div>
                <div>
                  <a href="/#">Privacy Policy</a>
                  &middot;
                  <a href="/#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default User;
