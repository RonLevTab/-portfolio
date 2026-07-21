import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Eye, Globe, Award, Calendar, Search, Sprout, Shield, MessageSquare, BarChart, ArrowUpRight, Trophy } from 'lucide-react';
import { projectsData } from '../../data';
import SectionHeading from './SectionHeading';

export default function ProjectsSection() {
  const iconMap = { Bot, Eye, Globe, Search, Sprout, Shield, MessageSquare, BarChart };

  const projects = projectsData.projects.map((project) => ({
    ...project,
    icon: iconMap[project.icon],
  }));

  return (
    <section id="projects" className="py-24 md:py-28 bg-th-page">
      <div className="max-w-6xl mx-auto section-padding">
        <SectionHeading kicker="Work" title={projectsData.title} description={projectsData.description} />

        <div className="space-y-6">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
                className="editorial-card p-7 md:p-9"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-52 flex-shrink-0 space-y-3">
                    <span className="icon-tile h-14 w-14">
                      <IconComponent className="h-6 w-6" />
                    </span>
                    <div className="flex items-center gap-2 text-sm text-th-muted">
                      <Calendar className="h-4 w-4" />
                      {project.status}
                    </div>
                    {project.award && (
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-th-line bg-th-surface-alt px-3 py-1 text-xs font-medium text-th-heading">
                        <Award className="h-3.5 w-3.5" />
                        {project.award}
                      </div>
                    )}
                    {project.awards &&
                      project.awards.map((awardItem, aIndex) => (
                        <div
                          key={aIndex}
                          className="inline-flex items-center gap-1.5 rounded-full border border-th-line bg-th-surface-alt px-3 py-1 text-xs font-medium text-th-heading mr-1.5"
                        >
                          <Trophy className="h-3.5 w-3.5" />
                          {awardItem}
                        </div>
                      ))}
                  </div>

                  <div className="flex-1 space-y-5">
                    <div>
                      <h3 className="font-serif text-2xl text-th-heading mb-2">{project.title}</h3>
                      <p className="text-lg leading-relaxed text-th-body">{project.description}</p>
                    </div>

                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2.5 text-th-body">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-th-heading/50" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-1">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost !px-5 !py-2.5 !text-[12px]"
                        >
                          View project
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                      {project.links &&
                        project.links.map((linkItem, lIndex) => (
                          <a
                            key={lIndex}
                            href={linkItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost !px-5 !py-2.5 !text-[12px]"
                          >
                            {linkItem.label}
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
