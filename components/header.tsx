'use client'

import Image from 'next/image'
import { Mail, Calendar, MapPin } from 'lucide-react'

export default function ProfileHeader() {
  return (
    <div className="relative w-full max-w-6xl mx-auto bg-transparent dark:bg-neutral-900 rounded-2xl dark:border dark:border-neutral-800 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
        {/* Left: Profile Image + Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 flex-1">
          {/* Image Container */}
          <div className="flex-shrink-0">
            <Image
              src="/202302553.jpg"
              alt="Profile photo"
              width={200}
              height={200}
              className="rounded-xl object-cover w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
            />
          </div>

          {/* Info */}
          <div className="text-center items-center sm:text-left flex-1 mt-4 sm:mt-6 lg:mt-8"> {/* <-- Added margin top */}
            <h2 className="text-2xl sm:text-2xl lg:text-3xl font-semibold text-black dark:text-white leading-tight">
              Tristan Triñanes
            </h2>
            <div className="flex items-center justify-center sm:justify-start gap-1 text-neutral-500 dark:text-neutral-400 mt-2">
              <MapPin size={16} className="flex-shrink-0" />
              <span className="text-sm sm:text-base">Cavite, Philippines</span>
            </div>
            <p className="text-md sm:text-lg text-neutral-600 dark:text-neutral-400 mt-3 sm:mt-4">
              Software Developer
            </p>
          </div>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex flex-col gap-3 w-full sm:w-auto sm:min-w-[200px] lg:justify-end">
          <a href="https://calendar.app.google/e1hk8gNuRb5xXW2aA" className="flex items-center justify-center gap-2 bg-black text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-neutral-800 transition-colors w-full">
            <Calendar size={16} /> Schedule a Call
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=trinanes.tristanjay@gmail.com&su=Meeting&body=Hi%20Tristan,%0A%0AI%20would%20like%20to%20schedule%20a%20meeting%20with%20you.%0A%0AThanks!"
            target="_blank"
            className="flex items-center justify-center gap-2 border border-neutral-300 dark:border-neutral-700 text-black dark:text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors w-full"
          >
            <Mail size={16} /> Send Email
          </a>
        </div>
      </div>
    </div>
  )
}
