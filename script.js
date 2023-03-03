const yearDiv = document.querySelector('#year');

fetch('http://localhost:3000/year')
  .then(response => response.text())
  .then(year => {
    yearDiv.innerHTML += year;
  });
