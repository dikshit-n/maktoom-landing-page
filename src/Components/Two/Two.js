import { Col, Row } from "reactstrap";
import "./Two.css";

const Two = (props) => {
  return (
    <div className="two">
      <Row className="flex-center">
        <Col lg="3" md="3" sm="6" xs="6">
          <div className="each-two-image two-1"></div>
        </Col>
        <Col lg="3" md="3" sm="6" xs="6">
          <div className="each-two-image two-2"></div>
        </Col>
        <Col lg="3" md="3" sm="6" xs="6">
          <div className="each-two-image two-3"></div>
        </Col>
        <Col lg="3" md="3" sm="6" xs="6">
          <div className="each-two-image two-4"></div>
        </Col>
      </Row>
    </div>
  );
};

export default Two;
