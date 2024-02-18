import React from "react";
import "./App.css";
import { useState, useEffect } from "react"
import dataObj  from "./fetchData.js";
import ApodComponent from "./Apod.js";

const App =  () => {
  let [apodData, setapodData] = useState([]);

  useEffect(()=> {

const fetchData = async () => {
try {
  const response = await dataObj.fetchData()
  setapodData(response)
} catch (error) {
  console.log("Olmadı başkan ", error)
}

}
fetchData();
  }, []);
  
  return (
    <div className="App">
      {apodData ? apodData.map((current, index) => <ApodComponent key={index} apodData={current} />)
     : 
    <p>Loading...</p>
    }
    </div>
  );
}

export default App;
