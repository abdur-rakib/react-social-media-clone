import React from "react";
import { Card } from "antd";

const Bookmarks = () => {
  return (
    <div>
      <Card className="mb-2 ml-4 mr-4 mr-md-0" style={{ minHeight: "100vh" }}>
        <h4 className="text-center">Bookmarks</h4>
        <h4 className=" text-center mt-4">
          Currently workings on progress{" "}
          <span aria-label="img" role="img">
            😁
          </span>
          ....
        </h4>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/react-mukh-boi-project.appspot.com/o/undraw_Progress_tracking_re_ulfg.png?alt=media&token=ada23321-47df-44d7-a83d-489878b59567"
          className="img-fluid"
          alt=""
        />
      </Card>
    </div>
  );
};

export default Bookmarks;
