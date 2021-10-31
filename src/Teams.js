import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

// teams
import Teams from "./components/pages/teams/Teams";
import UpdateTeam from "./components/pages/teams/UpdateTeam";
import AddTeam from "./components/pages/teams/AddTeam";

function Team() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(" https://backend-intens.herokuapp.com/api/teams")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <div className="Team">
      {/* Get Data */}
      <Route exact path="/teams" render={() => <Teams posts={posts} />} />

      {/* Add Data */}

      <Route path="/add-team" component={AddTeam} />

      {/* Update Data */}
      <Route
        path="/update-team/:id"
        render={(props) => <UpdateTeam {...props} posts={posts} />}
      />
    </div>
  );
}

export default Team;
