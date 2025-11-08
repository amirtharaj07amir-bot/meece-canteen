import { Clock, Shield, Star, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Order in seconds, get your food in minutes. No more waiting in long queues."
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Multiple payment options with complete security for your transactions."
  },
  {
    icon: Star,
    title: "Quality Food",
    description: "Fresh ingredients, hygienic preparation, and delicious taste guaranteed."
  },
  {
    icon: Clock,
    title: "Track Orders",
    description: "Real-time updates from preparation to delivery. Always know your order status."
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose MEC Canteen?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the future of campus dining with our smart ordering system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
