import React, { Fragment } from "react";
import "./Slides.css";

class Slides extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 0,
      count: 0,
    };
    this.goPrev = this.goPrev.bind(this);
    this.goNext = this.goNext.bind(this);
  }

  goPrev() {
    if (this.state.active > 0) {
      this.setState((prevState) => ({
        active: prevState.active - 1,
      }));
    }
  }

  goNext() {
    if (this.state.active < this.props.children.length - 1) {
      this.setState((prevState) => ({
        active: prevState.active + 1,
      }));
    }
  }

  render() {
    const percentage = -100 * this.state.active + "%";
    return (
      <Fragment>
        <div
          className="slides"
          style={{ transform: `translate3d(0, ${percentage}, 0)` }}
        >
          {this.props.children.map((child, index) => {
            if (index === this.state.active) {
              return React.cloneElement(child, {
                className: child.props.className + " active",
              });
            }
            return child;
          })}
        </div>
        <ul className="dots">
          <button
            onClick={this.goPrev}
            className="my-prev-button"
            disabled={this.state.active === 0}
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
          {this.props.children.map((child, index) => (
            <li
              key={index}
              className={index === this.state.active ? "active" : ""}
            >
              <button onClick={() => this.setState({ active: index })}>
                {index + 1}
              </button>
            </li>
          ))}
          <button
            className="my-next-button"
            onClick={this.goNext}
            disabled={this.state.active === this.props.children.length - 1}
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
        </ul>
      </Fragment>
    );
  }
}

export default Slides;

// const Element = (
// <Slides>
//   <div
//     className="slide"
//     style={{
//       backgroundImage:
//         "url(https://images.unsplash.com/photo-1501876991173-f9c47cd28268?auto=format&fit=crop&w=1606&q=80)",
//     }}
//   >
//     <h2>Awesome Slide Title 1</h2>
//   </div>
//   <div
//     className="slide"
//     style={{
//       backgroundImage:
//         "url(https://images.unsplash.com/photo-1462899006636-339e08d1844e?auto=format&fit=crop&w=1650&q=80)",
//     }}
//   >
//     <h2>Awesome Slide Title 2</h2>
//   </div>
//   <div
//     className="slide"
//     style={{
//       backgroundImage:
//         "url(https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&w=2848&q=80)",
//     }}
//   >
//     <h2>Awesome Slide Title 3</h2>
//   </div>
//   <div
//     className="slide"
//     style={{
//       backgroundImage:
//         "url(https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&w=2848&q=80)",
//     }}
//   >
//     <h2>Awesome Slide Title 4</h2>
//   </div>
//   <div
//     className="slide"
//     style={{
//       backgroundImage:
//         "url(https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&w=2848&q=80)",
//     }}
//   >
//     <h2>Awesome Slide Title 5</h2>
//   </div>
// </Slides>
// );

// export default Element;
