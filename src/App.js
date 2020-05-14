import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import RegisterForm from "./components/forms/RegisterForm";
import LoginForm from "./components/forms/LoginForm";
import UserForm from "./components/forms/UserForm";
import Alert from "./components/layout/Alert";
import EducationPopup from "./components/forms/EducationPopup";
import ExperiencePopup from "./components/forms/ExperiencePopup";
import Posts from "./components/posts/Posts";
import Profile from "./components/profile/Profile";
import About from "./components/profile/profileRight/About/About";
import UpdateInfo from "./components/profile/profileRight/UpdateInfo";

import Education from "./components/profile/profileRight/About/Education";
import Experrience from "./components/profile/profileRight/About/Experrience";
import Contact from "./components/profile/profileRight/About/Contact";
import Github from "./components/profile/profileRight/About/Github";

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <Alert /> */}
      <Switch>
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/setting" component={UserForm} />
        <Route exact path="/profile/create-profile" component={UpdateInfo} />
        <Route exact path="/create-education" component={EducationPopup} />
        <Route exact path="/create-experience" component={ExperiencePopup} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/about" component={About} />
        <Route exact path="/profile/about/education" component={Education} />
        <Route exact path="/profile/about/contact-basic" component={Contact} />
        <Route exact path="/profile/about/github" component={Github} />
        <Route
          exact
          path="/profile/about/experrience"
          component={Experrience}
        />
        <Route exact path="/profile/update-profile" component={UpdateInfo} />
        <Route exact path="/" component={Posts} />
      </Switch>
    </Router>
  );
};

export default App;
