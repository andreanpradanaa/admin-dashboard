import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutAction } from "../../../container/actions";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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
  const [filename, setFileName] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    const formData = new FormData();

    formData.append("judul", judul);
    formData.append("deskripsi", deskripsi);
    formData.append("gambar", filename);

    axios
      .post("http://localhost:4000/api/projects/add", formData)
      .then((res) => alert(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Tambah Data Project</Modal.Title>
      </Modal.Header>
      <form onSubmit={changeOnClick} encType="multipart/form-data">
        <Modal.Body>
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
  );
};

export default AddProject;
