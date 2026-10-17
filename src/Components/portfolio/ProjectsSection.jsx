import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../../data';
import { SHELL, SectionIntro, Reveal, PillButton } from './shared';
import { GlowingEffect } from './GlowingEffect';

/** every outbound link of a project, in one shape */
const linksOf = (project) => [
  ...(project.link ? [{ label: 'View project', url: project.link }] : []),
  ...(project.links || []),
];

const Links = ({ project }) => {
  const links = linksOf(project);
  return links.length ? (
    <div className="mt-auto flex flex-wrap gap-2 pt-2">
      {links.map((l) => (
        <PillButton key={l.url} variant="ghost" size="sm" href={l.url}>
          {l.label}
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
        </PillButton>
      ))}
    </div>
  ) : null;
};

/** year, and the award if there is one, as one quiet line */
const Meta = ({ project }) => (
  <p className="flex flex-wrap items-center gap-x-2 font-body text-[13px] text-th-muted">
    <span className="font-mono text-[12px]">{project.status}</span>
    {project.awards?.length > 0 && (
      <>
        <span aria-hidden="true" className="text-th-faint">
          ·
        </span>
        <span className="font-medium text-ac-ink">{project.awards.join(' · ')}</span>
      </>
    )}
  </p>
);

export default function ProjectsSection() {
  const [featured, ...rest] = projectsData.projects;
  return (
    <section id="projects" className={`relative scroll-mt-24 py-20 ${SHELL}`}>
      <SectionIntro title={projectsData.title} aside={projectsData.description} />

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {/* the first project opens the grid across both columns */}
        <Reveal as="article" className="glass-card flex flex-col gap-5 p-6 md:col-span-2 md:p-9">
          <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} />
          <Meta project={featured} />
          <div className="max-w-3xl">
            <h3 className="text-[26px] leading-[1.12] tracking-[-0.03em] text-th-heading sm:text-[32px]">{featured.title}</h3>
            <p className="mt-3 font-body text-[16px] leading-relaxed text-th-body md:text-[17px]">{featured.description}</p>
          </div>
          <Links project={featured} />
        </Reveal>

        {rest.map((project, index) => (
          <Reveal as="article" key={project.title} delay={0.05 * (index % 2)} className="glass-card flex flex-col gap-4 p-6 md:p-7">
            <GlowingEffect spread={40} proximity={64} inactiveZone={0.01} borderWidth={2} />
            <Meta project={project} />
            <div>
              <h3 className="text-[20px] leading-[1.2] tracking-[-0.02em] text-th-heading">{project.title}</h3>
              <p className="mt-2 font-body text-[14.5px] leading-relaxed text-th-body">{project.description}</p>
            </div>
            <Links project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
