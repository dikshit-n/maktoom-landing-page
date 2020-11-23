import Slider from "../UI/Slider/Slider";
import "./Eleven.css";
import { data } from "./sliderData";

const Eleven = (props) => {
  return (
    <div className="eleven">
      <h6 className="bold blue text-left" style={{ marginLeft: "10px" }}>
        Our Clients
      </h6>
      <Slider
        data={data}
        carousel
        id="100"
        controlsClassName="slider-controls"
        eachImageStyle={{
          borderRadius: "10px",
          width: "250px",
          height: "150px",
          boxShadow: "none",
        }}
      />
    </div>
  );
};
export default Eleven;
