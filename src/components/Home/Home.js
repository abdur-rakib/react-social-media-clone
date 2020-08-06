import React from "react";
import { Layout } from "antd";
import LeftSider from "../LeftSider/LeftSider";
import RightSider from "../RightSider/RightSider";
import Posts from "../Posts/Posts";
import CreatePost from "../CreatePost/CreatePost";
import Title from "../Title";
import { BrowserRouter, Route } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <BrowserRouter>
          <LeftSider />
          <Layout>
            <div className="row">
              <div className="col-md-7 p-0">
                <Title />
                <Route exact path="/">
                  <>
                    <CreatePost />
                    <Posts />
                  </>
                </Route>
                <Route eaxct path="/explore">
                  <h1>Explore</h1>
                </Route>
              </div>
              <div className="col-md-5 pl-0">
                <RightSider />
              </div>
            </div>
          </Layout>
        </BrowserRouter>
      </Layout>
    </div>
  );
};

export default Home;
