const complaints = [
    "It feels like a meat locker in here. I'm coding in a parka.",
    "Why is it 80 degrees? The fridge is working harder than I am.",
    "Perfect temperature for someone who sits in The Cobra position — the floor is nice and cold.",
    "I can see my breath. In my office. In July.",
    "The thermostat says 72°F but it's lying. It's always lying.",
    "Too hot. I've switched to Floor Mode for thermal regulation.",
    "The fridge is warmer than this room. I'm considering moving my desk inside it.",
    "Temperature is fine but the vibes are cold.",
];

export async function GET() {
    const actual = Math.floor(Math.random() * 30) + 55; // 55-85°F
    const thermostatSays = 72; // always says 72

    return Response.json({
        actual: `${actual}°F`,
        thermostatReading: `${thermostatSays}°F`,
        discrepancy: `${Math.abs(actual - thermostatSays)}°F`,
        comfortLevel: actual < 65 ? "Arctic" : actual > 78 ? "Saharan" : "Allegedly Fine",
        fridgeTemperature: "38°F (functioning normally, unlike everything else)",
        romComplaint: complaints[Math.floor(Math.random() * complaints.length)],
        hvacStatus: "confused",
        lastServiced: "never",
    });
}
