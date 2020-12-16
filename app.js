const dataSource = "https://8dd462a0f1da.ngrok.io/data/";

let table = document.querySelector("table");

let mountains = [
    { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
    { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
    { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
    { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
    { name: "Monte Amiata", height: 1738, place: "Siena" }
];

let data = Object.keys(mountains[0]);
console.log(data);



// const getData = async() => {
//     return (await fetch(dataSource)).json();
// }


function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }

// getData().then(input=> {
//     input.map(item => {
//         const {end_date, address} = item;
//         console.log("end data", address);
//         var property = document.createElement("p");
//         var textnode = document.createTextNode("Water"); 
//     })
// });