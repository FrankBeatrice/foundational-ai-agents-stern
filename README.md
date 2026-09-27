# Project 1 Completion Package

## Files

1. `Part2_AI_Compute_Infrastructure_RAG.json`
   - Import this into n8n as your Part 2 workflow.
   - It contains the ingest path and the chat/retrieval path.

2. `ai_compute_support_kb.md`
   - This is the custom source document for your RAG.
   - It is hosted in this public GitHub repository.

## GitHub setup

Raw source URL used by n8n:

`https://raw.githubusercontent.com/FrankBeatrice/foundational-ai-agents-stern/main/ai_compute_support_kb.md`

The **Download AI Compute KB** node is already configured to the raw GitHub URL above.

GitHub is being used only to host the knowledge-base source for the HTTP Request node.

## n8n setup

1. Import `Part2_AI_Compute_Infrastructure_RAG.json`.
2. Open **Embeddings OpenAI** and choose your existing OpenAI credential.
3. Open **RAG Model (gpt-5.2)** and choose your existing OpenAI credential.
4. Verify **Download AI Compute KB** points to the raw GitHub URL shown above.
5. Save the workflow.
6. Execute **Load Knowledge Base** once.
7. Confirm the HTTP Request returns the markdown text.
8. Confirm **Insert KB into Vector Store** succeeds.
9. Open the chat trigger.
10. Test the questions below.

## Suggested test questions

- My H100 reaches 96C and shuts down. What should I do?
- nvidia-smi cannot see one GPU after a reboot. What information should I collect?
- Our CUDA application stopped working after a driver update. What diagnostics do you need?
- Training is suddenly much slower. What should I inspect before replacing hardware?
- Three compute nodes lost network connectivity at the same time. Should this be escalated?
- What information is required to request four additional GPUs?
- What is the university's reimbursement policy?

The final question is intentionally outside the knowledge base. A grounded RAG agent should say the current knowledge base does not contain that answer rather than inventing one.

## Submission

The assignment guide asks for two n8n workflow JSON files:
- Part 1: your existing `AI Compute Infrastructure Triage` workflow export.
- Part 2: `Part2_AI_Compute_Infrastructure_RAG.json`.

Your existing Part 1 workflow can remain as-is if it is running correctly. Export the current working version from n8n immediately before submission.

## Security

This repository version intentionally contains no API keys, OAuth tokens, credential IDs, passwords, or other private secrets. n8n credential references are names only and must be selected inside your own n8n account.

## One important note

The Part 2 workflow uses n8n's in-memory vector store, as allowed by the project guide. Because it is in-memory, re-run **Load Knowledge Base** after an n8n restart or whenever you change the source document.
