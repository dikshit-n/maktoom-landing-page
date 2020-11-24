import { withRouter } from "react-router";
import Sidebar from "../UI/Sidebar/Sidebar";
import "./Nav.css";

const Nav = (props) => {
  var routes = [
    {
      name: "The Company",
      to: props.match.url + "/activity",
      initialActive: true,
    },
    { name: "The way We work", to: props.match.url + "/challanges" },
    { name: "sectors", to: props.match.url + "/friends" },
    { name: "divisions", to: props.match.url + "/leaderboard" },
    {
      name: "careers",
      to: props.match.url + "/notification",
    },
    {
      name: "contact",
      to: props.match.url + "/mobile",
    },
    {
      component: (
        <span className="flex-row flex-center">
          <a className="fa fa-facebook" />
          <a className="fa fa-twitter" />
          <a className="fa fa-google" />
          <a className="fa fa-instagram" />
          <div className="search-icon"></div>
        </span>
      ),
      to: props.match.url + "/profile",
    },
  ];

  return <Sidebar routes={routes} />;
};

export default withRouter(Nav);
