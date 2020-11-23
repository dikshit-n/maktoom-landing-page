import "./Five.css";
import { Col, Row } from "reactstrap";

const Five = (props) => {
  return (
    <div className="four">
      <Row>
        <Col lg="6" md="12" sm="12" xs="12" className="digging"></Col>
        <Col
          lg="6"
          md="12"
          sm="12"
          xs="12"
          className="digging-content flex-column text-left"
        >
          <div className="small">OUR SKILLS</div>
          <br />
          <h1 className="blue">
            <span className="bold">
              We’re constantly improving our skills to{" "}
            </span>
            fulfill projects of any level
          </h1>
          <br />
          <div className="small">
            Our network and digital solutions help our clients to scale faster –
            allowing operators, vendors, and contractors to work together
            seamlessly while reducing costs and risk. Maktoom has expanded into
            many other fields of operation that has led to the present status as
            a wide spectru, of Construction & Maintenance Services. Our services
            ensure all of the clients requirement are covered from small to
            large projects. We engaged in offering Quality Contracting Services
            with a competitive edge. Our mission is to be the first choice of
            all our clients. We are always committed towards the quality and
            safety of the work and has proven track record of successful and
            professionaly executing large contracts of all type
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Five;
