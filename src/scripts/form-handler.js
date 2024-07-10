document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('http://localhost:3000/api/form/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Datos enviados correctamente', responseData);
      } else {
        console.error('Error al enviar los datos, status:', response.status);
        const errorText = await response.json();
        console.error(errorText);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  });

  const guestNamesDiv = document.getElementById('guestNames');
  const overnightGuestNamesDiv = document.getElementById('overnightGuestNames');
  const peluGuestNamesDiv = document.getElementById('peluGuestNames');
  const allergiesInput = document.getElementById('allergiesInput');
  const guestCountInput = document.getElementById('guestCountInput');
  const guestNoCountInput = document.getElementById('guestNoCountInput');
  const overnightInput = document.getElementById('overnightInput');
  const rowGuests = document.getElementById('guests');
  const rowGuestsNo = document.getElementById('guestsNo');
  const peluInput = document.getElementById('peluInput');
  const attendYes = document.getElementById('attendYes');
  const attendNo = document.getElementById('attendNo');
  const peluSi = document.getElementById('peluSi');
  const peluNo = document.getElementById('peluNo');
  let previousGuestCount = 0;
  let previousOvernightCount = 0;
  let previousPeluCount = 0;

  function addGuestInputs(div, count, previousCount, namePrefix, placeholderPrefix) {
    const inputs = div.querySelectorAll('input[type="text"]');
    if (count < previousCount) {
      for (let i = count; i < previousCount; i++) {
        div.removeChild(inputs[i]);
        div.removeChild(div.lastChild);
      }
    } else {
      for (let i = previousCount; i < count; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = `${namePrefix}${i}`;
        input.placeholder = `${placeholderPrefix} ${i + 1}`;
        div.appendChild(input);
        div.appendChild(document.createElement('br'));
      }
    }
    return count;
  }

  attendYes.addEventListener('change', () => {
    guestCountInput.classList.replace('hiddena', 'visiblea');
    guestNoCountInput.classList.replace('visiblea', 'hiddena');
    overnightInput.classList.replace('hiddena', 'visiblea');
    allergiesInput.classList.replace('hiddena', 'visiblea');
    peluInput.classList.replace('hiddena', 'visiblea');
    rowGuests.classList.replace('hiddena', 'visiblea');
    rowGuestsNo.classList.replace('visiblea', 'hiddena');
    previousGuestCount = addGuestInputs(guestNamesDiv, 1, previousGuestCount, 'nombreInvitado', 'Nombre del invitado');
    previousOvernightCount = addGuestInputs(overnightGuestNamesDiv, 1, previousOvernightCount, 'overnightGuestName', 'Nombre del invitado que se quedará a dormir');
  });

  attendNo.addEventListener('change', () => {
    guestCountInput.classList.replace('visiblea', 'hiddena');
    guestNoCountInput.classList.replace('hiddena', 'visiblea');
    overnightInput.classList.replace('visiblea', 'hiddena');
    allergiesInput.classList.replace('visiblea', 'hiddena');
    peluInput.classList.replace('visiblea', 'hiddena');
    rowGuests.classList.replace('visiblea', 'hiddena');
    rowGuestsNo.classList.replace('hiddena', 'visiblea');
    guestNamesDiv.innerHTML = '';
    overnightGuestNamesDiv.innerHTML = '';
    previousGuestCount = 0;
    previousOvernightCount = 0;
  });

  document.getElementById('guestsCount').addEventListener('input', function() {
    const numGuests = parseInt(this.value) || 0;
    previousGuestCount = addGuestInputs(guestNamesDiv, numGuests, previousGuestCount, 'nombreInvitado', 'Nombre del invitado');
  });

  document.getElementById('overnightCount').addEventListener('input', function() {
    const numOvernight = parseInt(this.value) || 0;
    previousOvernightCount = addGuestInputs(overnightGuestNamesDiv, numOvernight, previousOvernightCount, 'overnightGuestName', 'Nombre del invitado que se quedará a dormir');
  });

  peluSi.addEventListener('change', () => {
    document.getElementById('peluCountNumber').classList.replace('hidden', 'visible');
    peluInput.classList.replace('hidden', 'visible');
    previousPeluCount = addGuestInputs(peluGuestNamesDiv, 1, previousPeluCount, 'peluGuestName', 'Nombre del invitado que quiere peluquería');
  });

  peluNo.addEventListener('change', () => {
    document.getElementById('peluCountNumber').classList.replace('visible', 'hidden');
    peluInput.classList.replace('visible', 'hidden');
    peluGuestNamesDiv.innerHTML = '';
    previousPeluCount = 0;
  });

  document.getElementById('peluCount').addEventListener('input', function() {
    const numPelu = parseInt(this.value) || 0;
    previousPeluCount = addGuestInputs(peluGuestNamesDiv, numPelu, previousPeluCount, 'peluGuestName', 'Nombre del invitado que quiere peluquería');
  });
});
