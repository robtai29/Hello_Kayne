import React from 'react';
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";



function HelloWorld(){
  const [data, setData] = useState(null);

  function fetchData(){
    const url = "https://api.kanye.rest";
    fetch(url)
    .then(checkStatus)
    .then((res)=> res.json())
    .then(processData)
    .catch(handleError)
  }

  function checkStatus(result){
    if (!result.ok){
      console.log("something wrong mijo");
    }
    return result;
  }

  function processData(result){
    result=JSON.stringify(result.quote);
    result = result.substring(1);
    result = result.replace('"', '');
    setData(result);
  }

  function handleError(){
    console.log("houston we have a problem");
  }

  useEffect(()=> {
    setTimeout(fetchData, 10000)
  });

  if (data == null){
    return <h1>loading</h1>
  }else {
    return <h1>{data}</h1>
  }

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HelloWorld />);