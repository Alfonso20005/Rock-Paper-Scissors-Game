let divButton = document.getElementById("divButton");
let lose = document.getElementById("lose");
let tied = document.getElementById("tied");
let win = document.getElementById("win");

let overlay = document.getElementById("overlay");
let numberDisplay = overlay.querySelector('.number');

// Obtener las imágenes de las manos
let computerHandLeft = document.querySelector('.imagenesIzq');
let userHandRight = document.querySelector('.imagenesDerecha');

divButton.onclick = function(event) {
    const lastPlayedGame1 = localStorage.getItem('lastPlayedDateGame1');
    const currentDate = new Date().toDateString();

    if (lastPlayedGame1 === currentDate) {
        alert("¡Ya has jugado hoy! Vuelve mañana para seguir divirtiéndote.");
        return;
    } else {
        localStorage.setItem('lastPlayedDateGame1', currentDate);
    }

    let ordenador = ["piedra", "papel", "tijeras"];
    let aleatorio = parseInt(Math.random() * 3);
    let posicion = event.target;
    let valorBoton = posicion.value;
    
    if (posicion.tagName == "BUTTON") {
        // Iniciar la cuenta regresiva
        startCountdown(valorBoton, ordenador[aleatorio]);
    }
}

function startCountdown(valorBoton, valorOrdenador) {
    let countdownNumbers = [3, 2, 1];
    let countdownIndex = 0;

    overlay.style.display = "flex";  // Mostrar overlay
    numberDisplay.textContent = countdownNumbers[countdownIndex];

    let countdownInterval = setInterval(function() {
        countdownIndex++;
        if (countdownIndex < countdownNumbers.length) {
            numberDisplay.textContent = countdownNumbers[countdownIndex];
        } else {
            clearInterval(countdownInterval);
            overlay.style.display = "none";  // Ocultar overlay
            mostrarManoUsuario(valorBoton);
            mostrarManoOrdenador(valorOrdenador);
            mostrarResultado(valorBoton, valorOrdenador); // Mostrar el resultado después de la cuenta regresiva
        }
    }, 1000);  // Cambiar número cada segundo
}

function mostrarResultado(valorBoton, valorOrdenador) {
    lose.classList.remove("show");
    tied.classList.remove("show");
    win.classList.remove("show");
    
    if (valorBoton == valorOrdenador) {
        tied.classList.add("show");
    } else if (
        (valorBoton == "tijeras" && valorOrdenador == "piedra") || 
        (valorBoton == "piedra" && valorOrdenador == "papel") || 
        (valorBoton == "papel" && valorOrdenador == "tijeras")
    ) {
        lose.classList.add("show");
    } else {
        win.classList.add("show");
    }
}

// Función para mostrar la mano del usuario
function mostrarManoUsuario(valorBoton) {
    userHandRight.style.top = "";
    // Ocultar todas las manos
    ocultarManos();
    
    switch (valorBoton) {
        case "piedra":
            userHandRight.src = "imagenes/punioDer.svg";
            userHandRight.style.top = "165px";
            break;
        case "papel":
            userHandRight.src = "imagenes/paperDer.svg";
            break;
        case "tijeras":
            userHandRight.src = "imagenes/tijeraDer.svg";
            break;
    }
    userHandRight.hidden = false;
}

// Función para mostrar la mano del ordenador
function mostrarManoOrdenador(valorOrdenador) {
    switch (valorOrdenador) {
        case "piedra":
            computerHandLeft.src = "imagenes/punioIzq.svg";
            break;
        case "papel":
            computerHandLeft.src = "imagenes/paperIzq.svg";
            break;
        case "tijeras":
            computerHandLeft.src = "imagenes/tijeraIzq.svg";
            break;
    }
    computerHandLeft.hidden = false;
}

// Función para ocultar todas las manos
function ocultarManos() {
    userHandRight.hidden = true;
    computerHandLeft.hidden = true;
}
