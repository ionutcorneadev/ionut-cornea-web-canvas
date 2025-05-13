
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Trees, Clock } from "lucide-react";

const About = () => {
  const certifications = [
    { name: "Laravel Certified Developer" },
    { name: "Vue.js Advanced Certification" },
    { name: "GitHub Copilot Expert" },
    { name: "AWS Cloud Practitioner" }
  ];

  const process = [
    { 
      title: "Discovery", 
      description: "Understanding your needs and project goals through in-depth consultation.",
      delay: 100
    },
    { 
      title: "Planning", 
      description: "Creating detailed specifications and project roadmap with clear milestones.",
      delay: 200
    },
    { 
      title: "Design & Development", 
      description: "Building your solution using modern development practices and regular updates.",
      delay: 300
    },
    { 
      title: "Testing", 
      description: "Rigorous quality assurance to ensure everything works flawlessly.",
      delay: 400
    },
    { 
      title: "Deployment", 
      description: "Smooth launch with complete documentation and knowledge transfer.",
      delay: 500
    },
    { 
      title: "Support", 
      description: "Ongoing maintenance and support to keep your application running perfectly.",
      delay: 600
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50 dark:bg-muted/10">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <Badge variant="outline" className="mb-4">About Me</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Nice to meet you!
            </h2>
            
            <div className="mb-8 text-lg space-y-4">
              <p>
                I'm a passionate developer with 4+ years of PHP experience. I love working with teams that build useful, well-thought-out solutions that solve real business problems.
              </p>
              <p>
                My approach combines technical expertise with a deep understanding of user needs, ensuring that every project I work on delivers true value.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">When I'm not coding...</h3>
              <div className="flex flex-wrap gap-4">
                <Card className="flex items-center p-4 w-full sm:w-auto">
                  <Mountain className="h-5 w-5 text-brand-blue dark:text-brand-lightBlue mr-2" />
                  <span>Hiking</span>
                </Card>
                <Card className="flex items-center p-4 w-full sm:w-auto">
                  <Trees className="h-5 w-5 text-brand-blue dark:text-brand-lightBlue mr-2" />
                  <span>Nature</span>
                </Card>
                <Card className="flex items-center p-4 w-full sm:w-auto">
                  <Clock className="h-5 w-5 text-brand-blue dark:text-brand-lightBlue mr-2" />
                  <span>Long walks</span>
                </Card>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Certifications & Skills</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index}
                    className="bg-brand-blue dark:bg-brand-lightBlue"
                  >
                    {cert.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">My Development Process</h3>
            <div className="relative">
              <div className="absolute left-5 top-0 h-full w-0.5 bg-border dark:bg-muted"></div>
              
              <div className="space-y-8">
                {process.map((step, index) => (
                  <div key={index} className="relative animate-fade-in" style={{animationDelay: `${step.delay}ms`}}>
                    <div className="flex items-start">
                      <div className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full bg-brand-blue dark:bg-brand-lightBlue text-white">
                        {index + 1}
                      </div>
                      <Card className="ml-16 w-full">
                        <CardContent className="pt-6">
                          <h4 className="font-bold text-lg">{step.title}</h4>
                          <p className="text-muted-foreground">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 flex justify-center md:justify-end">
              <Badge className="text-base py-3 px-6 bg-accent">
                100% On-Time Delivery
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
