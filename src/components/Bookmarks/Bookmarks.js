import React from "react";
import { Card } from "antd";

const Bookmarks = () => {
  return (
    <div>
      <Card className="mb-2 ml-4 mr-4 mr-md-0" style={{ minHeight: "100vh" }}>
        <h4 className="text-center">Bookmarks</h4>
        <h1 className="display-4 text-center">
          Currently on progress{" "}
          <span aria-label="img" role="img">
            😁
          </span>
          ....
        </h1>
      </Card>
    </div>
  );
};

export default Bookmarks;
