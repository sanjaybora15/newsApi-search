import React from 'react';
import AllList from './components/AllList';
import SearchResult from './components/SearchResult';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'
import { createBrowserHistory } from 'history';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Search from './components/Search'
import Spinner from './components/Spinner'

const browserHistory = createBrowserHistory();

class App extends React.Component{
  constructor( props ) {
    super( props );
    this.state={
     
    }
  }


  render(){
    
    return(
      <Router  history={browserHistory}>
        
        <Navbar />
        <div className="container">
          <h1 className="head-title" >Latest News Search</h1>
          <div className="sub-container">
          <p className="auto-refresh-text">Auto refresh in {this.state.count} seconds</p>
          <Search {...this.props} />
          <Route exact path="/" component={AllList} />
          <Route exact path="/search?q=:value"  render={(props) => <SearchResult {...props} />} />
        </div>
        </div>
        
        <Footer />
        
      </Router>
    )
  }
}

export default App
