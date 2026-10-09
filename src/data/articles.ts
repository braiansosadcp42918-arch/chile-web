import atacama from "@/assets/chile1.png.asset.json";
import paine from "@/assets/chile2.png.asset.json";
import santiago from "@/assets/chile3.png.asset.json";
import type { Article } from "./types";

export const images = { atacama: atacama.url, paine: paine.url, santiago: santiago.url };

export const articles: Article[] = [
  {
    slug: "desierto-de-atacama",
    title: "Desierto de Atacama",
    category: "geografia",
    subcategory: "Relieve y zonas",
    summary: "El desierto no polar más árido del planeta: un laboratorio natural para la astronomía, la geología y la búsqueda de vida en condiciones extremas.",
    image: { src: atacama.url, alt: "Formaciones rocosas rojizas del Valle de la Luna bajo un cielo nublado al atardecer", credit: "Valle de la Luna, San Pedro de Atacama" },
    tags: ["desierto", "norte grande", "clima", "astronomía", "ALMA"],
    places: ["San Pedro de Atacama", "Valle de la Luna", "Antofagasta", "Llano de Chajnantor"],
    people: [],
    sections: [
      { heading: "Dónde está", paragraphs: [
        "El Desierto de Atacama ocupa gran parte del Norte Grande de Chile, entre la costa del Pacífico y la cordillera de los Andes. Abarca principalmente las regiones de Arica y Parinacota, Tarapacá, Antofagasta y el norte de Atacama.",
        "Su paisaje combina planicies, salares, quebradas y volcanes. Lugares como el Valle de la Luna, cerca de San Pedro de Atacama, muestran sedimentos plegados y erosionados por el viento durante millones de años.",
      ]},
      { heading: "Por qué es tan seco", paragraphs: [
        "La aridez se explica por la combinación de tres factores: el anticiclón del Pacífico Sur, que mantiene un aire estable y descendente; la corriente de Humboldt, que enfría el mar y limita la evaporación; y la cordillera de los Andes, que bloquea la humedad proveniente del Atlántico y la Amazonía.",
        "En algunas estaciones del interior se han registrado promedios de precipitación prácticamente nulos durante largos períodos. En la costa, la neblina llamada camanchaca es una fuente de humedad que permite la existencia de ecosistemas de oasis de niebla.",
      ]},
      { heading: "Un territorio habitado", paragraphs: [
        "El desierto no está vacío. El pueblo lickanantay (atacameño) habita desde hace milenios los oasis y quebradas de la cuenca del Salar de Atacama, donde desarrolló agricultura en terrazas, ganadería de camélidos y redes de intercambio.",
        "La cultura Chinchorro, en la costa de Arica, elaboró momias artificiales hace unos 7.000 años, más antiguas que las egipcias. Sus asentamientos fueron declarados Patrimonio Mundial por la UNESCO en 2021.",
      ]},
      { heading: "Ciencia bajo cielos limpios", paragraphs: [
        "La sequedad del aire, la altitud y la escasa contaminación lumínica hacen del norte de Chile uno de los mejores lugares del mundo para observar el cielo. En el Llano de Chajnantor, a unos 5.000 metros de altitud, opera ALMA, un conjunto de 66 antenas que observa el universo en longitudes de onda milimétricas.",
        "Científicos de la NASA también han estudiado los suelos del Atacama como análogos de Marte para probar instrumentos de detección de vida.",
      ]},
    ],
    deeper: { heading: "Para profundizar: minería y agua", paragraphs: [
      "El Atacama concentra grandes yacimientos de cobre, como Chuquicamata y Escondida, y salares con importantes reservas de litio. Estas actividades son claves para la economía chilena, pero compiten por un recurso escaso: el agua.",
      "Comunidades indígenas, científicos y autoridades debaten sobre el impacto de la extracción de salmuera y agua en los humedales altoandinos, donde viven especies como los flamencos andinos.",
    ]},
    keyConcepts: [
      { term: "Anticiclón del Pacífico", definition: "Centro de alta presión que genera aire estable y seco sobre el norte de Chile." },
      { term: "Camanchaca", definition: "Neblina costera densa que aporta humedad a ecosistemas del litoral desértico." },
      { term: "Salar", definition: "Depresión cubierta de sales que se forma por evaporación del agua en cuencas cerradas." },
    ],
    review: ["¿Qué tres factores explican la aridez del Atacama?", "¿Por qué el norte de Chile es atractivo para la astronomía?", "¿Qué conflicto existe entre minería y agua en la zona?"],
    references: [
      { author: "ESO", title: "Atacama Large Millimeter/submillimeter Array (ALMA)", publisher: "European Southern Observatory", year: "s.f.", url: "https://www.eso.org/public/teles-instr/alma/" },
      { author: "NASA", title: "Atacama Rover Astrobiology Drilling Studies (ARADS)", publisher: "NASA Ames Research Center", year: "s.f.", url: "https://www.nasa.gov/ames/arads" },
      { author: "UNESCO", title: "Settlement and Artificial Mummification of the Chinchorro Culture", publisher: "World Heritage Centre", year: "2021", url: "https://whc.unesco.org/en/list/1634/" },
    ],
    related: ["pueblos-originarios", "torres-del-paine"],
  },
  {
    slug: "torres-del-paine",
    title: "Parque Nacional Torres del Paine",
    category: "geografia",
    subcategory: "Áreas protegidas",
    summary: "Granito, glaciares y lagos turquesa en la Patagonia chilena: uno de los paisajes protegidos más reconocidos de Sudamérica.",
    image: { src: paine.url, alt: "Cuernos del Paine nevados reflejados en un lago turquesa al amanecer, con arbustos en primer plano", credit: "Cuernos del Paine y lago Pehoé" },
    tags: ["patagonia", "parque nacional", "glaciares", "zona austral", "turismo"],
    places: ["Región de Magallanes", "Puerto Natales", "Lago Pehoé", "Glaciar Grey"],
    people: [],
    sections: [
      { heading: "Ubicación y origen", paragraphs: [
        "El parque se encuentra en la Región de Magallanes y de la Antártica Chilena, al norte de Puerto Natales. Fue creado en 1959 y su administración depende de la Corporación Nacional Forestal (CONAF).",
        "En 1978 la UNESCO lo reconoció como Reserva de la Biosfera, un estatus que busca compatibilizar conservación, investigación y desarrollo sostenible.",
      ]},
      { heading: "Cómo se formó el paisaje", paragraphs: [
        "Las Torres y los Cuernos del Paine son el resultado de una intrusión de magma que se enfrió bajo tierra formando granito. La erosión posterior retiró las rocas sedimentarias más blandas, que hoy se ven como capas oscuras en las cumbres de los Cuernos.",
        "Los glaciares, como el Grey, que descienden del Campo de Hielo Patagónico Sur, tallaron valles y alimentan lagos cuyo color turquesa se debe a la harina glaciar: partículas finas de roca en suspensión.",
      ]},
      { heading: "Flora y fauna", paragraphs: [
        "En el parque conviven estepa patagónica, matorrales y bosques de lenga y ñirre. Es un buen lugar para observar guanacos, cóndores andinos, ñandúes y, con suerte, pumas.",
      ]},
      { heading: "Desafíos de conservación", paragraphs: [
        "El aumento del turismo exige regular senderos y campamentos. Además, el parque ha sufrido incendios forestales provocados por visitantes, como los de 2005 y 2011-2012, que afectaron miles de hectáreas y cuya recuperación tarda décadas en este clima frío.",
      ]},
    ],
    keyConcepts: [
      { term: "Reserva de la Biosfera", definition: "Territorio reconocido por la UNESCO que combina conservación y uso sostenible." },
      { term: "Harina glaciar", definition: "Sedimento muy fino producido por la abrasión del hielo sobre la roca." },
      { term: "Campo de Hielo Patagónico Sur", definition: "Gran masa de hielo continental compartida por Chile y Argentina." },
    ],
    review: ["¿Por qué los Cuernos del Paine tienen dos colores?", "¿Qué explica el color turquesa de los lagos?", "¿Qué riesgos enfrenta el parque por el turismo?"],
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
    summary: "Diez pueblos reconocidos por ley y una historia de presencia milenaria, resistencia y debates actuales sobre derechos y territorio.",
    tags: ["mapuche", "aymara", "rapa nui", "diversidad cultural", "censo"],
    places: ["Araucanía", "Rapa Nui", "Altiplano", "Tierra del Fuego"],
    people: ["Lautaro", "Elisa Loncon"],
    dataNote: "Cifras del Censo 2017 (INE). Los resultados del Censo 2024 pueden actualizar estos valores.",
    sections: [
      { heading: "Reconocimiento legal", paragraphs: [
        "La Ley Indígena (Ley 19.253, de 1993) reconoció inicialmente a los pueblos mapuche, aymara, rapa nui, atacameño (lickanantay), quechua, colla, kawésqar y yagán. Posteriormente se sumaron los diaguita (2006), chango (2020) y selk'nam (2023).",
        "La ley también creó la Corporación Nacional de Desarrollo Indígena (CONADI). En 2008 Chile ratificó el Convenio 169 de la OIT, que establece el derecho a la consulta previa.",
      ]},
      { heading: "Presencia en el territorio", paragraphs: [
        "En el Censo 2017, 2.185.792 personas (12,8% de la población) declararon pertenecer a un pueblo originario. El pueblo mapuche es el más numeroso, con cerca del 80% de ese total.",
        "Los aymara y quechua habitan principalmente el altiplano del norte; los rapa nui, la isla de Pascua; y los kawésqar y yaganes, los canales australes.",
      ]},
      { heading: "Historia de resistencia", paragraphs: [
        "El pueblo mapuche resistió la conquista española durante siglos; el río Biobío funcionó como frontera, y la Corona firmó parlamentos con autoridades mapuche. Tras la independencia, el Estado chileno ocupó militarmente la Araucanía entre 1861 y 1883, proceso que redujo drásticamente las tierras mapuche.",
        "En el extremo sur, los selk'nam sufrieron un genocidio a fines del siglo XIX y comienzos del XX vinculado a la expansión ganadera.",
      ]},
      { heading: "Debates contemporáneos", paragraphs: [
        "Las demandas de restitución de tierras, el reconocimiento constitucional y la autonomía siguen abiertas. En la Convención Constitucional de 2021 hubo 17 escaños reservados para pueblos originarios, y su primera presidenta fue la académica mapuche Elisa Loncon.",
      ]},
    ],
    keyConcepts: [
      { term: "Consulta indígena", definition: "Derecho de los pueblos a ser consultados ante medidas que los afecten (Convenio 169 OIT)." },
      { term: "Ocupación de la Araucanía", definition: "Campaña estatal (1861-1883) que incorporó el territorio mapuche al Estado chileno." },
      { term: "CONADI", definition: "Organismo público encargado de la política indígena, creado en 1993." },
    ],
    review: ["¿Cuántos pueblos reconoce hoy la ley chilena?", "¿Qué estableció el Convenio 169 de la OIT?", "¿Qué fue la ocupación de la Araucanía?"],
    references: [
      { author: "Instituto Nacional de Estadísticas", title: "Radiografía de género: pueblos originarios en Chile 2017", publisher: "INE", year: "2018", url: "https://www.ine.gob.cl/estadisticas/sociales/censos-de-poblacion-y-vivienda" },
      { author: "Biblioteca del Congreso Nacional", title: "Ley 19.253: establece normas sobre protección, fomento y desarrollo de los indígenas", publisher: "BCN", year: "1993", url: "https://www.bcn.cl/leychile/navegar?idNorma=30620" },
      { author: "Museo Chileno de Arte Precolombino", title: "Pueblos originarios", publisher: "Chile Precolombino", year: "s.f.", url: "https://chileprecolombino.cl/pueblos-originarios/" },
    ],
    related: ["desierto-de-atacama", "independencia-de-chile"],
  },
  {
    slug: "independencia-de-chile",
    title: "La Independencia de Chile (1810-1823)",
    category: "historia",
    subcategory: "Independencia y República",
    summary: "De la Primera Junta Nacional de Gobierno a la proclamación de la independencia: un proceso largo, con avances, derrotas y disputas internas.",
    tags: ["patria vieja", "reconquista", "patria nueva", "siglo XIX"],
    places: ["Santiago", "Chacabuco", "Maipú", "Rancagua"],
    people: ["Bernardo O'Higgins", "José de San Martín", "José Miguel Carrera", "Manuel Rodríguez"],
    sections: [
      { heading: "Contexto", paragraphs: [
        "En 1808 Napoleón invadió España y forzó la abdicación del rey Fernando VII. En toda América, las élites criollas formaron juntas de gobierno que inicialmente declaraban lealtad al rey cautivo, pero abrieron el camino hacia la autonomía.",
      ]},
      { heading: "Patria Vieja (1810-1814)", paragraphs: [
        "El 18 de septiembre de 1810 un cabildo abierto en Santiago instaló la Primera Junta Nacional de Gobierno. En 1811 se reunió el primer Congreso Nacional y José Miguel Carrera impulsó medidas como la creación de símbolos patrios y la imprenta, que permitió publicar La Aurora de Chile.",
        "Las fuerzas realistas enviadas desde el Virreinato del Perú derrotaron a los patriotas en Rancagua en octubre de 1814.",
      ]},
      { heading: "Reconquista (1814-1817)", paragraphs: [
        "Durante la restauración del dominio español, muchos patriotas fueron perseguidos o exiliados a Mendoza. Allí, Bernardo O'Higgins y José de San Martín organizaron el Ejército de los Andes, mientras guerrilleros como Manuel Rodríguez hostigaban a las autoridades realistas.",
      ]},
      { heading: "Patria Nueva (1817-1823)", paragraphs: [
        "Tras cruzar la cordillera, el Ejército de los Andes venció en Chacabuco el 12 de febrero de 1817. O'Higgins asumió como Director Supremo y el 12 de febrero de 1818 se proclamó solemnemente la independencia. La victoria en Maipú, el 5 de abril de 1818, la consolidó en el centro del país.",
        "O'Higgins abdicó en 1823 en medio de tensiones políticas, dando paso a un período de ensayos institucionales.",
      ]},
    ],
    keyConcepts: [
      { term: "Cabildo abierto", definition: "Asamblea de vecinos notables convocada para decidir asuntos graves." },
      { term: "Junta de gobierno", definition: "Órgano colegiado que asumió el poder en ausencia del rey." },
      { term: "Director Supremo", definition: "Cargo ejecutivo que ejerció O'Higgins entre 1817 y 1823." },
    ],
    review: ["¿Por qué la invasión napoleónica afectó a América?", "¿Qué ocurrió en Rancagua en 1814?", "¿Qué batalla consolidó la independencia?"],
    references: [
      { author: "Memoria Chilena", title: "Independencia de Chile (1810-1823)", publisher: "Biblioteca Nacional de Chile", year: "s.f.", url: "https://www.memoriachilena.gob.cl/602/w3-article-3371.html" },
      { author: "Biblioteca del Congreso Nacional", title: "Acta de Independencia de Chile", publisher: "BCN", year: "1818", url: "https://www.bcn.cl/historiapolitica/" },
    ],
    related: ["santiago-de-chile", "pueblos-originarios"],
  },
  {
    slug: "santiago-de-chile",
    title: "Santiago de Chile",
    category: "cultura",
    subcategory: "Ciudades",
    summary: "Capital fundada en 1541 a los pies de los Andes, hoy concentra cerca del 40% de la población del país.",
    image: { src: santiago.url, alt: "Vista aérea de Santiago al atardecer con la Gran Torre Santiago y la cordillera nevada", credit: "Santiago y la cordillera de los Andes" },
    tags: ["capital", "zona central", "urbanismo", "Región Metropolitana"],
    places: ["Región Metropolitana", "Cerro Santa Lucía", "Río Mapocho"],
    people: ["Pedro de Valdivia"],
    dataNote: "Población según Censo 2017 (INE).",
    sections: [
      { heading: "Fundación", paragraphs: [
        "Pedro de Valdivia fundó Santiago del Nuevo Extremo el 12 de febrero de 1541 junto al cerro Huelén, hoy Santa Lucía, en un valle habitado por comunidades indígenas vinculadas al Tawantinsuyu incaico. En septiembre de ese año, la ciudad fue atacada y destruida por fuerzas indígenas lideradas por Michimalonco.",
      ]},
      { heading: "Una ciudad que concentra el país", paragraphs: [
        "La Región Metropolitana tenía 7.112.808 habitantes en el Censo 2017, el 40,5% de la población nacional. Esta concentración se refleja en la centralización política, económica y cultural.",
        "La ciudad está atravesada por el río Mapocho y rodeada por la cordillera de los Andes y la de la Costa, lo que, junto a la inversión térmica invernal, favorece episodios de contaminación atmosférica.",
      ]},
      { heading: "Transformaciones urbanas", paragraphs: [
        "El Metro de Santiago comenzó a operar en 1975 y es hoy la principal red de transporte masivo del país. La Gran Torre Santiago, inaugurada en 2014, con unos 300 metros, es uno de los edificios más altos de América Latina.",
        "Al mismo tiempo, la ciudad presenta marcadas diferencias territoriales en acceso a áreas verdes, servicios y tiempos de viaje entre comunas.",
      ]},
    ],
    keyConcepts: [
      { term: "Centralización", definition: "Concentración de poder, población y recursos en la capital." },
      { term: "Inversión térmica", definition: "Capa de aire cálido que atrapa el aire frío y los contaminantes cerca del suelo." },
    ],
    review: ["¿Quién fundó Santiago y en qué año?", "¿Qué porcentaje de la población vivía en la Región Metropolitana en 2017?", "¿Por qué Santiago sufre contaminación en invierno?"],
    references: [
      { author: "Instituto Nacional de Estadísticas", title: "Resultados Censo 2017", publisher: "INE", year: "2018", url: "http://resultados.censo2017.cl/" },
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
    return q.split(/\s+/).every((w) => hay.includes(w));
  });
}
