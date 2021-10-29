import React from "react";
import { Link } from "react-router-dom";

function Logout(props) {
  return (
    <Link to="/" onClick={props.onLogout} className="dropdown-item">
      <div className="text-center "> Logout</div>
    </Link>
  );
}

export default Logout;
