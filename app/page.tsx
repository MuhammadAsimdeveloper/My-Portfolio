import HeroSceneMotion from "@/components/hero-scene-motion";

const skills = [
  { group: "01 / CORE LANGUAGES", items: ["Python", "JavaScript", "TypeScript", "C / C++"] },
  { group: "02 / WEB ENGINEERING", items: ["HTML & CSS", "React", "Next.js", "Tailwind CSS", "Git & GitHub"] },
  { group: "03 / BUILDING SYSTEMS", items: ["AI-assisted development", "Automation", "UI engineering", "Product thinking"] },
];

const projects = [
  { number: "01", title: "Muhammad Asim Web Agency", type: "LIVE WEBSITE", state: "LIVE", description: "A modern web presence for small businesses, designed around clarity, speed, and useful digital experiences.", href: "https://asim-web-agency.netlify.app/", action: "Visit live site", symbol: "↗", className: "agency-project", featured: true },
  { number: "02", title: "Atlas Outreach", type: "DESKTOP · AUTOMATION", state: "IN DEVELOPMENT", description: "A desktop outreach workflow with business discovery, CSV tools, editable templates, and human approval.", href: "https://github.com/MuhammadAsimdeveloper/Atlas-outreach-automation-", action: "Explore repository", symbol: "⌘", className: "atlas-project" },
  { number: "03", title: "Coding Vibes", type: "DEVELOPER TOOLS", state: "IN DEVELOPMENT", description: "Experiments in making software creation and improvement more accessible with AI-assisted workflows.", href: "https://github.com/MuhammadAsimdeveloper/CodingVibes", action: "Explore repository", symbol: "{ }", className: "vibes-project" },
  { number: "04", title: "Module Pieces", type: "COMPONENT SYSTEM", state: "IN DEVELOPMENT", description: "A multi-stack library of reusable website sections, patterns, and practical building blocks.", href: "https://github.com/MuhammadAsimdeveloper/Module-pieces", action: "Explore repository", symbol: "▦", className: "modules-project" },
  { number: "05", title: "Virtual Makeover", type: "VISUAL WEB TOOL", state: "IN DEVELOPMENT", description: "A visual web experience in progress, exploring accessible and intuitive creative workflows.", href: "https://github.com/MuhammadAsimdeveloper/Virtual-makeover-", action: "Explore repository", symbol: "✳", className: "makeover-project" },
];

const email = "sanjarkhanabbasi786@gmail.com";
const phone = "923013829910";

