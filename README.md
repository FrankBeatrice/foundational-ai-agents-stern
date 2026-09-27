# AI Compute Infrastructure Agent

This project is an AI agent for **triaging and supporting AI compute infrastructure issues**.

It monitors incoming support email, understands the issue, classifies it by severity or request type, routes it to the right specialized response agent, replies automatically, and logs the interaction.

## What the agent does

- Reads incoming infrastructure support emails
- Identifies the affected system and problem
- Classifies the case as:
  - **CRITICAL**
  - **SUPPORT**
  - **REQUEST**
- Routes the case to the appropriate response agent
- Uses thread context so follow-up emails make sense
- Sends a response
- Logs the case in Google Sheets

## RAG knowledge agent

The project also includes a RAG agent for grounded infrastructure support.

It retrieves relevant guidance from:

`ai_compute_support_kb.md`

Instead of answering from general memory alone, it searches the knowledge base and uses the retrieved information to answer questions about:

- GPU overheating
- GPUs not being detected
- CUDA and driver issues
- Performance problems
- Networking
- Storage
- Hardware and capacity requests
- Escalation

## Why this matters

The goal is to show how an agent can combine:

**classification + routing + specialized agents + memory + retrieval + automated actions**

to handle a real operational workflow.

## Files

- `Part2_AI_Compute_Infrastructure_RAG.json` — n8n RAG workflow
- `ai_compute_support_kb.md` — knowledge base used by the RAG agent

## Security

No API keys, OAuth tokens, passwords, or private credentials are stored in this repository.
