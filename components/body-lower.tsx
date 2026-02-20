'use client'

import React, { useState, useEffect } from 'react'
import Certifications from '@/components/certifications'
import Projects from '@/components/projects'
import SocialLinks from '@/components/social-links'
import Speaking from '@/components/speaking'
import Contact from '@/components/contact'
import CertificationModal from '@/components/certification-modal'

interface Certification {
  title: string
  issuer: string
  image?: string
  description?: string
}

const BodyLower = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)

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

  const certifications: Certification[] = [
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
    { title: 'HyperKit', desc: 'Multi-Chain Developer Kit', link: 'https://hyperionkit.xyz' },
    { title: 'Cook With AI', desc: 'AI-Powered Recipe Generator', link: 'https://cookaidev.vercel.app' },
    { title: 'NFT Mint Page', desc: 'Aptos NFT Mint Page (Testnet)', link: 'https://nft-launchpad-teal.vercel.app' },
    { title: 'SnapBooth', desc: 'Web-based Photo Booth', link: 'https://snapbooth-v1-tantech.vercel.app/' }
  ]

  const socialLinks = [
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/tristan-jay-tri%C3%B1anes-7ba447356/' },
    { name: 'GitHub', link: 'https://github.com/Tristan-T-Dev' }
  ]

  return (
    <div className="w-full bg-transparent text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* TOP SECTION - Certifications & Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <Certifications certifications={certifications} onSelectCert={setSelectedCert} />
          <Projects projects={projects} />
        </div>

        {/* BOTTOM SECTION - Social, Speaking & Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
          <SocialLinks socialLinks={socialLinks} />
          <Contact />
          <Speaking />
        </div>
      </div>

      {/* MODAL */}
      <CertificationModal 
        selectedCert={selectedCert} 
        onClose={() => setSelectedCert(null)} 
      />
    </div>
  )
}

export default BodyLower