import { Button } from "./ui/button";
import { ArrowRight, Clock, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-canteen.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern college canteen with students enjoying meals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Madras Engineering College
            <br />
            <span className="bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
              Canteen
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
            Smart Ordering for Smart Students
          </p>
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Skip the queue, order ahead, and enjoy fresh meals on campus. Fast, easy, and delicious!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all group"
              asChild
            >
              <Link to="/menu">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Order Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all"
              asChild
            >
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Clock className="w-8 h-8 text-accent-light mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Quick Service</h3>
              <p className="text-white/70 text-sm">Order in advance and pick up when ready</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <ShoppingBag className="w-8 h-8 text-accent-light mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Wide Variety</h3>
              <p className="text-white/70 text-sm">From snacks to full meals, we've got it all</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-8 h-8 bg-accent-light rounded-full flex items-center justify-center mb-3 mx-auto text-white font-bold">
                ₹
              </div>
              <h3 className="text-white font-semibold mb-2">Student Friendly</h3>
              <p className="text-white/70 text-sm">Affordable prices for every budget</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
