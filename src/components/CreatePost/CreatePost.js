import React from "react";
import { Card, Button, Avatar } from "antd";

const CreatePost = () => {
  return (
    <Card bordered={false} className="mb-2 ml-4 mr-4 mr-md-0">
      <div className="row d-flex justify-content-center">
        <div className="col-1">
          <Avatar src="https://instagram.fdac18-1.fna.fbcdn.net/v/t51.2885-19/s150x150/75487940_662821564251206_3433074471882194944_n.jpg?_nc_ht=instagram.fdac18-1.fna.fbcdn.net&_nc_ohc=d1nptx6aiwoAX9RknSG&oh=541de13db1a9bbc360949ff02f0cbfc2&oe=5F5797A5" />
        </div>
        <div className="col-11">
          <textarea
            name=""
            cols="3"
            className="form-control post-form"
          ></textarea>
        </div>
        <Button
          className="ml-auto px-4"
          shape="round"
          type="primary"
          style={{ marginRight: "14px" }}
        >
          Post
        </Button>
      </div>
    </Card>
  );
};

export default CreatePost;
