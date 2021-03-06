import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Blog from "./screens/blog";
import CV from "./screens/cv";
import Home from "./screens/home";
import Project from "./screens/project";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/projects/:projectId">
          <Project />
        </Route>
        <Route path="/blogs/:blogId">
          <Blog />
        </Route>
        <Route path="/cv">
          <CV />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
