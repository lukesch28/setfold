import Link from "next/link";

export const metadata = {
    title: "API Docs — SetFold Developer Portal",
    description: "Integrate dream destruction into your own apps with the SetFold API.",
};

export default function ApiDocs() {
    return (
        <main>
            <section className="page-hero">
                <h1>
                    <span className="gradient">API</span> Docs 🤖
                </h1>
                <p className="subtitle">
                    Integrate dream destruction directly into your applications.
                    We also have an MCP server for the truly unhinged.
                </p>
            </section>

            <div className="content-block">
                <h2>Endpoints</h2>
                <p>All endpoints are free. Because no one would pay for this.</p>

                <div className="api-card">
                    <span className="api-method get">GET</span>
                    <span className="api-path">/api/status</span>
                    <p className="api-desc">
                        Check if SetFold is currently destroying dreams. Returns the current
                        system status, dreams killed today, and Rom&apos;s sitting position.
                    </p>
                </div>

                <div className="api-card">
                    <span className="api-method post">POST</span>
                    <span className="api-path">/api/kill-dream</span>
                    <p className="api-desc">
                        Submit a dream for annihilation. Send a JSON body with a
                        &quot;dream&quot; field. Returns a verdict, roast, reason, and
                        viability score (always low).
                    </p>
                </div>

                <div className="api-card">
                    <span className="api-method get">GET</span>
                    <span className="api-path">/api/sitting-position</span>
                    <p className="api-desc">
                        Get Rom&apos;s current sitting position. Refreshes every request.
                        Used by his physiotherapist for documentation purposes.
                    </p>
                </div>

                <div className="api-card">
                    <span className="api-method get">GET</span>
                    <span className="api-path">/api/froffice-temp</span>
                    <p className="api-desc">
                        Get the current Froffice temperature. It&apos;s always wrong.
                        Returns the temperature, comfort level, and Rom&apos;s complaint.
                    </p>
                </div>

                <h2>MCP Server</h2>
                <p>
                    For the truly dedicated dream destroyers, we offer an MCP (Model
                    Context Protocol) server. Connect your AI assistant to SetFold and
                    let it reject dreams on your behalf.
                </p>

                <div className="api-card">
                    <span className="api-method post">POST</span>
                    <span className="api-path">/api/mcp</span>
                    <p className="api-desc">
                        MCP-compatible endpoint. Supports JSON-RPC 2.0. Available tools:
                        kill_dream, get_sitting_position, get_froffice_status. Connect
                        with any MCP-compatible client.
                    </p>
                </div>

                <div className="highlight">
                    <p>
                        &quot;We built an API so other people can destroy dreams at scale
                        without having to sit as badly as Rom does.&quot; — SetFold Engineering
                        (which is also just Rom)
                    </p>
                </div>

                <h2>Example Request</h2>
                <pre
                    style={{
                        background: "var(--bg-card)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "var(--radius-md)",
                        padding: "24px",
                        overflowX: "auto",
                        fontFamily: "monospace",
                        fontSize: "0.9rem",
                        lineHeight: "1.8",
                        color: "var(--text-secondary)",
                    }}
                >
                    {`curl -X POST /api/kill-dream \\
  -H "Content-Type: application/json" \\
  -d '{"dream": "An app that rates how people sit"}'

// Response:
{
  "verdict": "OBLITERATED",
  "score": 3,
  "roast": "You just described what Rom's spine already does for free.",
  "reason": "Nobody needs an app for this. Just look at Rom."
}`}
                </pre>

                <h2>Try It Live</h2>
                <p>
                    Head over to the{" "}
                    <Link href="/dream-killer" style={{ color: "var(--accent)", fontWeight: 600 }}>
                        Dream Killer
                    </Link>{" "}
                    page to submit your dream for destruction in real-time.
                </p>
            </div>
        </main>
    );
}
