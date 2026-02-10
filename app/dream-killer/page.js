"use client";

import { useState } from "react";

export default function DreamKiller() {
    const [dream, setDream] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const killDream = async () => {
        if (!dream.trim()) return;
        setLoading(true);
        setResult(null);
        try {
            const res = await fetch("/api/kill-dream", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ dream }),
            });
            const data = await res.json();
            setResult(data);
        } catch {
            setResult({
                verdict: "ULTRA KILLED",
                reason: "Your dream was so bad it crashed our servers. Even our API couldn't handle it.",
                score: 0,
                roast: "This dream didn't just die. It was never alive.",
            });
        }
        setLoading(false);
    };

    return (
        <main>
            <section className="page-hero">
                <h1>
                    Dream <span className="gradient">Killer</span> 💀
                </h1>
                <p className="subtitle">
                    Submit your dream. We&apos;ll tell you why it&apos;s terrible. For free.
                    Because crushing spirits shouldn&apos;t have a paywall.
                </p>
            </section>

            {/* Dream Submission */}
            <div className="content-block">
                <div
                    style={{
                        background: "var(--bg-card)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "var(--radius-lg)",
                        padding: "32px",
                        marginBottom: "32px",
                    }}
                >
                    <label
                        htmlFor="dream-input"
                        style={{
                            display: "block",
                            fontFamily: "var(--font-display)",
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            marginBottom: "16px",
                        }}
                    >
                        Describe your startup dream:
                    </label>
                    <textarea
                        id="dream-input"
                        value={dream}
                        onChange={(e) => setDream(e.target.value)}
                        placeholder="e.g. An AI-powered app that helps dogs find their soulmates..."
                        rows={4}
                        style={{
                            width: "100%",
                            padding: "16px",
                            borderRadius: "var(--radius-md)",
                            background: "var(--bg-secondary)",
                            border: "1px solid var(--border-subtle)",
                            color: "var(--text-primary)",
                            fontFamily: "var(--font-sans)",
                            fontSize: "1rem",
                            resize: "vertical",
                            outline: "none",
                            lineHeight: "1.6",
                        }}
                    />
                    <button
                        className="btn btn-primary"
                        onClick={killDream}
                        disabled={loading || !dream.trim()}
                        style={{ marginTop: "16px", width: "100%", justifyContent: "center" }}
                    >
                        {loading ? "☠️ Annihilating..." : "💀 Kill This Dream"}
                    </button>
                </div>

                {/* Result */}
                {result && (
                    <div
                        style={{
                            background: "var(--bg-card)",
                            border: "1px solid var(--border-glow)",
                            borderRadius: "var(--radius-lg)",
                            padding: "32px",
                            animation: "fadeInUp 0.4s ease",
                        }}
                    >
                        <div
                            style={{
                                display: "inline-block",
                                padding: "6px 16px",
                                borderRadius: "100px",
                                background: "rgba(224, 64, 64, 0.15)",
                                color: "var(--accent)",
                                fontWeight: 700,
                                fontSize: "0.85rem",
                                fontFamily: "var(--font-display)",
                                marginBottom: "20px",
                            }}
                        >
                            VERDICT: {result.verdict}
                        </div>

                        <h3
                            style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "1.3rem",
                                marginBottom: "12px",
                            }}
                        >
                            {result.roast}
                        </h3>

                        <p style={{ color: "var(--text-secondary)", lineHeight: "1.8", marginBottom: "24px" }}>
                            {result.reason}
                        </p>

                        {/* Score meter */}
                        <div className="meter">
                            <div className="meter-label">
                                <span>Dream Viability</span>
                                <span>{result.score}%</span>
                            </div>
                            <div className="meter-bar">
                                <div
                                    className="meter-fill"
                                    style={{ width: `${result.score}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Pre-killed dreams */}
            <section className="section">
                <div className="section-header">
                    <h2>Previously Killed Dreams</h2>
                    <p>A graveyard of aspirations</p>
                </div>
                <div className="card-grid">
                    <div className="card">
                        <span className="card-icon">🐕</span>
                        <h3>&quot;Uber for Dog Walking&quot;</h3>
                        <p>
                            Killed in 0.3 seconds. Dogs don&apos;t need an app. They need a
                            person with legs. You&apos;re describing a leash.
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">🥑</span>
                        <h3>&quot;Blockchain Avocado Toast&quot;</h3>
                        <p>
                            Decentralized brunch? Each toast gets an NFT? The only thing
                            getting burned here is your VC&apos;s money.
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">🧘</span>
                        <h3>&quot;AI Meditation Coach&quot;</h3>
                        <p>
                            You want a robot to tell people to breathe? The free app called
                            &quot;being alive&quot; already does this.
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">👔</span>
                        <h3>&quot;LinkedIn but Fun&quot;</h3>
                        <p>
                            This is like saying &quot;a root canal but enjoyable.&quot;
                            Some things are definitionally unfixable.
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">🎵</span>
                        <h3>&quot;Spotify for Podcasts&quot;</h3>
                        <p>
                            That&apos;s... that&apos;s just Spotify. You described Spotify.
                            They already did this. Please sit down.
                        </p>
                    </div>
                    <div className="card">
                        <span className="card-icon">🤝</span>
                        <h3>&quot;Tinder for Co-founders&quot;</h3>
                        <p>
                            So people can swipe right on someone who&apos;ll ghost them after
                            2 weeks? We already have that — it&apos;s called StartupWeekend.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
