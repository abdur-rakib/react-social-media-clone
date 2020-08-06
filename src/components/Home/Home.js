import React from "react";
import { Layout } from "antd";
import LeftSider from "../LeftSider/LeftSider";
import RightSider from "../RightSider/RightSider";
import Posts from "../Posts/Posts";
import CreatePost from "../CreatePost/CreatePost";

const Home = () => {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <LeftSider />
        <Layout>
          <div className="row">
            <div className="col-md-7 p-0">
              <CreatePost />
              <Posts />
            </div>
            <div className="col-md-5 pl-0">
              <RightSider />
            </div>
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;
