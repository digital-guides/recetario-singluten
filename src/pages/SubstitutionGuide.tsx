import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import guiaSustitucionImage from "@/assets/guia-sustitucion-harinas.jpg";

const SubstitutionGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <img
            src={guiaSustitucionImage}
            alt="Guía de Sustituciones de Harinas"
            className="w-full h-64 object-cover rounded-2xl shadow-lg mb-8"
          />
          
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              🌾 BONO 3 – Guía de Sustituciones y Adaptaciones Sin Gluten
            </h1>
            <p className="text-xl text-muted-foreground">
              Aprende cómo reemplazar harinas y adaptar recetas tradicionales a versiones sin gluten
            </p>
          </div>

          {/* Substitution Table */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Si te falta una harina, puedes reemplazarla así</CardTitle>
              <CardDescription>
                Proporciones y resultados orientativos para mantener textura y sabor similares
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Harina Original</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Reemplazo y Resultado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-3 px-4 font-medium">Harina de arroz</td>
                      <td className="py-3 px-4">Usa avena sin gluten o sorgo (1:1). Miga más suave y color ligeramente dorado.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Harina de avena sin gluten</td>
                      <td className="py-3 px-4">Usa arroz o mijo (1:1). Miga ligera y sabor neutro.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Harina de garbanzo</td>
                      <td className="py-3 px-4">Usa quinoa o lenteja (1:1). Sabor más suave.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Harina de almendra</td>
                      <td className="py-3 px-4">Usa ½ taza de coco + 3–4 cucharadas extra de líquido. Más fibra y toque dulce.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Harina de coco</td>
                      <td className="py-3 px-4">Usa almendra o avena (1½ tazas) y reduce líquido. Textura más esponjosa.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Fécula de maíz</td>
                      <td className="py-3 px-4">Usa tapioca o papa (1:1). Misma ligereza y suavidad.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Psyllium</td>
                      <td className="py-3 px-4">Usa ½ cucharadita de goma xantana o 2 cucharadas de chía + 4 cucharadas de agua. Misma elasticidad.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Yuca rallada</td>
                      <td className="py-3 px-4">Usa papa o batata cocida (1:1). Textura suave y sabor neutro.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Basic Combinations */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Combinaciones básicas según el resultado que buscas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 rounded-lg border bg-card">
                  <h3 className="font-semibold mb-2">🍕 Masa elástica (pizza, wraps)</h3>
                  <p className="text-sm text-muted-foreground">2 partes de harina de arroz + 1 parte de tapioca</p>
                </div>
                <div className="p-4 rounded-lg border bg-card">
                  <h3 className="font-semibold mb-2">🍞 Pan liviano y aireado</h3>
                  <p className="text-sm text-muted-foreground">2 partes de arroz + 1 parte de maicena + 1 parte de avena</p>
                </div>
                <div className="p-4 rounded-lg border bg-card">
                  <h3 className="font-semibold mb-2">🌾 Pan húmedo o integral</h3>
                  <p className="text-sm text-muted-foreground">1 parte de sorgo + 1 parte de avena + 1 parte de fécula</p>
                </div>
                <div className="p-4 rounded-lg border bg-card">
                  <h3 className="font-semibold mb-2">🥟 Empanadas o tartas firmes</h3>
                  <p className="text-sm text-muted-foreground">2 partes de arroz + 1 parte de maicena + 1 parte de garbanzo</p>
                </div>
                <div className="p-4 rounded-lg border bg-card">
                  <h3 className="font-semibold mb-2">🧁 Pan dulce o bollería</h3>
                  <p className="text-sm text-muted-foreground">2 partes de arroz + 1 parte de papa + 1 parte de almendra</p>
                </div>
                <div className="p-4 rounded-lg border bg-card">
                  <h3 className="font-semibold mb-2">🥑 Versión low-carb</h3>
                  <p className="text-sm text-muted-foreground">2 partes de almendra + 1 parte de coco + 1 huevo adicional</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How to Adapt Recipes */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Cómo adaptar una receta con harina de trigo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🌾</span>
                  Harinas y líquidos
                </h3>
                <p className="mb-3">
                  Por cada 1 taza de harina de trigo, usa <strong>1 taza de mezcla sin gluten</strong> (50% base + 30% fécula + 20% harina complementaria).
                </p>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-medium mb-2">Ejemplo:</p>
                  <p className="text-sm">
                    ½ taza de harina de arroz + ⅓ taza de maicena + 3 cucharadas de avena o almendra.
                  </p>
                </div>
                <p className="mt-3 text-muted-foreground">
                  Agrega 2–3 cucharadas adicionales de líquido (agua, leche vegetal o aceite).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔗</span>
                  Aglutinantes (reemplazo del gluten)
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Usa <strong>1 cucharada de psyllium</strong> o <strong>½ cucharadita de goma xantana</strong> por cada 250 g de harina.</li>
                  <li>• También puedes usar <strong>1 cucharada de chía o linaza molida + 3 cucharadas de agua</strong> (deja reposar 10 minutos).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔥</span>
                  Levadura, polvo y horneado
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Las levaduras funcionan igual, pero las masas sin gluten <strong>no se amasan, solo se mezclan</strong>.</li>
                  <li>• El levado es más corto (<strong>20–40 min</strong>).</li>
                  <li>• Hornea <strong>10°C menos</strong> de lo habitual, ya que doran más rápido.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">💧</span>
                  Grasas y aceites
                </h3>
                <p className="text-muted-foreground">
                  Agrega un poco más de aceite (5–10 ml por pan) para mejorar la textura y conservar la humedad.
                </p>
              </div>

              <div className="p-5 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                <h3 className="font-semibold mb-2">💡 Consejo general</h3>
                <p className="text-sm mb-2">
                  <strong>No busques imitar exactamente la textura del trigo:</strong> las masas sin gluten son distintas, pero igual de deliciosas.
                </p>
                <p className="text-sm">
                  Combina siempre al menos dos tipos de harinas: una base (arroz o avena) y una fécula (maicena o tapioca).
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Chef Tips */}
          <Card className="mb-8 border-primary/20">
            <CardHeader className="bg-primary/5">
              <CardTitle className="text-2xl">⭐ Tips rápidos de la chef Matilda</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-2xl flex-shrink-0">⭐</span>
                  <p><strong>Si la masa se agrieta,</strong> añade 1–2 cucharadas de agua tibia o aceite.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl flex-shrink-0">⭐</span>
                  <p><strong>Si está pegajosa,</strong> incorpora 1–2 cucharadas de harina de arroz o fécula.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl flex-shrink-0">⭐</span>
                  <p><strong>Si no dora,</strong> pincela con un poco de miel o leche vegetal.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl flex-shrink-0">⭐</span>
                  <p><strong>Si se desarma al cortar,</strong> añade 1 cucharadita extra de psyllium o linaza molida.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl flex-shrink-0">⭐</span>
                  <p><strong>Si la miga queda seca,</strong> agrega 1 cucharada de aceite o puré (banana, manzana o calabaza).</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SubstitutionGuide;
