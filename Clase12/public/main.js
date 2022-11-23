const socket = io.connect();

const nuevoMensaje = () =>{
    const nombre = document.getElementById('nombre').value
    const mensaje = document.getElementById('mensaje').value

    const valoresInput = {
        nombre: nombre,
        mensaje: mensaje
    }

    socket.emit('mensajesAlServidor', valoresInput)
}

function render(datos) {
    const html = datos.map((elem, index) => {
      console.log(elem)
      return (`
        <div class="contenedorChat">
          <strong class="user">${elem.nombre}:</strong>
          <em class="mensajeEmitido">${elem.mensaje}</em>
        </div>
      `);
    }).join(' ');
  
    document.getElementById('chatVisual').innerHTML = html;
  }
  
  socket.on('mensajesAlCliente', function(data) {
    render(data);
  });
