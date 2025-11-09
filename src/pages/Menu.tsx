import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Drumstick, Clock, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  is_veg: boolean;
  preparation_time: number;
  category_id: string;
  is_available: boolean;
}

interface Category {
  id: string;
  name: string;
}

const Menu = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryFilter);
  const { toast } = useToast();

  useEffect(() => {
    fetchCategories();
    fetchMenuItems();
  }, [selectedCategory]);

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("display_order");

    if (error) {
      console.error("Error fetching categories:", error);
      return;
    }

    setCategories(data || []);
  };

  const fetchMenuItems = async () => {
    setLoading(true);
    let query = supabase
      .from("menu_items")
      .select("*, categories(name)")
      .eq("is_available", true);

    if (selectedCategory) {
      const category = categories.find(
        (c) => c.name.toLowerCase() === selectedCategory.toLowerCase()
      );
      if (category) {
        query = query.eq("category_id", category.id);
      }
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching menu items:", error);
      toast({
        title: "Error",
        description: "Failed to load menu items",
        variant: "destructive",
      });
    } else {
      setMenuItems(data || []);
    }

    setLoading(false);
  };

  const handleAddToCart = (item: MenuItem) => {
    toast({
      title: "Added to cart",
      description: `${item.name} added to your cart`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Menu
            </h1>
            <p className="text-muted-foreground text-lg">
              Delicious meals prepared fresh for you
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="whitespace-nowrap"
            >
              All Items
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory?.toLowerCase() === category.name.toLowerCase()
                    ? "default"
                    : "outline"
                }
                onClick={() => setSelectedCategory(category.name)}
                className="whitespace-nowrap"
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Menu Items Grid */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading menu...</p>
            </div>
          ) : menuItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No menu items available at the moment.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-6">
                    {/* Item Header */}
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-lg flex-1">
                        {item.name}
                      </h3>
                      {item.is_veg ? (
                        <Leaf className="w-5 h-5 text-green-600 flex-shrink-0 ml-2" />
                      ) : (
                        <Drumstick className="w-5 h-5 text-red-600 flex-shrink-0 ml-2" />
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Prep Time */}
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                      <Clock className="w-3 h-3" />
                      <span>{item.preparation_time} mins</span>
                    </div>

                    {/* Price and Add Button */}
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold text-primary">
                        ₹{item.price}
                      </div>
                      <Button
                        size="sm"
                        onClick={() => handleAddToCart(item)}
                        className="gap-1"
                      >
                        <Plus className="w-4 h-4" />
                        Add
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
