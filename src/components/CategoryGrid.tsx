import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import vegIcon from "@/assets/veg-icon.jpg";
import nonvegIcon from "@/assets/nonveg-icon.jpg";
import beveragesIcon from "@/assets/beverages-icon.jpg";
import snacksIcon from "@/assets/snacks-icon.jpg";

const categories = [
  {
    name: "Vegetarian",
    description: "Fresh veg dishes & salads",
    image: vegIcon,
    color: "from-green-500 to-green-600",
    link: "/menu?category=veg"
  },
  {
    name: "Non-Vegetarian",
    description: "Delicious chicken & eggs",
    image: nonvegIcon,
    color: "from-orange-500 to-red-500",
    link: "/menu?category=nonveg"
  },
  {
    name: "Beverages",
    description: "Refreshing drinks & juices",
    image: beveragesIcon,
    color: "from-blue-500 to-purple-500",
    link: "/menu?category=beverages"
  },
  {
    name: "Snacks",
    description: "Quick bites & combos",
    image: snacksIcon,
    color: "from-yellow-500 to-orange-500",
    link: "/menu?category=snacks"
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our diverse menu with something for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={category.name} 
              to={category.link}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Card className="overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-2 h-full">
                <div className={`h-48 bg-gradient-to-br ${category.color} relative overflow-hidden`}>
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
