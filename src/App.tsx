import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryView from "./pages/CategoryView";
import RecipeView from "./pages/RecipeView";
import SearchResults from "./pages/SearchResults";
import SubstitutionGuide from "./pages/SubstitutionGuide";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoria/guia-sustituciones" element={<SubstitutionGuide />} />
          <Route path="/categoria/:categoryId" element={<CategoryView />} />
          <Route path="/receta/:recipeId" element={<RecipeView />} />
          <Route path="/buscar" element={<SearchResults />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
