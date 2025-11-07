import { Link } from "react-router-dom";
import { Category } from "@/types/recipe";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Timer, Zap, Flame, Wheat, Sprout, 
  Cake, Sparkles, Dumbbell, Globe, LucideIcon 
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  timer: Timer,
  zap: Zap,
  flame: Flame,
  wheat: Wheat,
  sprout: Sprout,
  cake: Cake,
  sparkles: Sparkles,
  dumbbell: Dumbbell,
  globe: Globe,
};

interface CategoryCardProps {
  category: Category;
  recipeCount: number;
}

export const CategoryCard = ({ category, recipeCount }: CategoryCardProps) => {
  const Icon = iconMap[category.icon] || Timer;
  
  return (
    <Link to={`/categoria/${category.id}`}>
      <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer border-border bg-card overflow-hidden">
        <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
          <Icon className="w-20 h-20 text-primary group-hover:scale-110 transition-transform duration-300" />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
          <p className="text-xs text-muted-foreground">
            {recipeCount} {recipeCount === 1 ? 'receta' : 'recetas'}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};
