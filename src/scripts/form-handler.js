// src/scripts/form-handler.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#contactForm');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Datos enviados correctamente');
      } else {
        console.error('Error al enviar los datos');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  });

  const guestNamesDiv = document.getElementById('guestNames');
  const overnightGuestNamesDiv = document.getElementById('overnightGuestNames');
  const allergiesInput = document.getElementById('allergiesInput');
  const guestCountInput = document.getElementById('guestCountInput');
  const overnightInput = document.getElementById('overnightInput');
  const attendYes = document.getElementById('attendYes');
  const attendNo = document.getElementById('attendNo');
  let previousGuestCount = 0;
  let previousOvernightCount = 0;

  attendYes.addEventListener('change', () => {
    guestCountInput.style.display = 'block';
    overnightInput.style.display = 'block';
    allergiesInput.style.display = 'block';
  });

  attendNo.addEventListener('change', () => {
    guestCountInput.style.display = 'none';
    overnightInput.style.display = 'none';
    allergiesInput.style.display = 'none';
    guestNamesDiv.innerHTML = ''; // Clear guest names
    overnightGuestNamesDiv.innerHTML = ''; // Clear overnight guest names
  });

  document.getElementById('guestsCount').addEventListener('input', function() {
    const numGuests = parseInt(this.value);
    const guestInputs = guestNamesDiv.querySelectorAll('input[type="text"]');

    if (numGuests < previousGuestCount) {
      // If reducing the guest count, remove extra guest inputs
      for (let i = numGuests; i < previousGuestCount; i++) {
        guestNamesDiv.removeChild(guestInputs[i]);
        guestNamesDiv.removeChild(guestNamesDiv.lastChild); // Remove <br> element
      }
    } else {
      // If increasing the guest count, add new guest inputs
      for (let i = previousGuestCount; i < numGuests; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = `nombreInvitado${i}`;
        input.placeholder = `Nombre del invitado ${i + 1}`;
        guestNamesDiv.appendChild(input);
        guestNamesDiv.appendChild(document.createElement('br'));
      }
    }

    previousGuestCount = numGuests;
  });

  document.getElementById('overnightCount').addEventListener('input', function() {
    const numOvernight = parseInt(this.value);
    const overnightInputs = overnightGuestNamesDiv.querySelectorAll('input[type="text"]');

    if (numOvernight < previousOvernightCount) {
      // If reducing the overnight guest count, remove extra inputs
      for (let i = numOvernight; i < previousOvernightCount; i++) {
        overnightGuestNamesDiv.removeChild(overnightInputs[i]);
        overnightGuestNamesDiv.removeChild(overnightGuestNamesDiv.lastChild); // Remove <br> element
      }
    } else {
      // If increasing the overnight guest count, add new inputs
      for (let i = previousOvernightCount; i < numOvernight; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = `overnightGuestName${i}`;
        input.placeholder = `Nombre del invitado ${i + 1} que se quedará a dormir`;
        overnightGuestNamesDiv.appendChild(input);
        overnightGuestNamesDiv.appendChild(document.createElement('br'));
      }
    }

    previousOvernightCount = numOvernight;
  });
});
