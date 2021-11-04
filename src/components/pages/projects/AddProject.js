import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutAction } from "../../../container/actions";
import Footer from "../../imports/Footer";
import Navbar from "../../imports/Navbar";
import Sidebar from "../../imports/Sidebar";

const AddProject = () => {
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
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [gambar, setFileName] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    const formData = new FormData();

    formData.append("judul", judul);
    formData.append("deskripsi", deskripsi);
    formData.append("gambar", gambar);

    axios
      .post("https://backend-intens.herokuapp.com/api/projects/add", formData)
      .then((res) => alert(res.data), history.push("/projects"))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content" className="mt-4">
          <main>
            <div className="container-fluid">
              <ol className="breadcrumb mb-4 mt-5">
                <li className="breadcrumb-item active">Tambah Data Project</li>
              </ol>
              <div className="card mb-4">
                <div className="container mb-3 mt-3">
                  <form onSubmit={changeOnClick} encType="multipart/form-data">
                    <div className="form-group">
                      <label htmlFor="judul" className="form-label">
                        Judul
                      </label>
                      <input
                        required={true}
                        type="text"
                        value={judul}
                        onChange={(e) => setJudul(e.target.value)}
                        className="form-control"
                        placeholder="judul"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="deskripsi" className="form-label">
                        Deskripsi
                      </label>
                      <input
                        required={true}
                        type="text"
                        value={deskripsi}
                        onChange={(e) => setDeskripsi(e.target.value)}
                        className="form-control"
                        placeholder="deskripsi"
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
  );
};

export default AddProject;
