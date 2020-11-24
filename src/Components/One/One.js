import Carousel from "../UI/Carousel/Carousel";
import { data } from "./CarouselData";
import "./One.css";

const One = (props) => {
  return (
    <div className="one">
      <div className="intro bg-yellow">
        <p className="white small">
          OIL FIELD OPERATIONS, HEALTHCARE & TECHNOLOGY
        </p>
        <br />
        <h1 className="blue bold ideas">
          Turning Ideas
          <br /> Into Innovation
        </h1>
      </div>
      <Carousel data={data} />
    </div>
  );
};

export default One;
