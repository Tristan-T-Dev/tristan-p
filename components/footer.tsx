'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4">
      <div className="text-center text-neutral-700 dark:text-neutral-300 text-sm">
        &copy; {currentYear} Tristan Triñanes. All rights reserved.
      </div>
    </footer>
  )
}
