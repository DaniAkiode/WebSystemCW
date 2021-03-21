import {BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar";
import ProfileList from "./components/profilelist";
import EditProfile from "./components/editprofile";
import CreateProfile from "./components/createprofile";
import LoginPage from "./components/LogInComponent";
import Dashboard from "./components/DashboardComponent";
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
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignUpPage} />



      </div>
      <Route path = "/dashboard" exact component={Dashboard}/>
    </Router>
  );
}

export default App;
