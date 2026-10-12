import atacama from "@/assets/chile1.png";
import paine from "@/assets/chile2.png";
import santiago from "@/assets/chile3.png";
import type { Article } from "./types";

// Aliases para facilitar referencia directa
export const chile1 = atacama;
export const chile2 = paine;
export const chile3 = santiago;

export const images = {
  atacama,
  paine,
  santiago,
  // Aliases adicionales para compatibilidad
  chile1: atacama,
  chile2: paine,
  chile3: santiago,
};

export const articles: Article[] = [
  {
    slug: "desierto-de-atacama",
    title: "Desierto de Atacama",
    category: "geografia",
    subcategory: "Relieve y zonas",
    summary:
      "El desierto no polar más árido del planeta: un laboratorio natural para la astronomía, la geología y la búsqueda de vida en condiciones extremas.",
    image: {
      src: atacama,
      alt: "Formaciones rocosas rojizas del Valle de la Luna bajo un cielo nublado al atardecer",
      credit: "Valle de la Luna, San Pedro de Atacama",
    },
    tags: ["desierto", "norte grande", "clima", "astronomía", "ALMA"],
    places: ["San Pedro de Atacama", "Valle de la Luna", "Antofagasta", "Llano de Chajnantor"],
    people: [],
    sections: [
      {
        heading: "Dónde está",
        paragraphs: [
          "El Desierto de Atacama ocupa gran parte del Norte Grande de Chile, entre la costa del Pacífico y la cordillera de los Andes.",
          "Su paisaje combina planicies, salares, quebradas y volcanes. Lugares como el Valle de la Luna muestran sedimentos plegados y erosionados por el viento durante millones de años.",
        ],
      },
      {
        heading: "Por qué es tan seco",
        paragraphs: [
          "La aridez se explica por la combinación del anticiclón del Pacífico Sur, la corriente de Humboldt y la cordillera de los Andes, que bloquea la entrada de humedad.",
          "En algunas estaciones del interior se registran precipitaciones casi nulas durante largos periodos.",
        ],
      },
    ],
    keyConcepts: [
      { term: "Anticiclón del Pacífico", definition: "Centro de alta presión que genera aire estable y seco sobre el norte de Chile." },
      { term: "Camanchaca", definition: "Neblina costera que aporta humedad a los ecosistemas del litoral desértico." },
      { term: "Salar", definition: "Depresión cubierta de sales formada por evaporación del agua en cuencas cerradas." },
    ],
    review: [
      "¿Qué tres factores explican la aridez del Atacama?",
      "¿Por qué el norte de Chile es atractivo para la astronomía?",
      "¿Qué conflicto existe entre minería y agua en la zona?",
    ],
    references: [
      { author: "ESO", title: "Atacama Large Millimeter/submillimeter Array (ALMA)", publisher: "European Southern Observatory", year: "s.f.", url: "https://www.eso.org/public/teles-instr/alma/" },
      { author: "UNESCO", title: "Settlement and Artificial Mummification of the Chinchorro Culture", publisher: "World Heritage Centre", year: "2021", url: "https://whc.unesco.org/en/list/1634/" },
    ],
    related: ["torres-del-paine", "santiago-de-chile"],
  },
  {
    slug: "torres-del-paine",
    title: "Parque Nacional Torres del Paine",
    category: "geografia",
    subcategory: "Áreas protegidas",
    summary:
      "Granito, glaciares y lagos turquesa en la Patagonia chilena: uno de los paisajes protegidos más reconocidos de Sudamérica.",
    image: {
      src: paine,
      alt: "Cuernos del Paine nevados reflejados en un lago turquesa al amanecer",
      credit: "Cuernos del Paine y lago Pehoé",
    },
    tags: ["patagonia", "parque nacional", "glaciares", "zona austral", "turismo"],
    places: ["Región de Magallanes", "Puerto Natales", "Lago Pehoé", "Glaciar Grey"],
    people: [],
    sections: [
      {
        heading: "Ubicación y origen",
        paragraphs: [
          "El parque se encuentra en la Región de Magallanes y de la Antártica Chilena, al norte de Puerto Natales.",
          "Fue creado en 1959 y la UNESCO lo reconoció como Reserva de la Biosfera en 1978.",
        ],
      },
      {
        heading: "Cómo se formó el paisaje",
        paragraphs: [
          "Las Torres y los Cuernos del Paine son el resultado de una intrusión de magma que se enfrió formando granito.",
          "Los glaciares del área tallaron valles y alimentan lagos cuyo color turquesa se debe a la harina glaciar.",
        ],
      },
    ],
    keyConcepts: [
      { term: "Reserva de la Biosfera", definition: "Territorio reconocido por la UNESCO que combina conservación y uso sostenible." },
      { term: "Harina glaciar", definition: "Sedimento muy fino producido por la abrasión del hielo sobre la roca." },
      { term: "Campo de Hielo Patagónico Sur", definition: "Gran masa de hielo continental compartida por Chile y Argentina." },
    ],
    review: [
      "¿Por qué los Cuernos del Paine tienen dos colores?",
      "¿Qué explica el color turquesa de los lagos?",
      "¿Qué riesgos enfrenta el parque por el turismo?",
    ],
    references: [
      { author: "CONAF", title: "Parque Nacional Torres del Paine", publisher: "Corporación Nacional Forestal", year: "s.f.", url: "https://www.conaf.cl/parques/parque-nacional-torres-del-paine/" },
      { author: "UNESCO", title: "Torres del Paine Biosphere Reserve, Chile", publisher: "Programa MAB", year: "s.f.", url: "https://en.unesco.org/biosphere/lac/torres-del-paine" },
    ],
    related: ["desierto-de-atacama", "santiago-de-chile"],
  },
  {
    slug: "pueblos-originarios",
    title: "Pueblos originarios de Chile",
    category: "historia",
    subcategory: "Pueblos originarios",
    summary:
      "Diez pueblos reconocidos por ley y una historia de presencia milenaria, resistencia y debates actuales sobre derechos y territorio.",
    tags: ["mapuche", "aymara", "rapa nui", "diversidad cultural", "censo"],
    places: ["Araucanía", "Rapa Nui", "Altiplano", "Tierra del Fuego"],
    people: ["Lautaro", "Elisa Loncon"],
    dataNote: "Cifras del Censo 2017 (INE). Los resultados del Censo 2024 pueden actualizar estos valores.",
    sections: [
      {
        heading: "Reconocimiento legal",
        paragraphs: [
          "La Ley Indígena reconoció inicialmente a los pueblos mapuche, aymara, rapa nui, atacameño y otros pueblos.",
          "También creó la Corporación Nacional de Desarrollo Indígena (CONADI).",
        ],
      },
      {
        heading: "Presencia en el territorio",
        paragraphs: [
          "En el Censo 2017, más de 2 millones de personas declararon pertenecer a un pueblo originario.",
          "El pueblo mapuche es el más numeroso en Chile.",
        ],
      },
    ],
    keyConcepts: [
      { term: "Consulta indígena", definition: "Derecho a ser consultados ante medidas que los afectados puedan verse impactados." },
      { term: "CONADI", definition: "Organismo público encargado de la política indígena." },
      { term: "Araucanía", definition: "Territorio histórico y cultural del pueblo mapuche." },
    ],
    review: [
      "¿Cuántos pueblos reconoce hoy la ley chilena?",
      "¿Qué estableció el Convenio 169 de la OIT?",
      "¿Qué fue la ocupación de la Araucanía?",
    ],
    references: [
      { author: "INE", title: "Radiografía de género: pueblos originarios en Chile 2017", publisher: "INE", year: "2018", url: "https://www.ine.gob.cl/estadisticas/sociales/" },
      { author: "BCN", title: "Ley 19.253: establece normas sobre protección, fomento y desarrollo de los indígenas", publisher: "Biblioteca del Congreso Nacional", year: "1993", url: "https://www.bcn.cl/leychile/" },
    ],
    related: ["desierto-de-atacama", "independencia-de-chile"],
  },
  {
    slug: "independencia-de-chile",
    title: "La Independencia de Chile (1810-1823)",
    category: "historia",
    subcategory: "Independencia y República",
    summary:
      "De la Primera Junta Nacional de Gobierno a la proclamación de la independencia: un proceso largo, con avances, derrotas y disputas internas.",
    tags: ["patria vieja", "reconquista", "patria nueva", "siglo XIX"],
    places: ["Santiago", "Chacabuco", "Maipú", "Rancagua"],
    people: ["Bernardo O'Higgins", "José de San Martín", "José Miguel Carrera", "Manuel Rodríguez"],
    sections: [
      {
        heading: "Contexto",
        paragraphs: [
          "En 1808 Napoleón invadió España y forzó la abdicación del rey Fernando VII.",
          "En América, las élites criollas formaron juntas de gobierno que inicialmente declaraban lealtad al monarca.",
        ],
      },
      {
        heading: "Patria Vieja",
        paragraphs: [
          "El 18 de septiembre de 1810 se instaló la Primera Junta Nacional de Gobierno en Santiago.",
          "Las fuerzas realistas derrotaron a los patriotas en Rancagua en 1814.",
        ],
      },
    ],
    keyConcepts: [
      { term: "Cabildo abierto", definition: "Asamblea de vecinos notables convocada para decidir asuntos graves." },
      { term: "Junta de gobierno", definition: "Órgano colegiado que asumió el poder en ausencia del rey." },
      { term: "Director Supremo", definition: "Cargo ejecutivo ejercido por Bernardo O'Higgins entre 1817 y 1823." },
    ],
    review: [
      "¿Por qué la invasión napoleónica afectó a América?",
      "¿Qué ocurrió en Rancagua en 1814?",
      "¿Qué batalla consolidó la independencia?",
    ],
    references: [
      { author: "Memoria Chilena", title: "Independencia de Chile (1810-1823)", publisher: "Biblioteca Nacional de Chile", year: "s.f.", url: "https://www.memoriachilena.gob.cl/" },
      { author: "BCN", title: "Acta de Independencia de Chile", publisher: "Biblioteca del Congreso Nacional", year: "1818", url: "https://www.bcn.cl/historiapolitica/" },
    ],
    related: ["santiago-de-chile", "pueblos-originarios"],
  },
  {
    slug: "santiago-de-chile",
    title: "Santiago de Chile",
    category: "cultura",
    subcategory: "Ciudades",
    summary:
      "Capital fundada en 1541 a los pies de los Andes, hoy concentra cerca del 40% de la población del país.",
    image: {
      src: santiago,
      alt: "Vista aérea de Santiago al atardecer con la Gran Torre Santiago y la cordillera nevada",
      credit: "Santiago y la cordillera de los Andes",
    },
    tags: ["capital", "zona central", "urbanismo", "Región Metropolitana"],
    places: ["Región Metropolitana", "Cerro Santa Lucía", "Río Mapocho"],
    people: ["Pedro de Valdivia"],
    dataNote: "Población según Censo 2017 (INE).",
    sections: [
      {
        heading: "Fundación",
        paragraphs: [
          "Pedro de Valdivia fundó Santiago del Nuevo Extremo el 12 de febrero de 1541.",
          "La ciudad se levantó junto al cerro Huelén, hoy Santa Lucía.",
        ],
      },
      {
        heading: "Una ciudad que concentra el país",
        paragraphs: [
          "La Región Metropolitana tenía más de 7 millones de habitantes en el Censo 2017.",
          "La ciudad está atravesada por el río Mapocho y rodeada por la cordillera de los Andes y la de la Costa.",
        ],
      },
    ],
    keyConcepts: [
      { term: "Centralización", definition: "Concentración de poder, población y recursos en la capital." },
      { term: "Inversión térmica", definition: "Capa de aire cálido que atrapa el aire frío y los contaminantes cerca del suelo." },
    ],
    review: [
      "¿Quién fundó Santiago y en qué año?",
      "¿Qué porcentaje de la población vivía en la Región Metropolitana en 2017?",
      "¿Por qué Santiago sufre contaminación en invierno?",
    ],
    references: [
      { author: "INE", title: "Resultados Censo 2017", publisher: "INE", year: "2018", url: "http://resultados.censo2017.cl/" },
      { author: "Memoria Chilena", title: "Fundación de Santiago", publisher: "Biblioteca Nacional de Chile", year: "s.f.", url: "https://www.memoriachilena.gob.cl/" },
    ],
    related: ["independencia-de-chile", "torres-del-paine"],
  },
];

export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);

export function searchArticles(query: string, category?: string) {
  const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const q = norm(query.trim());

  return articles.filter((a) => {
    if (category && a.category !== category) return false;
    if (!q) return true;

    const hay = norm([a.title, a.summary, a.subcategory, a.category, ...a.tags, ...a.places, ...a.people].join(" "));
    return q.split(/\s+/).every((word) => hay.includes(word));
  });
}
