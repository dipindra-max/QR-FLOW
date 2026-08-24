import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const codes = await prisma.qrCode.findMany({ orderBy: { createdAt: "desc" }, take: 5 }).catch(() => []);
  const totalScans = codes.reduce((n, q) => n + q.scans, 0);

  return (
    <main>
      <header className="topbar">
        <Link className="brand" href="/">QR<span>Flow</span></Link>
        <nav><Link href="#features">Features</Link><Link href="#pricing">Pricing</Link><Link href="/dashboard">Dashboard</Link></nav>
        <Link className="btn btn-small" href="/create">Create QR</Link>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">DYNAMIC QR PLATFORM</div>
          <h1>QR codes that <span>flow with your business.</span></h1>
          <p>Create beautiful QR codes, update destinations anytime, and understand every scan from one clean dashboard.</p>
          <div className="hero-actions"><Link className="btn" href="/create">Create your first QR</Link><Link className="btn ghost" href="/dashboard">Explore dashboard →</Link></div>
          <div className="trust"><span>✓ Dynamic links</span><span>✓ Analytics</span><span>✓ SVG & PNG</span></div>
        </div>
        <div className="hero-card">
          <div className="mini-window">
            <div className="window-head"><b>Campaign performance</b><span className="live">● Live</span></div>
            <div className="metric"><strong>{totalScans.toLocaleString()}</strong><small>Total scans</small></div>
            <div className="chart">{[42,58,48,72,64,88,79,94,83,100,91,108].map((h,i)=><i key={i} style={{height:`${h/1.35}px`}} />)}</div>
            <div className="stats"><span><b>+24.8%</b><small>vs last month</small></span><span><b>86%</b><small>mobile scans</small></span></div>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="section-title"><div className="eyebrow">BUILT FOR MODERN TEAMS</div><h2>Everything behind the QR.</h2><p>Not just a generator — a complete QR management workspace.</p></div>
        <div className="feature-grid">
          {[
            ["↗","Dynamic QR codes","Change a destination without printing a new code."],
            ["◉","Real-time analytics","Track scans, devices, countries and campaigns."],
            ["✦","Beautiful designs","Colors, logos, frames and high-resolution exports."],
            ["⌁","Smart campaigns","Organize codes, tags and performance in one place."],
            ["▣","Bulk generation","Create and manage hundreds of QR codes efficiently."],
            ["⚡","Developer API","Connect QRFlow to your own products and workflows."]
          ].map(([icon,title,text])=><article className="feature" key={title}><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="section-title"><div className="eyebrow">SIMPLE PRICING</div><h2>Start free. Scale when you need.</h2></div>
        <div className="price-grid">
          <article><h3>Free</h3><div className="price">$0 <small>/ forever</small></div><p>For trying QRFlow and personal projects.</p><ul><li>5 dynamic QR codes</li><li>Basic analytics</li><li>PNG & SVG export</li></ul><Link className="btn ghost full" href="/create">Start free</Link></article>
          <article className="featured"><div className="pill">MOST POPULAR</div><h3>Pro</h3><div className="price">$9 <small>/ month</small></div><p>For creators, marketers and growing businesses.</p><ul><li>Unlimited dynamic QR codes</li><li>Advanced analytics</li><li>Custom branding</li><li>Bulk generation</li><li>API access</li></ul><Link className="btn full" href="/create">Build with QRFlow</Link></article>
          <article><h3>Business</h3><div className="price">$29 <small>/ month</small></div><p>For teams running multiple campaigns.</p><ul><li>Everything in Pro</li><li>Team workspaces</li><li>Roles & permissions</li><li>Custom domains</li></ul><Link className="btn ghost full" href="/create">Get started</Link></article>
        </div>
      </section>

      <footer><div className="brand">QR<span>Flow</span></div><p>Dynamic QR infrastructure for the web.</p></footer>
    </main>
  );
}