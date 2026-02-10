export async function GET() {
    const positions = [
        "The Pretzel", "The Flamingo", "The Architect", "The Cobra",
        "The Contortionist", "The Throne", "Lying face-down on the floor",
        "Sitting on the desk instead of the chair",
    ];

    return Response.json({
        status: "operational",
        dreamsKilledToday: Math.floor(Math.random() * 500) + 42,
        totalDreamsKilled: 10847,
        coFounders: 0,
        frofficeTemperature: "always wrong",
        romCurrentPosition: positions[Math.floor(Math.random() * positions.length)],
        uptime: "who's counting",
        message: "SetFold is actively destroying dreams. All systems nominal.",
    });
}
