import React from "react";
import { Card, Row, Col, Badge } from "react-bootstrap";
import ListLeft from "./list-left-desc";
import "./style.css";

function List({ data, action }) {
  return (
    <Card className="card-list-custom shadow">
      <Card.Body>
        <Row className="list-group-item d-flex align-items-center p-l-r-0">
          <Col xs="12" lg="7">
            <ListLeft data={data} />
          </Col>
          <Col xs="12" lg="5">
            {data.filter.map((item, index) => {
              return (
                <Badge
                  className="badge-custom"
                  key={index}
                  onClick={() => action(item)}
                >
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

export default List;
