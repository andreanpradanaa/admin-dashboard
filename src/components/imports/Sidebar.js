import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark sticky-top overflow-auto"
        id="sidenavAccordion"
        style={{ height: "100vh" }}
      >
        <div className="sb-sidenav-menu sticky-top">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <Link className="nav-link" to={{ pathname: "/" }}>
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              Dashboard
            </Link>
            <div className="sb-sidenav-menu-heading">Interface</div>
          </div>

          <Link className="nav-link" to={{ pathname: `/clients` }}>
            <i className="fas fa-fw fa-table"></i>
            <span> Clients</span>
          </Link>

          <Link className="nav-link" to={{ pathname: `/teams` }}>
            <i className="fas fa-fw fa-table"></i>
            <span> Teams</span>
          </Link>

          <Link className="nav-link" to={{ pathname: `/projects` }}>
            <i className="fas fa-fw fa-table"></i>
            <span> Projects</span>
          </Link>
        </div>
        <div className="sb-sidenav-footer ">
          <div className="small">Logged in as:</div>
          Admin
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
