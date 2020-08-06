import React from "react";
import { Layout, Card, Popover, Divider, Button } from "antd";
import LeftSider from "../LeftSider/LeftSider";
import RightSider from "../RightSider/RightSider";
import Meta from "antd/lib/card/Meta";
import {
  HeartOutlined,
  MessageOutlined,
  ShareAltOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";

const Home = () => {
  const content = (
    <div className="d-flex flex-column">
      <Button size="small" type="text">
        Edit
      </Button>
      <Button size="small" type="text">
        Delete
      </Button>
      <Button size="small" type="text">
        Save
      </Button>
    </div>
  );
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <LeftSider />
        <Layout>
          <div className="row">
            <div className="col-md-7 p-0">
              <h1>Home</h1>
              <Card bordered={false} className="mb-2 ml-4 mr-4 mr-md-0">
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="John Doe"
                  description="This is the description This is the description This is the description This is the description This is the description"
                />
                <small className="ml-5 mt-4 font-italic">
                  Posted
                  <span className="ml-1">25 minutes ago</span>
                </small>
                <Divider />
                <div className="actions">
                  <HeartOutlined style={{ fontSize: "20px" }} />
                  <MessageOutlined style={{ fontSize: "20px" }} />
                  <ShareAltOutlined style={{ fontSize: "20px" }} />

                  <Popover content={content} trigger="click">
                    <MoreOutlined style={{ fontSize: "20px" }} />
                  </Popover>
                </div>
              </Card>
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
