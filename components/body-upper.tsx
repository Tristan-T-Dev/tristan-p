'use client'

import React from 'react'
import { Briefcase, Container, Award } from 'lucide-react'

export default function BodyUpper() {
  return (
    <div className="w-full bg-transparent text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 space-y-4 sm:space-y-5 lg:space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {/* LEFT COLUMN - About Me & Tech Stack */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-6">
            {/* About Me */}
            <div className="rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-neutral-700 p-4 sm:p-6 bg-white dark:bg-neutral-900 hover:shadow-md transition-shadow duration-300">
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

            {/* Tech Stack */}
            <div className="rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-neutral-700 p-4 sm:p-6 bg-white dark:bg-neutral-900 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-4">
                <Container size={18} className="text-neutral-700 dark:text-neutral-300" />
                <h2 className="text-xl sm:text-2xl font-semibold">Tech Stack</h2>
              </div>

              {/* Frontend */}
              <div className="mb-4">
                <h3 className="font-semibold text-base sm:text-lg mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 border rounded-lg text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="mb-4">
                <h3 className="font-semibold text-base sm:text-lg mb-2">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 border rounded-lg text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Blockchain & Tools */}
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">Blockchain & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Solidity', 'Move (Aptos)', 'Web3.js', 'Git', 'GitHub', 'Prisma', 'Figma', 'Vercel'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 border rounded-lg text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT Column - Experience Timeline */}
          <div className="lg:col-span-2 rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-neutral-700 p-4 sm:p-6 bg-white dark:bg-neutral-900 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Award size={20} className="text-neutral-700 dark:text-neutral-300" />
              <h2 className="text-xl sm:text-2xl font-semibold">Experience</h2>
            </div>
            <div className="relative pl-4 border-l-2 border-neutral-200 dark:border-neutral-700 space-y-6">
              {[
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
              ].map((exp, i) => (
                <div key={i} className="relative pl-4">
                  <span className="absolute -left-[23px] top-1.5 w-3.5 h-3.5 rounded-full bg-black dark:bg-white border-2 border-white dark:border-neutral-900"></span>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                      <h3 className="font-semibold text-sm sm:text-base text-black dark:text-white">{exp.role}</h3>
                      <span className="text-xs border px-2 py-0.5 rounded-full border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 w-fit">
                        {exp.year}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-1">{exp.company}</p>
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
