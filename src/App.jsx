import { useState, useEffect } from "react";
import Title from "./components/Title";
import Search from "./components/Search";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [themeToggle, setToggleTheme] = useState("light");

  document.documentElement.setAttribute("data-theme", themeToggle);

  const toggleTheme = () => {
    setToggleTheme(themeToggle === "light" ? "dark" : "light");
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
    <div className="devfinder">
      <Title toggleTheme={toggleTheme} />
      <Search handleSearch={search} />
      <Card info={info} />
    </div>
  );
}

export default App;
