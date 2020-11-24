import "./Seven.css";

const Seven = (props) => {
  return (
    <div className="seven">
      <div className="seven-content flex-column bg-yellow">
        <h1 className="bold blue seven-content-heading">
          {" "}
          Building a <br />
          healthier tomorrow
        </h1>
        <br />
        <p className="white">
          Our Healthcare will be the pioneer of integrated healthcare delivery
          in Oman. This vision will leed the group to earmark time and resources
          to strengthen each vital cog in the process of healthcare delivery. As
          a result of these efforts, we are sure the group will be in a unique
          position to exponentially increase its healthcare cover.
        </p>
        <button className="seven-button white bold">LEARN MORE</button>
      </div>
    </div>
  );
};

export default Seven;
