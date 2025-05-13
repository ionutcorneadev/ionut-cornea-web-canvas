
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              I build fast, secure & <span className="text-brand-blue dark:text-brand-lightBlue">scalable</span> web apps – <br className="hidden md:block"/> with PHP & Vue.js.
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-4">
              Ionuț Cornea – Full-Stack PHP & Vue Developer
            </h2>
            
            <p className="text-lg mb-8">
              I help startups and businesses launch modern web solutions that solve real problems.
            </p>
            
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
            <div className="relative z-10 bg-white dark:bg-gray-800 p-2 rounded-full border-4 border-brand-blue dark:border-brand-lightBlue shadow-xl">
              <img
                src="/lovable-uploads/f06cafc4-2749-4ed4-a74a-abd98575437c.png"
                alt="Ionuț Cornea"
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 flex items-center justify-center bg-brand-blue text-white dark:bg-accent rounded-full p-4 shadow-lg">
              <img 
                src="/lovable-uploads/c84c1cdc-f256-4d0a-930e-85ffbb27a0a8.png" 
                alt="Personal Logo" 
                className="h-12 w-12"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
