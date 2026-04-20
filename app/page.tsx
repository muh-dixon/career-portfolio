import {
  education,
  experience,
  featuredProjects,
  profile,
  quickFacts,
  skillGroups,
  skills,
  strengths,
} from "@/data/portfolio";
import { MotionReveal } from "@/components/motion-reveal";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden px-6 pb-16 pt-6 sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
          <MotionReveal delay={0.04}>
            <nav
              className="flex items-center justify-between rounded-full border border-[var(--color-border)] px-5 py-3 backdrop-blur"
              style={{
                background: "var(--nav-surface)",
                boxShadow: "0 10px 30px rgba(8,15,72,0.08)",
              }}
            >
              <a
                href="#top"
                className="flex items-center gap-3 font-display text-xl font-semibold text-[var(--color-accent)]"
              >
                <Image
                  src="/portfolio-logo.png"
                  alt="Shabil Dixon logo"
                  width={44}
                  height={44}
                  className="h-11 w-11 object-contain"
                  priority
                />
                <span>{profile.name}</span>
              </a>
              <div className="flex items-center gap-3 text-sm font-medium text-[var(--color-nav)]">
                <a
                  href="#projects"
                  className="transition hover:text-[var(--color-accent)]"
                >
                  Projects
                </a>
                <a
                  href="#experience"
                  className="transition hover:text-[var(--color-accent)]"
                >
                  Experience
                </a>
                <a
                  href="#about"
                  className="transition hover:text-[var(--color-accent)]"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="transition hover:text-[var(--color-accent)]"
                >
                  Contact
                </a>
                <ThemeToggle />
              </div>
            </nav>
          </MotionReveal>

          <div
            id="top"
            className="grid gap-10 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-paper)] px-6 py-10 shadow-[var(--shadow-card)] md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:px-14 lg:py-16"
          >
            <MotionReveal delay={0.12} className="max-w-3xl">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
                  {profile.title}
                </p>
                <h1 className="font-display text-5xl leading-none text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
                  {profile.headline}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
                  {profile.intro}
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px] hover:bg-[#0d1457]"
                  >
                    View Featured Work
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition hover:translate-y-[-1px]"
                    style={{
                      background: "var(--button-secondary-bg)",
                      color: "var(--button-secondary-text)",
                      borderColor: "var(--button-secondary-border)",
                    }}
                  >
                    Email Me
                  </a>
                </div>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.2}>
              <div
                className="rounded-[1.75rem] p-6 text-white"
                style={{ background: "var(--gradient-panel)" }}
              >
                <p className="text-sm uppercase tracking-[0.28em] text-white/70">
                  Snapshot
                </p>
                <p className="mt-4 font-display text-3xl leading-tight">
                  {profile.currentFocus}
                </p>
                <div className="mt-6 grid gap-3">
                  {quickFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-[1.25rem] border border-white/15 bg-white/10 px-4 py-3 backdrop-blur"
                    >
                      <p className="text-xs uppercase tracking-[0.22em] text-white/65">
                        {fact.label}
                      </p>
                      <p className="mt-2 text-sm font-medium text-white">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </MotionReveal>
          </div>
        </div>
        <div
          className="pointer-events-none absolute left-[-8rem] top-28 h-56 w-56 rounded-full blur-3xl"
          style={{ background: "var(--color-glow-a)" }}
        />
        <div
          className="pointer-events-none absolute bottom-10 right-[-7rem] h-72 w-72 rounded-full blur-3xl"
          style={{ background: "var(--color-glow-b)" }}
        />
      </section>

      <section id="projects" className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
          <div className="flex flex-col gap-3" data-aos="fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              Featured Projects
            </p>
            <h2 className="font-display text-4xl text-[var(--color-ink)] sm:text-5xl">
              Product work that reflects both frontend polish and technical range.
            </h2>
            <p className="max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
              These projects come directly from my current portfolio and resume,
              with an emphasis on UI quality, API integration, routing, state,
              and end-to-end feature delivery.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <article
                key={project.name}
                className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-paper)] shadow-[var(--shadow-card)]"
                data-aos="fade-up"
                data-aos-delay={index * 90}
              >
                <div
                  className={`relative min-h-64 bg-gradient-to-br ${project.accent} p-6 text-white`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_30%),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:auto,22px_22px,22px_22px]" />
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
                        0{index + 1}
                      </p>
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur">
                        Featured Build
                      </span>
                    </div>

                    <div className="max-w-md rounded-[1.25rem] border border-white/18 bg-[rgba(255,255,255,0.9)] p-4 text-[#10203a] shadow-xl">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#06d6a0]" />
                      </div>
                      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#42617f]">
                        {project.previewLabel}
                      </p>
                      <p className="mt-2 font-display text-3xl leading-tight">
                        {project.name}
                      </p>
                      <p className="mt-2 text-sm text-[#53687d]">
                        {project.previewDomain}
                      </p>
                      <div className="mt-5 grid gap-2">
                        <div className="h-3 w-28 rounded-full bg-[#d7e2ec]" />
                        <div className="h-3 w-full rounded-full bg-[#d7e2ec]" />
                        <div className="h-3 w-4/5 rounded-full bg-[#d7e2ec]" />
                      </div>
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
                  <p className="mt-4 flex-1 leading-7 text-[var(--color-muted)]">
                    {project.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-sm font-medium text-[var(--color-accent)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0d1457]"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border px-4 py-2 text-sm font-semibold transition hover:translate-y-[-1px]"
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
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
          <div className="flex flex-col gap-3" data-aos="fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              Experience
            </p>
            <h2 className="font-display text-4xl text-[var(--color-ink)] sm:text-5xl">
              Internship work centered on modern frontend delivery and real product flows.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="grid gap-6">
              {experience.map((role) => (
                <article
                  key={`${role.company}-${role.role}`}
                  className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-paper)] p-8 shadow-[var(--shadow-card)]"
                  data-aos="fade-up"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-secondary)]">
                        {role.company}
                      </p>
                      <h3 className="mt-3 font-display text-3xl text-[var(--color-ink)]">
                        {role.role}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-[var(--color-muted)]">
                        {role.location}
                      </p>
                    </div>
                    <span className="rounded-full bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--color-accent)]">
                      {role.period}
                    </span>
                  </div>
                  <div className="mt-6 grid gap-3">
                    {role.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-[1.2rem] border border-[var(--color-border)] bg-white/70 p-4"
                        style={{
                          background:
                            "color-mix(in srgb, var(--color-paper) 80%, transparent)",
                        }}
                      >
                        <p className="leading-7 text-[var(--color-muted)]">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <aside
              className="rounded-[1.75rem] p-8 text-[rgba(255,255,255,0.88)] shadow-[var(--shadow-card)]"
              style={{ background: "var(--gradient-panel)" }}
              data-aos="fade-left"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
                Education
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight text-white">
                {education.degree}
              </h3>
              <p className="mt-3 text-base text-white/80">{education.school}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/65">
                {education.period}
              </p>

              <div className="mt-8 rounded-[1.35rem] border border-white/12 bg-white/10 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-white/65">
                  Relevant Coursework
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                <div className="rounded-[1.35rem] border border-white/12 bg-white/10 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/65">
                    Currently Learning
                  </p>
                  <p className="mt-3 leading-7">{profile.learning}</p>
                </div>
                <div className="rounded-[1.35rem] border border-white/12 bg-white/10 p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/65">
                    Looking To Collaborate On
                  </p>
                  <p className="mt-3 leading-7">{profile.collaboration}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div
            className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-paper)] p-8 shadow-[var(--shadow-card)]"
            data-aos="fade-up"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              About Me
            </p>
            <h2 className="mt-4 font-display text-4xl text-[var(--color-ink)]">
              A well-rounded software foundation across frontend, systems, and security.
            </h2>
            <div className="mt-8 grid gap-4">
              {strengths.map((strength) => (
                <div
                  key={strength.title}
                  className="rounded-[1.25rem] border border-[var(--color-border)] bg-white/70 p-5"
                  style={{
                    background:
                      "color-mix(in srgb, var(--color-paper) 78%, transparent)",
                  }}
                >
                  <h3 className="text-lg font-semibold text-[var(--color-ink)]">
                    {strength.title}
                  </h3>
                  <p className="mt-2 leading-7 text-[var(--color-muted)]">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-[1.75rem] p-8 text-[rgba(255,255,255,0.84)] shadow-[var(--shadow-card)]"
            style={{ background: "color-mix(in srgb, var(--background) 72%, #000f30)" }}
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <p className="text-lg leading-8">
              I&apos;m especially interested in building efficient, user-focused
              software while applying what I&apos;ve learned about performance,
              security, and system behavior. That mix is what makes product work
              exciting to me.
            </p>
            <p className="mt-5 text-lg leading-8">
              {profile.askAbout}
            </p>

            <div className="mt-8 grid gap-4">
              {skillGroups.map((group) => (
                <div
                  key={group.label}
                  className="rounded-[1.35rem] border border-white/12 bg-white/10 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-white/65">
                    {group.label}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-sm text-white/90"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-20 pt-8 sm:px-10 lg:px-16">
        <div
          className="mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-[2rem] p-8 shadow-[var(--shadow-card)] sm:p-10 lg:flex-row lg:items-end lg:justify-between"
          style={{ background: "var(--gradient-contact)" }}
          data-aos="fade-up"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              Contact
            </p>
            <h2 className="mt-4 font-display text-4xl text-[var(--color-ink)] sm:text-5xl">
              Open to opportunities where thoughtful UI and dependable engineering matter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
              Based in {profile.location}. The best way to reach me is{" "}
              <a
                href={`mailto:${profile.email}`}
                className="font-semibold text-[var(--color-accent)]"
              >
                {profile.email}
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0d1457]"
            >
              Email
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition hover:translate-y-[-1px]"
              style={{
                background: "var(--button-secondary-bg)",
                color: "var(--button-secondary-text)",
                borderColor: "var(--button-secondary-border)",
              }}
            >
              LinkedIn
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition hover:translate-y-[-1px]"
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
      </section>
    </main>
  );
}
