import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};
const About = () => {
  return (
    <React.Fragment>
      <h1>This is my about component!</h1>
    </React.Fragment>
  );
};
const Login = () => {
  // <React.Fragment>
   return(<div>
    <form>
      <div>
        <input type="text" name="username" placeholder="Enter username" />
        <label htmlFor="username">Username</label>
      </div>
      <div>
        <input type="text" name="password" placeholder="Enter password"/>
        <label htmlFor="password">Password</label>
      </div>
      <input type="submit" value="Login"/>
    </form>
    <h1>This is my login</h1>
  </div>
  ) 
  {/* </React.Fragment>; */}
};

ReactDOM.render(
  <Router>
        <div>
    <Route exact path="/" component={Home} />
      
    <Route path="/about" component={About}/>
    <Route path="/login" component={Login}/>
    </div>
  </Router>,
  document.getElementById("root")
);
