import React from "react";
import { Card, Skeleton } from "antd";
import SingleMessage from "./SingleMessage";
import { connect } from "react-redux";
import { createMessage, db } from "../../redux/actions/userActions";
import { useState } from "react";
import { useEffect } from "react";

import AutoScroll from "@brianmcallister/react-auto-scroll";

const Message = (props) => {
  const [body, setBody] = useState("");
  const [messages, setMessages] = useState([]);
  const messageSubmit = (e) => {
    e.preventDefault();
    if (body.trim().length !== 0) {
      db.collection("messages")
        .add({
          userHandler: props.user.credentials.handle,
          body: body,
          userImage: props.user.credentials.imageUrl,
          createdAt: new Date().toISOString(),
        })
        .then(() => setBody(""));
    }
  };
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => {
            // console.log(doc.data());
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      });
  }, []);
  return (
    <AutoScroll>
      <Card className="mb-2 ml-4 mr-4 mr-md-0" style={{ minHeight: "100vh" }}>
        <h4 className="mb-2">Group Messages</h4>
        {messages.length === 0 ? (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        ) : (
          messages?.map((message) => (
            <SingleMessage key={message.id} message={message} />
          ))
        )}

        <form className="message__form" action="" onSubmit={messageSubmit}>
          <input
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Enter message"
            className="form-control form-control-sm"
          />
        </form>
      </Card>
    </AutoScroll>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapActionsToProps = {
  createMessage,
};

export default connect(mapStateToProps, mapActionsToProps)(Message);
