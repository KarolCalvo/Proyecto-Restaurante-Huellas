import http from 'k6/http';
 
// Prueba de picos
export let options = {
  stages: [
    { duration: '10s', target: 50 }, //carga normal
    { duration: '5s', target: 1000 },//pico fuerte
    { duration: '10s', target: 40 }, //vuelve a normal
  ],
};
 
export default function () {
 
  //Simula comportamiento cambios bruscos de usuarios
  http.get('https://test.k6.io');
}