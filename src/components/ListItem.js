import React from "react";

const ListItem = props => {
  return (
    <div className="mycount">
      <h1 className="top-headlines">Top Headlines</h1>
      <div className="card-list">
        {props.currentPosts.map((item, key) => (
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
            <p className="card-author">Author : {item.author || "Unknown"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListItem;
