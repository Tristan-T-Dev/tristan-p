'use client'

import React from 'react'
import AboutMe from '@/components/about-me'
import TechStack from '@/components/tech-stack'
import ExperienceTimeline from '@/components/experience-timeline'

export default function BodyUpper() {
  return (
    <div className="w-full bg-transparent text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 space-y-4 sm:space-y-5 lg:space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-6">
          {/* LEFT COLUMN - About Me & Tech Stack */}
          <div className="lg:col-span-4 grid grid-cols-1">
            <AboutMe />
            <TechStack />
          </div>

          {/* RIGHT COLUMN - Experience Timeline */}
          <div className="lg:col-span-2">
            <ExperienceTimeline />
          </div>
        </div>
      </div>
    </div>
  )
}