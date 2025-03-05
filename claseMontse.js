let AnchodePixels = 10;
let AltodePixels = 10;
let contador = 0;  // Contador global de cuadros pintados
let cantidaddePixeles = 10; // Número total de cuadros por fila y columna

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  grilla(100, 100, cantidaddePixeles, color(0, 255, 0));  // Verde
  grilla(100, 200, cantidaddePixeles, color(255, 0, 0));  // Rojo
  grilla(100, 300, cantidaddePixeles, color(0, 255, 150));  // Azul-verde
}

function grilla(x, y, cantidaddePixeles, colorgrilla) {
  // Hacer que los cuadros se pinten de izquierda a derecha
  contador += 0.1;  // Incrementar el contador global (de todos los cuadros)

  // Asegurarnos de que no exceda el número total de cuadros
  if (contador >= cantidaddePixeles * cantidaddePixeles) {
    contador = cantidaddePixeles * cantidaddePixeles; // Detener cuando llegamos al final
  }

  let cuadrosPintados = 0;  // Contador para los cuadros pintados

  // Dibujar los cuadros
  for (let j = 0; j < cantidaddePixeles; j++) {  // Primero recorremos las filas
    for (let i = 0; i < cantidaddePixeles; i++) {  // Luego recorremos las columnas
      cuadrosPintados++;  // Incrementar el contador de cuadros pintados

      if (cuadrosPintados <= contador) {
        fill(colorgrilla);  // Pintamos el cuadro con el color
      } else {
        fill(255);  // Blanco si aún no se ha pintado
      }

      rect(x + AnchodePixels * i, y + AltodePixels * j, AnchodePixels, AltodePixels);
    }
  }
}
