//const yearDiv = document.querySelector('#year');

  fetch('whatyearisit-backend-orcin.vercel.app')
  .then(response => response.text())
  .then(year => {
    // Récupérer l'élément avec l'ID "year"
    const yearElement = document.querySelector('#year');
    
    // Modifier le contenu de l'élément avec l'année récupérée
    yearElement.textContent = year;
  })
  .catch(error => console.error('Erreur lors de la récupération de l\'année :', error));
