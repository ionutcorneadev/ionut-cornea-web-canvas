
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
      description: "A full-featured e-commerce platform with multi-vendor support, payment processing, and inventory management.",
      technologies: ["Laravel", "Vue.js", "MySQL", "Stripe"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "CRM System",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
      description: "Customer relationship management system with dashboard analytics, task management, and email integration.",
      technologies: ["PHP", "Vue.js", "REST API", "Redis"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Real Estate Platform",
      image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
      description: "Property listing and management system with interactive maps, search filters, and agent portals.",
      technologies: ["Laravel", "Vue.js", "PostgreSQL", "Mapbox"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Healthcare Management App",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
      description: "Patient management system with appointment scheduling, medical records, and billing integration.",
      technologies: ["PHP", "Vue.js", "MySQL", "Docker"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Learning Management System",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
      description: "Online course platform with content management, video streaming, and student progress tracking.",
      technologies: ["Laravel", "Vue.js", "AWS", "Redis"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3",
      description: "Collaboration tool for teams with task assignments, deadlines, and reporting capabilities.",
      technologies: ["PHP", "Vue.js", "WebSockets", "MySQL"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4">Portfolio</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            A selection of my recent work, demonstrating my skills and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-2 border-border hover:border-brand-blue dark:hover:border-brand-lightBlue transition-all duration-300 flex flex-col h-full animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="font-normal text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button asChild variant="default" className="flex-1">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
