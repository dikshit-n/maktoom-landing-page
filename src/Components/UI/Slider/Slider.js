import React, { useEffect, useState } from "react";
import "./Slider.css";
// import ScrollContainer from "react-indiana-drag-scroll";
import { uniqueVariableName } from "../../Utility/getUniqueVariableName";

// var scrollArray = [200, 200, -400];

const Slider = (props) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    uniqueVariableName.set(props.id, document.getElementById(props.id));
    uniqueVariableName.set(props.id + "scrollCopy");
    uniqueVariableName.set(props.id + "timer");
    uniqueVariableName.set(props.id + "scrollArray", [800, 800, -1600]);
    // uniqueVariableName.set(props.id + "total", 0);
    // uniqueVariableName.set(props.id + "dummy", true);
    // uniqueVariableName.set(props.id + "scrollArray", [
    //   ...props.data.map((el, index) => {
    //     uniqueVariableName.set(
    //       props.id + "total",
    //       uniqueVariableName.get(props.id + "total") + 100
    //     );
    //     if (index > props.data.length / 2) {
    //       if (uniqueVariableName.get(props.id + "dummy")) {
    //         uniqueVariableName.set(props.id + "dummy", false);
    //         return parseInt(uniqueVariableName.get(props.id + "total")) * -1;
    //       } else {
    //         return 0;
    //       }
    //     } else {
    //       return 100;
    //     }
    //   }),
    // ]);
    // uniqueVariableName.set(props.id + "scrollArray", [
    //   ...uniqueVariableName
    //     .get(props.id + "scrollArray")
    //     .filter((el) => el !== 0),
    // ]);
    // uniqueVariableName.set(props.id + "scrollCopy");
    if (props.carousel) {
      setTimer();
    }
  }, []);

  useEffect(() => {
    uniqueVariableName.get(props.id).scrollLeft += uniqueVariableName.get(
      props.id + "scrollArray"
    )[uniqueVariableName.get(props.id + "scrollCopy")];
    // uniqueVariableName.get(
    //   props.id + "scrollArray"
    // )[uniqueVariableName.get(props.id + "scrollCopy")];
  }, [scroll]);

  const setTimer = () => {
    clearTimeout(uniqueVariableName.get(props.id + "timer"));
    uniqueVariableName.set(
      props.id + "timer",
      setInterval(async () => {
        if (uniqueVariableName.get(props.id + "scrollCopy") > 2) {
          await setScroll(0);
        } else {
          await setScroll((prev) => prev + 1);
        }
        await setTimer();
      }, 5000)
    );
  };

  const onScrollRight = () => {
    uniqueVariableName.get(props.id).scrollLeft += 300;
  };

  const onScrollLeft = () => {
    uniqueVariableName.get(props.id).scrollLeft += -300;
  };
  uniqueVariableName.set(props.id + "scrollCopy", scroll);
  return (
    <div className="give-top-space" style={{ position: "relative" }}>
      <div className="slide-container">
        {/* <div id="slide-left-container">
          <div className="slide-left"></div>
        </div> */}
        {/* <ScrollContainer className="scroll-container"> */}
        <div
          //   cards-container
          id={props.id}
          className="my-scroll-container scroll-container indiana-scroll-container indiana-scroll-container--hide-scrollbars indiana-scroll-container--native-scroll"
          style={{
            overflowX: "scroll",
            overflowY: "hidden",
            userSelect: "none",
          }}
        >
          <div className="cardss" style={{ width: "fit-content" }}>
            {props.data.map((eachData, index) => (
              <div className="with-name" key={index}>
                <div
                  className="cardd img"
                  style={{
                    backgroundImage: `url('` + eachData.src + `')`,
                    borderRadius: props.borderRadius
                      ? props.borderRadius.toString().endsWith("px")
                        ? props.borderRadius.toString()
                        : props.borderRadius.toString() + "px"
                      : "50%",
                    ...props.eachImageStyle,
                  }}
                >
                  {/* <div style={{width: '100%', backgroundImage: `url('` + eachData.src + `')` }}></div> */}
                  {/* <img
                  src={eachData.src}
                  alt={eachData.name}
                  style={{ width: "100%" }}
                /> */}
                </div>
                <div>
                  <p>{eachData.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* </ScrollContainer> */}
        {/* <div id="slide-right-container" onClick={onScrollRight}>
          <div className="slide-right"></div>
        </div> */}
      </div>
      <br />
      <div className={props.controlsClassName}>
        <div className="control-1" onClick={onScrollLeft}>
          <div
            className="runner"
            color="success"
            style={{
              cursor: "pointer",
              userSelect: "none",
              borderRadius: "50%",
            }}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-chevron-left"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>

            {/* <i className="fa fa-angle-left" style={{ fontWeight: "bold" }} /> */}
          </div>
        </div>
        <div className="control-2" onClick={onScrollRight}>
          <div
            className="runner"
            color="success"
            style={{
              cursor: "pointer",
              userSelect: "none",
              borderRadius: "50%",
            }}
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-chevron-right"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>

            {/* <i className="fa fa-angle-right" style={{ fontWeight: "bold" }} /> */}
          </div>
        </div>
      </div>
      {/* <button onClick={onScrollLeft}> Scroll Left </button> &nbsp;&nbsp;&nbsp;
      <button onClick={onScrollRight}> Scroll Right </button> */}
    </div>
  );
};

export default Slider;
