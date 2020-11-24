import { Col, Row } from "reactstrap";
import "./Three.css";

const Three = (props) => {
  return (
    <div className="three-bg white">
      <Row className="three-row">
        <Col lg="6" md="12" sm="12" xs="12" className="three-left three">
          <h2 className="bold white">
            <br />
            <br />
            Reinforcing The Future
          </h2>
          <h6 className="white">
            We are one of the swiftest expanding business group in the Middle
            East. With a firm base backed by a professional management setup and
            customer friendly work ethics, we have established our mark in
            industrial segments, healthcare and technology. We stands for
            quality, efficiency and an ethical approach towards the commitments.
          </h6>
        </Col>
        <Col lg="6" md="12" sm="12" xs="12">
          <div className="digging"></div>
        </Col>
      </Row>
    </div>
  );
};

export default Three;
