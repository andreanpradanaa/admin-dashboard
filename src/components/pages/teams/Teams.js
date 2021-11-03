import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logoutAction } from "../../../container/actions";
import Footer from "../../imports/Footer";
import Navbar from "../../imports/Navbar";
import Sidebar from "../../imports/Sidebar";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AddTeam from "./AddTeam";

const Teams = ({ posts }) => {
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

  const [team, setTeam] = useState([]);
  // Delete by iD

  const deleteTeam = (id) => {
    axios
      .delete(`https://backend-intens.herokuapp.com/api/teams/${id}`)
      .then((res) => alert(res.data));
    setTeam(team.filter((elem) => elem._id !== id));
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
                <li className="breadcrumb-item active">Data Teams</li>
              </ol>
              <div className="card mb-4">
                <div className="card-header">
                  <Button variant="success" onClick={handleShow}>
                    Tambah Data
                  </Button>
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
                          <th>JABATAN</th>
                          <th colSpan="2">AKSI</th>
                        </tr>
                      </thead>
                      <tbody>
                        {posts.map((team, key) => (
                          <tr key={key} className="text-center">
                            <td>
                              <img
                                width="50"
                                height="50"
                                src={team.gambar}
                                alt="..."
                              />
                            </td>
                            <td>
                              <p>{team.nama}</p>
                            </td>
                            <td>
                              <p>{team.jabatan}</p>
                            </td>
                            <td width="50">
                              <Link
                                to={{
                                  pathname: `/update-team/${team._id}`,
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
                                onClick={() => deleteTeam(team._id)}
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
          {/* <!-- Modal Tambah Teams--> */}
          <Modal show={show} onHide={handleClose} animation={true}>
            <AddTeam />
          </Modal>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Teams;
