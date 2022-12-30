import React, { useState } from "react";
import axios from "axios";
import Todo from "./Todo";
import Calculator from "./Calculator";

function MainGrid() {
  const [joke, setJoke] = useState([]);
  const apiLink = "https://icanhazdadjoke.com";

  const fetchData = async () => {
    const response = await axios.get(`${apiLink}`, {
      headers: { Accept: "application/json" },
    });

    //console.log(response.data.joke);

    setJoke([response.data.joke]);
  };

  return (
    <>
      <div className="grid grid-rows-3 gap-2 m-auto mt-24 w-90% lg:grid lg:grid-cols-3">
        <div className="grid-boxar">
          <Todo />
        </div>

        <div className="grid-boxar">
          <Calculator />
        </div>

        <div className="grid-boxar">
          <p>The Daily Dad Joke:</p>

          {joke &&
            joke.map((j, index) => (
              <div className="text-base" key={index}>
                <br />"{j}"
              </div>
            ))}
          <br />
          <button
            onClick={fetchData}
            className="p-2 bg-transparent border border-slate-500 rounded-full hover:bg-slate-900"
          >
            New joke please..
          </button>
        </div>
      </div>
    </>
  );
}

export default MainGrid;
