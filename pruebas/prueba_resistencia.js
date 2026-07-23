import http from 'k6/http';
//Prueba de resistencia
export let options = {
 vus: 10,
duration: '4m', //tiempo prolongado
};
export default function () {
//Verifica si el sistema aguanta uso constante
http.get('https://test.k6.io');
}