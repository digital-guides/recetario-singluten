import { Category, Recipe } from "@/types/recipe";

// Categorías de ejemplo - REEMPLAZAR con tus 9 bloques reales
export const categories: Category[] = [
  {
    id: "desayunos",
    name: "Desayunos",
    image: "/placeholder.svg",
    description: "Recetas para comenzar el día"
  },
  {
    id: "almuerzos",
    name: "Almuerzos",
    image: "/placeholder.svg",
    description: "Platos principales deliciosos"
  },
  {
    id: "cenas",
    name: "Cenas",
    image: "/placeholder.svg",
    description: "Comidas ligeras para la noche"
  },
  {
    id: "postres",
    name: "Postres",
    image: "/placeholder.svg",
    description: "Dulces tentaciones"
  },
  {
    id: "bebidas",
    name: "Bebidas",
    image: "/placeholder.svg",
    description: "Refrescos y bebidas especiales"
  },
  {
    id: "ensaladas",
    name: "Ensaladas",
    image: "/placeholder.svg",
    description: "Frescas y saludables"
  },
  {
    id: "sopas",
    name: "Sopas",
    image: "/placeholder.svg",
    description: "Caldos reconfortantes"
  },
  {
    id: "aperitivos",
    name: "Aperitivos",
    image: "/placeholder.svg",
    description: "Bocados para compartir"
  },
  {
    id: "panaderia",
    name: "Panadería",
    image: "/placeholder.svg",
    description: "Panes y masas horneadas"
  }
];

// Recetas de ejemplo - REEMPLAZAR con tus 100 recetas reales
export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Pancakes Clásicos",
    categoryId: "desayunos",
    ingredients: [
      "2 tazas de harina",
      "2 cucharadas de azúcar",
      "2 huevos",
      "1½ tazas de leche",
      "2 cucharadas de mantequilla derretida"
    ],
    instructions: [
      "Mezclar los ingredientes secos en un bowl",
      "Batir los huevos con la leche",
      "Combinar todo hasta obtener una mezcla homogénea",
      "Cocinar en sartén caliente hasta dorar"
    ],
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "4 personas"
  },
  {
    id: "2",
    title: "Tostadas Francesas",
    categoryId: "desayunos",
    ingredients: [
      "4 rebanadas de pan",
      "2 huevos",
      "½ taza de leche",
      "Canela al gusto",
      "Mantequilla"
    ],
    instructions: [
      "Batir huevos con leche y canela",
      "Remojar el pan en la mezcla",
      "Freír en mantequilla hasta dorar",
      "Servir con miel o jarabe"
    ],
    prepTime: "5 min",
    cookTime: "10 min",
    servings: "2 personas"
  }
  // Agregar las 98 recetas restantes aquí
];
