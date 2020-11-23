import { Col, Row } from "reactstrap";
import "./Footer.css";
import Maktoom from "../../assets/maktoom-logo.jpg";

const Footer = (props) => {
  return (
    <div className="footer">
      <Row>
        <Col
          lg="2"
          md="4"
          sm="6"
          xs="12"
          className="each-div-footer"
          style={{ margin: "auto" }}
        >
          <img src={Maktoom} className="maktoom-logo" />
        </Col>
        <Col lg="3" md="12" sm="12" xs="12" className="each-div-footer">
          <div>
            <h5 className="bold">Maktoom Trading & Contracting Company LLC</h5>
            <p>
              52A, 5th Floor, Ghubrah Plaza, P.O. Box: 2493, P.C: 130
              <br />
              Ghubrah, Sultanate of Oman
              <br />
              Tel: +968 244 99820,
              <br /> Fax: +968 244 99833 <br />
              E-mail: enquiry@maktoomco.com
            </p>
          </div>
        </Col>
        <Col lg="2" md="12" sm="12" xs="12" className="each-div-footer">
          <div>
            <p className="yellow">The Company</p>
            <a href="#">The Way We Work</a>
            <br />
            <a href="#">Sectors</a>
            <br />
            <a href="#">Divisions</a>
            <br />
            <a href="#">Careers</a>
            <br />
            <a href="#">Contact</a>
          </div>
          <br />
        </Col>
        <Col lg="2" md="12" sm="12" xs="12" className="each-div-footer">
          <div className="flex-row">
            <div className="margin-auto flex-row">
              <div>
                <a className="fa fa-twitter" />
              </div>
              <div>
                <h4 className="flex-column">
                  Latest Tweet<small className="yellow">@Maqtoom</small>
                </h4>
              </div>
            </div>
          </div>
          <br />
          Have a look, New installation https://t.co/3JqlG2RTn3
          <p className="bold"> Sep. 29, 2020</p>
        </Col>
        <Col lg="3" md="12" sm="12" xs="12" className="each-div-footer">
          <div>
            Follow us :{" "}
            <span>
              <a className="fa fa-facebook" />
              <a className="fa fa-twitter" />
              <a className="fa fa-google" />
              <a className="fa fa-instagram" />
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
