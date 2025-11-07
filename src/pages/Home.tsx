import { useState } from "react";
import { categories, recipes } from "@/data/recipes";
import { CategoryCard } from "@/components/CategoryCard";
import { SearchBar } from "@/components/SearchBar";
import { ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const getRecipeCount = (categoryId: string) => {
    return recipes.filter((recipe) => recipe.categoryId === categoryId).length;
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <ChefHat className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Mi Recetario</h1>
          </div>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-foreground mb-2">Categorías</h2>
          <p className="text-muted-foreground">
            {categories.length} categorías • {recipes.length} recetas en total
          </p>
        </div>

        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                recipeCount={getRecipeCount(category.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No se encontraron categorías</p>
          </div>
        )}

        {searchQuery && (
          <div className="mt-8">
            <Link
              to={`/buscar?q=${encodeURIComponent(searchQuery)}`}
              className="text-primary hover:underline font-medium"
            >
              Ver todas las recetas que coinciden con "{searchQuery}" →
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
