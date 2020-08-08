import React, { useState, useEffect } from "react";
import { Form } from "antd";
import { connect } from "react-redux";

const EditUser = ({ credentials }) => {
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");

  const mapUserDetailsToState = (credentials) => {
    credentials.bio && setBio(credentials.bio);
    credentials.website && setWebsite(credentials.website);
    credentials.location && setLocation(credentials.location);
  };
  useEffect(() => {
    mapUserDetailsToState(credentials);
  }, []);
  return (
    <div>
      <Form>
        <Form.Item name="bio">
          <Input
            placeholder="Add bio"
            onChange={(e) => setBio(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="website">
          <Input
            placeholder="Add website"
            onChange={(e) => setWebsite(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="location">
          <Input
            placeholder="Add location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    credentials: state.user.credentials,
    UI: state.UI,
  };
};

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(EditUser);
