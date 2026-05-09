"use client";

import { useState } from "react";
import { additionalProjects, featuredProjects } from "@/data/portfolio";

const projects = [...featuredProjects, ...additionalProjects];

type Project = (typeof projects)[number];

function getProjectAccent(project: Project) {
  return "accent" in project
    ? project.accent
    : "from-[#101c3d] via-[#205375] to-[#3e54d3]";
}

function getProjectHighlights(project: Project) {
  return "highlights" in project ? project.highlights.slice(0, 5) : [];
}

function getProjectPreviewLabel(project: Project) {
  return "previewLabel" in project ? project.previewLabel : "Additional build";
}

function getProjectPreviewDomain(project: Project) {
  if ("previewDomain" in project) {
    return project.previewDomain;
  }

  return new URL(project.liveUrl).hostname;
}

export function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="cinematic-section py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
            Projects
          </p>
          <h2 className="font-display text-4xl text-[var(--color-ink)] sm:text-5xl">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            Polished, real-world applications built with frontend craft,
            API-driven workflows, and practical product thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {visibleProjects.map((project, index) => {
            const highlights = getProjectHighlights(project);

            return (
              <article
                key={project.name}
                className="project-card surface-panel flex h-full w-full flex-col overflow-hidden rounded-[1.75rem]"
              >
                <div
                  className={`relative min-h-64 bg-gradient-to-br ${getProjectAccent(project)} p-6 text-white`}
                >
                  <div className="absolute inset-0 bg-white/5" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
                        0{index + 1}
                      </p>
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
                        {index < 3 ? "Featured" : "Additional"}
                      </span>
                    </div>

                    <div className="w-full rounded-[1.25rem] border border-white/18 bg-[rgba(255,255,255,0.92)] p-4 text-[#10203a] shadow-xl">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#06d6a0]" />
                      </div>
                      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#42617f]">
                        {getProjectPreviewLabel(project)}
                      </p>
                      <p className="mt-2 font-display text-3xl leading-tight">
                        {project.name}
                      </p>
                      <p className="mt-2 text-sm text-[#53687d]">
                        {getProjectPreviewDomain(project)}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.stack.slice(0, 3).map((item) => (
                          <span
                            key={item}
                            className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#183a5b]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-3xl text-[var(--color-ink)]">
                    {project.name}
                  </h3>
                  <p className="mt-4 leading-7 text-[var(--color-muted)]">
                    {project.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="skill-chip rounded-full px-3 py-1 text-sm font-medium text-[var(--color-accent)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  {highlights.length > 0 && (
                    <div className="mt-6 grid gap-2">
                      {highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-start gap-3 rounded-[1rem] border border-[var(--color-border)] px-3 py-2 text-sm text-[var(--color-muted)] transition hover:border-[var(--color-accent)]"
                          style={{
                            background:
                              "color-mix(in srgb, var(--color-paper) 82%, transparent)",
                          }}
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="mt-auto flex flex-wrap gap-3 pt-8">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="primary-button rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white transition hover:translate-y-[-2px]"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border px-4 py-2 text-sm font-semibold transition hover:translate-y-[-2px] hover:border-[var(--color-accent)] hover:shadow-md"
                      style={{
                        background: "var(--button-secondary-bg)",
                        color: "var(--button-secondary-text)",
                        borderColor: "var(--button-secondary-border)",
                      }}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {projects.length > 3 && (
          <div className="flex justify-center">
            <button
              type="button"
              aria-expanded={showAllProjects}
              className="rounded-full border px-6 py-3 text-sm font-semibold transition hover:translate-y-[-2px] hover:border-[var(--color-accent)] hover:shadow-md"
              style={{
                background: "var(--button-secondary-bg)",
                color: "var(--button-secondary-text)",
                borderColor: "var(--button-secondary-border)",
              }}
              onClick={() => setShowAllProjects((current) => !current)}
            >
              {showAllProjects ? "Show Less" : "Load More Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
