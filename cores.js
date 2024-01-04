let isBlackBackground = true;

  function toggleColors() {
    // Alterna entre preto e branco para a cor de fundo
    isBlackBackground = !isBlackBackground;

    // Define a cor de fundo com base na variável isBlackBackground
    document.body.style.backgroundColor = isBlackBackground ? 'black' : 'white';

    // Define a cor do texto oposta à cor de fundo
    document.body.style.color = isBlackBackground ? 'white' : 'black';

    
  }