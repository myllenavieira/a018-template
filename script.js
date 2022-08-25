// const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const multiplicaPorTres = (arrayDeNumeros) => {
//   const arrayMultiplicado = [];
//   for (let numero of arrayDeNumeros) {
//     arrayMultiplicado.push(numero * 3);
//   }
//   return arrayMultiplicado;
// }
// // console.log('TRIPLO', multiplicaPorTres(listaNumeros));

// const retornaPares = (arrayDeNumeros) => {
//   const arrayPares = [];

//   for (const numero of arrayDeNumeros) {
//     if (numero % 2 === 0) {
//       arrayPares.push(numero);
//     }
//   }
//   return arrayPares;
// }
// // console.log('PARES', retornaPares(listaNumeros));

// const imprime = (arrayDeNumeros, callback) => {
//   const response = callback(arrayDeNumeros);
//   console.log('CALLBACK', response);
// } 

// imprime(listaNumeros, multiplicaPorTres);
// imprime(listaNumeros, retornaPares);


// //UTILIZANDO MAP
// const multiplicaPorTresComMap = listaNumeros.map((numero, indice, array) => {
//   return numero*3;
// })
// console.log('MAP',multiplicaPorTresComMap);

// //UTILIZANDO FILTER
// const retornaParesComFilter = listaNumeros.filter((numero, indice, array) => {
//   return numero % 2 === 0;
// })
// console.log('FILTER', retornaParesComFilter);

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

//PARTE A
const aumentaVida = (pokemons) => {
  return {
    nome: pokemons.nome,
    tipo: pokemons.tipo,
    vida: 100
  }
}

//PARTE B
const pokemonsVidaCheia = pokemons.map(aumentaVida);
console.log('Pokémons Vida Cheia',pokemonsVidaCheia);

//PARTE C
const pokemonsDeFogo = pokemons.filter((pokemon) => {
  return pokemon.tipo === 'fogo';
});
console.log('FOGO', pokemonsDeFogo);
