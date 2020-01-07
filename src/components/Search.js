import React from 'react';
import Searchbar from './Searchbar';
import newsApi from '../api/newsApi';
import {Redirect} from 'react-router-dom'
// import Spinner from './Spinner'

class App extends React.Component{
  constructor( props ) {
    super( props );
    this.state={
      searchList:[],
      searchClicked:false,
      value:'',
      currentPageNo:1,
      loading:true
    }
  }
  componentDidMount() {
    let searchValue = window.location.search.substr(3)
    if(searchValue){
      this.onSearchSubmit(searchValue,1)
    }
    
  }

  onSearchSubmit = async (value,pageNo) => {
      this.setState({loading:true})
        const response = await newsApi.get(`everything?q=${value}&apiKey=363d26dd3d664d199ca63adc371e22aa&pageSize=10&page=${pageNo}`,{
        params:{query:value}
    })
    if(response.data.status === 'ok'){
      this.setState({
        searchList:response.data.articles,
        value:value,
        searchClicked:true,
        loading:false
      })
  }}

  handlePageClick = (e) => {

  }
      

  render(){
    const {value,searchClicked,searchList,loading} = this.state

    let rediret = (
        searchClicked ?<Redirect to={{pathname:`/search?q=${value}`,
        state:{searchList:searchList,loading:loading}}} /> : "")

    return(
      <React.Fragment>
          <Searchbar onSubmit={this.onSearchSubmit} />
          {rediret}
      </React.Fragment>
    )
  }
}

export default App
