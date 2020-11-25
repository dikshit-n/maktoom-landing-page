import "./Five.css";
import { Col, Row } from "reactstrap";

const Five = (props) => {
  return (
    <div className="four bg-yellow">
      <Row>
        <Col lg="6" md="12" sm="12" xs="12" style={{ padding: 0 }}>
          <div className="digging-2"></div>
        </Col>
        <Col
          lg="6"
          md="12"
          sm="12"
          xs="12"
          className="digging-content flex-column text-left"
        >
          <div className="small white">OUR SKILLS.</div>
          <br />
          <h2 className="blue">
            <span className="bold">
              We’re constantly improving
              <br />{" "}
            </span>
            our skills to fulfill projects of any level
          </h2>
          <br />
          <div className="small white">
            Our network and digital solutions help our clients to scale faster –
            allowing operators, vendors, and contractors to work together
            seamlessly while reducing costs and risk.
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Five;
