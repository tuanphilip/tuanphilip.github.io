# 4 Core Case Studies (Portfolio & Upwork Ready)

Dưới đây là 4 dự án mẫu (Proof-of-Works) được đóng gói theo tiêu chuẩn kỹ thuật quốc tế (Problem → Solution → Architecture → Impact), sẵn sàng đưa vào Portfolio và Proposal.

---

## Project 1: SCIDEX — Scientific Paper & Document Extraction Pipeline

* **Category:** AI Systems / RAG / Document Intelligence
* **Stack:** Python, FastAPI, PyMuPDF, OpenAI / Claude APIs, Pydantic, PostgreSQL, React
* **Problem:** Traditional OCR and generic LLM extractors lose layout context, fail on multi-column academic/technical documents, and produce high hallucination rates in structured data.
* **Solution:** Built an asynchronous document processing pipeline that extracts raw text/tables with coordinate preservation, passes token chunks through strict Pydantic validation schemas, and extracts multi-nested entities.
* **Key Architecture & Metrics:**
  - 99.2% extraction accuracy on complex tabular and scientific formats.
  - Sub-second processing latency per page with async worker pools.
  - Schema-enforced JSON validation eliminating hallucinations.

---

## Project 2: CX Agent Platform — Multi-Channel AI Customer Automation

* **Category:** AI Automation / Real-time Systems
* **Stack:** Python, FastAPI, Supabase (PostgreSQL), Redis, WebSocket/Webhooks, Docker, Coolify
* **Problem:** Businesses lose qualified leads due to delayed response times and lack of automated context retention across customer chat channels.
* **Solution:** Developed an end-to-end multi-tenant AI conversational platform that integrates with webhooks, maintains conversation memory with vector retrieval, and triggers automated workflows based on intent detection.
* **Key Architecture & Metrics:**
  - Real-time webhook ingestion handling 1,000+ concurrent conversations.
  - Sub-500ms TTFT (Time To First Token) response streaming.
  - Zero downtime deployment on Linux VPS using Coolify and Docker containers.

---

## Project 3: Enterprise Data Harvester & Scraping Engine

* **Category:** Data Engineering / Automation
* **Stack:** Python, Playwright, Scrapy, Redis Queue, PostgreSQL, Cloudflare Bypasser, Docker
* **Problem:** Aggressive anti-bot WAFs (Cloudflare Turnstile, Akamai) and dynamic JS hydration prevent standard web crawlers from extracting daily pricing and market data.
* **Solution:** Engineered a distributed scraping pipeline with dynamic fingerprint rotation, automated residential proxy pooling, and automated error recovery.
* **Key Architecture & Metrics:**
  - 50,000+ records extracted daily with <0.1% failure rate.
  - Automated data normalization, deduplication, and direct S3/Postgres export.
  - Built-in alerting via Telegram/Discord bots on target DOM schema changes.

---

## Project 4: Headless Digital Store & LMS Platform (Khokey / Enterprise WordPress)

* **Category:** Full-Stack Web / Headless CMS / E-Commerce
* **Stack:** Next.js (App Router), TypeScript, Tailwind CSS, WordPress (Headless REST/GraphQL), FastAPI, Redis, MariaDB
* **Problem:** Standard monolithic CMS setups suffer from slow page load speeds (Core Web Vitals < 60), high database locks during traffic spikes, and rigid frontend customizations.
* **Solution:** Decoupled the architecture: High-performance Next.js frontend deployed on edge, utilizing WordPress purely as a headless content engine, with custom FastAPI microservices handling instant payment webhooks and license generation.
* **Key Architecture & Metrics:**
  - 98+ Google Lighthouse Performance Score.
  - 300% faster checkout and content delivery flow.
  - Automated payment reconciliation and instantaneous course/license delivery.
