import React from "react";
import newsApi from "../api/newsApi";
import Pagination from "./Pagination";
import ListItem from "./ListItem";
import Spinner from "./Spinner";

class AllList extends React.Component {
  state = {
    users: [],
    loading: false,
    currentPage: 1,
    postPerPage: 20,
    loading: true
  };

  componentDidMount() {
    this.getData();
    // setInterval(this.getData,3000)
  }

  getData = async () => {
    const res = await newsApi.get(
      "top-headlines?country=in&apiKey=a6a67ebf52c14835825f8d9b2a8ee209"
    );
    this.setState({
      users: res.data.articles,
      loading: false
    });
  };

  paginate = number => {
    this.setState({
      currentPage: number
    });
  };
  render() {
    const { loading } = this.state;
    //get current post
    const indexOfLastPost = this.state.currentPage * this.state.postPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postPerPage;
    const currentPosts = this.state.users.slice(
      indexOfFirstPost,
      indexOfLastPost
    );

    return (
      <div>
        {loading ? <Spinner /> : <ListItem currentPosts={currentPosts} />}

        <Pagination
          postsPerPage={this.state.postPerPage}
          totalPosts={this.state.users.length}
          paginate={this.paginate}
        />
      </div>
    );
  }
}

export default AllList;
