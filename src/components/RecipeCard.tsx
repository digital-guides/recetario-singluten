import { Link } from "react-router-dom";
import { Recipe } from "@/types/recipe";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users } from "lucide-react";

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Link to={`/receta/${recipe.id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.01] border-border bg-card">
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
            {recipe.title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {recipe.prepTime && (
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{recipe.prepTime}</span>
              </div>
            )}
            {recipe.servings && (
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{recipe.servings}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
