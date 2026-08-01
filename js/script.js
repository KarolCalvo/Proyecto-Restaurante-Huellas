document.getElementById('miFormulario').addEventListener('submit', function(e) {
  e.preventDefault();

  const honeypot = document.getElementById('segundo_apellido').value;
  const mensaje = document.getElementById('mensajeResultado');

  // Si el campo trampa tiene texto, es un bot
  if (honeypot !== '') {
    mensaje.style.color = 'red';
    mensaje.textContent = 'Detección de Spam activa.';
    return;
  }

  // Si está limpio, procesar el registro
  const nombre = document.getElementById('nombre').value;
  mensaje.style.color = 'green';
  mensaje.textContent = `¡Gracias por tu reserva, ${nombre}! Nos pondremos en contacto pronto.`;

  // Limpiar campos
  this.reset();
});