import React from "react";
import { Avatar, Button } from "antd";
const Users = () => {
  return (
    <div className="users">
      <h6 className="mt-2 mb-3 font-weight-light text-center mt-3">
        People you may know
      </h6>
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
  );
};

export default Users;
