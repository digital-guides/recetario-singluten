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
import panesAirFryerImage from "@/assets/panes-air-fryer.webp";

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
    id: "panes-air-fryer",
    name: "Panes Air Fryer",
    icon: "zap",
    description: "Panes rápidos y prácticos en freidora de aire",
    image: panesAirFryerImage
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
  // Categoría 1: Panes Rápidos (30 recetas actualizadas)
  { 
    id: "1", 
    title: "Pan rápido de harina de arroz \"todo uso\"",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 250 g", "Almidón de tapioca: 50 g", "Psyllium en polvo: 10 g", "Polvo de hornear: 8 g", "Sal fina: 5 g", "Agua tibia: 280 ml", "Huevos: 2 u (≈100 g)", "Aceite de oliva: 30 ml", "Vinagre de manzana: 10 ml"], 
    instructions: ["Precalienta el horno a 190 °C. Engrasa y forra el molde con papel.", "En un bol, mezcla harina de arroz, tapioca, psyllium, polvo de hornear y sal.", "En otro bol, bate agua tibia, huevos, aceite y vinagre.", "Une líquidos con secos. Mezcla 1–2 min hasta ver una pasta espesa y suave (no es una masa para amasar).", "Vierte al molde, alisa con espátula humedecida.", "Hornea 35–40 min hasta que dore y al clavar un palillo salga seco.", "Desmolda y deja enfriar 20 min sobre rejilla antes de cortar."],
    expectedTexture: "Miga tierna y uniforme, corteza fina.",
    chefTip: "Si lo ves muy denso, añade 20–30 ml extra de agua tibia. Variante sin huevo: reemplaza cada huevo por 60 ml de leche vegetal + 5 ml extra de aceite (el pan quedará un poco más compacto).",
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10-12 rebanadas" 
  },
  { 
    id: "2", 
    title: "Pan express de avena certificada (molde)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de avena certificada sin gluten: 300 g", "Almidón de tapioca: 40 g", "Psyllium en polvo: 8 g", "Polvo de hornear: 8 g", "Sal fina: 5 g", "Leche vegetal (avena/almendra): 280 ml", "Huevo: 1 u (≈50 g)", "Aceite suave: 20 ml", "Miel o sirope: 15 g", "Vinagre de manzana: 10 ml"], 
    instructions: ["Horno a 180 °C. Molde engrasado y forrado.", "Mezcla avena, tapioca, psyllium, polvo de hornear y sal.", "Bate leche vegetal, huevo, aceite, miel y vinagre.", "Integra todo. Debe quedar una mezcla cremosa y algo espesa.", "Vierte y alisa. Golpea suavemente el molde para eliminar burbujas.", "Hornea 35 min aprox. Si dora muy rápido, cúbrelo con papel.", "Enfría 15–20 min antes de rebanar."],
    chefTip: "Ojo con la avena: si tu mezcla queda muy espesa, suma 20–40 ml de leche. Para desayunos: añade 20 g de semillas de girasol y 10 g de sésamo a la superficie. Sin huevo: reemplázalo por 60 ml de leche vegetal + 5 ml de aceite extra.",
    prepTime: "10 min", 
    cookTime: "35 min", 
    servings: "10-12 rebanadas" 
  },
  { 
    id: "3", 
    title: "Pan de garbanzo al horno (tipo focaccia fina)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de garbanzo: 250 g", "Agua: 450 ml", "Aceite de oliva: 40 ml (y 20 ml extra para la bandeja y superficie)", "Sal: 6 g", "Polvo de hornear: 4 g", "Romero seco: 2 g", "Opcional: rodajas finas de cebolla, tomatitos, aceitunas"], 
    instructions: ["Precalienta el horno a 220 °C con la bandeja dentro (la queremos bien caliente).", "En un bol, bate harina de garbanzo, agua, 40 ml de aceite, sal, polvo de hornear y romero hasta que no queden grumos. Reposa 10 min.", "Saca la bandeja caliente, pincela con 10 ml de aceite.", "Vierte la mezcla (queda fluida), agrega cebolla/tomates/aceitunas si quieres, y rocía con 10 ml de aceite por encima.", "Hornea 18–22 min hasta bordes dorados y centro firme.", "Deja entibiar 5 min y corta en cuadrados."],
    expectedTexture: "Fina, bordes crujientes y centro jugoso.",
    chefTip: "Si la quieres más gruesa, usa una bandeja más pequeña o aumenta la cantidad un 30%. Perfecta para picadas: espolvorea sal en escamas y pimienta recién molida al salir del horno.",
    prepTime: "15 min", 
    cookTime: "18-22 min", 
    servings: "8 porciones" 
  },
  { 
    id: "4", 
    title: "Pan de almendra suave (batido)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de almendra fina: 220 g", "Harina de coco: 30 g", "Psyllium en polvo: 8 g", "Polvo de hornear: 8 g", "Sal: 3 g", "Huevos: 4 u (≈200 g)", "Yogur vegetal natural (o kefir vegetal): 120 ml", "Agua: 60 ml", "Aceite de oliva o coco: 30 ml", "Vinagre de manzana: 10 ml"], 
    instructions: ["Horno a 180 °C. Molde engrasado y forrado.", "Mezcla secos: almendra, coco, psyllium, polvo de hornear y sal.", "Bate huevos con yogur, agua, aceite y vinagre.", "Integra líquidos con secos. La mezcla espesa en 1–2 min (el coco y el psyllium absorben).", "Vierte, alisa y hornea 28–32 min. Palillo seco y superficie apenas dorada.", "Enfría 20 min antes de cortar."],
    description: "Low-carb friendly",
    expectedTexture: "Tierna y ligeramente húmeda, ideal para tostadas.",
    prepTime: "10 min", 
    cookTime: "28-32 min", 
    servings: "10 rebanadas" 
  },
  { 
    id: "5", 
    title: "Pan de yogurt vegetal y semillas (sin levado)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 200 g", "Harina de avena GF: 80 g", "Almidón de tapioca: 40 g", "Psyllium en polvo: 8 g", "Polvo de hornear: 8 g", "Sal: 5 g", "Yogurt vegetal natural: 250 g (≈250 ml)", "Agua: 120 ml", "Aceite de oliva: 30 ml", "Mix de semillas: 40 g (chía 10 g, lino 15 g, girasol 15 g)"], 
    instructions: ["Precalienta a 190 °C. Prepara el molde con papel.", "En un bol, combina harinas, tapioca, psyllium, polvo de hornear y sal.", "Mezcla yogurt, agua y aceite; vierte sobre los secos.", "Incorpora el mix de semillas (reserva un poco para la superficie).", "Vierte en el molde, alisa y espolvorea el resto de semillas.", "Hornea 35–40 min. Si se dora de más, cúbrelo los últimos 10 min.", "Enfría 15–20 min antes de rebanar."],
    expectedTexture: "Húmeda y elástica gracias al yogurt y el psyllium.",
    chefTip: "Para rodajas más firmes, tuéstalas 3–4 min antes de servir. Sin avena: reemplaza los 80 g por 60 g de sorgo + 20 g de tapioca.",
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10-12 rebanadas" 
  },
  { 
    id: "6", 
    title: "Pan rústico de sorgo y maíz (mezcla básica)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de sorgo: 180 g", "Harina de maíz fina (no precocida): 120 g", "Almidón de tapioca: 50 g", "Psyllium en polvo: 10 g", "Polvo de hornear: 8 g", "Sal: 5 g", "Agua tibia: 320 ml", "Aceite de oliva: 30 ml", "Vinagre de manzana: 10 ml"], 
    instructions: ["Precalienta el horno a 190 °C y prepara un molde con papel.", "Mezcla en un bol las harinas, tapioca, psyllium, polvo de hornear y sal.", "Agrega el agua tibia, aceite y vinagre. Mezcla con espátula hasta formar una pasta húmeda.", "Vierte al molde y alisa la superficie.", "Hornea 35–40 min o hasta que la parte superior se dore y suene hueca al golpearla suavemente.", "Deja enfriar 15 min antes de cortar."],
    chefTip: "Este pan tiene sabor ligeramente dulce por el maíz y aroma a campo. Ideal para acompañar sopas o untar con aceite de oliva. Si lo quieres más dorado, pinta la superficie con un poco de aceite antes del horneado.",
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10-12 rebanadas" 
  },
  { 
    id: "7", 
    title: "Pan de papa y aceite de oliva (textura tierna)",
    categoryId: "panes-rapidos", 
    ingredients: ["Puré de papa cocida (sin mantequilla): 200 g", "Harina de arroz: 150 g", "Fécula de maíz: 50 g", "Polvo de hornear: 8 g", "Psyllium en polvo: 6 g", "Sal: 4 g", "Agua tibia: 120 ml", "Aceite de oliva: 40 ml"], 
    instructions: ["Precalienta el horno a 190 °C. Engrasa un molde o usa papel vegetal.", "Mezcla puré de papa con el agua y el aceite hasta integrar.", "Añade los ingredientes secos y mezcla bien. La textura debe ser suave, no líquida.", "Coloca la masa en el molde, alisa y rocía un poco de aceite por encima.", "Hornea 30–35 min hasta dorar.", "Deja reposar 10 min antes de desmoldar."],
    expectedTexture: "Miga húmeda y elástica gracias al puré.",
    chefTip: "Perfecto para tostar con ajo o hierbas. Si quieres versión sin aceite, usa puré más húmedo y añade 30 ml extra de agua.",
    prepTime: "10 min", 
    cookTime: "30-35 min", 
    servings: "8-10 rebanadas" 
  },
  { 
    id: "8", 
    title: "Pan de calabaza especiado (salado)",
    categoryId: "panes-rapidos", 
    ingredients: ["Puré de calabaza cocida: 200 g", "Harina de arroz: 150 g", "Harina de garbanzo: 50 g", "Polvo de hornear: 8 g", "Sal: 4 g", "Comino molido: 1 g", "Cúrcuma: 1 g", "Aceite de oliva: 30 ml", "Agua: 120 ml"], 
    instructions: ["Precalienta a 190 °C. Engrasa el molde.", "Mezcla los ingredientes secos en un bol.", "Agrega el puré de calabaza, aceite y agua; mezcla hasta que quede una masa cremosa.", "Vierte en el molde y alisa.", "Hornea 35–40 min hasta dorar ligeramente.", "Deja enfriar antes de cortar."],
    chefTip: "El color dorado y el aroma especiado son irresistibles. Añade semillas de calabaza arriba antes de hornear para decorar. También puedes usar batata en lugar de calabaza para un sabor más dulce.",
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10 rebanadas" 
  },
  { 
    id: "9", 
    title: "Pan de cebolla y orégano (bandeja)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 200 g", "Harina de maíz fina: 80 g", "Fécula de maíz: 50 g", "Polvo de hornear: 8 g", "Sal: 5 g", "Cebolla finamente picada: 100 g", "Aceite de oliva: 40 ml", "Agua tibia: 240 ml", "Orégano seco: 3 g"], 
    instructions: ["Precalienta el horno a 200 °C.", "Sofríe la cebolla con 10 ml de aceite hasta que esté transparente; enfría.", "Mezcla harinas, polvo de hornear, sal y orégano.", "Agrega el agua, aceite restante y la cebolla. Mezcla hasta que quede espeso.", "Extiende la masa en bandeja engrasada (2–3 cm de grosor).", "Hornea 30 min hasta dorar los bordes.", "Enfría 10 min antes de cortar."],
    chefTip: "Perfecto para servir como pan de mesa o base de mini pizzas. Si quieres más aroma, añade 1 diente de ajo rallado. Guarda en heladera y recalienta 5 min antes de servir.",
    prepTime: "15 min", 
    cookTime: "30 min", 
    servings: "8-10 porciones" 
  },
  { 
    id: "10", 
    title: "Pan tipo \"soda bread\" sin gluten (con bicarbonato)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 200 g", "Harina de avena GF: 100 g", "Fécula de maíz: 50 g", "Bicarbonato de sodio: 5 g", "Polvo de hornear: 5 g", "Sal: 4 g", "Yogur vegetal natural: 250 ml", "Vinagre o jugo de limón: 10 ml", "Aceite: 20 ml"], 
    instructions: ["Precalienta el horno a 200 °C. Cubre una bandeja con papel.", "Mezcla el yogur con el vinagre y deja reposar 5 min (formará una ligera espuma).", "En un bol, mezcla los ingredientes secos.", "Agrega el yogur y el aceite. Forma una masa blanda, que no se pega a las manos.", "Haz una bola, colócala sobre la bandeja y marca una cruz con cuchillo en la parte superior.", "Hornea 35–40 min o hasta que suene hueco al golpear.", "Enfría sobre rejilla."],
    expectedTexture: "Miga densa y corteza rústica.",
    chefTip: "Si lo deseas más aireado, sustituye 50 ml del yogur por agua con gas. Puedes sumar pasas o semillas para una versión diferente.",
    prepTime: "15 min", 
    cookTime: "35-40 min", 
    servings: "10 rebanadas" 
  },
  { 
    id: "11", 
    title: "Pan integral sin gluten (arroz + avena GF)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz integral: 180 g", "Harina de avena certificada GF: 120 g", "Fécula de maíz: 60 g", "Psyllium en polvo: 8 g", "Polvo de hornear: 8 g", "Sal: 5 g", "Aceite de oliva: 30 ml", "Agua tibia: 320 ml", "Vinagre de manzana: 10 ml", "Semillas mixtas: 30 g"], 
    instructions: ["Precalienta el horno a 190 °C y prepara un molde mediano.", "En un bol, mezcla las harinas, fécula, psyllium, polvo de hornear y sal.", "Agrega el agua tibia, el aceite y el vinagre. Mezcla con cuchara hasta lograr una pasta espesa.", "Incorpora la mitad de las semillas.", "Vierte la mezcla al molde, alisa y espolvorea el resto de semillas.", "Hornea 35–40 min, hasta dorar.", "Enfría antes de cortar."],
    chefTip: "Pan de sabor suave y miga húmeda, perfecto para tostadas o sándwiches. Podés guardar rebanadas congeladas hasta 2 meses. Para versión más esponjosa, sustituí 50 ml de agua por 1 clara batida.",
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "12 rebanadas" 
  },
  { 
    id: "12", 
    title: "Pan de linaza molida (alto en fibra)",
    categoryId: "panes-rapidos", 
    ingredients: ["Linaza molida: 120 g", "Harina de almendra: 100 g", "Harina de coco: 20 g", "Polvo de hornear: 8 g", "Sal: 4 g", "Huevos: 4 u (≈200 g)", "Agua: 120 ml", "Aceite de oliva: 20 ml", "Vinagre de manzana: 10 ml"], 
    instructions: ["Precalienta el horno a 180 °C.", "Mezcla secos: linaza, almendra, coco, polvo de hornear y sal.", "En otro bol, bate los huevos con el agua, aceite y vinagre.", "Integra todo y deja reposar 5 min (la linaza absorbe líquido y espesa).", "Coloca en molde pequeño y alisa.", "Hornea 30–35 min hasta que al pinchar salga seco.", "Enfría sobre rejilla."],
    description: "Alta fibra",
    expectedTexture: "Textura densa, ideal para tostadas saladas.",
    chefTip: "Si querés versión más húmeda, agregá 1 cucharada extra de agua. Aporta muchísima saciedad: una rebanada te sostiene por horas. Podés guardar rebanadas congeladas hasta 2 meses.",
    prepTime: "10 min", 
    cookTime: "30-35 min", 
    servings: "8-10 rebanadas" 
  },
  { 
    id: "13", 
    title: "Pan de coco salado (ligero)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de coco: 60 g", "Fécula de maíz: 40 g", "Polvo de hornear: 6 g", "Sal: 3 g", "Huevos: 3 u", "Leche vegetal o agua: 150 ml", "Aceite de coco o de oliva: 25 ml"], 
    instructions: ["Horno a 180 °C.", "Mezclá los ingredientes secos.", "En otro bol, batí huevos, leche y aceite.", "Integra todo. La mezcla debe quedar cremosa (no líquida).", "Verté en molde pequeño.", "Horneá 25–30 min, hasta dorar los bordes.", "Dejá enfriar antes de cortar."],
    chefTip: "Muy aromático y suave, perfecto para acompañar comidas ligeras. Podés agregar 1 cucharadita de orégano o ajo en polvo para darle un toque salado. Rinde bien congelado: cortá en rodajas y guardá en freezer hasta 1 mes.",
    prepTime: "10 min", 
    cookTime: "25-30 min", 
    servings: "6-8 rebanadas" 
  },
  { 
    id: "14", 
    title: "Pan de queso rápido (sin amasado)",
    categoryId: "panes-rapidos", 
    ingredients: ["Fécula de mandioca o tapioca: 200 g", "Queso rallado (duro o semicurado): 120 g", "Huevo: 1 u", "Aceite: 30 ml", "Leche tibia: 100 ml", "Polvo de hornear: 6 g", "Sal: 3 g"], 
    instructions: ["Precalentá el horno a 200 °C.", "En un bol, mezclá la fécula, el queso, el polvo de hornear y la sal.", "Incorporá el huevo, el aceite y la leche. Mezclá hasta que se forme una masa pegajosa pero manejable.", "Formá bollitos con las manos húmedas y colocá sobre bandeja con papel.", "Horneá 20–25 min, hasta que se inflen y doren."],
    chefTip: "Si te gustan más elásticos, usá mezcla de quesos duros y frescos. Podés hacerlos mini para picadas o más grandes para sándwiches. Recién salidos del horno son irresistibles 🤍",
    prepTime: "10 min", 
    cookTime: "20-25 min", 
    servings: "8-10 bollitos" 
  },
  { 
    id: "15", 
    title: "Pan de hierbas mediterráneas (molde pequeño)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 200 g", "Harina de sorgo: 100 g", "Fécula de maíz: 40 g", "Polvo de hornear: 8 g", "Sal: 4 g", "Aceite de oliva: 40 ml", "Agua tibia: 280 ml", "Vinagre de manzana: 10 ml", "Hierbas secas (romero, orégano, tomillo): 2 g de cada una aprox."], 
    instructions: ["Precalentá el horno a 190 °C.", "Mezclá harinas, fécula, polvo de hornear, sal y hierbas.", "Agregá aceite, agua y vinagre. Mezclá hasta integrar.", "Verté en molde pequeño, alisá la superficie y rociá un poco de aceite arriba.", "Horneá 35–40 min hasta dorar.", "Dejá enfriar 15 min antes de cortar."],
    chefTip: "Aroma increíble gracias al romero y al aceite de oliva. Ideal para acompañar ensaladas o sopas. Si querés versión más intensa, sumá aceitunas picadas a la mezcla.",
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10 rebanadas" 
  },
  { 
    id: "16", 
    title: "Pan de arroz integral y yogur (rápido y suave)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz integral: 150 g", "Fécula de maíz: 80 g", "Yogur natural o vegetal (sin azúcar): 120 g", "Huevo: 1 unidad", "Aceite: 20 ml", "Polvo de hornear: 8 g", "Sal: 3 g", "Agua tibia: 20–30 ml (solo si la masa queda muy densa)"], 
    instructions: ["Precalienta el horno a 180 °C. Engrasa un molde pequeño o cúbrelo con papel vegetal.", "En un bol, mezcla la harina de arroz integral, la fécula, la sal y el polvo de hornear.", "Agrega el yogur, el huevo y el aceite. Mezcla bien hasta obtener una masa espesa y cremosa.", "Si ves que la mezcla queda demasiado densa, añade una o dos cucharadas de agua tibia. La textura final debe ser espesa, húmeda y sin grumos.", "Vierte la mezcla en el molde y alisa la superficie con una espátula.", "Hornea 22–25 minutos o hasta que al insertar un palillo salga limpio.", "Deja enfriar antes de cortar para que mantenga bien su forma."],
    chefTip: "Si quieres un pan más dorado y aromático, pincela la superficie con un poco de aceite antes de hornear.",
    prepTime: "10 min", 
    cookTime: "22-25 min", 
    servings: "8 rebanadas" 
  },
  { 
    id: "17", 
    title: "Pan express de arroz y tapioca",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 140 g", "Harina de tapioca: 60 g", "Huevo: 1 unidad", "Agua: 120 ml", "Aceite: 15 ml", "Polvo para hornear: 8 g", "Sal: 3 g"], 
    instructions: ["Precalienta el horno a 190 °C.", "Mezcla todos los ingredientes en un bol hasta lograr una masa suave, fluida y sin grumos.", "La textura debe ser similar a una mezcla espesa para bizcocho. Si está muy espesa, agrega 1–2 cucharadas de agua.", "Vierte la mezcla en un molde pequeño.", "Hornea 18–20 minutos hasta que esté firme al tacto.", "Enfría antes de cortar."],
    chefTip: "Si quieres una miga más aireada, bate el huevo 30 segundos antes de incorporarlo a la mezcla.",
    prepTime: "5 min", 
    cookTime: "18-20 min", 
    servings: "6-8 rebanadas" 
  },
  { 
    id: "18", 
    title: "Pan rápido de zanahoria rallada",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 150 g", "Zanahoria rallada fina: 80 g", "Huevo: 1 unidad", "Aceite: 20 ml", "Polvo de hornear: 8 g", "Sal: 3 g", "Agua: 20–40 ml (según necesidad)"], 
    instructions: ["Precalienta el horno a 180 °C.", "Mezcla la harina, el polvo de hornear y la sal.", "Añade la zanahoria rallada, el huevo y el aceite. Combina hasta integrar.", "Agrega el agua poco a poco hasta obtener una masa cremosa y húmeda, ligeramente espesa.", "Vierte la preparación en un molde y alisa la superficie.", "Hornea 25 minutos o hasta que esté firme y dorado."],
    chefTip: "Una pizca de cúrcuma intensifica el color y aporta un aroma delicioso.",
    prepTime: "10 min", 
    cookTime: "25 min", 
    servings: "8 rebanadas" 
  },
  { 
    id: "19", 
    title: "Pan de batata express",
    categoryId: "panes-rapidos", 
    ingredients: ["Puré de batata cocida: 150 g", "Harina de arroz: 120 g", "Fécula de maíz: 40 g", "Huevo: 1 unidad", "Aceite: 20 ml", "Polvo para hornear: 8 g", "Sal: 3 g"], 
    instructions: ["Precalienta el horno a 180 °C.", "En un bol, mezcla la harina, la fécula, la sal y el polvo de hornear.", "Agrega el puré de batata, el huevo y el aceite. Mezcla hasta obtener una masa suave y algo espesa.", "Si la masa queda muy seca (la batata absorbe diferente según variedad), añade 1–2 cucharadas de agua.", "Vierte en un molde pequeño y empareja la superficie.", "Hornea 25–30 minutos o hasta que esté firme."],
    chefTip: "Queda espectacular si espolvoreas semillas de sésamo o girasol antes de hornear.",
    prepTime: "10 min", 
    cookTime: "25-30 min", 
    servings: "8-10 rebanadas" 
  },
  { 
    id: "20", 
    title: "Pan vegano rápido (sin huevo)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 140 g", "Fécula de maíz: 60 g", "Psyllium en polvo: 5 g", "Agua tibia: 180–200 ml", "Aceite: 20 ml", "Polvo de hornear: 8 g", "Sal: 3 g"], 
    instructions: ["Precalienta el horno a 185 °C.", "Mezcla el psyllium con 100 ml de agua tibia y deja reposar 1 minuto hasta formar un gel espeso.", "En otro bol, combina la harina, la fécula, la sal y el polvo de hornear.", "Agrega el gel de psyllium, el aceite y el resto del agua.", "Mezcla hasta obtener una masa espesa, húmeda y elástica (ese gel reemplaza el efecto del huevo).", "Vierte en un molde pequeño y alisa la superficie.", "Hornea 25–30 minutos."],
    chefTip: "Una cucharadita de vinagre ayuda a activar el polvo de hornear y deja la miga más aireada.",
    prepTime: "10 min", 
    cookTime: "25-30 min", 
    servings: "8-10 rebanadas" 
  },
  { 
    id: "21", 
    title: "Pan de yogur y queso rallado",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 150 g", "Yogur natural o vegetal: 130 g", "Queso rallado (o versión vegetal): 50 g", "Huevo: 1 unidad", "Aceite: 20 ml", "Polvo de hornear: 8 g", "Sal: 2 g"], 
    instructions: ["Precalienta el horno a 180 °C.", "Mezcla la harina, el polvo de hornear y la sal en un bol.", "Añade el yogur, el huevo, el aceite y el queso rallado.", "Mezcla bien hasta obtener una masa espesa y homogénea; debe poder verterse lentamente del bol.", "Vierte la mezcla en un molde pequeño y empareja la superficie.", "Hornea 22–25 minutos, hasta que esté firme y ligeramente dorado.", "Enfría antes de cortar para que la miga quede compacta."],
    chefTip: "Si quieres un sabor más profundo, usa queso curado rallado o añade orégano seco.",
    prepTime: "10 min", 
    cookTime: "22-25 min", 
    servings: "8 rebanadas" 
  },
  { 
    id: "22", 
    title: "Pan batido 5 minutos",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 160 g", "Fécula de tapioca: 40 g", "Huevo: 1 unidad", "Agua: 100–130 ml", "Aceite: 20 ml", "Polvo de hornear: 8 g", "Sal: 3 g"], 
    instructions: ["Precalienta el horno a 190 °C.", "En un bol, mezcla todos los ingredientes hasta obtener una masa fluida, sin grumos.", "Debe quedar con textura espesa pero vertible, como una mezcla para pastel denso.", "Vierte en un molde pequeño y hornea 18–20 minutos o hasta que esté firme y ligeramente dorado.", "Deja enfriar antes de cortar."],
    prepTime: "5 min", 
    cookTime: "18-20 min", 
    servings: "6-8 rebanadas" 
  },
  { 
    id: "23", 
    title: "Pan tipo \"molde express\"",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 200 g", "Fécula de maíz: 60 g", "Huevos: 2 unidades", "Aceite: 30 ml", "Agua tibia: 120–150 ml", "Polvo de hornear: 12 g", "Sal: 3 g"], 
    instructions: ["Precalienta el horno a 180–185 °C.", "Mezcla las harinas, la fécula, la sal y el polvo de hornear.", "En otro bol, bate ligeramente los huevos con el aceite.", "Incorpora los ingredientes líquidos a los secos y añade agua poco a poco hasta obtener una masa espesa pero suave.", "Vierte la mezcla en un molde rectangular pequeño.", "Hornea 28–30 minutos o hasta que esté firme y dorado.", "Enfría bien para que el pan mantenga su estructura."],
    chefTip: "Agrega semillas (chía, sésamo o amapola) a la superficie para un acabado más crujiente. Si usas un molde más alto y angosto, el pan subirá más y tendrá mejor forma.",
    prepTime: "10 min", 
    cookTime: "28-30 min", 
    servings: "12 rebanadas" 
  },
  { 
    id: "24", 
    title: "Pan de avena sin gluten (rápido)",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de avena certificada GF: 150 g", "Fécula de maíz: 50 g", "Huevo: 1 unidad", "Yogur natural o vegetal: 120 g", "Aceite: 20 ml", "Polvo de hornear: 8 g", "Sal: 3 g", "Agua: según necesidad"], 
    instructions: ["Precalienta el horno a 180 °C.", "Combina la harina de avena, la fécula, el polvo de hornear y la sal.", "Añade el huevo y el yogur. Mezcla bien.", "Si la mezcla queda muy espesa (la avena absorbe mucho líquido), agrega agua de a poco hasta lograr textura cremosa y húmeda.", "Vierte en un molde y hornea 22–25 minutos."],
    chefTip: "La avena da una miga densa pero deliciosa. Para más esponjosidad, agrega 1 cucharadita de vinagre.",
    prepTime: "10 min", 
    cookTime: "22-25 min", 
    servings: "8 rebanadas" 
  },
  { 
    id: "25", 
    title: "Pan de ricotta suave",
    categoryId: "panes-rapidos", 
    ingredients: ["Ricotta vegetal o tradicional: 120 g", "Harina de arroz: 130 g", "Fécula de maíz: 40 g", "Huevo: 1 unidad", "Aceite: 20 ml", "Polvo de hornear: 8 g", "Sal: pizca"], 
    instructions: ["Precalienta el horno a 180 °C.", "Mezcla la ricotta con el huevo y el aceite hasta que quede una crema suave.", "Añade las harinas, la fécula, la sal y el polvo de hornear.", "Mezcla hasta obtener una masa espesa, suave y húmeda.", "Vierte en un molde pequeño.", "Hornea 22–25 minutos o hasta que esté firme."],
    chefTip: "Puedes hacerlo dulce agregando 1 cucharada de miel o stevia y un toque de vainilla.",
    prepTime: "10 min", 
    cookTime: "22-25 min", 
    servings: "8 rebanadas" 
  },
  { 
    id: "26", 
    title: "Pan aromático de hierbas",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 150 g", "Fécula: 60 g", "Huevo: 1 unidad", "Aceite: 20 ml", "Agua: 120 ml", "Polvo para hornear: 8 g", "Sal: 3 g", "Hierbas secas (orégano, tomillo o romero): 1 cucharadita"], 
    instructions: ["Precalienta el horno a 180 °C.", "Mezcla las harinas, la fécula, la sal, el polvo de hornear y las hierbas.", "Agrega el huevo, el aceite y el agua.", "Mezcla hasta obtener una masa suave, cremosa y homogénea.", "Vierte la mezcla en un molde y hornea 22–25 minutos."],
    chefTip: "Si quieres un sabor más marcado, añade 1 cucharada de cebolla salteada fina.",
    prepTime: "10 min", 
    cookTime: "22-25 min", 
    servings: "8 rebanadas" 
  },
  { 
    id: "27", 
    title: "Pan rústico express",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 160 g", "Fécula de maíz: 60 g", "Cúrcuma: ½ cucharadita", "Huevo: 1 unidad", "Aceite: 20 ml", "Agua: 100–130 ml", "Polvo de hornear: 8 g", "Sal: 3 g"], 
    instructions: ["Precalienta el horno a 185 °C.", "Mezcla todos los ingredientes secos.", "Añade el huevo, el aceite y el agua.", "Mezcla hasta obtener una masa espesa y de color uniforme.", "Vierte en un molde y hornea 22–25 minutos."],
    chefTip: "La cúrcuma no solo da color: también aporta un aroma cálido que combina perfecto con sopas.",
    prepTime: "10 min", 
    cookTime: "22-25 min", 
    servings: "8-10 rebanadas" 
  },
  { 
    id: "28", 
    title: "Pan rápido de sésamo tostado",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 150 g", "Fécula: 60 g", "Sésamo tostado: 2 cucharadas", "Huevo: 1 unidad", "Agua: 120 ml", "Aceite: 20 ml", "Polvo para hornear: 8 g", "Sal: 3 g"], 
    instructions: ["Precalienta el horno a 180 °C.", "Mezcla las harinas, la fécula, el sésamo, la sal y el polvo de hornear.", "Añade el huevo, el aceite y el agua.", "Mezcla hasta obtener una masa cremosa y uniforme.", "Hornea 22–25 minutos."],
    chefTip: "Tuesta el sésamo antes para potenciar el aroma y sabor del pan.",
    prepTime: "10 min", 
    cookTime: "22-25 min", 
    servings: "8 rebanadas" 
  },
  { 
    id: "29", 
    title: "Pan rápido de cebolla",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 140 g", "Fécula de maíz: 60 g", "Cebolla picada y salteada: ½ taza", "Huevo: 1 unidad", "Aceite: 20 ml", "Agua: 120 ml", "Polvo de hornear: 8 g", "Sal: 3 g"], 
    instructions: ["Precalienta el horno a 180 °C.", "Mezcla las harinas, la fécula, la sal y el polvo de hornear.", "Añade la cebolla salteada, el huevo, el aceite y el agua.", "Mezcla hasta obtener una masa espesa y con aroma marcado.", "Vierte en un molde y hornea 25–30 minutos."],
    chefTip: "El romero combina perfecto con cebolla; añade ½ cucharadita para un sabor gourmet.",
    prepTime: "15 min", 
    cookTime: "25-30 min", 
    servings: "8-10 rebanadas" 
  },
  { 
    id: "30", 
    title: "Pan dulce rápido sin gluten",
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 150 g", "Fécula de maíz: 60 g", "Huevo: 1 unidad", "Azúcar o stevia: 2–3 cucharadas", "Aceite: 20 ml", "Agua: 120 ml", "Polvo para hornear: 8 g", "Vainilla: ½ cucharadita"], 
    instructions: ["Precalienta el horno a 180 °C.", "Mezcla los ingredientes secos.", "Añade el huevo, el aceite, el agua y la vainilla.", "Mezcla hasta obtener una masa suave, ligeramente espesa y sin grumos.", "Hornea 22–25 minutos."],
    chefTip: "Agrega chips de chocolate o pasas para una versión más festiva.",
    prepTime: "10 min", 
    cookTime: "22-25 min", 
    servings: "8 rebanadas" 
  },

  // Categoría 2: Panes Exprés al Microondas (20)
  { 
    id: "16", 
    title: "Pan de taza de avena GF (mug bread)", 
    categoryId: "panes-microondas", 
    ingredients: [
      "Harina de avena certificada: 40 g (≈ 4 cdas)",
      "Fécula de maíz: 10 g (1 cda)",
      "Polvo de hornear: 2 g (½ cdta)",
      "Sal (o una pizca de azúcar si lo prefieres dulce)",
      "Huevo: 1 unidad",
      "Leche vegetal: 40 ml (≈ 3 cdas)",
      "Aceite o mantequilla derretida: 5 ml (1 cdta)"
    ], 
    instructions: [
      "Mezcla todo en una taza grande o recipiente hasta que no queden grumos.",
      "Cocina 1 min y 30 seg en microondas (800 W). Si ves puntos húmedos, añade 10–15 seg más.",
      "Deja reposar 1 minuto y desmolda o consume directo de la taza."
    ], 
    prepTime: "2 min", 
    cookTime: "1.5 min", 
    servings: "1 taza grande",
    chefTip: "Queda como un panecillo esponjoso. Puedes añadir semillas o pasas según si lo quieres salado o dulce. Perfecto para desayuno exprés con mermelada o aguacate."
  },
  { 
    id: "17", 
    title: "Pan de taza de almendra (versión keto)", 
    categoryId: "panes-microondas", 
    ingredients: [
      "Harina de almendra fina: 30 g (3 cdas)",
      "Polvo de hornear: 2 g",
      "Sal: 1 pizca",
      "Huevo: 1 unidad",
      "Aceite de oliva o de coco: 5 ml",
      "Agua: 20 ml"
    ], 
    instructions: [
      "Bate todos los ingredientes en una taza resistente o molde de silicona.",
      "Cocina 1 min 20 seg en el microondas. Comprueba: si el centro está húmedo, añade 10–15 seg más.",
      "Deja enfriar 1 minuto antes de desmoldar y cortar a la mitad para tostar."
    ], 
    prepTime: "2 min", 
    cookTime: "1.5 min", 
    servings: "1 unidad",
    chefTip: "Queda liviano, con miga tierna. Puedes agregar una cucharada de queso rallado para versión salada. Ideal para sándwiches keto rápidos."
  },
  { 
    id: "18", 
    title: "Pan de taza de garbanzo (sándwich rápido)", 
    categoryId: "panes-microondas", 
    ingredients: [
      "Harina de garbanzo: 40 g",
      "Polvo de hornear: 3 g",
      "Sal: 1 pizca",
      "Agua: 60 ml",
      "Aceite de oliva: 5 ml",
      "Especias (opcional): cúrcuma, comino, romero"
    ], 
    instructions: [
      "Mezcla todo en un molde rectangular pequeño o taza ancha.",
      "Cocina 2 min en microondas a potencia alta. Deja reposar 30 seg y desmolda.",
      "Corta en dos y tuesta si lo deseas más firme."
    ], 
    prepTime: "3 min", 
    cookTime: "2 min", 
    servings: "1-2 panes",
    chefTip: "Obtienes una rebanada sabrosa y saciante. Ideal con aguacate, hummus o queso vegetal. Puede inflarse mientras se cocina; baja al enfriar."
  },
  { 
    id: "19", 
    title: "Pan nube (cloud bread) al microondas", 
    categoryId: "panes-microondas", 
    ingredients: [
      "Huevos: 2 unidades (separadas claras y yemas)",
      "Yogur vegetal natural: 30 g",
      "Polvo de hornear: 2 g",
      "Sal: 1 pizca"
    ], 
    instructions: [
      "Bate las claras a punto de nieve con una pizca de sal.",
      "En otro recipiente, mezcla las yemas con el yogur y el polvo de hornear.",
      "Une ambas preparaciones con movimientos suaves.",
      "Coloca porciones en un plato para microondas cubierto con papel vegetal.",
      "Cocina de a dos discos por vez, 1 min 30 seg aproximadamente."
    ], 
    prepTime: "5 min", 
    cookTime: "3 min", 
    servings: "3-4 discos",
    chefTip: "Quedan como nubes ligeras y flexibles. Úsalos para sándwiches sin harinas o mini pizzas. Puedes guardarlos en refrigeración hasta 3 días."
  },
  { 
    id: "20", 
    title: "Pan inglés rápido al microondas (molde de silicona)", 
    categoryId: "panes-microondas", 
    ingredients: [
      "Harina de arroz: 120 g",
      "Fécula de maíz: 40 g",
      "Polvo de hornear: 6 g",
      "Sal: 4 g",
      "Psyllium en polvo: 4 g",
      "Huevo: 1 unidad",
      "Aceite: 20 ml",
      "Agua tibia: 140 ml"
    ], 
    instructions: [
      "Bate todo hasta obtener una mezcla espesa.",
      "Vierte en molde de silicona engrasado.",
      "Cocina 7 min en microondas (800–900 W).",
      "Comprueba con palillo y añade 30 seg más si es necesario.",
      "Enfría antes de desmoldar y corta en rebanadas."
    ], 
    prepTime: "2 min", 
    cookTime: "7 min", 
    servings: "4 rebanadas",
    chefTip: "Textura tierna y ligeramente elástica. Perfecto para refrigerar y tostar después. Para versión sin huevo: reemplázalo por 60 ml de leche vegetal y 5 ml de aceite extra."
  },
  { 
    id: "21", 
    title: "Pan de semillas mixtas (mug rectangular)", 
    categoryId: "panes-microondas", 
    ingredients: [
      "Harina de arroz: 40 g",
      "Harina de lino o linaza molida: 20 g",
      "Polvo de hornear: 3 g",
      "Sal: 1 pizca",
      "Agua tibia: 60 ml",
      "Aceite: 10 ml",
      "Mix de semillas (chía, girasol, sésamo): 20 g"
    ], 
    instructions: [
      "En un recipiente rectangular o taza ancha, mezcla las harinas, el polvo de hornear y la sal.",
      "Añade agua, aceite y semillas; mezcla bien.",
      "Cocina 2 minutos en microondas.",
      "Reposa 30 segundos y desmolda."
    ], 
    prepTime: "3 min", 
    cookTime: "2 min", 
    servings: "1-2 rebanadas",
    chefTip: "Miga húmeda y textura crujiente por las semillas. Para hacerlo más esponjoso, añade 1 clara batida. Ideal con queso crema y tomate."
  },
  { 
    id: "22", 
    title: "Pan de zanahoria rallada (esponjoso)", 
    categoryId: "panes-microondas", 
    ingredients: [
      "Zanahoria rallada fina: 60 g",
      "Harina de avena GF: 40 g",
      "Polvo de hornear: 4 g",
      "Sal o pizca de azúcar (según gusto)",
      "Huevo: 1 unidad",
      "Aceite: 10 ml",
      "Agua: 40 ml"
    ], 
    instructions: [
      "Bate el huevo con el aceite y el agua.",
      "Agrega la zanahoria y mezcla bien.",
      "Añade la harina, el polvo de hornear y la sal o azúcar.",
      "Vierte en taza o molde pequeño.",
      "Cocina 2 min 30 seg o hasta que al pinchar salga seco."
    ], 
    prepTime: "4 min", 
    cookTime: "2.5 min", 
    servings: "2-3 rebanadas",
    chefTip: "Miga húmeda y aroma suave. Puedes añadir nueces o pasas si lo quieres tipo pan dulce. Si la zanahoria está muy jugosa, reduce el agua a 20 ml."
  },
  { 
    id: "23", 
    title: "Pan de cacao salado (para untar)", 
    categoryId: "panes-microondas", 
    ingredients: [
      "Harina de almendra: 30 g",
      "Cacao sin azúcar: 5 g",
      "Polvo de hornear: 2 g",
      "Sal: 1 pizca",
      "Huevo: 1 unidad",
      "Agua: 30 ml",
      "Aceite: 5 ml"
    ], 
    instructions: [
      "Mezcla todo en taza o molde pequeño hasta integrar.",
      "Cocina en microondas 1 min 30 seg.",
      "Enfría un poco y corta para untar con cremas o quesos."
    ], 
    prepTime: "2 min", 
    cookTime: "1.5 min", 
    servings: "1-2 panes",
    chefTip: "No es dulce: tiene sabor tipo pan negro. Ideal con queso crema, hummus o aguacate. Para hacerlo dulce, añade 1 cda de miel o eritritol y ½ cdta de canela."
  },
  { 
    id: "24", 
    title: "Pan de arroz integral en 7 minutos", 
    categoryId: "panes-microondas", 
    ingredients: [
      "Harina de arroz integral: 80 g",
      "Fécula de tapioca: 20 g",
      "Polvo de hornear: 5 g",
      "Sal: 4 g",
      "Agua: 100 ml",
      "Aceite de oliva: 10 ml",
      "Vinagre: 5 ml"
    ], 
    instructions: [
      "Mezcla todos los ingredientes en un bol hasta obtener una masa tipo \"crema espesa\".",
      "Vierte en un molde rectangular pequeño (flanera de silicona).",
      "Cocina 5 min en microondas.",
      "Deja reposar 2 min y desmolda."
    ], 
    prepTime: "2 min", 
    cookTime: "5 min", 
    servings: "3-4 rebanadas",
    chefTip: "Miga compacta pero suave. Ideal para cortar en rebanadas finas y tostar. Si lo quieres más aireado, añade 1 clara batida al final."
  },
  { 
    id: "25", 
    title: "Pan exprés de arroz y yogur (extra esponjoso)", 
    categoryId: "panes-microondas", 
    ingredients: [
      "Harina de arroz: 40 g",
      "Yogur natural o vegetal: 40 g",
      "Huevo: 1 unidad",
      "Polvo de hornear: 3 g",
      "Aceite: 5 ml",
      "Sal: pizca"
    ], 
    instructions: [
      "Coloca todos los ingredientes en una taza grande y mezcla hasta obtener una masa espesa y sin grumos.",
      "Cocina 1 min 30 seg en microondas (800–900 W).",
      "Revisa el centro: si sigue húmedo, agrega 10–15 seg adicionales.",
      "Deja reposar 1 minuto antes de desmoldar."
    ], 
    prepTime: "2 min", 
    cookTime: "1.5 min", 
    servings: "1 pan individual",
    chefTip: "Queda muy suave, ideal para sándwiches pequeños. Si deseas una versión dulce, añade 1 cdta de miel o stevia."
  },
  { 
    id: "26", 
    title: "Pan exprés de maíz suave (tipo \"arepita\")", 
    categoryId: "panes-microondas", 
    ingredients: [
      "Harina de maíz precocida: 40 g",
      "Harina de arroz: 20 g",
      "Agua tibia: 60 ml",
      "Aceite: 1 cucharadita",
      "Sal: 1 pizca"
    ], 
    instructions: [
      "Mezcla todos los ingredientes hasta formar una masa suave y maleable.",
      "Aplánala con las manos hasta formar un disco de 1 cm.",
      "Cocina 2 min por lado en el microondas (voltea a la mitad).",
      "Deja reposar 30 segundos."
    ], 
    prepTime: "3 min", 
    cookTime: "2 min", 
    servings: "1 disco mediano",
    chefTip: "Queda tipo \"arepita\" suave, perfecta para rellenar. Si quieres que dore más, tuéstala ligeramente en sartén."
  },
  { 
    id: "27", 
    title: "Pan exprés de coco y arroz (aromático)", 
    categoryId: "panes-microondas", 
    ingredients: [
      "Harina de arroz: 30 g",
      "Harina de coco: 10 g",
      "Huevo: 1 unidad",
      "Agua o leche vegetal: 40 ml",
      "Aceite de coco: 1 cdta",
      "Polvo de hornear: ½ cdta"
    ], 
    instructions: [
      "Mezcla todo en una taza o molde pequeño hasta lograr una crema espesa.",
      "Cocina 1 min 30 seg en microondas.",
      "Si es necesario, añade 10 seg más.",
      "Reposa antes de cortar."
    ], 
    prepTime: "2 min", 
    cookTime: "1.5 min", 
    servings: "1 pan pequeño",
    chefTip: "La harina de coco absorbe más líquido; si queda muy espesa, agrega 1 cucharada de agua extra."
  },
  { 
    id: "28", 
    title: "Pan exprés de lino (alto en fibra)", 
    categoryId: "panes-microondas", 
    ingredients: [
      "Harina de lino o linaza molida: 30 g",
      "Agua tibia: 50 ml",
      "Polvo de hornear: ½ cdta",
      "Aceite: 1 cdta",
      "Sal: pizca"
    ], 
    instructions: [
      "Mezcla todos los ingredientes hasta obtener una masa espesa.",
      "Cocina 1 min 20 seg en el microondas.",
      "Revisa firmeza y añade 10 seg más si es necesario.",
      "Deja reposar 1 minuto."
    ], 
    prepTime: "2 min", 
    cookTime: "1.5 min", 
    servings: "1 pan individual",
    chefTip: "Queda denso y saciante. Ideal para desayunos o acompañar sopas. Si lo quieres más esponjoso, añade 1 clara batida."
  },
  { 
    id: "29", 
    title: "Pan exprés de yogur y limón", 
    categoryId: "panes-microondas", 
    ingredients: [
      "Harina de arroz: 40 g",
      "Yogur natural: 40 g",
      "Huevo: 1 unidad",
      "Polvo de hornear: ½ cdta",
      "Ralladura de limón: ½ cdta",
      "Stevia o azúcar: 1 cdta"
    ], 
    instructions: [
      "Mezcla todos los ingredientes en una taza larga hasta obtener crema espesa.",
      "Cocina 1 min 30 seg en microondas.",
      "Si sigue húmedo, agrega 10–12 seg más.",
      "Espera 1 minuto antes de servir."
    ], 
    prepTime: "2 min", 
    cookTime: "1.5 min", 
    servings: "1 pan individual",
    chefTip: "Queda un pan suave y ligeramente dulce. Puedes añadir semillas de amapola para un toque gourmet."
  },
  { 
    id: "30", 
    title: "Pan exprés de arroz y avena GF", 
    categoryId: "panes-microondas", 
    ingredients: [
      "Harina de avena sin gluten: 20 g",
      "Harina de arroz: 20 g",
      "Huevo: 1 unidad",
      "Agua: 40 ml",
      "Aceite: 1 cdta",
      "Polvo de hornear: ½ cdta",
      "Sal: pizca"
    ], 
    instructions: [
      "Bate todos los ingredientes hasta obtener una masa espesa.",
      "Vierte en una taza o molde rectangular.",
      "Cocina 1 min 40 seg en microondas.",
      "Comprueba textura y añade 10 seg más si es necesario.",
      "Deja enfriar antes de desmoldar."
    ], 
    prepTime: "2 min", 
    cookTime: "2 min", 
    servings: "1 pan individual",
    chefTip: "Combinación perfecta para textura tierna y sabor neutro. Ideal para sándwiches dulces o salados."
  },
  { 
    id: "31", 
    title: "Pan exprés de garbanzo y limón", 
    categoryId: "panes-microondas", 
    ingredients: [
      "Harina de garbanzo: 30 g",
      "Agua: 50 ml",
      "Aceite: 1 cdta",
      "Ralladura de limón: ½ cdta",
      "Polvo de hornear: ½ cdta",
      "Sal: pizca"
    ], 
    instructions: [
      "Mezcla todos los ingredientes en una taza o molde pequeño. La masa debe quedar cremosa.",
      "Cocina 1 min 40 seg.",
      "Revisa textura y, si es necesario, añade 10 seg más.",
      "Deja reposar antes de cortar."
    ], 
    prepTime: "2 min", 
    cookTime: "2 min", 
    servings: "1 unidad",
    chefTip: "El limón suaviza el sabor del garbanzo y da un aroma fresco."
  },
  { 
    id: "32", 
    title: "Pan exprés tipo panqueque grueso", 
    categoryId: "panes-microondas", 
    ingredients: [
      "Harina de arroz: 40 g",
      "Huevo: 1 unidad",
      "Agua o leche vegetal: 30 ml",
      "Aceite: 1 cdta",
      "Polvo de hornear: ½ cdta",
      "Sal: pizca"
    ], 
    instructions: [
      "Mezcla todo en un plato hondo o molde plano para que quede con forma de disco.",
      "Cocina 1 min 20 seg.",
      "Voltea el disco y cocina 20–30 seg adicionales.",
      "Deja reposar para que tome estructura."
    ], 
    prepTime: "2 min", 
    cookTime: "1.5 min", 
    servings: "1 unidad",
    chefTip: "Queda suave y es ideal como base para untar. Puedes cortarlo en triángulos como \"pan pita exprés\"."
  },
  { 
    id: "33", 
    title: "Pan exprés de arroz con cúrcuma", 
    categoryId: "panes-microondas", 
    ingredients: [
      "Harina de arroz: 40 g",
      "Agua tibia: 40 ml",
      "Aceite: 1 cdta",
      "Cúrcuma: ¼ cdta",
      "Polvo de hornear: ½ cdta",
      "Sal: pizca"
    ], 
    instructions: [
      "Mezcla todos los ingredientes hasta obtener una masa espesa, sin grumos.",
      "Cocina 1 min 30 seg en microondas.",
      "Si la superficie sigue húmeda, añade 10 seg más.",
      "Reposa antes de consumir."
    ], 
    prepTime: "2 min", 
    cookTime: "1.5 min", 
    servings: "1 unidad",
    chefTip: "Color dorado natural y propiedades antiinflamatorias. Perfecto para combinar con hummus o aguacate."
  },
  { 
    id: "34", 
    title: "Pan exprés de arroz y claras (aireado)", 
    categoryId: "panes-microondas", 
    ingredients: [
      "Clara de huevo: 1 unidad",
      "Harina de arroz: 35 g",
      "Polvo de hornear: ½ cdta",
      "Agua: 30 ml",
      "Sal: pizca",
      "Aceite: 1 cdta"
    ], 
    instructions: [
      "Bate ligeramente la clara con el agua.",
      "Añade la harina, el polvo de hornear, el aceite y la sal. Mezcla hasta obtener una masa cremosa.",
      "Cocina 1 min 20 seg.",
      "Si deseas más firmeza, agrega 10 seg adicionales."
    ], 
    prepTime: "2 min", 
    cookTime: "1.5 min", 
    servings: "1 pan pequeño",
    chefTip: "Es uno de los panes exprés más aireados. Perfecto para quienes quieren una opción más ligera o alta en proteína."
  },
  { 
    id: "35", 
    title: "Pan pita exprés al microondas (plano)", 
    categoryId: "panes-microondas", 
    ingredients: [
      "Harina de arroz: 60 g",
      "Fécula de maíz: 20 g",
      "Polvo de hornear: 3 g",
      "Sal: 2 g",
      "Agua: 70 ml",
      "Aceite: 5 ml"
    ], 
    instructions: [
      "Mezcla todo hasta formar una masa blanda, no pegajosa.",
      "Divide en 2 bolitas y estira con las manos hasta ½ cm de grosor.",
      "Coloca una por vez en un plato cubierto con papel vegetal.",
      "Cocina 1 min 30 seg por cada lado (volteando a la mitad)."
    ], 
    prepTime: "3 min", 
    cookTime: "5 min", 
    servings: "2 unidades medianas",
    chefTip: "Quedan flexibles, tipo tortilla. Perfectas para wraps, tacos o fajitas. Puedes refrigerarlas y calentar 15 seg antes de usar."
  },

  // Categoría 3: Panes de Sartén/Plancha (15)
  { 
    id: "36",
    title: "Bejú clásico de almidón de yuca (Paraguay)", 
    categoryId: "panes-sarten", 
    ingredients: ["Almidón de yuca o mandioca (tapioca granulada): 250 g", "Queso rallado (semicurado o mozzarella): 150 g", "Sal: 3 g", "Manteca o aceite: 20 g", "Agua o leche: 80 ml"], 
    instructions: ["En un bol, mezclá el almidón de yuca, el queso y la sal.", "Agregá poco a poco el líquido hasta que la mezcla quede granulada pero húmeda (como arena mojada).", "Calentá una sartén antiadherente y derretí un poco de manteca.", "Verté 2–3 cucharadas de la mezcla, presioná con cuchara para compactar.", "Cociná 2–3 min por lado hasta dorar.", "Consejos: La clave está en no hacer masa: debe verse granulada, no pegajosa. Comelo recién hecho, caliente y crocante. Si querés versión sin lácteos, usá queso vegetal rallado y aceite de coco."], 
    prepTime: "5 min", 
    cookTime: "10 min", 
    servings: "6 unidades pequeñas" 
  },
  { 
    id: "37",
    title: "Tortillas de maíz 100% GF (plancha)",
    categoryId: "panes-sarten",
    ingredients: ["Harina de maíz nixtamalizada (masa harina): 200 g", "Agua tibia: 220 ml", "Sal: 4 g"], 
    instructions: ["Mezclá harina y sal.", "Agregá el agua poco a poco mientras amasás hasta obtener una masa blanda y lisa.", "Dividí en 8 bolitas y cubrilas con paño húmedo.", "Estirá cada bolita entre dos papeles hasta 2 mm de espesor.", "Cociná en plancha caliente 1 min por lado.", "Consejos: Si se agrietan, les falta agua: agregá de a cucharadas. Mantenelas cubiertas con paño limpio para que no se sequen. Perfectas para tacos o quesadillas."], 
    prepTime: "10 min", 
    cookTime: "10 min", 
    servings: "8 tortillas medianas" 
  },
  { 
    id: "38",
    title: "Tortillas de yuca (cassava tortillas)",
    categoryId: "panes-sarten",
    ingredients: ["Yuca cocida y hecha puré: 300 g", "Fécula de mandioca o tapioca: 30 g", "Sal: 3 g", "Aceite: 10 ml"], 
    instructions: ["Mezclá la yuca tibia con la fécula, sal y aceite.", "Amasá hasta obtener masa suave, no pegajosa.", "Dividí en 6 bolitas y aplastá hasta 3–4 mm.", "Cociná 2 min por lado en sartén caliente sin grasa.", "Consejos: Textura flexible, ideal para wraps. Si se endurecen, tapalas con paño húmedo apenas salgan del fuego. También podés hacerlas con yuca congelada (descongelá y escurrí bien)."], 
    prepTime: "15 min", 
    cookTime: "10 min", 
    servings: "6 unidades" 
  },
  { 
    id: "39",
    title: "Tortillas de garbanzo (socca fina en sartén)",
    categoryId: "panes-sarten",
    ingredients: ["Harina de garbanzo: 100 g", "Agua: 180 ml", "Sal: 3 g", "Aceite de oliva: 10 ml", "Especias al gusto (romero, pimienta, cúrcuma, ajo en polvo)"], 
    instructions: ["Mezclá harina, agua, sal y aceite.", "Dejá reposar 10 min para que espese un poco.", "Verté una capa fina en sartén caliente engrasada.", "Cociná 2 min por lado hasta bordes dorados.", "Consejos: Es una versión sin gluten de la \"socca\" italiana. Podés usarla como base de pizza rápida. Si querés textura más firme, horneala 5 min más después."], 
    prepTime: "12 min", 
    cookTime: "3 min", 
    servings: "4 tortillas finas" 
  },
  { 
    id: "40",
    title: "Arepas clásicas de maíz precocido (plancha)",
    categoryId: "panes-sarten",
    ingredients: ["Harina de maíz precocida blanca o amarilla: 250 g", "Agua tibia: 300 ml", "Sal: 5 g", "Aceite o manteca: 15 ml"], 
    instructions: ["En un bol, mezclá harina y sal.", "Agregá el agua poco a poco y amasá hasta que la masa quede suave y no se pegue.", "Hacé bolitas y aplastalas hasta 1,5 cm de grosor.", "Cociná 5 min por lado en plancha o sartén con un poco de aceite.", "Consejos: Si se agrietan al formar, agregá 1–2 cdas de agua. Cuando las golpeás y suenan huecas, están listas. Podés rellenarlas con queso, aguacate, pollo o lo que más te guste."], 
    prepTime: "10 min", 
    cookTime: "10 min", 
    servings: "6 unidades" 
  },
  { 
    id: "41",
    title: "Pan pita de sartén sin gluten",
    categoryId: "panes-sarten",
    ingredients: ["Harina de arroz: 100 g", "Fécula de maíz: 80 g", "Harina de avena GF o sorgo: 40 g", "Polvo de hornear: 4 g", "Sal: 3 g", "Psyllium en polvo: 6 g", "Agua tibia: 140 ml", "Aceite: 10 ml"], 
    instructions: ["Mezclá todos los secos en un bol.", "Agregá el agua y el aceite, y mezclá hasta obtener una masa suave y elástica.", "Dividí en 4 bolitas y estirá cada una de 3–4 mm.", "Calentá una sartén antiadherente y cociná cada pan 2–3 min por lado.", "Cuando se inflan un poco y toman color, ya están listos.", "Consejos: Son ideales para rellenar con hummus, falafel o vegetales. Guardalos envueltos en paño limpio; se mantienen suaves. Si los querés más elásticos, agregá 10 ml más de agua."], 
    prepTime: "15 min", 
    cookTime: "10 min", 
    servings: "4 unidades medianas" 
  },
  { 
    id: "42",
    title: "Naan sin gluten a la sartén (versión con yogurt vegetal)",
    categoryId: "panes-sarten",
    ingredients: ["Harina de arroz: 120 g", "Harina de tapioca: 60 g", "Polvo de hornear: 5 g", "Sal: 3 g", "Yogurt vegetal natural: 100 g", "Agua tibia: 60 ml", "Aceite: 15 ml"], 
    instructions: ["Mezclá harinas, polvo de hornear y sal.", "Agregá yogurt, agua y aceite; amasá hasta masa blanda.", "Dividí en 6 porciones y estirá en forma de disco fino.", "Cociná cada naan 2 min por lado en sartén caliente.", "Pincelá con aceite o manteca derretida apenas salgan.", "Consejos: Quedan suaves y fragantes. Perfectos para acompañar curry o guisos. Si querés versión sin yogurt, reemplazalo por 100 ml de leche vegetal y 5 ml más de aceite."], 
    prepTime: "15 min", 
    cookTime: "10 min", 
    servings: "6 unidades pequeñas" 
  },
  { 
    id: "43",
    title: "Focaccia plana a la plancha (estilo torta al testo)",
    categoryId: "panes-sarten",
    ingredients: ["Harina de arroz: 150 g", "Harina de maíz fina: 50 g", "Fécula de tapioca: 30 g", "Psyllium: 6 g", "Polvo de hornear: 5 g", "Sal: 4 g", "Agua tibia: 160 ml", "Aceite de oliva: 25 ml", "Hierbas secas (romero, orégano): 2 g"], 
    instructions: ["Mezclá todos los secos en un bol.", "Agregá el agua tibia y el aceite.", "Formá una masa húmeda pero maleable.", "Dividí en dos discos de 1 cm de espesor.", "Cociná cada uno en sartén a fuego medio 6–7 min por lado, tapando los primeros minutos.", "Consejos: Miga húmeda y sabor a oliva irresistible. Podés rellenarla con tomate seco y aceitunas antes de cocinar. Si la querés más crujiente, destapá los últimos 2 minutos."], 
    prepTime: "10 min", 
    cookTime: "15 min", 
    servings: "2 panes medianos" 
  },
  { 
    id: "44",
    title: "Pan chapati sin gluten (mezcla arroz + tapioca)",
    categoryId: "panes-sarten",
    ingredients: ["Harina de arroz: 100 g", "Fécula de tapioca: 80 g", "Sal: 3 g", "Agua caliente: 150 ml", "Aceite: 5 ml"], 
    instructions: ["Mezclá harina, tapioca y sal.", "Agregá el agua caliente (de a poco) y el aceite.", "Amasá hasta que no se pegue.", "Dividí en 6 bolitas y estirá fino (2–3 mm).", "Cociná 1–2 min por lado hasta que se formen manchitas doradas.", "Consejos: Son suaves, flexibles y perfectos para enrollar. Mantenelos envueltos en paño para que no se sequen. Podés añadir 1 cda de yogurt vegetal si los querés más tiernos."], 
    prepTime: "10 min", 
    cookTime: "10 min", 
    servings: "6 unidades finas" 
  },
  { 
    id: "45",
    title: "Pan tipo \"piadina\" sin gluten",
    categoryId: "panes-sarten",
    ingredients: ["Harina de arroz: 100 g", "Harina de avena GF: 80 g", "Polvo de hornear: 3 g", "Sal: 3 g", "Aceite de oliva: 20 ml", "Agua tibia: 100 ml"], 
    instructions: ["Mezclá harinas, polvo de hornear y sal.", "Agregá el aceite y el agua, y formá masa suave.", "Dividí en 4 bolitas y estirá finas (2–3 mm).", "Cociná 1–2 min por lado en plancha caliente.", "Serví tibias con rellenos salados.", "Consejos: Perfectas para wraps o paninis. Quedan muy tiernas si las tapás apenas salgan. También podés hacer mini piadinas para picadas."], 
    prepTime: "10 min", 
    cookTime: "10 min", 
    servings: "4 unidades medianas" 
  },
  { 
    id: "46",
    title: "Pan plano de quinua (ligero y flexible)",
    categoryId: "panes-sarten",
    ingredients: ["Harina de quinua: 100 g", "Fécula de tapioca: 50 g", "Polvo de hornear: 3 g", "Sal: 3 g", "Agua tibia: 120 ml", "Aceite: 10 ml"], 
    instructions: ["Mezclá harinas, polvo de hornear y sal.", "Agregá agua y aceite; mezclá hasta masa suave.", "Dividí en 4 partes y estirá de 3 mm.", "Cociná 2 min por lado en sartén antiadherente caliente.", "Consejos: Pan de sabor suave y textura elástica. Ideal para tacos, wraps o acompañar sopas. Si lo querés más tierno, sumá 1 cucharada extra de agua o aceite."], 
    prepTime: "10 min", 
    cookTime: "10 min", 
    servings: "4 unidades medianas" 
  },
  { 
    id: "47",
    title: "Pan de sarraceno en sartén (galette base)",
    categoryId: "panes-sarten",
    ingredients: ["Harina de trigo sarraceno: 100 g", "Agua: 200 ml", "Sal: 2 g", "Aceite: 5 ml"],
    instructions: ["Mezclá harina, sal y agua hasta que no queden grumos.", "Reposá 10 min para que espese un poco.", "Verté una capa fina en sartén antiadherente engrasada.", "Cociná 2–3 min por lado hasta dorar.", "Consejos: Quedan finas, tipo crepe salado francés. Podés rellenarlas con verduras salteadas o jamón y queso. Si querés sabor más neutro, mezclá mitad sarraceno y mitad arroz."], 
    prepTime: "12 min", 
    cookTime: "6 min", 
    servings: "3 galettes grandes" 
  },
  { 
    id: "48",
    title: "Pan de batata (láminas flexibles en plancha)",
    categoryId: "panes-sarten",
    ingredients: ["Puré de batata cocida: 200 g", "Harina de arroz: 80 g", "Fécula de maíz: 30 g", "Sal: 3 g", "Aceite: 10 ml"],
    instructions: ["Mezclá el puré con la harina, fécula, sal y aceite.", "Formá masa blanda. Si está muy seca, agregá 1–2 cdas de agua.", "Dividí en 4 bolitas y estirá fino (3 mm).", "Cociná 2–3 min por lado hasta dorar.", "Consejos: Miga suave y ligeramente dulce. Perfecto para combinar con sabores salados (queso, palta, hummus). También podés usar puré de zapallo o papa en lugar de batata."], 
    prepTime: "15 min", 
    cookTime: "10 min", 
    servings: "4 unidades medianas" 
  },
  { 
    id: "49",
    title: "Pan árabe fino sin gluten (plancha rápida)",
    categoryId: "panes-sarten",
    ingredients: ["Harina de arroz: 100 g", "Harina de maíz fina: 50 g", "Fécula de tapioca: 50 g", "Polvo de hornear: 3 g", "Sal: 3 g", "Agua tibia: 140 ml", "Aceite: 10 ml"],
    instructions: ["Mezclá harinas, polvo de hornear y sal.", "Incorporá agua y aceite hasta lograr masa blanda y elástica.", "Dividí en 4 bolitas y estirá finas (2–3 mm).", "Cociná 1–2 min por lado hasta dorar.", "Consejos: Livianos, flexibles y deliciosos. Si los querés con burbujas, subí un poco el fuego. Mantenelos tapados para conservar su suavidad."], 
    prepTime: "10 min", 
    cookTime: "10 min", 
    servings: "4 unidades medianas" 
  },
  { 
    id: "50",
    title: "Pan \"arepa dulce\" (panecillo dulce de plancha)",
    categoryId: "panes-sarten",
    ingredients: ["Harina de maíz precocida: 200 g", "Agua tibia: 220 ml", "Azúcar mascabo o miel: 25 g", "Canela en polvo: 1 g", "Sal: 1 pizca", "Aceite o manteca: 15 ml"],
    instructions: ["Mezclá harina, azúcar, canela y sal.", "Agregá el agua y formá masa suave.", "Armá bollitos y aplastá hasta 1 cm.", "Cociná en plancha engrasada 4–5 min por lado.", "Consejos: Deliciosas para desayuno o merienda. Podés rellenarlas con queso o mermelada. Si querés más dulces, añadí 1 cda extra de miel."], 
    prepTime: "10 min", 
    cookTime: "15 min", 
    servings: "6 unidades" 
  },
  { 
    id: "51",
    title: "Panqueque verde de espinaca (flexible y suave)",
    categoryId: "panes-sarten",
    ingredients: ["Espinaca cruda: 30 g (1 taza)", "Harina de arroz: 70 g", "Fécula de tapioca: 30 g", "Huevo: 1 unidad", "Agua o leche vegetal: 120 ml", "Aceite: 5 ml", "Sal: 2 g"],
    instructions: ["Licúa agua/leche con la espinaca hasta obtener líquido verde homogéneo.", "Mezcla harinas, sal y huevo.", "Incorpora el licuado verde y mezcla hasta obtener una crema fluida.", "Cocina en sartén antiadherente 1 min por lado."],
    expectedTexture: "Súper flexible para wraps.",
    chefTip: "Si lo quieres más verde, añade 10 g extra de espinaca.",
    prepTime: "12 min",
    cookTime: "8 min",
    servings: "4 unidades"
  },
  { 
    id: "52",
    title: "Panqueque rosa de remolacha (color intenso)",
    categoryId: "panes-sarten",
    ingredients: ["Remolacha cocida: 80 g", "Harina de arroz: 60 g", "Fécula de maíz: 20 g", "Agua: 100 ml", "Huevo: 1 unidad", "Aceite: 5 ml", "Sal: pizca"],
    instructions: ["Procesa la remolacha con el agua.", "Mezcla todo hasta obtener una crema uniforme y espesa.", "Cocina discos finos 1 min por lado."],
    expectedTexture: "Color rosa intenso, textura flexible.",
    chefTip: "Perfecto para sándwiches coloridos. Añade comino o ajo si lo quieres salado y aromático.",
    prepTime: "12 min",
    cookTime: "6 min",
    servings: "3-4 unidades"
  },
  { 
    id: "53",
    title: "🍯 Panqueque dulce de vainilla (tipo crepe)",
    categoryId: "panes-sarten",
    ingredients: ["Harina de arroz: 60 g", "Fécula de maíz: 20 g", "Huevo: 1 unidad", "Leche vegetal: 140 ml", "Azúcar o miel: 15 g", "Vainilla: ½ cdta", "Aceite: 5 ml"],
    instructions: ["Mezcla secos, añade líquidos y bate bien.", "Cocina finos, 40–50 seg por lado."],
    expectedTexture: "Miga suave tipo crepe francés.",
    chefTip: "Relleno perfecto: mermeladas, frutas, crema.",
    prepTime: "10 min",
    cookTime: "8 min",
    servings: "4 unidades"
  },
  { 
    id: "54",
    title: "🍞 Pan plano de arroz y psyllium (extra flexible)",
    categoryId: "panes-sarten",
    ingredients: ["Harina de arroz: 100 g", "Psyllium: 4 g", "Aceite: 10 ml", "Sal: 3 g", "Agua caliente: 130 ml"],
    instructions: ["Mezcla secos.", "Agrega agua caliente y aceite.", "Amasa hasta masa suave y no pegajosa.", "Estira 2–3 mm y cocina 1–2 min por lado."],
    expectedTexture: "Muy similar a tortilla suave.",
    chefTip: "Si se seca, cubre con paño húmedo.",
    prepTime: "15 min",
    cookTime: "8 min",
    servings: "4 discos"
  },
  { 
    id: "55",
    title: "Tortita de maíz y queso (rápida y esponjosa)",
    categoryId: "panes-sarten",
    ingredients: ["Harina de maíz precocida: 100 g", "Queso rallado o vegetal: 40 g", "Agua tibia: 120 ml", "Sal: pizca", "Aceite: 10 ml"],
    instructions: ["Mezcla harina, queso y sal.", "Añade agua y aceite.", "Forma discos de 1 cm.", "Cocina 3 min por lado."],
    expectedTexture: "Tiernas con capa crocante.",
    chefTip: "Úsalas como base de mini pizzas.",
    prepTime: "12 min",
    cookTime: "12 min",
    servings: "4 tortitas"
  },
  { 
    id: "56",
    title: "Pan de papa en sartén (blando y húmedo)",
    categoryId: "panes-sarten",
    ingredients: ["Papa pisada: 150 g", "Harina de arroz: 60 g", "Fécula de maíz: 20 g", "Sal: 3 g", "Aceite: 10 ml", "Agua: 20–30 ml según humedad"],
    instructions: ["Mezcla papa, harinas, sal y aceite.", "Ajusta con agua hasta masa suave.", "Cocina 2–3 min por lado."],
    expectedTexture: "Miga húmeda y suave.",
    chefTip: "Perfecto para rellenos cremosos. Si lo quieres más elástico, agrega 1 cda de tapioca.",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: "4 discos medianos"
  },
  { 
    id: "57",
    title: "Pan plano de garbanzo y cebolla",
    categoryId: "panes-sarten",
    ingredients: ["Harina de garbanzo: 80 g", "Cebolla muy picada: 40 g", "Agua: 120 ml", "Sal: 2 g", "Aceite: 5 ml"],
    instructions: ["Mezcla harina, agua y sal; reposa 10 min.", "Añade cebolla.", "Cocina discos finos hasta dorar."],
    expectedTexture: "Tipo socca rústica.",
    chefTip: "Delicioso con hummus o tomate.",
    prepTime: "18 min",
    cookTime: "12 min",
    servings: "3 unidades"
  },
  { 
    id: "58",
    title: "Pan dulce de coco (aromático)",
    categoryId: "panes-sarten",
    ingredients: ["Harina de arroz: 60 g", "Harina de coco: 15 g", "Huevo: 1 unidad", "Leche vegetal: 80 ml", "Azúcar o miel: 15 g", "Aceite de coco: 5 ml", "Polvo de hornear: ½ cdta"],
    instructions: ["Mezcla todo.", "Vierte porciones pequeñas.", "Cocina 2 min por lado."],
    expectedTexture: "Suaves y perfumados.",
    chefTip: "Ideales con café.",
    prepTime: "10 min",
    cookTime: "12 min",
    servings: "4 unidades"
  },
  { 
    id: "59",
    title: "Pan tipo \"focaccina\" de sartén",
    categoryId: "panes-sarten",
    ingredients: ["Harina de arroz: 120 g", "Fécula de tapioca: 30 g", "Aceite de oliva: 20 ml", "Agua tibia: 130 ml", "Sal: 3 g", "Romero: 1 cdta"],
    instructions: ["Mezcla secos.", "Añade agua y aceite; forma masa húmeda.", "Extiende de 1 cm.", "Cocina tapado 5 min por lado."],
    expectedTexture: "Húmeda y aromática.",
    chefTip: "Final ideal: un chorrito de aceite y sal gruesa.",
    prepTime: "18 min",
    cookTime: "10 min",
    servings: "1 pan plano grande"
  },
  { 
    id: "60",
    title: "🧄 Pan plano de arroz y ajo",
    categoryId: "panes-sarten",
    ingredients: ["Harina de arroz: 80 g", "Fécula de maíz: 20 g", "Agua: 120 ml", "Ajo rallado: 1 diente", "Aceite: 5 ml", "Sal: 2 g"],
    instructions: ["Mezcla todo hasta lograr crema espesa.", "Cocina discos finos 1 min por lado."],
    expectedTexture: "Flexible con aroma intenso a ajo.",
    chefTip: "Perfecto para acompañar sopas o como base de bruschetta.",
    prepTime: "10 min",
    cookTime: "8 min",
    servings: "4 unidades"
  },
  { 
    id: "61",
    title: "Pan de avena GF y chía en sartén",
    categoryId: "panes-sarten",
    ingredients: ["Harina de avena GF: 60 g", "Semillas de chía: 10 g", "Harina de arroz: 20 g", "Agua tibia: 110 ml", "Aceite: 5 ml", "Sal: 2 g"],
    instructions: ["Mezcla avena, arroz, chía y sal.", "Añade agua y aceite; reposa 5 min.", "Cocina 1–2 min por lado."],
    expectedTexture: "Miga tierna con fibra extra.",
    chefTip: "Para más elasticidad, añade 1 cda de tapioca.",
    prepTime: "10 min",
    cookTime: "8 min",
    servings: "3 unidades"
  },
  { 
    id: "62",
    title: "Pan de tomate en sartén (suave y aromático)",
    categoryId: "panes-sarten",
    ingredients: ["Puré de tomate espeso: 100 g", "Harina de arroz: 70 g", "Fécula de tapioca: 20 g", "Sal: 2 g", "Aceite: 5 ml", "Orégano: pizca"],
    instructions: ["Mezcla todo hasta masa suave.", "Forma discos de 1 cm.", "Cocina 2 min por lado."],
    expectedTexture: "Suave con sabor intenso a tomate.",
    chefTip: "Ideal para bruschetta o como base de pizza.",
    prepTime: "12 min",
    cookTime: "8 min",
    servings: "4 discos"
  },
  { 
    id: "63",
    title: "🍠 Pan de zapallo express en sartén",
    categoryId: "panes-sarten",
    ingredients: ["Puré de zapallo: 120 g", "Harina de arroz: 70 g", "Fécula de maíz: 20 g", "Aceite: 10 ml", "Sal: pizca"],
    instructions: ["Mezcla todo hasta obtener masa blanda.", "Forma discos de 1 cm.", "Cocina 3 min por lado."],
    expectedTexture: "Miga húmeda y sabor suave.",
    chefTip: "Excelente como base de tostadas saladas.",
    prepTime: "10 min",
    cookTime: "12 min",
    servings: "4 unidades"
  },

  // Categoría 4: Panes con Fermentación Corta (10)
  { 
    id: "64",
    title: "Pan de molde esponjoso (arroz + tapioca + psyllium)", 
    categoryId: "panes-fermentacion",
    ingredients: ["Harina de arroz: 200 g", "Fécula de tapioca: 100 g", "Psyllium en polvo: 8 g", "Levadura seca instantánea: 6 g", "Azúcar: 10 g", "Sal: 5 g", "Agua tibia: 260 ml", "Aceite de oliva: 30 ml", "Vinagre de manzana: 10 ml"], 
    instructions: ["En un bol grande, mezclá harinas, psyllium, levadura, azúcar y sal.", "Agregá agua tibia, aceite y vinagre. Mezclá bien con espátula; la masa será espesa y húmeda.", "Verté al molde, alisá con espátula mojada.", "Tapá y dejá levar 30–40 min hasta que suba casi al borde.", "Horneá 35 min a 190 °C.", "Desmoldá y enfriá sobre rejilla.", "Consejos: Miga suave y esponjosa, perfecta para tostadas. Si querés más dorado, pincelá con aceite antes de hornear. No sobrelevés, o colapsará al enfriar."], 
    prepTime: "40 min", 
    cookTime: "35 min", 
    servings: "12 rebanadas" 
  },
  { 
    id: "65",
    title: "Pan baguette corta fermentación (sin gluten)",
    categoryId: "panes-fermentacion",
    ingredients: ["Harina de arroz: 180 g", "Fécula de maíz: 100 g", "Fécula de papa: 40 g", "Psyllium: 8 g", "Levadura seca: 6 g", "Azúcar: 8 g", "Sal: 5 g", "Agua tibia: 280 ml", "Aceite: 20 ml"],
    instructions: ["Mezclá todos los secos.", "Agregá agua y aceite, mezclá con batidor o espátula hasta masa uniforme.", "Formá dos bastones con las manos húmedas y colocá sobre bandeja con papel.", "Dejá levar 30 min tapado.", "Horneá 25–30 min a 200 °C con un vasito de agua en la base del horno para vapor.", "Consejos: Corteza crujiente, interior tierno. Podés espolvorear harina de arroz encima antes del horneado. Si querés textura más alveolada, añadí 1 clara extra."], 
    prepTime: "40 min", 
    cookTime: "30 min", 
    servings: "2 baguettes medianas" 
  },
  { 
    id: "66",
    title: "Pan rústico con corteza crujiente (levadura instantánea)",
    categoryId: "panes-fermentacion",
    ingredients: ["Harina de arroz integral: 150 g", "Harina de maíz fina: 100 g", "Fécula de tapioca: 50 g", "Psyllium: 8 g", "Levadura seca: 5 g", "Sal: 4 g", "Azúcar: 8 g", "Agua tibia: 280 ml", "Aceite de oliva: 25 ml"],
    instructions: ["Mezclá harinas, psyllium, levadura, sal y azúcar.", "Agregá agua y aceite; mezclá hasta obtener masa húmeda y algo pegajosa.", "Verté sobre molde o formá una bola con las manos enharinadas.", "Dejá levar 45 min tapado.", "Horneá 35–40 min a 200 °C.", "Consejos: Corteza firme y miga húmeda. Perfecto para sopas o guisos. Podés agregar 1 cda de semillas para textura extra."], 
    prepTime: "50 min", 
    cookTime: "40 min", 
    servings: "1 pan mediano" 
  },
  { 
    id: "67",
    title: "Pan con aceitunas y romero (una fermentación)",
    categoryId: "panes-fermentacion",
    ingredients: ["Harina de arroz: 200 g", "Fécula de maíz: 80 g", "Harina de garbanzo: 40 g", "Psyllium: 8 g", "Levadura seca: 6 g", "Azúcar: 5 g", "Sal: 4 g", "Agua tibia: 260 ml", "Aceite de oliva: 30 ml", "Aceitunas verdes picadas: 50 g", "Romero fresco o seco: 2 g"],
    instructions: ["Mezclá harinas, psyllium, levadura, azúcar y sal.", "Agregá agua y aceite. Mezclá hasta obtener masa espesa.", "Incorporá aceitunas y romero.", "Verté en molde o bandeja y alisá.", "Levá 40 min tapado, luego horneá 35 min a 190 °C.", "Consejos: Aromático y con sabor mediterráneo. Si usás romero fresco, agregalo picado fino. Servilo tibio con aceite de oliva extra virgen."], 
    prepTime: "45 min", 
    cookTime: "35 min", 
    servings: "8-10 rebanadas" 
  },
  { 
    id: "68",
    title: "Pan ciabatta sin gluten (hidratación media)",
    categoryId: "panes-fermentacion",
    ingredients: ["Harina de arroz: 150 g", "Fécula de tapioca: 80 g", "Harina de sorgo: 70 g", "Psyllium: 8 g", "Levadura seca: 5 g", "Sal: 4 g", "Azúcar: 5 g", "Agua tibia: 260 ml", "Aceite de oliva: 25 ml"],
    instructions: ["Mezclá los secos en un bol.", "Agregá agua y aceite, mezclá hasta masa elástica y pegajosa.", "Verté sobre bandeja enharinada y formá dos panes alargados.", "Dejá levar 40 min tapado.", "Horneá 30–35 min a 200 °C.", "Consejos: Miga aireada, perfecta para sándwiches. Si querés más corteza, rociá con agua antes de hornear. Dejalo enfriar 20 min antes de cortar."], 
    prepTime: "45 min", 
    cookTime: "35 min", 
    servings: "2 panes medianos" 
  },
  { 
    id: "69",
    title: "Pan de campo simple (molde alargado)",
    categoryId: "panes-fermentacion",
    ingredients: ["Harina de arroz: 180 g", "Harina de maíz fina: 100 g", "Fécula de tapioca: 60 g", "Psyllium: 8 g", "Levadura seca: 6 g", "Azúcar: 8 g", "Sal: 5 g", "Agua tibia: 280 ml", "Aceite: 25 ml"],
    instructions: ["Mezclá los ingredientes secos en un bol grande.", "Agregá el agua y el aceite, mezclá bien.", "Verté la masa (de consistencia densa) en un molde alargado.", "Tapá y dejá levar 40–50 min en lugar cálido.", "Horneá 35–40 min a 190 °C.", "Enfriá sobre rejilla antes de cortar.", "Consejos: Pan básico, ideal para iniciarse en la panificación sin gluten. Si querés sabor más rústico, usá harina de arroz integral. También podés aromatizar con 1 cda de semillas o hierbas secas."], 
    prepTime: "50 min", 
    cookTime: "40 min", 
    servings: "10-12 rebanadas" 
  },
  { 
    id: "70", 
    title: "Pan de centeno \"fake\" (saborizado sin centeno)",
    categoryId: "panes-fermentacion",
    ingredients: ["Harina de sorgo: 150 g", "Harina de arroz integral: 100 g", "Fécula de papa: 60 g", "Psyllium: 8 g", "Levadura seca: 6 g", "Azúcar: 10 g", "Cacao sin azúcar: 5 g", "Café instantáneo: 1 g (opcional)", "Sal: 5 g", "Agua tibia: 280 ml", "Aceite: 25 ml", "Vinagre: 10 ml"], 
    instructions: ["Mezclá las harinas, psyllium, levadura, azúcar, cacao, café y sal.", "Incorporá agua, aceite y vinagre. Mezclá bien.", "Verté en molde y alisá.", "Dejá levar 40–45 min.", "Horneá 35–40 min a 190 °C.", "Consejos: El cacao y el café imitan el color y aroma del centeno clásico. Ideal con manteca o quesos fuertes. Conservá en la heladera hasta 5 días o congelado en rebanadas."], 
    prepTime: "50 min", 
    cookTime: "40 min", 
    servings: "10 rebanadas" 
  },
  { 
    id: "71", 
    title: "Pan de sándwich tierno (rebanado fino)",
    categoryId: "panes-fermentacion",
    ingredients: ["Harina de arroz: 180 g", "Fécula de tapioca: 100 g", "Fécula de maíz: 50 g", "Psyllium: 8 g", "Levadura seca: 6 g", "Azúcar: 10 g", "Sal: 5 g", "Leche vegetal tibia: 260 ml", "Aceite: 30 ml", "Vinagre: 10 ml"], 
    instructions: ["Mezclá todos los secos.", "Agregá leche, aceite y vinagre.", "Batí 1–2 min hasta mezcla homogénea.", "Verté en molde de pan inglés, tapá y dejá levar 35–40 min.", "Horneá 35 min a 190 °C.", "Consejos: Pan de miga muy suave, tipo \"pan lactal\". Si lo querés más alto, usá molde pequeño o sumá 10% de ingredientes. Perfecto para sándwiches o tostadas dulces."], 
    prepTime: "40 min", 
    cookTime: "35 min", 
    servings: "12 rebanadas finas" 
  },
  { 
    id: "72", 
    title: "Pan estilo bollo de hamburguesa (fermentación corta)",
    categoryId: "panes-fermentacion",
    ingredients: ["Harina de arroz: 200 g", "Fécula de tapioca: 80 g", "Fécula de maíz: 40 g", "Psyllium: 8 g", "Levadura seca: 6 g", "Azúcar: 10 g", "Sal: 4 g", "Agua tibia: 260 ml", "Aceite: 30 ml", "Semillas de sésamo (opcional): 10 g"], 
    instructions: ["Mezclá los secos.", "Agregá el agua y el aceite.", "Mezclá hasta que la masa quede espesa.", "Con las manos húmedas, formá 6 bollos y colocá en bandeja.", "Dejá levar 30–40 min tapados.", "Espolvoreá semillas y horneá 25–30 min a 190 °C.", "Consejos: Miga suave y corteza fina. Podés pintarlos con huevo o aceite para mejor dorado. Si los querés tipo pan de hot dog, formá alargados en lugar de redondos."], 
    prepTime: "40 min", 
    cookTime: "30 min", 
    servings: "6 bollos grandes" 
  },
  { 
    id: "73", 
    title: "Pan de hot dog sin gluten (molde individual)",
    categoryId: "panes-fermentacion",
    ingredients: ["Harina de arroz: 200 g", "Fécula de tapioca: 80 g", "Fécula de maíz: 40 g", "Psyllium: 8 g", "Levadura seca: 6 g", "Azúcar: 10 g", "Sal: 4 g", "Agua tibia: 260 ml", "Aceite: 30 ml"], 
    instructions: ["Mezclá los secos.", "Agregá agua y aceite.", "Verté en moldes individuales o formá panes alargados.", "Dejá levar 40 min.", "Horneá 25–30 min a 190 °C.", "Consejos: Miga tierna, perfecta para hot dogs o mini sándwiches. Si querés más elásticos, agregá 1 clara batida. Se pueden congelar después del horneado, envueltos en film."], 
    prepTime: "45 min", 
    cookTime: "30 min", 
    servings: "6 unidades" 
  },

  // Categoría 5: Panes de Masa Madre (8)
  { 
    id: "74", 
    title: "Pan rústico de masa madre (arroz + sorgo)",
    categoryId: "masa-madre",
    ingredients: ["Harina de arroz: 200 g", "Harina de sorgo: 150 g", "Fécula de tapioca: 80 g", "Psyllium: 8 g", "Sal: 6 g", "Masa madre sin gluten activa: 120 g", "Agua a temperatura ambiente: 280–300 ml", "Aceite de oliva: 20 ml"], 
    instructions: ["En un bol grande, mezclá las harinas, fécula, psyllium y sal.", "Agregá la masa madre y el agua, y mezclá bien con espátula o batidor.", "Sumá el aceite y mezclá hasta lograr una masa húmeda, sin grumos.", "Verté en molde o bol engrasado, tapá y dejá fermentar 8–10 h a temperatura ambiente (o en heladera 12 h).", "Horneá a 200 °C durante 40–45 min, hasta dorar.", "Dejá enfriar completamente antes de cortar.", "Consejos: Textura húmeda y corteza crujiente. Si tu ambiente es frío, dejá fermentar cerca del horno apagado. Podés añadir 1 cda de semillas para más sabor y fibra."], 
    prepTime: "8-10h fermentación", 
    cookTime: "40-45 min", 
    servings: "12 rebanadas" 
  },
  { 
    id: "75", 
    title: "Pan integral de masa madre (mijo + avena GF)",
    categoryId: "masa-madre",
    ingredients: ["Harina de mijo: 180 g", "Harina de avena GF: 120 g", "Fécula de papa: 80 g", "Psyllium: 8 g", "Sal: 5 g", "Masa madre activa: 100 g", "Agua: 280 ml", "Aceite: 20 ml", "Semillas (opcional): 30 g"], 
    instructions: ["Mezclá harinas, fécula, psyllium y sal.", "Agregá la masa madre, el agua y el aceite.", "Mezclá hasta obtener masa húmeda y uniforme.", "Verté en molde o fuente.", "Tapá y dejá fermentar 10–12 h hasta que aumente visiblemente.", "Horneá 40–45 min a 190 °C.", "Consejos: Aroma suave y sabor levemente dulce. Perfecto para tostadas o sandwiches saludables. Guardá rebanadas congeladas para tener pan fresco siempre."], 
    prepTime: "10-12h fermentación", 
    cookTime: "40-45 min", 
    servings: "12 rebanadas" 
  },
  { 
    id: "76", 
    title: "Pan de semillas con masa madre (alto en fibra)",
    categoryId: "masa-madre",
    ingredients: ["Harina de arroz integral: 150 g", "Harina de trigo sarraceno: 100 g", "Fécula de tapioca: 70 g", "Psyllium: 8 g", "Sal: 5 g", "Masa madre activa: 100 g", "Agua: 280 ml", "Aceite de oliva: 20 ml", "Semillas mixtas: 50 g (chía, lino, girasol)"], 
    instructions: ["Mezclá los secos.", "Agregá masa madre, agua y aceite.", "Agregá las semillas y mezclá.", "Verté en molde y alisá.", "Dejá fermentar 10–12 h.", "Horneá 45 min a 190 °C.", "Consejos: Pan denso, húmedo y muy saciante. Ideal para desayuno con palta o queso crema. Si usás semillas grandes, remojalas 1 h antes."], 
    prepTime: "10-12h fermentación", 
    cookTime: "45 min", 
    servings: "10-12 rebanadas" 
  },
  { 
    id: "77", 
    title: "Pan de molde de masa madre (suave)",
    categoryId: "masa-madre",
    ingredients: ["Harina de arroz: 200 g", "Harina de tapioca: 100 g", "Fécula de papa: 50 g", "Psyllium: 8 g", "Sal: 5 g", "Masa madre activa: 120 g", "Agua: 280 ml", "Aceite: 25 ml", "Miel o sirope (opcional): 10 g"], 
    instructions: ["Mezclá harinas, fécula, psyllium y sal.", "Agregá masa madre, agua, aceite y miel.", "Mezclá hasta lograr textura cremosa.", "Verté en molde, alisá y tapá.", "Fermentá 8–10 h o hasta que suba al borde.", "Horneá 40 min a 190 °C.", "Consejos: Pan suave y tierno, ideal para el día a día. Si querés sabor más neutro, omití la miel. Conservá en heladera envuelto en paño seco."], 
    prepTime: "8-10h fermentación", 
    cookTime: "40 min", 
    servings: "12 rebanadas" 
  },
  { 
    id: "78", 
    title: "Pan de teff de masa madre (aroma profundo)",
    categoryId: "masa-madre",
    ingredients: ["Harina de teff: 200 g", "Harina de arroz integral: 120 g", "Fécula de papa: 80 g", "Psyllium: 8 g", "Sal: 5 g", "Masa madre activa: 120 g", "Agua: 300 ml", "Aceite: 20 ml"], 
    instructions: ["En un bol grande, mezclá las harinas, fécula, psyllium y sal.", "Incorporá la masa madre, el agua y el aceite. Mezclá hasta obtener masa uniforme.", "Verté en molde, alisá y tapá.", "Dejá fermentar 10–12 h a temperatura ambiente (menos si hace calor).", "Horneá 45 min a 190 °C.", "Consejos: Sabor intenso, ligeramente a nuez, típico del teff. Ideal para panes tostados o sandwiches gourmet. Conserva su humedad durante varios días."], 
    prepTime: "10-12h fermentación", 
    cookTime: "45 min", 
    servings: "12 rebanadas" 
  },
  { 
    id: "79", 
    title: "Baguette de masa madre sin gluten",
    categoryId: "masa-madre",
    ingredients: ["Harina de arroz: 180 g", "Harina de maíz fina: 100 g", "Fécula de tapioca: 60 g", "Psyllium: 8 g", "Sal: 5 g", "Masa madre activa: 100 g", "Agua: 280 ml", "Aceite: 20 ml"], 
    instructions: ["Mezclá harinas, fécula, psyllium y sal.", "Agregá masa madre, agua y aceite. Mezclá bien hasta masa espesa.", "Formá dos bastones sobre bandeja enharinada.", "Tapá y fermentá 10–12 h.", "Horneá 35–40 min a 200 °C con vapor (colocá una bandejita con agua caliente en la base).", "Consejos: Corteza crujiente y aroma intenso. Si querés mayor color, pincelá con aceite antes de hornear. Enfriá completamente antes de cortar para conservar estructura."], 
    prepTime: "10-12h fermentación", 
    cookTime: "35-40 min", 
    servings: "2 baguettes medianas" 
  },
  { 
    id: "80", 
    title: "Pan de batata fermentado (miga húmeda)",
    categoryId: "masa-madre",
    ingredients: ["Puré de batata cocida: 150 g", "Harina de arroz: 150 g", "Harina de sorgo: 100 g", "Fécula de tapioca: 50 g", "Psyllium: 8 g", "Sal: 5 g", "Masa madre activa: 100 g", "Agua: 240 ml", "Aceite: 25 ml"], 
    instructions: ["Mezclá las harinas, fécula, psyllium y sal.", "Agregá el puré de batata, la masa madre, el agua y el aceite.", "Mezclá hasta obtener masa húmeda y densa.", "Verté en molde, tapá y fermentá 8–10 h.", "Horneá 40–45 min a 190 °C.", "Consejos: Pan de miga húmeda, dulce y aromática. Ideal para desayunos o meriendas. La batata aporta color y dulzor natural."], 
    prepTime: "8-10h fermentación", 
    cookTime: "40-45 min", 
    servings: "10-12 rebanadas" 
  },
  { 
    id: "81", 
    title: "Pan campesino con corteza oscura (masa madre)",
    categoryId: "masa-madre",
    ingredients: ["Harina de arroz integral: 180 g", "Harina de trigo sarraceno: 100 g", "Fécula de tapioca: 80 g", "Psyllium: 8 g", "Cacao sin azúcar (para color): 5 g", "Sal: 5 g", "Masa madre activa: 120 g", "Agua: 300 ml", "Aceite: 20 ml"], 
    instructions: ["Mezclá harinas, fécula, psyllium, cacao y sal.", "Agregá la masa madre, el agua y el aceite. Mezclá bien.", "Verté en molde o formá pan redondo.", "Fermentá 10–12 h tapado.", "Horneá 45–50 min a 190 °C.", "Consejos: Corteza oscura, miga compacta y sabor profundo. Ideal para tablas de quesos o sopas. Podés espolvorear harina encima antes del horneado para aspecto rústico."], 
    prepTime: "10-12h fermentación", 
    cookTime: "45-50 min", 
    servings: "12 rebanadas" 
  },

  // Categoría 6: Panes Dulces (12)
  { 
    id: "82",
    title: "Pan dulce de naranja y almendra (glaseado ligero)",
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
    id: "83", 
    title: "Pan tipo \"milk bread\" sin gluten (suave)",
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
    id: "84", 
    title: "Pan de chocolate marmolado (molde)",
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
    id: "85", 
    title: "Pan de banana (banana bread) sin gluten",
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
    id: "86", 
    title: "Pan de coco dulce (rebanado)",
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
    id: "87", 
    title: "Pan de pasas y canela (sin trigo)",
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
    id: "88", 
    title: "Pan de manzana y nuez (especiado)",
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
    id: "89", 
    title: "Pan brioche rápido sin gluten (en molde)",
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
    id: "90", 
    title: "Pan dulce de miel (textura tierna)",
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
    id: "91", 
    title: "Pan de zanahoria dulce (fácil)",
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
    id: "92", 
    title: "Pan \"colchón de vainilla\" (esponjoso, corteza suave)",
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
    id: "93", 
    title: "Pan dulce de anís (tradicional adaptado)",
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
    title: "Rosca dulce sin gluten (trenzada)", 
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
    title: "Panettone sin gluten (frutas y cítricos)", 
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
    title: "Pan de Pascua sin gluten (especias y frutos secos)", 
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
    title: "Stollen sin gluten (relleno de mazapán)", 
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
    title: "Babka de chocolate sin gluten (trenza)", 
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
    title: "Challah sin gluten (trenzado enriquecido)", 
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
    title: "Roscones individuales sin gluten", 
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
    title: "Pan dulce de cardamomo (estilo nórdico)", 
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
    title: "Colomba pascual sin gluten", 
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
    id: "94", 
    title: "Pan especiado de jengibre (tipo loaf festivo)", 
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
    id: "95", 
    title: "Pan proteico de clara y almendra (keto)", 
    categoryId: "high-protein",
    description: "Pan keto suave y liviano, alto en proteína vegetal.",
    ingredients: [
      "Harina de almendra fina: 150 g",
      "Polvo de hornear: 8 g",
      "Sal: 3 g",
      "Claras de huevo: 5 unidades (≈ 160 g)",
      "Aceite de oliva: 20 ml",
      "Agua: 40 ml",
      "Semillas (opcional): 20 g"
    ], 
    instructions: [
      "Precalienta el horno a 180 °C. Engrasa un molde pequeño.",
      "Bate ligeramente las claras hasta que estén espumosas (no a nieve).",
      "Añade el aceite y el agua, mezclando suavemente.",
      "Incorpora la harina de almendra, el polvo de hornear y la sal. Mezcla hasta obtener una masa cremosa y espesa, sin grumos.",
      "Vierte en el molde y hornea 25–30 minutos, hasta que la superficie esté firme y dorada.",
      "Enfría 10 minutos antes de cortar."
    ], 
    expectedTexture: "Miga suave y aireada, tipo budín liviano. No queda tan esponjoso como un pan clásico, pero sí muy húmedo y tostable. La superficie debe sentirse elástica al presionar. Al cortar, la miga no se desmorona.",
    prepTime: "10 min", 
    cookTime: "25-30 min", 
    servings: "8 rebanadas",
    chefTip: "Añade 1 cdta de jugo de limón para potenciar el efecto del polvo de hornear. Si deseas más sabor, agrega hierbas secas o queso rallado."
  },
  { 
    id: "96", 
    title: "Pan de garbanzo y sésamo (alto en proteína)", 
    categoryId: "high-protein",
    description: "Pan denso y nutritivo, rico en proteínas vegetales.",
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
      "Mezcla la harina, el polvo de hornear, la sal y las especias.",
      "Añade el agua y el aceite poco a poco hasta obtener una masa cremosa y homogénea, ligeramente espesa.",
      "Agrega las semillas y mezcla.",
      "Vierte en un molde engrasado.",
      "Hornea 30–35 minutos a 190 °C.",
      "Enfría antes de cortar."
    ], 
    expectedTexture: "Pan de miga densa y nutritiva, tipo torta salada suave. Los bordes se separan ligeramente del molde. Si al pinchar el centro sale húmedo, hornea 5 minutos más.",
    prepTime: "10 min", 
    cookTime: "30-35 min", 
    servings: "8-10 rebanadas",
    chefTip: "Tostar las semillas antes de añadirlas realza mucho el aroma. Si la mezcla te queda demasiado líquida, añade 1 cda extra de harina de garbanzo."
  },
  { 
    id: "97", 
    title: "Pan de yogurt vegetal + chía (low-carb)", 
    categoryId: "high-protein",
    description: "Pan húmedo y elástico con proteína vegetal.",
    ingredients: [
      "Harina de almendra: 120 g",
      "Psyllium: 6 g",
      "Polvo de hornear: 8 g",
      "Sal: 3 g",
      "Yogurt vegetal alto en proteína: 150 g",
      "Agua: 80 ml",
      "Semillas de chía: 15 g",
      "Aceite: 20 ml"
    ], 
    instructions: [
      "Mezcla los ingredientes secos: almendra, psyllium, polvo de hornear, sal y chía.",
      "Añade el yogurt, el agua y el aceite. Mezcla bien.",
      "Deja reposar 5 minutos para que la chía espese.",
      "Vierte la masa en molde.",
      "Hornea 30 minutos a 180 °C.",
      "Enfría sobre rejilla."
    ], 
    expectedTexture: "Muy húmedo y elástico, con miga estable. La superficie se eleva ligeramente. El pan se siente flexible al presionar con el dedo.",
    prepTime: "15 min", 
    cookTime: "30 min", 
    servings: "8 rebanadas",
    chefTip: "Usa yogurt de coco o soya para mayor cremosidad. Si lo quieres más firme, reduce el agua a 60 ml."
  },
  { 
    id: "98", 
    title: "Pan de linaza dorada (ultra fibra)", 
    categoryId: "high-protein",
    description: "Pan denso, rico en fibra y omega 3.",
    ingredients: [
      "Linaza dorada molida: 120 g",
      "Polvo de hornear: 6 g",
      "Sal: 3 g",
      "Huevos: 4 unidades",
      "Agua: 80 ml",
      "Aceite: 20 ml"
    ], 
    instructions: [
      "Precalienta el horno a 180 °C.",
      "Mezcla todos los ingredientes hasta obtener una masa espesa.",
      "Vierte en un molde pequeño.",
      "Hornea 25–30 minutos.",
      "Enfría antes de cortar."
    ], 
    expectedTexture: "Pan muy saciante, miga firme y ligeramente húmeda. La superficie se agrieta ligeramente (normal en pan keto). Al cortar, la miga no debe desarmarse.",
    prepTime: "10 min", 
    cookTime: "25-30 min", 
    servings: "8 rebanadas",
    chefTip: "Si la mezcla queda muy densa, añade 1–2 cdas extra de agua. Puedes preparar porciones individuales en microondas (2–3 min cada una)."
  },
  { 
    id: "99", 
    title: "🥜 Pan de semillas al completo (sin harinas)", 
    categoryId: "high-protein",
    description: "Pan tipo multisemillas europeo, crujiente y nutritivo.",
    ingredients: [
      "Semillas de girasol: 80 g",
      "Semillas de calabaza: 50 g",
      "Chía: 20 g",
      "Linaza molida: 50 g",
      "Avena GF en hojuelas (opcional): 30 g",
      "Agua: 250 ml",
      "Aceite: 20 ml",
      "Sal: 4 g"
    ], 
    instructions: [
      "Mezcla todas las semillas con la sal.",
      "Añade el agua y el aceite; mezcla bien.",
      "Deja reposar 30 minutos hasta que espese y se forme una masa compacta.",
      "Vierte en un molde pequeño y presiona para nivelar.",
      "Hornea 40–45 minutos a 190 °C."
    ], 
    expectedTexture: "Pan tipo 'multisemillas europeo', crujiente y muy firme. Al presionar la superficie debe sentirse compacta. Se despega fácilmente del borde del molde.",
    prepTime: "40 min", 
    cookTime: "40-45 min", 
    servings: "12 rebanadas",
    chefTip: "Usa molde pequeño para mayor altura. Si no usas avena, aumenta 10 g de linaza molida."
  },
  { 
    id: "100", 
    title: "Pan de coco y proteína", 
    categoryId: "high-protein",
    description: "Pan húmedo con proteína, ideal para deportistas.",
    ingredients: [
      "Harina de coco: 40 g",
      "Proteína en polvo (vegetal o whey): 30 g",
      "Polvo de hornear: 6 g",
      "Sal: 2 g",
      "Huevos: 4 unidades",
      "Agua: 100 ml",
      "Aceite: 20 ml"
    ], 
    instructions: [
      "Mezcla harina de coco, proteína, polvo de hornear y sal.",
      "En otro bol, bate huevos, agua y aceite.",
      "Une ambas mezclas hasta lograr una masa espesa pero homogénea.",
      "Si queda muy densa, añade 20–30 ml extra de agua.",
      "Vierte en molde y hornea 25–30 min a 180 °C."
    ], 
    expectedTexture: "Miga húmeda, suave y aromática. Puede quedar un poco más seco si la proteína es whey. El centro debe sentirse firme pero húmedo. Al cortar, la miga se mantiene compacta.",
    prepTime: "10 min", 
    cookTime: "25-30 min", 
    servings: "8 rebanadas",
    chefTip: "En formato muffin queda espectacular. Ideal para desayunos low-carb."
  },
  { 
    id: "101", 
    title: "Pan nube horneado (batch para sándwich)", 
    categoryId: "high-protein",
    description: "Pan ligero tipo cloud bread, sin harinas.",
    ingredients: [
      "Huevos: 3 unidades (separar claras y yemas)",
      "Yogurt vegetal o queso crema: 60 g",
      "Polvo de hornear: 3 g",
      "Sal: pizca"
    ], 
    instructions: [
      "Bate claras a nieve firme.",
      "Mezcla queso crema con polvo de hornear.",
      "Une con movimientos envolventes.",
      "Hornea 15–18 min."
    ], 
    expectedTexture: "Ligeros, suaves y muy flexibles. Al levantarlos, se despegan fácilmente del papel.",
    prepTime: "10 min", 
    cookTime: "15-18 min", 
    servings: "6 discos",
    chefTip: "Añade ½ cdta de vinagre al batido para mayor estabilidad."
  },
  { 
    id: "102", 
    title: "Pan de calabacín rallado (low-carb y húmedo)", 
    categoryId: "high-protein",
    description: "Pan vegetal bajo en carbohidratos, muy húmedo.",
    ingredients: [
      "Calabacín rallado y escurrido: 150 g",
      "Harina de almendra: 120 g",
      "Psyllium: 6 g",
      "Polvo de hornear: 8 g",
      "Sal: 3 g",
      "Huevos: 3 unidades",
      "Aceite: 30 ml",
      "Semillas (opcional): 20 g"
    ], 
    instructions: [
      "Ralla el calabacín y exprímelo MUY bien.",
      "Mezcla huevos, aceite y calabacín.",
      "Añade la almendra, el psyllium, el polvo de hornear y la sal.",
      "Mezcla hasta obtener una masa espesa y húmeda.",
      "Si queda demasiado húmedo, añade 1–2 cdas de almendra extra.",
      "Vierte en molde y hornea 35–40 min a 180 °C."
    ], 
    expectedTexture: "Pan húmedo con miga suave y esponjosa. El calabacín aporta mucha humedad natural.",
    prepTime: "15 min", 
    cookTime: "35-40 min", 
    servings: "10 rebanadas",
    chefTip: "Escurre muy bien el calabacín para evitar exceso de agua. Agrega queso rallado para más sabor."
  },

  // Nuevas recetas Low Carb (103-117)
  { 
    id: "103", 
    title: "🍞 Pan keto básico de almendra (molde clásico)", 
    categoryId: "high-protein",
    description: "Pan keto básico con miga suave y compacta.",
    ingredients: [
      "Harina de almendra: 150 g",
      "Huevos: 4 unidades",
      "Polvo de hornear: 8 g",
      "Psyllium: 6 g",
      "Aceite: 20 ml",
      "Agua tibia: 60 ml",
      "Sal: 3 g"
    ], 
    instructions: [
      "Precalienta el horno a 180 °C.",
      "Mezcla almendra, psyllium, polvo de hornear y sal.",
      "Añade huevo, aceite y agua.",
      "Mezcla hasta obtener masa densa pero húmeda.",
      "Vierte en molde y hornea 35–40 minutos."
    ], 
    expectedTexture: "Miga suave y compacta, fácil de cortar. El pan se siente firme al centro al presionar. Se forma grieta superficial (típico del pan keto).",
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10 rebanadas",
    chefTip: "Ideal para tostar. Acompaña bien con hummus, quesos o mantequilla vegetal. Para más volumen, agrega 1 clara extra batida a nieve."
  },
  { 
    id: "104", 
    title: "🍞 Pan keto de microondas (1 minuto)", 
    categoryId: "high-protein",
    description: "Pan keto ultra rápido en taza.",
    ingredients: [
      "Harina de almendra: 25 g",
      "Huevo: 1 unidad",
      "Aceite: 1 cda",
      "Polvo de hornear: ¼ cdta",
      "Sal: pizca"
    ], 
    instructions: [
      "Mezcla los ingredientes en una taza o molde pequeño.",
      "Cocina 1 min 30 seg en microondas (800–900 W).",
      "Si el centro queda húmedo, agrega 10–15 seg más."
    ], 
    expectedTexture: "Miga suave, ideal para tostar.",
    prepTime: "2 min", 
    cookTime: "1-2 min", 
    servings: "1 pan individual",
    chefTip: "Añade ajo o queso para una versión salada."
  },
  { 
    id: "105", 
    title: "🧀 Pan keto tipo 'pan lactal' (suave y elástico)", 
    categoryId: "high-protein",
    description: "Pan keto con miga elástica, estilo pan de molde.",
    ingredients: [
      "Harina de almendra: 180 g",
      "Psyllium: 10 g",
      "Huevos: 4 unidades",
      "Agua tibia: 160 ml",
      "Aceite: 30 ml",
      "Polvo de hornear: 8 g",
      "Sal: 3 g"
    ], 
    instructions: [
      "Mezcla secos.",
      "Bate huevos y aceite, y añade el agua tibia.",
      "Une todo y mezcla hasta lograr masa pesada y húmeda.",
      "Vierte en molde alto.",
      "Hornea 40–45 min."
    ], 
    expectedTexture: "Miga sorprendentemente elástica, poco común en keto. Se eleva más que un pan keto común.",
    prepTime: "10 min", 
    cookTime: "40-45 min", 
    servings: "12 rebanadas",
    chefTip: "Dejar enfriar completamente antes de cortar."
  },
  { 
    id: "106", 
    title: "Pan keto de semillas tostadas", 
    categoryId: "high-protein",
    description: "Pan firme estilo multisemillas keto.",
    ingredients: [
      "Linaza molida: 60 g",
      "Semillas de girasol: 40 g",
      "Semillas de sésamo: 30 g",
      "Almendra molida: 80 g",
      "Polvo de hornear: 6 g",
      "Huevos: 3 unidades",
      "Aceite: 20 ml",
      "Sal: 3 g"
    ], 
    instructions: [
      "Tosta ligeramente las semillas.",
      "Mezcla con la almendra y la linaza.",
      "Añade huevos y aceite.",
      "Vierte en molde pequeño.",
      "Hornea 30–35 min."
    ], 
    expectedTexture: "Pan firme, estilo 'multisemillas keto'.",
    prepTime: "10 min", 
    cookTime: "30-35 min", 
    servings: "12 pequeñas rebanadas",
    chefTip: "Añade hierbas para aroma tipo focaccia."
  },
  { 
    id: "107", 
    title: "Pan keto esponjoso con claras (tipo nube mejorado)", 
    categoryId: "high-protein",
    description: "Pan extremadamente ligero sin harinas.",
    ingredients: [
      "Claras: 4 unidades",
      "Queso crema o yogurt vegetal: 60 g",
      "Polvo de hornear: 3 g",
      "Sal: pizca"
    ], 
    instructions: [
      "Bate claras a nieve firme.",
      "Mezcla queso crema con polvo de hornear.",
      "Une con movimientos envolventes.",
      "Hornea 15–18 min."
    ], 
    expectedTexture: "Extremadamente ligero.",
    prepTime: "10 min", 
    cookTime: "15-18 min", 
    servings: "6 unidades",
    chefTip: "Ideal para 'hamburguesas keto'."
  },
  { 
    id: "108", 
    title: "Pan keto tipo tortilla flexible", 
    categoryId: "high-protein",
    description: "Tortillas flexibles low carb para wraps.",
    ingredients: [
      "Harina de almendra: 60 g",
      "Psyllium: 4 g",
      "Agua caliente: 80 ml",
      "Aceite: 1 cdta",
      "Sal: pizca"
    ], 
    instructions: [
      "Mezcla la almendra con el psyllium y la sal.",
      "Añade agua caliente y aceite.",
      "Amasa hasta obtener masa suave.",
      "Estira y dora en sartén 1 min por lado."
    ], 
    expectedTexture: "Muy flexible, ideal para wraps keto.",
    prepTime: "10 min", 
    cookTime: "10 min", 
    servings: "4 tortillas",
    chefTip: "Guarda entre papeles encerados para que no se peguen."
  },
  { 
    id: "109", 
    title: "Pan keto de nuez (aromático y firme)", 
    categoryId: "high-protein",
    description: "Pan con nueces, miga húmeda y aromática.",
    ingredients: [
      "Harina de almendra: 120 g",
      "Nueces picadas: 40 g",
      "Psyllium: 6 g",
      "Huevos: 3 unidades",
      "Aceite: 20 ml",
      "Polvo de hornear: 6 g",
      "Agua tibia: 60 ml",
      "Sal: 3 g"
    ], 
    instructions: [
      "Mezcla secos: almendra, psyllium, polvo de hornear y sal.",
      "Agrega huevos, aceite y agua.",
      "Incorpora las nueces.",
      "Hornea 35–40 minutos."
    ], 
    expectedTexture: "Miga húmeda, elástica y muy tostable.",
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10 rebanadas",
    chefTip: "Las nueces pueden reemplazarse por avellanas o almendras enteras."
  },
  { 
    id: "110", 
    title: "Pan keto con hierbas provenzales", 
    categoryId: "high-protein",
    description: "Pan aromático con hierbas mediterráneas.",
    ingredients: [
      "Harina de almendra: 140 g",
      "Psyllium: 6 g",
      "Huevos: 3 unidades",
      "Aceite: 20 ml",
      "Agua tibia: 70 ml",
      "Polvo de hornear: 8 g",
      "Mezcla de hierbas provenzales: 1 cdta",
      "Sal: 3 g"
    ], 
    instructions: [
      "Mezcla secos.",
      "Agrega huevos, aceite y agua.",
      "Vierte en molde.",
      "Hornea 30–35 min a 180 °C."
    ], 
    expectedTexture: "Muy aromático, miga suave.",
    prepTime: "10 min", 
    cookTime: "30-35 min", 
    servings: "8 rebanadas",
    chefTip: "Añade ajo para versión mediterránea."
  },
  { 
    id: "111", 
    title: "Pan keto de limón y semillas (aroma fresco)", 
    categoryId: "high-protein",
    description: "Pan con toque cítrico y semillas crujientes.",
    ingredients: [
      "Harina de almendra: 150 g",
      "Psyllium: 6 g",
      "Huevos: 3 unidades",
      "Aceite: 20 ml",
      "Jugo de limón: 10 ml",
      "Ralladura de limón: ½ cdta",
      "Polvo de hornear: 8 g",
      "Semillas de amapola o sésamo: 15 g",
      "Agua tibia: 60 ml",
      "Sal: pizca"
    ], 
    instructions: [
      "Mezcla todos los secos.",
      "Añade huevos, aceite, jugo de limón y agua.",
      "Incorpora ralladura y semillas.",
      "Hornea 35–40 min."
    ], 
    expectedTexture: "Miga aromática y húmeda.",
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10 rebanadas",
    chefTip: "Ideal para tostadas con queso crema."
  },
  { 
    id: "112", 
    title: "🥥 Pan keto de coco suave", 
    categoryId: "high-protein",
    description: "Pan con aroma tropical suave.",
    ingredients: [
      "Harina de coco: 30 g",
      "Harina de almendra: 80 g",
      "Huevos: 3 unidades",
      "Aceite de coco: 20 ml",
      "Agua tibia: 80 ml",
      "Polvo de hornear: 6 g",
      "Sal: 2 g"
    ], 
    instructions: [
      "Mezcla secos.",
      "Añade huevos, aceite y agua.",
      "Vierte en molde.",
      "Hornea 25–30 min."
    ], 
    expectedTexture: "Suave, con aroma tropical leve.",
    prepTime: "10 min", 
    cookTime: "25-30 min", 
    servings: "6-8 rebanadas",
    chefTip: "Añade vainilla para estilo dulce."
  },
  { 
    id: "113", 
    title: "🔥 Pan keto tipo focaccina (sartén u horno)", 
    categoryId: "high-protein",
    description: "Pan plano tipo focaccia keto, cocción flexible.",
    ingredients: [
      "Harina de almendra: 100 g",
      "Linaza molida: 20 g",
      "Psyllium: 4 g",
      "Agua caliente: 90 ml",
      "Aceite de oliva: 20 ml",
      "Sal: 3 g",
      "Romero: 1 cdta"
    ], 
    instructions: [
      "Mezcla secos.",
      "Agrega agua caliente y aceite.",
      "Amasa suave y extiende.",
      "Cocina en sartén tapado 5 min por lado o hornea 15–20 min a 190 °C."
    ], 
    expectedTexture: "Pan plano firme, tipo focaccia keto.",
    prepTime: "10 min", 
    cookTime: "15-20 min", 
    servings: "1 pan plano grande",
    chefTip: "Añade aceitunas picadas para más sabor."
  },
  { 
    id: "114", 
    title: "🧈 Pan keto 'mantecoso' (suave y dorado)", 
    categoryId: "high-protein",
    description: "Pan enriquecido con mantequilla, muy suave.",
    ingredients: [
      "Harina de almendra: 140 g",
      "Huevos: 3 unidades",
      "Mantequilla derretida: 40 g",
      "Polvo de hornear: 8 g",
      "Psyllium: 6 g",
      "Sal: 3 g",
      "Agua tibia: 50 ml"
    ], 
    instructions: [
      "Mezcla secos.",
      "Añade huevos y mantequilla.",
      "Ajusta con agua para masa espesa.",
      "Hornea 30–35 min."
    ], 
    expectedTexture: "Miga suave y color amarillo manteca.",
    prepTime: "10 min", 
    cookTime: "30-35 min", 
    servings: "8 rebanadas",
    chefTip: "Perfecto para desayunos low-carb."
  },
  { 
    id: "115", 
    title: "🫘 Pan keto húmedo de ricotta", 
    categoryId: "high-protein",
    description: "Pan ultra húmedo con ricotta, muy suave.",
    ingredients: [
      "Ricotta o requesón firme: 120 g",
      "Harina de almendra: 110 g",
      "Huevos: 3 unidades",
      "Polvo de hornear: 8 g",
      "Aceite: 15 ml",
      "Psyllium: 4-5 g",
      "Sal: 2-3 g"
    ], 
    instructions: [
      "Mezcla ricotta con huevos y aceite.",
      "Añade almendra, psyllium, polvo de hornear y sal.",
      "Mezcla hasta masa espesa.",
      "Hornea 30–35 minutos."
    ], 
    expectedTexture: "Muy húmedo, suave, ideal para tostar.",
    prepTime: "10 min", 
    cookTime: "30-35 min", 
    servings: "8 rebanadas",
    chefTip: "Combina perfecto con tomate y albahaca."
  },

  // Categoría 9: Regionales LATAM (12)
  { 
    id: "118", 
    title: "Pão de queijo (pan de queso brasileño) sin gluten", 
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
    id: "119", 
    title: "Chipa paraguaya (quesuda, almidón de yuca)", 
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
    id: "120", 
    title: "Cachitos de yuca (rellenos salados)", 
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
    id: "121", 
    title: "Pan andino de papa (sin gluten)", 
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
    id: "122", 
    title: "Pan de yuca horneado (Ecuador/Colombia)", 
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
    id: "123", 
    title: "Pan de bono sin gluten (versión casera)", 
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
    id: "124", 
    title: "Pan campesino costeño (adaptado GF)", 
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
    id: "125", 
    title: "Pan telera sin gluten (adaptación mexicana)", 
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
    id: "126", 
    title: "Pan francés casero sin gluten (básico)", 
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
    id: "127", 
    title: "Pan gallego sin gluten (miga húmeda)", 
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
    id: "128", 
    title: "Pan tipo ciabatta latino (con aceite y sal)", 
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
    id: "129", 
    title: "Pan bollo dulce criollo (sin gluten, aromático)", 
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
    id: "130", 
    title: "Pizza Napolitana Sin Gluten (masa fina y borde dorado)",
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
    id: "131", 
    title: "Pizza de Sartén Exprés (sin horno, lista en minutos)",
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
    id: "132", 
    title: "Pizza de Coliflor Low-Carb (base vegetal y ligera)",
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
    id: "133", 
    title: "Pizza de Harina de Yuca y Queso (estilo brasileño)",
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
    id: "134", 
    title: "Pizza de Avena y Semillas (rica en fibra y proteínas)",
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
    id: "135", 
    title: "Pizza Integral Sin Gluten (masa rústica y aireada)",
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
    id: "136", 
    title: "Pizza de Almendra y Linaza (versión keto y sin lácteos)",
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
    id: "137", 
    title: "Pizza Mediterránea con Aceitunas y Hierbas",
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
    id: "138", 
    title: "Mini Pizzas Individuales (listas para congelar)",
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
    id: "139", 
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
    id: "140", 
    title: "Empanadas Clásicas Sin Gluten (masa flexible y dorada)",
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
    id: "141", 
    title: "Empanadas de Yuca y Pollo Especiado",
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
    id: "142", 
    title: "Empanaditas de Queso y Cebolla (versión rápida al horno o air fryer)",
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
    id: "143", 
    title: "Empanadas Criollas Veganas (masa con garbanzo y aceite de oliva)",
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
    id: "144", 
    title: "Empanadas de Papa y Arroz (económicas y suaves)",
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
    id: "145", 
    title: "Empanadas Dulces de Manzana y Canela",
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
    id: "146", 
    title: "Tarta de Espinaca y Queso Vegetal",
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
    id: "147", 
    title: "Tarta Rústica de Verduras Asadas",
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
    id: "148", 
    title: "Mini Quiches Sin Gluten",
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
    id: "149", 
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

  // Categoría: Panes Air Fryer (20)
  {
    id: "150",
    title: "🥖 Pan básico de arroz en air fryer",
    categoryId: "panes-air-fryer",
    ingredients: [
      "Harina de arroz: 200 g",
      "Fécula de maíz: 50 g",
      "Psyllium husk: 8 g",
      "Polvo de hornear: 6 g",
      "Sal: 4 g",
      "Agua tibia: 240 ml",
      "Aceite de oliva: 20 ml",
      "Vinagre de manzana: 5 ml"
    ],
    instructions: [
      "En un bol, mezcla todos los ingredientes secos.",
      "Agrega el agua, el aceite y el vinagre. Mezcla con espátula hasta obtener una masa suave.",
      "Coloca la masa en un molde pequeño apto para air fryer (forrado con papel).",
      "Cocina en la air fryer a 170 °C durante 25–30 min. Si se dora demasiado rápido, cubre con papel aluminio los últimos 10 minutos.",
      "Deja enfriar 10 minutos antes de desmoldar."
    ],
    expectedTexture: "Corteza ligeramente crujiente, miga tierna y esponjosa.",
    prepTime: "10 min",
    cookTime: "25-30 min",
    servings: "6-8 rebanadas",
    chefTip: "Si tu air fryer es pequeña, divide la masa en dos moldes y cocina por separado."
  },
  {
    id: "151",
    title: "🥖 Pan de avena certificada GF express",
    categoryId: "panes-air-fryer",
    ingredients: [
      "Harina de avena certificada GF: 200 g",
      "Fécula de tapioca: 40 g",
      "Psyllium husk: 6 g",
      "Polvo de hornear: 6 g",
      "Sal: 3 g",
      "Leche vegetal: 200 ml",
      "Huevo: 1 u",
      "Aceite: 15 ml",
      "Miel: 10 ml"
    ],
    instructions: [
      "Mezcla los ingredientes secos.",
      "Bate la leche, el huevo, el aceite y la miel. Incorpora a los secos.",
      "Coloca en un molde apto para air fryer y alisa la superficie.",
      "Cocina a 160 °C por 20–25 min.",
      "Deja reposar 10 min antes de cortar."
    ],
    expectedTexture: "Miga suave, levemente dulce, perfecta para desayunos.",
    prepTime: "8 min",
    cookTime: "20-25 min",
    servings: "6-8 rebanadas",
    chefTip: "Agrega semillas de chía o lino arriba antes de cocinar para extra textura."
  },
  {
    id: "152",
    title: "🥖 Pan de almendra low-carb en air fryer",
    categoryId: "panes-air-fryer",
    ingredients: [
      "Harina de almendra: 180 g",
      "Harina de coco: 30 g",
      "Psyllium husk: 8 g",
      "Polvo de hornear: 6 g",
      "Sal: 3 g",
      "Huevos: 3 u",
      "Agua: 100 ml",
      "Aceite de oliva: 20 ml"
    ],
    instructions: [
      "Mezcla los secos en un bol.",
      "Bate los huevos con el agua y el aceite. Integra con los secos.",
      "Vierte en un molde pequeño forrado.",
      "Cocina a 160 °C durante 20–25 min. Si la superficie se dora mucho, cubre con papel.",
      "Enfría 15 min antes de cortar."
    ],
    expectedTexture: "Miga densa, húmeda, ideal para tostadas.",
    prepTime: "10 min",
    cookTime: "20-25 min",
    servings: "6-8 rebanadas",
    chefTip: "Perfecto para quienes buscan reducir carbohidratos sin renunciar al pan."
  },
  {
    id: "153",
    title: "🥖 Pan de yogur y semillas en air fryer",
    categoryId: "panes-air-fryer",
    ingredients: [
      "Harina de arroz: 150 g",
      "Harina de avena GF: 70 g",
      "Fécula de maíz: 40 g",
      "Psyllium husk: 6 g",
      "Polvo de hornear: 6 g",
      "Sal: 4 g",
      "Yogur vegetal natural: 200 g",
      "Agua: 80 ml",
      "Aceite: 20 ml",
      "Mix de semillas (chía, lino, girasol): 30 g"
    ],
    instructions: [
      "Mezcla los ingredientes secos.",
      "Agrega el yogur, el agua y el aceite. Incorpora las semillas (reserva un poco para decorar).",
      "Coloca en molde apto air fryer.",
      "Cocina a 170 °C por 25 min.",
      "Enfría antes de cortar."
    ],
    expectedTexture: "Miga esponjosa con toques crujientes de semillas.",
    prepTime: "10 min",
    cookTime: "25 min",
    servings: "8 rebanadas",
    chefTip: "El yogur aporta humedad y elasticidad a la miga."
  },
  {
    id: "154",
    title: "🥖 Pan de papa y romero en air fryer",
    categoryId: "panes-air-fryer",
    ingredients: [
      "Puré de papa cocida: 150 g",
      "Harina de arroz: 120 g",
      "Fécula de maíz: 40 g",
      "Polvo de hornear: 6 g",
      "Sal: 4 g",
      "Romero seco: 2 g",
      "Agua: 80 ml",
      "Aceite de oliva: 25 ml"
    ],
    instructions: [
      "Mezcla el puré con el agua y el aceite hasta integrar.",
      "Añade los ingredientes secos y el romero. Mezcla bien.",
      "Coloca en un molde pequeño forrado.",
      "Cocina a 170 °C por 20–25 min.",
      "Deja reposar antes de desmoldar."
    ],
    expectedTexture: "Miga tierna, aromática y reconfortante.",
    prepTime: "10 min",
    cookTime: "20-25 min",
    servings: "6-8 rebanadas",
    chefTip: "Puedes añadir aceitunas picadas o queso rallado para una versión más gourmet."
  },
  {
    id: "155",
    title: "🥖 Pan de calabaza especiado en air fryer",
    categoryId: "panes-air-fryer",
    ingredients: [
      "Puré de calabaza cocida: 180 g",
      "Harina de arroz: 120 g",
      "Harina de garbanzo: 50 g",
      "Polvo de hornear: 6 g",
      "Sal: 3 g",
      "Comino molido: 1 g",
      "Cúrcuma: 1 g",
      "Aceite: 20 ml",
      "Agua: 60 ml"
    ],
    instructions: [
      "Mezcla los ingredientes secos.",
      "Agrega el puré de calabaza, el aceite y el agua. Mezcla hasta integrar.",
      "Vierte en molde forrado.",
      "Cocina a 160 °C por 25 min.",
      "Enfría antes de rebanar."
    ],
    expectedTexture: "Suave, con color dorado natural y aroma especiado.",
    prepTime: "10 min",
    cookTime: "25 min",
    servings: "8 rebanadas",
    chefTip: "Ideal para acompañar sopas o ensaladas. Decora con semillas de calabaza antes de cocinar."
  },
  {
    id: "156",
    title: "🥖 Pan de cebolla y orégano en air fryer",
    categoryId: "panes-air-fryer",
    ingredients: [
      "Harina de arroz: 150 g",
      "Harina de maíz fina: 70 g",
      "Fécula de maíz: 40 g",
      "Polvo de hornear: 6 g",
      "Sal: 4 g",
      "Cebolla picada fina: 80 g",
      "Orégano seco: 2 g",
      "Agua: 180 ml",
      "Aceite de oliva: 30 ml"
    ],
    instructions: [
      "Sofríe la cebolla con 10 ml de aceite hasta transparentar. Enfría.",
      "Mezcla los ingredientes secos.",
      "Agrega el agua, el aceite restante y la cebolla.",
      "Vierte en molde o extiende en bandeja pequeña apta para air fryer.",
      "Cocina a 170 °C por 20–25 min.",
      "Enfría 10 min antes de cortar."
    ],
    expectedTexture: "Bordes dorados, centro tierno con aroma a cebolla caramelizada.",
    prepTime: "12 min",
    cookTime: "20-25 min",
    servings: "6-8 porciones",
    chefTip: "Sirve como pan de mesa o base de mini pizzas."
  },
  {
    id: "157",
    title: "🥖 Pan tipo focaccia de garbanzo en air fryer",
    categoryId: "panes-air-fryer",
    ingredients: [
      "Harina de garbanzo: 200 g",
      "Agua: 350 ml",
      "Aceite de oliva: 40 ml",
      "Sal: 5 g",
      "Polvo de hornear: 3 g",
      "Romero seco: 2 g",
      "Opcional: tomatitos cherry, aceitunas"
    ],
    instructions: [
      "Bate la harina de garbanzo con el agua, 30 ml de aceite, sal, polvo de hornear y romero hasta que no haya grumos. Reposa 10 min.",
      "Vierte la mezcla en un molde bajo forrado apto air fryer. Agrega tomatitos o aceitunas.",
      "Rocía con 10 ml de aceite por encima.",
      "Cocina a 180 °C durante 18–20 min hasta dorar los bordes.",
      "Deja entibiar 5 min antes de cortar."
    ],
    expectedTexture: "Bordes crujientes, centro jugoso y aromático.",
    prepTime: "15 min",
    cookTime: "18-20 min",
    servings: "6-8 porciones",
    chefTip: "Puedes cortar en cuadrados y servir como aperitivo o acompañamiento."
  },
  {
    id: "158",
    title: "🥖 Pan integral de arroz y avena en air fryer",
    categoryId: "panes-air-fryer",
    ingredients: [
      "Harina de arroz integral: 140 g",
      "Harina de avena GF: 100 g",
      "Fécula de maíz: 40 g",
      "Psyllium husk: 8 g",
      "Polvo de hornear: 6 g",
      "Sal: 4 g",
      "Agua tibia: 260 ml",
      "Aceite de oliva: 20 ml",
      "Vinagre de manzana: 5 ml",
      "Semillas mixtas: 25 g"
    ],
    instructions: [
      "Mezcla los secos.",
      "Agrega el agua, aceite y vinagre. Incorpora la mitad de las semillas.",
      "Vierte en molde, alisa y espolvorea el resto de semillas.",
      "Cocina a 170 °C por 25–28 min.",
      "Enfría antes de cortar."
    ],
    expectedTexture: "Miga densa, ideal para tostadas o sándwiches.",
    prepTime: "10 min",
    cookTime: "25-28 min",
    servings: "8-10 rebanadas",
    chefTip: "Congela rebanadas individuales para tener siempre listo."
  },
  {
    id: "159",
    title: "🥖 Pan de linaza en air fryer (alto en fibra)",
    categoryId: "panes-air-fryer",
    ingredients: [
      "Linaza molida: 100 g",
      "Harina de almendra: 80 g",
      "Harina de coco: 20 g",
      "Polvo de hornear: 6 g",
      "Sal: 3 g",
      "Huevos: 3 u",
      "Agua: 100 ml",
      "Aceite de oliva: 15 ml"
    ],
    instructions: [
      "Mezcla secos.",
      "Bate los huevos con el agua y el aceite.",
      "Integra todo y deja reposar 5 min (la linaza absorbe líquido).",
      "Coloca en molde pequeño forrado.",
      "Cocina a 160 °C por 20–25 min.",
      "Enfría sobre rejilla."
    ],
    expectedTexture: "Densa, saciante, perfecta para tostar.",
    prepTime: "10 min",
    cookTime: "20-25 min",
    servings: "6-8 rebanadas",
    chefTip: "Si buscas más humedad, agrega 1 cda. extra de agua."
  },
  {
    id: "160",
    title: "🥖 Pan de coco salado en air fryer",
    categoryId: "panes-air-fryer",
    ingredients: [
      "Harina de coco: 50 g",
      "Fécula de maíz: 40 g",
      "Polvo de hornear: 5 g",
      "Sal: 3 g",
      "Huevos: 3 u",
      "Leche vegetal: 120 ml",
      "Aceite de coco: 20 ml"
    ],
    instructions: [
      "Mezcla los secos.",
      "Bate huevos, leche y aceite. Integra.",
      "Vierte en molde pequeño.",
      "Cocina a 160 °C por 20 min.",
      "Enfría antes de cortar."
    ],
    expectedTexture: "Ligera, aromática, con textura suave.",
    prepTime: "8 min",
    cookTime: "20 min",
    servings: "6 rebanadas",
    chefTip: "Ideal para acompañar comidas livianas. Agrega orégano si deseas un toque más salado."
  },
  {
    id: "161",
    title: "🥖 Pan de queso en air fryer (estilo pão de queijo)",
    categoryId: "panes-air-fryer",
    ingredients: [
      "Fécula de mandioca o tapioca: 150 g",
      "Queso rallado: 100 g",
      "Huevo: 1 u",
      "Leche: 80 ml",
      "Aceite: 20 ml",
      "Polvo de hornear: 4 g",
      "Sal: 3 g"
    ],
    instructions: [
      "Mezcla la fécula, el queso, el polvo de hornear y la sal.",
      "Agrega el huevo, la leche y el aceite. Mezcla hasta formar una masa pegajosa.",
      "Con las manos húmedas, forma bollitos y colócalos en la canasta de la air fryer con papel.",
      "Cocina a 180 °C por 12–15 min hasta dorar.",
      "Sirve tibios."
    ],
    expectedTexture: "Exterior crujiente, interior elástico y quesoso.",
    prepTime: "10 min",
    cookTime: "12-15 min",
    servings: "8-10 bollitos",
    chefTip: "Puedes congelar la masa en bolitas y cocinarlos directamente desde el freezer."
  },
  {
    id: "162",
    title: "🥖 Pan de hierbas mediterráneas en air fryer",
    categoryId: "panes-air-fryer",
    ingredients: [
      "Harina de arroz: 150 g",
      "Harina de sorgo: 80 g",
      "Fécula de maíz: 40 g",
      "Polvo de hornear: 6 g",
      "Sal: 4 g",
      "Romero, orégano y tomillo secos: 2 g de cada uno",
      "Agua tibia: 220 ml",
      "Aceite de oliva: 30 ml"
    ],
    instructions: [
      "Mezcla harinas, polvo de hornear, sal y hierbas.",
      "Agrega agua y aceite. Mezcla hasta integrar.",
      "Vierte en molde forrado.",
      "Cocina a 170 °C por 25 min.",
      "Enfría 10 min antes de cortar."
    ],
    expectedTexture: "Aromática, perfecta para acompañar sopas o ensaladas.",
    prepTime: "10 min",
    cookTime: "25 min",
    servings: "8 rebanadas",
    chefTip: "Rocía aceite con romero fresco al final para más aroma."
  },
  {
    id: "163",
    title: "🥖 Pan de zanahoria y comino en air fryer",
    categoryId: "panes-air-fryer",
    ingredients: [
      "Zanahoria rallada fina: 100 g",
      "Harina de arroz: 120 g",
      "Harina de garbanzo: 50 g",
      "Polvo de hornear: 6 g",
      "Sal: 4 g",
      "Comino molido: 2 g",
      "Agua: 150 ml",
      "Aceite: 20 ml"
    ],
    instructions: [
      "Mezcla los secos.",
      "Agrega la zanahoria, el agua y el aceite.",
      "Vierte en molde forrado.",
      "Cocina a 160 °C por 25 min.",
      "Enfría antes de cortar."
    ],
    expectedTexture: "Húmeda, con dulzor natural de zanahoria y toque especiado.",
    prepTime: "10 min",
    cookTime: "25 min",
    servings: "8 rebanadas",
    chefTip: "Perfecto para untar con hummus o queso crema vegetal."
  },
  {
    id: "164",
    title: "🥖 Pan de remolacha y semillas en air fryer",
    categoryId: "panes-air-fryer",
    ingredients: [
      "Puré de remolacha cocida: 120 g",
      "Harina de arroz: 120 g",
      "Fécula de maíz: 50 g",
      "Polvo de hornear: 6 g",
      "Sal: 4 g",
      "Agua: 100 ml",
      "Aceite: 20 ml",
      "Semillas de amapola o sésamo: 15 g"
    ],
    instructions: [
      "Mezcla los secos.",
      "Agrega el puré de remolacha, agua y aceite. Mezcla bien.",
      "Incorpora la mitad de las semillas.",
      "Vierte en molde y espolvorea el resto de semillas.",
      "Cocina a 170 °C por 25 min.",
      "Enfría antes de cortar."
    ],
    expectedTexture: "Color rosa intenso, miga tierna y levemente dulce.",
    prepTime: "10 min",
    cookTime: "25 min",
    servings: "8 rebanadas",
    chefTip: "Ideal para presentaciones originales en picadas o brunch."
  },
  {
    id: "165",
    title: "🥖 Pan de lentejas rojas en air fryer",
    categoryId: "panes-air-fryer",
    ingredients: [
      "Lentejas rojas cocidas (sin sal): 200 g",
      "Harina de arroz: 100 g",
      "Fécula de maíz: 40 g",
      "Polvo de hornear: 6 g",
      "Sal: 4 g",
      "Comino: 1 g",
      "Agua: 80 ml",
      "Aceite: 20 ml"
    ],
    instructions: [
      "Procesa las lentejas cocidas hasta formar un puré.",
      "Mezcla los secos.",
      "Agrega el puré de lentejas, agua y aceite. Mezcla bien.",
      "Vierte en molde forrado.",
      "Cocina a 160 °C por 25–28 min.",
      "Enfría antes de rebanar."
    ],
    expectedTexture: "Miga densa, alta en proteínas y fibra.",
    prepTime: "12 min",
    cookTime: "25-28 min",
    servings: "8 rebanadas",
    chefTip: "Perfecto para veganos o quienes buscan pan rico en proteínas vegetales."
  },
  {
    id: "166",
    title: "🥖 Pan de espinaca y queso en air fryer",
    categoryId: "panes-air-fryer",
    ingredients: [
      "Espinaca picada cocida (escurrida): 100 g",
      "Harina de arroz: 120 g",
      "Fécula de maíz: 50 g",
      "Polvo de hornear: 6 g",
      "Sal: 3 g",
      "Queso rallado: 80 g",
      "Huevo: 1 u",
      "Agua: 100 ml",
      "Aceite: 15 ml"
    ],
    instructions: [
      "Mezcla los secos.",
      "Agrega la espinaca, el queso, el huevo, el agua y el aceite.",
      "Vierte en molde forrado.",
      "Cocina a 170 °C por 20–25 min.",
      "Enfría antes de cortar."
    ],
    expectedTexture: "Miga verde, sabrosa y con trozos de queso fundido.",
    prepTime: "10 min",
    cookTime: "20-25 min",
    servings: "8 rebanadas",
    chefTip: "Ideal para niños o para incluir más vegetales en la dieta."
  },
  {
    id: "167",
    title: "🥖 Pan de maíz dulce en air fryer",
    categoryId: "panes-air-fryer",
    ingredients: [
      "Harina de maíz fina: 150 g",
      "Harina de arroz: 80 g",
      "Polvo de hornear: 6 g",
      "Sal: 3 g",
      "Granos de maíz dulce: 100 g",
      "Huevo: 1 u",
      "Leche vegetal: 150 ml",
      "Aceite: 20 ml",
      "Azúcar o miel: 15 g"
    ],
    instructions: [
      "Mezcla los secos.",
      "Bate el huevo con la leche, el aceite y el azúcar.",
      "Integra todo y agrega los granos de maíz.",
      "Vierte en molde forrado.",
      "Cocina a 170 °C por 25 min.",
      "Enfría antes de cortar."
    ],
    expectedTexture: "Miga esponjosa con dulzor natural del maíz.",
    prepTime: "10 min",
    cookTime: "25 min",
    servings: "8 rebanadas",
    chefTip: "Sirve con mantequilla o queso crema para desayuno o merienda."
  },
  {
    id: "168",
    title: "🥖 Pan de quinoa cocida en air fryer",
    categoryId: "panes-air-fryer",
    ingredients: [
      "Quinoa cocida: 180 g",
      "Harina de arroz: 100 g",
      "Fécula de maíz: 40 g",
      "Polvo de hornear: 6 g",
      "Sal: 4 g",
      "Agua: 100 ml",
      "Aceite: 20 ml",
      "Semillas de sésamo: 15 g"
    ],
    instructions: [
      "Mezcla los secos.",
      "Agrega la quinoa cocida, el agua y el aceite. Mezcla bien.",
      "Vierte en molde forrado y espolvorea sésamo.",
      "Cocina a 170 °C por 25 min.",
      "Enfría antes de cortar."
    ],
    expectedTexture: "Miga con textura granulada y alta en proteínas.",
    prepTime: "10 min",
    cookTime: "25 min",
    servings: "8 rebanadas",
    chefTip: "Ideal para deportistas o quienes buscan pan nutritivo."
  },
  {
    id: "169",
    title: "🥖 Pan de tomate seco y albahaca en air fryer",
    categoryId: "panes-air-fryer",
    ingredients: [
      "Harina de arroz: 140 g",
      "Harina de garbanzo: 60 g",
      "Fécula de maíz: 40 g",
      "Polvo de hornear: 6 g",
      "Sal: 4 g",
      "Tomates secos picados: 50 g",
      "Albahaca seca: 2 g",
      "Agua: 200 ml",
      "Aceite de oliva: 25 ml"
    ],
    instructions: [
      "Hidrata los tomates secos en agua tibia 10 min. Escurre y pica.",
      "Mezcla los secos con la albahaca.",
      "Agrega el agua, el aceite y los tomates.",
      "Vierte en molde forrado.",
      "Cocina a 170 °C por 25 min.",
      "Enfría antes de rebanar."
    ],
    expectedTexture: "Sabor mediterráneo intenso, perfecto para bruschetta o como acompañamiento.",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: "8 rebanadas",
    chefTip: "Acompaña con aceite de oliva extra virgen y un toque de sal gruesa."
  }

];

