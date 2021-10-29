import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logoutAction } from "../../../container/actions";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AddClient = () => {
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
      .post("http://localhost:4000/api/teams/add", formData)
      .then((res) => alert(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Data Team</Modal.Title>
        </Modal.Header>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
          <Modal.Body>
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Tambah
            </Button>
          </Modal.Footer>
        </form>
      </>
    </div>
  );
};

export default AddClient;
