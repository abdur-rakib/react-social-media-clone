import { Skeleton, Card } from "antd";

import React from "react";

const PostsSkeleton = () => {
  return (
    <>
      <Card bordered={false} className="mb-2 ml-4 mr-4 mr-md-0">
        <Skeleton active avatar paragraph={{ rows: 2 }} />
      </Card>
      <Card bordered={false} className="mb-2 ml-4 mr-4 mr-md-0">
        <Skeleton active avatar paragraph={{ rows: 2 }} />
      </Card>
      <Card bordered={false} className="mb-2 ml-4 mr-4 mr-md-0">
        <Skeleton active avatar paragraph={{ rows: 2 }} />
      </Card>
      <Card bordered={false} className="mb-2 ml-4 mr-4 mr-md-0">
        <Skeleton active avatar paragraph={{ rows: 2 }} />
      </Card>
      <Card bordered={false} className="mb-2 ml-4 mr-4 mr-md-0">
        <Skeleton active avatar paragraph={{ rows: 2 }} />
      </Card>
      <Card bordered={false} className="mb-2 ml-4 mr-4 mr-md-0">
        <Skeleton active avatar paragraph={{ rows: 2 }} />
      </Card>
    </>
  );
};

export default PostsSkeleton;
