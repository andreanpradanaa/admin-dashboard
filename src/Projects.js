import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Projects from "./components/pages/projects/Projects";
import UpdateProject from "./components/pages/projects/UpdateProject";
import AddProject from "./components/pages/projects/AddProject";

function Project() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(" https://backend-intens.herokuapp.com/api/projects")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <div className="Project">
      <Route path="/projects" render={() => <Projects posts={posts} />} />
      {/* Add Data */}

      <Route path="/add-project" component={AddProject} />
      {/* Update Data */}
      <Route
        path="/update-project/:id"
        render={(props) => <UpdateProject {...props} posts={posts} />}
      />
    </div>
  );
}

export default Project;
