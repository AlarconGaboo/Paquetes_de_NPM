// index.js
const { autos, animales } = require('./datos');
const _ = require('lodash');

// Usar uniq() para obtener autos únicos
const autosUnicos = _.uniq(autos);

// Usar find() para encontrar los animales salvajes
const animalesSalvajes = _.filter(animales, { tipo: 'salvaje' });

// Mostrar los resultados
console.log('Autos Únicos:', autosUnicos);
console.log('Animales Salvajes:', animalesSalvajes);
