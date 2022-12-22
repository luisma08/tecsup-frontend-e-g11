
  const foods = ({ foods }) => {
    const foodsContainer = document.getElementById('foodsContainer');

    [...foods].forEach((element) => {
        foodsContainer.innerHTML += `
        <div class="col-md-4" key=${element.id}>
          <div class="card bg-dark border border-2 border-light border-opacity-25 mx-auto"
            style="width: min(100%, 18rem);">
            <img src="${element.urlImage}" class="card-img-top" alt="Anime 1" width="256"
              height="144" style="width: 100%; height: 192px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <p class="card-text">${element.description}</p>
              <a href="${element.urlRecipe}" class="btn btn-primary">Receta</a>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  /*const foods = () => {
    
  };*/
  
  export default foods;