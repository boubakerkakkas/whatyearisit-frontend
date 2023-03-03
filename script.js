  fetch('whatyearisit-backend-orcin.vercel.app/year')
  .then(response => response.json())
  .then(data => {
    console.log(data.year)
    
    // Récupérer l'élément avec l'ID "year"
    document.querySelector('#year').textContent = data.year
  })
  //.catch(error => console.error('Erreur lors de la récupération de l\'année :', error));
