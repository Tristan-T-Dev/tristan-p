'use client'

import React from 'react'
import { BadgeCheck } from 'lucide-react'

interface Certification {
  title: string
  issuer: string
  image?: string
  description?: string
}

interface CertificationsProps {
  certifications: Certification[]
  onSelectCert: (cert: Certification) => void
}

export default function Certifications({ certifications, onSelectCert }: CertificationsProps) {
  return (
    <div className="border border-neutral-200 dark:border-neutral-700 p-4 sm:p-5 lg:p-6 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 bg-white dark:bg-neutral-900">
      <div className="flex items-center gap-2 mb-4 sm:mb-5">
        <div className="p-2 rounded-lg dark:bg-neutral-800">
          <BadgeCheck size={18} className="text-neutral-700 dark:text-neutral-300" />
        </div>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Certifications</h2>
      </div>

      <div className="space-y-2.5 sm:space-y-3">
        {certifications.map((cert, index) => (
          <button
            key={index}
            onClick={() => onSelectCert(cert)}
            className="w-full text-left rounded-lg sm:rounded-xl border border-neutral-200 dark:border-neutral-700 px-3.5 sm:px-4 py-3 sm:py-3.5 bg-gradient-to-br from-black to-neutral-800 dark:from-neutral-800 dark:to-neutral-900 text-white hover:cursor-pointer hover:shadow-lg active:scale-[0.98] transition-all duration-200"
          >
            <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-0.5">{cert.title}</h3>
            <p className="text-xs sm:text-sm text-neutral-300 dark:text-neutral-400">{cert.issuer}</p>
          </button>
        ))}
      </div>
    </div>
  )
}