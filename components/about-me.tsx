'use client'

import React from 'react'
import { Briefcase } from 'lucide-react'

export default function AboutMe() {
  return (
    <div className="border border-neutral-200 dark:border-neutral-700 p-4 sm:p-6 bg-white dark:bg-neutral-900 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-2 mb-4">
        <Briefcase size={18} className="text-neutral-700 dark:text-neutral-300" />
        <h2 className="text-xl sm:text-2xl font-semibold">About Me</h2>
      </div>
      <p className="text-sm sm:text-base leading-relaxed mb-3">
        I'm <span className="font-bold">Tristan Jay B. Triñanes</span>, a passionate Software Developer from Cavite, Philippines,
        currently pursuing my <span className="font-bold">Bachelor of Science in Computer Science</span> at Cavite State University.
      </p>
      <p className="text-sm sm:text-base leading-relaxed mb-3">
        I specialize in full-stack web development using <span className="font-semibold">React</span>, <span className="font-semibold">Next.js</span>,
        <span className="font-semibold"> Node.js</span>, and <span className="font-semibold">PostgreSQL</span>, with a growing focus on blockchain
        technologies and decentralized applications.
      </p>
      <p className="text-sm sm:text-base leading-relaxed mb-3">
        I've gained hands-on experience building real-world solutions through hackathons such as{' '}
        Metis Network HyperHack, where I contributed to innovative DApps and developer tools — even winning{' '}
        <span className="font-bold">Track 3 for Infrastructure and Ecosystem Tools</span>.
      </p>
      <p className="text-sm sm:text-base leading-relaxed">
        As a <span className="font-bold">Google Career Certificate and DTI Scholar</span>, I'm driven by continuous learning, clean architecture,
        and meaningful impact through technology.
      </p>
    </div>
  )
}