import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logoutAction } from "../../../container/actions";
import Footer from "../../imports/Footer";
import Navbar from "../../imports/Navbar";
import Sidebar from "../../imports/Sidebar";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddProject from "./AddProject";

const Projects = ({ posts }) => {
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

  const [project, setProject] = useState([]);
  // Delete by iD
  const deleteProject = (id) => {
    axios
      .delete(`https://backend-intens.herokuapp.com/api/projects/${id}`)
      .then((res) => alert(res.data));
    setProject(project.filter((elem) => elem._id !== id));
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content" className="mt-4">
          <main>
            <div className="container-fluid">
              <ol className="breadcrumb mb-4 mt-5">
                <li className="breadcrumb-item active">Data Projects</li>
              </ol>
              <div className="card mb-4">
                <div className="card-header">
                  <Link
                    className="btn btn-success"
                    to={{
                      pathname: `/add-project`,
                    }}
                    onClick={handleShow}
                  >
                    Tambah Data
                  </Link>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellSpacing="0"
                    >
                      <thead className="center">
                        <tr className="text-center">
                          <th width="100">GAMBAR</th>
                          <th>JUDUL</th>
                          <th>DESKRIPSI</th>
                          <th colSpan="2">AKSI</th>
                        </tr>
                      </thead>
                      <tbody>
                        {posts.map((project, key) => (
                          <tr key={key} className="text-center">
                            <td>
                              <img
                                width="50"
                                height="50"
                                src={project.gambar}
                                alt="..."
                              />
                            </td>
                            <td>
                              <p className="">{project.judul}</p>
                            </td>
                            <td>
                              <p className="">{project.deskripsi}</p>
                            </td>
                            <td width="50">
                              <Link
                                to={{
                                  pathname: `/update-project/${project._id}`,
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
                            <td width="50">
                              <button
                                className="btn btn-danger btn-circle"
                                onClick={() => deleteProject(project._id)}
                                type="submit"
                              >
                                <i className="fas fa-trash"></i>
                              </button>
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
