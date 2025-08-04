const materias = [
  // Primer semestre
  { id: "MAT01", nombre: "Matemática 01", creditos: 14, semestre: 1, pre: [] },
  { id: "QUI_GEN_I", nombre: "Química General I", creditos: 7, semestre: 1, pre: [] },
  { id: "BIO_I", nombre: "Introducción a las Ciencias Biológicas I", creditos: 5, semestre: 1, pre: [] },
  { id: "RIESGOS", nombre: "Prevención de Riesgos en el Laboratorio", creditos: 4, semestre: 1, pre: [] },

  // Segundo semestre
  { id: "MAT02", nombre: "Matemática 02", creditos: 10, semestre: 2, pre: [] },
  { id: "QUI_GEN_II", nombre: "Química General II", creditos: 8, semestre: 2, pre: [] },
  { id: "FIS101", nombre: "Física 101", creditos: 7, semestre: 2, pre: [] },
  { id: "BIO_II", nombre: "Introducción a las Ciencias Biológicas II", creditos: 5, semestre: 2, pre: [] },

  // Tercer semestre
  { id: "QO101", nombre: "Química Orgánica 101", creditos: 11, semestre: 3, pre: [] },
  { id: "QA1", nombre: "Química Analítica 1", creditos: 10, semestre: 3, pre: [] },
  { id: "QI_T", nombre: "Química Inorgánica (T)", creditos: 6, semestre: 3, pre: [] },
  { id: "QI_L", nombre: "Química Inorgánica (L)", creditos: 5, semestre: 3, pre: [] },
  { id: "FIS102", nombre: "Física 102 (Electromagnetismo)", creditos: 7, semestre: 3, pre: [] },
  { id: "FISIO", nombre: "Fisiología", creditos: 7, semestre: 3, pre: [] },

  // Cuarto semestre
  { id: "QO102", nombre: "Química Orgánica 102", creditos: 6, semestre: 4, pre: [] },
  { id: "QA2", nombre: "Química Analítica 2", creditos: 7, semestre: 4, pre: [] },
  { id: "FQ102", nombre: "Fisicoquímica 102", creditos: 13, semestre: 4, pre: [] },
  { id: "FIS003L", nombre: "Física 003L (Laboratorio de Física)", creditos: 4, semestre: 4, pre: [] },
  { id: "FISIOPAT", nombre: "Fisiopatología", creditos: 7, semestre: 4, pre: [] },
  { id: "INTRO_MED", nombre: "Introducción al Medicamento", creditos: 2, semestre: 4, pre: [] },

  // Quinto semestre
  { id: "QO103L", nombre: "Química Orgánica 103 L", creditos: 5, semestre: 5, pre: [] },
  { id: "QO104", nombre: "Química Orgánica 104", creditos: 4, semestre: 5, pre: [] },
  { id: "QA3", nombre: "Química Analítica 3", creditos: 10, semestre: 5, pre: [] },
  { id: "FQ103", nombre: "Fisicoquímica 103", creditos: 12, semestre: 5, pre: [] },
  { id: "BIOQ", nombre: "Bioquímica", creditos: 15, semestre: 5, pre: [] },

  // Sexto semestre
  { id: "FARMACOGNOSIA", nombre: "Farmacognosia", creditos: 9, semestre: 6, pre: [] },
  { id: "BOTANICA", nombre: "Botánica", creditos: 4, semestre: 6, pre: [] },
  { id: "MICROBIO", nombre: "Microbiología General", creditos: 12, semestre: 6, pre: [] },
  { id: "INMUNO1", nombre: "Inmunología 1 (II hem)", creditos: 5, semestre: 6, pre: [] },
  { id: "FARMACOKINETICA", nombre: "Farmacocinética y Biofarmacia", creditos: 8, semestre: 6, pre: [] },
  { id: "GESTION1", nombre: "Introd.a los sistemas de gestión (II hem)", creditos: 4, semestre: 6, pre: [] },
  { id: "TALLER_INTEG", nombre: "Taller de Integración Cs.Biol. y Biomédicas (I hem)", creditos: 2, semestre: 6, pre: [] },

  // Séptimo semestre
  { id: "QF101", nombre: "Química Farmacéutica 101 - Teórico", creditos: 8, semestre: 7, pre: [] },
  { id: "QF102", nombre: "Química Farmacéutica 102 - Práctico", creditos: 6, semestre: 7, pre: [] },
  { id: "FTEC1", nombre: "Farmacotecnia 1", creditos: 10, semestre: 7, pre: [] },
  { id: "FARMACO1", nombre: "Farmacología", creditos: 10, semestre: 7, pre: [] },
  { id: "INMUNO2", nombre: "Inmunología 2", creditos: 7, semestre: 7, pre: [] },
  { id: "BROMATO", nombre: "Bromatología y Nutrición (II hem)", creditos: 4, semestre: 7, pre: [] },

  // Octavo semestre
  { id: "FARMACOTERAPIA", nombre: "Farmacoterapia", creditos: 8, semestre: 8, pre: [] },
  { id: "FTEC2", nombre: "Farmacotecnia 2", creditos: 10, semestre: 8, pre: [] },
  { id: "CONTROL", nombre: "Control de Calidad de Medicamentos", creditos: 12, semestre: 8, pre: [] },
  { id: "TOXICO", nombre: "Toxicología Fundamental", creditos: 4, semestre: 8, pre: [] },

  // Noveno semestre
  { id: "LEGISLACION", nombre: "Legislación y Deontología", creditos: 6, semestre: 9, pre: [] },
  { id: "GESTION2", nombre: "Gestión de Empresas", creditos: 4, semestre: 9, pre: [] },

  // Décimo semestre
  { id: "PRACTICA", nombre: "Internado/Practicantado/Proyecto", creditos: 55, semestre: 10, pre: [] }
];
