import { useParams, Link } from "react-router-dom";
import { recipes, categories } from "@/data/recipes";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, Users, ChefHat, Printer } from "lucide-react";

const handlePrint = () => {
  window.print();
};

const RecipeView = () => {
  const { recipeId } = useParams();
  const recipe = recipes.find((r) => r.id === recipeId);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Receta no encontrada</h2>
          <Link to="/">
            <Button variant="default">Volver al inicio</Button>
          </Link>
        </div>
      </div>
    );
  }

  const category = categories.find((cat) => cat.id === recipe.categoryId);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50 print:hidden">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to={`/categoria/${recipe.categoryId}`}>
              <Button variant="ghost" className="-ml-2">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a {category?.name}
              </Button>
            </Link>
            <Button onClick={handlePrint} variant="outline">
              <Printer className="w-4 h-4 mr-2" />
              Imprimir
            </Button>
          </div>
        </div>
      </header>

      {/* Recipe Content */}
      <main className="container mx-auto px-4 py-6 max-w-3xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-3">{recipe.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            {recipe.prepTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{recipe.prepTime}</span>
              </div>
            )}
            {recipe.servings && (
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{recipe.servings}</span>
              </div>
            )}
          </div>
        </div>

        {/* Ingredients */}
        <Card className="mb-6 border-border bg-card">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-primary" />
              Ingredientes
            </h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-2 text-foreground">
                  <span className="text-primary mt-1.5">•</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="border-border bg-card">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Preparación</h2>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <p className="text-foreground pt-1">{instruction}</p>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default RecipeView;
