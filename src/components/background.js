import React, { useState} from 'react';
import '../App.css';

export function Room() {
    let [isdark, islit] = useState(true);
    let brightness = isdark ? "Dark Mode" : "Light Mode";

    return (
      <div className={`room ${brightness}`}>
        <button onClick={() =>  islit(!isdark)}>{brightness} </button>
      </div>
    );
  }
