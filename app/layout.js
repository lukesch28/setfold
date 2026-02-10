import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "SetFold — We Kill Dreams™",
  description:
    "SetFold is the cofounderless startup that crushes dreams at scale. No co-founders. No mercy. No ergonomic chairs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <Link href="/" className="nav-logo">
            SetFold<span>DREAM KILLERS</span>
          </Link>
          <ul className="nav-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-rom">About Rom</Link>
            </li>
            <li>
              <Link href="/the-froffice">The Froffice</Link>
            </li>
            <li>
              <Link href="/dream-killer">Dream Killer</Link>
            </li>
            <li>
              <Link href="/api-docs">API</Link>
            </li>
          </ul>
        </nav>
        {children}
        <footer className="footer">
          <div>© 2026 SetFold Inc. All dreams destroyed.</div>
          <ul className="footer-links">
            <li>
              <Link href="/about-rom">About Rom</Link>
            </li>
            <li>
              <Link href="/the-froffice">The Froffice</Link>
            </li>
            <li>
              <Link href="/api-docs">API</Link>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
