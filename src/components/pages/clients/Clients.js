import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logoutAction } from "../../../container/actions";
import Footer from "../../imports/Footer";
import Navbar from "../../imports/Navbar";
import Sidebar from "../../imports/Sidebar";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddClient from "./AddClient";

const Clients = ({ posts, props }) => {
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

  const [client, setClient] = useState([]);
  // Delete by iD
  const deleteClient = (id) => {
    axios
      .delete(`https://backend-intens.herokuapp.com/api/clients/${id}`)
      .then((res) => alert(res.data));
    setClient(client.filter((elem) => elem._id !== id));
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
                <li className="breadcrumb-item active">Data Clients</li>
              </ol>
              <div className="card mb-4">
                <div className="card-header">
                  <Link
                    className="btn btn-success"
                    to={{
                      pathname: `/add-client`,
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
                      <thead>
                        <tr className="text-center">
                          <th width="100">GAMBAR</th>
                          <th>NAMA</th>
                          <th colSpan="2">AKSI</th>
                        </tr>
                      </thead>
                      <tbody>
                        {posts.map((client, key) => (
                          <tr key={key} className="text-center">
                            <td>
                              <img
                                width="50"
                                height="50"
                                src={client.gambar}
                                alt="..."
                              />
                            </td>
                            <td>
                              <p>{client.nama}</p>
                            </td>

                            <td width="50">
                              <Link
                                to={{
                                  pathname: `/update-client/${client._id}`,
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
                                onClick={() => deleteClient(client._id)}
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

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Clients;