function Arrow() {
  return <span className="arrow-glyph" aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main id="top">
      <section className="hero page-wrap" aria-labelledby="hero-title">
        <HeroSceneMotion />
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-light" /> AI DEVELOPER <span className="eyebrow-slash">/</span> PRODUCT BUILDER <span className="location-chip">PAKISTAN · PK</span></div>
          <h1 id="hero-title">I build things<br />for the <span className="hero-highlight">next era<span className="highlight-period">.</span></span></h1>
          <p className="hero-intro">I’m Muhammad Asim — a BS Artificial Intelligence student turning ambitious ideas into useful software, thoughtful interfaces, and practical tools.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore selected work <Arrow /></a>
            <a className="button button-secondary" href="#contact">Start a conversation <Arrow /></a>
          </div>
          <div className="hero-proof">
            <div className="proof-avatar" aria-hidden="true"><span>MA</span><i /></div>
            <div><strong>Learn fast. Build deliberately.</strong><span>BS Artificial Intelligence · IUB</span></div>
            <div className="proof-divider" />
            <div className="proof-count"><strong>05</strong><span>PROJECTS</span></div>
          </div>
        </div>
        <div className="hero-visual" aria-label="Animated abstract technology dashboard">
          <div className="visual-ambient ambient-one" />
          <div className="visual-ambient ambient-two" />
          <div className="visual-grid" />
          <div className="visual-topline"><span><i /> ASIM / DIGITAL LAB</span><span>SYS. 001 — ONLINE</span></div>
          <div className="visual-panel panel-back"><div className="panel-label">MODEL / ITERATION</div><div className="mini-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="panel-foot"><span>LEARNING CURVE</span><b>↗ 24.8%</b></div></div>
          <div className="visual-panel panel-main">
            <div className="panel-head"><span className="window-dots"><i /><i /><i /></span><span>workspace.tsx</span><span className="panel-live">LIVE</span></div>
            <div className="code-window" aria-hidden="true"><p><span>01</span> <b>const</b> <em>future</em> = {"{"}</p><p><span>02</span> &nbsp; curiosity: <strong>"always-on"</strong>,</p><p><span>03</span> &nbsp; ideas: <strong>"in motion"</strong>,</p><p><span>04</span> &nbsp; learning: <strong>true</strong>,</p><p><span>05</span> &nbsp; ship: <i>() =&gt; build()</i></p><p><span>06</span> {"}"};</p><p className="code-comment"><span>07</span> // make something useful</p></div>
            <div className="terminal-line"><span className="terminal-prompt">➜</span> npm run build <span className="terminal-success">✓ READY</span></div>
          </div>
          <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />
          <div className="floating-token token-ai"><span className="token-symbol">✳</span><span><b>AI / SYSTEMS</b><small>Intelligence in practice</small></span></div>
          <div className="floating-token token-web"><span className="token-symbol token-symbol-purple">⌘</span><span><b>WEB / PRODUCT</b><small>Designed to be useful</small></span></div>
          <div className="visual-caption"><span>FIG. 01</span><span>THINK → BUILD → ITERATE</span><span>31° 22′ N</span></div>
        </div>
        <a className="hero-scroll" href="#about"><span className="scroll-mouse"><i /></span><span>SCROLL TO EXPLORE</span><span>↓</span></a>
      </section>

      <div className="signal-strip" aria-label="Areas of interest"><div className="signal-track"><span>ARTIFICIAL INTELLIGENCE</span><i>✳</i><span>PRODUCT ENGINEERING</span><i>✳</i><span>WEB EXPERIENCES</span><i>✳</i><span>SMART AUTOMATION</span><i>✳</i><span>ARTIFICIAL INTELLIGENCE</span><i>✳</i><span>PRODUCT ENGINEERING</span><i>✳</i><span>WEB EXPERIENCES</span><i>✳</i><span>SMART AUTOMATION</span><i>✳</i></div></div>

      <section id="about" className="section page-wrap about-section">
        <div className="section-kicker"><span>01</span><span className="kicker-rule" /><span>THE PERSON BEHIND THE PIXELS</span></div>
        <div className="about-layout">
          <div className="about-heading"><p className="micro-label">A LITTLE ABOUT ME</p><h2>Curious by nature.<br /><span>Builder by choice.</span></h2></div>
          <div className="about-copy"><p className="about-lead">I’m learning how the future works — then making small pieces of it real.</p><p>I study BS Artificial Intelligence at The Islamia University of Bahawalpur (IUB). Alongside my degree, I build web projects, explore automation, and learn how complete products come together.</p><p>I care about clear interfaces, honest progress, and shipping useful work. The long-term goal is AI engineering and building products that solve real problems.</p><a className="inline-link" href="https://www.linkedin.com/in/muhammad-asim-developer" target="_blank" rel="noreferrer">More on LinkedIn <Arrow /></a></div>
        </div>
        <div className="principle-grid"><article><span>01 / MINDSET</span><b>Stay curious.</b><p>Ask better questions and keep learning the fundamentals.</p></article><article><span>02 / METHOD</span><b>Make it real.</b><p>Turn ideas into working software, not just pretty mockups.</p></article><article><span>03 / STANDARD</span><b>Improve the details.</b><p>Review, refine, test, and make the next version better.</p></article></div>
      </section>

      <section id="skills" className="section toolkit-section"><div className="page-wrap">
        <div className="section-kicker"><span>02</span><span className="kicker-rule" /><span>TOOLS I’M GROWING WITH</span></div>
        <div className="toolkit-heading"><div><p className="micro-label">CURRENT TOOLKIT</p><h2>Learn the tools.<br /><span>Understand the system.</span></h2></div><p>My stack keeps evolving. These are the technologies and approaches I currently use, practise, or actively explore.</p></div>
        <div className="skill-grid">{skills.map((group) => <article className="skill-card" key={group.group}><span className="skill-group">{group.group}</span><div className="skill-items">{group.items.map((item) => <span key={item} className="skill-pill"><i />{item}</span>)}</div><span className="skill-card-mark" aria-hidden="true">↗</span></article>)}</div>
      </div></section>

      <section id="projects" className="section page-wrap projects-section">
        <div className="section-kicker"><span>03</span><span className="kicker-rule" /><span>SELECTED WORK / CONTINUOUS PROGRESS</span></div>
        <div className="projects-heading"><div><p className="micro-label">THE WORKBENCH</p><h2>Ideas in progress.<br /><span>Proof in the making.</span></h2></div><p>One live website and several projects in development. Status is shown honestly — shipped is shipped, and work in progress stays labelled.</p></div>
        <div className="project-grid">{projects.map((project) => <article className={`project-card ${project.className} ${project.featured ? "project-featured" : ""}`} key={project.number}>
          <a className="project-art" href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.action}: ${project.title}`}>
            <div className="art-grid" /><div className="art-topline"><span>ASIM LAB / {project.number}</span><span className="art-open"><Arrow /></span></div>
            <div className="art-object"><span>{project.symbol}</span><i /><b /></div>
            <div className="art-data"><span>BUILD_STATUS</span><b>{project.state === "LIVE" ? "100%" : "IN MOTION"}</b><div className="progress-track"><i style={{ width: project.state === "LIVE" ? "100%" : `${38 + Number(project.number) * 7}%` }} /></div></div>
            <div className="art-footer"><span>{project.type}</span><span>2026</span></div>
          </a>
          <div className="project-details"><div className="project-state"><span className={project.state === "LIVE" ? "state-dot state-live" : "state-dot"} />{project.state}</div><h3><a href={project.href} target="_blank" rel="noreferrer">{project.title} <Arrow /></a></h3><p>{project.description}</p><a className="project-link" href={project.href} target="_blank" rel="noreferrer">{project.action}<span>↗</span></a></div>
        </article>)}</div>
        <a className="all-projects-link" href="https://github.com/MuhammadAsimdeveloper" target="_blank" rel="noreferrer"><span>More experiments on GitHub</span><Arrow /></a>
      </section>

      <section id="contact" className="contact-section"><div className="contact-orb contact-orb-one" /><div className="contact-orb contact-orb-two" /><div className="page-wrap contact-inner">
        <div className="section-kicker"><span>04</span><span className="kicker-rule" /><span>OPEN CHANNEL</span></div>
        <div className="contact-layout"><div><p className="micro-label">HAVE A GOOD IDEA?</p><h2>Let’s make<br /><span>something matter.</span></h2></div><div className="contact-copy"><p>Have a project, a collaboration idea, or want to talk about AI and development? I’m open to thoughtful conversations and learning opportunities.</p><div className="contact-actions"><a className="button button-primary" href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer">Message on WhatsApp <Arrow /></a><a className="contact-email" href={`mailto:${email}`}>{email}<Arrow /></a></div></div></div>
        <footer className="site-footer"><a className="footer-logo" href="#top">ASIM<span>.</span></a><span className="footer-note">DESIGNED WITH CURIOSITY · MADE IN PAKISTAN</span><div className="footer-links"><a href="https://github.com/MuhammadAsimdeveloper" target="_blank" rel="noreferrer">GITHUB <Arrow /></a><a href="https://www.linkedin.com/in/muhammad-asim-developer" target="_blank" rel="noreferrer">LINKEDIN <Arrow /></a><a href="#top">BACK TO TOP ↑</a></div><span className="footer-copy">© {new Date().getFullYear()} MUHAMMAD ASIM</span></footer>
      </div></section>
    </main>
  );
}