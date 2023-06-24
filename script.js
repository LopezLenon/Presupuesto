document.addEventListener("DOMContentLoaded", function() {
  var calidadSlider = document.getElementById("calidad-slider");
  var rapidezSlider = document.getElementById("rapidez-slider");
  var descuentoSlider = document.getElementById("descuento-slider");

  var calidadValue = document.getElementById("calidad-value");
  var rapidezValue = document.getElementById("rapidez-value");
  var descuentoValue = document.getElementById("descuento-value");

  // Función para actualizar los valores de los deslizadores y la suma
  function updateValues() {
    var calidad = calidadSlider.valueAsNumber;
    var rapidez = rapidezSlider.valueAsNumber;
    var descuento = descuentoSlider.valueAsNumber;

    var sum = calidad + rapidez + descuento;

    // Si la suma supera 201, ajustamos los valores
    if (sum > 201) {
      var overflow = sum - 201;

      // Ajuste proporcional a los deslizadores
      var factor = 201 / sum;
      calidad *= factor;
      rapidez *= factor;
      descuento *= factor;
    }

    calidadSlider.value = calidad;
    rapidezSlider.value = rapidez;
    descuentoSlider.value = descuento;

    calidadValue.textContent = Math.round(calidad) + "%";
    rapidezValue.textContent = Math.round(rapidez) + "%";
    descuentoValue.textContent = Math.round(descuento / 10) + "%";
  }

  calidadSlider.addEventListener("input", updateValues);
  rapidezSlider.addEventListener("input", updateValues);
  descuentoSlider.addEventListener("input", updateValues);
});
