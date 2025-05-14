import LocationIcon from "../assets/icon-location.svg";
import "./Links.css";

function Links({ info }) {
  return (
    <ul className="links">
      <li>
        <p>{info["location"] || "Not Available"}</p>
      </li>
      <li>
        <p>{info["blog"] || "Not Available"}</p>
      </li>
      <li>
        <p>{info["twitter_username"] || "Not Available"}</p>
      </li>
      <li>
        <p>{info["company"] || "Not Available"}</p>
      </li>
    </ul>
  );
}

export default Links;
