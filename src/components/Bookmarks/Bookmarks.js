import React from "react";
import { Card } from "antd";
import Posts from "../Posts/Posts";

const Bookmarks = () => {
  return (
    <div>
      <Card className="ml-4">
        <h4 className="text-center">Bookmarks</h4>
        <Posts />
      </Card>
    </div>
  );
};

export default Bookmarks;
