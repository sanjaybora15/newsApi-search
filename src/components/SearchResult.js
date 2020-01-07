import React from 'react';
import {withRouter} from "react-router";
import Spinner from './Spinner'

class SearchResult extends React.Component{
   
      render(){
          console.log(this.props)
        const {searchList,loading} = this.props.location.state
            if(searchList.length < 1){
                return(
                    <h1 className="top-headlines"> No data found! Please search with another query.</h1>
            )}
        return(
            <React.Fragment>
                {loading ? <Spinner /> : 
                <div className="mycount">
                <div className="card-list">
                {searchList.map((item,key) =>(
                        <div className="card" key={key}>
                            <div className="card-image">
                                <img src={item.urlToImage || require("./place.jpg")} alt="Image" />
                            </div>
                            <a href={item.url} target="_blank" className="a_text">
                            <div className="card-title title-white">
                            <p>{item.title.substr(0,91)}</p>
                            </div> </a>
                            <p className="card-publish_time">
                                    {new Date(item.publishedAt).toString().substr(0,24)}
                                </p>
                            <p className="card-author">Author : {item.author || 'Unknown'}</p>
                        </div>
                ))}
                </div>
                </div>
                }
            </React.Fragment>
        );
      }
}

export default withRouter(SearchResult)
