import {
  education,
  experience,
  profile,
  quickFacts,
  skillGroups,
  skills,
  strengths,
} from "@/data/portfolio";
import { ProjectsSection } from "@/components/projects-section";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <main className="portfolio-shell flex-1">
      <section className="relative overflow-hidden pb-16 pt-6 sm:pb-20 lg:pb-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <div>
            <SiteNav name={profile.name} />
          </div>

          <div
            id="top"
            className="surface-panel hero-panel grid gap-12 rounded-[2rem] px-6 py-12 md:px-10 lg:grid-cols-[1.16fr_0.84fr] lg:items-end lg:px-14 lg:py-20"
          >
            <div className="relative z-10 max-w-3xl">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
                  {profile.title}
                </p>
                <h1 className="hero-title font-display text-5xl leading-none sm:text-7xl lg:text-8xl">
                  {profile.headline}
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
                  {profile.intro}
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#projects"
                    className="primary-button inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-2px]"
                  >
                    <span>View Featured Work</span>
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition hover:translate-y-[-2px] hover:border-[var(--color-accent)] hover:shadow-md"
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
            </div>

            <div className="relative z-10">
              <div
                className="surface-panel rounded-[1.75rem] p-6 text-white"
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
                      className="rounded-[1.25rem] border border-white/15 bg-white/10 px-4 py-3 transition hover:bg-white/15"
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
                      className="skill-chip rounded-full px-4 py-2 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectsSection />

      <section id="experience" className="cinematic-section py-16 sm:py-20 lg:py-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
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
                  className="surface-panel rounded-[1.75rem] p-8"
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
                    <span className="skill-chip rounded-full px-4 py-2 text-sm font-semibold text-[var(--color-accent)]">
                      {role.period}
                    </span>
                  </div>
                  <div className="mt-6 grid gap-3">
                    {role.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-[1.2rem] border border-[var(--color-border)] p-4 transition hover:border-[var(--color-accent)]"
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
              className="surface-panel rounded-[1.75rem] p-8 text-[rgba(255,255,255,0.88)]"
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

      <section id="about" className="cinematic-section py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div
            className="surface-panel rounded-[1.75rem] p-8"
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
                  className="rounded-[1.25rem] border border-[var(--color-border)] p-5 transition hover:border-[var(--color-accent)]"
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
            className="surface-panel rounded-[1.75rem] p-8 text-[rgba(255,255,255,0.84)]"
            style={{ background: "color-mix(in srgb, var(--background) 72%, #000f30)" }}
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <p className="text-lg leading-8">
              I build polished frontend experiences and I&apos;m growing into
              full-stack development by adding backend APIs, authentication,
              and database-backed workflows to my projects.
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
                        className="skill-chip rounded-full px-3 py-1 text-sm text-white/90"
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

      <section id="contact" className="cinematic-section pb-20 pt-10 sm:pb-24 sm:pt-12 lg:pb-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="surface-panel flex w-full flex-col gap-6 rounded-[2rem] p-8 sm:p-10 lg:flex-row lg:items-end lg:justify-between"
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
                className="primary-button inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-2px]"
              >
                <span>Email</span>
              </a>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition hover:translate-y-[-2px] hover:border-[var(--color-accent)]"
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
                className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold transition hover:translate-y-[-2px] hover:border-[var(--color-accent)]"
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
        </div>
      </section>
    </main>
  );
}
