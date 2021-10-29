import { useState, useEffect } from "react";
import { logoutAction } from "../../../container/actions";
import { useDispatch } from "react-redux";
import Logout from "../../imports/Logout";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";
import Sidebar from "../../imports/Sidebar";

function UpdateUser() {
  const history = useHistory();
  const dispatch = useDispatch();

  const route = () => {
    const token = localStorage.getItem("x-access-token");
    return token ? true : false;
  };

  useEffect(() => {
    if (!route()) {
      history.push("/login");
    }
  }, [route, history]);

  const logout = () => {
    dispatch(logoutAction());
  };

  //state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //get ID from parameter URL
  const { id } = useParams();

  //hook useEffect
  useEffect(() => {
    //panggil function "getPOstById"
    getPostById();
  }, []);

  //function "getPostById"
  const getPostById = async () => {
    //get data from server
    const response = await axios.get(`http://localhost:4000/api/user/${id}`);
    //get response data

    //assign data to state
    setUsername(response.username);
    setPassword(response.password);
  };

  //function "updatePost"
  const changeOnClick = async (e) => {
    e.preventDefault();

    //send data to server
    await axios
      .put(`http://localhost:4000/api/user/update/${id}`, {
        username: username,
        password: password,
      })
      .then(() => alert("User updated!"), history.push("/user"));
  };

  return (
    <div>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
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
        <Sidebar></Sidebar>
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid">
              <ol className="breadcrumb mb-4 mt-3">
                <li className="breadcrumb-item active">Update User</li>
              </ol>
              <div className="card mb-4">
                <div className="container mt-3 mb-3">
                  <form onSubmit={changeOnClick}>
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
                        <tr className="text-center">
                          <td>
                            <input
                              required={true}
                              type="text"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              className="form-control text-center"
                              placeholder="username"
                            />
                          </td>
                          <td>
                            <input
                              required={true}
                              type="text"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="form-control text-center"
                              placeholder="password"
                            />
                          </td>
                          <td>
                            <button type="submit" className="btn btn-primary">
                              Update
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
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
}

export default UpdateUser;
