
function calcular() {
    
    var figura = document.getElementById("figura").value;
    var lado1 = document.getElementById("lado1").value;
    var lado2 = document.getElementById("lado2").value;
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    var diametro = document.getElementById("diametro").value;
    var resultado = document.getElementById("resultado");
    
    if (figura === "triangulo") {
      var perimetro = parseFloat(lado1) + parseFloat(lado2) + parseFloat(lado2);
      var area = (parseFloat(base) * parseFloat(altura)) / 2;
    } else if (figura === "cuadrado") {
      var perimetro = 4 * parseFloat(lado1);
      var area = parseFloat(lado1) * parseFloat(lado1);
    } else if (figura === "rectangulo") {
      var perimetro = 2 * parseFloat(lado1) + 2 * parseFloat(lado2);
      var area = parseFloat(base) * parseFloat(altura);
    } else if (figura === "circulo") {
      var perimetro = parseFloat(diametro) * Math.PI;
      var area = Math.PI * parseFloat(lado1) * parseFloat(lado1);
    }
    
    resultado.innerHTML = "El perímetro es: " + perimetro.toFixed(2) + "<br>El área es: " + area.toFixed(2);
  }