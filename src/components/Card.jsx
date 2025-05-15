import Links from "./Links";
import Stats from "./Stats";
import "./Card.css";

const formatDate = (date) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `Joined ${day} ${monthNames[monthIndex]} ${year}`;
};

function Card({ info }) {
  const date = new Date(info["created_at"]);
  const formattedDate = formatDate(date);

  return (
    <main className="card">
      <div className="img-container">
        <img src={info["avatar_url"]} alt="Avatar URL" />
      </div>

      <header>
        <h1>{info["name"]}</h1>
        <h3>{`@${info["login"]}`}</h3>
        <p>{formattedDate}</p>
      </header>

      <div>
        <p>{!info["bio"] ? "This profile has no bio" : info["bio"]}</p>
        <Stats info={info} />
        <Links info={info} />
      </div>
    </main>
  );
}

export default Card;
