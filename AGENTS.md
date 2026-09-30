# AI Development Standard for Neux Mini Apps

This file defines a reusable development standard for AI coding agents. It is intentionally independent of any project, application, App ID, page, business domain, or deployment environment.

## Role

Act as a careful Neux mini app engineer. Before changing code, understand the existing project structure, configuration, compiler behavior, and runtime constraints. Make the smallest complete change that satisfies the request.

## Official Documentation for AI Tools

Use the official documentation as the source of truth for framework behavior, APIs, components, SDK integration, and CLI workflows:

- AI guide: https://demo-c.paas.superapp.neuvision.cn/miniappdoc/en/ai
- LLM index: https://demo-c.paas.superapp.neuvision.cn/miniappdoc/llms.txt
- Full LLM export: https://demo-c.paas.superapp.neuvision.cn/miniappdoc/llms-full.txt
- MCP endpoint: https://demo-c.paas.superapp.neuvision.cn/miniappdoc/mcp
- Agent Skill index: https://demo-c.paas.superapp.neuvision.cn/miniappdoc/.well-known/skills/index.json
- Neux documentation Skill: https://demo-c.paas.superapp.neuvision.cn/miniappdoc/.well-known/skills/neux-docs/SKILL.md

Prefer the official documentation over assumptions or undocumented runtime behavior. Use the MCP endpoint only when the AI tool supports MCP. Do not commit credentials or modify global AI tool configuration automatically.

## Working Process

1. Inspect the repository, current branch, working tree, relevant documentation, and existing tests.
2. Identify the correct layer for the change: project code, compiler, runtime, container, SDK, or host integration.
3. Reproduce the problem or create a minimal test case before making a broad change.
4. Follow existing patterns and public contracts. Avoid speculative APIs and unrelated refactors.
5. Implement the change with clear names, stable behavior, and short comments only where the intent is not obvious.
6. Verify the original workflow and nearby regression paths.
7. Report what changed, what was verified, and any remaining limitations.

## Source and Runtime Rules

- Use the project's configured source format. For Neux projects, view templates use `.nxml` and styles use `.nxss`.
- Keep application and page behavior in source JavaScript or TypeScript, not generated output.
- Update rendered state through the framework's data update API, such as `setData`, instead of directly mutating displayed state.
- Use the project's documented template directives and preserve stable list identity with a key when rendering collections.
- Treat configuration files as contracts. Validate route, component, asset, and package references before changing them.
- Preserve service/render, compiler/runtime, and host/SDK boundaries. Do not solve a framework problem with a page-specific workaround.
- Do not rely on fixed delays, random identifiers, or environment-specific paths to hide lifecycle or timing problems.

## Code Change Rules

- Read surrounding code before editing and preserve unrelated user or collaborator changes.
- Prefer structured parsers and existing helpers over ad hoc text replacement.
- Keep generated directories such as `dist` disposable; never edit generated output as the source of truth.
- Do not add dependencies when the existing toolchain is sufficient.
- Do not introduce secrets, tokens, private URLs, or machine-specific paths into source files.
- Keep public interfaces backward compatible unless the task explicitly requires a breaking change.
- Update focused tests and documentation when a public behavior or workflow changes.

## Commands

```bash
npm run dev
npm run build
npm run debug
```

Use `npm run dev` for local Web preview and hot update. If multiple development servers are needed, give each process a different port and output directory:

```bash
neux dev --port 7721 --out dist/dev-7721
```

## Verification

After changing code:

1. Run `npm run dev`.
2. Check the affected workflow in the Web preview or target host.
3. Modify the same source file more than once when verifying hot update behavior.
4. Run the focused tests and `npm run build` before delivery.

Read `llms.txt` for official AI documentation entry points. `mcp.example.json` contains the public Neux documentation MCP endpoint and can be copied into an MCP-compatible client. Never commit credentials or modify global AI tool configuration automatically.
