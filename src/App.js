import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const getData = () => {
    fetch("data/mato.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
        // console.log("hello", myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h1 className="text-center my-4">Country DropDown Project</h1>
      <div className="container">
        {data && data.length > 0 && (
          <select
            defaultValue=""
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              const conry = data.filter((con) => {
                return con.country === e.target.value;
              });
              if (conry.length) setCountry(conry[0].state);
              else {
                setCountry([]);
                setState([]);
              }
            }}
          >
            <option value="">Open this select menu</option>
            {data.map((item) => (
              <option key={item.country} value={item.country}>
                {item.country}
              </option>
            ))}
          </select>
        )}
        {country && country.length > 0 && (
          <select
            defaultValue=""
            className=" my-4 form-select ms-4 state"
            aria-label="Default select example"
            onChange={(e) => {
              const ste = country.filter((con) => {
                return con.state === e.target.value;
              });
              if (ste.length) setState(ste[0].city);
              else setState([]);
            }}
          >
            <option value="">Open this select menu</option>
            {country.map((item) => (
              <option key={item.state} value={item.state}>
                {item.state}
              </option>
            ))}
          </select>
        )}
        {state && state.length > 0 && (
          <select
            defaultValue=""
            className=" my-4 ms-5 form-select city"
            aria-label="Default select example"
          >
            <option value="">Open this select menu</option>
            {state.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        )}
      </div>
    </>
  );
}

export default App;
