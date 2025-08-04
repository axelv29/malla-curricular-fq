const contenedor = document.getElementById("malla");
const estado = JSON.parse(localStorage.getItem("estadoMaterias")) || {};

function puedeAprobar(materia) {
  return materia.pre.every(id => estado[id]);
}

function faltantes(materia) {
  return materia.pre.filter(id => !estado[id]);
}

function render() {
  contenedor.innerHTML = "";

  let creditosTotales = 0;
  let semestreActual = 0;

  materias.forEach(m => {
    if (m.semestre !== semestreActual) {
      semestreActual = m.semestre;
      const titulo = document.createElement("div");
      titulo.className = "semestre-titulo";
      titulo.textContent = `Semestre ${semestreActual}`;
      contenedor.appendChild(titulo);
    }

    const div = document.createElement("div");
    div.className = "materia";
    div.textContent = `${m.nombre}\n(${m.creditos} créditos)`;

    if (estado[m.id]) {
      div.classList.add("hecha");
      creditosTotales += m.creditos;
    } else if (!puedeAprobar(m)) {
      div.classList.add("bloqueada");
    }

    div.onclick = () => {
      if (!estado[m.id] && !puedeAprobar(m)) {
        const faltan = faltantes(m).map(id => {
          const mat = materias.find(mm => mm.id === id);
          return mat ? mat.nombre : id;
        }).join(", ");
        alert(`No puedes cursar "${m.nombre}" hasta completar: ${faltan}`);
        return;
      }

      estado[m.id] = !estado[m.id];
      localStorage.setItem("estadoMaterias", JSON.stringify(estado));
      render();
    };

    contenedor.appendChild(div);
  });

  document.getElementById("creditos-info").innerText =
    `Créditos completados: ${creditosTotales}`;
}

render();
