import http from 'k6/http';
//Prueba base
export let options = {
  vus: 2,           //pocos usuarios
  duration: '10s',
};
 
export default function () {
//Medir rendimiento base del sistema
  http.get('https://test.k6.io');
}
