import React from "react";
import AllList from "./components/AllList";
import SearchResult from "./components/SearchResult";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/Search";
const browserHistory = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 30 };
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Navbar />
        <div className="container">
          <h1 className="head-title">Latest News Search</h1>
          <div className="sub-container">
            <p className="auto-refresh-text">
              Auto refresh in {this.state.count} seconds
            </p>
            <Search />
            <Route exact path="/" component={AllList} />
            <Route exact path="/search?q=:value" component={SearchResult} />
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
