import React from "react";

const ApodComponent = (props) => {

const {apodData} = props;
console.log(apodData)

return (
<div>
    <h1>{apodData.title}</h1>
    <h2>{apodData.date}</h2>
    <img className="img" src={apodData.url} />
    <p>{apodData.explanation}</p>
</div>
);
};

export default ApodComponent;