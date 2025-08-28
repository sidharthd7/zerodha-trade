# zerodha-trade

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.21. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.


1. created a new app on developers.kite.trade
2. get api key, api secret, then get the access token
3. set it and place order by just the commands

MCP
- you are building a layer on the top of any 3rd party application's server, be it zerodha, slack, github think of it like a proxy server
- think of it as a bridge b/w your LLM and the external provider
- basically you are giving the LLM context that this is how you're gonna call functions on this service
- you can write it any language, it is a specification just like HTTP (you can create a HTTP server in any language)
- we'll be writing it in javascript

https://github.com/modelcontextprotocol/typescript-sdk 