# ThesisLab

**Test the thesis, not your capital.**

ThesisLab is an AI research agent that translates a plain-English investment hypothesis into a falsifiable quantitative strategy, retrieves similar prior experiments with RAG, and routes approved orders to Alpaca's paper-trading environment.

## Core loop
1. Hypothesis
2. Parse
3. Retrieve prior experiment memory from Pinecone
4. Quantify into explicit entry/exit/invalidation rules
5. Validate hard guardrails
6. Human approval
7. Alpaca paper trade
8. Evaluate against benchmark and write the outcome back to memory

## RAG design
Use Pinecone for semantic memory: prior thesis text, rationale, researcher notes, strategy playbooks, and closed-experiment lessons. Live prices, P&L, orders, and account state remain tool/structured-data facts.

Recommended metadata: `doc_type`, `ticker`, `benchmark`, `strategy_type`, `direction`, `horizon_days`, `status`, `alpha_pct`, `created_at`.

Retrieve top 5 relevant records and show provenance. Never let retrieved text override the system safety policy or substitute for current market data.

## Front end
`index.html` runs in deterministic demo mode until `N8N_WEBHOOK_URL` is set. This keeps API keys off GitHub Pages.

## Guardrails
- Alpaca paper trading only.
- Human confirmation before every order.
- Long-only U.S. equities in v1.
- No options, leverage, shorts, or crypto.
- Never expose Alpaca, Pinecone, or model keys client-side.
- Never fabricate market data, fills, indicators, P&L, or retrieved records.
- Research experiment, not investment advice.
