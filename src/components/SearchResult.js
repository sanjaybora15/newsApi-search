import React from "react";
import { withRouter } from "react-router";
import Spinner from "./Spinner";

class SearchResult extends React.Component {
  render() {
    const { searchList, loading, currentPageNo } = this.props.location.state;
    if (searchList.articles.length < 1) {
      return (
        <h1 className="top-headlines">
          {" "}
          No data found! Please search with another query.
        </h1>
      );
    }

    const prevNextBttn =
      currentPageNo === 1 ? (
        <button className="bottom-paginate next" onClick={() => this.props.location.handleLoadMore("next")}>
          Next
        </button>
      ) : (
        <React.Fragment>
          <button className="bottom-paginate prev" onClick={() => this.props.location.handleLoadMore("prev")}>
            Prev
          </button>
          <button className="bottom-paginate next" onClick={() => this.props.location.handleLoadMore("next")}>
            Next
          </button>
        </React.Fragment>
      );

    return (
      <React.Fragment>
        {loading ? (
          <Spinner />
        ) : (
          <div className="mycount">
            <p style={{ color: "gray", fontSize: 15, padding: "5px" }}>
              {" "}
              Total {searchList.totalResults} result found !{" "}
            </p>
            <div className="card-list">
              {searchList.articles.map((item, key) => (
                <div className="card" key={key}>
                  <div className="card-image">
                    <img
                      src={item.urlToImage || require("./place.jpg")}
                      alt="Image"
                    />
                  </div>
                  <a href={item.url} target="_blank" className="a_text">
                    <div className="card-title title-white">
                      <p>{item.title.substr(0, 91)}</p>
                    </div>{" "}
                  </a>
                  <p className="card-publish_time">
                    {new Date(item.publishedAt).toString().substr(0, 24)}
                  </p>
                  <p className="card-author">
                    Author : {item.author || "Unknown"}
                  </p>
                </div>
              ))}
            </div>
            <div className="bttn-prev-next">
              {prevNextBttn}
            </div>
            
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withRouter(SearchResult);
