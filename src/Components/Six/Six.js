import "./Six.css";

const Six = (props) => {
  return (
    <div className="six flex-column text-center">
      <div>
        <h3 className="bold orange">Welcome to Maktoom Group</h3>
        <br />
        <h2 className="blue six-heading">
          <span className="bold">We are</span> a leading{" "}
          <span className="bold">
            Company in Oil Field, Healthcare & Technology
          </span>
        </h2>
        <p>
          We have expanded into many fields of operation that has led to the{" "}
          <span className="orange bold">present status</span> as a wide spectrum
          of
          <br />
          <span className="orange bold">
            Oil Field, Healthcare & Information Technology.
          </span>
        </p>
      </div>
      <br />

      <div className="flex-row flex-wrap small-divs-container">
        <div className="each-small-div text-left">
          <h5 className="bold blue">Artificial Lift</h5>
          <br />
          <div className="small">
            Ensure that you are functioning at an optimal level. We are a
            full-service provider of artificial lift systems.
          </div>
        </div>
        <div className="each-small-div text-left">
          <h5 className="bold blue">Oil Field Equipments</h5>
          <br />
          <div className="small">
            Ensure that you are functioning at an optimal level. We are a
            full-service provider of artificial lift systems.
          </div>
        </div>
        <div className="each-small-div text-left">
          <h5 className="bold blue">Healthcare</h5>
          <br />
          <div className="small">
            Ensure that you are functioning at an optimal level. We are a
            full-service provider of artificial lift systems.
          </div>
        </div>
        <div className="each-small-div text-left">
          <h5 className="bold blue">Information Technology</h5>
          <br />
          <div className="small">
            Ensure that you are functioning at an optimal level. We are a
            full-service provider of artificial lift systems.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Six;
