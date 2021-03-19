import {BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar";
import ProfileList from "./components/profilelist";
import EditProfile from "./components/editprofile";
import CreateProfile from "./components/createprofile";
import LoginPage from "./components/LogInComponent";
import SignUpPage from "./components/SignUpComponent";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path="/" exact component={ProfileList} />
        <Route path="/edit/:id" exact component={EditProfile} />
        <Route path="/create" exact component={CreateProfile} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/login" exact component={LoginPage} />

      </div>
    </Router>
  );
}

export default App;
