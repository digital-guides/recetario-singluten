import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { recipes } from "@/data/recipes";
import { RecipeCard } from "@/components/RecipeCard";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    if (searchQuery) {
      setSearchParams({ q: searchQuery });
    }
  }, [searchQuery, setSearchParams]);

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some((ing) =>
        ing.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

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
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Buscar Recetas
          </h1>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Buscar por nombre o ingrediente..."
          />
        </div>
      </header>

      {/* Results */}
      <main className="container mx-auto px-4 py-6">
        {searchQuery && (
          <p className="text-muted-foreground mb-4">
            {filteredRecipes.length} resultado{filteredRecipes.length !== 1 ? "s" : ""} para "{searchQuery}"
          </p>
        )}

        {filteredRecipes.length > 0 ? (
          <div className="grid gap-3">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : searchQuery ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No se encontraron recetas</p>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Escribe algo en el buscador para encontrar recetas
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default SearchResults;
