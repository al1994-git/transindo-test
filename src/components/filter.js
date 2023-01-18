import React from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";
import "./style.css";

function Filter({ data }) {
  return (
    <Card className="filter-custom shadow">
      <Card.Body>
        <Row className="">
          <Col xs="12" lg="12">
            {data.map((item, index) => {
              return (
                <Badge className="badge-custom" key={index}>
                  {item}
                </Badge>
              );
            })}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Filter;
