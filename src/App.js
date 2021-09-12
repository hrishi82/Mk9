import "./styles.css";
import React, { useState } from "react";

const genre = {
  Djent: [
    { name: "ERRA", rating: "4.5/5" },
    { name: "Volumes", rating: "4/5" },
    { name: "Periphery", rating: "4.5/5" }
  ],

  kpop: [
    { name: "IU", rating: "5/5" },
    { name: "Red Velvet", rating: "4.5/5" },
    { name: "Chung Ha", rating: "4/5" }
  ],
  Rock: [
    { name: "Def Leppard", rating: "4.5/5" },
    { name: "Journey", rating: "4/5" },
    { name: "The Kooks", rating: "4/5" }
  ]
};

var genreKeys = Object.keys(genre);

export default function App() {
  var [suggestion, setSuggestion] = useState("Djent");

  function clickHandler(item) {
    setSuggestion(item);
  }

  return (
    <div className="App">
      <div className="container">
        <h1 id="heading">🎵 goodMusic</h1>
        <p id="para-txt">Checkout my favourite music bands by genre</p>

        {/* Displays the genres */}
        <div className="genre-key-container">
          {genreKeys.map((item) => {
            return (
              <span className="genre-keys" onClick={() => clickHandler(item)}>
                {item}
              </span>
            );
          })}
        </div>
        <hr></hr>

        {/* Displays the suggestions */}
        <div className="suggestionContainer">
          <ul style={{ paddingInlineStart: "0" }}>
            {genre[suggestion].map((gen) => (
              <li
                key={gen.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 4rem",
                  borderRadius: "5rem"
                }}
              >
                {" "}
                <div style={{ fontSize: "larger" }}> {gen.name} </div>
                <div style={{ fontSize: "smaller" }}> {gen.rating} </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
