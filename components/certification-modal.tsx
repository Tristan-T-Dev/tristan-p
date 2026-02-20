'use client'

import React from 'react'
import { BadgeCheck } from 'lucide-react'

interface Certification {
  title: string
  issuer: string
  image?: string
  description?: string
}

interface CertificationModalProps {
  selectedCert: Certification | null
  onClose: () => void
}

export default function CertificationModal({ selectedCert, onClose }: CertificationModalProps) {
  if (!selectedCert) return null

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-3 sm:p-4 lg:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-white dark:bg-neutral-900 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Certificate Image */}
        {selectedCert.image && (
          <div className="w-full flex justify-center bg-neutral-100 dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 overflow-hidden">
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-auto max-h-[40vh] sm:max-h-[50vh] object-contain"
            />
          </div>
        )}

        {/* Content Section - Scrollable */}
        <div className="p-4 sm:p-6 lg:p-8 flex flex-col gap-3 sm:gap-4 overflow-y-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 w-fit">
            <BadgeCheck size={14} className="text-neutral-600 dark:text-neutral-400" />
            <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">CERTIFICATION</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-neutral-900 dark:text-neutral-50 leading-tight">
            {selectedCert.title}
          </h2>
          
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <span className="text-neutral-500 dark:text-neutral-400">Issued by</span>
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">{selectedCert.issuer}</span>
          </div>

          {selectedCert.description && (
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mt-2">
              {selectedCert.description}
            </p>
          )}

          <div className="mt-4 sm:mt-6 flex flex-col-reverse sm:flex-row gap-2 sm:gap-3">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium text-sm border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}