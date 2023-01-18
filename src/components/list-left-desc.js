import React from "react";
import { Row, Col, Image, Stack, Badge } from "react-bootstrap";
import "./style.css";

function ListLeft({ data }) {
  return (
    <Row className="d-flex">
      <Col xs="12" lg="2">
        <Image
          alt="icon"
          src={process.env.PUBLIC_URL + data.logo}
          style={{ margin: "0 10 0 10" }}
          rounded
        />
      </Col>
      <Col lg="10">
        <Stack gap={1}>
          <div className="">
            {data.company} <Badge bg="secondary">New</Badge>{" "}
            <Badge bg="secondary">New</Badge>
          </div>
          <div className="">{data.position}</div>
          <div className="">
            <Badge>New</Badge> <Badge>New</Badge> <Badge>New</Badge>{" "}
          </div>
        </Stack>
      </Col>
    </Row>
  );
}

export default ListLeft;
