# Piedra, Papel o Tijeras 🪨📄✂️

![https://github.com/Alfonso20005/Rock-Paper-Scissors-Game
](imagenes/banner.JPG)

¡Bienvenido al juego de **Piedra, Papel o Tijeras**! Este es un proyecto simple y divertido, desarrollado en HTML, CSS y JavaScript, que te permite jugar contra la computadora en una clásica batalla de azar.

## Descripción del Proyecto 📋

Este juego simula el tradicional juego de **Piedra, Papel o Tijeras**. Al hacer tu elección, el juego genera una respuesta aleatoria de la computadora y muestra quién ganó la partida. La interfaz es dinámica y atractiva, mostrando íconos de cada elección para mejorar la experiencia de juego.

## Características 🌟

- **Interfaz amigable** y fácil de usar.
- **Iconos visuales** para cada elección: piedra, papel y tijeras.
- **Feedback inmediato** del resultado de cada partida.
- **Diseño responsivo**, que se adapta a varios tamaños de pantalla.

## Instrucciones de Instalación 🚀

1. **Descarga** o **clona** este repositorio:
   ```bash
   git clone https://github.com/tu_usuario/Rock-Paper-Scissors-Game.git

2. **Navega hasta la carpeta del proyecto:**
   ```bash
    cd Rock-Paper-Scissors-Game

3. **Abre el archivo `index.html` en tu navegador para iniciar el juego.**
 
  
## Cómo Jugar 🎮
1. Selecciona tu elección: Piedra, Papel o Tijeras.
2. La computadora generará automáticamente su elección.
3. Se mostrará el resultado indicando si ganaste, perdiste o empataste con la computadora.

# Estructura del Proyecto 📁
- `index.html:` Estructura HTML del juego.
- `style.css:` Estilos de la interfaz.
- `script.js:` Lógica del juego y funcionalidad.
- `imagenes/:` Carpeta con iconos SVG de piedra, papel y tijeras.

# Contribuciones 🤝
¡Contribuciones, mejoras y correcciones de errores son bienvenidas! Para contribuir, sigue estos pasos:
1. Realiza un fork del repositorio.
2. Crea una rama para tu contribución:
   ```bash
    git checkout -b feature/nueva-funcionalidad
3. Haz tus cambios y haz un commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   
4. Realiza un push a tu rama
   ```bash
   git push origin feature/nueva-funcionalidad

5. Abre un Pull Request.

#

> [!IMPORTANT]\
> Este juego ha sido creado para utilizarse como juego para una web de compras u otro tipo de cosas, es por ello que solo puedes jugar una vez al dia.
> Si lo quieres tener para poder jugar las veces que quieras tienes que quitar este bloque de codigo:

```bash
const lastPlayedGame1 = localStorage.getItem('lastPlayedDateGame1');
    const currentDate = new Date().toDateString();

    if (lastPlayedGame1 === currentDate) {
        alert("¡Ya has jugado hoy! Vuelve mañana para seguir divirtiéndote.");
        return;
    } else {
        localStorage.setItem('lastPlayedDateGame1', currentDate);
    }
