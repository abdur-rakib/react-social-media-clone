import React from "react";
import { Card } from "antd";
import Search from "antd/lib/input/Search";
import { connect } from "react-redux";
import { useState } from "react";
import { getPosts } from "../../redux/actions/dataActions";
import { useEffect } from "react";
import Post from "../Post/Post";

const Explore = (props) => {
  const [searchText, setSearchText] = useState("");
  const [resData, setResData] = useState(null);
  const handleSearch = (e) => {
    setSearchText(e.target.value);
    // eslint-disable-next-line
    const filterData = props.data.posts?.filter((data) => {
      if (
        data.body.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      )
        return data;
    });
    setResData(filterData);
  };
  useEffect(() => {
    props.getPosts();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Card className="mb-2 ml-4 mr-4 mr-md-0" style={{ minHeight: "100vh" }}>
        <Search
          className="mb-4"
          autoFocus={true}
          placeholder="Search posts..."
          enterButton="Search"
          size="large"
          onChange={handleSearch}
        />
        {searchText.length !== 0 ? (
          resData?.length !== 0 ? (
            resData?.map((post) => <Post key={post.postId} post={post} />)
          ) : (
            <>
              <h4 className="text-center text-danger mt-2">Not Found!!!!!</h4>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/react-mukh-boi-project.appspot.com/o/undraw_page_not_found_su7k.png?alt=media&token=4508d902-49a5-44d3-9c58-bbf79a583e6e"
                className="img-fluid "
                alt=""
              />
            </>
          )
        ) : (
          <>
            <h4 className="display-4 text-center mt-4 text-secondary">
              Explore posts
            </h4>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/react-mukh-boi-project.appspot.com/o/undraw_starry_window_ppm0.png?alt=media&token=b3c05fdc-b7e6-4535-8e88-2d318891f8c2"
              alt=""
              className="img-fluid"
            />
          </>
        )}
      </Card>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
const mapActionsToProps = { getPosts };
export default connect(mapStateToProps, mapActionsToProps)(Explore);
