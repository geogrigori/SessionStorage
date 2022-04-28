import React from "react";

/* setData() {

  //set data with localstorage
  localStorage.setItem('myData', true);

}

getData() {

  let data = localStorage.getItem('myData');
  console.log(data);

} */

export default function App(params) {
  function setData() {
    let obj = { nome: "Geovana", idade: 18, email: "meuemail@mail.com" };
    localStorage.setItem("myData", JSON.stringify(obj));
    console.log(obj);

    sessionStorage.setItem("mySessionStorageData", JSON.stringify(obj));
  }

  function getData() {
    let data = sessionStorage.getItem("mySessionStorageData");
    data = JSON.parse(data);
    console.log(data.nome);
  }

  return (
    <div className="App">
      <button onClick={setData}>Set Data</button>
      <button onClick={getData}>Get Data</button>
    </div>
  );
}
