import React from "react";
import { Card, Avatar, Button } from "antd";
const RightSider = () => {
  return (
    <div className="ml-4 ml-md-2">
      <Card bordered={false} className="py-3 text-center">
        <div className="myProfile d-flex align-items-center justify-content-center">
          <img
            src="https://instagram.fdac18-1.fna.fbcdn.net/v/t51.2885-19/s150x150/75487940_662821564251206_3433074471882194944_n.jpg?_nc_ht=instagram.fdac18-1.fna.fbcdn.net&_nc_ohc=d1nptx6aiwoAX9RknSG&oh=541de13db1a9bbc360949ff02f0cbfc2&oe=5F5797A5"
            alt=""
            className="img-fluid  rounded-circle"
            style={{ width: "60px" }}
          />
          <h5 className="ml-3">John Doe</h5>
        </div>
        <div className="people">
          <h6 className="mt-2 mb-3 font-weight-light">People you may know</h6>
        </div>
        <div className="users">
          <div className="user mb-2 d-flex align-items-center justify-content-around">
            <div className="d-flex align-items-center">
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <span className="user__name ml-1">John Doe</span>
            </div>
            <div className="user__follow">
              <Button size="small">Follow</Button>
            </div>
          </div>
          <div className="user mb-2 d-flex align-items-center justify-content-around">
            <div className="d-flex align-items-center">
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <span className="user__name ml-1">John Doe</span>
            </div>
            <div className="user__follow">
              <Button size="small">Follow</Button>
            </div>
          </div>
          <div className="user mb-2 d-flex align-items-center justify-content-around">
            <div className="d-flex align-items-center">
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <span className="user__name ml-1">John Doe</span>
            </div>
            <div className="user__follow">
              <Button size="small">Follow</Button>
            </div>
          </div>
          <div className="user mb-2 d-flex align-items-center justify-content-around">
            <div className="d-flex align-items-center">
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <span className="user__name ml-1">John Doe</span>
            </div>
            <div className="user__follow">
              <Button size="small">Follow</Button>
            </div>
          </div>
          <div className="user mb-2 d-flex align-items-center justify-content-around">
            <div className="d-flex align-items-center">
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <span className="user__name ml-1">John Doe</span>
            </div>
            <div className="user__follow">
              <Button size="small">Follow</Button>
            </div>
          </div>
          <div className="user mb-2 d-flex align-items-center justify-content-around">
            <div className="d-flex align-items-center">
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <span className="user__name ml-1">John Doe</span>
            </div>
            <div className="user__follow">
              <Button size="small">Follow</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RightSider;
