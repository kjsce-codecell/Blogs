import React, { useEffect } from "react";
import Holder from "holderjs";

import "../sass/variables.sass";

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Col,
} from "reactstrap";

export default function Cards() {
  
  useEffect(() => {
    Holder.run({
      images: ".testimg"
    })
  }, [])

  return (
    <Card>
      <Row>
        <Col sm md="4">
          <CardImg
            width="100%"
            // src="holder.js/300x200"
            alt="Card image cap"
            className="testimg"
          />
        </Col>
        <Col sm md="8">
          <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.Where?Navbar.Okay
            </CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
}