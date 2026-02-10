const verdicts = ["KILLED", "OBLITERATED", "FOLDED", "ANNIHILATED", "VAPORIZED", "ULTRA KILLED"];

const roasts = [
    "This is the startup equivalent of bringing a spoon to a sword fight.",
    "Even Rom's sitting posture has more structural integrity than this idea.",
    "If this dream were a co-founder, even Rom would reject it.",
    "This idea has the same viability as Rom sitting in a chair correctly. Zero.",
    "The Froffice fridge has more energy than this concept.",
    "This dream didn't just die — it was never alive.",
    "You somehow made something that even blockchain couldn't make worse.",
    "This makes Rom look like a strategic genius, and that's saying something.",
    "The only thing this disrupts is my faith in humanity.",
    "We showed this to Rom and he laughed so hard he fell out of The Cobra position.",
    "This is what happens when someone googles 'startup idea' at 3am.",
    "Congratulations, you've reinvented something that already exists, but worse.",
    "This idea has pivot written all over it. And not the good kind.",
];

const reasons = [
    "The market doesn't want this. Nobody wants this. Even you don't really want this — you just thought of it in the shower.",
    "There are already 47 apps that do this, and they're all failing. You'd be #48.",
    "Your total addressable market is approximately 3 people, and two of them are your parents.",
    "Revenue model: ???. Growth strategy: ???. Exit plan: cry. This has SetFold written all over it.",
    "The unit economics here only work if you pay people negative money, which, legally, you cannot do.",
    "We ran the numbers. The numbers ran away.",
    "This idea requires users to fundamentally change their behavior, which is code for 'it will never work'.",
    "You're competing with trillion-dollar companies with what appears to be vibes and a Notion doc.",
];

export async function POST(request) {
    try {
        const body = await request.json();
        const dream = body.dream || "nothing";

        const verdict = verdicts[Math.floor(Math.random() * verdicts.length)];
        const roast = roasts[Math.floor(Math.random() * roasts.length)];
        const reason = reasons[Math.floor(Math.random() * reasons.length)];
        const score = Math.floor(Math.random() * 15); // Max 14% viability

        return Response.json({
            dream,
            verdict,
            roast,
            reason,
            score,
            killedAt: new Date().toISOString(),
            killedBy: "Rom (from The Cobra position)",
            recommendation: "Get a real job.",
        });
    } catch {
        return Response.json(
            { error: "Couldn't parse your dream. It was already dead on arrival." },
            { status: 400 }
        );
    }
}
