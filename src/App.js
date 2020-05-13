import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import RegisterForm from "./components/forms/RegisterForm";
import LoginForm from "./components/forms/LoginForm";
import UserForm from "./components/forms/UserForm";
import Alert from "./components/layout/Alert";
import ProfileForm from "./components/forms/ProfileForm";
import EducationPopup from "./components/forms/EducationPopup";
import ExperiencePopup from "./components/forms/ExperiencePopup";
import Posts from "./components/posts/Posts";

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <Alert /> */}
      <Switch>
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/setting" component={UserForm} />
        <Route exact path="/create-profile" component={ProfileForm} />
        <Route exact path="/create-education" component={EducationPopup} />
        <Route exact path="/create-experience" component={ExperiencePopup} />
        <Route exact path="/" component={Posts} />
      </Switch>
    </Router>
  );
};

export default App;
