
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";

const Hero = () => {
  const [isToggled, setIsToggled] = useState(false);
  
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    if (isToggled) {
      const timer = setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isToggled]);

  return (
    <section id="hero" className="pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              I build web solutions for your business and help increase its visibility online.
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-8">
              Ionuț Cornea – Full-Stack PHP & Vue Developer
            </h2>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="font-medium">
                <a href="#projects">View Portfolio</a>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="font-medium">
                <a href="#contact">
                  Book a Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <Button asChild variant="secondary" size="lg" className="font-medium">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/3 relative animate-fade-in animate-delay-300">
            <div className="flex flex-col items-center">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-sm font-medium">Hire Ionut now</span>
                <Switch 
                  checked={isToggled} 
                  onCheckedChange={handleToggle}
                  className="data-[state=checked]:bg-green-500"
                />
              </div>
              
              <div className={`relative z-10 p-2 rounded-full 
                ${isToggled 
                  ? 'transform translate-x-4 border-4 border-green-500' 
                  : 'border-4 border-brand-blue dark:border-brand-lightBlue'} 
                transition-all duration-300 ease-in-out`}
              >
                <img
                  src="/lovable-uploads/f06cafc4-2749-4ed4-a74a-abd98575437c.png"
                  alt="Ionuț Cornea"
                  className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
