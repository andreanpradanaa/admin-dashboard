import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logoutAction } from "../../../container/actions";
import Footer from "../../imports/Footer";
import Navbar from "../../imports/Navbar";
import Sidebar from "../../imports/Sidebar";

const UpdateTeam = (props) => {
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
  const [jabatan, setJabatan] = useState("");
  const [filename, setFileName] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    const formData = new FormData();

    formData.append("nama", nama);
    formData.append("jabatan", jabatan);
    formData.append("gambar", filename);

    axios
      .put(
        `https://backend-intens.herokuapp.com/api/teams/update/${props.match.params.id}`,
        formData
      )
      .then((res) => alert(res.data), history.push("/teams"))
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(
        `https://backend-intens.herokuapp.com/api/teams/${props.match.params.id}`
      )
      .then((res) => [
        setNama(res.data.nama),
        setJabatan(res.data.jabatan),
        setFileName(res.data.gambar),
      ])
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content" className="mt-4">
          <main>
            <div className="container-fluid">
              <ol className="breadcrumb mb-4 mt-5">
                <li className="breadcrumb-item active">Update Data Team</li>
              </ol>
              <div className="card mb-4">
                <div className="container mt-3 mb-3">
                  <form onSubmit={changeOnClick} encType="multipart/form-data">
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
                      <label htmlFor="jabatan" className="form-label">
                        Jabatan
                      </label>
                      <input
                        required={true}
                        type="text"
                        value={jabatan}
                        onChange={(e) => setJabatan(e.target.value)}
                        className="form-control"
                        placeholder="jabatan"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="file">pilih gambar</label>
                      <div>
                        <input
                          required={true}
                          type="file"
                          filename="gambar"
                          onChange={onChangeFile}
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Submit
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

export default UpdateTeam;
