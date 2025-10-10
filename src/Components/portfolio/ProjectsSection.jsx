import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Badge } from '../../ui';
import { Bot, Eye, Globe, Award, Calendar } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI Agent Order Entry System",
      description: "Developing an intelligent order entry system using AI agents to automate and optimize order processing with natural language processing for order interpretation and validation.",
      icon: Bot,
      status: "Current",
      technologies: ["Python", "LLM APIs", "Azure", "NLP"],
      highlights: [
        "Automated order processing workflow",
        "Natural language order interpretation",
        "Business systems integration",
        "Intelligent validation system"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Computer Vision Business Application",
      description: "Award-winning computer vision solution that earned Top 6 Business Ideas recognition at Breda University for innovative practical business applications.",
      icon: Eye,
      status: "Apr 2024",
      award: "Top 6 Business Ideas",
      technologies: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
      highlights: [
        "University award winner",
        "Innovative CV technology application",
        "Practical business solution",
        "Proof-of-concept development"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Geisha Lounge Website Migration",
      description: "Successfully migrated and maintained restaurant website from Wix to WordPress, implementing SEO best practices that resulted in improved search visibility.",
      icon: Globe,
      status: "2024",
      technologies: ["WordPress", "SEO", "Web Development", "Migration"],
      highlights: [
        "Platform migration execution",
        "SEO optimization implementation",
        "Improved search visibility",
        "Enhanced customization capabilities"
      ],
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing innovative solutions in AI, computer vision, and web development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
                  <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg mb-4`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                          <Calendar className="w-4 h-4" />
                          {project.status}
                        </div>
                        {project.award && (
                          <div className="flex items-center gap-2 text-sm text-amber-600 font-medium">
                            <Award className="w-4 h-4" />
                            {project.award}
                          </div>
                        )}
                      </div>

                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                          <p className="text-lg text-slate-600 leading-relaxed">{project.description}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Key Features:</h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {project.highlights.map((highlight, hIndex) => (
                              <li key={hIndex} className="flex items-center gap-2 text-slate-600">
                                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              variant="secondary" 
                              className="px-3 py-1 bg-slate-100 text-slate-700 font-medium"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}