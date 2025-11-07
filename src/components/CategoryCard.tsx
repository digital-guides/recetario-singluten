import { Link } from "react-router-dom";
import { Category } from "@/types/recipe";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
  recipeCount: number;
}

export const CategoryCard = ({ category, recipeCount }: CategoryCardProps) => {
  return (
    <Link to={`/categoria/${category.id}`}>
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-border bg-card">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg text-foreground mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{recipeCount} recetas</p>
            </div>
            <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
