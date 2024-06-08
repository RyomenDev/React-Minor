import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const Post = ({ post }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Card>
      <Card.Img variant="top" src={post?.img} width={20} height={250} />
      <Card.Body>
        <Card.Title>{post?.title}</Card.Title>
        {/* <Card.Text>{post?.description}</Card.Text> */}
        <Card.Text>
          {showFullDescription
            ? post?.description
            : post?.description.slice(0, 100)}
        </Card.Text>
        <Button variant="primary" onClick={toggleDescription}>
          {showFullDescription ? "Read Less" : "Read More"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Post;
