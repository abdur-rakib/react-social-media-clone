import React from "react";
import { Card, Input, Button, Avatar, Form } from "antd";

const CreatePost = () => {
  return (
    <Card bordered={false} className="mb-2 ml-4 mr-4 mr-md-0">
      <div className="row">
        <div className="col-1">
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </div>
        <div className="col-11 pl-2">
          <Form.Item>
            <Input.TextArea placeholder="Write something..." />
          </Form.Item>
        </div>
        <Button
          className="ml-auto px-4"
          size="small"
          type="primary"
          style={{ marginTop: "-20px", marginRight: "14px" }}
        >
          Post
        </Button>
      </div>
    </Card>
  );
};

export default CreatePost;
