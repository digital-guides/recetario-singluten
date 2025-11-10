import { Category, Recipe } from "@/types/recipe";
import panesSartenImage from "@/assets/panes-sarten-plancha.jpg";
import panesExpressImage from "@/assets/panes-express-microondas.jpg";
import panesRapidosImage from "@/assets/panes-rapidos-horno.jpg";
import panesFestivosImage from "@/assets/panes-festivos-enriquecidos.jpg";
import panesMasaMadreImage from "@/assets/panes-masa-madre.jpg";
import panesProteicosImage from "@/assets/panes-proteicos-low-carb.jpg";
import panesFermentacionImage from "@/assets/panes-fermentacion-corta.jpg";
import panesDulcesImage from "@/assets/panes-dulces.jpg";
import panesLatinoamericanosImage from "@/assets/panes-latinoamericanos.jpg";
import pizzasSinGlutenImage from "@/assets/pizzas-sin-gluten.jpg";
import empanadasTartasImage from "@/assets/empanadas-tartas-sin-gluten.jpg";
import guiaSustitucionImage from "@/assets/guia-sustitucion-harinas.jpg";

export const categories: Category[] = [
  {
    id: "panes-rapidos",
    name: "Panes Rápidos",
    icon: "timer",
    description: "Sin levado, horno ≤40 min",
    image: panesRapidosImage
  },
  {
    id: "panes-microondas",
    name: "Panes Exprés",
    icon: "zap",
    description: "Al microondas, ≤30 min total",
    image: panesExpressImage
  },
  {
    id: "panes-sarten",
    name: "Panes de Sartén",
    icon: "flame",
    description: "A la plancha, sin horno",
    image: panesSartenImage
  },
  {
    id: "panes-fermentacion",
    name: "Fermentación Corta",
    icon: "wheat",
    description: "1 levado, esponjosos",
    image: panesFermentacionImage
  },
  {
    id: "masa-madre",
    name: "Masa Madre",
    icon: "sprout",
    description: "Fermentación natural",
    image: panesMasaMadreImage
  },
  {
    id: "panes-dulces",
    name: "Panes Dulces",
    icon: "cake",
    description: "Bollería rápida, sin laminado",
    image: panesDulcesImage
  },
  {
    id: "panes-festivos",
    name: "Panes Festivos",
    icon: "sparkles",
    description: "Enriquecidos con técnica",
    image: panesFestivosImage
  },
  {
    id: "high-protein",
    name: "High-Protein / Low-Carb",
    icon: "dumbbell",
    description: "Alto en proteína, bajo en carbohidratos",
    image: panesProteicosImage
  },
  {
    id: "regionales-latam",
    name: "Regionales LATAM",
    icon: "globe",
    description: "Clásicos latinoamericanos adaptados",
    image: panesLatinoamericanosImage
  },
  {
    id: "pizzas-sin-gluten",
    name: "🍕 BONO 1 – RECETARIO DE PIZZAS SIN GLUTEN",
    icon: "pizza",
    description: "Pizzas sin gluten deliciosas",
    image: pizzasSinGlutenImage
  },
  {
    id: "empanadas-tartas",
    name: "🥟 BONO 2 – EMPANADAS Y TARTAS SIN GLUTEN",
    icon: "cake",
    description: "Masas que no se quiebran, rellenos sabrosos y dorado perfecto",
    image: empanadasTartasImage
  },
  {
    id: "guia-sustituciones",
    name: "🌾 BONO 3 – GUÍA DE SUSTITUCIONES DE HARINAS",
    icon: "wheat",
    description: "Cómo reemplazar harinas y convertir recetas tradicionales en versiones sin gluten",
    image: guiaSustitucionImage
  }
];

