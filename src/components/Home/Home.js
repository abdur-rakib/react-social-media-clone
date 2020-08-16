import React from "react";
import { Layout } from "antd";
import LeftSider from "../LeftSider/LeftSider";
import RightSider from "../RightSider/RightSider";
import Posts from "../Posts/Posts";
import CreatePost from "../CreatePost/CreatePost";
import Title from "../Title";
import { BrowserRouter, Route } from "react-router-dom";
import Explore from "../Explore/Eplore";
import Message from "../Message/Message";
import Notifications from "../Notifications/Notifications";
import Profile from "../Profile/Profile";
import Bookmarks from "../Bookmarks/Bookmarks";

const Home = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <BrowserRouter>
        <LeftSider />
        <Layout>
          <div className="row">
            <div className="col-md-7 p-0" style={{ minHeight: "100vh" }}>
              <Route exact path="/">
                <Title title="Home" />
                <>
                  <CreatePost />
                  <Posts />
                </>
              </Route>
              <Route eaxct path="/explore">
                <Title title="Explore" />
                <Explore />
              </Route>
              <Route eaxct path="/notifications">
                <Title title="Notifications" />
                <Notifications />
              </Route>
              <Route eaxct path="/message">
                <Title title="Message" />
                <Message />
              </Route>
              <Route eaxct path="/profile">
                <Title title="Profile" />
                <Profile />
              </Route>
              <Route eaxct path="/bookmarks">
                <Title title="Bookmarks" />
                <Bookmarks />
              </Route>
            </div>
            <div className="col-md-5 pl-0">
              <RightSider />
            </div>
          </div>
        </Layout>
      </BrowserRouter>
    </Layout>
  );
};

export default Home;
