import { Col, Row } from "reactstrap";
import VerticalSlider from "../UI/VerticalSlider/VerticalSlider";
import { testimonialData_1 } from "./testimonialData";
import "./Twelve.css";

const Twelve = (props) => {
  return (
    <div className="twelve">
      <h6 className="blue text-left twelve-heading">Testimonials</h6>
      <Row>
        <Col lg="6" md="6" sm="12" xs="12">
          <VerticalSlider id={1000} data={testimonialData_1} />
        </Col>
        <Col lg="6" md="6" sm="12" xs="12">
          <VerticalSlider id={10} data={testimonialData_1} />
        </Col>
      </Row>
    </div>
  );
};

export default Twelve;
