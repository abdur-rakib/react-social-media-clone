import React, { useState } from "react";
import { Card, Button, Avatar } from "antd";
import { connect } from "react-redux";

import { createPost } from "../../redux/actions/dataActions";

const CreatePost = (props) => {
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  const handleSubmit = () => {
    if (body === "") {
      setErrors("Write something fool !!!😁");
      setTimeout(() => {
        setErrors("");
      }, 2000);
    } else {
      setLoading(true);
      const newPost = { body };
      props.createPost(newPost);
      setTimeout(() => {
        setBody("");
        setLoading(false);
      }, 2000);
    }
  };
  return (
    <Card bordered={false} className="mb-2 ml-4 mr-4 mr-md-0">
      <div className="row d-flex justify-content-center">
        <div className="col-1">
          <Avatar src={props.user.credentials.imageUrl} />
        </div>
        <div className="col-11">
          <form action="" onSubmit={handleSubmit}>
            <textarea
              required={true}
              value={body}
              name=""
              cols="3"
              className="form-control post-form d-block"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
            {errors && <span className="text-danger">{errors}</span>}

            <Button
              className="px-4 float-right mr-0"
              shape="round"
              type="primary"
              style={{ marginRight: "14px" }}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading === true ? "Posting" : "Post"}
            </Button>
          </form>
        </div>
      </div>
    </Card>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.data,
    user: state.user,
    UI: state.UI,
  };
};

const mapActionsToProps = {
  createPost,
};

export default connect(mapStateToProps, mapActionsToProps)(CreatePost);
