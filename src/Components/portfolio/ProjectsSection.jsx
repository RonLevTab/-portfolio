import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, Badge } from '../../ui';
import { Bot, Eye, Globe, Award, Calendar, Search, Sprout, Shield, MessageSquare, BarChart, ExternalLink } from 'lucide-react';
import { projectsData } from '../../data';

export default function ProjectsSection() {
  const iconMap = {
    'Bot': Bot,
    'Eye': Eye,
    'Globe': Globe,
    'Search': Search,
    'Sprout': Sprout,
    'Shield': Shield,
    'MessageSquare': MessageSquare,
    'BarChart': BarChart
  };

  const projects = projectsData.projects.map(project => ({
    ...project,
    icon: iconMap[project.icon]
  }));

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
            {projectsData.title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {projectsData.description}
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

                        <div>
                          <div className="flex flex-wrap gap-2 mb-4">
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
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                            >
                              <span>View Project</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
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