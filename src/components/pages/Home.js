import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logoutAction } from "../../container/actions";
import Footer from "../imports/Footer";
import Navbar from "../imports/Navbar";
import Sidebar from "../imports/Sidebar";

function Home() {
  // const user = useSelector((state) => state.isLoggedIn);
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

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar />
      <div>
        <div id="layoutSidenav">
          <Sidebar />
          <div id="layoutSidenav_content" className="mt-4">
            <main>
              <div className="container-fluid">
                <ol className="breadcrumb mb-4 mt-5">
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>

                <div className="col-xl-12 col-md-6">
                  <div className="card bg-primary text-white mb-4">
                    <div className="card-body">Data Clients </div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a
                        className="small text-white stretched-link"
                        href="/clients"
                      >
                        Lihat Deatil
                      </a>
                      <div className="small text-white">
                        <i className="fas fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-6">
                  <div className="card bg-warning text-white mb-4">
                    <div className="card-body">Data Teams</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a
                        className="small text-white stretched-link"
                        href="/teams"
                      >
                        Lihat Deatil
                      </a>
                      <div className="small text-white">
                        <i className="fas fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-6">
                  <div className="card bg-success text-white mb-4">
                    <div className="card-body">Data Projects</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <a
                        className="small text-white stretched-link"
                        href="projects"
                      >
                        Lihat Deatil
                      </a>
                      <div className="small text-white">
                        <i className="fas fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
