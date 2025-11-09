import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";
import mecLogo from "@/assets/mec-logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={mecLogo} 
              alt="MEC Canteen Logo" 
              className="w-10 h-10 rounded-full shadow-md group-hover:shadow-glow transition-all object-cover"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MEC Canteen
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">Smart Ordering</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/menu" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Menu
            </Link>
            <Link to="/orders" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Orders
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                0
              </span>
            </Button>
            <Button variant="outline" size="sm" asChild className="hidden sm:flex">
              <Link to="/auth">
                <User className="h-4 w-4 mr-2" />
                Login
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              <Link 
                to="/menu" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                to="/orders" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Orders
              </Link>
              <Link 
                to="/about" 
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Button variant="outline" size="sm" asChild className="justify-start sm:hidden">
                <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
