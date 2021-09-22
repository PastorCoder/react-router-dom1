import React, { useState } from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { ContactUs } from "./Components/ContactUs";
import { NotFound } from "./Components/NotFound";
import "./App.css";

export default function App() {
  const [login, setLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <h1>React Router Demo</h1>

        <div className="navbar">
          <Link to="/">Home</Link>
          <br />
          <Link
            to="/contact"
            
          >
            Contact Us
          </Link>
          <br />
          <Link to="/about">About</Link>
          <br />
          <br />
          <button onClick={() => setLogin(!login)}>
            {login ? "Click Here To Logout" : "Click Here To Login"}
          </button>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/contact"><ContactUs login={login} /></Route> */}
          <Route path="/contact">
            {login ? <ContactUs /> : <Redirect to="/" />}
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

// export default App;
