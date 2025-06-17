
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      name: "Alex Smith",
      role: "CTO at TechStart",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      content: "Ionuț delivered our e-commerce platform ahead of schedule with all the features we requested. His code is clean, well-documented, and easy to maintain. We've seen a 40% increase in conversions since launch."
    },
    {
      name: "Maria Johnson",
      role: "Founder at DesignHub",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "Working with Ionuț was the best decision for our startup. He understood our vision perfectly and translated it into a beautiful, functional application. He's responsive, professional, and truly cares about the success of his clients."
    },
    {
      name: "David Chen",
      role: "Product Manager at SaaS Co",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "We hired Ionuț to optimize our existing Laravel application that was struggling with performance issues. Not only did he improve page load times by 60%, but he also identified and fixed security vulnerabilities we weren't aware of."
    },
    {
      name: "Sara Williams",
      role: "CEO at HealthTech",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      content: "Ionuț built our patient management system from scratch, integrating with multiple third-party APIs. His deep knowledge of both back-end and front-end technologies made the development process smooth and efficient."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const renderTestimonialCard = (testimonial, index) => (
    <Card key={index} className="border-2 overflow-hidden flex-1">
      <CardContent className="pt-6 pb-8 px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex-shrink-0 mb-4">
            <img 
              src={testimonial.image} 
              alt={testimonial.name}
              className="w-16 h-16 rounded-full border-4 border-brand-blue dark:border-brand-lightBlue"
            />
          </div>
          <div className="mb-4">
            <div className="text-lg font-semibold">{testimonial.name}</div>
            <div className="text-muted-foreground text-sm">{testimonial.role}</div>
          </div>
          <div className="text-base italic">
            "{testimonial.content}"
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // For mobile: show one testimonial per slide
  // For desktop: show two testimonials per slide
  const getVisibleTestimonials = () => {
    return [
      testimonials[currentIndex],
      testimonials[(currentIndex + 1) % testimonials.length]
    ];
  };

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">{t('testimonials.badge')}</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              {/* Mobile view: Single testimonial */}
              <div className="block md:hidden">
                <div className="flex transition-transform duration-500 ease-in-out">
                  {renderTestimonialCard(testimonials[currentIndex], currentIndex)}
                </div>
              </div>
              
              {/* Desktop view: Two testimonials side by side */}
              <div className="hidden md:block">
                <div className="flex gap-6">
                  {getVisibleTestimonials().map((testimonial, index) => 
                    renderTestimonialCard(testimonial, currentIndex + index)
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <Button 
                  key={index} 
                  variant={index === currentIndex ? "default" : "outline"}
                  size="icon"
                  className="w-3 h-3 p-0 rounded-full"
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <Button 
                onClick={prevTestimonial} 
                variant="outline" 
                size="icon"
                className="rounded-full"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button 
                onClick={nextTestimonial} 
                variant="outline" 
                size="icon"
                className="rounded-full"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
