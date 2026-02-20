'use client'

import React from 'react'
import { MicVocal } from 'lucide-react'

export default function Speaking() {
  return (
    <div className="min-[500px]:col-span-2 lg:col-span-2 border border-neutral-200 dark:border-neutral-700 p-4 sm:p-5 lg:p-6 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 bg-white dark:from-neutral-900 dark:to-neutral-900/50">
      <div className="flex items-center gap-2 mb-3 sm:mb-4">
        <div className="p-2 rounded-lg dark:bg-neutral-800">
          <MicVocal size={16} className="text-neutral-700 dark:text-neutral-300" />
        </div>
        <h2 className="text-base sm:text-lg lg:text-xl font-bold">Speaking</h2>
      </div>
      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
        I'm available to speak at events on software development, blockchain, and innovative technologies.
      </p>
      <a
        href="https://www.linkedin.com/in/tristan-tri%C3%B1anes-7ba447356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-2 transition-all duration-200 text-black dark:text-white group"
      >
        Get in touch 
        <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
      </a>
    </div>
  )
}