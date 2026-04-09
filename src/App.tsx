import './App.css'

type Experience = {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Strengths', href: '#strengths' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const actionLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anthony-manjarrez/',
    external: true,
  },
  {
    label: 'Resume',
    href: '/Anthony_Manjarrez_Resume.pdf',
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:amanjarrez562@gmail.com',
    external: true,
  },
  {
    label: 'Experience',
    href: '#experience',
    external: false,
  },
]

const experiences: Experience[] = [
  {
    company: 'Idler',
    role: 'Problem Design Engineer',
    period: 'Jan 2026 - Present',
    location: 'Ithaca, NY',
    bullets: [
      'Reviewing test patches and failing diffs to validate correctness, coverage, and alignment with intended functionality.',
      'Holding work to solid SWE standards through code inspection, validation ordering, and defensive programming.',
      'Evaluating LLM-generated code failures and judging whether outcomes are fair within the task specification and codebase constraints.',
    ],
  },
  {
    company: 'Cornell Fintech Club',
    role: 'Technical Product Manager',
    period: 'Sep 2025 - Present',
    location: 'Ithaca, NY',
    bullets: [
      'Leading end-to-end planning for a data-driven product, from high-level wireframes to semester roadmaps and sprint cycles.',
      'Writing and managing engineering tickets across modeling, visualization, API exploration, and repository standards.',
      'Creating clear ownership across frontend and backend work so teams can ship with better consistency and momentum.',
    ],
  },
  {
    company: 'Civic',
    role: 'Software Engineering Intern',
    period: 'Jan 2025 - Jan 2026',
    location: 'Ithaca, NY',
    bullets: [
      'Built backend features with Node.js, TypeScript, and tRPC, including authenticated endpoints for type-safe full-stack communication.',
      'Improved the UI with Tailwind CSS and JavaScript through responsive components, hover states, transitions, and conditional rendering.',
      'Strengthened the internal CI/CD pipeline with GitHub Actions workflows that improved deployment reliability and reduced manual overhead.',
    ],
  },
  {
    company: 'CSMore Intern',
    role: 'Intern',
    period: 'Jul 2024 - Aug 2024',
    location: 'Ithaca, NY',
    bullets: [
      'Engaged in research talks, lab tours, and community programming with peers, faculty, and the Cornell Bowers CIS DEI team.',
      'Expanded technical foundations through coursework in discrete structures, computer system organization, functional programming, and data structures.',
    ],
  },
]

const strengths = [
  'TypeScript-first application development',
  'Product planning, wireframing, and ticket design',
  'Node.js, tRPC, and authenticated API workflows',
  'UI implementation with JavaScript and Tailwind CSS',
  'CI/CD automation with GitHub Actions',
  'Code review, validation strategy, and debugging',
]

const coursework = [
  'Discrete Structures',
  'Computer System Organization',
  'Functional Programming',
  'Data Structures',
]

function App() {
  return (
    <div className="site-shell">
      <header className="hero-panel" id="top">
        <div className="window-chrome" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className="top-nav" aria-label="Section navigation">
          <a className="brand" href="#top">
            Anthony Manjarrez Flores
          </a>
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="hero-content">
          <div className="portrait-lockup" aria-hidden="true">
            <div className="portrait-ring"></div>
            <div className="portrait-core">AM</div>
          </div>

          <p className="eyebrow">Software Engineering • Product Thinking • Frontend Craft</p>
          <h1>Building thoughtful software with strong engineering fundamentals.</h1>
          <p className="hero-copy">
            I&apos;m Anthony Manjarrez Flores, a Cornell computer science student
            with experience spanning software engineering, technical product
            management, and code quality evaluation. I like turning ambiguous
            problems into clear systems, polished interfaces, and reliable
            developer workflows.
          </p>

          <div className="action-row">
            {actionLinks.map((link) => (
              <a
                key={link.label}
                className="action-pill"
                href={link.href}
                {...(link.external
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="section-grid" id="about">
          <article className="feature-card intro-card">
            <p className="section-label">About Me</p>
            <h2>Grounded in engineering, energized by product.</h2>
            <p>
              My experience sits at the intersection of implementation and
              decision-making. I&apos;ve built backend features, improved frontend
              experiences, created technical roadmaps, and reviewed code with a
              focus on correctness and defensive thinking.
            </p>
            <p>
              That mix helps me contribute across the full lifecycle of a
              product, from defining what should be built to making sure the
              shipped result is robust, intuitive, and maintainable.
            </p>
          </article>

          <aside className="feature-card snapshot-card">
            <p className="section-label">Snapshot</p>
            <div className="snapshot-list">
              <div>
                <span>Current focus</span>
                <strong>Software engineering and technical product work</strong>
              </div>
              <div>
                <span>Based in</span>
                <strong>Ithaca, New York</strong>
              </div>
              <div>
                <span>Interested in</span>
                <strong>Full-stack systems, UI quality, and developer tooling</strong>
              </div>
            </div>
          </aside>
        </section>

        <section className="section-stack" id="experience">
          <div className="section-heading">
            <p className="section-label">Experience</p>
            <h2>Industry and campus roles that shape how I build.</h2>
          </div>

          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-card" key={experience.company + experience.role}>
                <div className="timeline-meta">
                  <p>{experience.period}</p>
                  <span>{experience.location}</span>
                </div>
                <div className="timeline-body">
                  <h3>{experience.role}</h3>
                  <p className="company-name">{experience.company}</p>
                  <ul>
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-grid" id="strengths">
          <article className="feature-card strengths-card">
            <p className="section-label">Strengths</p>
            <h2>What I bring to a team.</h2>
            <div className="chip-grid">
              {strengths.map((strength) => (
                <span className="chip" key={strength}>
                  {strength}
                </span>
              ))}
            </div>
          </article>

          <article className="feature-card workflow-card">
            <p className="section-label">How I Work</p>
            <h2>Clear thinking from specs to shipped UI.</h2>
            <ol>
              <li>Break ambiguous ideas into structured plans, milestones, and tickets.</li>
              <li>Build with attention to reliability, readable logic, and scalable patterns.</li>
              <li>Refine the interface so the final experience feels clean, intentional, and usable.</li>
            </ol>
          </article>
        </section>

        <section className="section-grid" id="education">
          <article className="feature-card education-card">
            <p className="section-label">Education</p>
            <h2>Cornell University</h2>
            <p className="education-subtitle">Computer Science student in Ithaca, NY</p>
            <div className="coursework-block">
              <span>Relevant coursework</span>
              <div className="course-list">
                {coursework.map((course) => (
                  <span className="course-pill" key={course}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <article className="feature-card contact-preview" id="contact">
            <p className="section-label">Contact</p>
            <h2>Let&apos;s connect.</h2>
            <p>
              Whether it&apos;s software engineering, product work, or an
              opportunity to build something meaningful, I&apos;m always happy to
              talk.
            </p>
            <div className="contact-links">
              <a href="#top">Anthony Manjarrez Flores</a>
              <a href="mailto:amanjarrez562@gmail.com">amanjarrez562@gmail.com</a>
              <a href="https://www.linkedin.com/in/anthony-manjarrez/" target="_blank" rel="noreferrer">
                www.linkedin.com/in/anthony-manjarrez
              </a>
              <a href="/Anthony_Manjarrez_Resume.pdf" target="_blank" rel="noreferrer">
                View resume PDF
              </a>
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}

export default App
