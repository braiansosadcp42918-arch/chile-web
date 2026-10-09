import type { QuizQuestion, TimelineEvent } from "./types";

export const timeline: TimelineEvent[] = [
  { year: "c. 5000 a.C.", period: "Pueblos originarios", title: "Momias Chinchorro", context: "Pescadores de la costa de Arica desarrollan la momificación artificial más antigua conocida.", consequences: "Patrimonio Mundial UNESCO desde 2021.", article: "desierto-de-atacama" },
  { year: "1541", period: "Conquista y Colonia", title: "Fundación de Santiago", context: "Pedro de Valdivia funda Santiago del Nuevo Extremo junto al cerro Huelén.", consequences: "Inicio del dominio colonial español en el valle central.", article: "santiago-de-chile" },
  { year: "1810", period: "Independencia", title: "Primera Junta Nacional de Gobierno", context: "La crisis de la monarquía española impulsa a la élite criolla a formar una junta.", consequences: "Comienza la Patria Vieja.", article: "independencia-de-chile" },
  { year: "1818", period: "Independencia", title: "Proclamación de la Independencia y batalla de Maipú", context: "Tras Chacabuco (1817), O'Higgins proclama la independencia el 12 de febrero.", consequences: "Maipú consolida el triunfo patriota.", article: "independencia-de-chile" },
  { year: "1861-1883", period: "República", title: "Ocupación de la Araucanía", context: "El Estado chileno avanza militarmente sobre territorio mapuche.", consequences: "Pérdida masiva de tierras mapuche y reducciones.", article: "pueblos-originarios" },
  { year: "1879-1884", period: "República", title: "Guerra del Pacífico", context: "Conflicto con Perú y Bolivia por el control de los territorios salitreros.", consequences: "Chile incorpora Tarapacá y Antofagasta; Bolivia pierde su acceso soberano al mar." },
  { year: "1960", period: "Siglo XX", title: "Terremoto de Valdivia", context: "El 22 de mayo se registra un sismo de magnitud 9,5, el mayor medido instrumentalmente.", consequences: "Tsunami transpacífico y cambios en la gestión del riesgo." },
  { year: "1973", period: "Siglo XX", title: "Golpe de Estado", context: "El 11 de septiembre las Fuerzas Armadas derrocan al gobierno de Salvador Allende.", consequences: "Dictadura hasta 1990, con graves violaciones a los derechos humanos documentadas por los informes Rettig y Valech." },
  { year: "1988", period: "Siglo XX", title: "Plebiscito nacional", context: "El 5 de octubre gana la opción «No» a la continuidad de Pinochet.", consequences: "Elecciones en 1989 y retorno a la democracia en 1990." },
  { year: "2010", period: "Presente", title: "Terremoto y tsunami del 27F", context: "Sismo de magnitud 8,8 en la zona centro-sur.", consequences: "Reconstrucción y revisión de los sistemas de alerta de tsunami." },
  { year: "2019", period: "Presente", title: "Estallido social", context: "Desde octubre, protestas masivas por desigualdad y costo de vida.", consequences: "Acuerdo que abre un proceso constitucional." },
  { year: "2022-2023", period: "Presente", title: "Dos propuestas constitucionales rechazadas", context: "En 2022 y 2023 la ciudadanía rechaza los textos propuestos en plebiscitos.", consequences: "Sigue vigente la Constitución de 1980 con sus reformas." },
];

export const quiz: QuizQuestion[] = [
  { id: "q1", level: "básico", question: "¿En qué año se fundó Santiago?", options: ["1492", "1541", "1810", "1818"], answer: 1, explanation: "Pedro de Valdivia fundó Santiago el 12 de febrero de 1541.", article: "santiago-de-chile" },
  { id: "q2", level: "básico", question: "¿En qué región se encuentra Torres del Paine?", options: ["Aysén", "Los Lagos", "Magallanes y de la Antártica Chilena", "Atacama"], answer: 2, explanation: "El parque está en Magallanes, al norte de Puerto Natales.", article: "torres-del-paine" },
  { id: "q3", level: "básico", question: "¿Qué fecha recuerda la Primera Junta Nacional de Gobierno?", options: ["12 de febrero", "5 de abril", "18 de septiembre", "21 de mayo"], answer: 2, explanation: "La Primera Junta se instaló el 18 de septiembre de 1810.", article: "independencia-de-chile" },
  { id: "q4", level: "intermedio", question: "¿Cuál de estos factores NO explica la aridez del Atacama?", options: ["Anticiclón del Pacífico", "Corriente de Humboldt", "Cordillera de los Andes", "Corriente del Golfo"], answer: 3, explanation: "La Corriente del Golfo está en el Atlántico Norte. Las otras tres sí explican la aridez.", article: "desierto-de-atacama" },
  { id: "q5", level: "intermedio", question: "¿Qué batalla consolidó la independencia en 1818?", options: ["Rancagua", "Maipú", "Chacabuco", "Lircay"], answer: 1, explanation: "Maipú (5 de abril de 1818) aseguró el triunfo patriota.", article: "independencia-de-chile" },
  { id: "q6", level: "intermedio", question: "¿Qué causa el color turquesa de los lagos del Paine?", options: ["Algas", "Harina glaciar", "Cobre disuelto", "Reflejo del cielo solamente"], answer: 1, explanation: "Partículas finas de roca molida por glaciares dispersan la luz.", article: "torres-del-paine" },
  { id: "q7", level: "avanzado", question: "¿Qué porcentaje de la población declaró pertenecer a un pueblo originario en el Censo 2017?", options: ["4,6%", "8,1%", "12,8%", "21,3%"], answer: 2, explanation: "2.185.792 personas, el 12,8% (INE, Censo 2017).", article: "pueblos-originarios" },
  { id: "q8", level: "avanzado", question: "¿Qué tratado internacional sobre derechos indígenas ratificó Chile en 2008?", options: ["Convenio 169 de la OIT", "Tratado de Ancón", "Pacto de San José", "Protocolo de Kioto"], answer: 0, explanation: "El Convenio 169 establece, entre otros, el derecho a la consulta previa.", article: "pueblos-originarios" },
];

