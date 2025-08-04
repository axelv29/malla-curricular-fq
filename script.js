const contenedor = document.getElementById("malla");
const estado = JSON.parse(localStorage.getItem("estadoMaterias")) || {};

function puedeAprobar(materia) {
  return materia.pre.every(id => estado[id]);
}

function render() {
  contenedor.innerHTML = "";

  let creditosTotales = 0;
  
  // Primero agrupamos las materias por semestre
  const materiasPorSemestre = {};
  materias.forEach(m => {
    if (!materiasPorSemestre[m.semestre]) {
      materiasPorSemestre[m.semestre] = [];
    }
    materiasPorSemestre[m.semestre].push(m);
  });

  // Ordenamos los semestres numéricamente
  const semestresOrdenados = Object.keys(materiasPorSemestre).sort((a, b) => a - b);

  // Recorremos los semestres en orden
  semestresOrdenados.forEach(semestre => {
    // Creamos el título del semestre
    const titulo = document.createElement("div");
    titulo.className = "semestre-titulo";
    titulo.textContent = `Semestre ${semestre}`;
    contenedor.appendChild(titulo);

    // Creamos un contenedor para las materias de este semestre
    const contenedorMaterias = document.createElement("div");
    contenedorMaterias.className = "materias-semestre";
    contenedorMaterias.style.display = "flex";
    contenedorMaterias.style.flexWrap = "wrap";
    contenedorMaterias.style.justifyContent = "center";
    contenedorMaterias.style.gap = "15px";
    contenedorMaterias.style.marginBottom = "20px";

    // Procesamos cada materia del semestre actual
    materiasPorSemestre[semestre].forEach(m => {
      const div = document.createElement("div");
      div.className = "materia";
      div.textContent = `${m.nombre}\n${m.creditos} créditos`;

      if (estado[m.id]) {
        div.classList.add("hecha");
        creditosTotales += m.creditos;
      } else if (!puedeAprobar(m)) {
        div.classList.add("bloqueada");
      }

      div.onclick = () => {
        if (!puedeAprobar(m)) return;
        estado[m.id] = !estado[m.id];
        localStorage.setItem("estadoMaterias", JSON.stringify(estado));
        render();
      };

      contenedorMaterias.appendChild(div);
    });

    contenedor.appendChild(contenedorMaterias);
  });

  document.getElementById("creditos-info").innerText =
    `Créditos completados: ${creditosTotales}`;
}

render();
