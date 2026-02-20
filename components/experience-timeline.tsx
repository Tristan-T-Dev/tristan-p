'use client'

import React from 'react'
import { Award, Trophy, GraduationCap, Sparkles } from 'lucide-react'

const getIcon = (role: string) => {
  if (role.includes('Winner')) return <Trophy className="w-3.5 h-3.5" />
  if (role.includes('Scholar') || role.includes('BS Computer')) return <GraduationCap className="w-3.5 h-3.5" />
  if (role.includes('Hello World')) return <Sparkles className="w-3.5 h-3.5" />
  return null
}

interface TimelineItemProps {
  role: string
  company: string
  year: string
  desc: string
  index: number
}

const TimelineItem = ({ role, company, year, desc, index }: TimelineItemProps) => {
  const icon = getIcon(role)
  
  return (
    <div 
      className="relative pl-6 group"
      style={{
        animation: `fadeIn 0.4s ease-out ${index * 0.08}s both`
      }}
    >
      {/* Timeline dot */}
      <div className="absolute -left-[21px] top-2">
        <div className="w-[42px] h-[42px] flex items-center justify-center">
          <div className="w-9 h-9 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-600 group-hover:border-neutral-900 dark:group-hover:border-white transition-all duration-300 flex items-center justify-center group-hover:scale-110">
            {icon && (
              <span className="text-neutral-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                {icon}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pb-8 group-hover:translate-x-1 transition-transform duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-2">
          <h3 className="font-semibold text-sm sm:text-base text-black dark:text-white">
            {role}
          </h3>
          <span className="text-xs px-2.5 py-1 rounded-full border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 w-fit group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800 transition-colors">
            {year}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-2">
          {company}
        </p>
        <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  )
}

export default function ExperienceTimeline() {
  const experiences = [
    {
      role: 'Avalanche Network Hack2Build Winner',
      company: 'Avalanche Network',
      year: '2025',
      desc: '3rd Place - Payments x402 Protocol.',
    },
    {
      role: 'Metis Network HyperHack Winner',
      company: 'Metis Network',
      year: '2025',
      desc: 'Winner of Track 3 - Infrastructure & Ecosystem Growth.',
    },
    {
      role: 'Google Career Certificate Scholar',
      company: 'Google & DTI Philippines',
      year: '2025',
      desc: 'Completed advanced training in project management and full-stack web development.',
    },
    {
      role: 'BS Computer Science',
      company: 'Cavite State University',
      year: '2023',
      desc: 'Focused on software engineering, web technologies, and systems development.',
    },
    {
      role: 'Hello World! 👋',
      company: 'Home',
      year: '2023',
      desc: 'Wrote my first line of code.',
    },
  ]

  return (
    <div className="border border-neutral-200 dark:border-neutral-700 p-5 sm:p-7 bg-white dark:bg-neutral-900 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-2.5 mb-6">
        <Award size={20} className="text-neutral-700 dark:text-neutral-300" />
        <h2 className="text-xl sm:text-2xl font-semibold text-black dark:text-white">
          Experience
        </h2>
      </div>
      
      <div className="relative border-l-2 border-neutral-200 dark:border-neutral-700">
        {experiences.map((exp, i) => (
          <TimelineItem key={i} {...exp} index={i} />
        ))}
      </div>
    </div>
  )
}