export const recipes: Recipe[] = [
  // Categoría 1: Panes Rápidos (15)
  { 
    id: "1", 
    title: "1. 🥖 Pan rápido de harina de arroz \"todo uso\"",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 250 g", "Almidón de tapioca: 50 g", "Psyllium en polvo: 10 g", "Polvo de hornear: 8 g", "Sal fina: 5 g", "Agua tibia: 280 ml", "Huevos: 2 u (≈100 g)", "Aceite de oliva: 30 ml", "Vinagre de manzana: 10 ml"], 
    instructions: ["Precalienta el horno a 190 °C. Engrasa y forra el molde con papel.", "En un bol, mezcla harina de arroz, tapioca, psyllium, polvo de hornear y sal.", "En otro bol, bate agua tibia, huevos, aceite y vinagre.", "Une líquidos con secos. Mezcla 1–2 min hasta ver una pasta espesa y suave (no es una masa para amasar).", "Vierte al molde, alisa con espátula humedecida.", "Hornea 35–40 min hasta que dore y al clavar un palillo salga seco.", "Desmolda y deja enfriar 20 min sobre rejilla antes de cortar.", "Consejos: Textura esperada es miga tierna y uniforme, corteza fina. Si lo ves muy denso, añade 20–30 ml extra de agua tibia."], 
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10-12 rebanadas" 
  },
  { 
    id: "2", 
    title: "2. 🥖 Pan express de avena certificada (molde)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de avena certificada sin gluten: 300 g", "Almidón de tapioca: 40 g", "Psyllium en polvo: 8 g", "Polvo de hornear: 8 g", "Sal fina: 5 g", "Leche vegetal (avena/almendra): 280 ml", "Huevo: 1 u (≈50 g)", "Aceite suave: 20 ml", "Miel o sirope: 15 g", "Vinagre de manzana: 10 ml"], 
    instructions: ["Horno a 180 °C. Molde engrasado y forrado.", "Mezcla avena, tapioca, psyllium, polvo de hornear y sal.", "Bate leche vegetal, huevo, aceite, miel y vinagre.", "Integra todo. Debe quedar una mezcla cremosa y algo espesa.", "Vierte y alisa. Golpea suavemente el molde para eliminar burbujas.", "Hornea 35 min aprox. Si dora muy rápido, cúbrelo con papel.", "Enfría 15–20 min antes de rebanar.", "Consejos: Si tu mezcla queda muy espesa, suma 20–40 ml de leche. Para desayunos, añade semillas de girasol y sésamo a la superficie."], 
    prepTime: "10 min", 
    cookTime: "35 min", 
    servings: "10-12 rebanadas" 
  },
  { 
    id: "3", 
    title: "3. 🥖 Pan de garbanzo al horno (tipo focaccia fina)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de garbanzo: 250 g", "Agua: 450 ml", "Aceite de oliva: 40 ml (y 20 ml extra para la bandeja y superficie)", "Sal: 6 g", "Polvo de hornear: 4 g", "Romero seco: 2 g", "Opcional: rodajas finas de cebolla, tomatitos, aceitunas"], 
    instructions: ["Precalienta el horno a 220 °C con la bandeja dentro (la queremos bien caliente).", "En un bol, bate harina de garbanzo, agua, 40 ml de aceite, sal, polvo de hornear y romero hasta que no queden grumos. Reposa 10 min.", "Saca la bandeja caliente, pincela con 10 ml de aceite.", "Vierte la mezcla (queda fluida), agrega cebolla/tomates/aceitunas si quieres, y rocía con 10 ml de aceite por encima.", "Hornea 18–22 min hasta bordes dorados y centro firme.", "Deja entibiar 5 min y corta en cuadrados.", "Consejos: Textura fina, bordes crujientes y centro jugoso. Si la quieres más gruesa, usa una bandeja más pequeña o aumenta la cantidad un 30%."], 
    prepTime: "15 min", 
    cookTime: "18-22 min", 
    servings: "8 porciones" 
  },
  { 
    id: "4", 
    title: "4. 🥖 Pan de almendra suave (batido)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de almendra fina: 220 g", "Harina de coco: 30 g", "Psyllium en polvo: 8 g", "Polvo de hornear: 8 g", "Sal: 3 g", "Huevos: 4 u (≈200 g)", "Yogur vegetal natural (o kefir vegetal): 120 ml", "Agua: 60 ml", "Aceite de oliva o coco: 30 ml", "Vinagre de manzana: 10 ml"], 
    instructions: ["Horno a 180 °C. Molde engrasado y forrado.", "Mezcla secos: almendra, coco, psyllium, polvo de hornear y sal.", "Bate huevos con yogur, agua, aceite y vinagre.", "Integra líquidos con secos. La mezcla espesa en 1–2 min (el coco y el psyllium absorben).", "Vierte, alisa y hornea 28–32 min. Palillo seco y superficie apenas dorada.", "Enfría 20 min antes de cortar.", "Consejos: Miga esperada es tierna y ligeramente húmeda, ideal para tostadas. Pan low-carb friendly."], 
    prepTime: "10 min", 
    cookTime: "28-32 min", 
    servings: "10 rebanadas" 
  },
  { 
    id: "5", 
    title: "5. 🥖 Pan de yogurt vegetal y semillas (sin levado)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 200 g", "Harina de avena GF: 80 g", "Almidón de tapioca: 40 g", "Psyllium en polvo: 8 g", "Polvo de hornear: 8 g", "Sal: 5 g", "Yogurt vegetal natural: 250 g (≈250 ml)", "Agua: 120 ml", "Aceite de oliva: 30 ml", "Mix de semillas: 40 g (chía 10 g, lino 15 g, girasol 15 g)"], 
    instructions: ["Precalienta a 190 °C. Prepara el molde con papel.", "En un bol, combina harinas, tapioca, psyllium, polvo de hornear y sal.", "Mezcla yogurt, agua y aceite; vierte sobre los secos.", "Incorpora el mix de semillas (reserva un poco para la superficie).", "Vierte en el molde, alisa y espolvorea el resto de semillas.", "Hornea 35–40 min. Si se dora de más, cúbrelo los últimos 10 min.", "Enfría 15–20 min antes de rebanar.", "Consejos: Miga húmeda y elástica gracias al yogurt y el psyllium. Para rodajas más firmes, tuéstalas 3–4 min antes de servir."], 
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10-12 rebanadas" 
  },
  { 
    id: "6", 
    title: "6. 🥖 Pan rústico de sorgo y maíz (mezcla básica)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de sorgo: 180 g", "Harina de maíz fina (no precocida): 120 g", "Almidón de tapioca: 50 g", "Psyllium en polvo: 10 g", "Polvo de hornear: 8 g", "Sal: 5 g", "Agua tibia: 320 ml", "Aceite de oliva: 30 ml", "Vinagre de manzana: 10 ml"], 
    instructions: ["Precalienta el horno a 190 °C y prepara un molde con papel.", "Mezcla en un bol las harinas, tapioca, psyllium, polvo de hornear y sal.", "Agrega el agua tibia, aceite y vinagre. Mezcla con espátula hasta formar una pasta húmeda.", "Vierte al molde y alisa la superficie.", "Hornea 35–40 min o hasta que la parte superior se dore y suene hueca al golpearla suavemente.", "Deja enfriar 15 min antes de cortar.", "Consejos: Este pan tiene sabor ligeramente dulce por el maíz y aroma a campo. Ideal para acompañar sopas o untar con aceite de oliva."], 
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10-12 rebanadas" 
  },
  { 
    id: "7", 
    title: "7. 🥖 Pan de papa y aceite de oliva (textura tierna)",
    categoryId: "panes-rapidos", 
    ingredients: ["Puré de papa cocida (sin mantequilla): 200 g", "Harina de arroz: 150 g", "Fécula de maíz: 50 g", "Polvo de hornear: 8 g", "Psyllium en polvo: 6 g", "Sal: 4 g", "Agua tibia: 120 ml", "Aceite de oliva: 40 ml"], 
    instructions: ["Precalienta el horno a 190 °C. Engrasa un molde o usa papel vegetal.", "Mezcla puré de papa con el agua y el aceite hasta integrar.", "Añade los ingredientes secos y mezcla bien. La textura debe ser suave, no líquida.", "Coloca la masa en el molde, alisa y rocía un poco de aceite por encima.", "Hornea 30–35 min hasta dorar.", "Deja reposar 10 min antes de desmoldar.", "Consejos: Queda con una miga húmeda y elástica gracias al puré. Perfecto para tostar con ajo o hierbas."], 
    prepTime: "10 min", 
    cookTime: "30-35 min", 
    servings: "8-10 rebanadas" 
  },
  { 
    id: "8", 
    title: "8. 🥖 Pan de calabaza especiado (salado)",
    categoryId: "panes-rapidos", 
    ingredients: ["Puré de calabaza cocida: 200 g", "Harina de arroz: 150 g", "Harina de garbanzo: 50 g", "Polvo de hornear: 8 g", "Sal: 4 g", "Comino molido: 1 g", "Cúrcuma: 1 g", "Aceite de oliva: 30 ml", "Agua: 120 ml"], 
    instructions: ["Precalienta a 190 °C. Engrasa el molde.", "Mezcla los ingredientes secos en un bol.", "Agrega el puré de calabaza, aceite y agua; mezcla hasta que quede una masa cremosa.", "Vierte en el molde y alisa.", "Hornea 35–40 min hasta dorar ligeramente.", "Deja enfriar antes de cortar.", "Consejos: El color dorado y el aroma especiado son irresistibles. Añade semillas de calabaza arriba antes de hornear para decorar."], 
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10 rebanadas" 
  },
  { 
    id: "9", 
    title: "9. 🥖 Pan de cebolla y orégano (bandeja)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 200 g", "Harina de maíz fina: 80 g", "Fécula de maíz: 50 g", "Polvo de hornear: 8 g", "Sal: 5 g", "Cebolla finamente picada: 100 g", "Aceite de oliva: 40 ml", "Agua tibia: 240 ml", "Orégano seco: 3 g"], 
    instructions: ["Precalienta el horno a 200 °C.", "Sofríe la cebolla con 10 ml de aceite hasta que esté transparente; enfría.", "Mezcla harinas, polvo de hornear, sal y orégano.", "Agrega el agua, aceite restante y la cebolla. Mezcla hasta que quede espeso.", "Extiende la masa en bandeja engrasada (2–3 cm de grosor).", "Hornea 30 min hasta dorar los bordes.", "Enfría 10 min antes de cortar.", "Consejos: Perfecto para servir como pan de mesa o base de mini pizzas. Si quieres más aroma, añade 1 diente de ajo rallado."], 
    prepTime: "15 min", 
    cookTime: "30 min", 
    servings: "8-10 porciones" 
  },
  { 
    id: "10", 
    title: "10. 🥖 Pan tipo \"soda bread\" sin gluten (con bicarbonato)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 200 g", "Harina de avena GF: 100 g", "Fécula de maíz: 50 g", "Bicarbonato de sodio: 5 g", "Polvo de hornear: 5 g", "Sal: 4 g", "Yogur vegetal natural: 250 ml", "Vinagre o jugo de limón: 10 ml", "Aceite: 20 ml"], 
    instructions: ["Precalienta el horno a 200 °C. Cubre una bandeja con papel.", "Mezcla el yogur con el vinagre y deja reposar 5 min (formará una ligera espuma).", "En un bol, mezcla los ingredientes secos.", "Agrega el yogur y el aceite. Forma una masa blanda, que no se pega a las manos.", "Haz una bola, colócala sobre la bandeja y marca una cruz con cuchillo en la parte superior.", "Hornea 35–40 min o hasta que suene hueco al golpear.", "Enfría sobre rejilla.", "Consejos: Este pan tiene miga densa y corteza rústica. Si lo deseas más aireado, sustituye 50 ml del yogur por agua con gas."], 
    prepTime: "15 min", 
    cookTime: "35-40 min", 
    servings: "10 rebanadas" 
  },
  { 
    id: "11", 
    title: "11. 🥖 Pan integral sin gluten (arroz + avena GF)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz integral: 180 g", "Harina de avena certificada GF: 120 g", "Fécula de maíz: 60 g", "Psyllium en polvo: 8 g", "Polvo de hornear: 8 g", "Sal: 5 g", "Aceite de oliva: 30 ml", "Agua tibia: 320 ml", "Vinagre de manzana: 10 ml", "Semillas mixtas: 30 g"], 
    instructions: ["Precalienta el horno a 190 °C y prepara un molde mediano.", "En un bol, mezcla las harinas, fécula, psyllium, polvo de hornear y sal.", "Agrega el agua tibia, el aceite y el vinagre. Mezcla con cuchara hasta lograr una pasta espesa.", "Incorpora la mitad de las semillas.", "Vierte la mezcla al molde, alisa y espolvorea el resto de semillas.", "Hornea 35–40 min, hasta dorar.", "Enfría antes de cortar.", "Consejos: Pan de sabor suave y miga húmeda, perfecto para tostadas o sándwiches. Podés guardar rebanadas congeladas hasta 2 meses."], 
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "12 rebanadas" 
  },
  { 
    id: "12", 
    title: "12. 🥖 Pan de linaza molida (alto en fibra)",
    categoryId: "panes-rapidos", 
    ingredients: ["Linaza molida: 120 g", "Harina de almendra: 100 g", "Harina de coco: 20 g", "Polvo de hornear: 8 g", "Sal: 4 g", "Huevos: 4 u (≈200 g)", "Agua: 120 ml", "Aceite de oliva: 20 ml", "Vinagre de manzana: 10 ml"], 
    instructions: ["Precalienta el horno a 180 °C.", "Mezcla secos: linaza, almendra, coco, polvo de hornear y sal.", "En otro bol, bate los huevos con el agua, aceite y vinagre.", "Integra todo y deja reposar 5 min (la linaza absorbe líquido y espesa).", "Coloca en molde pequeño y alisa.", "Hornea 30–35 min hasta que al pinchar salga seco.", "Enfría sobre rejilla.", "Consejos: Textura densa, ideal para tostadas saladas. Si querés versión más húmeda, agregá 1 cucharada extra de agua. Aporta muchísima saciedad."], 
    prepTime: "10 min", 
    cookTime: "30-35 min", 
    servings: "8-10 rebanadas" 
  },
  { 
    id: "13", 
    title: "13. 🥖 Pan de coco salado (ligero)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de coco: 60 g", "Fécula de maíz: 40 g", "Polvo de hornear: 6 g", "Sal: 3 g", "Huevos: 3 u", "Leche vegetal o agua: 150 ml", "Aceite de coco o de oliva: 25 ml"], 
    instructions: ["Horno a 180 °C.", "Mezclá los ingredientes secos.", "En otro bol, batí huevos, leche y aceite.", "Integra todo. La mezcla debe quedar cremosa (no líquida).", "Verté en molde pequeño.", "Horneá 25–30 min, hasta dorar los bordes.", "Dejá enfriar antes de cortar.", "Consejos: Muy aromático y suave, perfecto para acompañar comidas ligeras. Podés agregar 1 cucharadita de orégano o ajo en polvo para darle un toque salado."], 
    prepTime: "10 min", 
    cookTime: "25-30 min", 
    servings: "6-8 rebanadas" 
  },
  { 
    id: "14", 
    title: "14. 🥖 Pan de queso rápido (sin amasado)",
    categoryId: "panes-rapidos", 
    ingredients: ["Fécula de mandioca o tapioca: 200 g", "Queso rallado (duro o semicurado): 120 g", "Huevo: 1 u", "Aceite: 30 ml", "Leche tibia: 100 ml", "Polvo de hornear: 6 g", "Sal: 3 g"], 
    instructions: ["Precalentá el horno a 200 °C.", "En un bol, mezclá la fécula, el queso, el polvo de hornear y la sal.", "Incorporá el huevo, el aceite y la leche. Mezclá hasta que se forme una masa pegajosa pero manejable.", "Formá bollitos con las manos húmedas y colocá sobre bandeja con papel.", "Horneá 20–25 min, hasta que se inflen y doren.", "Consejos: Si te gustan más elásticos, usá mezcla de quesos duros y frescos. Podés hacerlos mini para picadas o más grandes para sándwiches."], 
    prepTime: "10 min", 
    cookTime: "20-25 min", 
    servings: "8-10 bollitos" 
  },
  { 
    id: "15", 
    title: "15. 🥖 Pan de hierbas mediterráneas (molde pequeño)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 200 g", "Harina de sorgo: 100 g", "Fécula de maíz: 40 g", "Polvo de hornear: 8 g", "Sal: 4 g", "Aceite de oliva: 40 ml", "Agua tibia: 280 ml", "Vinagre de manzana: 10 ml", "Hierbas secas (romero, orégano, tomillo): 2 g de cada una aprox."], 
    instructions: ["Precalentá el horno a 190 °C.", "Mezclá harinas, fécula, polvo de hornear, sal y hierbas.", "Agregá aceite, agua y vinagre. Mezclá hasta integrar.", "Verté en molde pequeño, alisá la superficie y rociá un poco de aceite arriba.", "Horneá 35–40 min hasta dorar.", "Dejá enfriar 15 min antes de cortar.", "Consejos: Aroma increíble gracias al romero y al aceite de oliva. Ideal para acompañar ensaladas o sopas. Si querés versión más intensa, sumá aceitunas picadas a la mezcla."], 
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10 rebanadas" 
  },

  // Categoría 2: Panes Exprés al Microondas (10)
  { 
    id: "16", 
    title: "16. ⚡ Pan de taza de avena GF (mug bread)", 
    categoryId: "panes-microondas", 
    ingredients: ["Harina de avena certificada: 40 g (≈ 4 cdas)", "Fécula de maíz: 10 g (1 cda)", "Polvo de hornear: 2 g (½ cdta)", "Sal (o una pizca de azúcar si lo querés dulce)", "Huevo: 1 u", "Leche vegetal: 40 ml (≈ 3 cdas)", "Aceite o manteca derretida: 5 ml (1 cdta)"], 
    instructions: ["Mezclá todo en una taza grande o bol hasta que no queden grumos.", "Cociná 1 min y 30 seg en microondas (800 W). Si seguís viendo puntos húmedos, dales 10–15 seg más.", "Dejá reposar 1 min y desmoldá o comé directo de la taza.", "Consejos: Queda tipo panecillo esponjoso. Podés añadir semillas o pasas según si lo querés salado o dulce. Perfecto para desayuno exprés con mermelada o palta."], 
    prepTime: "2 min", 
    cookTime: "1.5 min", 
    servings: "1 taza grande" 
  },
  { 
    id: "17", 
    title: "17. ⚡ Pan de taza de almendra (versión keto)", 
    categoryId: "panes-microondas", 
    ingredients: ["Harina de almendra fina: 30 g (3 cdas)", "Polvo de hornear: 2 g", "Sal: 1 pizca", "Huevo: 1 u", "Aceite de oliva o de coco: 5 ml", "Agua: 20 ml"], 
    instructions: ["Mezclá todos los ingredientes en una taza.", "Microondas 1 min 20 seg a potencia alta.", "Dejá reposar 30 seg y desmoldá.", "Consejos: Perfecto para dieta keto. Ideal con mantequilla de almendra o aguacate."], 
    prepTime: "2 min", 
    cookTime: "1.5 min", 
    servings: "1 unidad" 
  },
  { 
    id: "18", 
    title: "18. ⚡ Pan de taza de garbanzo (sándwich rápido)", 
    categoryId: "panes-microondas", 
    ingredients: ["Harina de garbanzo: 40 g", "Polvo de hornear: 3 g", "Sal: 1 pizca", "Agua: 60 ml", "Aceite de oliva: 5 ml", "Especias (opcional): cúrcuma, comino, romero"], 
    instructions: ["Mezclá todo en un molde rectangular pequeño o taza ancha.", "Microondas 2 min a potencia alta. Dejá reposar 30 seg y desmoldá.", "Cortá en dos y tostá si querés más firme.", "Consejos: Queda liviano y con miga tierna. Probá agregarle una cucharada de queso rallado para versión salada. Ideal para sandwichitos keto rápidos con aguacate, hummus o queso vegetal."], 
    prepTime: "3 min", 
    cookTime: "2 min", 
    servings: "1-2 panes" 
  },
  { 
    id: "19", 
    title: "19. ⚡ Pan nube (cloud bread) al microondas", 
    categoryId: "panes-microondas", 
    ingredients: ["Huevos: 2 u (separadas claras y yemas)", "Yogur vegetal natural: 30 g", "Polvo de hornear: 2 g", "Sal: 1 pizca"], 
    instructions: ["Batí las claras a punto nieve con una pizca de sal.", "En otro bol, mezclá las yemas con el yogur y el polvo de hornear.", "Uní ambas preparaciones con movimientos suaves.", "Colocá porciones en plato plano para microondas cubierto con papel vegetal.", "Cociná de a dos discos por vez, 1 min 30 seg aprox.", "Consejos: Quedan como nubes ligeras y flexibles. Usalos para sandwiches sin harinas o mini pizzas. Guardalos en heladera hasta 3 días."], 
    prepTime: "5 min", 
    cookTime: "3 min", 
    servings: "3-4 discos" 
  },
  { 
    id: "20", 
    title: "20. ⚡ Pan inglés rápido al microondas (molde siliconado)", 
    categoryId: "panes-microondas", 
    ingredients: ["Harina de arroz: 120 g", "Fécula de maíz: 40 g", "Polvo de hornear: 6 g", "Sal: 4 g", "Psyllium en polvo: 4 g", "Huevo: 1 u", "Aceite: 20 ml", "Agua tibia: 140 ml"], 
    instructions: ["Batí todo hasta obtener mezcla espesa.", "Verté en molde de silicona engrasado.", "Microondas 7 min a potencia alta (800–900 W).", "Comprobá con palillo y agregá 30 seg más si es necesario.", "Enfriá antes de desmoldar y cortá en rebanadas.", "Consejos: Textura tierna y ligeramente elástica. Perfecto para guardar en heladera y tostar luego. Sin huevo: reemplazalo por 60 ml de leche vegetal y 5 ml de aceite extra."], 
    prepTime: "2 min", 
    cookTime: "7 min", 
    servings: "4 rebanadas" 
  },
  { 
    id: "21", 
    title: "21. ⚡ Pan de semillas mixtas (mug rectangular)", 
    categoryId: "panes-microondas", 
    ingredients: ["Harina de arroz: 40 g", "Harina de lino o linaza molida: 20 g", "Polvo de hornear: 3 g", "Sal: 1 pizca", "Agua tibia: 60 ml", "Aceite: 10 ml", "Mix de semillas (chía, girasol, sésamo): 20 g"], 
    instructions: ["En un recipiente rectangular o taza ancha, mezclá harinas, polvo de hornear y sal.", "Agregá agua, aceite y semillas; mezclá bien.", "Microondas 2 min a potencia alta.", "Reposá 30 seg y desmoldá.", "Consejos: Miga húmeda con textura crocante por las semillas. Si querés hacerlo más esponjoso, agregá 1 clara batida. Ideal para desayunos o snack con queso crema y tomate."], 
    prepTime: "3 min", 
    cookTime: "2 min", 
    servings: "1-2 rebanadas" 
  },
  { 
    id: "22", 
    title: "22. ⚡ Pan de zanahoria rallada (esponjoso)", 
    categoryId: "panes-microondas", 
    ingredients: ["Zanahoria rallada fina: 60 g", "Harina de avena GF: 40 g", "Polvo de hornear: 4 g", "Sal o pizca de azúcar (según gusto)", "Huevo: 1 u", "Aceite: 10 ml", "Agua: 40 ml"], 
    instructions: ["Batí huevo, aceite y agua.", "Agregá la zanahoria rallada y mezclá bien.", "Sumá la harina, el polvo de hornear y la sal.", "Verté en taza o molde pequeño.", "Cociná en microondas 2 min 30 seg, o hasta que al pinchar salga seco.", "Consejos: Miga húmeda y aroma suave. Podés añadir nueces picadas o pasas si lo querés tipo \"pan dulce\". Si usás zanahoria muy jugosa, reducí el agua a 20 ml."], 
    prepTime: "4 min", 
    cookTime: "2.5 min", 
    servings: "2-3 rebanadas" 
  },
  { 
    id: "23", 
    title: "23. ⚡ Pan de cacao salado (para untar)", 
    categoryId: "panes-microondas", 
    ingredients: ["Harina de almendra: 30 g", "Cacao sin azúcar: 5 g", "Polvo de hornear: 2 g", "Sal: 1 pizca", "Huevo: 1 u", "Agua: 30 ml", "Aceite: 5 ml"], 
    instructions: ["Mezclá todo en taza o molde pequeño hasta integrar.", "Microondas 1 min 30 seg.", "Enfriá un poco y cortá para untar con cremas o quesos.", "Consejos: No es dulce, tiene sabor tipo \"pan negro\". Ideal con queso crema, hummus o aguacate. Si querés hacerlo dulce, agregá 1 cda de miel o eritritol y ½ cdta de canela."], 
    prepTime: "2 min", 
    cookTime: "1.5 min", 
    servings: "1-2 panes" 
  },
  { 
    id: "24", 
    title: "24. ⚡ Pan pita exprés al microondas (plano)", 
    categoryId: "panes-microondas", 
    ingredients: ["Harina de arroz: 60 g", "Fécula de maíz: 20 g", "Polvo de hornear: 3 g", "Sal: 2 g", "Agua: 70 ml", "Aceite: 5 ml"], 
    instructions: ["Mezclá todo hasta formar masa blanda, no pegajosa.", "Dividí en 2 bolitas y estirá con las manos hasta ½ cm de espesor.", "Colocá una por vez en plato cubierto con papel vegetal.", "Cociná 1 min 30 seg por lado (dando vuelta a la mitad).", "Consejos: Quedan flexibles, tipo tortilla. Perfectas para wraps, tacos o fajitas. Podés guardarlas en heladera y calentar 15 seg antes de usar."], 
    prepTime: "5 min", 
    cookTime: "3 min", 
    servings: "2 unidades" 
  },
  { 
    id: "25", 
    title: "25. ⚡ Pan de arroz integral en 7 minutos", 
    categoryId: "panes-microondas", 
    ingredients: ["Harina de arroz integral: 80 g", "Fécula de tapioca: 20 g", "Polvo de hornear: 5 g", "Sal: 4 g", "Agua: 100 ml", "Aceite de oliva: 10 ml", "Vinagre: 5 ml"], 
    instructions: ["Mezclá todos los ingredientes en un bol hasta lograr una masa tipo \"crema espesa\".", "Verté en molde rectangular pequeño (tipo flanera de silicona).", "Microondas 5 min.", "Dejá reposar 2 min y desmoldá.", "Consejos: Miga compacta pero suave. Ideal para cortar en rodajas finas y tostar. Si lo querés más aireado, añadí 1 clara batida al final."], 
    prepTime: "2 min", 
    cookTime: "5 min", 
    servings: "3-4 rebanadas" 
  },

  // Categoría 3: Panes de Sartén/Plancha (15)
  { 
    id: "26", 
    title: "26. 🍳 Bejú clásico de almidón de yuca (Paraguay)", 
    categoryId: "panes-sarten", 
    ingredients: ["Almidón de yuca o mandioca (tapioca granulada): 250 g", "Queso rallado (semicurado o mozzarella): 150 g", "Sal: 3 g", "Manteca o aceite: 20 g", "Agua o leche: 80 ml"], 
    instructions: ["En un bol, mezclá el almidón de yuca, el queso y la sal.", "Agregá poco a poco el líquido hasta que la mezcla quede granulada pero húmeda (como arena mojada).", "Calentá una sartén antiadherente y derretí un poco de manteca.", "Verté 2–3 cucharadas de la mezcla, presioná con cuchara para compactar.", "Cociná 2–3 min por lado hasta dorar.", "Consejos: La clave está en no hacer masa: debe verse granulada, no pegajosa. Comelo recién hecho, caliente y crocante. Si querés versión sin lácteos, usá queso vegetal rallado y aceite de coco."], 
    prepTime: "5 min", 
    cookTime: "10 min", 
    servings: "6 unidades pequeñas" 
  },
  { 
    id: "27", 
    title: "27. 🍳 Tortillas de maíz 100% GF (plancha)", 
    categoryId: "panes-sarten", 
    ingredients: ["Harina de maíz nixtamalizada (masa harina): 200 g", "Agua tibia: 220 ml", "Sal: 4 g"], 
    instructions: ["Mezclá harina y sal.", "Agregá el agua poco a poco mientras amasás hasta obtener una masa blanda y lisa.", "Dividí en 8 bolitas y cubrilas con paño húmedo.", "Estirá cada bolita entre dos papeles hasta 2 mm de espesor.", "Cociná en plancha caliente 1 min por lado.", "Consejos: Si se agrietan, les falta agua: agregá de a cucharadas. Mantenelas cubiertas con paño limpio para que no se sequen. Perfectas para tacos o quesadillas."], 
    prepTime: "10 min", 
    cookTime: "10 min", 
    servings: "8 tortillas medianas" 
  },
  { 
    id: "28", 
    title: "28. 🍳 Tortillas de yuca (cassava tortillas)", 
    categoryId: "panes-sarten", 
    ingredients: ["Yuca cocida y hecha puré: 300 g", "Fécula de mandioca o tapioca: 30 g", "Sal: 3 g", "Aceite: 10 ml"], 
    instructions: ["Mezclá la yuca tibia con la fécula, sal y aceite.", "Amasá hasta obtener masa suave, no pegajosa.", "Dividí en 6 bolitas y aplastá hasta 3–4 mm.", "Cociná 2 min por lado en sartén caliente sin grasa.", "Consejos: Textura flexible, ideal para wraps. Si se endurecen, tapalas con paño húmedo apenas salgan del fuego. También podés hacerlas con yuca congelada (descongelá y escurrí bien)."], 
    prepTime: "15 min", 
    cookTime: "10 min", 
    servings: "6 unidades" 
  },
  { 
    id: "29", 
    title: "29. 🍳 Tortillas de garbanzo (socca fina en sartén)", 
    categoryId: "panes-sarten", 
    ingredients: ["Harina de garbanzo: 100 g", "Agua: 180 ml", "Sal: 3 g", "Aceite de oliva: 10 ml", "Especias al gusto (romero, pimienta, cúrcuma, ajo en polvo)"], 
    instructions: ["Mezclá harina, agua, sal y aceite.", "Dejá reposar 10 min para que espese un poco.", "Verté una capa fina en sartén caliente engrasada.", "Cociná 2 min por lado hasta bordes dorados.", "Consejos: Es una versión sin gluten de la \"socca\" italiana. Podés usarla como base de pizza rápida. Si querés textura más firme, horneala 5 min más después."], 
    prepTime: "12 min", 
    cookTime: "3 min", 
    servings: "4 tortillas finas" 
  },
  { 
    id: "30", 
    title: "30. 🍳 Arepas clásicas de maíz precocido (plancha)", 
    categoryId: "panes-sarten", 
    ingredients: ["Harina de maíz precocida blanca o amarilla: 250 g", "Agua tibia: 300 ml", "Sal: 5 g", "Aceite o manteca: 15 ml"], 
    instructions: ["En un bol, mezclá harina y sal.", "Agregá el agua poco a poco y amasá hasta que la masa quede suave y no se pegue.", "Hacé bolitas y aplastalas hasta 1,5 cm de grosor.", "Cociná 5 min por lado en plancha o sartén con un poco de aceite.", "Consejos: Si se agrietan al formar, agregá 1–2 cdas de agua. Cuando las golpeás y suenan huecas, están listas. Podés rellenarlas con queso, aguacate, pollo o lo que más te guste."], 
    prepTime: "10 min", 
    cookTime: "10 min", 
    servings: "6 unidades" 
  },
  { 
    id: "31", 
    title: "31. 🍳 Pan pita de sartén sin gluten", 
    categoryId: "panes-sarten", 
    ingredients: ["Harina de arroz: 100 g", "Fécula de maíz: 80 g", "Harina de avena GF o sorgo: 40 g", "Polvo de hornear: 4 g", "Sal: 3 g", "Psyllium en polvo: 6 g", "Agua tibia: 140 ml", "Aceite: 10 ml"], 
    instructions: ["Mezclá todos los secos en un bol.", "Agregá el agua y el aceite, y mezclá hasta obtener una masa suave y elástica.", "Dividí en 4 bolitas y estirá cada una de 3–4 mm.", "Calentá una sartén antiadherente y cociná cada pan 2–3 min por lado.", "Cuando se inflan un poco y toman color, ya están listos.", "Consejos: Son ideales para rellenar con hummus, falafel o vegetales. Guardalos envueltos en paño limpio; se mantienen suaves. Si los querés más elásticos, agregá 10 ml más de agua."], 
    prepTime: "15 min", 
    cookTime: "10 min", 
    servings: "4 unidades medianas" 
  },
  { 
    id: "32", 
    title: "32. 🍳 Naan sin gluten a la sartén (versión con yogurt vegetal)", 
    categoryId: "panes-sarten", 
    ingredients: ["Harina de arroz: 120 g", "Harina de tapioca: 60 g", "Polvo de hornear: 5 g", "Sal: 3 g", "Yogurt vegetal natural: 100 g", "Agua tibia: 60 ml", "Aceite: 15 ml"], 
    instructions: ["Mezclá harinas, polvo de hornear y sal.", "Agregá yogurt, agua y aceite; amasá hasta masa blanda.", "Dividí en 6 porciones y estirá en forma de disco fino.", "Cociná cada naan 2 min por lado en sartén caliente.", "Pincelá con aceite o manteca derretida apenas salgan.", "Consejos: Quedan suaves y fragantes. Perfectos para acompañar curry o guisos. Si querés versión sin yogurt, reemplazalo por 100 ml de leche vegetal y 5 ml más de aceite."], 
    prepTime: "15 min", 
    cookTime: "10 min", 
    servings: "6 unidades pequeñas" 
  },
  { 
    id: "33", 
    title: "33. 🍳 Focaccia plana a la plancha (estilo torta al testo)", 
    categoryId: "panes-sarten", 
    ingredients: ["Harina de arroz: 150 g", "Harina de maíz fina: 50 g", "Fécula de tapioca: 30 g", "Psyllium: 6 g", "Polvo de hornear: 5 g", "Sal: 4 g", "Agua tibia: 160 ml", "Aceite de oliva: 25 ml", "Hierbas secas (romero, orégano): 2 g"], 
    instructions: ["Mezclá todos los secos en un bol.", "Agregá el agua tibia y el aceite.", "Formá una masa húmeda pero maleable.", "Dividí en dos discos de 1 cm de espesor.", "Cociná cada uno en sartén a fuego medio 6–7 min por lado, tapando los primeros minutos.", "Consejos: Miga húmeda y sabor a oliva irresistible. Podés rellenarla con tomate seco y aceitunas antes de cocinar. Si la querés más crujiente, destapá los últimos 2 minutos."], 
    prepTime: "10 min", 
    cookTime: "15 min", 
    servings: "2 panes medianos" 
  },
  { 
    id: "34", 
    title: "34. 🍳 Pan chapati sin gluten (mezcla arroz + tapioca)", 
    categoryId: "panes-sarten", 
    ingredients: ["Harina de arroz: 100 g", "Fécula de tapioca: 80 g", "Sal: 3 g", "Agua caliente: 150 ml", "Aceite: 5 ml"], 
    instructions: ["Mezclá harina, tapioca y sal.", "Agregá el agua caliente (de a poco) y el aceite.", "Amasá hasta que no se pegue.", "Dividí en 6 bolitas y estirá fino (2–3 mm).", "Cociná 1–2 min por lado hasta que se formen manchitas doradas.", "Consejos: Son suaves, flexibles y perfectos para enrollar. Mantenelos envueltos en paño para que no se sequen. Podés añadir 1 cda de yogurt vegetal si los querés más tiernos."], 
    prepTime: "10 min", 
    cookTime: "10 min", 
    servings: "6 unidades finas" 
  },
  { 
    id: "35", 
    title: "35. 🍳 Pan tipo \"piadina\" sin gluten", 
    categoryId: "panes-sarten", 
    ingredients: ["Harina de arroz: 100 g", "Harina de avena GF: 80 g", "Polvo de hornear: 3 g", "Sal: 3 g", "Aceite de oliva: 20 ml", "Agua tibia: 100 ml"], 
    instructions: ["Mezclá harinas, polvo de hornear y sal.", "Agregá el aceite y el agua, y formá masa suave.", "Dividí en 4 bolitas y estirá finas (2–3 mm).", "Cociná 1–2 min por lado en plancha caliente.", "Serví tibias con rellenos salados.", "Consejos: Perfectas para wraps o paninis. Quedan muy tiernas si las tapás apenas salgan. También podés hacer mini piadinas para picadas."], 
    prepTime: "10 min", 
    cookTime: "10 min", 
    servings: "4 unidades medianas" 
  },
  { 
    id: "36", 
    title: "36. 🍳 Pan plano de quinua (ligero y flexible)", 
    categoryId: "panes-sarten", 
    ingredients: ["Harina de quinua: 100 g", "Fécula de tapioca: 50 g", "Polvo de hornear: 3 g", "Sal: 3 g", "Agua tibia: 120 ml", "Aceite: 10 ml"], 
    instructions: ["Mezclá harinas, polvo de hornear y sal.", "Agregá agua y aceite; mezclá hasta masa suave.", "Dividí en 4 partes y estirá de 3 mm.", "Cociná 2 min por lado en sartén antiadherente caliente.", "Consejos: Pan de sabor suave y textura elástica. Ideal para tacos, wraps o acompañar sopas. Si lo querés más tierno, sumá 1 cucharada extra de agua o aceite."], 
    prepTime: "10 min", 
    cookTime: "10 min", 
    servings: "4 unidades medianas" 
  },
  { 
    id: "37", 
    title: "37. 🍳 Pan de sarraceno en sartén (galette base)", 
    categoryId: "panes-sarten", 
    ingredients: ["Harina de trigo sarraceno: 100 g", "Agua: 200 ml", "Sal: 2 g", "Aceite: 5 ml"], 
    instructions: ["Mezclá harina, sal y agua hasta que no queden grumos.", "Reposá 10 min para que espese un poco.", "Verté una capa fina en sartén antiadherente engrasada.", "Cociná 2–3 min por lado hasta dorar.", "Consejos: Quedan finas, tipo crepe salado francés. Podés rellenarlas con verduras salteadas o jamón y queso. Si querés sabor más neutro, mezclá mitad sarraceno y mitad arroz."], 
    prepTime: "12 min", 
    cookTime: "6 min", 
    servings: "3 galettes grandes" 
  },
  { 
    id: "38", 
    title: "38. 🍳 Pan de batata (láminas flexibles en plancha)", 
    categoryId: "panes-sarten", 
    ingredients: ["Puré de batata cocida: 200 g", "Harina de arroz: 80 g", "Fécula de maíz: 30 g", "Sal: 3 g", "Aceite: 10 ml"], 
    instructions: ["Mezclá el puré con la harina, fécula, sal y aceite.", "Formá masa blanda. Si está muy seca, agregá 1–2 cdas de agua.", "Dividí en 4 bolitas y estirá fino (3 mm).", "Cociná 2–3 min por lado hasta dorar.", "Consejos: Miga suave y ligeramente dulce. Perfecto para combinar con sabores salados (queso, palta, hummus). También podés usar puré de zapallo o papa en lugar de batata."], 
    prepTime: "15 min", 
    cookTime: "10 min", 
    servings: "4 unidades medianas" 
  },
  { 
    id: "39", 
    title: "39. 🍳 Pan árabe fino sin gluten (plancha rápida)", 
    categoryId: "panes-sarten", 
    ingredients: ["Harina de arroz: 100 g", "Harina de maíz fina: 50 g", "Fécula de tapioca: 50 g", "Polvo de hornear: 3 g", "Sal: 3 g", "Agua tibia: 140 ml", "Aceite: 10 ml"], 
    instructions: ["Mezclá harinas, polvo de hornear y sal.", "Incorporá agua y aceite hasta lograr masa blanda y elástica.", "Dividí en 4 bolitas y estirá finas (2–3 mm).", "Cociná 1–2 min por lado hasta dorar.", "Consejos: Livianos, flexibles y deliciosos. Si los querés con burbujas, subí un poco el fuego. Mantenelos tapados para conservar su suavidad."], 
    prepTime: "10 min", 
    cookTime: "10 min", 
    servings: "4 unidades medianas" 
  },
  { 
    id: "40", 
    title: "40. 🍳 Pan \"arepa dulce\" (panecillo dulce de plancha)", 
    categoryId: "panes-sarten", 
    ingredients: ["Harina de maíz precocida: 200 g", "Agua tibia: 220 ml", "Azúcar mascabo o miel: 25 g", "Canela en polvo: 1 g", "Sal: 1 pizca", "Aceite o manteca: 15 ml"], 
    instructions: ["Mezclá harina, azúcar, canela y sal.", "Agregá el agua y formá masa suave.", "Armá bollitos y aplastá hasta 1 cm.", "Cociná en plancha engrasada 4–5 min por lado.", "Consejos: Deliciosas para desayuno o merienda. Podés rellenarlas con queso o mermelada. Si querés más dulces, añadí 1 cda extra de miel."], 
    prepTime: "10 min", 
    cookTime: "15 min", 
    servings: "6 unidades" 
  },

  // Categoría 4: Panes con Fermentación Corta (10)
  { 
    id: "41", 
    title: "41. 🌾 Pan de molde esponjoso (arroz + tapioca + psyllium)", 
    categoryId: "panes-fermentacion", 
    ingredients: ["Harina de arroz: 200 g", "Fécula de tapioca: 100 g", "Psyllium en polvo: 8 g", "Levadura seca instantánea: 6 g", "Azúcar: 10 g", "Sal: 5 g", "Agua tibia: 260 ml", "Aceite de oliva: 30 ml", "Vinagre de manzana: 10 ml"], 
    instructions: ["En un bol grande, mezclá harinas, psyllium, levadura, azúcar y sal.", "Agregá agua tibia, aceite y vinagre. Mezclá bien con espátula; la masa será espesa y húmeda.", "Verté al molde, alisá con espátula mojada.", "Tapá y dejá levar 30–40 min hasta que suba casi al borde.", "Horneá 35 min a 190 °C.", "Desmoldá y enfriá sobre rejilla.", "Consejos: Miga suave y esponjosa, perfecta para tostadas. Si querés más dorado, pincelá con aceite antes de hornear. No sobrelevés, o colapsará al enfriar."], 
    prepTime: "40 min", 
    cookTime: "35 min", 
    servings: "12 rebanadas" 
  },
  { 
    id: "42", 
    title: "42. 🌾 Pan baguette corta fermentación (sin gluten)", 
    categoryId: "panes-fermentacion", 
    ingredients: ["Harina de arroz: 180 g", "Fécula de maíz: 100 g", "Fécula de papa: 40 g", "Psyllium: 8 g", "Levadura seca: 6 g", "Azúcar: 8 g", "Sal: 5 g", "Agua tibia: 280 ml", "Aceite: 20 ml"], 
    instructions: ["Mezclá todos los secos.", "Agregá agua y aceite, mezclá con batidor o espátula hasta masa uniforme.", "Formá dos bastones con las manos húmedas y colocá sobre bandeja con papel.", "Dejá levar 30 min tapado.", "Horneá 25–30 min a 200 °C con un vasito de agua en la base del horno para vapor.", "Consejos: Corteza crujiente, interior tierno. Podés espolvorear harina de arroz encima antes del horneado. Si querés textura más alveolada, añadí 1 clara extra."], 
    prepTime: "40 min", 
    cookTime: "30 min", 
    servings: "2 baguettes medianas" 
  },
  { 
    id: "43", 
    title: "43. 🌾 Pan rústico con corteza crujiente (levadura instantánea)", 
    categoryId: "panes-fermentacion", 
    ingredients: ["Harina de arroz integral: 150 g", "Harina de maíz fina: 100 g", "Fécula de tapioca: 50 g", "Psyllium: 8 g", "Levadura seca: 5 g", "Sal: 4 g", "Azúcar: 8 g", "Agua tibia: 280 ml", "Aceite de oliva: 25 ml"], 
    instructions: ["Mezclá harinas, psyllium, levadura, sal y azúcar.", "Agregá agua y aceite; mezclá hasta obtener masa húmeda y algo pegajosa.", "Verté sobre molde o formá una bola con las manos enharinadas.", "Dejá levar 45 min tapado.", "Horneá 35–40 min a 200 °C.", "Consejos: Corteza firme y miga húmeda. Perfecto para sopas o guisos. Podés agregar 1 cda de semillas para textura extra."], 
    prepTime: "50 min", 
    cookTime: "40 min", 
    servings: "1 pan mediano" 
  },
  { 
    id: "44", 
    title: "44. 🌾 Pan con aceitunas y romero (una fermentación)", 
    categoryId: "panes-fermentacion", 
    ingredients: ["Harina de arroz: 200 g", "Fécula de maíz: 80 g", "Harina de garbanzo: 40 g", "Psyllium: 8 g", "Levadura seca: 6 g", "Azúcar: 5 g", "Sal: 4 g", "Agua tibia: 260 ml", "Aceite de oliva: 30 ml", "Aceitunas verdes picadas: 50 g", "Romero fresco o seco: 2 g"], 
    instructions: ["Mezclá harinas, psyllium, levadura, azúcar y sal.", "Agregá agua y aceite. Mezclá hasta obtener masa espesa.", "Incorporá aceitunas y romero.", "Verté en molde o bandeja y alisá.", "Levá 40 min tapado, luego horneá 35 min a 190 °C.", "Consejos: Aromático y con sabor mediterráneo. Si usás romero fresco, agregalo picado fino. Servilo tibio con aceite de oliva extra virgen."], 
    prepTime: "45 min", 
    cookTime: "35 min", 
    servings: "8-10 rebanadas" 
  },
  { 
    id: "45", 
    title: "45. 🌾 Pan ciabatta sin gluten (hidratación media)", 
    categoryId: "panes-fermentacion", 
    ingredients: ["Harina de arroz: 150 g", "Fécula de tapioca: 80 g", "Harina de sorgo: 70 g", "Psyllium: 8 g", "Levadura seca: 5 g", "Sal: 4 g", "Azúcar: 5 g", "Agua tibia: 260 ml", "Aceite de oliva: 25 ml"], 
    instructions: ["Mezclá los secos en un bol.", "Agregá agua y aceite, mezclá hasta masa elástica y pegajosa.", "Verté sobre bandeja enharinada y formá dos panes alargados.", "Dejá levar 40 min tapado.", "Horneá 30–35 min a 200 °C.", "Consejos: Miga aireada, perfecta para sándwiches. Si querés más corteza, rociá con agua antes de hornear. Dejalo enfriar 20 min antes de cortar."], 
    prepTime: "45 min", 
    cookTime: "35 min", 
    servings: "2 panes medianos" 
  },
  { 
    id: "46", 
    title: "46. 🌾 Pan de campo simple (molde alargado)", 
    categoryId: "panes-fermentacion", 
    ingredients: ["Harina de arroz: 180 g", "Harina de maíz fina: 100 g", "Fécula de tapioca: 60 g", "Psyllium: 8 g", "Levadura seca: 6 g", "Azúcar: 8 g", "Sal: 5 g", "Agua tibia: 280 ml", "Aceite: 25 ml"], 
    instructions: ["Mezclá los ingredientes secos en un bol grande.", "Agregá el agua y el aceite, mezclá bien.", "Verté la masa (de consistencia densa) en un molde alargado.", "Tapá y dejá levar 40–50 min en lugar cálido.", "Horneá 35–40 min a 190 °C.", "Enfriá sobre rejilla antes de cortar.", "Consejos: Pan básico, ideal para iniciarse en la panificación sin gluten. Si querés sabor más rústico, usá harina de arroz integral. También podés aromatizar con 1 cda de semillas o hierbas secas."], 
    prepTime: "50 min", 
    cookTime: "40 min", 
    servings: "10-12 rebanadas" 
  },
  { 
    id: "47", 
    title: "47. 🌾 Pan de centeno \"fake\" (saborizado sin centeno)", 
    categoryId: "panes-fermentacion", 
    ingredients: ["Harina de sorgo: 150 g", "Harina de arroz integral: 100 g", "Fécula de papa: 60 g", "Psyllium: 8 g", "Levadura seca: 6 g", "Azúcar: 10 g", "Cacao sin azúcar: 5 g", "Café instantáneo: 1 g (opcional)", "Sal: 5 g", "Agua tibia: 280 ml", "Aceite: 25 ml", "Vinagre: 10 ml"], 
    instructions: ["Mezclá las harinas, psyllium, levadura, azúcar, cacao, café y sal.", "Incorporá agua, aceite y vinagre. Mezclá bien.", "Verté en molde y alisá.", "Dejá levar 40–45 min.", "Horneá 35–40 min a 190 °C.", "Consejos: El cacao y el café imitan el color y aroma del centeno clásico. Ideal con manteca o quesos fuertes. Conservá en la heladera hasta 5 días o congelado en rebanadas."], 
    prepTime: "50 min", 
    cookTime: "40 min", 
    servings: "10 rebanadas" 
  },
  { 
    id: "48", 
    title: "48. 🌾 Pan de sándwich tierno (rebanado fino)", 
    categoryId: "panes-fermentacion", 
    ingredients: ["Harina de arroz: 180 g", "Fécula de tapioca: 100 g", "Fécula de maíz: 50 g", "Psyllium: 8 g", "Levadura seca: 6 g", "Azúcar: 10 g", "Sal: 5 g", "Leche vegetal tibia: 260 ml", "Aceite: 30 ml", "Vinagre: 10 ml"], 
    instructions: ["Mezclá todos los secos.", "Agregá leche, aceite y vinagre.", "Batí 1–2 min hasta mezcla homogénea.", "Verté en molde de pan inglés, tapá y dejá levar 35–40 min.", "Horneá 35 min a 190 °C.", "Consejos: Pan de miga muy suave, tipo \"pan lactal\". Si lo querés más alto, usá molde pequeño o sumá 10% de ingredientes. Perfecto para sándwiches o tostadas dulces."], 
    prepTime: "40 min", 
    cookTime: "35 min", 
    servings: "12 rebanadas finas" 
  },
  { 
    id: "49", 
    title: "49. 🌾 Pan estilo bollo de hamburguesa (fermentación corta)", 
    categoryId: "panes-fermentacion", 
    ingredients: ["Harina de arroz: 200 g", "Fécula de tapioca: 80 g", "Fécula de maíz: 40 g", "Psyllium: 8 g", "Levadura seca: 6 g", "Azúcar: 10 g", "Sal: 4 g", "Agua tibia: 260 ml", "Aceite: 30 ml", "Semillas de sésamo (opcional): 10 g"], 
    instructions: ["Mezclá los secos.", "Agregá el agua y el aceite.", "Mezclá hasta que la masa quede espesa.", "Con las manos húmedas, formá 6 bollos y colocá en bandeja.", "Dejá levar 30–40 min tapados.", "Espolvoreá semillas y horneá 25–30 min a 190 °C.", "Consejos: Miga suave y corteza fina. Podés pintarlos con huevo o aceite para mejor dorado. Si los querés tipo pan de hot dog, formá alargados en lugar de redondos."], 
    prepTime: "40 min", 
    cookTime: "30 min", 
    servings: "6 bollos grandes" 
  },
  { 
    id: "50", 
    title: "50. 🌾 Pan de hot dog sin gluten (molde individual)", 
    categoryId: "panes-fermentacion", 
    ingredients: ["Harina de arroz: 200 g", "Fécula de tapioca: 80 g", "Fécula de maíz: 40 g", "Psyllium: 8 g", "Levadura seca: 6 g", "Azúcar: 10 g", "Sal: 4 g", "Agua tibia: 260 ml", "Aceite: 30 ml"], 
    instructions: ["Mezclá los secos.", "Agregá agua y aceite.", "Verté en moldes individuales o formá panes alargados.", "Dejá levar 40 min.", "Horneá 25–30 min a 190 °C.", "Consejos: Miga tierna, perfecta para hot dogs o mini sándwiches. Si querés más elásticos, agregá 1 clara batida. Se pueden congelar después del horneado, envueltos en film."], 
    prepTime: "45 min", 
    cookTime: "30 min", 
    servings: "6 unidades" 
  },

  // Categoría 5: Panes de Masa Madre (8)
  { 
    id: "51", 
    title: "51. 🍞 Pan rústico de masa madre (arroz + sorgo)", 
    categoryId: "masa-madre", 
    ingredients: ["Harina de arroz: 200 g", "Harina de sorgo: 150 g", "Fécula de tapioca: 80 g", "Psyllium: 8 g", "Sal: 6 g", "Masa madre sin gluten activa: 120 g", "Agua a temperatura ambiente: 280–300 ml", "Aceite de oliva: 20 ml"], 
    instructions: ["En un bol grande, mezclá las harinas, fécula, psyllium y sal.", "Agregá la masa madre y el agua, y mezclá bien con espátula o batidor.", "Sumá el aceite y mezclá hasta lograr una masa húmeda, sin grumos.", "Verté en molde o bol engrasado, tapá y dejá fermentar 8–10 h a temperatura ambiente (o en heladera 12 h).", "Horneá a 200 °C durante 40–45 min, hasta dorar.", "Dejá enfriar completamente antes de cortar.", "Consejos: Textura húmeda y corteza crujiente. Si tu ambiente es frío, dejá fermentar cerca del horno apagado. Podés añadir 1 cda de semillas para más sabor y fibra."], 
    prepTime: "8-10h fermentación", 
    cookTime: "40-45 min", 
    servings: "12 rebanadas" 
  },
  { 
    id: "52", 
    title: "52. 🌾 Pan integral de masa madre (mijo + avena GF)", 
    categoryId: "masa-madre", 
    ingredients: ["Harina de mijo: 180 g", "Harina de avena GF: 120 g", "Fécula de papa: 80 g", "Psyllium: 8 g", "Sal: 5 g", "Masa madre activa: 100 g", "Agua: 280 ml", "Aceite: 20 ml", "Semillas (opcional): 30 g"], 
    instructions: ["Mezclá harinas, fécula, psyllium y sal.", "Agregá la masa madre, el agua y el aceite.", "Mezclá hasta obtener masa húmeda y uniforme.", "Verté en molde o fuente.", "Tapá y dejá fermentar 10–12 h hasta que aumente visiblemente.", "Horneá 40–45 min a 190 °C.", "Consejos: Aroma suave y sabor levemente dulce. Perfecto para tostadas o sandwiches saludables. Guardá rebanadas congeladas para tener pan fresco siempre."], 
    prepTime: "10-12h fermentación", 
    cookTime: "40-45 min", 
    servings: "12 rebanadas" 
  },
  { 
    id: "53", 
    title: "53. 🌻 Pan de semillas con masa madre (alto en fibra)", 
    categoryId: "masa-madre", 
    ingredients: ["Harina de arroz integral: 150 g", "Harina de trigo sarraceno: 100 g", "Fécula de tapioca: 70 g", "Psyllium: 8 g", "Sal: 5 g", "Masa madre activa: 100 g", "Agua: 280 ml", "Aceite de oliva: 20 ml", "Semillas mixtas: 50 g (chía, lino, girasol)"], 
    instructions: ["Mezclá los secos.", "Agregá masa madre, agua y aceite.", "Agregá las semillas y mezclá.", "Verté en molde y alisá.", "Dejá fermentar 10–12 h.", "Horneá 45 min a 190 °C.", "Consejos: Pan denso, húmedo y muy saciante. Ideal para desayuno con palta o queso crema. Si usás semillas grandes, remojalas 1 h antes."], 
    prepTime: "10-12h fermentación", 
    cookTime: "45 min", 
    servings: "10-12 rebanadas" 
  },
  { 
    id: "54", 
    title: "54. 🍞 Pan de molde de masa madre (suave)", 
    categoryId: "masa-madre", 
    ingredients: ["Harina de arroz: 200 g", "Harina de tapioca: 100 g", "Fécula de papa: 50 g", "Psyllium: 8 g", "Sal: 5 g", "Masa madre activa: 120 g", "Agua: 280 ml", "Aceite: 25 ml", "Miel o sirope (opcional): 10 g"], 
    instructions: ["Mezclá harinas, fécula, psyllium y sal.", "Agregá masa madre, agua, aceite y miel.", "Mezclá hasta lograr textura cremosa.", "Verté en molde, alisá y tapá.", "Fermentá 8–10 h o hasta que suba al borde.", "Horneá 40 min a 190 °C.", "Consejos: Pan suave y tierno, ideal para el día a día. Si querés sabor más neutro, omití la miel. Conservá en heladera envuelto en paño seco."], 
    prepTime: "8-10h fermentación", 
    cookTime: "40 min", 
    servings: "12 rebanadas" 
  },
  { 
    id: "55", 
    title: "55. 🍞 Pan de teff de masa madre (aroma profundo)", 
    categoryId: "masa-madre", 
    ingredients: ["Harina de teff: 200 g", "Harina de arroz integral: 120 g", "Fécula de papa: 80 g", "Psyllium: 8 g", "Sal: 5 g", "Masa madre activa: 120 g", "Agua: 300 ml", "Aceite: 20 ml"], 
    instructions: ["En un bol grande, mezclá las harinas, fécula, psyllium y sal.", "Incorporá la masa madre, el agua y el aceite. Mezclá hasta obtener masa uniforme.", "Verté en molde, alisá y tapá.", "Dejá fermentar 10–12 h a temperatura ambiente (menos si hace calor).", "Horneá 45 min a 190 °C.", "Consejos: Sabor intenso, ligeramente a nuez, típico del teff. Ideal para panes tostados o sandwiches gourmet. Conserva su humedad durante varios días."], 
    prepTime: "10-12h fermentación", 
    cookTime: "45 min", 
    servings: "12 rebanadas" 
  },
  { 
    id: "56", 
    title: "56. 🥖 Baguette de masa madre sin gluten", 
    categoryId: "masa-madre", 
    ingredients: ["Harina de arroz: 180 g", "Harina de maíz fina: 100 g", "Fécula de tapioca: 60 g", "Psyllium: 8 g", "Sal: 5 g", "Masa madre activa: 100 g", "Agua: 280 ml", "Aceite: 20 ml"], 
    instructions: ["Mezclá harinas, fécula, psyllium y sal.", "Agregá masa madre, agua y aceite. Mezclá bien hasta masa espesa.", "Formá dos bastones sobre bandeja enharinada.", "Tapá y fermentá 10–12 h.", "Horneá 35–40 min a 200 °C con vapor (colocá una bandejita con agua caliente en la base).", "Consejos: Corteza crujiente y aroma intenso. Si querés mayor color, pincelá con aceite antes de hornear. Enfriá completamente antes de cortar para conservar estructura."], 
    prepTime: "10-12h fermentación", 
    cookTime: "35-40 min", 
    servings: "2 baguettes medianas" 
  },
  { 
    id: "57", 
    title: "57. 🍠 Pan de batata fermentado (miga húmeda)", 
    categoryId: "masa-madre", 
    ingredients: ["Puré de batata cocida: 150 g", "Harina de arroz: 150 g", "Harina de sorgo: 100 g", "Fécula de tapioca: 50 g", "Psyllium: 8 g", "Sal: 5 g", "Masa madre activa: 100 g", "Agua: 240 ml", "Aceite: 25 ml"], 
    instructions: ["Mezclá las harinas, fécula, psyllium y sal.", "Agregá el puré de batata, la masa madre, el agua y el aceite.", "Mezclá hasta obtener masa húmeda y densa.", "Verté en molde, tapá y fermentá 8–10 h.", "Horneá 40–45 min a 190 °C.", "Consejos: Pan de miga húmeda, dulce y aromática. Ideal para desayunos o meriendas. La batata aporta color y dulzor natural."], 
    prepTime: "8-10h fermentación", 
    cookTime: "40-45 min", 
    servings: "10-12 rebanadas" 
  },
  { 
    id: "58", 
    title: "58. 🍞 Pan campesino con corteza oscura (masa madre)", 
    categoryId: "masa-madre", 
    ingredients: ["Harina de arroz integral: 180 g", "Harina de trigo sarraceno: 100 g", "Fécula de tapioca: 80 g", "Psyllium: 8 g", "Cacao sin azúcar (para color): 5 g", "Sal: 5 g", "Masa madre activa: 120 g", "Agua: 300 ml", "Aceite: 20 ml"], 
    instructions: ["Mezclá harinas, fécula, psyllium, cacao y sal.", "Agregá la masa madre, el agua y el aceite. Mezclá bien.", "Verté en molde o formá pan redondo.", "Fermentá 10–12 h tapado.", "Horneá 45–50 min a 190 °C.", "Consejos: Corteza oscura, miga compacta y sabor profundo. Ideal para tablas de quesos o sopas. Podés espolvorear harina encima antes del horneado para aspecto rústico."], 
    prepTime: "10-12h fermentación", 
    cookTime: "45-50 min", 
    servings: "12 rebanadas" 
  },

  // Categoría 6: Panes Dulces (12)
  { 
    id: "59", 
    title: "59. 🍊 Pan dulce de naranja y almendra (glaseado ligero)", 
    categoryId: "panes-dulces", 
    ingredients: [
      "Harina de almendra: 150 g",
      "Harina de arroz: 100 g",
      "Fécula de maíz: 50 g",
      "Polvo de hornear: 8 g",
      "Sal: 2 g",
      "Ralladura de naranja: 1 u",
      "Jugo de naranja natural: 100 ml",
      "Huevos: 3 u",
      "Aceite: 50 ml",
      "Miel o azúcar mascabo: 50 g",
      "Esencia de vainilla: 1 cdta"
    ], 
    instructions: [
      "Precalentá el horno a 180 °C y engrasá un molde.",
      "Mezclá secos: harinas, fécula, polvo de hornear, sal y ralladura.",
      "En otro bol, batí huevos, jugo, miel, aceite y vainilla.",
      "Combiná ambos hasta lograr mezcla homogénea.",
      "Verté en el molde y horneá 35–40 min.",
      "Enfriá y decorá con glaseado de jugo y azúcar impalpable."
    ], 
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10-12 rebanadas",
    chefTip: "Aroma cítrico y textura húmeda. Perfecto con una taza de té o café. Podés sumar chips de chocolate o nueces."
  },
  { 
    id: "60", 
    title: "60. 🥛 Pan tipo \"milk bread\" sin gluten (suave)", 
    categoryId: "panes-dulces", 
    ingredients: [
      "Harina de arroz: 180 g",
      "Fécula de papa: 80 g",
      "Fécula de tapioca: 40 g",
      "Psyllium: 6 g",
      "Polvo de hornear: 8 g",
      "Azúcar: 40 g",
      "Sal: 3 g",
      "Leche vegetal tibia: 220 ml",
      "Aceite: 30 ml",
      "Huevo: 1 u",
      "Vainilla: 1 cdta"
    ], 
    instructions: [
      "Mezclá los secos en un bol.",
      "En otro, batí leche, huevo, aceite y vainilla.",
      "Uní ambos y mezclá hasta lograr masa espesa.",
      "Verté en molde y horneá 30–35 min a 180 °C.",
      "Dejá enfriar antes de cortar."
    ], 
    prepTime: "10 min", 
    cookTime: "30-35 min", 
    servings: "10 rebanadas",
    chefTip: "Pan suave y ligeramente dulce. Ideal para tostadas con manteca o mermelada. Podés hacerlo sin huevo: sumá 60 ml más de leche y 5 ml de aceite."
  },
  { 
    id: "61", 
    title: "61. 🍫 Pan de chocolate marmolado (molde)", 
    categoryId: "panes-dulces", 
    ingredients: [
      "Harina de arroz: 180 g",
      "Fécula de maíz: 60 g",
      "Polvo de hornear: 8 g",
      "Sal: 2 g",
      "Huevo: 2 u",
      "Azúcar: 60 g",
      "Aceite: 40 ml",
      "Leche vegetal: 120 ml",
      "Cacao sin azúcar: 20 g",
      "Esencia de vainilla: 1 cdta"
    ], 
    instructions: [
      "Precalentá el horno a 180 °C.",
      "Mezclá secos excepto el cacao.",
      "En otro bol, batí huevos, azúcar, leche y aceite.",
      "Uní y dividí la mezcla: una parte vainilla, otra con cacao.",
      "Verté ambas alternadas en molde y mezclá con cuchillo para efecto marmolado.",
      "Horneá 35–40 min."
    ], 
    prepTime: "15 min", 
    cookTime: "35-40 min", 
    servings: "10-12 rebanadas",
    chefTip: "Textura húmeda, sabor equilibrado. Perfecto para meriendas o desayunos especiales. Podés añadir chips de chocolate o ralladura de naranja."
  },
  { 
    id: "62", 
    title: "62. 🍌 Pan de banana (banana bread) sin gluten", 
    categoryId: "panes-dulces", 
    ingredients: [
      "Bananas maduras: 3 u (≈ 300 g)",
      "Huevo: 1 u",
      "Aceite: 40 ml",
      "Azúcar mascabo: 60 g",
      "Harina de arroz: 150 g",
      "Harina de almendra: 70 g",
      "Polvo de hornear: 8 g",
      "Canela: 1 cdta",
      "Sal: 1 pizca",
      "Nueces o chips de chocolate: 50 g"
    ], 
    instructions: [
      "Precalentá horno a 180 °C.",
      "Pisá las bananas y mezclá con el huevo, aceite y azúcar.",
      "Incorporá las harinas, polvo de hornear, canela y sal.",
      "Añadí las nueces o chips.",
      "Verté en molde y horneá 40–45 min."
    ], 
    prepTime: "10 min", 
    cookTime: "40-45 min", 
    servings: "10-12 rebanadas",
    chefTip: "Clásico, húmedo y aromático. Cuanto más maduras las bananas, mejor sabor. Perfecto para congelar en rebanadas."
  },
  { 
    id: "63", 
    title: "63. 🥥 Pan de coco dulce (rebanado)", 
    categoryId: "panes-dulces", 
    ingredients: [
      "Harina de coco: 60 g",
      "Fécula de maíz: 40 g",
      "Polvo de hornear: 6 g",
      "Sal: 2 g",
      "Huevos: 3 u",
      "Leche vegetal: 150 ml",
      "Aceite de coco: 30 ml",
      "Azúcar o miel: 40 g",
      "Esencia de vainilla: 1 cdta"
    ], 
    instructions: [
      "Precalentá el horno a 180 °C.",
      "Mezclá secos.",
      "En otro bol, batí huevos, leche, aceite y azúcar.",
      "Uní todo y mezclá.",
      "Verté en molde y horneá 30–35 min."
    ], 
    prepTime: "10 min", 
    cookTime: "30-35 min", 
    servings: "8-10 rebanadas",
    chefTip: "Pan húmedo, de sabor tropical. Podés decorarlo con coco rallado encima. Ideal para desayunos o colaciones."
  },
  { 
    id: "64", 
    title: "64. 🍇 Pan de pasas y canela (sin trigo)", 
    categoryId: "panes-dulces", 
    ingredients: [
      "Harina de arroz integral: 150 g",
      "Fécula de maíz: 70 g",
      "Polvo de hornear: 8 g",
      "Canela: 2 g",
      "Sal: 2 g",
      "Huevo: 2 u",
      "Aceite: 30 ml",
      "Leche vegetal: 120 ml",
      "Azúcar mascabo: 50 g",
      "Pasas: 50 g"
    ], 
    instructions: [
      "Precalentá el horno a 180 °C.",
      "Mezclá los secos.",
      "En otro bol, batí huevos, aceite, leche y azúcar.",
      "Uní todo y añadí las pasas.",
      "Verté en molde y horneá 35–40 min."
    ], 
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10 rebanadas",
    chefTip: "Miga húmeda y aroma especiado. Si querés textura más suave, hidratá las pasas 10 min antes. Perfecto con manteca o miel."
  },
  { 
    id: "65", 
    title: "65. 🍎 Pan de manzana y nuez (especiado)", 
    categoryId: "panes-dulces", 
    ingredients: [
      "Harina de arroz: 160 g",
      "Fécula de maíz: 60 g",
      "Polvo de hornear: 8 g",
      "Canela: 1 cdta",
      "Nuez moscada: ½ cdta",
      "Sal: 2 g",
      "Huevos: 2 u",
      "Aceite: 40 ml",
      "Azúcar mascabo: 70 g",
      "Puré de manzana natural: 150 g",
      "Manzana rallada: 100 g",
      "Nueces picadas: 50 g"
    ], 
    instructions: [
      "Precalentá horno a 180 °C.",
      "Mezclá harinas, fécula, polvo de hornear y especias.",
      "En otro bol, batí huevos, aceite, azúcar y puré.",
      "Incorporá la manzana rallada y las nueces.",
      "Verté en molde y horneá 40–45 min."
    ], 
    prepTime: "15 min", 
    cookTime: "40-45 min", 
    servings: "10-12 rebanadas",
    chefTip: "Aroma cálido y miga húmeda. Ideal con café o té de la tarde. Podés reemplazar nueces por almendras o pasas."
  },
  { 
    id: "66", 
    title: "66. 🍯 Pan brioche rápido sin gluten (en molde)", 
    categoryId: "panes-dulces", 
    ingredients: [
      "Harina de arroz: 180 g",
      "Fécula de papa: 80 g",
      "Psyllium: 6 g",
      "Polvo de hornear: 8 g",
      "Sal: 3 g",
      "Azúcar: 50 g",
      "Huevos: 3 u",
      "Aceite o manteca derretida: 40 ml",
      "Leche vegetal tibia: 100 ml",
      "Vainilla: 1 cdta"
    ], 
    instructions: [
      "Precalentá horno a 180 °C.",
      "Mezclá secos.",
      "En otro bol, batí huevos, leche, aceite y vainilla.",
      "Combiná ambas partes hasta masa cremosa.",
      "Verté en molde y horneá 35–40 min."
    ], 
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10 rebanadas",
    chefTip: "Miga tierna y ligeramente dulce. Podés sumarle ralladura de limón o chips de chocolate. Perfecto para rebanar y tostar."
  },
  { 
    id: "67", 
    title: "67. 🍯 Pan dulce de miel (textura tierna)", 
    categoryId: "panes-dulces", 
    ingredients: [
      "Harina de arroz integral: 150 g",
      "Fécula de maíz: 70 g",
      "Polvo de hornear: 8 g",
      "Sal: 3 g",
      "Huevos: 2 u",
      "Aceite: 40 ml",
      "Miel: 60 g",
      "Leche vegetal: 100 ml",
      "Canela (opcional): ½ cdta"
    ], 
    instructions: [
      "Precalentá horno a 180 °C.",
      "Mezclá los secos.",
      "Batí huevos, miel, aceite y leche.",
      "Uní todo hasta masa homogénea.",
      "Verté en molde y horneá 35–40 min."
    ], 
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10 rebanadas",
    chefTip: "Dulzura natural y aroma suave. Si querés más esponjoso, batí los huevos 2–3 min antes de mezclar. Ideal para acompañar con mantequilla o frutas frescas."
  },
  { 
    id: "68", 
    title: "68. 🥕 Pan de zanahoria dulce (fácil)", 
    categoryId: "panes-dulces", 
    ingredients: [
      "Zanahoria rallada fina: 150 g",
      "Harina de arroz: 150 g",
      "Fécula de maíz: 70 g",
      "Polvo de hornear: 8 g",
      "Canela: 1 cdta",
      "Huevos: 2 u",
      "Aceite: 40 ml",
      "Azúcar mascabo: 60 g",
      "Leche vegetal: 100 ml"
    ], 
    instructions: [
      "Precalentá horno a 180 °C.",
      "Mezclá secos.",
      "Batí huevos, aceite, azúcar y leche.",
      "Incorporá la zanahoria rallada.",
      "Verté en molde y horneá 35–40 min."
    ], 
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10 rebanadas",
    chefTip: "Pan dulce y colorido, ideal para meriendas. Podés sumarle nueces o coco rallado. Si lo querés más húmedo, aumentá 10 ml de aceite."
  },
  { 
    id: "69", 
    title: "69. 🍮 Pan \"colchón de vainilla\" (esponjoso, corteza suave)", 
    categoryId: "panes-dulces", 
    ingredients: [
      "Harina de arroz: 150 g",
      "Fécula de maíz: 60 g",
      "Polvo de hornear: 8 g",
      "Sal: 2 g",
      "Azúcar: 70 g",
      "Huevos: 3 u",
      "Aceite: 40 ml",
      "Leche vegetal: 120 ml",
      "Esencia de vainilla: 2 cdas"
    ], 
    instructions: [
      "Precalentá horno a 180 °C.",
      "Batí huevos y azúcar 2 min hasta espumar.",
      "Incorporá aceite, leche y vainilla.",
      "Añadí los secos y mezclá suave.",
      "Verté en molde y horneá 30–35 min."
    ], 
    prepTime: "10 min", 
    cookTime: "30-35 min", 
    servings: "10 rebanadas",
    chefTip: "Pan aireado y liviano, tipo bizcochuelo suave. Podés servirlo con frutas o crema vegetal. No lo sobrecocines, o perderá su ternura."
  },
  { 
    id: "70", 
    title: "70. 🌸 Pan dulce de anís (tradicional adaptado)", 
    categoryId: "panes-dulces", 
    ingredients: [
      "Harina de arroz: 180 g",
      "Fécula de papa: 80 g",
      "Polvo de hornear: 8 g",
      "Semillas de anís: 2 g",
      "Sal: 2 g",
      "Huevos: 2 u",
      "Azúcar: 60 g",
      "Aceite: 40 ml",
      "Leche vegetal: 120 ml"
    ], 
    instructions: [
      "Precalentá horno a 180 °C.",
      "Mezclá secos.",
      "Batí huevos, azúcar, leche y aceite.",
      "Combiná ambas partes y mezclá bien.",
      "Verté en molde y horneá 40–45 min."
    ], 
    prepTime: "10 min", 
    cookTime: "40-45 min", 
    servings: "10-12 rebanadas",
    chefTip: "Pan aromático y delicado. Si no tenés anís, podés usar hinojo o vainilla. Excelente para acompañar café o infusiones."
  },

  // Categoría 7: Panes Festivos (10)
  { 
    id: "71", 
    title: "71. 🎀 Rosca dulce sin gluten (trenzada)", 
    categoryId: "panes-festivos", 
    ingredients: [
      "Harina de arroz: 200 g",
      "Fécula de papa: 80 g",
      "Fécula de tapioca: 60 g",
      "Psyllium: 8 g",
      "Levadura seca: 7 g",
      "Azúcar: 60 g",
      "Sal: 3 g",
      "Leche vegetal tibia: 200 ml",
      "Huevo: 2 u",
      "Aceite o manteca derretida: 50 ml",
      "Esencia de vainilla o ralladura de limón: 1 cdta",
      "Opcional: pasas, frutas confitadas, azúcar glas para decorar"
    ], 
    instructions: [
      "Mezclá secos: harinas, féculas, psyllium, levadura, azúcar y sal.",
      "En otro bol, batí leche, huevos, aceite y vainilla.",
      "Uní todo y mezclá hasta obtener masa blanda.",
      "Dejá levar 1 h tapado.",
      "Formá una trenza o aro, colocá en bandeja.",
      "Dejá levar 30 min más y horneá 30–35 min a 180 °C."
    ], 
    prepTime: "1h 40min", 
    cookTime: "30-35 min", 
    servings: "10-12 rebanadas",
    chefTip: "Queda suave y aromática. Podés rellenarla con crema pastelera o dulce de leche. Al salir del horno, pincelala con miel tibia para brillo."
  },
  { 
    id: "72", 
    title: "72. 🍊 Panettone sin gluten (frutas y cítricos)", 
    categoryId: "panes-festivos", 
    ingredients: [
      "Harina de arroz: 200 g",
      "Fécula de papa: 100 g",
      "Harina de almendra: 60 g",
      "Psyllium: 8 g",
      "Levadura seca: 7 g",
      "Azúcar: 70 g",
      "Sal: 3 g",
      "Leche vegetal tibia: 220 ml",
      "Huevos: 3 u",
      "Manteca o aceite: 60 g",
      "Ralladura de naranja y limón: 1 cda",
      "Frutas abrillantadas o pasas: 80 g",
      "Esencia de vainilla y de almendra: 1 cdta cada una"
    ], 
    instructions: [
      "Mezclá secos: harinas, fécula, psyllium, levadura, azúcar y sal.",
      "En otro bol, batí leche, huevos, manteca y esencias.",
      "Combiná todo, mezclá bien y añadí ralladuras y frutas.",
      "Verté en molde alto de panettone.",
      "Levá 1 h o hasta que duplique.",
      "Horneá 40–45 min a 180 °C."
    ], 
    prepTime: "1h 30min", 
    cookTime: "40-45 min", 
    servings: "1 pan grande (8 porciones)",
    chefTip: "Esponjoso y fragante. Si querés textura más húmeda, agregá 1 cda de miel. Conservá en bolsa de tela o recipiente hermético."
  },
  { 
    id: "73", 
    title: "73. 🎄 Pan de Pascua sin gluten (especias y frutos secos)", 
    categoryId: "panes-festivos", 
    ingredients: [
      "Harina de arroz integral: 180 g",
      "Fécula de papa: 100 g",
      "Harina de avena GF: 60 g",
      "Psyllium: 8 g",
      "Levadura seca: 7 g",
      "Azúcar mascabo: 80 g",
      "Sal: 3 g",
      "Leche vegetal tibia: 220 ml",
      "Aceite: 50 ml",
      "Huevo: 2 u",
      "Canela, clavo, nuez moscada: ½ cdta cada una",
      "Frutas secas (pasas, nueces, almendras): 100 g"
    ], 
    instructions: [
      "Mezclá los secos y especias.",
      "Batí leche, huevo y aceite.",
      "Combiná ambas mezclas.",
      "Añadí las frutas secas y revolvé.",
      "Verté en molde, dejá levar 1 h y horneá 40 min a 180 °C."
    ], 
    prepTime: "1h 15min", 
    cookTime: "40 min", 
    servings: "10-12 rebanadas",
    chefTip: "Aroma navideño y miga densa. Podés cubrir con glasé de azúcar y limón. Perfecto para regalar en fiestas."
  },
  { 
    id: "74", 
    title: "74. 🎅 Stollen sin gluten (relleno de mazapán)", 
    categoryId: "panes-festivos", 
    ingredients: [
      "Harina de arroz: 200 g",
      "Harina de almendra: 100 g",
      "Fécula de maíz: 60 g",
      "Psyllium: 8 g",
      "Levadura seca: 7 g",
      "Azúcar: 60 g",
      "Sal: 3 g",
      "Leche vegetal tibia: 200 ml",
      "Manteca o aceite: 50 g",
      "Huevo: 1 u",
      "Ralladura de limón: 1 cdta",
      "Mazapán: 100 g (para relleno)",
      "Pasas y almendras picadas: 60 g"
    ], 
    instructions: [
      "Mezclá los secos.",
      "Batí leche, huevo, manteca y ralladura.",
      "Combiná ambas mezclas, añadí pasas y almendras.",
      "Estirá la masa y colocá una tira de mazapán en el centro.",
      "Doblá y sellá los bordes.",
      "Dejá levar 1 h y horneá 40 min a 180 °C.",
      "Al salir, espolvoreá con azúcar impalpable."
    ], 
    prepTime: "1h 30min", 
    cookTime: "40 min", 
    servings: "10 porciones",
    chefTip: "Tradicional alemán adaptado, muy aromático. Guardá en papel y lata, mejora con el tiempo. Podés reemplazar mazapán por pasta de dátiles o frutos secos."
  },
  { 
    id: "75", 
    title: "75. 🍫 Babka de chocolate sin gluten (trenza)", 
    categoryId: "panes-festivos", 
    ingredients: [
      "Harina de arroz: 200 g",
      "Fécula de papa: 80 g",
      "Harina de almendra: 60 g",
      "Psyllium: 8 g",
      "Levadura seca: 7 g",
      "Azúcar: 50 g",
      "Sal: 3 g",
      "Leche vegetal tibia: 200 ml",
      "Aceite o manteca: 40 ml",
      "Huevo: 1 u",
      "Cacao: 20 g",
      "Chocolate picado: 60 g"
    ], 
    instructions: [
      "Mezclá secos: harinas, fécula, psyllium, levadura, azúcar, sal.",
      "Agregá leche, aceite y huevo, mezclá.",
      "Dividí la masa en dos, agregá cacao a una parte.",
      "Extendé ambas, colocá chocolate picado y trenzá.",
      "Dejá levar 45 min.",
      "Horneá 35–40 min a 180 °C."
    ], 
    prepTime: "1h 15min", 
    cookTime: "35-40 min", 
    servings: "10 rebanadas",
    chefTip: "Pan dulce marmolado, tierno y fragante. Si querés más brillo, pincelá con almíbar al salir del horno. Guardalo tapado, se mantiene fresco 3–4 días."
  },
  { 
    id: "76", 
    title: "76. 🌼 Challah sin gluten (trenzado enriquecido)", 
    categoryId: "panes-festivos", 
    ingredients: [
      "Harina de arroz: 200 g",
      "Fécula de papa: 100 g",
      "Harina de almendra: 60 g",
      "Psyllium: 8 g",
      "Levadura seca: 7 g",
      "Azúcar: 50 g",
      "Sal: 3 g",
      "Agua tibia o leche vegetal: 220 ml",
      "Huevo: 2 u + 1 para pincelar",
      "Aceite: 40 ml",
      "Miel: 20 g"
    ], 
    instructions: [
      "Mezclá harinas, fécula, psyllium, levadura, azúcar y sal.",
      "Batí agua, huevos, aceite y miel.",
      "Uní ambas mezclas hasta lograr masa húmeda.",
      "Dividí en 3 partes, formá tiras y trenzá sobre bandeja.",
      "Dejá levar 45 min tapada.",
      "Pincelá con huevo y horneá 35–40 min a 180 °C."
    ], 
    prepTime: "1h 15min", 
    cookTime: "35-40 min", 
    servings: "10-12 rebanadas",
    chefTip: "Dorada, tierna y ligeramente dulce. Si querés versión vegana, reemplazá los huevos por 60 ml de leche vegetal + 1 cda de psyllium adicional. Podés agregar semillas de sésamo arriba."
  },
  { 
    id: "77", 
    title: "77. 🎁 Roscones individuales sin gluten", 
    categoryId: "panes-festivos", 
    ingredients: [
      "Harina de arroz: 180 g",
      "Fécula de maíz: 80 g",
      "Harina de almendra: 40 g",
      "Psyllium: 6 g",
      "Levadura seca: 6 g",
      "Azúcar: 60 g",
      "Sal: 3 g",
      "Leche vegetal tibia: 200 ml",
      "Huevo: 1 u",
      "Aceite: 40 ml",
      "Ralladura de naranja: 1 cdta",
      "Decoración: azúcar perlado, frutas confitadas"
    ], 
    instructions: [
      "Mezclá secos.",
      "Batí leche, huevo, aceite y ralladura.",
      "Uní todo y mezclá hasta masa cremosa.",
      "Verté en moldes individuales engrasados (aros o flaneras).",
      "Dejá levar 40 min y decorá.",
      "Horneá 25–30 min a 180 °C."
    ], 
    prepTime: "1h 10min", 
    cookTime: "25-30 min", 
    servings: "6 unidades",
    chefTip: "Súper suaves y perfumados. Perfectos para regalar o servir en brunch. Podés rellenarlos con crema pastelera o mermelada."
  },
  { 
    id: "78", 
    title: "78. 🌸 Pan dulce de cardamomo (estilo nórdico)", 
    categoryId: "panes-festivos", 
    ingredients: [
      "Harina de arroz: 200 g",
      "Fécula de papa: 80 g",
      "Harina de almendra: 50 g",
      "Psyllium: 8 g",
      "Levadura seca: 7 g",
      "Azúcar: 60 g",
      "Sal: 3 g",
      "Leche vegetal tibia: 220 ml",
      "Aceite o manteca: 50 ml",
      "Huevo: 1 u",
      "Cardamomo molido: 1 cdta",
      "Esencia de vainilla: 1 cdta"
    ], 
    instructions: [
      "Mezclá secos.",
      "Batí leche, huevo, aceite y especias.",
      "Combiná todo hasta masa cremosa.",
      "Formá bollos o enrollá y formá caracoles.",
      "Dejá levar 40 min.",
      "Horneá 25–30 min a 180 °C."
    ], 
    prepTime: "1h 10min", 
    cookTime: "25-30 min", 
    servings: "10 rebanadas",
    chefTip: "Sabor elegante y especiado. Podés decorar con almendras fileteadas y azúcar. Si querés versión sin huevo, usá 60 ml de leche extra."
  },
  { 
    id: "79", 
    title: "79. 🕊️ Colomba pascual sin gluten", 
    categoryId: "panes-festivos", 
    ingredients: [
      "Harina de arroz: 180 g",
      "Fécula de papa: 100 g",
      "Harina de almendra: 50 g",
      "Psyllium: 8 g",
      "Levadura seca: 7 g",
      "Azúcar: 70 g",
      "Sal: 3 g",
      "Leche vegetal tibia: 220 ml",
      "Huevo: 2 u",
      "Aceite o manteca: 50 ml",
      "Ralladura de naranja: 1 cda",
      "Almendras fileteadas y azúcar glas para decorar"
    ], 
    instructions: [
      "Mezclá secos y ralladura.",
      "Batí leche, huevo y aceite.",
      "Combiná todo y mezclá hasta obtener masa cremosa.",
      "Verté en molde (forma de paloma o rectangular).",
      "Dejá levar 45–60 min.",
      "Decorá con almendras y horneá 40–45 min a 180 °C."
    ], 
    prepTime: "1h 15min", 
    cookTime: "40-45 min", 
    servings: "10 rebanadas",
    chefTip: "Pan liviano y aromático, símbolo de Pascua. Podés agregar chips de chocolate o frutas confitadas. Conservá cubierto en paño seco."
  },
  { 
    id: "80", 
    title: "80. 🍂 Pan especiado de jengibre (tipo loaf festivo)", 
    categoryId: "panes-festivos", 
    ingredients: [
      "Harina de arroz integral: 150 g",
      "Fécula de maíz: 80 g",
      "Polvo de hornear: 8 g",
      "Jengibre en polvo: 1 cdta",
      "Canela: 1 cdta",
      "Nuez moscada: ½ cdta",
      "Sal: 2 g",
      "Huevo: 2 u",
      "Aceite: 40 ml",
      "Miel o azúcar mascabo: 60 g",
      "Leche vegetal: 100 ml"
    ], 
    instructions: [
      "Precalentá el horno a 180 °C.",
      "Mezclá harinas, fécula, polvo de hornear y especias.",
      "En otro bol, batí huevos, miel, aceite y leche.",
      "Combiná ambas partes y mezclá.",
      "Verté en molde y horneá 35–40 min."
    ], 
    prepTime: "15 min", 
    cookTime: "35-40 min", 
    servings: "10 rebanadas",
    chefTip: "Pan húmedo y fragante, típico de invierno. Podés cubrirlo con glaseado de limón o miel. Ideal para regalar o disfrutar en desayuno navideño."
  },

  // Categoría 8: High-Protein / Low-Carb (8)
  { 
    id: "81", 
    title: "81. 💪 Pan proteico de clara y almendra (keto)", 
    categoryId: "high-protein", 
    ingredients: [
      "Harina de almendra: 150 g",
      "Polvo de hornear: 8 g",
      "Sal: 3 g",
      "Claras de huevo: 5 u (≈ 160 g)",
      "Aceite de oliva: 20 ml",
      "Agua: 40 ml",
      "Semillas (opcional): 20 g"
    ], 
    instructions: [
      "Precalentá el horno a 180 °C.",
      "Batí ligeramente las claras hasta espumar.",
      "Agregá aceite y agua.",
      "Incorporá la harina, el polvo de hornear y la sal.",
      "Mezclá suave, verté en molde y horneá 25–30 min."
    ], 
    prepTime: "10 min", 
    cookTime: "25-30 min", 
    servings: "8 rebanadas",
    chefTip: "Miga húmeda y liviana, perfecta para tostar. Podés añadir hierbas o queso rallado. Guardá en heladera hasta 5 días."
  },
  { 
    id: "82", 
    title: "82. 🌿 Pan de garbanzo y sésamo (alto en proteína)", 
    categoryId: "high-protein", 
    ingredients: [
      "Harina de garbanzo: 200 g",
      "Polvo de hornear: 6 g",
      "Sal: 4 g",
      "Agua tibia: 250 ml",
      "Aceite: 30 ml",
      "Semillas de sésamo: 20 g",
      "Comino o cúrcuma (opcional): ½ cdta"
    ], 
    instructions: [
      "Mezclá todos los ingredientes hasta obtener masa cremosa.",
      "Verté en molde engrasado.",
      "Horneá 30–35 min a 190 °C.",
      "Enfriá antes de cortar."
    ], 
    prepTime: "10 min", 
    cookTime: "30-35 min", 
    servings: "8-10 rebanadas",
    chefTip: "Pan rico en fibra y proteínas vegetales. Ideal para acompañar hummus o sopas. Podés tostar las semillas para más aroma."
  },
  { 
    id: "83", 
    title: "83. 🥣 Pan de yogurt griego vegetal + chía (low-carb)", 
    categoryId: "high-protein", 
    ingredients: [
      "Harina de almendra: 120 g",
      "Psyllium: 6 g",
      "Polvo de hornear: 8 g",
      "Sal: 3 g",
      "Yogurt vegetal alto en proteína: 150 g",
      "Agua: 80 ml",
      "Chía: 15 g",
      "Aceite: 20 ml"
    ], 
    instructions: [
      "Mezclá secos: harina, psyllium, polvo de hornear, sal y chía.",
      "Agregá yogurt, agua y aceite.",
      "Mezclá y verté en molde pequeño.",
      "Horneá 30 min a 180 °C."
    ], 
    prepTime: "10 min", 
    cookTime: "30 min", 
    servings: "8 rebanadas",
    chefTip: "Miga elástica y húmeda. Podés usar yogurt de coco o soya. Perfecto para desayunos saludables."
  },
  { 
    id: "84", 
    title: "84. 🌻 Pan de linaza dorada (ultra fibra)", 
    categoryId: "high-protein", 
    ingredients: [
      "Linaza dorada molida: 120 g",
      "Polvo de hornear: 6 g",
      "Sal: 3 g",
      "Huevo: 4 u",
      "Agua: 80 ml",
      "Aceite: 20 ml"
    ], 
    instructions: [
      "Mezclá todos los ingredientes.",
      "Verté en molde pequeño.",
      "Horneá 25–30 min a 180 °C.",
      "Dejá enfriar antes de cortar."
    ], 
    prepTime: "10 min", 
    cookTime: "25-30 min", 
    servings: "8 rebanadas",
    chefTip: "Pan denso y saciante. Excelente fuente de omega 3. Podés hacerlo en microondas: 2–3 min por porción."
  },
  { 
    id: "85", 
    title: "85. 🥜 Pan de semillas al completo (sin harinas)", 
    categoryId: "high-protein", 
    ingredients: [
      "Semillas de girasol: 80 g",
      "Semillas de calabaza: 50 g",
      "Chía: 20 g",
      "Linaza molida: 50 g",
      "Avena GF en hojuelas: 30 g (opcional)",
      "Agua: 250 ml",
      "Aceite: 20 ml",
      "Sal: 4 g"
    ], 
    instructions: [
      "Mezclá todo y dejá reposar 30 min hasta que espese.",
      "Verté en molde y alisá.",
      "Horneá 40–45 min a 190 °C."
    ], 
    prepTime: "40 min", 
    cookTime: "40-45 min", 
    servings: "12 rebanadas",
    chefTip: "Pan crujiente, tipo \"multisemillas\". Sin harinas, solo semillas y fibra. Perfecto para untar o comer con sopas."
  },
  { 
    id: "86", 
    title: "86. 🥥 Pan de coco y proteína (suero/vegana)", 
    categoryId: "high-protein", 
    ingredients: [
      "Harina de coco: 40 g",
      "Proteína en polvo (vegetal o whey): 30 g",
      "Polvo de hornear: 6 g",
      "Sal: 2 g",
      "Huevos: 4 u",
      "Agua: 100 ml",
      "Aceite de coco: 20 ml"
    ], 
    instructions: [
      "Mezclá secos.",
      "Batí huevos, agua y aceite.",
      "Uní ambas mezclas y verté en molde.",
      "Horneá 25–30 min a 180 °C."
    ], 
    prepTime: "10 min", 
    cookTime: "25-30 min", 
    servings: "8 rebanadas",
    chefTip: "Miga húmeda y sabor suave. Aporta proteína y saciedad. También podés hacerlo en formato muffin."
  },
  { 
    id: "87", 
    title: "87. ☁️ Pan tipo \"cloud bread\" (sin harinas, esponjoso)", 
    categoryId: "high-protein", 
    ingredients: [
      "Huevos: 3 u (separadas claras y yemas)",
      "Yogurt vegetal o queso crema: 60 g",
      "Polvo de hornear: 3 g",
      "Sal: 1 pizca"
    ], 
    instructions: [
      "Batí las claras a nieve.",
      "Mezclá las yemas con el yogurt y el polvo de hornear.",
      "Integrá con movimientos suaves.",
      "Colocá cucharadas sobre bandeja.",
      "Horneá 20–22 min a 180 °C."
    ], 
    prepTime: "10 min", 
    cookTime: "20-22 min", 
    servings: "6 discos",
    chefTip: "Ligeros como nubes, sin harinas. Perfectos para sandwiches o mini pizzas. Guardalos en heladera hasta 3 días."
  },
  { 
    id: "88", 
    title: "88. 🥒 Pan de calabacín rallado (low-carb, húmedo)", 
    categoryId: "high-protein", 
    ingredients: [
      "Calabacín rallado y escurrido: 150 g",
      "Harina de almendra: 120 g",
      "Psyllium: 6 g",
      "Polvo de hornear: 8 g",
      "Sal: 3 g",
      "Huevo: 3 u",
      "Aceite: 30 ml",
      "Semillas (opcional): 20 g"
    ], 
    instructions: [
      "Mezclá huevos, aceite y calabacín.",
      "Agregá secos y mezclá.",
      "Verté en molde y horneá 35–40 min a 180 °C."
    ], 
    prepTime: "15 min", 
    cookTime: "35-40 min", 
    servings: "10 rebanadas",
    chefTip: "Pan húmedo, sabroso y bajo en carbohidratos. Perfecto para tostar o servir con hummus. Escurrí bien el calabacín para que no quede aguado."
  },

  // Categoría 9: Regionales LATAM (12)
  { 
    id: "89", 
    title: "89. 🇧🇷 Pão de queijo (pan de queso brasileño) sin gluten", 
    categoryId: "regionales-latam", 
    ingredients: [
      "Fécula de mandioca dulce: 250 g",
      "Leche vegetal: 120 ml",
      "Aceite o manteca: 50 ml",
      "Huevo: 2 u",
      "Queso rallado (duro o semicurado): 120 g",
      "Sal: 4 g"
    ], 
    instructions: [
      "Calentá leche y aceite hasta que hiervan.",
      "Verté sobre la fécula y mezclá con cuchara.",
      "Agregá los huevos y el queso; mezclá hasta masa suave.",
      "Formá bolitas y horneá 20–25 min a 200 °C."
    ], 
    prepTime: "10 min", 
    cookTime: "20-25 min", 
    servings: "12 unidades",
    chefTip: "Textura elástica y corazón tierno. Se pueden congelar antes de hornear. Servilos recién hechos, aún tibios."
  },
  { 
    id: "90", 
    title: "90. 🇵🇾 Chipa paraguaya (quesuda, almidón de yuca)", 
    categoryId: "regionales-latam", 
    ingredients: [
      "Fécula de mandioca: 250 g",
      "Queso rallado: 150 g",
      "Huevos: 2 u",
      "Leche o agua: 60 ml",
      "Aceite o manteca: 40 ml",
      "Polvo de hornear: 5 g",
      "Sal: 4 g"
    ], 
    instructions: [
      "Mezclá todos los ingredientes hasta masa firme.",
      "Formá rosquitas o bollos.",
      "Horneá 25–30 min a 190 °C."
    ], 
    prepTime: "10 min", 
    cookTime: "25-30 min", 
    servings: "10 unidades",
    chefTip: "Corteza crocante, miga suave. Podés usar mezcla de quesos duros y blandos. Clásico de mate o café paraguayo."
  },
  { 
    id: "91", 
    title: "91. 🧀 Cachitos de yuca (rellenos salados)", 
    categoryId: "regionales-latam", 
    ingredients: [
      "Yuca cocida y pisada: 300 g",
      "Fécula de maíz: 40 g",
      "Queso rallado: 100 g",
      "Huevo: 1 u",
      "Sal: 4 g",
      "Relleno: jamón, queso o vegetales al gusto"
    ], 
    instructions: [
      "Mezclá yuca, fécula, queso, huevo y sal.",
      "Formá discos y colocá relleno.",
      "Cerrá en forma de medialuna.",
      "Horneá 25 min a 190 °C o dorá en sartén."
    ], 
    prepTime: "15 min", 
    cookTime: "25 min", 
    servings: "8 unidades",
    chefTip: "Suaves y dorados. Podés hacerlos dulces con relleno de guayaba. Se recalientan perfecto en air fryer."
  },
  { 
    id: "92", 
    title: "92. 🥔 Pan andino de papa (sin gluten)", 
    categoryId: "regionales-latam", 
    ingredients: [
      "Papa cocida y pisada: 250 g",
      "Harina de arroz: 100 g",
      "Fécula de maíz: 50 g",
      "Polvo de hornear: 6 g",
      "Sal: 4 g",
      "Aceite: 30 ml",
      "Agua tibia: 60 ml"
    ], 
    instructions: [
      "Mezclá todo hasta masa suave.",
      "Formá bollitos o discos.",
      "Horneá 25–30 min a 190 °C."
    ], 
    prepTime: "15 min", 
    cookTime: "25-30 min", 
    servings: "10 unidades",
    chefTip: "Textura húmeda y sabor delicado. Ideal para acompañar sopas o guisos. También podés cocinarlos en plancha."
  },
  { 
    id: "93", 
    title: "93. 🇪🇨 Pan de yuca horneado (Ecuador/Colombia)", 
    categoryId: "regionales-latam", 
    ingredients: [
      "Fécula de yuca: 250 g",
      "Queso fresco rallado: 150 g",
      "Huevo: 1 u",
      "Yogurt natural o vegetal: 100 ml",
      "Sal: 3 g"
    ], 
    instructions: [
      "Mezclá todos los ingredientes hasta masa homogénea.",
      "Formá bolitas y colocá en bandeja.",
      "Horneá 20–25 min a 200 °C."
    ], 
    prepTime: "10 min", 
    cookTime: "20-25 min", 
    servings: "12 unidades",
    chefTip: "Dorados por fuera, tiernos por dentro. Se pueden hacer mini para picadas. Si querés más crocantes, terminá 3 min en air fryer."
  },
  { 
    id: "94", 
    title: "94. 🇨🇴 Pan de bono sin gluten (versión casera)", 
    categoryId: "regionales-latam", 
    ingredients: [
      "Fécula de yuca: 200 g",
      "Harina de maíz precocida: 50 g",
      "Queso rallado: 150 g",
      "Huevo: 1 u",
      "Leche vegetal: 80 ml",
      "Polvo de hornear: 5 g"
    ], 
    instructions: [
      "Mezclá secos.",
      "Agregá queso, huevo y leche.",
      "Amasá y formá bollitos.",
      "Horneá 20–25 min a 200 °C."
    ], 
    prepTime: "10 min", 
    cookTime: "20-25 min", 
    servings: "10 unidades",
    chefTip: "Aroma irresistible al salir del horno. Crujientes por fuera, suaves por dentro. Servilos tibios."
  },
  { 
    id: "95", 
    title: "95. 🌾 Pan campesino costeño (adaptado GF)", 
    categoryId: "regionales-latam", 
    ingredients: [
      "Harina de arroz: 200 g",
      "Harina de maíz: 80 g",
      "Fécula de tapioca: 40 g",
      "Psyllium: 8 g",
      "Levadura seca: 6 g",
      "Azúcar: 10 g",
      "Sal: 5 g",
      "Agua tibia: 260 ml",
      "Aceite: 30 ml"
    ], 
    instructions: [
      "Mezclá secos.",
      "Agregá agua y aceite.",
      "Verté en molde, tapá y dejá levar 40 min.",
      "Horneá 35–40 min a 190 °C."
    ], 
    prepTime: "50 min", 
    cookTime: "35-40 min", 
    servings: "12 rebanadas",
    chefTip: "Sabor suave y miga dorada. Ideal para acompañar comidas típicas. Podés sumar semillas o coco rallado."
  },
  { 
    id: "96", 
    title: "96. 🇲🇽 Pan telera sin gluten (adaptación mexicana)", 
    categoryId: "regionales-latam", 
    ingredients: [
      "Harina de arroz: 200 g",
      "Fécula de papa: 80 g",
      "Psyllium: 8 g",
      "Levadura seca: 6 g",
      "Azúcar: 10 g",
      "Sal: 5 g",
      "Agua tibia: 260 ml",
      "Aceite: 25 ml"
    ], 
    instructions: [
      "Mezclá secos.",
      "Agregá agua y aceite.",
      "Formá panes ovalados, haceles un corte central.",
      "Levá 40 min.",
      "Horneá 30 min a 190 °C."
    ], 
    prepTime: "50 min", 
    cookTime: "30 min", 
    servings: "6 teleras medianas",
    chefTip: "Pan suave, ideal para tortas mexicanas. Si querés dorado extra, pincelá con aceite antes del horno. Se congela muy bien."
  },
  { 
    id: "97", 
    title: "97. 🇫🇷 Pan francés casero sin gluten (básico)", 
    categoryId: "regionales-latam", 
    ingredients: [
      "Harina de arroz: 200 g",
      "Fécula de tapioca: 100 g",
      "Psyllium: 8 g",
      "Levadura seca: 6 g",
      "Sal: 5 g",
      "Agua tibia: 280 ml",
      "Aceite: 20 ml"
    ], 
    instructions: [
      "Mezclá los secos.",
      "Agregá agua y aceite, mezclá bien.",
      "Formá baguettes y dejá levar 40 min.",
      "Horneá 30–35 min a 200 °C."
    ], 
    prepTime: "50 min", 
    cookTime: "30-35 min", 
    servings: "2 baguettes medianas",
    chefTip: "Corteza fina, interior tierno. Si querés más crocante, rociá con agua antes del horneado. Ideal para sándwiches o bruschettas."
  },
  { 
    id: "98", 
    title: "98. 🇪🇸 Pan gallego sin gluten (miga húmeda)", 
    categoryId: "regionales-latam", 
    ingredients: [
      "Harina de arroz integral: 180 g",
      "Harina de maíz: 100 g",
      "Fécula de papa: 80 g",
      "Psyllium: 8 g",
      "Levadura seca: 6 g",
      "Sal: 5 g",
      "Agua tibia: 280 ml",
      "Aceite: 25 ml"
    ], 
    instructions: [
      "Mezclá secos.",
      "Agregá agua y aceite.",
      "Verté en molde o formá pan redondo.",
      "Dejá levar 45 min.",
      "Horneá 40 min a 190 °C."
    ], 
    prepTime: "55 min", 
    cookTime: "40 min", 
    servings: "12 rebanadas",
    chefTip: "Miga húmeda y corteza firme. Perfecto para sopas o comidas saladas. Se conserva 3 días envuelto en paño."
  },
  { 
    id: "99", 
    title: "99. 🇮🇹 Pan tipo ciabatta latino (con aceite y sal)", 
    categoryId: "regionales-latam", 
    ingredients: [
      "Harina de arroz: 180 g",
      "Fécula de maíz: 80 g",
      "Fécula de tapioca: 60 g",
      "Psyllium: 8 g",
      "Levadura seca: 6 g",
      "Sal: 4 g",
      "Agua tibia: 280 ml",
      "Aceite de oliva: 30 ml"
    ], 
    instructions: [
      "Mezclá todos los ingredientes.",
      "Verté en molde alargado y alisá.",
      "Levá 40 min.",
      "Horneá 35 min a 190 °C."
    ], 
    prepTime: "50 min", 
    cookTime: "35 min", 
    servings: "8 rebanadas",
    chefTip: "Textura aireada y suave aroma a oliva. Perfecto para bruschettas o focaccias. Rocialo con sal gruesa y aceite antes de hornear."
  },
  { 
    id: "100", 
    title: "100. 🇦🇷 Pan bollo dulce criollo (sin gluten, aromático)", 
    categoryId: "regionales-latam", 
    ingredients: [
      "Harina de arroz: 200 g",
      "Fécula de papa: 80 g",
      "Psyllium: 8 g",
      "Levadura seca: 6 g",
      "Azúcar: 40 g",
      "Sal: 3 g",
      "Leche vegetal tibia: 220 ml",
      "Aceite: 40 ml",
      "Esencia de vainilla: 1 cdta",
      "Ralladura de limón: 1 cdta"
    ], 
    instructions: [
      "Mezclá los secos.",
      "Agregá leche, aceite y esencias.",
      "Amasá con espátula y formá bollos.",
      "Dejá levar 40 min.",
      "Horneá 30 min a 180 °C."
    ], 
    prepTime: "50 min", 
    cookTime: "30 min", 
    servings: "10 unidades",
    chefTip: "Pan suave, fragante y con toque criollo. Podés espolvorear azúcar o coco antes del horneado. Ideal para acompañar mate o café con leche."
  },

  // Categoría 10: Pizzas Sin Gluten (10)
  { 
    id: "101", 
    title: "1️⃣ Pizza Napolitana Sin Gluten (masa fina y borde dorado)",
    categoryId: "pizzas-sin-gluten",
    description: "Inspirada en la clásica pizza italiana, con base delgada y borde aireado. Su masa combina harinas ligeras que logran una textura crocante por fuera y suave al centro.",
    ingredients: [
      "Harina de arroz: 180 g",
      "Fécula de tapioca: 80 g",
      "Harina de sorgo: 60 g",
      "Psyllium husk: 10 g",
      "Levadura seca: 7 g",
      "Aceite de oliva: 20 ml",
      "Sal: 6 g",
      "Agua tibia: 230 ml"
    ], 
    instructions: [
      "Disolver la levadura en el agua tibia y dejar reposar 10 minutos.",
      "En un bol, mezclar harinas, psyllium y sal.",
      "Incorporar el agua con levadura y el aceite. Amasar con espátula hasta lograr una masa húmeda y elástica.",
      "Dejar reposar tapada 40 minutos.",
      "Estirar sobre papel de horno con los dedos engrasados hasta 3–4 mm de grosor.",
      "Prehornear 10 min a 220 °C, cubrir con salsa y toppings, y hornear otros 10–12 min."
    ],
    expectedTexture: "Borde aireado, base firme, centro tierno y aroma mediterráneo.",
    prepTime: "50 min", 
    cookTime: "20-22 min", 
    servings: "2 pizzas medianas",
    chefTip: "Para versión vegana, usá queso vegetal rallado y aceite de oliva infusionado con ajo."
  },
  { 
    id: "102", 
    title: "2️⃣ Pizza de Sartén Exprés (sin horno, lista en minutos)",
    categoryId: "pizzas-sin-gluten",
    description: "Ideal para días de apuro: se cocina directamente en sartén antiadherente, sin necesidad de levado.",
    ingredients: [
      "Harina de avena sin gluten: 100 g",
      "Harina de arroz: 80 g",
      "Fécula de maíz: 30 g",
      "Polvo de hornear: 6 g",
      "Sal: 3 g",
      "Aceite de oliva: 15 ml",
      "Agua tibia: 120–140 ml"
    ], 
    instructions: [
      "Mezclar los ingredientes secos.",
      "Agregar aceite y agua poco a poco hasta formar una masa suave.",
      "Estirar con rodillo hasta 20 cm de diámetro.",
      "Cocinar en sartén tapada a fuego medio 5 min por lado.",
      "Añadir salsa y queso, tapar 2 min más hasta derretir."
    ],
    expectedTexture: "Base crocante con interior tierno.",
    prepTime: "10 min", 
    cookTime: "12 min", 
    servings: "1 pizza",
    chefTip: "Usá sartén gruesa para evitar que se queme el fondo."
  },
  { 
    id: "103", 
    title: "3️⃣ Pizza de Coliflor Low-Carb (base vegetal y ligera)",
    categoryId: "pizzas-sin-gluten",
    description: "Una versión sin harinas, rica en fibra y sabor. Perfecta para dietas bajas en carbohidratos.",
    ingredients: [
      "Coliflor cruda rallada: 300 g",
      "Queso mozzarella rallado: 100 g",
      "Huevo: 1 u",
      "Harina de almendra: 30 g",
      "Sal y orégano al gusto"
    ], 
    instructions: [
      "Cocinar la coliflor al vapor 5 minutos y escurrir muy bien.",
      "Mezclar con los demás ingredientes hasta formar una masa compacta.",
      "Extender sobre bandeja con papel vegetal y formar un disco fino.",
      "Hornear 15 min a 200 °C, agregar toppings y hornear 10 min más."
    ],
    expectedTexture: "Masa flexible, dorada y con aroma vegetal suave.",
    prepTime: "15 min", 
    cookTime: "25 min", 
    servings: "1 pizza",
    chefTip: "Podés reemplazar el queso por mezcla de lino molido y levadura nutricional (opción vegana)."
  },
  { 
    id: "104", 
    title: "4️⃣ Pizza de Harina de Yuca y Queso (estilo brasileño)",
    categoryId: "pizzas-sin-gluten",
    description: "Una base elástica y sabrosa, inspirada en el 'pão de queijo'. Crocante afuera y masticable al centro.",
    ingredients: [
      "Fécula de yuca (tapioca): 200 g",
      "Queso rallado (duro o semicurado): 100 g",
      "Leche o bebida vegetal: 120 ml",
      "Aceite: 20 ml",
      "Sal: 4 g",
      "Huevo: 1 u"
    ], 
    instructions: [
      "Calentar leche con aceite y sal, y verter sobre la fécula.",
      "Mezclar y dejar templar. Incorporar queso y huevo.",
      "Formar la masa y estirarla sobre papel de horno.",
      "Hornear 12 min a 200 °C, cubrir y hornear 8 min más."
    ],
    expectedTexture: "Suave, dorada y elástica, con sabor a queso derretido.",
    prepTime: "15 min", 
    cookTime: "20 min", 
    servings: "1 pizza",
    chefTip: "Perfecta para air fryer: 190 °C por 10 min."
  },
  { 
    id: "105", 
    title: "5️⃣ Pizza de Avena y Semillas (rica en fibra y proteínas)",
    categoryId: "pizzas-sin-gluten",
    description: "Combina harinas integrales sin gluten y semillas que aportan textura y saciedad.",
    ingredients: [
      "Harina de avena GF: 150 g",
      "Harina de arroz integral: 80 g",
      "Semillas mixtas (chía, sésamo, girasol): 30 g",
      "Psyllium husk: 8 g",
      "Agua tibia: 230 ml",
      "Sal: 5 g",
      "Aceite: 15 ml",
      "Levadura seca: 5 g"
    ], 
    instructions: [
      "Activar la levadura en agua tibia 10 min.",
      "Mezclar secos y agregar líquido.",
      "Amasar hasta lograr masa húmeda y uniforme.",
      "Dejar levar 45 min, estirar y hornear 15 min a 200 °C.",
      "Agregar salsa y toppings, hornear 10 min más."
    ],
    prepTime: "55 min", 
    cookTime: "25 min", 
    servings: "2 pizzas"
  },
  { 
    id: "106", 
    title: "6️⃣ Pizza Integral Sin Gluten (masa rústica y aireada)",
    categoryId: "pizzas-sin-gluten",
    description: "Una base robusta, rica en fibra, con sabor artesanal. Ideal para quienes disfrutan masas más densas y nutritivas.",
    ingredients: [
      "Harina de arroz integral: 120 g",
      "Harina de sorgo: 80 g",
      "Harina de avena GF: 60 g",
      "Fécula de tapioca: 60 g",
      "Psyllium husk: 10 g",
      "Levadura seca: 7 g",
      "Sal marina: 6 g",
      "Aceite de oliva: 20 ml",
      "Agua tibia: 250 ml"
    ], 
    instructions: [
      "Activar la levadura en 50 ml del agua tibia.",
      "Mezclar las harinas, psyllium y sal.",
      "Agregar el agua restante y el aceite; amasar con espátula hasta masa húmeda.",
      "Reposar 1 hora en lugar cálido.",
      "Estirar, prehornear 10 min a 200 °C, cubrir y hornear 15 min más."
    ],
    expectedTexture: "Base firme, corteza crocante y miga húmeda.",
    prepTime: "1 h 10 min", 
    cookTime: "25 min", 
    servings: "2 pizzas medianas",
    chefTip: "Agregá 1 cucharadita de miel para favorecer el dorado sin usar azúcar refinada."
  },
  { 
    id: "107", 
    title: "7️⃣ Pizza de Almendra y Linaza (versión keto y sin lácteos)",
    categoryId: "pizzas-sin-gluten",
    description: "Masa baja en carbohidratos, rica en grasas saludables y con sabor a frutos secos.",
    ingredients: [
      "Harina de almendra: 120 g",
      "Harina de linaza dorada: 40 g",
      "Polvo de hornear: 6 g",
      "Sal: 3 g",
      "Huevos: 2 u",
      "Aceite de oliva: 15 ml",
      "Agua tibia: 30 ml"
    ], 
    instructions: [
      "Mezclar harinas, sal y polvo de hornear.",
      "Agregar huevos, aceite y agua.",
      "Amasar con espátula hasta masa maleable (no pegajosa).",
      "Extender entre papeles de horno de 3–4 mm.",
      "Hornear 12 min a 190 °C, añadir toppings y hornear 8 min más."
    ],
    expectedTexture: "Masa flexible, dorada y con aroma tostado.",
    prepTime: "10 min", 
    cookTime: "20 min", 
    servings: "1 pizza",
    chefTip: "Ideal para base de pizza blanca (sin salsa de tomate), con topping de vegetales grillados."
  },
  { 
    id: "108", 
    title: "8️⃣ Pizza Mediterránea con Aceitunas y Hierbas",
    categoryId: "pizzas-sin-gluten",
    description: "Aroma a campo italiano: masa ligera y perfumada con orégano, romero y aceitunas negras.",
    ingredients: [
      "Harina de arroz: 160 g",
      "Fécula de tapioca: 70 g",
      "Harina de maíz fina: 50 g",
      "Psyllium husk: 8 g",
      "Agua tibia: 230 ml",
      "Levadura seca: 6 g",
      "Aceite de oliva: 25 ml",
      "Aceitunas picadas: 30 g",
      "Hierbas secas: 1 cdta",
      "Sal: 5 g"
    ], 
    instructions: [
      "Activar la levadura en agua tibia.",
      "Mezclar secos, añadir líquidos y amasar.",
      "Incorporar las aceitunas y hierbas.",
      "Dejar levar 45 min.",
      "Estirar y hornear 12 min a 220 °C, agregar salsa y toppings, hornear 8 min más."
    ],
    expectedTexture: "Masa aireada con aroma herbal intenso y borde crocante.",
    prepTime: "55 min", 
    cookTime: "20 min", 
    servings: "2 pizzas"
  },
  { 
    id: "109", 
    title: "9️⃣ Mini Pizzas Individuales (listas para congelar)",
    categoryId: "pizzas-sin-gluten",
    description: "Porciones pequeñas, ideales para preparar, congelar y recalentar sin perder textura.",
    ingredients: [
      "Harina de arroz: 150 g",
      "Fécula de maíz: 60 g",
      "Harina de garbanzo: 40 g",
      "Psyllium husk: 6 g",
      "Levadura seca: 6 g",
      "Agua tibia: 220 ml",
      "Aceite: 20 ml",
      "Sal: 5 g"
    ], 
    instructions: [
      "Mezclar secos, incorporar líquidos y amasar.",
      "Reposar 45 min.",
      "Formar discos pequeños (8–10 cm).",
      "Prehornear 8 min a 200 °C.",
      "Agregar salsa y queso, hornear 10 min más o congelar antes de hornear."
    ],
    expectedTexture: "Base crujiente y miga elástica incluso tras descongelar.",
    prepTime: "55 min", 
    cookTime: "18 min", 
    servings: "8-10 mini pizzas",
    chefTip: "Congelá las bases prehorneadas envueltas en film y recalentá 5 min al servir."
  },
  { 
    id: "110", 
    title: "🔟 Pizza Dulce de Manzana y Canela",
    categoryId: "pizzas-sin-gluten",
    description: "Una versión gourmet, perfecta como postre o desayuno. La masa neutra se cubre con manzanas especiadas y miel.",
    ingredients: [
      "Harina de arroz: 120 g",
      "Fécula de tapioca: 60 g",
      "Harina de almendra: 40 g",
      "Psyllium husk: 6 g",
      "Levadura seca: 5 g",
      "Agua tibia: 180 ml",
      "Aceite de coco: 20 ml",
      "Miel: 15 ml",
      "Sal: pizca",
      "Manzanas laminadas con canela para cobertura"
    ], 
    instructions: [
      "Preparar la masa mezclando todos los ingredientes secos.",
      "Agregar agua, aceite de coco y miel. Amasar hasta formar masa uniforme.",
      "Dejar levar 45 min.",
      "Estirar y cubrir con las manzanas laminadas y canela.",
      "Hornear 15 min a 200 °C, agregar un toque extra de miel y hornear 5 min más."
    ],
    expectedTexture: "Borde crocante, centro húmedo y aroma a canela y coco.",
    prepTime: "55 min", 
    cookTime: "20 min", 
    servings: "1 pizza dulce",
    chefTip: "Servir con yogur vegetal frío o helado sin lácteos."
  },

  // Categoría 11: Empanadas y Tartas Sin Gluten (10)
  { 
    id: "111", 
    title: "1️⃣ Empanadas Clásicas Sin Gluten (masa flexible y dorada)",
    categoryId: "empanadas-tartas",
    description: "La versión sin gluten de la empanada tradicional argentina. Masa elástica que se dobla sin romperse y dorado perfecto.",
    ingredients: [
      "Harina de arroz: 180 g",
      "Fécula de mandioca: 80 g",
      "Harina de garbanzo: 40 g",
      "Psyllium husk: 8 g",
      "Sal: 5 g",
      "Aceite o manteca: 30 ml",
      "Agua tibia: 150–170 ml",
      "Relleno sugerido: carne picada, cebolla, pimentón, comino y huevo duro"
    ], 
    instructions: [
      "Mezclar las harinas, psyllium y sal.",
      "Incorporar aceite y agua poco a poco hasta lograr masa blanda y lisa.",
      "Reposar tapada 20 min.",
      "Estirar de 2 mm de grosor y cortar discos.",
      "Rellenar, cerrar y hornear a 200 °C durante 20–25 min."
    ],
    expectedTexture: "Flexible, sin grietas, con dorado uniforme.",
    prepTime: "30 min", 
    cookTime: "20-25 min", 
    servings: "12 unidades",
    chefTip: "Para dorado extra, pincelá con yema o leche vegetal."
  },
  { 
    id: "112", 
    title: "2️⃣ Empanadas de Yuca y Pollo Especiado",
    categoryId: "empanadas-tartas",
    description: "Masa elástica y ligeramente chiclosa con sabor neutro. Relleno jugoso y especiado.",
    ingredients: [
      "Fécula de yuca: 250 g",
      "Queso rallado (duro): 80 g",
      "Huevo: 1 u",
      "Leche o bebida vegetal: 100 ml",
      "Sal: 4 g",
      "Relleno: pollo desmenuzado, cebolla, pimiento, curry y cúrcuma"
    ], 
    instructions: [
      "Mezclar fécula con queso, huevo, leche y sal.",
      "Amasar hasta lograr masa elástica.",
      "Dividir, rellenar y sellar con los dedos.",
      "Hornear 15–18 min a 200 °C o cocinar en air fryer 10 min a 190 °C."
    ],
    expectedTexture: "Crocante por fuera, suave por dentro.",
    prepTime: "20 min", 
    cookTime: "15-18 min", 
    servings: "8-10 unidades",
    chefTip: "Podés hacer mini empanadas y congelarlas crudas."
  },
  { 
    id: "113", 
    title: "3️⃣ Empanaditas de Queso y Cebolla (versión rápida al horno o air fryer)",
    categoryId: "empanadas-tartas",
    description: "Masa liviana con base de avena y arroz, dorada y con sabor mantecoso.",
    ingredients: [
      "Harina de avena GF: 100 g",
      "Harina de arroz: 80 g",
      "Fécula de maíz: 40 g",
      "Psyllium: 6 g",
      "Polvo de hornear: 5 g",
      "Sal: 4 g",
      "Aceite o mantequilla: 20 ml",
      "Agua tibia: 120 ml",
      "Relleno: queso rallado y cebolla salteada"
    ], 
    instructions: [
      "Mezclar secos y luego líquidos.",
      "Formar masa maleable y reposar 10 min.",
      "Estirar y cortar discos de 10 cm.",
      "Rellenar, sellar y hornear 15 min a 200 °C o en air fryer 8 min a 190 °C."
    ],
    expectedTexture: "Liviana, ligeramente crujiente y húmeda al centro.",
    prepTime: "20 min", 
    cookTime: "15 min", 
    servings: "10 unidades",
    chefTip: "Podés agregar una pizca de cúrcuma a la masa para un color dorado natural."
  },
  { 
    id: "114", 
    title: "4️⃣ Empanadas Criollas Veganas (masa con garbanzo y aceite de oliva)",
    categoryId: "empanadas-tartas",
    description: "Sin lácteos, sin huevo, con masa rica en proteínas vegetales y sabor mediterráneo.",
    ingredients: [
      "Harina de garbanzo: 100 g",
      "Harina de arroz: 100 g",
      "Fécula de maíz: 60 g",
      "Sal: 5 g",
      "Aceite de oliva: 25 ml",
      "Agua tibia: 160 ml",
      "Relleno: vegetales salteados (berenjena, pimiento, cebolla, tomate)"
    ], 
    instructions: [
      "Mezclar secos y añadir aceite y agua.",
      "Amasar hasta masa suave.",
      "Estirar, cortar y rellenar.",
      "Hornear 20 min a 200 °C."
    ],
    expectedTexture: "Masa firme, bordes crujientes y sabor neutro.",
    prepTime: "25 min", 
    cookTime: "20 min", 
    servings: "10 unidades",
    chefTip: "Pincelá con mezcla de aceite + cúrcuma para dorado vegetal."
  },
  { 
    id: "115", 
    title: "5️⃣ Empanadas de Papa y Arroz (económicas y suaves)",
    categoryId: "empanadas-tartas",
    description: "Textura tierna y suave, perfecta para rellenos cremosos.",
    ingredients: [
      "Puré de papa: 200 g",
      "Harina de arroz: 120 g",
      "Fécula de maíz: 40 g",
      "Aceite: 15 ml",
      "Sal: 4 g"
    ], 
    instructions: [
      "Mezclar puré tibio con harinas, sal y aceite.",
      "Amasar hasta masa homogénea.",
      "Formar discos de 8–10 cm.",
      "Rellenar y hornear 20 min a 190 °C."
    ],
    expectedTexture: "Suave y húmeda, con sabor delicado.",
    prepTime: "20 min", 
    cookTime: "20 min", 
    servings: "10 unidades",
    chefTip: "Perfecta para rellenos de verdura o queso."
  },
  { 
    id: "116", 
    title: "6️⃣ Empanadas Dulces de Manzana y Canela",
    categoryId: "empanadas-tartas",
    description: "Versión de postre con masa base neutra y relleno especiado.",
    ingredients: [
      "Harina de arroz: 100 g",
      "Fécula de tapioca: 50 g",
      "Harina de almendra: 30 g",
      "Aceite de coco: 15 ml",
      "Miel: 15 ml",
      "Agua: 80 ml",
      "Relleno: manzana rallada, canela y gotas de limón"
    ], 
    instructions: [
      "Mezclar todo hasta masa suave.",
      "Armar discos y rellenar.",
      "Hornear 15 min a 190 °C."
    ],
    expectedTexture: "Crujiente y dorada con aroma a canela.",
    prepTime: "15 min", 
    cookTime: "15 min", 
    servings: "8 unidades",
    chefTip: "Espolvoreá con azúcar mascabado antes de hornear."
  },
  { 
    id: "117", 
    title: "7️⃣ Tarta de Espinaca y Queso Vegetal",
    categoryId: "empanadas-tartas",
    description: "Masa firme y base sin grietas, ideal para rellenos húmedos.",
    ingredients: [
      "Harina de arroz: 150 g",
      "Fécula de maíz: 80 g",
      "Psyllium husk: 6 g",
      "Aceite: 25 ml",
      "Agua: 100–120 ml",
      "Sal: 5 g",
      "Relleno: espinaca, tofu o queso vegetal y cebolla"
    ], 
    instructions: [
      "Mezclar masa, estirar y forrar molde.",
      "Prehornear 10 min a 200 °C.",
      "Agregar relleno y hornear 25 min."
    ],
    expectedTexture: "Base crocante y borde ligeramente quebradizo.",
    prepTime: "20 min", 
    cookTime: "35 min", 
    servings: "6-8 porciones",
    chefTip: "Dejá enfriar antes de cortar para mejor presentación."
  },
  { 
    id: "118", 
    title: "8️⃣ Tarta Rústica de Verduras Asadas",
    categoryId: "empanadas-tartas",
    description: "Aroma casero y textura firme con sabor a campo.",
    ingredients: [
      "Harina de avena GF: 120 g",
      "Harina de arroz integral: 100 g",
      "Fécula de tapioca: 40 g",
      "Aceite de oliva: 20 ml",
      "Agua: 110 ml",
      "Sal: 5 g",
      "Relleno: calabaza, berenjena y pimientos asados"
    ], 
    instructions: [
      "Mezclar y amasar.",
      "Extender masa en molde bajo.",
      "Rellenar con verduras y hornear 25 min a 200 °C."
    ],
    expectedTexture: "Crujiente por fuera, suave en el centro.",
    prepTime: "20 min", 
    cookTime: "25 min", 
    servings: "6 porciones",
    chefTip: "Decorá con semillas antes de hornear."
  },
  { 
    id: "119", 
    title: "9️⃣ Mini Quiches Sin Gluten",
    categoryId: "empanadas-tartas",
    description: "Versión individual con base firme y relleno cremoso.",
    ingredients: [
      "Harina de arroz: 100 g",
      "Fécula de maíz: 50 g",
      "Harina de almendra: 30 g",
      "Huevo: 1 u",
      "Aceite: 15 ml",
      "Agua: 60 ml"
    ], 
    instructions: [
      "Formar masa y forrar moldes individuales.",
      "Rellenar con mezcla de huevo, crema vegetal y vegetales.",
      "Hornear 20 min a 190 °C."
    ],
    expectedTexture: "Base crocante, centro cremoso.",
    prepTime: "20 min", 
    cookTime: "20 min", 
    servings: "6-8 mini quiches",
    chefTip: "Congelá ya horneadas y recalentá 10 min antes de servir."
  },
  { 
    id: "120", 
    title: "🔟 Base 'Todo Uso' para Tartas y Empanadas",
    categoryId: "empanadas-tartas",
    description: "Una receta comodín que sirve tanto para masas saladas como dulces.",
    ingredients: [
      "Harina de arroz: 150 g",
      "Fécula de maíz: 70 g",
      "Psyllium husk: 6 g",
      "Aceite: 20 ml",
      "Agua: 100–120 ml",
      "Sal: pizca"
    ], 
    instructions: [
      "Mezclar ingredientes y amasar 2 min.",
      "Usar inmediatamente o conservar 3 días refrigerada."
    ],
    expectedTexture: "Masa suave y flexible.",
    prepTime: "10 min", 
    servings: "Para 1 tarta o 10 empanadas",
    chefTip: "Para versión dulce, agregá 1 cdta. de miel o azúcar mascabado."
  },

  // 🌾 BONO 3 – GUÍA DE SUSTITUCIONES DE HARINAS (121-124)
  { 
    id: "121", 
    title: "1️⃣ Tabla de Sustituciones de Harinas y Féculas",
    categoryId: "guia-sustituciones",
    description: "Guía completa de equivalencias cuando te falta alguna harina. Usá las proporciones indicadas para mantener textura y sabor similares.",
    ingredients: [
      "**Si te falta Harina de arroz:** Usá Avena GF o sorgo (1:1) → Miga más tierna, color más dorado",
      "**Si te falta Harina de avena GF:** Usá Arroz o mijo (1:1) → Miga más ligera",
      "**Si te falta Harina de sorgo:** Usá Mijo o arroz integral (1:1) → Textura más suave",
      "**Si te falta Harina de garbanzo:** Usá Quinoa o lenteja (1:1) → Sabor más neutro",
      "**Si te falta Harina de almendra:** Usá Harina de coco (1 taza almendra = ½ taza coco + 3–4 cdas líquido) → Más fibra y dulzor leve",
      "**Si te falta Harina de coco:** Usá Almendra o avena (1 taza coco = 1½ taza sustituto menos ¼ taza líquido) → Miga más esponjosa",
      "**Si te falta Harina de maíz:** Usá Arroz + 1 cda fécula de maíz (1:1) → Más color y suavidad",
      "**Si te falta Fécula de maíz (maicena):** Usá Tapioca o papa (1:1) → Misma ligereza",
      "**Si te falta Tapioca o almidón de yuca:** Usá Maicena + 1 cda aceite (1:1) → Menos elástica, igual crocante",
      "**Si te falta Harina de papa:** Usá Fécula de maíz (1:1) → Más aireada",
      "**Si te falta Psyllium husk:** Usá ½ cdta goma xantana o 2 cdas chía molida + 4 cdas agua → Misma elasticidad",
      "**Si te falta Goma xantana:** Usá 1 cda psyllium o lino molido → Mismo efecto aglutinante",
      "**Si te falta Yuca o mandioca rallada:** Usá Papa cocida o batata (1:1) → Sabor más suave, textura tierna"
    ], 
    instructions: [
      "Identificá qué harina te falta en tu receta.",
      "Buscá el sustituto correspondiente en la lista.",
      "Aplicá la proporción indicada exactamente.",
      "Tené en cuenta el resultado esperado (textura, sabor, color).",
      "Si es necesario, ajustá líquidos según la absorción de la harina sustituta."
    ],
    expectedTexture: "Resultados variables según la sustitución: desde texturas más tiernas hasta más firmes, pero siempre manteniendo la calidad sin gluten.",
    prepTime: "Referencia inmediata", 
    servings: "Aplicable a cualquier receta",
    chefTip: "💡 Guardá esta tabla en tu cocina como referencia rápida. Las sustituciones funcionan mejor cuando combinás al menos 2 harinas diferentes."
  },
  { 
    id: "122", 
    title: "2️⃣ Combinaciones Básicas según Resultado Deseado",
    categoryId: "guia-sustituciones",
    description: "Mezclas caseras optimizadas según el tipo de preparación que querés lograr. Proporciones orientativas para resultados perfectos.",
    ingredients: [
      "**Para masa elástica (pizza, wraps):** 2 partes harina de arroz + 1 parte tapioca → Flexibilidad sin romperse",
      "**Para pan liviano y aireado:** 2 partes arroz + 1 parte maicena + 1 parte avena GF → Miga suave y ligera",
      "**Para pan húmedo o integral:** 1 parte sorgo + 1 parte avena + 1 parte fécula → Textura rústica y húmeda",
      "**Para empanadas o tartas firmes:** 2 partes arroz + 1 parte maicena + 1 parte garbanzo → Masa maleable y resistente",
      "**Para pan dulce o bollería:** 2 partes arroz + 1 parte papa + 1 parte almendra → Aroma suave y elasticidad",
      "**Para versión low-carb/keto:** 2 partes almendra + 1 parte coco + huevo extra → Miga húmeda y alta saciedad"
    ], 
    instructions: [
      "Elegí el tipo de resultado que necesitás (masa elástica, pan liviano, etc.).",
      "Medí las harinas según las proporciones indicadas (ejemplo: si usás 200g total, dividí según las partes).",
      "Mezclá primero todas las harinas secas antes de agregar líquidos.",
      "Agregá siempre un aglutinante (psyllium, goma xantana o chía molida).",
      "Ajustá líquidos gradualmente hasta lograr la consistencia deseada."
    ],
    expectedTexture: "Según la combinación elegida: desde masas flexibles para wraps hasta migas húmedas para panes integrales.",
    prepTime: "5-10 min de preparación", 
    servings: "Base para cualquier receta",
    chefTip: "⭐ Podés preparar tus propias mezclas en cantidad y guardarlas en frascos herméticos. Etiquetá cada mezcla con su uso ideal."
  },
  { 
    id: "123", 
    title: "3️⃣ Cómo Adaptar Recetas de Trigo a Versión Sin Gluten",
    categoryId: "guia-sustituciones",
    description: "Transformá tus recetas clásicas favoritas en versiones aptas celíacas con esta guía completa de equivalencias y ajustes necesarios.",
    ingredients: [
      "**Harinas y líquidos:** Por cada taza de harina de trigo → usá 1 taza de mezcla sin gluten (50% base + 30% fécula + 20% complementaria)",
      "Ejemplo de mezcla: ½ taza harina de arroz + ⅓ taza maicena + 3 cdas avena o almendra",
      "**Líquidos extra:** Agregá 2–3 cdas extra de líquido (agua, leche vegetal o aceite) porque las harinas sin gluten absorben más",
      "**Aglutinantes:** Agregá 1 cda de psyllium o ½ cdta goma xantana por cada 50 g de harina total",
      "**Alternativa natural:** 1 cda de chía o lino molido + 3 cdas agua (dejá reposar 10 min)",
      "**Grasas:** Un chorrito extra de aceite (5–10 ml por pan) mejora textura y conservación"
    ], 
    instructions: [
      "Identificá la cantidad total de harina de trigo en tu receta original.",
      "Reemplazá con una mezcla sin gluten (50% base + 30% fécula + 20% complementaria).",
      "Agregá 1 cda de psyllium husk o ½ cdta de goma xantana por cada 50g de harina.",
      "Aumentá los líquidos en 2-3 cucharadas adicionales.",
      "No amases la masa, solo mezclá hasta integrar ingredientes.",
      "Reducí el tiempo de levado a 20-40 minutos máximo.",
      "Horneá a 10°C menos que la receta original y vigilá el dorado.",
      "Agregá 5-10 ml de aceite extra para mejorar textura y conservación."
    ],
    expectedTexture: "Textura diferente al trigo pero igualmente deliciosa. Las masas sin gluten son más húmedas y menos elásticas, pero con miga suave y sabrosa.",
    prepTime: "Mismo tiempo que receta original + 5 min", 
    servings: "Según receta original",
    chefTip: "🌿 No intentes copiar al 100% la textura del trigo: las masas sin gluten son distintas, pero igual de deliciosas. Mezclá siempre al menos dos harinas distintas: una base (arroz/avena) y una fécula (maicena/tapioca)."
  },
  { 
    id: "124", 
    title: "4️⃣ Tips Rápidos de la Chef Matilda 🌿",
    categoryId: "guia-sustituciones",
    description: "Soluciones prácticas para los problemas más comunes al trabajar con masas sin gluten. Tips probados que salvan cualquier preparación.",
    ingredients: [
      "**Problema:** La masa se agrieta",
      "**Solución:** Agregá 1–2 cdas más de agua tibia o aceite",
      "",
      "**Problema:** La masa queda muy pegajosa",
      "**Solución:** Añadí 1–2 cdas de harina de arroz o fécula",
      "",
      "**Problema:** El pan no dora bien",
      "**Solución:** Rociá con aceite o pincelá con miel o leche vegetal antes de hornear",
      "",
      "**Problema:** La masa se desarma al cortar",
      "**Solución:** Usá 1 cdta extra de psyllium husk o lino molido",
      "",
      "**Problema:** La miga queda muy seca",
      "**Solución:** Añadí 1 cda de aceite o puré (banana, manzana, calabaza)"
    ], 
    instructions: [
      "Identificá el problema específico que estás teniendo con tu masa.",
      "Aplicá la solución correspondiente según la tabla de problemas comunes.",
      "Hacé ajustes pequeños de a poco (1 cucharada a la vez).",
      "Anotá los ajustes que funcionan para recordarlos en futuras preparaciones.",
      "Recordá que cada harina se comporta diferente, algunos ajustes son normales.",
      "Si después de 2-3 ajustes no funciona, considerá cambiar la proporción de harinas base.",
      "La práctica hace al maestro: con el tiempo conocerás el comportamiento de cada harina."
    ],
    expectedTexture: "Con estos ajustes lograrás texturas óptimas: masas flexibles que no se quiebran, miga húmeda y suave, dorado perfecto y cortes limpios.",
    prepTime: "Correcciones inmediatas durante el proceso", 
    servings: "Aplicable a cualquier preparación",
    chefTip: "⭐ El secreto está en no desanimarse: las primeras veces puede salir diferente, pero con estos tips y un poco de práctica, tus masas sin gluten quedarán perfectas. ¡Anotá tus propios descubrimientos!"
  }
];

