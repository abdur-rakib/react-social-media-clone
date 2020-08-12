import React, { useState } from "react";
import { connect } from "react-redux";
import { uploadImage } from "../../redux/actions/userActions";
import { Button } from "antd";

const UploadImage = (props) => {
  const [image, setImage] = useState(null);
  // const [loading, setLoading] = useState(false);
  const handleImageChange = (e) => {
    if (image !== null) {
      props.uploadImage(image, props.user.credentials.handle);
      // setLoading(true);
      // setTimeout(() => {
      //   setLoading(false);
      // }, 3000);
      setImage(null);
    }
  };
  return (
    <div className="text-center">
      <img src={props.img} alt="" className="img-fluid w-25" />
      <div className="d-flex flex-row justify-content-around mt-3">
        <input
          style={{ maxWidth: "314px" }}
          type="file"
          name=""
          className="form-control-file form-control-sm"
          id=""
          onChange={(e) => setImage(e.target.files[0])}
        />
        <Button style={{ marginLeft: "-285px" }} onClick={handleImageChange}>
          {props.UI.loading ? "Changing" : "Change Profile"}
        </Button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
    UI: state.UI,
  };
};
const mapActionsToProps = {
  uploadImage,
};

export default connect(mapStateToProps, mapActionsToProps)(UploadImage);
