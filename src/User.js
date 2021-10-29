import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

// clients
import User from "./components/pages/user/User";
import UpdateUser from "./components/pages/user/UpdateUser";

function UserData() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(" http://localhost:4000/api/user")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <div className="UserData">
      {/* Get Data */}
      <Route exact path="/user" render={() => <User posts={posts} />} />

      {/* Update Data */}
      <Route
        path="/update-user/:id"
        render={(props) => <UpdateUser {...props} posts={posts} />}
      />
    </div>
  );
}

export default UserData;
