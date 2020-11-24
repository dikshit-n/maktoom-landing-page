import { Fragment, useState } from "react";
import "./VerticalSlider.css";

const VerticalSlider = (props) => {
  const [active, setActive] = useState(props.id);

  const goUp = () => {
    var slider = document.querySelector(
      "#vertical-slider-container" + props.id
    );
    if (active > props.id) {
      var prev = document.getElementById(active - 1);
      slider.scrollTo(0, prev.offsetTop);
      setActive((prev) => prev - 1);
    }
  };
  const goDown = () => {
    var slider = document.querySelector(
      "#vertical-slider-container" + props.id
    );
    if (active < props.data.length + props.id) {
      var next = document.getElementById(active + 1);
      slider.scrollTo(0, next.offsetTop);
      setActive((prev) => prev + 1);
    }
  };

  return (
    <Fragment>
      <button
        disabled={active === props.id}
        className="vertical-slider-control-1"
        onClick={goUp}
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-caret-up-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
        </svg>
      </button>
      <div
        className="vertical-slider-container"
        id={"vertical-slider-container" + props.id}
      >
        {props.data.map((el, index) => {
          // console.log(index + props.id);
          return (
            <div key={index} id={index + props.id}>
              <div
                className="vertical-slider-image"
                style={{ backgroundImage: `url(` + el.src + `)` }}
              ></div>
              <div>{el.caption}</div>
            </div>
          );
        })}
      </div>
      <button
        disabled={active >= props.data.length + props.id - 1}
        className="vertical-slider-control-2"
        onClick={goDown}
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-caret-down-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </button>
    </Fragment>
  );
};

export default VerticalSlider;
