export const metadata = {
    title: "The Froffice™ — SetFold HQ",
    description:
        "Welcome to The Froffice: half fridge, half office. The mythical workspace where dreams are destroyed and the temperature is always wrong.",
};

export default function TheFroffice() {
    return (
        <main>
            <section className="page-hero">
                <h1>
                    The <span className="gradient">Froffice</span>™ 🏠
                </h1>
                <p className="subtitle">
                    Half fridge. Half office. Fully dysfunctional. Welcome to SetFold HQ.
                </p>
            </section>

            <div className="content-block">
                <h2>What is The Froffice?</h2>
                <p>
                    The Froffice is not just an office. It&apos;s a state of mind — and
                    also a physical space that somehow always smells like cold pizza and
                    ambition. It&apos;s where Rom sits (incorrectly) and makes decisions
                    (also incorrectly) that shape the future of dream destruction.
                </p>
                <p>
                    The name comes from the fact that it&apos;s literally a converted
                    fridge — well, a room next to a fridge. The fridge humming is the
                    official background music. Spotify couldn&apos;t compete.
                </p>

                <div className="highlight">
                    <p>
                        &quot;The Froffice isn&apos;t a place. It&apos;s where gravity
                        gives up and productivity goes to die.&quot; — The only Glassdoor
                        review SetFold has ever received (1 star)
                    </p>
                </div>
            </div>

            {/* Zones */}
            <div className="section-header">
                <h2>Froffice Zones</h2>
                <p>A guided tour of the world&apos;s worst workspace</p>
            </div>

            <div className="froffice-zones">
                <div className="zone-card">
                    <span className="zone-icon">🪑</span>
                    <h3>The Sitting Arena</h3>
                    <p>
                        A collection of 14 different chairs, none of which Rom sits in
                        correctly. Features include: a beanbag with a dent shaped like a
                        question mark, an exercise ball he&apos;s never once sat on
                        properly, and a Herman Miller Aeron that he sits in backwards.
                    </p>
                </div>
                <div className="zone-card">
                    <span className="zone-icon">🧊</span>
                    <h3>The Actual Fridge</h3>
                    <p>
                        Contains 47 La Croix cans, a single piece of cheese from 2023, and
                        Rom&apos;s &quot;emergency pitch deck&quot; (it&apos;s just printed
                        memes in a folder). The fridge hum is 60Hz — the exact frequency
                        of broken dreams.
                    </p>
                </div>
                <div className="zone-card">
                    <span className="zone-icon">📊</span>
                    <h3>The War Room</h3>
                    <p>
                        A whiteboard covered in illegible diagrams that Rom calls
                        &quot;strategy.&quot; No one has ever decoded them. One appears to
                        be a flowchart that just says &quot;vibes → profit?&quot; with a
                        bunch of arrows pointing nowhere.
                    </p>
                </div>
                <div className="zone-card">
                    <span className="zone-icon">🛋️</span>
                    <h3>The Pivot Couch</h3>
                    <p>
                        Where Rom lies down and announces a new company direction every
                        48 hours. The couch has absorbed so many pivots it&apos;s developed
                        sentience and tried to leave twice.
                    </p>
                </div>
                <div className="zone-card">
                    <span className="zone-icon">☕</span>
                    <h3>The Coffee Corner</h3>
                    <p>
                        A Nespresso machine that only works when you hit it at the right
                        angle. Rom claims the inconsistency &quot;keeps the team
                        sharp.&quot; There is no team. It&apos;s just Rom.
                    </p>
                </div>
                <div className="zone-card">
                    <span className="zone-icon">🚪</span>
                    <h3>The Exit</h3>
                    <p>
                        The most-used feature of The Froffice. Every co-founder candidate
                        has used this within 5 minutes of their first visit. It has a
                        &quot;Days Since Last Co-founder Departure&quot; counter. Currently
                        at: 0.
                    </p>
                </div>
            </div>

            {/* Daily Schedule */}
            <div className="section-header">
                <h2>A Day in The Froffice</h2>
                <p>Rom&apos;s actual schedule (he wrote this himself)</p>
            </div>

            <div className="timeline">
                <div className="timeline-item">
                    <div className="time">6:00 AM</div>
                    <h3>Arrive at The Froffice</h3>
                    <p>
                        Unlock the door. Greet the fridge. Attempt to sit in the Aeron
                        chair normally. Fail. Default to The Cobra position.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="time">7:00 AM</div>
                    <h3>Morning Standup (Solo)</h3>
                    <p>
                        Rom holds a standup meeting with himself. He disagrees with his own
                        points. The meeting runs 45 minutes over.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="time">9:00 AM</div>
                    <h3>Dream Destruction Hours</h3>
                    <p>
                        Open the inbox. Read incoming dream submissions. Laugh. Respond
                        with personalized rejection notes written in Comic Sans.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="time">12:00 PM</div>
                    <h3>Lunch at the Fridge</h3>
                    <p>
                        Eat the emergency cheese. Regret it. Order DoorDash. Eat that
                        sitting upside-down on The Pivot Couch.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="time">2:00 PM</div>
                    <h3>Pivot O&apos;Clock</h3>
                    <p>
                        Announce a new company direction on the whiteboard. Erase it.
                        Announce another one. This happens 3-4 times.
                    </p>
                </div>
                <div className="timeline-item">
                    <div className="time">5:00 PM</div>
                    <h3>Close The Froffice</h3>
                    <p>
                        Turn off the lights. Whisper &quot;good night&quot; to the fridge.
                        Leave in The Flamingo walk (one leg barely touching the ground).
                    </p>
                </div>
            </div>

            <div className="big-quote">
                <blockquote>
                    The Froffice is proof that you don&apos;t need a WeWork to build
                    something truly terrible. You just need a fridge, bad posture, and
                    the unearned confidence of a man who calls himself a founder.
                </blockquote>
                <div className="attribution">
                    — TechCrunch, in an article they never actually published
                </div>
            </div>
        </main>
    );
}
