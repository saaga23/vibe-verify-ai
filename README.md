# VibeVerify AI



## Overview

VibeVerify AI is an innovative, fun, and powerful AI-powered tool that detects deepfakes, AI-generated images, and polished AI-enhanced photos in seconds. Built for the TerraCode Convergence hackathon, it solves the global 2026 crisis of synthetic content explosion—deepfake romance scams, fake profiles on dating apps like Tinder, and fraudulent video calls in remote work.  

With a single-screen, gamified UX, users get an instant "Realness Score" plus a hilarious, shareable personality report: your celeb twin, dateability %, meme energy, and more. It's not just detection—it's addictive entertainment that makes people want to check every pic voluntarily.  

Inspired by emerging platform safety tools (like TikTok's AI flags), VibeVerify is the first personal "digital trust layer" for everyday use. Global scope, no Africa limitation—tackles billions in fraud losses worldwide (WEF, Cyble reports 2025).

**Hackathon Alignment:**  
- **Innovation & Creativity (25%)**: Multimodal AI ensemble + metadata scanner + viral personality roast.  
- **Technical Implementation (25%)**: Hugging Face + Groq + Next.js MVP in <24 hours.  
- **Impact & Relevance (20%)**: Solves deepfake trust erosion in dating, hiring, social media.  
- **Design & UX (15%)**: <10-second "aha!" moment, single-screen lovable design.  
- **Presentation & Demo (15%)**: Live clickable Vercel deploy + 2-min video.

**Live Demo:** [vibe-verify-ai.vercel.app](https://vibe-verify-ai.vercel.app)  
**GitHub Repo:** [github.com/saaga23/vibe-verify-ai](https://github.com/saaga23/vibe-verify-ai)  
**Demo Video:** [YouTube Link or Devpost Embed]  <[!-- Add your video link here --](https://www.youtube.com/watch?v=TE9P4sk85qY)>



## Problem & Relevance

In the last 5 months (Oct 2025–Feb 2026), deepfake fraud exploded:  
- $25M Arup CEO video scam (KnowBe4 Feb 2026).  
- Billions lost in romance/investment scams using AI profiles (Resemble AI Q3 2025, WEF).  
- Cultural pain: Dating paranoia, broken trust in social media, family video calls.  

VibeVerify anchors to this "new danger"—the synthetic content epidemic making everyone terrified to trust online. It's the global "digital condom" for first contact (but fun and addictive).

## Features

- **Instant Detection**: Upload photo/screenshot → <10s Realness Score (e.g., 92% REAL 🔥 or 58% AI POLISHED 👀).  
- **AI Polish Scanner**: Catches metadata (C2PA, AI tool signatures) like LinkedIn—flags edited suits, skin polish, fake wrinkles.  
- **Viral Personality Report**: Hilarious Groq-powered roast: Celeb twin (e.g., Idris Elba vibes), dateability %, meme energy, archetype. People check their own pics just for laughs!  
- **Gamification**: Daily streak, global leaderboard, shareable vibe cards (viral by design).  
- **Multi-Modal Ready**: Handles images, voice notes, videos (expandable).  
- **Simple UX**: Single-screen, mobile-first, <10-second "aha!" moment—no dashboards.  

## Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS, Lucide Icons, Sonner Toasts, Canvas-Confetti.  
- **AI Detection**: Hugging Face Inference (dima806/ai_vs_real_image_detection model + BLIP captioning).  
- **Personality Roast**: Groq (Llama-3.3-70B) for savage, Gen-Z reports.  
- **Metadata Scan**: Custom byte reader for C2PA/AI signatures.  
- **Deployment**: Vercel free tier (live public URL).  
- **DevOps**: GitHub repo, CI/CD via GitHub Actions.  
- **Free Tiers Only**: 100% HF + Groq free APIs—no paid anything.  

All built in <24 hours for hackathon feasibility.

## Installation & Setup (Local Dev)

1. Clone the repo:  
   ```
   git clone https://github.com/saaga23/vibe-verify-ai.git
   cd vibe-verify-ai
   ```

2. Install dependencies:  
   ```
   npm install
   ```

3. Add env vars to `.env.local`:  
   ```
   NEXT_PUBLIC_HF_TOKEN=hf_XXXXXXXXXXXXXXXXXXXXXXXXXXXX  # Hugging Face read token
   GROQ_API_KEY=gsk_XXXXXXXXXXXXXXXXXXXXXXXXXX  # Groq API key
   ```

4. Run locally:  
   ```
   npm run dev
   ```
   Open http://localhost:3000.

5. Build & deploy:  
   ```
   npm run build
   ```
   Push to Vercel for live URL.

## Usage

1. Open the app → drop a photo (selfie, profile pic, screenshot).  
2. Click “RUN VIBE CHECK 🔥” → get score + full personality report in seconds.  
3. Share your vibe card, check leaderboard, build streak.  

Test cases:  
- Real selfie: High score, positive roast.  
- Polished AI headshot: Flags “AI POLISHED” with metadata warning, lower score.  
- Obvious deepfake: Low score, scam risk alert.  

## Why This Wins TerraCode Convergence

- **Innovation**: First fun, voluntary deepfake detector—people use it for the personality wow, not just safety.  
- **Technical**: Multimodal AI + metadata forensics + LLM roast in a lightweight MVP.  
- **Impact**: Global solution to $billions in deepfake fraud, trust erosion in dating/social.  
- **UX**: Lovable, gamified, <10s magic—ban complex dashboards.  
- **Execution**: Live Vercel deploy, GitHub repo, 2-min video—demo or die.  

Built by Aspita Abraham (Port Harcourt, Nigeria) – AI enthusiast turning 2026 tech into real impact.

## Contributors

- **Aspita Abraham** – Lead Developer & Designer.  

Open to collabs – fork & PR!

## License

MIT License – Free to use, modify, distribute.  

Copyright (c) 2026 Aspita Abraham  

---

This README is fully detailed, formatted for GitHub/Devpost, and designed to wow judges. Copy-paste into your repo's README.md, then push.  
