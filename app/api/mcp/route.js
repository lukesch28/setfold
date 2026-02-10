// MCP (Model Context Protocol) Server — JSON-RPC 2.0 over HTTP
// Tools: kill_dream, get_sitting_position, get_froffice_status

const TOOLS = [
    {
        name: "kill_dream",
        description:
            "Submit a startup dream for destruction. SetFold will analyze it and return a verdict, roast, reason, and viability score. The score is always very low.",
        inputSchema: {
            type: "object",
            properties: {
                dream: {
                    type: "string",
                    description: "A description of the startup dream to be destroyed",
                },
            },
            required: ["dream"],
        },
    },
    {
        name: "get_sitting_position",
        description:
            "Get Rom's current sitting position. Returns one of his many ergonomically criminal poses along with a risk assessment and spinal integrity percentage.",
        inputSchema: {
            type: "object",
            properties: {},
        },
    },
    {
        name: "get_froffice_status",
        description:
            "Get the current status of The Froffice — SetFold HQ. Returns temperature readings (always wrong), comfort level, Rom's complaint, and HVAC status.",
        inputSchema: {
            type: "object",
            properties: {},
        },
    },
];

// ─── Tool Implementations ───

const verdicts = ["KILLED", "OBLITERATED", "FOLDED", "ANNIHILATED", "VAPORIZED"];
const roasts = [
    "Even Rom's posture has more backbone than this idea.",
    "This startup would have negative users — people would actively un-exist to avoid it.",
    "The only thing this disrupts is my faith in humanity.",
    "You've described something that already exists, but somehow worse.",
    "This is what happens when you brainstorm during a pivot on The Pivot Couch.",
];
const reasons = [
    "No market, no moat, no mercy. This dream is dead.",
    "Your TAM is 3 people and they all think it's a bad idea too.",
    "Revenue model unclear. Growth strategy: thoughts and prayers.",
    "We've seen better ideas written on Froffice napkins. And those were doodles.",
];

const positions = [
    { name: "The Pretzel", risk: "EXTREME", emoji: "🧘" },
    { name: "The Cobra", risk: "CRITICAL", emoji: "🐍" },
    { name: "The Flamingo", risk: "HIGH", emoji: "🦩" },
    { name: "The Throne", risk: "PSYCHOLOGICAL HAZARD", emoji: "👑" },
    { name: "Floor Mode", risk: "DEFCON 1", emoji: "🫠" },
];

const complaints = [
    "It feels like a meat locker in here.",
    "The thermostat is lying again.",
    "Temperature is fine but the vibes are cold.",
    "The fridge is warmer than this room.",
];

function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function handleKillDream(args) {
    return {
        dream: args.dream || "unspecified",
        verdict: pick(verdicts),
        roast: pick(roasts),
        reason: pick(reasons),
        score: Math.floor(Math.random() * 15),
        killedBy: "Rom (via MCP, from The Cobra position)",
        recommendation: "Get a real job.",
    };
}

function handleGetSittingPosition() {
    const pos = pick(positions);
    return {
        position: pos.name,
        emoji: pos.emoji,
        riskLevel: pos.risk,
        spinalIntegrity: `${Math.floor(Math.random() * 30)}%`,
        physiotherapistAlerted: true,
    };
}

function handleGetFrofficeStatus() {
    const temp = Math.floor(Math.random() * 30) + 55;
    return {
        temperature: `${temp}°F`,
        thermostatSays: "72°F",
        comfortLevel: temp < 65 ? "Arctic" : temp > 78 ? "Saharan" : "Allegedly Fine",
        romComplaint: pick(complaints),
        hvacStatus: "confused",
        fridgeStatus: "humming ominously",
    };
}

// ─── JSON-RPC Handler ───

function jsonRpcResponse(id, result) {
    return { jsonrpc: "2.0", id, result };
}

function jsonRpcError(id, code, message) {
    return { jsonrpc: "2.0", id, error: { code, message } };
}

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return Response.json(jsonRpcError(null, -32700, "Parse error"), { status: 400 });
    }

    const { id, method, params } = body;

    switch (method) {
        case "initialize":
            return Response.json(
                jsonRpcResponse(id, {
                    protocolVersion: "2024-11-05",
                    capabilities: { tools: {} },
                    serverInfo: {
                        name: "setfold-mcp",
                        version: "1.0.0",
                    },
                })
            );

        case "tools/list":
            return Response.json(jsonRpcResponse(id, { tools: TOOLS }));

        case "tools/call": {
            const toolName = params?.name;
            const toolArgs = params?.arguments || {};

            let result;
            switch (toolName) {
                case "kill_dream":
                    result = handleKillDream(toolArgs);
                    break;
                case "get_sitting_position":
                    result = handleGetSittingPosition();
                    break;
                case "get_froffice_status":
                    result = handleGetFrofficeStatus();
                    break;
                default:
                    return Response.json(
                        jsonRpcError(id, -32601, `Unknown tool: ${toolName}`)
                    );
            }

            return Response.json(
                jsonRpcResponse(id, {
                    content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
                })
            );
        }

        default:
            return Response.json(
                jsonRpcError(id, -32601, `Method not found: ${method}`)
            );
    }
}

// Handle GET for discoverability
export async function GET() {
    return Response.json({
        name: "setfold-mcp",
        version: "1.0.0",
        description:
            "SetFold MCP Server — destroy dreams, check Rom's sitting position, and monitor The Froffice. All via Model Context Protocol.",
        tools: TOOLS.map((t) => ({ name: t.name, description: t.description })),
        usage: "POST JSON-RPC 2.0 requests to this endpoint.",
    });
}
