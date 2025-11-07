import { Category, Recipe } from "@/types/recipe";
import panesSartenImage from "@/assets/panes-sarten-plancha.jpg";
import panesExpressImage from "@/assets/panes-express-microondas.jpg";
import panesRapidosImage from "@/assets/panes-rapidos-horno.jpg";

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
    description: "1 levado, esponjosos"
  },
  {
    id: "masa-madre",
    name: "Masa Madre",
    icon: "sprout",
    description: "Fermentación natural"
  },
  {
    id: "panes-dulces",
    name: "Panes Dulces",
    icon: "cake",
    description: "Bollería rápida, sin laminado"
  },
  {
    id: "panes-festivos",
    name: "Panes Festivos",
    icon: "sparkles",
    description: "Enriquecidos con técnica"
  },
  {
    id: "high-protein",
    name: "High-Protein / Low-Carb",
    icon: "dumbbell",
    description: "Alto en proteína, bajo en carbohidratos"
  },
  {
    id: "regionales-latam",
    name: "Regionales LATAM",
    icon: "globe",
    description: "Clásicos latinoamericanos adaptados"
  }
];

export const recipes: Recipe[] = [
  // Categoría 1: Panes Rápidos (15)
  { 
    id: "1", 
    title: "Pan rápido de harina de arroz \"todo uso\"", 
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 250 g", "Almidón de tapioca: 50 g", "Psyllium en polvo: 10 g", "Polvo de hornear: 8 g", "Sal fina: 5 g", "Agua tibia: 280 ml", "Huevos: 2 u (≈100 g)", "Aceite de oliva: 30 ml", "Vinagre de manzana: 10 ml"], 
    instructions: ["Precalienta el horno a 190 °C. Engrasa y forra el molde con papel.", "En un bol, mezcla harina de arroz, tapioca, psyllium, polvo de hornear y sal.", "En otro bol, bate agua tibia, huevos, aceite y vinagre.", "Une líquidos con secos. Mezcla 1–2 min hasta ver una pasta espesa y suave (no es una masa para amasar).", "Vierte al molde, alisa con espátula humedecida.", "Hornea 35–40 min hasta que dore y al clavar un palillo salga seco.", "Desmolda y deja enfriar 20 min sobre rejilla antes de cortar.", "Consejos: Textura esperada es miga tierna y uniforme, corteza fina. Si lo ves muy denso, añade 20–30 ml extra de agua tibia."], 
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10-12 rebanadas" 
  },
  { 
    id: "2", 
    title: "Pan express de avena certificada (molde)", 
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de avena certificada sin gluten: 300 g", "Almidón de tapioca: 40 g", "Psyllium en polvo: 8 g", "Polvo de hornear: 8 g", "Sal fina: 5 g", "Leche vegetal (avena/almendra): 280 ml", "Huevo: 1 u (≈50 g)", "Aceite suave: 20 ml", "Miel o sirope: 15 g", "Vinagre de manzana: 10 ml"], 
    instructions: ["Horno a 180 °C. Molde engrasado y forrado.", "Mezcla avena, tapioca, psyllium, polvo de hornear y sal.", "Bate leche vegetal, huevo, aceite, miel y vinagre.", "Integra todo. Debe quedar una mezcla cremosa y algo espesa.", "Vierte y alisa. Golpea suavemente el molde para eliminar burbujas.", "Hornea 35 min aprox. Si dora muy rápido, cúbrelo con papel.", "Enfría 15–20 min antes de rebanar.", "Consejos: Si tu mezcla queda muy espesa, suma 20–40 ml de leche. Para desayunos, añade semillas de girasol y sésamo a la superficie."], 
    prepTime: "10 min", 
    cookTime: "35 min", 
    servings: "10-12 rebanadas" 
  },
  { 
    id: "3", 
    title: "Pan de garbanzo al horno (tipo focaccia fina)", 
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de garbanzo: 250 g", "Agua: 450 ml", "Aceite de oliva: 40 ml (y 20 ml extra para la bandeja y superficie)", "Sal: 6 g", "Polvo de hornear: 4 g", "Romero seco: 2 g", "Opcional: rodajas finas de cebolla, tomatitos, aceitunas"], 
    instructions: ["Precalienta el horno a 220 °C con la bandeja dentro (la queremos bien caliente).", "En un bol, bate harina de garbanzo, agua, 40 ml de aceite, sal, polvo de hornear y romero hasta que no queden grumos. Reposa 10 min.", "Saca la bandeja caliente, pincela con 10 ml de aceite.", "Vierte la mezcla (queda fluida), agrega cebolla/tomates/aceitunas si quieres, y rocía con 10 ml de aceite por encima.", "Hornea 18–22 min hasta bordes dorados y centro firme.", "Deja entibiar 5 min y corta en cuadrados.", "Consejos: Textura fina, bordes crujientes y centro jugoso. Si la quieres más gruesa, usa una bandeja más pequeña o aumenta la cantidad un 30%."], 
    prepTime: "15 min", 
    cookTime: "18-22 min", 
    servings: "8 porciones" 
  },
  { 
    id: "4", 
    title: "Pan de almendra suave (batido)", 
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de almendra fina: 220 g", "Harina de coco: 30 g", "Psyllium en polvo: 8 g", "Polvo de hornear: 8 g", "Sal: 3 g", "Huevos: 4 u (≈200 g)", "Yogur vegetal natural (o kefir vegetal): 120 ml", "Agua: 60 ml", "Aceite de oliva o coco: 30 ml", "Vinagre de manzana: 10 ml"], 
    instructions: ["Horno a 180 °C. Molde engrasado y forrado.", "Mezcla secos: almendra, coco, psyllium, polvo de hornear y sal.", "Bate huevos con yogur, agua, aceite y vinagre.", "Integra líquidos con secos. La mezcla espesa en 1–2 min (el coco y el psyllium absorben).", "Vierte, alisa y hornea 28–32 min. Palillo seco y superficie apenas dorada.", "Enfría 20 min antes de cortar.", "Consejos: Miga esperada es tierna y ligeramente húmeda, ideal para tostadas. Pan low-carb friendly."], 
    prepTime: "10 min", 
    cookTime: "28-32 min", 
    servings: "10 rebanadas" 
  },
  { 
    id: "5", 
    title: "Pan de yogurt vegetal y semillas (sin levado)", 
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 200 g", "Harina de avena GF: 80 g", "Almidón de tapioca: 40 g", "Psyllium en polvo: 8 g", "Polvo de hornear: 8 g", "Sal: 5 g", "Yogurt vegetal natural: 250 g (≈250 ml)", "Agua: 120 ml", "Aceite de oliva: 30 ml", "Mix de semillas: 40 g (chía 10 g, lino 15 g, girasol 15 g)"], 
    instructions: ["Precalienta a 190 °C. Prepara el molde con papel.", "En un bol, combina harinas, tapioca, psyllium, polvo de hornear y sal.", "Mezcla yogurt, agua y aceite; vierte sobre los secos.", "Incorpora el mix de semillas (reserva un poco para la superficie).", "Vierte en el molde, alisa y espolvorea el resto de semillas.", "Hornea 35–40 min. Si se dora de más, cúbrelo los últimos 10 min.", "Enfría 15–20 min antes de rebanar.", "Consejos: Miga húmeda y elástica gracias al yogurt y el psyllium. Para rodajas más firmes, tuéstalas 3–4 min antes de servir."], 
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10-12 rebanadas" 
  },
  { 
    id: "6", 
    title: "Pan rústico de sorgo y maíz (mezcla básica)", 
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de sorgo: 180 g", "Harina de maíz fina (no precocida): 120 g", "Almidón de tapioca: 50 g", "Psyllium en polvo: 10 g", "Polvo de hornear: 8 g", "Sal: 5 g", "Agua tibia: 320 ml", "Aceite de oliva: 30 ml", "Vinagre de manzana: 10 ml"], 
    instructions: ["Precalienta el horno a 190 °C y prepara un molde con papel.", "Mezcla en un bol las harinas, tapioca, psyllium, polvo de hornear y sal.", "Agrega el agua tibia, aceite y vinagre. Mezcla con espátula hasta formar una pasta húmeda.", "Vierte al molde y alisa la superficie.", "Hornea 35–40 min o hasta que la parte superior se dore y suene hueca al golpearla suavemente.", "Deja enfriar 15 min antes de cortar.", "Consejos: Este pan tiene sabor ligeramente dulce por el maíz y aroma a campo. Ideal para acompañar sopas o untar con aceite de oliva."], 
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10-12 rebanadas" 
  },
  { 
    id: "7", 
    title: "Pan de papa y aceite de oliva (textura tierna)", 
    categoryId: "panes-rapidos", 
    ingredients: ["Puré de papa cocida (sin mantequilla): 200 g", "Harina de arroz: 150 g", "Fécula de maíz: 50 g", "Polvo de hornear: 8 g", "Psyllium en polvo: 6 g", "Sal: 4 g", "Agua tibia: 120 ml", "Aceite de oliva: 40 ml"], 
    instructions: ["Precalienta el horno a 190 °C. Engrasa un molde o usa papel vegetal.", "Mezcla puré de papa con el agua y el aceite hasta integrar.", "Añade los ingredientes secos y mezcla bien. La textura debe ser suave, no líquida.", "Coloca la masa en el molde, alisa y rocía un poco de aceite por encima.", "Hornea 30–35 min hasta dorar.", "Deja reposar 10 min antes de desmoldar.", "Consejos: Queda con una miga húmeda y elástica gracias al puré. Perfecto para tostar con ajo o hierbas."], 
    prepTime: "10 min", 
    cookTime: "30-35 min", 
    servings: "8-10 rebanadas" 
  },
  { 
    id: "8", 
    title: "Pan de calabaza especiado (salado)", 
    categoryId: "panes-rapidos", 
    ingredients: ["Puré de calabaza cocida: 200 g", "Harina de arroz: 150 g", "Harina de garbanzo: 50 g", "Polvo de hornear: 8 g", "Sal: 4 g", "Comino molido: 1 g", "Cúrcuma: 1 g", "Aceite de oliva: 30 ml", "Agua: 120 ml"], 
    instructions: ["Precalienta a 190 °C. Engrasa el molde.", "Mezcla los ingredientes secos en un bol.", "Agrega el puré de calabaza, aceite y agua; mezcla hasta que quede una masa cremosa.", "Vierte en el molde y alisa.", "Hornea 35–40 min hasta dorar ligeramente.", "Deja enfriar antes de cortar.", "Consejos: El color dorado y el aroma especiado son irresistibles. Añade semillas de calabaza arriba antes de hornear para decorar."], 
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10 rebanadas" 
  },
  { 
    id: "9", 
    title: "Pan de cebolla y orégano (bandeja)", 
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 200 g", "Harina de maíz fina: 80 g", "Fécula de maíz: 50 g", "Polvo de hornear: 8 g", "Sal: 5 g", "Cebolla finamente picada: 100 g", "Aceite de oliva: 40 ml", "Agua tibia: 240 ml", "Orégano seco: 3 g"], 
    instructions: ["Precalienta el horno a 200 °C.", "Sofríe la cebolla con 10 ml de aceite hasta que esté transparente; enfría.", "Mezcla harinas, polvo de hornear, sal y orégano.", "Agrega el agua, aceite restante y la cebolla. Mezcla hasta que quede espeso.", "Extiende la masa en bandeja engrasada (2–3 cm de grosor).", "Hornea 30 min hasta dorar los bordes.", "Enfría 10 min antes de cortar.", "Consejos: Perfecto para servir como pan de mesa o base de mini pizzas. Si quieres más aroma, añade 1 diente de ajo rallado."], 
    prepTime: "15 min", 
    cookTime: "30 min", 
    servings: "8-10 porciones" 
  },
  { 
    id: "10", 
    title: "Pan tipo \"soda bread\" sin gluten (con bicarbonato)", 
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 200 g", "Harina de avena GF: 100 g", "Fécula de maíz: 50 g", "Bicarbonato de sodio: 5 g", "Polvo de hornear: 5 g", "Sal: 4 g", "Yogur vegetal natural: 250 ml", "Vinagre o jugo de limón: 10 ml", "Aceite: 20 ml"], 
    instructions: ["Precalienta el horno a 200 °C. Cubre una bandeja con papel.", "Mezcla el yogur con el vinagre y deja reposar 5 min (formará una ligera espuma).", "En un bol, mezcla los ingredientes secos.", "Agrega el yogur y el aceite. Forma una masa blanda, que no se pega a las manos.", "Haz una bola, colócala sobre la bandeja y marca una cruz con cuchillo en la parte superior.", "Hornea 35–40 min o hasta que suene hueco al golpear.", "Enfría sobre rejilla.", "Consejos: Este pan tiene miga densa y corteza rústica. Si lo deseas más aireado, sustituye 50 ml del yogur por agua con gas."], 
    prepTime: "15 min", 
    cookTime: "35-40 min", 
    servings: "10 rebanadas" 
  },
  { 
    id: "11", 
    title: "Pan integral sin gluten (arroz + avena GF)", 
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz integral: 180 g", "Harina de avena certificada GF: 120 g", "Fécula de maíz: 60 g", "Psyllium en polvo: 8 g", "Polvo de hornear: 8 g", "Sal: 5 g", "Aceite de oliva: 30 ml", "Agua tibia: 320 ml", "Vinagre de manzana: 10 ml", "Semillas mixtas: 30 g"], 
    instructions: ["Precalienta el horno a 190 °C y prepara un molde mediano.", "En un bol, mezcla las harinas, fécula, psyllium, polvo de hornear y sal.", "Agrega el agua tibia, el aceite y el vinagre. Mezcla con cuchara hasta lograr una pasta espesa.", "Incorpora la mitad de las semillas.", "Vierte la mezcla al molde, alisa y espolvorea el resto de semillas.", "Hornea 35–40 min, hasta dorar.", "Enfría antes de cortar.", "Consejos: Pan de sabor suave y miga húmeda, perfecto para tostadas o sándwiches. Podés guardar rebanadas congeladas hasta 2 meses."], 
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "12 rebanadas" 
  },
  { 
    id: "12", 
    title: "Pan de linaza molida (alto en fibra)", 
    categoryId: "panes-rapidos", 
    ingredients: ["Linaza molida: 120 g", "Harina de almendra: 100 g", "Harina de coco: 20 g", "Polvo de hornear: 8 g", "Sal: 4 g", "Huevos: 4 u (≈200 g)", "Agua: 120 ml", "Aceite de oliva: 20 ml", "Vinagre de manzana: 10 ml"], 
    instructions: ["Precalienta el horno a 180 °C.", "Mezcla secos: linaza, almendra, coco, polvo de hornear y sal.", "En otro bol, bate los huevos con el agua, aceite y vinagre.", "Integra todo y deja reposar 5 min (la linaza absorbe líquido y espesa).", "Coloca en molde pequeño y alisa.", "Hornea 30–35 min hasta que al pinchar salga seco.", "Enfría sobre rejilla.", "Consejos: Textura densa, ideal para tostadas saladas. Si querés versión más húmeda, agregá 1 cucharada extra de agua. Aporta muchísima saciedad."], 
    prepTime: "10 min", 
    cookTime: "30-35 min", 
    servings: "8-10 rebanadas" 
  },
  { 
    id: "13", 
    title: "Pan de coco salado (ligero)", 
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de coco: 60 g", "Fécula de maíz: 40 g", "Polvo de hornear: 6 g", "Sal: 3 g", "Huevos: 3 u", "Leche vegetal o agua: 150 ml", "Aceite de coco o de oliva: 25 ml"], 
    instructions: ["Horno a 180 °C.", "Mezclá los ingredientes secos.", "En otro bol, batí huevos, leche y aceite.", "Integra todo. La mezcla debe quedar cremosa (no líquida).", "Verté en molde pequeño.", "Horneá 25–30 min, hasta dorar los bordes.", "Dejá enfriar antes de cortar.", "Consejos: Muy aromático y suave, perfecto para acompañar comidas ligeras. Podés agregar 1 cucharadita de orégano o ajo en polvo para darle un toque salado."], 
    prepTime: "10 min", 
    cookTime: "25-30 min", 
    servings: "6-8 rebanadas" 
  },
  { 
    id: "14", 
    title: "Pan de queso rápido (sin amasado)", 
    categoryId: "panes-rapidos", 
    ingredients: ["Fécula de mandioca o tapioca: 200 g", "Queso rallado (duro o semicurado): 120 g", "Huevo: 1 u", "Aceite: 30 ml", "Leche tibia: 100 ml", "Polvo de hornear: 6 g", "Sal: 3 g"], 
    instructions: ["Precalentá el horno a 200 °C.", "En un bol, mezclá la fécula, el queso, el polvo de hornear y la sal.", "Incorporá el huevo, el aceite y la leche. Mezclá hasta que se forme una masa pegajosa pero manejable.", "Formá bollitos con las manos húmedas y colocá sobre bandeja con papel.", "Horneá 20–25 min, hasta que se inflen y doren.", "Consejos: Si te gustan más elásticos, usá mezcla de quesos duros y frescos. Podés hacerlos mini para picadas o más grandes para sándwiches."], 
    prepTime: "10 min", 
    cookTime: "20-25 min", 
    servings: "8-10 bollitos" 
  },
  { 
    id: "15", 
    title: "Pan de hierbas mediterráneas (molde pequeño)", 
    categoryId: "panes-rapidos", 
    ingredients: ["Harina de arroz: 200 g", "Harina de sorgo: 100 g", "Fécula de maíz: 40 g", "Polvo de hornear: 8 g", "Sal: 4 g", "Aceite de oliva: 40 ml", "Agua tibia: 280 ml", "Vinagre de manzana: 10 ml", "Hierbas secas (romero, orégano, tomillo): 2 g de cada una aprox."], 
    instructions: ["Precalentá el horno a 190 °C.", "Mezclá harinas, fécula, polvo de hornear, sal y hierbas.", "Agregá aceite, agua y vinagre. Mezclá hasta integrar.", "Verté en molde pequeño, alisá la superficie y rociá un poco de aceite arriba.", "Horneá 35–40 min hasta dorar.", "Dejá enfriar 15 min antes de cortar.", "Consejos: Aroma increíble gracias al romero y al aceite de oliva. Ideal para acompañar ensaladas o sopas. Si querés versión más intensa, sumá aceitunas picadas a la mezcla."], 
    prepTime: "10 min", 
    cookTime: "35-40 min", 
    servings: "10 rebanadas" 
  },

  // Categoría 2: Panes Exprés al Microondas (10)
  { id: "16", title: "Pan de taza de avena GF (mug bread)", categoryId: "panes-microondas", ingredients: ["Avena GF molida", "Huevo", "Polvo hornear", "Leche", "Sal"], instructions: ["Mezclar en taza", "Microondas 90 seg", "Dejar reposar", "Desmoldar"], prepTime: "3 min", cookTime: "2 min", servings: "1 porción" },
  { id: "17", title: "Pan de taza de almendra (versión keto)", categoryId: "panes-microondas", ingredients: ["Harina almendra", "Huevo", "Polvo hornear", "Mantequilla", "Sal"], instructions: ["Batir en taza", "Microondas 90 seg", "Enfriar 1 min", "Servir"], prepTime: "2 min", cookTime: "2 min", servings: "1 porción" },
  { id: "18", title: "Pan de taza de garbanzo (sándwich rápido)", categoryId: "panes-microondas", ingredients: ["Harina garbanzo", "Agua", "Aceite", "Sal", "Polvo hornear"], instructions: ["Mezclar ingredientes", "Microondas 2 min", "Dejar enfriar", "Cortar horizontal"], prepTime: "3 min", cookTime: "2 min", servings: "1 sándwich" },
  { id: "19", title: "Pan nube (cloud bread) al microondas", categoryId: "panes-microondas", ingredients: ["Claras", "Queso crema", "Cremor tártaro", "Edulcorante", "Sal"], instructions: ["Batir claras", "Incorporar queso", "Microondas 1 min", "Enfriar"], prepTime: "5 min", cookTime: "1 min", servings: "2-3 porciones" },
  { id: "20", title: "Pan inglés rápido al microondas (molde siliconado)", categoryId: "panes-microondas", ingredients: ["Mix harinas GF", "Levadura", "Leche", "Aceite", "Sal"], instructions: ["Mezclar masa", "Molde redondo", "Microondas 4 min", "Tostar después"], prepTime: "5 min", cookTime: "4 min", servings: "1 pan inglés" },
  { id: "21", title: "Pan de semillas mixtas (mug rectangular)", categoryId: "panes-microondas", ingredients: ["Semillas molidas", "Huevo", "Polvo hornear", "Agua", "Sal"], instructions: ["Moler semillas", "Mezclar todo", "Microondas 2 min", "Reposar"], prepTime: "4 min", cookTime: "2 min", servings: "1 porción" },
  { id: "22", title: "Pan de zanahoria rallada (esponjoso)", categoryId: "panes-microondas", ingredients: ["Zanahoria rallada", "Harina arroz", "Huevo", "Polvo hornear", "Canela"], instructions: ["Rallar zanahoria", "Mezclar ingredientes", "Microondas 2.5 min", "Enfriar"], prepTime: "5 min", cookTime: "3 min", servings: "1-2 porciones" },
  { id: "23", title: "Pan de cacao salado (para untar)", categoryId: "panes-microondas", ingredients: ["Cacao", "Harina almendra", "Huevo", "Polvo hornear", "Sal"], instructions: ["Mezclar secos", "Añadir huevo", "Microondas 90 seg", "Untar"], prepTime: "3 min", cookTime: "2 min", servings: "1 porción" },
  { id: "24", title: "Pan pita exprés al microondas (plano)", categoryId: "panes-microondas", ingredients: ["Harina arroz", "Agua", "Aceite", "Sal", "Polvo hornear"], instructions: ["Masa líquida", "Extender plato", "Microondas 2 min", "Doblar"], prepTime: "3 min", cookTime: "2 min", servings: "2 pitas" },
  { id: "25", title: "Pan de arroz integral en 7 minutos", categoryId: "panes-microondas", ingredients: ["Arroz integral cocido", "Huevo", "Polvo hornear", "Sal", "Agua"], instructions: ["Triturar arroz", "Mezclar todo", "Microondas 3 min", "Reposar 4 min"], prepTime: "4 min", cookTime: "3 min", servings: "1 porción" },

  // Categoría 3: Panes de Sartén/Plancha (15)
  { id: "26", title: "Mbejú clásico de almidón de yuca (Paraguay)", categoryId: "panes-sarten", ingredients: ["Almidón yuca", "Queso", "Huevo", "Sal", "Leche"], instructions: ["Mezclar almidón", "Agregar queso", "Cocinar plancha", "Voltear"], prepTime: "5 min", cookTime: "6 min", servings: "4 unidades" },
  { id: "27", title: "Tortillas de maíz 100% GF (plancha)", categoryId: "panes-sarten", ingredients: ["Masa harina maíz", "Agua", "Sal"], instructions: ["Hidratar masa", "Formar bolitas", "Prensar", "Cocinar plancha"], prepTime: "10 min", cookTime: "15 min", servings: "8 tortillas" },
  { id: "28", title: "Tortillas de yuca (cassava tortillas)", categoryId: "panes-sarten", ingredients: ["Harina yuca", "Agua tibia", "Sal", "Aceite"], instructions: ["Formar masa", "Dejar reposar", "Estirar finas", "Cocinar sartén"], prepTime: "15 min", cookTime: "12 min", servings: "6 tortillas" },
  { id: "29", title: "Tortillas de garbanzo (socca fina en sartén)", categoryId: "panes-sarten", ingredients: ["Harina garbanzo", "Agua", "Aceite oliva", "Sal", "Comino"], instructions: ["Mezclar y reposar", "Verter fino en sartén", "Cocinar ambos lados", "Servir caliente"], prepTime: "30 min", cookTime: "5 min", servings: "4 tortillas" },
  { id: "30", title: "Arepas clásicas de maíz precocido (plancha)", categoryId: "panes-sarten", ingredients: ["Harina maíz precocido", "Agua", "Sal", "Aceite"], instructions: ["Formar masa", "Hacer bolitas", "Aplanar", "Cocinar plancha"], prepTime: "10 min", cookTime: "15 min", servings: "6 arepas" },
  { id: "31", title: "Pan pita de sartén sin gluten", categoryId: "panes-sarten", ingredients: ["Mix harinas GF", "Agua", "Levadura", "Sal", "Aceite"], instructions: ["Hacer masa", "Reposar 30 min", "Estirar círculos", "Cocinar sartén caliente"], prepTime: "40 min", cookTime: "10 min", servings: "6 pitas" },
  { id: "32", title: "Naan sin gluten a la sartén (versión con yogurt vegetal)", categoryId: "panes-sarten", ingredients: ["Harina arroz", "Yogurt vegetal", "Levadura", "Sal", "Aceite"], instructions: ["Mezclar masa", "Fermentar 1h", "Estirar", "Cocinar sartén"], prepTime: "1h 10min", cookTime: "8 min", servings: "4 naans" },
  { id: "33", title: "Focaccia plana a la plancha (estilo torta al testo)", categoryId: "panes-sarten", ingredients: ["Mix harinas GF", "Agua", "Levadura", "Aceite oliva", "Sal"], instructions: ["Masa hidratada", "Fermentar corto", "Estirar grueso", "Plancha caliente"], prepTime: "45 min", cookTime: "12 min", servings: "4 porciones" },
  { id: "34", title: "Pan chapati sin gluten (mezcla arroz + tapioca)", categoryId: "panes-sarten", ingredients: ["Harina arroz", "Almidón tapioca", "Agua caliente", "Sal", "Aceite"], instructions: ["Mezclar harinas", "Agua caliente", "Amasar", "Estirar y cocinar"], prepTime: "20 min", cookTime: "12 min", servings: "6 chapatis" },
  { id: "35", title: "Pan tipo \"piadina\" sin gluten", categoryId: "panes-sarten", ingredients: ["Harina arroz", "Manteca", "Agua", "Sal", "Bicarbonato"], instructions: ["Integrar manteca", "Formar masa", "Estirar fino", "Sartén muy caliente"], prepTime: "15 min", cookTime: "10 min", servings: "4 piadinas" },
  { id: "36", title: "Tortilla española de papa (sin harina)", categoryId: "panes-sarten", ingredients: ["Papas", "Huevos", "Cebolla", "Aceite", "Sal"], instructions: ["Freír papas", "Batir huevos", "Mezclar", "Cuajar sartén"], prepTime: "15 min", cookTime: "20 min", servings: "4-6 porciones" },
  { id: "37", title: "Farinata genovesa (sartén grande)", categoryId: "panes-sarten", ingredients: ["Harina garbanzo", "Agua", "Aceite oliva", "Sal", "Romero"], instructions: ["Mezclar y reposar 4h", "Verter en sartén", "Horno/sartén caliente", "Gratinar"], prepTime: "4h", cookTime: "15 min", servings: "6 porciones" },
  { id: "38", title: "Blinis sin gluten (mini panqueques)", categoryId: "panes-sarten", ingredients: ["Harina alforfón", "Leche", "Huevo", "Levadura", "Sal"], instructions: ["Mezclar masa líquida", "Reposar 30 min", "Cocinar pequeños", "Servir tibios"], prepTime: "35 min", cookTime: "10 min", servings: "12 blinis" },
  { id: "39", title: "Cachapas venezolanas (maíz tierno)", categoryId: "panes-sarten", ingredients: ["Maíz tierno", "Azúcar", "Sal", "Leche", "Mantequilla"], instructions: ["Licuar maíz", "Añadir ingredientes", "Cocinar plancha", "Rellenar"], prepTime: "10 min", cookTime: "15 min", servings: "4 cachapas" },
  { id: "40", title: "Panqueques de avena GF (batch)", categoryId: "panes-sarten", ingredients: ["Avena GF molida", "Huevos", "Leche", "Polvo hornear", "Canela"], instructions: ["Licuar todo", "Reposar 5 min", "Cocinar sartén", "Apilar"], prepTime: "8 min", cookTime: "12 min", servings: "8 panqueques" },

  // Categoría 4: Panes con Fermentación Corta (10)
  { id: "41", title: "Pan de molde esponjoso (arroz + tapioca + psyllium)", categoryId: "panes-fermentacion", ingredients: ["Harina arroz", "Almidón tapioca", "Psyllium", "Levadura", "Agua tibia"], instructions: ["Mezclar secos", "Añadir agua", "Fermentar 45 min", "Hornear 40 min"], prepTime: "50 min", cookTime: "40 min", servings: "1 molde" },
  { id: "42", title: "Pan baguette corta fermentación (sin gluten)", categoryId: "panes-fermentacion", ingredients: ["Mix panificable GF", "Levadura", "Agua", "Sal", "Vinagre"], instructions: ["Masa hidratada", "Fermentar 1h", "Formar baguette", "Hornear con vapor"], prepTime: "1h 10min", cookTime: "25 min", servings: "2 baguettes" },
  { id: "43", title: "Pan rústico con corteza crujiente (levadura instantánea)", categoryId: "panes-fermentacion", ingredients: ["Mix harinas GF", "Levadura instantánea", "Agua", "Sal", "Aceite"], instructions: ["Mezclar todo", "Fermentar 1h", "Formar hogaza", "Hornear 45 min"], prepTime: "1h", cookTime: "45 min", servings: "1 hogaza" },
  { id: "44", title: "Pan con aceitunas y romero (una fermentación)", categoryId: "panes-fermentacion", ingredients: ["Mix GF", "Aceitunas", "Romero", "Levadura", "Agua"], instructions: ["Masa base", "Agregar aceitunas", "Fermentar 1h", "Hornear"], prepTime: "1h 10min", cookTime: "40 min", servings: "1 hogaza" },
  { id: "45", title: "Pan ciabatta sin gluten (hidratación media)", categoryId: "panes-fermentacion", ingredients: ["Harina arroz", "Tapioca", "Levadura", "Agua", "Aceite oliva"], instructions: ["Masa pegajosa", "Fermentar 1h", "Estirar con aceite", "Hornear con vapor"], prepTime: "1h 15min", cookTime: "30 min", servings: "2 ciabattas" },
  { id: "46", title: "Pan de campo simple (molde alargado)", categoryId: "panes-fermentacion", ingredients: ["Mix GF integral", "Levadura", "Semillas", "Agua", "Sal"], instructions: ["Mezclar", "Fermentar 50 min", "Molde", "Hornear"], prepTime: "55 min", cookTime: "40 min", servings: "1 molde" },
  { id: "47", title: "Pan de centeno \"fake\" (saborizado sin centeno)", categoryId: "panes-fermentacion", ingredients: ["Harina alforfón", "Comino", "Melaza", "Levadura", "Agua"], instructions: ["Saborizar masa oscura", "Fermentar 1h", "Formar hogaza", "Hornear"], prepTime: "1h", cookTime: "45 min", servings: "1 hogaza" },
  { id: "48", title: "Pan de sándwich tierno (rebanado fino)", categoryId: "panes-fermentacion", ingredients: ["Mix panificable", "Leche", "Mantequilla", "Levadura", "Azúcar"], instructions: ["Masa suave", "Fermentar 1h", "Molde", "Hornear tierno"], prepTime: "1h 5min", cookTime: "35 min", servings: "1 molde" },
  { id: "49", title: "Pan estilo bollo de hamburguesa (fermentación corta)", categoryId: "panes-fermentacion", ingredients: ["Mix GF", "Levadura", "Huevo", "Leche", "Aceite"], instructions: ["Formar bollos", "Fermentar 45 min", "Pintar huevo", "Hornear"], prepTime: "50 min", cookTime: "18 min", servings: "6 bollos" },
  { id: "50", title: "Pan de hot dog sin gluten (molde individual)", categoryId: "panes-fermentacion", ingredients: ["Mix panificable", "Levadura", "Agua", "Aceite", "Sal"], instructions: ["Formar alargados", "Moldes individuales", "Fermentar 40 min", "Hornear"], prepTime: "45 min", cookTime: "20 min", servings: "8 panes" },

  // Categoría 5: Panes de Masa Madre (8)
  { id: "51", title: "Pan rústico de masa madre (arroz + sorgo)", categoryId: "masa-madre", ingredients: ["Masa madre GF", "Harina arroz", "Sorgo", "Sal", "Agua"], instructions: ["Refrescar masa madre", "Mezclar harinas", "Fermentar 4-6h", "Hornear"], prepTime: "6h", cookTime: "50 min", servings: "1 hogaza" },
  { id: "52", title: "Pan integral de masa madre (mijo + avena GF)", categoryId: "masa-madre", ingredients: ["Masa madre", "Mijo", "Avena GF", "Semillas", "Agua"], instructions: ["Autolyse", "Agregar masa madre", "Fermentar largo", "Hornear"], prepTime: "8h", cookTime: "45 min", servings: "1 hogaza" },
  { id: "53", title: "Pan de semillas con masa madre (alto en fibra)", categoryId: "masa-madre", ingredients: ["Masa madre", "Mix semillas", "Harina arroz", "Psyllium", "Agua"], instructions: ["Hidratar semillas", "Mezclar masa", "Fermentar 5h", "Hornear"], prepTime: "5h 30min", cookTime: "50 min", servings: "1 hogaza" },
  { id: "54", title: "Pan de molde de masa madre (suave)", categoryId: "masa-madre", ingredients: ["Masa madre activa", "Mix panificable", "Aceite", "Miel", "Sal"], instructions: ["Masa enriquecida", "Fermentar 4h", "Molde", "Hornear"], prepTime: "4h 20min", cookTime: "40 min", servings: "1 molde" },
  { id: "55", title: "Pan de teff de masa madre (aroma profundo)", categoryId: "masa-madre", ingredients: ["Masa madre", "Harina teff", "Arroz integral", "Sal", "Agua"], instructions: ["Mezclar harinas oscuras", "Fermentar 6h", "Formar", "Hornear"], prepTime: "6h 15min", cookTime: "55 min", servings: "1 hogaza" },
  { id: "56", title: "Baguette de masa madre sin gluten", categoryId: "masa-madre", ingredients: ["Masa madre fuerte", "Mix GF", "Agua", "Sal", "Vinagre"], instructions: ["Masa hidratada", "Fermentar 5h", "Formar baguettes", "Hornear con vapor"], prepTime: "5h 30min", cookTime: "25 min", servings: "2 baguettes" },
  { id: "57", title: "Pan de batata fermentado (miga húmeda)", categoryId: "masa-madre", ingredients: ["Batata cocida", "Masa madre", "Harina arroz", "Canela", "Sal"], instructions: ["Integrar batata", "Fermentar 5h", "Molde", "Hornear"], prepTime: "5h 20min", cookTime: "45 min", servings: "1 molde" },
  { id: "58", title: "Pan campesino con corteza oscura (masa madre)", categoryId: "masa-madre", ingredients: ["Masa madre", "Mix integral", "Melaza", "Sal", "Agua"], instructions: ["Masa densa", "Fermentar 6-8h", "Formar redondo", "Hornear alto"], prepTime: "8h", cookTime: "50 min", servings: "1 hogaza" },

  // Categoría 6: Panes Dulces (12)
  { id: "59", title: "Pan dulce de naranja y almendra (glaseado ligero)", categoryId: "panes-dulces", ingredients: ["Harina almendra", "Ralladura naranja", "Huevos", "Azúcar", "Polvo hornear"], instructions: ["Mezclar ingredientes", "Molde", "Hornear", "Glasear"], prepTime: "15 min", cookTime: "35 min", servings: "1 molde" },
  { id: "60", title: "Pan tipo \"milk bread\" sin gluten (suave)", categoryId: "panes-dulces", ingredients: ["Mix GF", "Leche", "Mantequilla", "Azúcar", "Levadura"], instructions: ["Masa tierna", "Fermentar 1h", "Molde", "Hornear suave"], prepTime: "1h 10min", cookTime: "30 min", servings: "1 molde" },
  { id: "61", title: "Pan de chocolate marmolado (molde)", categoryId: "panes-dulces", ingredients: ["Mix GF", "Cacao", "Azúcar", "Huevos", "Aceite"], instructions: ["Dividir masa", "Marmolar", "Molde", "Hornear"], prepTime: "15 min", cookTime: "40 min", servings: "1 molde" },
  { id: "62", title: "Pan de banana (banana bread) sin gluten", categoryId: "panes-dulces", ingredients: ["Bananas maduras", "Mix GF", "Huevos", "Azúcar", "Nueces"], instructions: ["Aplastar bananas", "Mezclar", "Molde", "Hornear"], prepTime: "10 min", cookTime: "50 min", servings: "1 molde" },
  { id: "63", title: "Pan de coco dulce (rebanado)", categoryId: "panes-dulces", ingredients: ["Coco rallado", "Leche coco", "Azúcar", "Huevos", "Harina arroz"], instructions: ["Mezclar ingredientes", "Molde", "Hornear", "Enfriar"], prepTime: "12 min", cookTime: "45 min", servings: "1 molde" },
  { id: "64", title: "Pan de pasas y canela (sin trigo)", categoryId: "panes-dulces", ingredients: ["Mix GF", "Pasas", "Canela", "Azúcar", "Levadura"], instructions: ["Hidratar pasas", "Masa dulce", "Fermentar 1h", "Hornear"], prepTime: "1h 15min", cookTime: "35 min", servings: "1 molde" },
  { id: "65", title: "Pan de manzana y nuez (especiado)", categoryId: "panes-dulces", ingredients: ["Manzanas", "Nueces", "Mix GF", "Canela", "Azúcar"], instructions: ["Picar manzana", "Mezclar", "Molde", "Hornear"], prepTime: "15 min", cookTime: "45 min", servings: "1 molde" },
  { id: "66", title: "Pan de limón y semillas de amapola", categoryId: "panes-dulces", ingredients: ["Ralladura limón", "Semillas amapola", "Mix GF", "Azúcar", "Yogurt"], instructions: ["Mezclar ingredientes", "Molde", "Hornear", "Glasear limón"], prepTime: "12 min", cookTime: "40 min", servings: "1 molde" },
  { id: "67", title: "Pan de dátiles (naturalmente dulce)", categoryId: "panes-dulces", ingredients: ["Dátiles", "Mix GF", "Huevos", "Aceite coco", "Canela"], instructions: ["Remojar dátiles", "Procesar", "Mezclar masa", "Hornear"], prepTime: "20 min", cookTime: "40 min", servings: "1 molde" },
  { id: "68", title: "Pan de calabaza dulce (spiced)", categoryId: "panes-dulces", ingredients: ["Puré calabaza", "Especias", "Mix GF", "Azúcar morena", "Huevos"], instructions: ["Mezclar calabaza", "Añadir especias", "Molde", "Hornear"], prepTime: "12 min", cookTime: "50 min", servings: "1 molde" },
  { id: "69", title: "Pan de arándanos frescos", categoryId: "panes-dulces", ingredients: ["Arándanos", "Mix GF", "Azúcar", "Limón", "Huevos"], instructions: ["Mezclar base", "Integrar arándanos", "Molde", "Hornear"], prepTime: "10 min", cookTime: "45 min", servings: "1 molde" },
  { id: "70", title: "Pan dulce de naranja confitada", categoryId: "panes-dulces", ingredients: ["Naranja confitada", "Mix GF", "Azúcar", "Mantequilla", "Levadura"], instructions: ["Picar naranja", "Masa dulce", "Fermentar corto", "Hornear"], prepTime: "1h", cookTime: "35 min", servings: "1 molde" },

  // Categoría 7: Panes Festivos (10)
  { id: "71", title: "Rosca dulce sin gluten (trenzada)", categoryId: "panes-festivos", ingredients: ["Mix GF", "Levadura", "Leche", "Mantequilla", "Azúcar", "Frutas confitadas"], instructions: ["Masa enriquecida", "Fermentar 1.5h", "Trenzar rosca", "Hornear y decorar"], prepTime: "2h", cookTime: "35 min", servings: "1 rosca grande" },
  { id: "72", title: "Panettone sin gluten (frutas y cítricos)", categoryId: "panes-festivos", ingredients: ["Mix panificable", "Levadura", "Frutas confitadas", "Ralladura", "Mantequilla", "Huevos"], instructions: ["Masa dulce rica", "Fermentaciones largas", "Molde alto", "Hornear lento"], prepTime: "6h", cookTime: "50 min", servings: "1 panettone" },
  { id: "73", title: "Pan de Pascua sin gluten (especias)", categoryId: "panes-festivos", ingredients: ["Mix GF", "Frutas secas", "Especias", "Miel", "Nueces"], instructions: ["Remojar frutas", "Masa especiada", "Molde", "Hornear bajo"], prepTime: "30 min", cookTime: "60 min", servings: "1 pan" },
  { id: "74", title: "Stollen sin gluten (relleno de mazapán)", categoryId: "panes-festivos", ingredients: ["Mix GF", "Mazapán", "Frutas", "Mantequilla", "Especias"], instructions: ["Masa enriquecida", "Rellenar mazapán", "Formar", "Hornear y azucarar"], prepTime: "2h", cookTime: "45 min", servings: "1 stollen" },
  { id: "75", title: "Babka de chocolate sin gluten (trenza)", categoryId: "panes-festivos", ingredients: ["Mix GF", "Chocolate", "Mantequilla", "Levadura", "Azúcar"], instructions: ["Masa laminada", "Untar chocolate", "Trenzar", "Hornear"], prepTime: "3h", cookTime: "40 min", servings: "1 babka" },
  { id: "76", title: "Challah sin gluten (trenzado enriquecido)", categoryId: "panes-festivos", ingredients: ["Mix GF", "Huevos", "Miel", "Aceite", "Levadura"], instructions: ["Masa rica", "Fermentar 1.5h", "Trenzar 6 cabos", "Pintar y hornear"], prepTime: "2h", cookTime: "30 min", servings: "1 challah" },
  { id: "77", title: "Roscones individuales sin gluten", categoryId: "panes-festivos", ingredients: ["Mix GF", "Azahar", "Levadura", "Nata", "Mantequilla"], instructions: ["Masa aromática", "Formar roscas", "Fermentar", "Hornear y decorar"], prepTime: "2h", cookTime: "20 min", servings: "6 roscones" },
  { id: "78", title: "Pan dulce de cardamomo (estilo nórdico)", categoryId: "panes-festivos", ingredients: ["Mix GF", "Cardamomo", "Mantequilla", "Azúcar", "Levadura"], instructions: ["Masa especiada", "Enrollar", "Formar caracol", "Hornear"], prepTime: "1.5h", cookTime: "25 min", servings: "8 bollos" },
  { id: "79", title: "Colomba pascual sin gluten", categoryId: "panes-festivos", ingredients: ["Mix GF", "Naranja confitada", "Almendra", "Mantequilla", "Levadura"], instructions: ["Masa dulce italiana", "Fermentaciones", "Molde paloma", "Glasear almendra"], prepTime: "5h", cookTime: "40 min", servings: "1 colomba" },
  { id: "80", title: "Pan especiado de jengibre (tipo loaf festivo)", categoryId: "panes-festivos", ingredients: ["Mix GF", "Jengibre", "Melaza", "Especias", "Azúcar morena"], instructions: ["Mezclar especias", "Masa oscura", "Molde", "Hornear aromático"], prepTime: "15 min", cookTime: "50 min", servings: "1 molde" },

  // Categoría 8: High-Protein / Low-Carb (8)
  { id: "81", title: "Pan proteico de clara y almendra (keto)", categoryId: "high-protein", ingredients: ["Harina almendra", "Claras", "Proteína en polvo", "Polvo hornear", "Sal"], instructions: ["Batir claras", "Mezclar secos", "Integrar", "Hornear bajo"], prepTime: "10 min", cookTime: "35 min", servings: "1 molde pequeño" },
  { id: "82", title: "Pan de garbanzo y sésamo (alto en proteína)", categoryId: "high-protein", ingredients: ["Harina garbanzo", "Tahini", "Huevos", "Semillas sésamo", "Polvo hornear"], instructions: ["Mezclar ingredientes", "Añadir tahini", "Molde", "Hornear"], prepTime: "10 min", cookTime: "30 min", servings: "1 molde" },
  { id: "83", title: "Pan de yogurt griego vegetal + chía (low-carb)", categoryId: "high-protein", ingredients: ["Yogurt griego vegetal", "Chía", "Harina almendra", "Huevos", "Polvo hornear"], instructions: ["Mezclar yogurt", "Hidratar chía", "Unir todo", "Hornear"], prepTime: "15 min", cookTime: "30 min", servings: "1 molde pequeño" },
  { id: "84", title: "Pan de linaza dorada (ultra fibra)", categoryId: "high-protein", ingredients: ["Linaza molida", "Huevos", "Psyllium", "Polvo hornear", "Sal"], instructions: ["Hidratar linaza", "Mezclar con huevos", "Añadir químicos", "Hornear denso"], prepTime: "15 min", cookTime: "35 min", servings: "1 molde" },
  { id: "85", title: "Pan de semillas al completo (sin harinas)", categoryId: "high-protein", ingredients: ["Mix semillas", "Huevos", "Psyllium", "Agua", "Sal"], instructions: ["Remojar semillas", "Mezclar todo", "Molde", "Hornear bajo"], prepTime: "30 min", cookTime: "50 min", servings: "1 molde" },
  { id: "86", title: "Pan de coco y proteína (suero/vegana)", categoryId: "high-protein", ingredients: ["Harina coco", "Proteína en polvo", "Huevos", "Leche", "Polvo hornear"], instructions: ["Mezclar secos", "Añadir líquidos", "Molde pequeño", "Hornear"], prepTime: "8 min", cookTime: "25 min", servings: "1 molde pequeño" },
  { id: "87", title: "Pan nube horneado (batch para sándwich)", categoryId: "high-protein", ingredients: ["Claras", "Queso crema", "Cremor tártaro", "Sal"], instructions: ["Batir claras a nieve", "Incorporar queso", "Formar discos", "Hornear bajo"], prepTime: "10 min", cookTime: "30 min", servings: "6 discos" },
  { id: "88", title: "Pan de calabacín rallado (low-carb, húmedo)", categoryId: "high-protein", ingredients: ["Calabacín rallado", "Harina almendra", "Huevos", "Queso", "Polvo hornear"], instructions: ["Escurrir calabacín", "Mezclar ingredientes", "Molde", "Hornear"], prepTime: "15 min", cookTime: "40 min", servings: "1 molde" },

  // Categoría 9: Regionales LATAM (12)
  { id: "89", title: "Pão de queijo (pan de queso brasileño) sin gluten", categoryId: "regionales-latam", ingredients: ["Almidón tapioca", "Queso rallado", "Huevos", "Leche", "Aceite"], instructions: ["Escaldar almidón", "Añadir queso", "Formar bolitas", "Hornear"], prepTime: "15 min", cookTime: "25 min", servings: "12 unidades" },
  { id: "90", title: "Chipa paraguaya (quesuda, almidón de yuca)", categoryId: "regionales-latam", ingredients: ["Almidón yuca", "Queso Paraguay", "Huevos", "Leche", "Grasa"], instructions: ["Mezclar todo", "Formar herradura", "Hornear dorado", "Servir caliente"], prepTime: "15 min", cookTime: "25 min", servings: "10 chipas" },
  { id: "91", title: "Cachitos/\"calcitos\" de yuca (rellenos salados)", categoryId: "regionales-latam", ingredients: ["Masa yuca", "Jamón", "Queso", "Huevo", "Mantequilla"], instructions: ["Masa de yuca", "Rellenar", "Formar cachitos", "Hornear"], prepTime: "30 min", cookTime: "20 min", servings: "8 cachitos" },
  { id: "92", title: "Pan andino de papa (sin gluten)", categoryId: "regionales-latam", ingredients: ["Papa amarilla", "Harina arroz", "Anís", "Sal", "Levadura"], instructions: ["Puré papa", "Mezclar harina", "Fermentar", "Hornear"], prepTime: "1h", cookTime: "35 min", servings: "1 hogaza" },
  { id: "93", title: "Pan de yuca horneado (Ecuador/Colombia)", categoryId: "regionales-latam", ingredients: ["Almidón yuca", "Queso fresco", "Huevo", "Mantequilla"], instructions: ["Mezclar masa", "Formar bolitas", "Hornear esponjoso", "Servir tibio"], prepTime: "10 min", cookTime: "20 min", servings: "10 panes" },
  { id: "94", title: "Pan de bono sin gluten (versión casera)", categoryId: "regionales-latam", ingredients: ["Almidón yuca", "Queso costeño", "Huevos", "Mantequilla"], instructions: ["Mezclar ingredientes", "Formar aros", "Hornear dorado", "Comer caliente"], prepTime: "15 min", cookTime: "25 min", servings: "8 panes" },
  { id: "95", title: "Pan campesino costeño (adaptado GF)", categoryId: "regionales-latam", ingredients: ["Mix GF", "Coco rallado", "Anís", "Levadura", "Leche coco"], instructions: ["Masa aromática", "Fermentar corto", "Formar redondo", "Hornear"], prepTime: "1h", cookTime: "35 min", servings: "1 hogaza" },
  { id: "96", title: "Pan telera sin gluten (adaptación)", categoryId: "regionales-latam", ingredients: ["Mix GF", "Levadura", "Agua", "Manteca", "Sal"], instructions: ["Masa suave", "Fermentar 1h", "Formar ovalado", "Hornear blando"], prepTime: "1h 10min", cookTime: "20 min", servings: "6 teleras" },
  { id: "97", title: "Pan francés casero sin gluten (básico)", categoryId: "regionales-latam", ingredients: ["Mix panificable", "Levadura", "Agua", "Sal", "Azúcar"], instructions: ["Masa clásica", "Fermentar", "Formar bolillos", "Hornear crujiente"], prepTime: "1h 15min", cookTime: "25 min", servings: "6 panes" },
  { id: "98", title: "Pan gallego sin gluten (miga húmeda)", categoryId: "regionales-latam", ingredients: ["Mix GF", "Papa cocida", "Levadura", "Aceite oliva", "Sal"], instructions: ["Integrar papa", "Masa húmeda", "Fermentar", "Hornear rústico"], prepTime: "1h 20min", cookTime: "40 min", servings: "1 hogaza" },
  { id: "99", title: "Pan tipo ciabatta latino (con aceite y sal)", categoryId: "regionales-latam", ingredients: ["Mix GF", "Aceite oliva", "Sal gruesa", "Levadura", "Agua"], instructions: ["Alta hidratación", "Fermentar", "Estirar", "Hornear plano"], prepTime: "1h 30min", cookTime: "25 min", servings: "2 ciabattas" },
  { id: "100", title: "Pan bollo dulce criollo (sin gluten, aromático)", categoryId: "regionales-latam", ingredients: ["Mix GF", "Azúcar", "Anís", "Mantequilla", "Levadura"], instructions: ["Masa dulce", "Fermentar", "Formar bollos", "Hornear aromático"], prepTime: "1h 15min", cookTime: "22 min", servings: "8 bollos" }
];
