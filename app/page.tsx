'use client'

import React from 'react'
import Header from '@/components/header'
import BodyUpper from '@/components/body-upper'
import BodyLower from '@/components/body-lower'

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen w-full bg-white text-white">
      <div className="w-full max-w-6xl px-4">
        <Header />
        <BodyUpper />
        <BodyLower />
      </div>
    </main>
  )
}
