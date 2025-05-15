import MoonIcon from "../assets/icon-moon.svg";
import "./Title.css";

function Title({ toggleTheme }) {
  return (
    <header className="title">
      <h1>devfinder</h1>
      <button className="themeToggle" onClick={toggleTheme}>
        <h4>DARK</h4>
        <img src={MoonIcon} alt="Moon Icon" />
      </button>
    </header>
  );
}

export default Title;
