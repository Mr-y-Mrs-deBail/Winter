const buttonSi = document.getElementById('yes');
    const buttonNo = document.getElementById('no');

    const NoTienesEscapatoria = () => {
      alert('😋♥ Ahora ya no tienes escapatoria mi amor, Uyyyy ahora y siempre serás MÍO!💋');
      alert('😱Tú mío y Yo tuya por siempre😍, y por haber elegido que si😁 voluntariamente, te dedico una linda canción🎶 mi amor uyyyy, Te AmOooooooO❤️ cada milisegundo más y más!');
      location.href = 'https://youtu.be/2OGxjqd8Zt4';
    };

    const EresMio = () => {
      buttonNo.style.position = 'absolute';
      buttonNo.style.top = (Math.random() * window.innerHeight + 'px');
      buttonNo.style.left = (Math.random() * window.innerWidth + 'px');
    };

    buttonSi.addEventListener('click', NoTienesEscapatoria);
    buttonNo.addEventListener('mouseover', EresMio);
