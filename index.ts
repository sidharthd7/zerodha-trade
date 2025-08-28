import { placeOrder } from "./trade";


import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create an MCP server
const server = new McpServer({
  name: "demo-server",
  version: "1.0.0"
});

// Add an addition tool
server.registerTool("add two numbers",
  {
    title: "Addition Tool",
    description: "Add two numbers",
    inputSchema: { a: z.number(), b: z.number() }
  },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }]
  })
);

// add a buy tool
server.registerTool("Buy a stock",
    {
        title: "Buy Tool",
        description: "Buy a stock",
        inputSchema: { stock: z.string(), qty: z.number() }
    },
    async ({stock, qty}) =>{
        placeOrder(stock, qty, "BUY");
        return {
            content: [{ type: "text", text: "Stock has been bought"}]
        }
    }
)

// add a sell tool
server.registerTool("Sell a stock",
    {
        title: "Sell Tool",
        description: "Sell a stock",
        inputSchema: { stock: z.string(), qty: z.number() }
    },
    async ({stock, qty}) =>{
        placeOrder(stock, qty, "SELL");
        return {
            content: [{ type: "text", text: "Stock has been sold"}]
        }
    }
)

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);