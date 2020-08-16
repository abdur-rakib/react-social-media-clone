import React from "react";
import dayjs from "dayjs";
import { connect } from "react-redux";

const SingleMessage = ({
  message: { userHandler, body, createdAt, userImage },
  credentials,
}) => {
  return (
    <div className="message">
      <div
        className={`message__body d-flex align-items-center ${
          credentials.handle === userHandler ? "custom_bg" : ""
        }`}
      >
        <img src={userImage} alt="" className="message__image rounded-circle" />
        <div className="mesage__info">
          <p>
            <span className="font-weight-bold">{userHandler}</span>{" "}
            {dayjs(createdAt).format("h:mm A")}
          </p>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    credentials: state.user.credentials,
  };
};

export default connect(mapStateToProps)(SingleMessage);
