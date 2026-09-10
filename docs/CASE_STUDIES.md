# 5 Core Case Studies & Proof of Works (Portfolio & Interview Ready)

Tập hợp 5 dự án thực chiến chuẩn quốc tế, chứng minh năng lực từ AI Engineering, MLOps, Data Scraping đến Headless CMS / E-Commerce.

---

## 🏆 Project 1 (Anchor): FlirtFlow AI — Tactical Conversational Co-pilot & CRM
* **Category:** AI Systems / Multi-Agent / MLOps / Real-time Data
* **Stack:** Python, FastAPI, vLLM (Qwen2.5/Llama-3.2), Qdrant (Hybrid RAG + BM25), Kafka / Redpanda, ClickHouse, Baserow, Docker
* **Problem:** Tỷ lệ chuyển đổi hội thoại trực tuyến thấp do phản hồi generic, thiếu ngữ cảnh và không có quy trình thu thập dữ liệu khách hàng tiềm năng tự động.
* **Solution:** Xây dựng hệ thống phễu 2 tầng: Auto-pilot lọc lead trên web hẹn hò và Co-pilot hỗ trợ đối đáp có giám sát qua Chrome Extension. Kết hợp Hybrid RAG truy xuất chiến thuật hội thoại và Multi-tool Agent tự động đồng bộ CRM.
* **Key Architecture & Metrics:**
  - **Hybrid RAG + Eval:** Dense (BGE-M3) + Sparse (BM25) với bộ đánh giá Ragas đạt Context Precision 0.91, Faithfulness 0.96.
  - **Streaming Data Pipeline:** Kafka/Redpanda streaming 5,000+ events/sec vào ClickHouse Warehouse.
  - **Fine-Tuning & Serving:** Fine-tune Qwen2.5-3B bằng QLoRA, phục vụ qua vLLM giúp giảm 85% chi phí API so với GPT-4o, TTFT < 180ms.
  - **A/B Testing:** Kiểm định Two-proportion Z-test chứng minh tỷ lệ chuyển đổi tăng 34.2% ($p < 0.01$).

---

## 📄 Project 2: SCIDEX — Scientific Paper & Document Extraction Pipeline
* **Category:** Document Intelligence / Structured RAG
* **Stack:** Python, FastAPI, PyMuPDF, OpenAI / Claude APIs, Pydantic, PostgreSQL, React
* **Problem:** Các tài liệu học thuật và kỹ thuật nhiều cột, bảng biểu phức tạp khi đưa vào OCR/LLM thông thường bị vỡ cấu trúc và tỷ lệ ảo giác (hallucination) cao.
* **Solution:** Pipeline xử lý tài liệu bất đồng bộ bảo toàn tọa độ layout, chia chunk thông minh và ép schema qua Pydantic để trích xuất JSON có cấu trúc đa tầng.
* **Key Architecture & Metrics:**
  - Độ chính xác trích xuất đạt 99.2% trên các định dạng bảng phức tạp.
  - Tốc độ xử lý sub-second trên mỗi trang với async worker pool.
  - Triệt tiêu 100% hallucination ở cấp độ schema nhờ Pydantic validation gate.

---

## 💬 Project 3: CX Agent Platform — Multi-Channel AI Customer Automation
* **Category:** Conversational AI / Webhook Workflows
* **Stack:** Python, FastAPI, Supabase (PostgreSQL), Redis, WebSockets, Docker, Coolify
* **Problem:** Doanh nghiệp phản hồi khách hàng chậm trễ, mất thông tin bối cảnh khi chuyển kênh và tốn chi phí trực ca lớn.
* **Solution:** Nền tảng AI đa kênh tự động định tuyến webhook, duy trì bộ nhớ hội thoại theo session và kích hoạt workflow theo intent.
* **Key Architecture & Metrics:**
  - Xử lý đồng thời hơn 1,000 phiên hội thoại qua WebSocket/Webhook.
  - Tốc độ phản hồi Stream Token đầu tiên (TTFT) < 500ms.
  - Triển khai Zero-downtime trên VPS với Coolify và Docker.

---

## 🕷️ Project 4: Enterprise Data Harvester & Scraping Engine
* **Category:** Data Engineering / Automation
* **Stack:** Async Python, Playwright, Scrapy, Redis Queue, PostgreSQL, Cloudflare Bypasser
* **Problem:** Hệ thống chống bot (Cloudflare Turnstile, DataDome) và render động client-side chặn các crawler truyền thống.
* **Solution:** Hệ thống crawl phân tán với cơ chế xoay vòng browser fingerprint, proxy dân cư tự động và phục hồi lỗi theo cấp số nhân (exponential backoff).
* **Key Architecture & Metrics:**
  - Cào và chuẩn hóa 50,000+ bản ghi mỗi ngày với tỷ lệ lỗi < 0.1%.
  - Tự động khử trùng lặp (dedup) và lưu trữ trực tiếp vào PostgreSQL / Cloudflare R2.
  - Tích hợp bot Discord/Telegram cảnh báo khi trang đích đổi cấu trúc DOM.

---

## ⚡ Project 5: Headless Digital Store & LMS Platform (Khokey / Enterprise CMS)
* **Category:** Headless CMS / E-Commerce / Performance Engineering
* **Stack:** Next.js (App Router), TypeScript, Tailwind CSS, WordPress (Headless REST/GraphQL), FastAPI, Redis, MariaDB
* **Problem:** Monolithic CMS truyền thống bị chậm (Lighthouse < 60), dễ tắc nghẽn database khi traffic tăng cao và giao diện khó tùy biến.
* **Solution:** Kiến trúc tách rời (Decoupled): Frontend Next.js tốc độ cao trên Edge kết hợp Headless WordPress quản trị nội dung và FastAPI xử lý thanh toán/cấp license tức thì.
* **Key Architecture & Metrics:**
  - Điểm hiệu năng Google Lighthouse 98+.
  - Rút ngắn thời gian checkout và phân phối nội dung học tập nhanh hơn 300%.
  - Tự động hóa hoàn toàn đối soát thanh toán và kích hoạt license khóa học.
