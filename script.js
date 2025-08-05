const contenedor = document.getElementById("malla");
const estado = JSON.parse(localStorage.getItem("estadoMaterias")) || {};

function puedeAprobar(materia) {
  return materia.pre.every(id => estado[id]);
}
function reiniciarProgreso() {
  if (confirm("¿Estás seguro que quieres reiniciar todo tu progreso?")) {
    localStorage.removeItem("estadoMaterias");
    estado = {};
    
    // Actualizar todas las materias visualmente
    document.querySelectorAll('.materia').forEach(materia => {
      materia.classList.remove('hecha');
      materia.classList.add('bloqueada');
    });
    
    // Actualizar el contador de créditos
    document.getElementById("creditos-info").innerText = "Créditos completados: 0";
    
    // Re-evaluar el estado de bloqueo de todas las materias
    materias.forEach(m => {
      const elemento = document.getElementById(m.id);
      if (elemento) {
        if (puedeAprobar(m)) {
          elemento.classList.remove('bloqueada');
        }
      }
    });
  }
}

// Agregar evento al botón
document.getElementById("reiniciar-btn").addEventListener("click", reiniciarProgreso);

function render() {
  contenedor.innerHTML = "";

  let creditosTotales = 0;
  
  // Agrupamos las materias por semestre
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
      
      // Nueva estructura con divs separados para nombre y créditos
      div.innerHTML = `
        <div class="materia-nombre">${m.nombre}</div>
        <div class="materia-creditos">${m.creditos} créditos</div>
      `;

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
