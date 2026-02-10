const positions = [
    {
        name: "The Pretzel",
        description: "Both legs crossed on a swivel chair. Spinal cord filing for divorce.",
        riskLevel: "EXTREME",
        emoji: "🧘",
    },
    {
        name: "The Flamingo",
        description: "One leg tucked under, the other dangling into the void. Somehow stable.",
        riskLevel: "HIGH",
        emoji: "🦩",
    },
    {
        name: "The Architect",
        description: "Three chairs stacked together in a load-bearing nightmare.",
        riskLevel: "STRUCTURAL HAZARD",
        emoji: "🏗️",
    },
    {
        name: "The Cobra",
        description: "Slides so far down the chair he's basically lying on the floor. Still typing.",
        riskLevel: "CRITICAL",
        emoji: "🐍",
    },
    {
        name: "The Contortionist",
        description: "Legs over armrest, torso twisted 90 degrees. Claims it helps creativity.",
        riskLevel: "OSHA VIOLATION",
        emoji: "🎪",
    },
    {
        name: "The Throne",
        description: "Sitting backwards on the chair, chin on backrest, staring into your soul.",
        riskLevel: "PSYCHOLOGICAL HAZARD",
        emoji: "👑",
    },
    {
        name: "Floor Mode",
        description: "Has abandoned the chair entirely. Lying face-down on the floor. Still in a meeting.",
        riskLevel: "DEFCON 1",
        emoji: "🫠",
    },
    {
        name: "The Desktop",
        description: "Sitting on the desk. The chair is being used as a footrest.",
        riskLevel: "MODERATE INSANITY",
        emoji: "🪑",
    },
];

export async function GET() {
    const position = positions[Math.floor(Math.random() * positions.length)];

    return Response.json({
        currentPosition: position,
        lastChanged: new Date(Date.now() - Math.floor(Math.random() * 3600000)).toISOString(),
        chairsCurrentlyInUse: Math.floor(Math.random() * 4) + 1,
        physiotherapistAlerted: Math.random() > 0.3,
        spinalIntegrity: `${Math.floor(Math.random() * 30)}%`,
        message: `Rom is currently in ${position.name} position. Send help.`,
    });
}
