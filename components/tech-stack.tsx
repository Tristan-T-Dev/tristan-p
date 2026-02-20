'use client'

import React from 'react'
import { Container } from 'lucide-react'

interface TechBadgeProps {
  tech: string
}

const TechBadge = ({ tech }: TechBadgeProps) => (
  <span className="px-3 py-1 border rounded-lg text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/80 transition-colors">
    {tech}
  </span>
)

export default function TechStack() {
  const frontend = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS']
  const backend = ['Node.js', 'Express', 'PostgreSQL', 'MongoDB']
  const blockchain = ['Solidity', 'Move (Aptos)', 'Web3.js', 'Git', 'GitHub', 'Prisma', 'Figma', 'Vercel']

  return (
    <div className="border border-neutral-200 dark:border-neutral-700 p-4 sm:p-6 bg-white dark:bg-neutral-900 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-2 mb-4">
        <Container size={18} className="text-neutral-700 dark:text-neutral-300" />
        <h2 className="text-xl sm:text-2xl font-semibold">Tech Stack</h2>
      </div>

      {/* Frontend */}
      <div className="mb-4">
        <h3 className="font-semibold text-base sm:text-lg mb-2">Frontend</h3>
        <div className="flex flex-wrap gap-2">
          {frontend.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
      </div>

      {/* Backend */}
      <div className="mb-4">
        <h3 className="font-semibold text-base sm:text-lg mb-2">Backend</h3>
        <div className="flex flex-wrap gap-2">
          {backend.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
      </div>

      {/* Blockchain & Tools */}
      <div>
        <h3 className="font-semibold text-base sm:text-lg mb-2">Blockchain & Tools</h3>
        <div className="flex flex-wrap gap-2">
          {blockchain.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}