export function scoreQuiz(questions: QuizQuestion[], answers: Record<string, number>) {
  return questions.reduce((n, q) => n + (answers[q.id] === q.answer ? 1 : 0), 0);
}

export const zones = [
  { id: "norte-grande", name: "Norte Grande", regions: "Arica y Parinacota, Tarapacá, Antofagasta", text: "Desierto absoluto, altiplano, salares y la mayor riqueza minera del país.", articles: ["desierto-de-atacama", "pueblos-originarios"] },
  { id: "norte-chico", name: "Norte Chico", regions: "Atacama, Coquimbo", text: "Valles transversales, clima semiárido y cielos usados por observatorios internacionales.", articles: [] },
  { id: "central", name: "Zona Central", regions: "Valparaíso, Metropolitana, O'Higgins, Maule, Ñuble, Biobío", text: "Clima mediterráneo, valles agrícolas y la mayor concentración de población.", articles: ["santiago-de-chile", "independencia-de-chile"] },
  { id: "sur", name: "Zona Sur", regions: "Araucanía, Los Ríos, Los Lagos", text: "Bosques templados lluviosos, lagos y volcanes; territorio ancestral mapuche.", articles: ["pueblos-originarios"] },
  { id: "austral", name: "Zona Austral", regions: "Aysén, Magallanes y de la Antártica Chilena", text: "Fiordos, campos de hielo y la Patagonia.", articles: ["torres-del-paine"] },
];

export const curiosities = [
  { q: "¿Por qué casi nunca llueve en partes del Atacama?", article: "desierto-de-atacama" },
  { q: "¿Por qué los Cuernos del Paine tienen dos colores?", article: "torres-del-paine" },
  { q: "¿Cuántos pueblos originarios reconoce la ley chilena?", article: "pueblos-originarios" },
  { q: "¿Qué pasó entre la Patria Vieja y la Patria Nueva?", article: "independencia-de-chile" },
];

export const indicators = [
  { label: "Población (Censo 2024)", value: "18.480.432", unit: "habitantes", source: "INE, Censo 2024", url: "https://censo2024.ine.gob.cl/" },
  { label: "Regiones", value: "16", unit: "regiones administrativas", source: "Ley 21.033 (2017), creación de Ñuble", url: "https://www.bcn.cl/leychile/navegar?idNorma=1106358" },
  { label: "Población indígena (2017)", value: "12,8%", unit: "de la población", source: "INE, Censo 2017", url: "http://resultados.censo2017.cl/" },
  { label: "Mayor sismo registrado", value: "9,5", unit: "magnitud, Valdivia 1960", source: "USGS", url: "https://earthquake.usgs.gov/earthquakes/eventpage/official19600522191120_30/executive" },
];

export const regionPopulation2017 = [
  { region: "Metropolitana", value: 7112808 },
  { region: "Valparaíso", value: 1815902 },
  { region: "Biobío", value: 1556805 },
  { region: "Maule", value: 1044950 },
  { region: "Araucanía", value: 957224 },
  { region: "O'Higgins", value: 914555 },
  { region: "Los Lagos", value: 828708 },
  { region: "Coquimbo", value: 757586 },
  { region: "Antofagasta", value: 607534 },
  { region: "Ñuble", value: 480609 },
  { region: "Los Ríos", value: 384837 },
  { region: "Tarapacá", value: 330558 },
  { region: "Atacama", value: 286168 },
  { region: "Arica y Parinacota", value: 226068 },
  { region: "Magallanes", value: 166533 },
  { region: "Aysén", value: 103158 },
];
