'use client'
import React, { useState, useEffect } from 'react'
import {
  ToyBrick,
  BadgeCheck,
  Link,
  MicVocal,
  Mail,
  Calendar,
  ExternalLink
} from 'lucide-react'

const BodyLower = () => {
  const [selectedCert, setSelectedCert] = useState<
    { title: string; issuer: string; image?: string; description?: string } | null
  >(null)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedCert])

  const certifications = [
    {
      title: 'Software Development and Design',
      issuer: 'DICT',
      image: '/cert3.png',
      description:
        'This certification from the Department of Information and Communications Technology (DICT) demonstrates strong skills in software engineering principles, system design, and full-stack development using modern frameworks.'
    },
    {
      title: 'Google AI Essentials',
      issuer: 'Google',
      image: '/cert2.png',
      description:
        'The Google AI Essentials certification recognizes proficiency in artificial intelligence and machine learning fundamentals. It highlights the ability to design and implement ethical, data-driven AI solutions for real-world applications.'
    },
    {
      title: 'Back-end Web Developer',
      issuer: 'Bayan Academy',
      image: '/cert1.png',
      description:
        'The Bayan Academy Back-End Developer certification focuses on database management, API development, and server-side programming. It validates technical expertise in building secure, scalable, and efficient backend systems.'
    }
  ]

  const projects = [
    { title: 'HyperKit', desc: 'Metis Hyperion Developer Kit', link: 'https://hyperionkit.xyz' },
    { title: 'Cook With AI', desc: 'AI-Powered Recipe Generator', link: 'https://cookaidev.vercel.app' },
    { title: 'NFT Mint Page', desc: 'Aptos NFT Mint Page (Testnet)', link: 'https://nft-launchpad-teal.vercel.app' },
    { title: 'SnapBooth', desc: 'Web-based SnapBooth', link: 'https://snapbooth-v1-tantech.vercel.app/' }
  ]

  const socialLinks = [
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/tristan-tri%C3%B1anes-7ba447356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'GitHub', link: 'https://github.com/Tristan-T-Dev' }
  ]

  return (
    <div className="w-full bg-transparent text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 space-y-4 sm:space-y-5 lg:space-y-6">
        {/* TOP SECTION - Certifications & Projects */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          
          {/* Certifications */}
          <div className="rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-neutral-700 p-4 sm:p-5 lg:p-6 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 bg-white dark:bg-neutral-900">
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
                  onClick={() => setSelectedCert(cert)}
                  className="w-full text-left rounded-lg sm:rounded-xl border border-neutral-200 dark:border-neutral-700 px-3.5 sm:px-4 py-3 sm:py-3.5 bg-gradient-to-br from-black to-neutral-800 dark:from-neutral-800 dark:to-neutral-900 text-white hover:cursor-pointer hover:shadow-lg active:scale-[0.98] transition-all duration-200"
                >
                  <h3 className="font-semibold text-sm sm:text-base lg:text-lg mb-0.5">{cert.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-300 dark:text-neutral-400">{cert.issuer}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-neutral-700 p-4 sm:p-5 lg:p-6 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 bg-white dark:bg-neutral-900">
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <div className="p-2 rounded-lg dark:bg-neutral-800">
                <ToyBrick size={18} className="text-neutral-700 dark:text-neutral-300" />
              </div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Projects</h2>
            </div>

            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-3 sm:gap-3.5 lg:gap-4">
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
        </div>

        {/* BOTTOM SECTION - Social, Speaking & Contact */}
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          
          {/* Social Links */}
          <div className="rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-neutral-700 p-4 sm:p-5 lg:p-6 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 bg-white dark:bg-neutral-900">
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

          {/* Speaking */}
          <div className="min-[500px]:col-span-2 lg:col-span-2 rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-neutral-700 p-4 sm:p-5 lg:p-6 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 bg-white dark:from-neutral-900 dark:to-neutral-900/50">
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

          {/* Contact */}
          <div className="rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-neutral-700 p-4 sm:p-5 lg:p-6 hover:shadow-lg hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 bg-white dark:bg-neutral-900">
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
        </div>
      </div>

      {/* MODAL - Enhanced */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-3 sm:p-4 lg:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
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
                <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 ">CERTIFICATION</span>
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
                  onClick={() => setSelectedCert(null)}
                  className="flex-1 sm:flex-initial px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-medium text-sm border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BodyLower