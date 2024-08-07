document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  const errorMessage = document.getElementById('errorMessage');

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
        form.classList.add('oculto');
        successMessage.classList.add('visible');
        successMessage.classList.remove('oculto');
        const responseData = await response.json();
        console.log('Datos enviados correctamente', responseData);
      } else {
        console.error('Error al enviar los datos, status:', response.status);
        const errorText = await response.json();
        console.error(errorText);
        form.classList.add('oculto');
        errorMessage.classList.add('visible');
        errorMessage.classList.remove('oculto');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      errorMessage.classList.add('visible');
      errorMessage.classList.remove('oculto');
    }
  });

  const guestNamesDiv = document.getElementById('guestNames');
  const guestNamesNoAssistDiv = document.getElementById('guestNamesNoAssist');
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
  let previousGuestCountNoAssist = 0;
  let previousOvernightCount = 0;
  let previousPeluCount = 0;

  function addGuestInputs(div, count, previousCount, namePrefix, placeholderPrefix, addCheckboxes = false) {
    const inputs = div.querySelectorAll('input[type="text"]');
    const checkboxes = div.querySelectorAll('input[type="checkbox"]');

    if (count < previousCount) {
      for (let i = count; i < previousCount; i++) {
        div.removeChild(div.lastChild); // Remove line break
        div.removeChild(checkboxes[i * 2 + 1]); // Remove maquillaje checkbox
        div.removeChild(checkboxes[i * 2]); // Remove pelu checkbox
        div.removeChild(div.lastChild); // Remove name input
        div.removeChild(div.lastChild); // Remove container div
      }
    } else {
      for (let i = previousCount; i < count; i++) {
        const containerDiv = document.createElement('div');
        containerDiv.className = 'container-guest-pelu';

        const input = document.createElement('input');
        input.type = 'text';
        input.name = `${namePrefix}${i}`;
        input.placeholder = `${placeholderPrefix} ${i + 1}`;
        containerDiv.appendChild(input);
        
        if (addCheckboxes) {
          const peluDiv = document.createElement('div');
          const peluCheckbox = document.createElement('input');
          peluCheckbox.type = 'checkbox';
          peluCheckbox.name = `${namePrefix}${i}_pelu`;
          const peluLabel = document.createElement('label');
          peluLabel.textContent = 'Peluquería';
          peluDiv.appendChild(peluCheckbox);
          peluDiv.appendChild(peluLabel);
          containerDiv.appendChild(peluDiv);

          const maquillajeDiv = document.createElement('div');
          const maquillajeCheckbox = document.createElement('input');
          maquillajeCheckbox.type = 'checkbox';
          maquillajeCheckbox.name = `${namePrefix}${i}_maquillaje`;
          const maquillajeLabel = document.createElement('label');
          maquillajeLabel.textContent = 'Maquillaje';
          maquillajeDiv.appendChild(maquillajeCheckbox);
          maquillajeDiv.appendChild(maquillajeLabel);
          containerDiv.appendChild(maquillajeDiv);
          
          containerDiv.appendChild(document.createElement('br'));
        } else {
          containerDiv.appendChild(document.createElement('br'));
        }

        div.appendChild(containerDiv);
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
    previousGuestCountNoAssist = addGuestInputs(guestNamesNoAssistDiv, 1, previousGuestCountNoAssist, 'NoAsistenombreInvitado', 'Nombre del invitado que no puede venir');
    guestNamesDiv.innerHTML = '';
    overnightGuestNamesDiv.innerHTML = '';
    previousGuestCount = 0;
    previousOvernightCount = 0;
  });

  document.getElementById('guestsCount').addEventListener('input', function() {
    const numGuests = parseInt(this.value) || 0;
    previousGuestCount = addGuestInputs(guestNamesDiv, numGuests, previousGuestCount, 'nombreInvitado', 'Nombre del invitado');
  });

  document.getElementById('guestsCountNo').addEventListener('input', function() {
    const numGuestsNo = parseInt(this.value) || 0;
    previousGuestCountNoAssist = addGuestInputs(guestNamesNoAssistDiv, numGuestsNo, previousGuestCountNoAssist, 'NoAsistenombreInvitado', 'Nombre del invitado que no puede venir');
  });

  document.getElementById('overnightCount').addEventListener('input', function() {
    const numOvernight = parseInt(this.value) || 0;
    previousOvernightCount = addGuestInputs(overnightGuestNamesDiv, numOvernight, previousOvernightCount, 'overnightGuestName', 'Nombre del invitado que se quedará a dormir');
  });

  peluSi.addEventListener('change', () => {
    document.getElementById('peluCountNumber').classList.replace('hiddena', 'visiblea');
    peluInput.classList.replace('hidden', 'visible');
    previousPeluCount = addGuestInputs(peluGuestNamesDiv, 1, previousPeluCount, 'peluGuestName', 'Nombre del invitado que quiere peluquería o maquillaje', true);
  });

  peluNo.addEventListener('change', () => {
    document.getElementById('peluCountNumber').classList.replace('visiblea', 'hiddena');
    peluGuestNamesDiv.innerHTML = '';
    previousPeluCount = 0;
  });

  document.getElementById('peluCount').addEventListener('input', function() {
    if (previousPeluCount === 0) {
      addPeluHeaders(peluGuestNamesDiv);
    }
    const numPelu = parseInt(this.value) || 0;
    previousPeluCount = addGuestInputs(peluGuestNamesDiv, numPelu, previousPeluCount, 'peluGuestName', 'Nombre del invitado que quiere peluquería o maquillaje', true);
  });
});
