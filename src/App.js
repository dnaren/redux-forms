import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FormContainer from "./FormContainer";

let App = (props) => {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Forms</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={Forms} />
      </main>
    </Router>
  );
};

const Home = () => (
  <Fragment>
    <h1>Welcome Home</h1>
    <h3>Nothing to see here</h3>
  </Fragment>
);

const Forms = () => (
  <Fragment>
    <h1>Field-Level Validation</h1>
    <FormContainer />
  </Fragment>
);

export default App;
