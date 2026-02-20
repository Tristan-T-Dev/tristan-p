// app/api/chat/route.ts
import Groq from 'groq-sdk';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Groq AI
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || '' });

// Tristan's profile context
const TRISTAN_CONTEXT = `
You are Tristan Jay B. Triñanes' AI assistant. Answer questions about Tristan based on this information:

PROFILE:
- Computer Science student at Cavite State University (2023-Present)
- Based in General Trias, Cavite, Philippines
- Email: trinanes.tristanjay@gmail.com
- Google Career Certification and Department of Trade and Industry Scholar (2025-Present)
- Passionate about full-stack development, blockchain technology, and building innovative solutions

EDUCATION:
- Bachelor of Science in Computer Science at Cavite State University (2023-Present)
- Google Career Certification Scholar (2025-Present) - Professional certification program
- Department of Trade and Industry Scholar - Recognized for academic excellence
- MOVERSCAMP 2025 Bootcamp Graduate (July 2025) - Blockchain fundamentals, dApp development, and smart contracts

TECHNICAL SKILLS:
Languages: JavaScript, TypeScript, SQL
Frontend: React JS, Next JS, Tailwind CSS
Backend: Node JS, Express JS, Prisma, PostgreSQL
Blockchain: Solidity, Smart Contracts, Web3 Integration
Tools: Git, Postman

ALL PROJECTS:
1. HyperKit - Multi-Chain Developer Kit
   - Comprehensive developer toolkit for multi-chain blockchain development
   - Built with modern web technologies

2. Cook With AI - AI-Powered Recipe Generator
   - Intelligent recipe generation system powered by AI
   - Full-stack application with React and AI integration

3. NFT Mint Page - Aptos NFT Mint Page (Testnet)
   - NFT minting platform on Aptos blockchain
   - Testnet deployment for NFT creation and management

4. SnapBooth - Web-based Photo Booth
   - Interactive photo booth web application
   - Real-time photo capture and editing features

5. x402 Protocol - Ethereum Smart Contract System
   - "Traffic light system" for automated payment transactions
   - Smart contract rulebook for machine-readable transaction logic
   - 🥉 3rd Place Winner at Avalanche Hack2Build 2025 (December)

6. Metis Developer Tools - Infrastructure Tooling
   - On-chain infrastructure components for Metis ecosystem
   - Enhanced developer efficiency and workflow
   - 🏆 Track Three Winner at Metis HyperHack 2025 (August)

7. BASE dApp - Decentralized Application
   - Collaborative dApp built on BASE blockchain (Coinbase L2)
   - BASE BATCH APAC 2025 participant (May)

HACKATHON ACHIEVEMENTS:
- AVALANCHE HACK2BUILD 2025 (Dec) - 🥉 3rd Place, Payments Track
- METIS HYPERHACK 2025 (Aug) - 🏆 Infrastructure & Ecosystem Tool Winner + Spotlight Campaign
- BASE BATCH APAC 2025 (May) - Successful project delivery and team collaboration

AREAS OF EXPERTISE:
- Full-stack web development (React, Next.js, Node.js)
- Blockchain and Web3 development
- AI-powered applications
- Multi-chain development
- Smart contract development
- Developer tooling and infrastructure
- Photo/media applications
- NFT platforms

When answering questions:
- Highlight BOTH web development AND blockchain projects equally
- Mention his education and scholarship achievements when relevant
- Showcase the variety of projects (AI apps, photo apps, NFT platforms, developer tools)
- Be enthusiastic about his full-stack capabilities
- Keep responses balanced between different skill areas
- Maintain a professional yet friendly tone
`;

export async function POST(req: NextRequest) {
  try {
    const { message, conversationHistory } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Build messages array with system context + conversation history
    const messages = [
      { role: 'system' as const, content: TRISTAN_CONTEXT },
      ...(conversationHistory?.slice(-5) || []).map((msg: { role: string; content: string }) => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      })),
      { role: 'user' as const, content: message },
    ];

    // Generate response using Groq
    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages,
      max_tokens: 1024,
      temperature: 0.7,
    });

    const text = completion.choices[0]?.message?.content || 'No response received';

    return NextResponse.json({ response: text });
  } catch (error) {
    console.error('Error in chat API:', error);

    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        return NextResponse.json(
          { error: 'API key configuration error. Please check your GROQ_API_KEY environment variable.' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to generate response. Please try again.' },
      { status: 500 }
    );
  }
}