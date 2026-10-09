import type { Category } from "./types";

export const categories: Category[] = [
  { id: "geografia", name: "Geografía y naturaleza", description: "Desiertos, cordilleras, glaciares, islas y los ecosistemas que los habitan.", subcategories: ["Relieve y zonas", "Áreas protegidas", "Clima y riesgos naturales"] },
  { id: "historia", name: "Historia de Chile", description: "Desde los pueblos originarios hasta el Chile contemporáneo.", subcategories: ["Pueblos originarios", "Conquista y Colonia", "Independencia y República", "Siglo XX y presente"] },
  { id: "estado", name: "Estado, política y sociedad", description: "Instituciones, procesos constitucionales y debates sociales.", subcategories: ["Instituciones", "Procesos constitucionales", "Sociedad"] },
  { id: "economia", name: "Economía y desarrollo", description: "Minería, agricultura, comercio y desafíos del desarrollo.", subcategories: ["Minería", "Comercio exterior", "Desigualdad y desarrollo"] },
  { id: "cultura", name: "Cultura y vida cotidiana", description: "Ciudades, literatura, música, comida y tradiciones.", subcategories: ["Ciudades", "Literatura y artes", "Tradiciones"] },
  { id: "ciencia", name: "Ciencia, tecnología y futuro", description: "Astronomía, energía, investigación y transición ecológica.", subcategories: ["Astronomía", "Energía", "Medio ambiente"] },
  { id: "mundo", name: "Chile en el mundo", description: "Relaciones internacionales, Antártica y el Pacífico.", subcategories: ["Relaciones exteriores", "Territorio antártico", "Pacífico"] },
];

export const categoryById = (id: string) => categories.find((c) => c.id === id);
