'use client'

import React from 'react'
import { Link, ExternalLink } from 'lucide-react'

interface SocialLink {
  name: string
  link: string
}

interface SocialLinksProps {
  socialLinks: SocialLink[]
}

export default function SocialLinks({ socialLinks }: SocialLinksProps) {
  return (
    <div className="border border-neutral-200 dark:border-neutral-700 p-4 sm:p-5 lg:p-6 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 bg-white dark:bg-neutral-900">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg dark:bg-neutral-800">
          <Link size={16} className="text-neutral-700 dark:text-neutral-300" />
        </div>
        <h2 className="text-base sm:text-lg lg:text-xl font-bold">Social</h2>
      </div>

      <div className="space-y-2">
        {socialLinks.map((s, i) => (
          <a
            key={i}
            href={s.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-2 border border-neutral-200 dark:border-neutral-700 rounded-lg px-3 py-2.5 hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-600 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 bg-white dark:bg-neutral-800 group"
          >
            <span className="font-medium text-sm">{s.name}</span>
            <ExternalLink size={14} className="text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors" />
          </a>
        ))}
      </div>
    </div>
  )
}