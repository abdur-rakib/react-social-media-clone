import React from "react";
import { Card } from "antd";
import Users from "../Users/Users";
import Search from "../Search/Search";
const RightSider = () => {
  return (
    <div className="ml-4 ml-md-2">
      <Card bordered={false} className="py-3 ">
        <div className="text-center mb-4">
          <Search />
        </div>
        <div className="myProfile d-flex align-items-center justify-content-center">
          <img
            src="https://instagram.fdac18-1.fna.fbcdn.net/v/t51.2885-19/s150x150/75487940_662821564251206_3433074471882194944_n.jpg?_nc_ht=instagram.fdac18-1.fna.fbcdn.net&_nc_ohc=d1nptx6aiwoAX9RknSG&oh=541de13db1a9bbc360949ff02f0cbfc2&oe=5F5797A5"
            alt=""
            className="img-fluid  rounded-circle"
            style={{ width: "60px" }}
          />
          <h5 className="ml-3">John Doe</h5>
        </div>

        <Users />
      </Card>
    </div>
  );
};

export default RightSider;
