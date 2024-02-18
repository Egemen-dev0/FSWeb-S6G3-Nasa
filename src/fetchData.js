import React from "react";

const myKey = "Iq3Ob16evlcaoASBGaTEc3NmdGDhhOKt9Id08q3O"

let dataObj  = {

fetchData : async () =>{

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      let acquiredData = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${myKey}&count=3`, requestOptions)
        .then(response => response.text())
      
        let result = JSON.parse(acquiredData)
console.log(result)
        return  result    
    }


}

export default dataObj; 