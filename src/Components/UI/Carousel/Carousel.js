import Slides from "./Slides";

const Carousel = (props) => {
  return (
    <Slides total={props.data.map((el) => el).length}>
      {props.data.map((el, index) => (
        <div
          key={index}
          className="my-slide"
          style={{
            backgroundImage: `url(` + el.src + `)`,
            //   "url(https://images.unsplash.com/photo-1501876991173-f9c47cd28268?auto=format&fit=crop&w=1606&q=80)",
          }}
        >
          <h2>{el.caption}</h2>
        </div>
      ))}
    </Slides>
  );
};

export default Carousel;
