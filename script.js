//const yearDiv = document.querySelector('#year');

  fetch('whatyearisit-backend-orcin.vercel.app/year')
  .then(response => response.json())
  .then(data => {
    console.log(data.year)
    
    // Récupérer l'élément avec l'ID "year"
    //const yearElement = document.querySelector('#year').textContent
  })
  //.catch(error => console.error('Erreur lors de la récupération de l\'année :', error));
