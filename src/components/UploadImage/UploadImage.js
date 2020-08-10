import { Upload, message } from "antd";
import React, { Component } from "react";
// import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { uploadImage } from "../../redux/actions/userActions";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

class UploadImage extends Component {
  state = {
    loading: false,
  };

  handleChange = (info) => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // this.props.uploadImage(info.file);

      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) =>
        this.setState({
          imageUrl,
          loading: false,
        })
      );
      this.props.uploadImage(this.state.imageUrl);
    }
  };

  render() {
    // const uploadButton = (
    //   <div>
    //     {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
    //     <div className="ant-upload-text">Upload</div>
    //   </div>
    // );
    const { imageUrl } = this.state;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          <img src={this.props.img} alt="avatar" style={{ width: "100%" }} />
        )}
      </Upload>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapActionsToProps = { uploadImage };

export default connect(mapStateToProps, mapActionsToProps)(UploadImage);
