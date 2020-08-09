import React from "react";
import { Card } from "antd";
import Posts from "../Posts/Posts";

const Bookmarks = () => {
  return (
    <div>
      <Card className="mb-2 ml-4 mr-4 mr-md-0" style={{ minHeight: "100vh" }}>
        <h4 className="text-center">Bookmarks</h4>
        <Posts />
      </Card>
    </div>
  );
};

export default Bookmarks;
