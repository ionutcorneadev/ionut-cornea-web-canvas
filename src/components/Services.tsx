
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Custom Web Apps",
      description: "End-to-end development with Laravel and Vue.js, focused on building scalable and maintainable applications.",
      features: [
        "Full-stack development with PHP/Laravel",
        "Interactive UIs with Vue.js",
        "Database design and optimization",
        "User authentication and authorization"
      ],
      icon: "🚀"
    },
    {
      title: "API Integrations / Automation",
      description: "Seamlessly connect different services and automate workflows to improve efficiency and productivity.",
      features: [
        "RESTful API development",
        "Third-party service integrations",
        "Business process automation",
        "Webhook implementation and management"
      ],
      icon: "🔄"
    },
    {
      title: "Performance Optimization",
      description: "Improve application speed and efficiency through code optimization, caching strategies and SEO best practices.",
      features: [
        "Front-end performance optimization",
        "Database query optimization",
        "Core Web Vitals improvement",
        "Technical SEO implementation"
      ],
      icon: "⚡"
    },
    {
      title: "Post-launch Support",
      description: "Ongoing maintenance and support to keep your application running smoothly after deployment.",
      features: [
        "Bug fixes and troubleshooting",
        "Feature enhancements",
        "Security updates",
        "Performance monitoring"
      ],
      icon: "🛠️"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/50 dark:bg-muted/10">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">Services</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Specialized Development Services
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to deployment, I deliver full-stack solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-border hover:border-brand-blue dark:hover:border-brand-lightBlue transition-colors duration-300 h-full overflow-hidden animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-4xl">{service.icon}</span>
                  <Badge className="bg-brand-blue dark:bg-brand-lightBlue">Service</Badge>
                </div>
                <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="bg-accent/20 rounded-full p-1 mt-1">
                        <Check className="h-3 w-3 text-accent" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
