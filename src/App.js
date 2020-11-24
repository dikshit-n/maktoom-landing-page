import "./App.css";
import Nine from "./Components/Nine/Nine";
import Five from "./Components/Five/Five";
import One from "./Components/One/One";
import Seven from "./Components/Seven/Seven";
import Six from "./Components/Six/Six";
import Three from "./Components/Three/Three";
import Ten from "./Components/Ten/Ten";
import Eleven from "./Components/Eleven/Eleven";
import Twelve from "./Components/Twelve/Twelve";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import { useEffect } from "react";
import MainLogo from "./assets/Logo-Main.png";
import Two from "./Components/Two/Two";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navBar = document.querySelector(".my-nav-bar");
      if (window.scrollY > 10) {
        navBar.style.background = "rgb(186, 183, 183)";
      } else {
        navBar.style.background = "transparent";
      }
    });
  }, []);

  return (
    <div className="App">
      <img src={MainLogo} className="my-main-logo" />
      <div className="my-nav-bar">
        <Nav />
      </div>

      <One />
      <Two />
      <Six />
      <Five />
      <Seven />
      <Three />
      <Nine />
      <Ten />
      <Eleven />
      {/* <Twelve /> */}
      <Footer />
    </div>
  );
}

export default App;
