//const data = C:\Users\ASCStudent\Documents\visdata\index.html
//console.log(data.results.gender);
//let propic = document.createElement("img");
//propic.src = data.results.picture.large;
//document.body.appendChild(propic);
//let h = document.createElement("h1");
//h.innerText = data.results.gender
//document.body.appendChild(h)
// h.appendChild(t);
function fetchFemale(){
  fetch('https://randomuser.me/api/?gender=female')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    renderData(myJson)
    console.log(myJson);
  })
}
function fetchMale(){
  fetch('https://randomuser.me/api/?gender=male')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    renderData(myJson)
    console.log(myJson);
  })
}
function renderData(data){
  const propic = document.createElement('img')
  propic.src = data.results[0].picture.large
  document.body.appendChild(propic)
  const h = document.createElement('h1')
  h.innerText = data.results[0].name.first
  document.body.appendChild(h)
  const p = document.createElement('h2')
  p.innerText = data.results[0].gender
  document.body.appendChild(p)
}