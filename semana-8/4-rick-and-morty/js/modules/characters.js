
  const characters = ({ results }) => {
    const foodsContainer = document.getElementById('characterContainer');

    [...results].forEach((element) => {
        const { id, name, location, image, url } = element;
        foodsContainer.innerHTML += `
        <div class="col-md-4" key=${id}>
          <div class="card bg-dark border border-2 border-light border-opacity-25 mx-auto"
            style="width: min(100%, 18rem);">
            <img src="${image}" class="card-img-top" alt="Anime 1" width="256"
              height="144" style="width: 100%; height: 192px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${location.name}</p>
              <a href="${url}" class="btn btn-primary">Api</a>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  /*const foods = () => {
    
  };*/
  
  export default characters;