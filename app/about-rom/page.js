export const metadata = {
    title: "About Rom — SetFold's Boneheaded Founder",
    description:
        "Meet Rom: the cofounderless founder who sits wrong, dreams wrong, and somehow started SetFold.",
};

export default function AboutRom() {
    return (
        <main>
            <section className="page-hero">
                <h1>
                    Meet <span className="gradient">Rom</span> 🦴
                </h1>
                <p className="subtitle">
                    Founder. Boner. Professional sitter-of-chairs-in-ways-chairs-were-not-designed-for.
                </p>
            </section>

            {/* The Sitting Problem */}
            <div className="content-block">
                <h2>The Sitting Situation</h2>
                <p>
                    Rom doesn&apos;t sit in chairs. He <em>haunts</em> them. Every piece
                    of furniture in a 10-foot radius is at risk of being contorted into a
                    makeshift throne of ergonomic horror. Physiotherapists have written
                    papers about him. OSHA has a file.
                </p>
                <p>
                    Imagine a human pretzel who&apos;s also trying to type on a laptop
                    balanced on one knee while the other leg is somehow behind his head.
                    That&apos;s a Tuesday for Rom.
                </p>

                <div className="highlight">
                    <p>
                        &quot;I don&apos;t have a sitting style. I have a sitting
                        <em>philosophy</em>. The chair is merely a suggestion.&quot; — Rom,
                        during a board meeting he held while sitting on the floor
                    </p>
                </div>

                <h2>The Gallery of Forbidden Sitting Positions</h2>
            </div>

            <div className="sitting-grid">
                <div className="sitting-card">
                    <span className="emoji">🧘</span>
                    <h3>The Pretzel</h3>
                    <p>Both legs crossed. On a swivel chair. During a Zoom call.</p>
                </div>
                <div className="sitting-card">
                    <span className="emoji">🦩</span>
                    <h3>The Flamingo</h3>
                    <p>One leg tucked under. The other dangling. Somehow stable.</p>
                </div>
                <div className="sitting-card">
                    <span className="emoji">🏗️</span>
                    <h3>The Architect</h3>
                    <p>Uses 3 chairs stacked together. Calls it &quot;optimized seating.&quot;</p>
                </div>
                <div className="sitting-card">
                    <span className="emoji">🐍</span>
                    <h3>The Cobra</h3>
                    <p>Slides so far down the chair he&apos;s basically horizontal. Still typing.</p>
                </div>
                <div className="sitting-card">
                    <span className="emoji">🎪</span>
                    <h3>The Contortionist</h3>
                    <p>Legs over armrest, torso twisted 90°. Claims it helps creativity.</p>
                </div>
                <div className="sitting-card">
                    <span className="emoji">👑</span>
                    <h3>The Throne</h3>
                    <p>Sits backwards on the chair. Rests chin on backrest. Stares.</p>
                </div>
            </div>

            {/* Why He's a Boner */}
            <div className="content-block">
                <h2>Why Rom is a Boner</h2>
                <p>
                    Let&apos;s be clear: Rom is a boner in the &quot;makes bone-headed
                    decisions&quot; sense. The kind of person who pivots the company three
                    times during a single standup meeting. The kind of founder who names
                    his startup by taking another startup&apos;s name and doing a lil
                    switcheroo on it.
                </p>
                <p>
                    His greatest hits include:
                </p>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '24px', lineHeight: '2.2' }}>
                    <li>Trying to raise a seed round with a deck that was just memes</li>
                    <li>Calling himself &quot;CEO, CTO, CFO, and Chief Sitting Officer&quot;</li>
                    <li>Listing &quot;vibes&quot; as a core competency on LinkedIn</li>
                    <li>Having zero co-founders because he scared them all away with his sitting</li>
                    <li>Once fell asleep in The Pretzel position during a pitch meeting</li>
                    <li>Insists on calling the office &quot;The Froffice&quot;</li>
                </ul>

                <div className="highlight">
                    <p>
                        &quot;Co-founders are overrated. Who needs a partner when you have
                        chronic lower back pain and an unshakeable belief that you&apos;re
                        always right?&quot; — Rom, Solo Founder & Professional Boner
                    </p>
                </div>

                <h2>The Cofounderless Manifesto</h2>
                <p>
                    Rom didn&apos;t choose to be cofounderless. Co-founders chose to
                    leave. After seeing him sit, they simply could not continue. One
                    prospective CTO lasted 4 minutes before saying &quot;I need to go
                    rethink my life&quot; and was never seen again.
                </p>
                <p>
                    But Rom sees this as a feature, not a bug. &quot;Every company that
                    failed had co-founders,&quot; he said once, incorrectly. &quot;I&apos;m
                    just removing a known risk factor.&quot;
                </p>
            </div>

            <div className="big-quote">
                <blockquote>
                    I watched Rom sit in an Aeron chair like it was a mechanical bull
                    and decided right then that I could never work with this man.
                </blockquote>
                <div className="attribution">
                    — The 7th person to decline a co-founder offer
                </div>
            </div>
        </main>
    );
}
