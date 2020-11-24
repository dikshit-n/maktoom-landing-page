import { Col, Row } from "reactstrap";
import "./Footer.css";
import Maktoom from "../../assets/Logo-Footer.png";
import { Fragment } from "react";

const Footer = (props) => {
  return (
    <Fragment>
      <div className="footer">
        <Row>
          <Col
            lg="3"
            md="3"
            sm="12"
            xs="12"
            className="each-div-footer flex-center"
            style={{ margin: "auto" }}
          >
            <img src={Maktoom} className="maktoom-logo" />
          </Col>
          <Col lg="3" md="12" sm="12" xs="12" className="each-div-footer">
            <div className="small">
              <h6 className="bold">Maktoom Group</h6>
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
          <Col
            lg="3"
            md="12"
            sm="12"
            xs="12"
            className="each-div-footer flex-center"
          >
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
          <Col lg="3" md="12" sm="12" xs="12" className="each-div-footer">
            <div className="flex-row">
              <div className="adjust-my-margin flex-row">
                <div>
                  <a className="fa fa-twitter" />
                </div>
                <div>
                  <h6 className="flex-column">
                    Latest Tweet<small className="yellow">@Maqtoom</small>
                  </h6>
                </div>
              </div>
            </div>
            <br />
            <div className="small adjust-me margin-auto">
              <p>Have a look, New installation https://t.co/3JqlG2RTn3</p>
              <p className="bold"> Sep. 29, 2020</p>
            </div>
          </Col>
        </Row>

        <Col className="each-div-footer-last">
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
      </div>
      <div className="small bg-yellow flex-center white provider">
        Copyright © 2020 Maktoom Group - All Rights Reserved. Made By Leora LLC
      </div>
    </Fragment>
  );
};

export default Footer;
