import React from "react";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

import "../sass/sections.sass";

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Col,
} from "reactstrap";

const TopPosts = () => {
  return (
    <div className="d-none d-sm-block cleanse">
      <div className="header">Top Posts</div>
      <div className="underline"></div>
      <Row>
        <Col sm="12" md="6" lg="6" className="p-0">
          <Card className="topPostCard">
            <Row>
              <Col sm md="5" className="p-0">
                <Link to="#">
                  <CardImg
                    width="100%"
                    src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="Card image cap"
                    className=" topPostImg"
                  />
                </Link>
              </Col>

              <Col sm md="7" className="topPostText">
                <CardBody>
                  <CardTitle>Card Title</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quas amet, facere quibusdam illo sit itaque.
                  </CardText>
                  <CardText>
                    <blockquote className="text-success">- John Doe</blockquote>
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="6" className="p-0">
          <Card className="topPostCard">
            <Row>
              <Col sm md="5" className="p-0">
                <Link to="#">
                  <CardImg
                    width="100%"
                    src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="Card image cap"
                    className=" topPostImg"
                  />
                </Link>
              </Col>
              <Col sm md="7" className="topPostText">
                <CardBody>
                  <CardTitle>Card Title</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quas amet, facere quibusdam illo sit itaque.
                  </CardText>
                  <CardText>
                    <blockquote className="text-success">- John Doe</blockquote>
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="6" lg="6" className="p-0">
          <Card className="topPostCard">
            <Row>
              <Col sm md="5" className="p-0">
                <Link to="#">
                  <CardImg
                    width="100%"
                    src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="Card image cap"
                    className=" topPostImg"
                  />
                </Link>
              </Col>
              <Col sm md="7" className="topPostText">
                <CardBody>
                  <CardTitle>Card Title</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quas amet, facere quibusdam illo sit itaque.
                  </CardText>
                  <CardText>
                    <blockquote className="text-success">- John Doe</blockquote>
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="6" className="p-0">
          <Card className="topPostCard">
            <Row>
              <Col sm md="5" className="p-0">
                <Link to="#">
                  <CardImg
                    width="100%"
                    src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="Card image cap"
                    className=" topPostImg"
                  />
                </Link>
              </Col>
              <Col sm md="7" className="topPostText">
                <CardBody>
                  <CardTitle>Card Title</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quas amet, facere quibusdam illo sit itaque.
                  </CardText>
                  <CardText>
                    <blockquote className="text-success">- John Doe</blockquote>
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="6" lg="6" className="p-0">
          <Card className="topPostCard">
            <Row>
              <Col sm md="5" className="p-0">
                <Link to="#">
                  <CardImg
                    width="100%"
                    src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="Card image cap"
                    className=" topPostImg"
                  />
                </Link>
              </Col>
              <Col sm md="7" className="topPostText">
                <CardBody>
                  <CardTitle>Card Title</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quas amet, facere quibusdam illo sit itaque.
                  </CardText>
                  <CardText>
                    <blockquote className="text-success">- John Doe</blockquote>
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col sm="12" md="6" lg="6" className="p-0">
          <Card className="topPostCard">
            <Row>
              <Col sm md="5" className="p-0">
                <Link to="#">
                  <CardImg
                    width="100%"
                    src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="Card image cap"
                    className=" topPostImg"
                  />
                </Link>
              </Col>
              <Col sm md="7" className="topPostText">
                <CardBody>
                  <CardTitle>Card Title</CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quas amet, facere quibusdam illo sit itaque.
                  </CardText>
                  <CardText>
                    <blockquote className="text-success">- John Doe</blockquote>
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default TopPosts;