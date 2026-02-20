'use client'

import React from 'react'
import { ToyBrick, ExternalLink } from 'lucide-react'

interface Project {
  title: string
  desc: string
  link: string
}

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className="border border-neutral-200 dark:border-neutral-700 p-4 sm:p-5 lg:p-6 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 bg-white dark:bg-neutral-900">
      <div className="flex items-center">
        <div className="p-2 rounded-lg dark:bg-neutral-800">
          <ToyBrick size={18} className="text-neutral-700 dark:text-neutral-300" />
        </div>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Projects</h2>
      </div>

      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-3 sm:gap-3.5 lg:gap-4 pt-4 sm:pt-5">
        {projects.map((proj, index) => (
          <a
            key={index}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-neutral-200 dark:border-neutral-700 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-600 hover:-translate-y-1 active:translate-y-0 transition-all duration-200 bg-white dark:bg-neutral-800"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-sm sm:text-base lg:text-lg flex-1">{proj.title}</h3>
              <ExternalLink size={14} className="text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors flex-shrink-0 mt-0.5" />
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-2.5 sm:mb-3 line-clamp-2">{proj.desc}</p>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-neutral-500 dark:text-neutral-400 truncate bg-neutral-200 px-2 py-0.5 rounded-sm">
                {proj.link.replace('https://', '').split('/')[0]}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}