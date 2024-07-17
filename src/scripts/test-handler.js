document.addEventListener('DOMContentLoaded', function () {
    const formCancion = document.getElementById('cancionForm');
  
    formCancion.addEventListener('submit', async function (event) {
      event.preventDefault();
      const formDataCancion = new FormData(formCancion);
      const data = Object.fromEntries(formDataCancion.entries());
  
      console.log(data);
  
      try {
        const response = await fetch('http://localhost:3000/api/music/form-cancion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          const responseData = await response.json();
          console.log('Datos enviados correctamente', responseData);
          alert('Canción guardada exitosamente');
        } else {
          console.error('Error al enviar los datos, status:', response.status);
          const errorText = await response.json();
          console.error(errorText);
          alert('Error al guardar la canción');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
        alert('Error al enviar la solicitud');
      }
    });
  });
