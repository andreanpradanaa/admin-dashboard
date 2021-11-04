import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutAction } from "../../../container/actions";
import Footer from "../../imports/Footer";
import Navbar from "../../imports/Navbar";
import Sidebar from "../../imports/Sidebar";

const AddClient = ({ posts }) => {
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

  const [nama, setNama] = useState("");
  const [gambar, setFileName] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    const formData = new FormData();

    formData.append("nama", nama);
    formData.append("gambar", gambar);

    axios
      .post("https://backend-intens.herokuapp.com/api/clients/add", formData)
      .then((res) => alert(res.data), history.push("/clients"))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <Navbar />
        <div id="layoutSidenav">
          <Sidebar />
          <div id="layoutSidenav_content" className="mt-4">
            <main>
              <div className="container-fluid">
                <ol className="breadcrumb mb-4 mt-5">
                  <li className="breadcrumb-item active">Tambah Data Client</li>
                </ol>
                <div className="card mb-4">
                  <div className="container mb-3 mt-3">
                    <form
                      onSubmit={changeOnClick}
                      encType="multipart/form-data"
                    >
                      <div className="form-group">
                        <label htmlFor="nama" className="form-label">
                          Nama
                        </label>
                        <input
                          required={true}
                          type="text"
                          value={nama}
                          onChange={(e) => setNama(e.target.value)}
                          className="form-control"
                          placeholder="nama"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="file">Pilih Gambar</label>
                        <div>
                          <input
                            required={true}
                            type="file"
                            gambar="gambar"
                            onChange={onChangeFile}
                          />
                        </div>
                      </div>

                      <button className="btn btn-primary" type="submit">
                        Tambah
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClient;
