import ReactDOM from "react-dom";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Tajanee Wells",
  location: "Columbus, OH",
  foodType: "Everything",
  age: 28,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "tajtweetstech"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  const url = `http://twitter.com/${user.twitterUsername}`;
  return (
    <div className="App">
      {/* Show user data here */}
      <div className="user-deets">
        <h3>
          <a href={url}>{user.name}</a>
        </h3>

        <p>
          <strong>Location</strong>
          {user.location}
        </p>

        <p>
          <strong>Eats</strong>
          {user.foodType}
        </p>

        <p>
          <strong>Age</strong>
          {user.age}
        </p>

        <p>
          <strong>Likes</strong>
          {user.likes}
        </p>

        <p>
          <strong>Twitter</strong>
          <a href={url}>@{user.twitterUsername}</a>
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
