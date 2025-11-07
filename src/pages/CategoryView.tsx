import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { categories, recipes } from "@/data/recipes";
import { RecipeCard } from "@/components/RecipeCard";
import { SearchBar } from "@/components/SearchBar";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CategoryView = () => {
  const { categoryId } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  const category = categories.find((cat) => cat.id === categoryId);
  const categoryRecipes = recipes.filter((recipe) => recipe.categoryId === categoryId);

  const filteredRecipes = categoryRecipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Categoría no encontrada</h2>
          <Link to="/">
            <Button variant="default">Volver al inicio</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" className="mb-4 -ml-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-foreground mb-2">{category.name}</h1>
          <p className="text-muted-foreground mb-4">{categoryRecipes.length} recetas</p>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={`Buscar en ${category.name}...`}
          />
        </div>
      </header>

      {/* Recipes List */}
      <main className="container mx-auto px-4 py-6">
        {filteredRecipes.length > 0 ? (
          <div className="grid gap-3">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No se encontraron recetas</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default CategoryView;
