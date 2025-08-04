const materias = [
  // Primer semestre
  { id: "MAT_A", nombre: "Matemática A", creditos: 10, semestre: 1, pre: [] },
  { id: "QUI_GEN_I", nombre: "Química General I", creditos: 7, semestre: 1, pre: [] },
  { id: "BIO_I", nombre: "Introducción a las Ciencias Biológicas I", creditos: 5, semestre: 1, pre: [] },
  { id: "RIESGOS", nombre: "Prevención de Riesgos en el Laboratorio", creditos: 4, semestre: 1, pre: [] },

  // Segundo semestre
  { id: "MAT_B", nombre: "Matemática B", creditos: 6, semestre: 2, pre: ["MAT_A"] },
  { id: "MAT_C", nombre: "Matemática C", creditos: 8, semestre: 2, pre: [] }, // No aparece en el PDF antiguo
  { id: "QUI_GEN_II", nombre: "Química General II", creditos: 8, semestre: 2, pre: ["QUI_GEN_I", "RIESGOS"] },
  { id: "BIO_II", nombre: "Introducción a las Ciencias Biológicas II", creditos: 5, semestre: 2, pre: ["BIO_I", "RIESGOS"] },
  { id: "FIS101", nombre: "Física 101", creditos: 7, semestre: 2, pre: ["MAT_A"] },

  // Tercer semestre
  { id: "QO101", nombre: "Química Orgánica 101", creditos: 11, semestre: 3, pre: ["QUI_GEN_II"] },
  { id: "QA1", nombre: "Química Analítica 1", creditos: 10, semestre: 3, pre: ["QUI_GEN_II"] },
  { id: "QI_T", nombre: "Química Inorgánica (T)", creditos: 6, semestre: 3, pre: ["QUI_GEN_II"] },
  { id: "QI_L", nombre: "Laboratorio de Química Inorgánica", creditos: 5, semestre: 3, pre: [] }, // No especifica prerrequisitos
  { id: "FIS102", nombre: "Física 102", creditos: 7, semestre: 3, pre: ["FIS101"] }, // Asumo que FIS101 equivale a Física 001
  { id: "FISIO", nombre: "Fisiología", creditos: 7, semestre: 3, pre: ["BIO_II"] },

  // Cuarto semestre
  { id: "QO102", nombre: "Química Orgánica 102", creditos: 6, semestre: 4, pre: ["QO101"] },
  { id: "QA2", nombre: "Química Analítica 2", creditos: 7, semestre: 4, pre: ["QA1"] },
  { id: "FQ102", nombre: "Fisicoquímica 102", creditos: 13, semestre: 4, pre: ["MAT_B", "QA1"] },
  { id: "FIS003L", nombre: "Física 003 (L)", creditos: 4, semestre: 4, pre: ["FIS102"] },
  { id: "FISIOPAT", nombre: "Fisiopatología", creditos: 7, semestre: 4, pre: ["FISIO"] },
  { id: "INTRO_MED", nombre: "Introducción al Medicamento", creditos: 2, semestre: 4, pre: [] },

  // Quinto semestre
  { id: "QO103L", nombre: "Química Orgánica 103 (L)", creditos: 5, semestre: 5, pre: ["QO101", "QA1"] },
  { id: "QO104", nombre: "Química Orgánica 104", creditos: 4, semestre: 5, pre: ["QO102"] }, // En PDF antiguo son 3 créditos
  { id: "QA3", nombre: "Química Analítica 3", creditos: 10, semestre: 5, pre: ["QA2"] },
  { id: "FQ103", nombre: "Fisicoquímica 103", creditos: 12, semestre: 5, pre: ["FQ102"] },
  { id: "BIOQ", nombre: "Bioquímica Opción III", creditos: 15, semestre: 5, pre: ["BIO_I", "FQ102", "QO102", "QA2"] }, // ICBI equivale a BIO_I/BIO_II

  // Sexto semestre
  { id: "FARMACOGNOSIA", nombre: "Farmacognosia", creditos: 9, semestre: 6, pre: ["QO103L", "QO104", "QA3"] }, // También requiere Botánica (simultánea)
  { id: "BOTANICA", nombre: "Botánica", creditos: 4, semestre: 6, pre: ["BIO_II", "QO103L", "QO104", "QA3"] },
  { id: "MICROBIO_T", nombre: "Microbiologia General (T)", creditos: 6, semestre: 6, pre: ["BIO_II", "BIOQ"] },
  { id: "MICROBIO_L", nombre: "Laboratorio de Análisis Microbiológico", creditos: 6, semestre: 6, pre: [] }, // No especifica
  { id: "INMUNO1", nombre: "Inmunología 1", creditos: 5, semestre: 6, pre: ["BIO_II", "BIOQ"] }, // En PDF antiguo son 3 créditos
  { id: "FARMACOKINETICA", nombre: "Farmacocinética y Biofarmacia", creditos: 8, semestre: 6, pre: ["FISIO", "MAT_B"] }, // En PDF antiguo son 7 créditos
  { id: "TALLER_INTEG", nombre: "Taller de Integración de Ciencias Biológicas y Biomédicas", creditos: 2, semestre: 6, pre: ["FISIO", "FISIOPAT"] },
  { id: "UC_CALIDAD", nombre: "UC Área Calidad", creditos: 4, semestre: 6, pre: [] }, // No aparece en PDF antiguo

  // Séptimo semestre
  { id: "QF101", nombre: "Química Farmacéutica 101 - Teórico", creditos: 8, semestre: 7, pre: ["QO102", "QO103L", "QO104", "QA3", "FQ102", "FARMACOGNOSIA", "BIOQ"] },
  { id: "QF102", nombre: "Química Farmacéutica 102 - Práctico", creditos: 6, semestre: 7, pre: ["QO102", "QO103L", "QO104", "QA3", "FQ102", "FQ103", "FARMACOGNOSIA", "BIOQ"] }, // En PDF antiguo son 5 créditos
  { id: "FTEC1", nombre: "Farmacotecnia 1", creditos: 10, semestre: 7, pre: ["FARMACOKINETICA", "FARMACOGNOSIA", "BOTANICA", "MICROBIO_T", "QA3", "QI_T", "FQ102", "INTRO_MED"] }, // En PDF antiguo son 8 créditos
  { id: "FARMACO1", nombre: "Farmacología", creditos: 10, semestre: 7, pre: ["QO102", "QO103L", "QO104", "FISIO", "TALLER_INTEG", "BIOQ"] }, // En PDF antiguo son 8 créditos
  { id: "INMUNO2", nombre: "Immunología 2", creditos: 7, semestre: 7, pre: ["INMUNO1"] }, // En PDF antiguo son 5 créditos
  { id: "BROMATO", nombre: "Bromatología y Nutrición", creditos: 4, semestre: 7, pre: ["BIOQ", "MICROBIO_T"] },

  // Octavo semestre
  { id: "FARMACOTERAPIA", nombre: "Farmacoterapia", creditos: 8, semestre: 8, pre: ["FISIOPAT", "FARMACO1", "FARMACOKINETICA"] }, // En PDF antiguo son 7 créditos
  { id: "FTEC2", nombre: "Farmacotecnia 2", creditos: 10, semestre: 8, pre: ["FTEC1"] }, // En PDF antiguo son 8 créditos
  { id: "CONTROL", nombre: "Control de Calidad de Medicamentos I", creditos: 12, semestre: 8, pre: ["MICROBIO_T", "QF101", "QF102", "FTEC1"] }, // En PDF antiguo son 8 créditos
  { id: "TOXICO", nombre: "Toxicologia Fundamental", creditos: 4, semestre: 8, pre: ["QA3", "BIOQ"] },

  // Noveno semestre
  { id: "LEGISLACION", nombre: "Legislación y Deontología", creditos: 6, semestre: 9, pre: ["FTEC2", "FARMACOTERAPIA"] },
  { id: "GESTION2", nombre: "Gestión de Empresas", creditos: 4, semestre: 9, pre: [] },

  // Décimo semestre
  { id: "PRACTICA", nombre: "Practicantado", creditos: 55, semestre: 10, pre: [] } // En PDF antiguo son 50 créditos
];
