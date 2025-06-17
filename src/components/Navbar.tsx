import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: t('navbar.services'), href: "#services" },
    { name: t('navbar.projects'), href: "#projects" },
    { name: t('navbar.about'), href: "#about" },
    { name: t('navbar.testimonials'), href: "#testimonials" },
    { name: t('navbar.contact'), href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/c84c1cdc-f256-4d0a-930e-85ffbb27a0a8.png" 
              alt="Ionuț Cornea" 
              className="h-8 w-auto"
            />
            <span className="text-lg font-semibold">IONUT CORNEA</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-sm font-medium hover:text-brand-blue dark:hover:text-brand-lightBlue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="ml-4 flex items-center gap-2">
            <ThemeToggle />
            <Button variant="default" asChild>
              <a href="#contact">{t('navbar.contactMe')}</a>
            </Button>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-4 text-base font-medium border-b border-border"
              >
                {link.name}
              </a>
            ))}
            <div className="py-4">
              <Button variant="default" className="w-full" asChild>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  {t('navbar.contactMe')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
