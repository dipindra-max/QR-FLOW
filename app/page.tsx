import Link from "next/link";
import InstallButton from "../components/InstallButton";

const tools = [
  {
    icon: "▣",
    title: "QR Scanner",
    description: "Scan QR codes using your camera or saved images.",
    href: "/scanner",
  },
  {
    icon: "◇",
    title: "QR Creator",
    description: "Create beautiful QR codes for links, text and more.",
    href: "/create",
  },
  {
    icon: "▤",
    title: "Document Scanner",
    description: "Turn physical documents into clean digital files.",
    href: "/scanner",
  },
  {
    icon: "PDF",
    title: "PDF Maker",
    description: "Create PDFs from images and scanned documents.",
    href: "/pdf",
  },
  {
    icon: "✦",
    title: "PDF Tools",
    description: "Merge, split, compress and organize PDF files.",
    href: "/pdf",
  },
  {
    icon: "↕",
    title: "File Tools",
    description: "Useful everyday tools for images and documents.",
    href: "/tools",
  },
];

export default function Home() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <Link className="brand" href="/">
          QR<span>Flow</span>
        </Link>

        <nav>
          <Link href="/create">QR Creator</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        <InstallButton />
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">YOUR EVERYDAY DIGITAL TOOLKIT</div>

          <h1>
            One place for your
            <span> digital tools.</span>
          </h1>

          <p>
            Create and scan QR codes, scan documents, make PDFs and manage
            useful everyday files from one fast, simple platform.
          </p>

          <div className="hero-actions">
            <Link className="btn" href="/create">
              Create a QR code
            </Link>

            <Link className="btn ghost" href="/dashboard">
              Open Dashboard →
            </Link>
          </div>

          <div className="trust">
            <span>✓ Fast</span>
            <span>✓ Mobile friendly</span>
            <span>✓ Installable</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="mini-window">
            <div className="window-head">
              <strong>QRFlow Toolkit</strong>
              <span className="live">● READY</span>
            </div>

            <div className="metric">
              <strong>Everything</strong>
              <small>you need in one place</small>
            </div>

            <div className="chart">
              <i style={{ height: "35%" }} />
              <i style={{ height: "52%" }} />
              <i style={{ height: "45%" }} />
              <i style={{ height: "70%" }} />
              <i style={{ height: "62%" }} />
              <i style={{ height: "86%" }} />
              <i style={{ height: "76%" }} />
            </div>

            <div className="stats">
              <div>
                <b>QR</b>
                <small>Tools</small>
              </div>

              <div>
                <b>PDF</b>
                <small>Tools</small>
              </div>

              <div>
                <b>DOC</b>
                <small>Scanner</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <div className="eyebrow">QRFlow TOOLKIT</div>

          <h2>Useful tools. One platform.</h2>

          <p>
            QRFlow is being built as an installable everyday utility platform,
            not just a QR-code generator.
          </p>
        </div>

        <div className="feature-grid">
          {tools.map((tool) => (
            <Link className="feature" href={tool.href} key={tool.title}>
              <div className="feature-icon">{tool.icon}</div>

              <h3>{tool.title}</h3>

              <p>{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section pricing">
        <div className="section-title">
          <div className="eyebrow">BUILT FOR EVERYDAY USE</div>

          <h2>QRFlow is growing beyond QR codes.</h2>

          <p>
            More document, PDF, file and productivity tools will be added
            without taking away the QR features you already use.
          </p>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} QRFlow</span>
        <span>Your everyday digital toolkit.</span>
      </footer>
    </main>
  );
}
