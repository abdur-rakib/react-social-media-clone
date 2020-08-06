import React from "react";
import { Card, Button, Tabs } from "antd";
import { EnvironmentOutlined, MonitorOutlined } from "@ant-design/icons";
import Posts from "../Posts/Posts";
const { TabPane } = Tabs;

const Profile = () => {
  return (
    <div>
      <Card className="ml-4 tab__card">
        <div className="row justify-content-center text-center">
          <div className="col-lg-3">
            <img
              src="https://instagram.fdac18-1.fna.fbcdn.net/v/t51.2885-19/s150x150/75487940_662821564251206_3433074471882194944_n.jpg?_nc_ht=instagram.fdac18-1.fna.fbcdn.net&_nc_ohc=d1nptx6aiwoAX9RknSG&oh=541de13db1a9bbc360949ff02f0cbfc2&oe=5F5797A5"
              alt=""
              className=" rounded-circle"
            />
          </div>
          <div className="col-lg-7 ml-3">
            <div className="user__info">
              <div className="user__name d-flex justify-content-center">
                <h4 className="mr-2">Abdur Rakib</h4>
                <Button size="small">Edit</Button>
              </div>
              <div className="others__info d-flex justify-content-between mx-5 mx-md-4">
                <p>
                  <span className="font-weight-bold">40</span> posts
                </p>
                <p>
                  <span className="font-weight-bold">154</span> followers
                </p>
                <p>
                  <span className="font-weight-bold">256</span> following
                </p>
              </div>
              <div className="user__bio " style={{ marginTop: "-15px" }}>
                I am Rakib.I am from Rajshahi,Bangladeah.Currently i am studying
              </div>
              <div className="user__website d-flex align-items-center justify-content-center">
                <MonitorOutlined />
                <a className="ml-1" href="abdur-rakib.github.io/portfolio">
                  abdur-rakib.github.io/portfolio
                </a>
              </div>
              <div className="user__location d-flex align-items-center justify-content-center">
                <EnvironmentOutlined />
                <span className="ml-1">Rajshahi, Dhaka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Your Posts" key="1">
              <Posts />
            </TabPane>
            <TabPane tab="Liked Posts" key="2">
              <h5 className="text-center mt-5">You have no liked post</h5>
            </TabPane>
            <TabPane tab="Saved Posts" key="3">
              <Posts />
            </TabPane>
          </Tabs>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
