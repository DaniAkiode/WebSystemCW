import {BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
//Import Components 
import Navbar from "./components/navbar";
import ProfileList from "./components/profilelist";
import EditProfile from "./components/editprofile";
import CreateProfile from "./components/createprofile";
import Dashboard from "./components/DashboardComponent";
import SignUpPage from "./components/SignUpComponent";
//Start the application 
function App() {
  return (
    //Router used to navigar between components 
    <Router>
      <div className="container">
        <Navbar/>
        <br/>
        <Route path="/" exact component={ProfileList} />
        <Route path="/create" exact component={CreateProfile} />
        <Route path="/signup" exact component={SignUpPage} />



      </div>
      <Route path="/edit/:id" exact component={EditProfile} />
      <Route path ="https://murmuring-sands-45502.herokuapp.com/dashboard" exact component={Dashboard} />
    </Router>
  );
}

export default App;
