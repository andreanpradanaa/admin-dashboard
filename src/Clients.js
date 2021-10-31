import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

// clients
import Clients from "./components/pages/clients/Clients";
import UpdateClient from "./components/pages/clients/UpdateClient";
import AddClient from "./components/pages/clients/AddClient";

function Client() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(" https://backend-intens.herokuapp.com/api/clients")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <div className="Client">
      {/* Get Data */}
      <Route exact path="/clients" render={() => <Clients posts={posts} />} />

      {/* Add Data */}

      <Route path="/add-client" component={AddClient} />

      {/* Update Data */}
      <Route
        path="/update-client/:id"
        render={(props) => <UpdateClient {...props} posts={posts} />}
      />
    </div>
  );
}

export default Client;
