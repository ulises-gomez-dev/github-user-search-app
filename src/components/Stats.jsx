import "./Stats.css";

function Stats({ info }) {
  return (
    <div className="stats">
      <h4>Repos</h4>
      <h4>Followers</h4>
      <h4>Following</h4>
      <h2>{info["public_repos"]}</h2>
      <h2>{info["followers"]}</h2>
      <h2>{info["following"]}</h2>
    </div>
  );
}

export default Stats;
