import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">
          <span className="dot"></span>
          Actively destroying dreams since 2024
        </div>
        <h1>
          Dreams? <span className="gradient">Folded.</span>
        </h1>
        <p className="subtitle">
          SetFold is the world&apos;s first cofounderless startup dedicated to
          crushing aspirations at enterprise scale. Founded by Rom — a boner
          who can&apos;t sit properly.
        </p>
        <div className="hero-cta">
          <Link href="/dream-killer" className="btn btn-primary">
            💀 Kill My Dream
          </Link>
          <Link href="/about-rom" className="btn btn-secondary">
            Meet the &quot;Founder&quot; →
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="section-header">
          <h2>Why SetFold?</h2>
          <p>
            Because sometimes the best startup advice is &quot;don&apos;t.&quot;
          </p>
        </div>

        <div className="card-grid">
          <div className="card">
            <span className="card-icon">🪑</span>
            <h3>Ergonomic Nightmares</h3>
            <p>
              Our founder sits like a pretzel crossed with a question mark.
              No co-founder has ever survived the sight. This is why we&apos;re
              cofounderless.
            </p>
          </div>
          <div className="card">
            <span className="card-icon">💀</span>
            <h3>Dream Annihilation</h3>
            <p>
              We don&apos;t just kill dreams — we fold them into
              origami cranes of despair and mail them back to you with a
              rejection letter.
            </p>
          </div>
          <div className="card">
            <span className="card-icon">🏠</span>
            <h3>The Froffice™</h3>
            <p>
              Half fridge, half office — the legendary space where bad decisions
              are born and good ideas go to die. Temperature: always wrong.
            </p>
          </div>
          <div className="card">
            <span className="card-icon">🦴</span>
            <h3>Rom is a Boner</h3>
            <p>
              Not the kind you&apos;re thinking of. He just makes boneheaded
              decisions with alarming consistency and unshakeable confidence.
            </p>
          </div>
          <div className="card">
            <span className="card-icon">📉</span>
            <h3>Negative Growth</h3>
            <p>
              While other startups chase hockey-stick growth, we&apos;ve
              perfected the limbo stick. How low can we go? Yes.
            </p>
          </div>
          <div className="card">
            <span className="card-icon">🤖</span>
            <h3>AI-Powered Rejection</h3>
            <p>
              Our proprietary MCP server analyzes your dreams and returns
              personalized reasons why they&apos;ll never work. It&apos;s like
              ChatGPT but meaner.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-row">
          <div className="stat">
            <div className="stat-number">10,847</div>
            <div className="stat-label">Dreams Destroyed</div>
          </div>
          <div className="stat">
            <div className="stat-number">0</div>
            <div className="stat-label">Co-founders Retained</div>
          </div>
          <div className="stat">
            <div className="stat-number">∞</div>
            <div className="stat-label">Poor Sitting Positions</div>
          </div>
          <div className="stat">
            <div className="stat-number">$-42M</div>
            <div className="stat-label">Revenue (Impressive)</div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <div className="big-quote">
        <blockquote>
          I brought my startup idea to SetFold and they destroyed it in 3.7
          seconds. Best $0 I ever spent. Rom was sitting sideways on a beanbag
          the entire time.
        </blockquote>
        <div className="attribution">
          — A Former Dreamer, Now Gainfully Employed at Starbucks
        </div>
      </div>
    </main>
  );
}
