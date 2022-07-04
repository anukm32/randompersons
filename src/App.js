import React from "react";
import { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");
  const hanleValue = (e) => {
    console.log(e.target)
  };
  return (
    <main>
      <div className="block bcg-black"> </div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">My {title} is </p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button className="icon" data-label="name" onMouseOver={hanleValue}>
              <FaUser />
            </button>
           
            <button className="icon" data-label="email" onMouseOver={hanleValue}>
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label="age" onMouseOver={hanleValue}>
              < FaCalendarTimes />
            </button>
            <button className="icon" data-label="street" onMouseOver={hanleValue}>
              < FaMap />
            </button>
            <button className="icon" data-label="phone" onMouseOver={hanleValue}>
              < FaPhone />
            </button>
            <button className="icon" data-label="password" onMouseOver={hanleValue}>
              <  FaLock />
            </button>
          </div>
         <button className="btn" type="button">
          {loading?"Loading...":'random person'}
         </button>
        </div>
      </div>
    </main>
  );
}

export default App;
