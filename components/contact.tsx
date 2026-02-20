'use client'

import React from 'react'
import { Mail, Calendar } from 'lucide-react'

export default function Contact() {
  return (
    <div className="border border-neutral-200 dark:border-neutral-700 p-4 sm:p-5 lg:p-6 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 bg-white dark:bg-neutral-900">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg dark:bg-neutral-800">
          <Mail size={16} className="text-neutral-700 dark:text-neutral-300" />
        </div>
        <h2 className="text-base sm:text-lg lg:text-xl font-bold">Contact</h2>
      </div>

      <div className="space-y-2.5 sm:space-y-3">
        <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-3 bg-neutral-50 dark:bg-neutral-800">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-1">
            <Mail size={12} />
            EMAIL
          </div>
          <p className="text-xs sm:text-xs font-medium break-all text-neutral-700 dark:text-neutral-300">
            trinanes.tristanjay@gmail.com
          </p>
        </div>

        <button className="w-full border border-neutral-200 dark:border-neutral-700 rounded-lg p-3 hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-200 bg-white dark:bg-neutral-800 group text-left">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-1">
            <Calendar size={12} />
            SCHEDULE
          </div>
          <a href="https://calendar.app.google/e1hk8gNuRb5xXW2aA" className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white transition-colors">
            Book a call →
          </a>
        </button>
      </div>
    </div>
  )
}