import Carousel from "../UI/Carousel/Carousel";
import { data } from "./CarouselData";
import "./One.css";

const One = (props) => {
  return (
    <div className="one">
      <Carousel data={data} />
    </div>
  );
};

export default One;
