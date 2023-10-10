alert("Bienvenido a docugenerator beta");


//Algoritmo condicional

let boleano = true;
do {
  let usuario = prompt(
    "Ingrese el tipo de usuario \n - Contratante \n - Contratista"
  );
  if (usuario === "Contratante" || usuario === "Contratista") {
    alert("Se seleccionó la opción " + usuario);
    boleano = false;
  } else {
    alert("Ingrese una opción válida");
  }
} while (boleano === true);


//Algoritmo con ciclo

let proyectoNombre;
let valorproyecto = 0;
let valortotalproyecto = 0;
let n = prompt("Ingrese el número de proyectos a relacionar");
for (i = 1; i <= n; i++) {
  let proyectoNombre = prompt("ingrese el nombre proyecto numero " + i);
  let valorproyecto = Number(
    prompt("Ingrese el valor del proyecto " + proyectoNombre)
  );
  valortotalproyecto = valortotalproyecto + valorproyecto;
  let plazoEjecucion = prompt(
    "Ingrese el plazo de ejecución (en meses) del proyecto " + proyectoNombre
  );
}
alert(
  "El valor total en proyectos es equivalente a la suma de $ " +
    valortotalproyecto
);


//Simulador Interactivo

function datosPrincipales() {
  alert("A continuación ingrese la información del Contratante");
  let personaJuridica = prompt(
    "Ingrese nombre de la Persona Jurídica Contratante"
  );
  let documentoJuridica = Number(
    prompt("Ingrese número de documento de la Persona Jurídica Contratante")
  );
  let nombreContratante = prompt(
    "Ingrese nombre del Representante Legal Contratante"
  );
  let documentoContratante = Number(
    prompt("Ingrese número de documento del Representante Legal Contratante")
  );
  let fechaDocumento = prompt("Ingrese fecha dd/mm/yyyy");
  let plazoContrato = prompt("Ingrese el plazo de ejecución dd/mm/yyyy");
  let valorcontrato = prompt("Digite valor de Contrato");
  alert("A continuación ingrese los datos del Contratista");
  let personaJuridicaContratista = prompt(
    "Ingrese nombre de la Persona Jurídica Contratista"
  );
  let documentoJuridicaContratista = Number(
    prompt("Ingrese número de documento de la Persona Jurídica Contratista")
  );
  let nombreContratista = prompt(
    "Ingrese nombre del Representante Legal Contratista"
  );
  let documentoContratista = Number(
    prompt("Ingrese número de documento del Representante Legal Contratista")
  );
  alert(
    "Entre los suscritos a saber: por una parte " +
      personaJuridica +
      ", con número de identificación tributario " +
      documentoJuridica +
      ", Representado Legalmente por " +
      nombreContratante +
      ", identificado(a) con número de documento " +
      documentoContratante +
      ", quien obra en su condición de representante legal y quien para efectos del presente documento se denominará el CONTRATANTE de una parte, y por la otra, " +
      personaJuridicaContratista +
      ", con número de identificación tributario " +
      documentoJuridicaContratista +
      ", Representado Legalmente por " +
      nombreContratista +
      ", identificado(a) con número de documento " +
      documentoContratista +
      ", quien obra en su condición de representante legal y quien para efectos del presente documento se denominará el CONTRATISTA de una parte"
  );
}
datosPrincipales();
