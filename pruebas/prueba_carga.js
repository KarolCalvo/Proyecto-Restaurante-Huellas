import http from 'k6/http';
// Prueba de carga básica
export let options = {
  vus: 40,//usuarios simultáneos
  duration: '50s', //tiempo de ejecución
};
export default function () {
 //Simula múltiples usuarios entrando
  http.get('https://test.k6.io');
}