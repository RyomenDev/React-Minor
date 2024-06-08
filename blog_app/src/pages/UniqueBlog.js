import React from "react";
import Post from "./Post";
import { Container, Row, Col, Card } from "react-bootstrap";
import { data } from "../data";

const UniqueBlog = () => {
  return (
    <div>
      <Row className="justify-content-between">
        <Col md={8} className="mb-4">
          {
            <Post key={post.id} post={post} />;
          }
        </Col>
        <Col md={2} className="mt-4 float-right">
          <Card>
            <Card.Body>
              <Card.Title>Recent Posts</Card.Title>
              <ul className="list-unstyled">
                {data.map((post) => {
                  return (
                    <li key={post.id}>
                      <a href="#">{post.title}</a>
                    </li>
                  );
                })}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default UniqueBlog;
