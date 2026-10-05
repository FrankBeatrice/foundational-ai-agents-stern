# Pinecone RAG design

Pinecone is the semantic research-memory layer, not the market-data source of truth.

## Embed
- prior thesis text
- agent rationale
- researcher notes
- strategy playbooks
- closed-experiment lessons

## Keep structured
Current price, P&L, order state, fills, account balance, timestamps, and numeric indicators should be read from Alpaca / the experiment log.

## Record text
Thesis + asset + benchmark + horizon + strategy + entry/exit/invalidation rule + outcome + lesson.

## Metadata
Use doc_type, ticker, benchmark, strategy_type, direction, horizon_days, status, alpha_pct, and created_at.

## Retrieval recipe
1. Normalize thesis to 1–3 sentences.
2. Query top 8 semantically similar records.
3. Keep at most 3 prior outcomes + 2 playbooks.
4. Prefer same ticker, then same strategy family; retain one cross-asset analogue when relevant.
5. Send only the compact selected context to the LLM.
6. Show source IDs in the response.

## Write-back
When a paper experiment closes, upsert an outcome record with benchmark-relative performance, whether the falsifiable claim was supported, and one short lesson.
