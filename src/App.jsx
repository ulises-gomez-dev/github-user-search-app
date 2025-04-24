import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import MoonIcon from "./assets/icon-moon.svg";
import SunIcon from "./assets/icon-sun.svg";
import SearchIcon from "./assets/icon-search.svg";
import "./App.css";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const search = (formData) => {
    const query = formData.get("query");
    setGitHubUsername(query);
  };

  const [gitHubUsername, setGitHubUsername] = useState("octocat");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const url = `https://api.github.com/users/${gitHubUsername}`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => setInfo(json));
  }, [gitHubUsername]);

  return (
    <div className="app" theme={theme}>
      <div className="container">
        <header className="title">
          <h1>devfinder</h1>
          <button className="themeToggle" onClick={toggleTheme}>
            <h4>DARK</h4>
            <img src={MoonIcon} alt="Moon Icon" />
          </button>
        </header>

        <form className="search" action={search}>
          <img className="searchIcon" src={SearchIcon} alt="Search Icon" />
          <input
            type="text"
            name="query"
            placeholder="Search GitHub username..."
          />
          <button type="submit">Search</button>
        </form>

        <main>
          <img src={info["avatar_url"]} alt="Avatar URL" />
          <div>
            <header>
              <div>
                <h1>{info["name"]}</h1>
                <h3>{info["created_at"]}</h3>
              </div>
              <h4>{`@${info["login"]}`}</h4>
            </header>

            <section>
              <p>{!info["bio"] ? "This profile has no bio" : info["bio"]}</p>
            </section>

            <div className="stats">
              <div>
                <h3>Repos</h3>
                <h1>{info["public_repos"]}</h1>
              </div>
              <div>
                <h3>Followers</h3>
                <h1>{info["followers"]}</h1>
              </div>
              <div>
                <h3>Following</h3>
                <h1>{info["following"]}</h1>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
