import React from "react";
import Post from "../Post/Post";
import { Divider } from "antd";

const PostDetails = ({ post }) => {
  console.log(post);
  return (
    <>
      <Post post={post} />
      <div className="ml-4 pl-2 mr-4 pr-2">
        <div className="comment__details">
          <div className="comments">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            odio repellendus quis placeat necessitatibus reprehenderit, quae
            quisquam dolor reiciendis a iste odio repellendus quis placeat
            dignissimos aliquam, quas neque mollitia nostrum, dolor harum labore
            odio repellendus quis placeat quos ipsam odio repellendus quis
            placeat Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum odio repellendus quis placeat necessitatibus
            reprehenderit, quae quisquam dolor reiciendis a iste odio
            repellendus quis placeat dignissimos aliquam, quas neque mollitia
            nostrum, dolor harum labore odio repellendus quis placeat quos ipsam
            odio repellendus quis placeat Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum odio repellendus quis placeat
            necessitatibus reprehenderit, quae quisquam dolor reiciendis a iste
            odio repellendus quis placeat dignissimos aliquam, quas neque
            mollitia nostrum, dolor harum labore odio repellendus quis placeat
            quos ipsam odio repellendus quis placeat Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatum odio repellendus quis
            placeat necessitatibus reprehenderit, quae quisquam dolor reiciendis
            a iste odio repellendus quis placeat dignissimos aliquam, quas neque
            mollitia nostrum, dolor harum labore odio repellendus quis placeat
            quos ipsam odio repellendus quis placeat Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatum odio repellendus quis
            placeat necessitatibus reprehenderit, quae quisquam dolor reiciendis
            a iste odio repellendus quis placeat dignissimos aliquam, quas neque
            mollitia nostrum, dolor harum labore odio repellendus quis placeat
            quos ipsam odio repellendus quis placeat Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatum odio repellendus quis
            placeat necessitatibus reprehenderit, quae quisquam dolor reiciendis
            a iste odio repellendus quis placeat dignissimos aliquam, quas neque
            mollitia nostrum, dolor harum labore odio repellendus quis placeat
            quos ipsam odio repellendus quis placeat
          </div>
          <div className="comment-form">
            <Divider />
            <form action="">
              <input
                className="form-control form-control-sm"
                type="text"
                placeholder="type comment"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
