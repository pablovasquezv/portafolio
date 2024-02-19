document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Validar dirección de correo electrónico
    var emailInput = document.getElementById("email");
    var email = emailInput.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, ingresa una dirección de correo electrónico válida.");
      return;
    }

    // Enviar datos a un correo electrónico
    var formData = new FormData(this);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "enviar_correo.php", true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert("¡Gracias por enviar el formulario! Estaré en contacto con ustedes pronto.");
        // Restablecer el formulario
        document.getElementById("myForm").reset();
      } else {
        alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.");
      }
    };
    xhr.send(formData);
  });