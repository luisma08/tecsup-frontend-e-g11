'use strict';

const POKEMONS_CRUD_DATA = 'pokemons-crud';
const pokemons = JSON.parse(localStorage.getItem(POKEMONS_CRUD_DATA)) ?? [];

const createPokemon = (e) => {
  e.preventDefault();
  const documentFormPokemon = document.forms['formPokemon'];
  const name = documentFormPokemon.name.value;
  const type = documentFormPokemon.type.value;
  const hp = documentFormPokemon.hp.value;
  const attack = documentFormPokemon.attack.value;
  const special = documentFormPokemon.special.value;
  const imgUrl = documentFormPokemon.imgUrl.value;
  pokemons.push({ name, type, hp, attack, special, imgUrl });
  localStorage.setItem(POKEMONS_CRUD_DATA, JSON.stringify(pokemons));
  readPokemons();
};

const readPokemons = () => {
  const tBodyPokemons = document.getElementById('tBodyPokemons');
  tBodyPokemons.innerHTML = '';
  pokemons.forEach((element, index) => {
    const { name, type, hp, attack, special, imgUrl } = element;/** Desectructurar elementos {} par acceder a ellos */
    tBodyPokemons.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${name}</td>
        <td>${type}</td>
        <td>${hp}</td>
        <td>${attack}</td>
        <td>${special}</td>
        <td>
          <img
            src="${imgUrl}"
            alt="${name}" class="img-fluid" style="max-width: 128px;" />
        </td>
        <td>
            <button 
            class="btn btn-info m-1" onclick="readPokemon(${index})">
            ✏
          </button>
          <button 
            class="btn btn-danger m-1" onclick="deletePokemon(${index})">
            🗑
          </button>
        </td>
      </tr>
    `;
  });
};

const readPokemon = (index) => {
    const pokemon = pokemons.find((_, i) => {
    return i === index;
    });
    
    //const pokemon = pokemons.slice(index, index + 1)[0];
    //console.log(pokemon);
    //const documentFormPokemon = getElementById['formPokemon'];

    console.log(pokemon.name);

    const documentFormPokemon = document.forms['formPokemon'];
    const name = documentFormPokemon.name;
    const type = documentFormPokemon.type;
    const hp = documentFormPokemon.hp;
    const attack = documentFormPokemon.attack;
    const special = documentFormPokemon.special;
    const imgUrl = documentFormPokemon.imgUrl;
    const button = document.getElementById('button');

    name.value = pokemon.name;
    type.value = pokemon.type;
    hp.value = pokemon.hp;
    attack.value = pokemon.hp;
    special.value = pokemon.special;
    imgUrl.value = pokemon.imgUrl;
    button.innerText = 'Actualizar';
    
}

const deletePokemon = (index) => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success mx-1',
          cancelButton: 'btn btn-danger mx-1'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Estas seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            pokemons.splice(index, 1);
            localStorage.setItem(POKEMONS_CRUD_DATA, JSON.stringify(pokemons));
            readPokemons();
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'Su archivo ha sido eliminado.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelar',
            'Tu archivo imaginario está a salvo :)',
            'error'
          )
        }
      })
};

const documentReady = () => {
  const formPokemon = document.getElementById('formPokemon');

  readPokemons();
  formPokemon.addEventListener('submit', createPokemon);
};

document.addEventListener('DOMContentLoaded', documentReady);