import http from 'k6/http';
 
//Prueba de estrés
export let options = {
  vus: 80, //alta carga de usuarios
  duration: '30s', //tiempo corto pero intenso
};
export default function () {
//Se fuerza el sistema al límite
  http.get('https://test.k6.io')};