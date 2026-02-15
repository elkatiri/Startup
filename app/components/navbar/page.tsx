'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // <-- works in App Router

// ------------------------------------------------------------------
//  Fallback for Pages Router (optional – keep it if you’re in /pages)
let pathname = '';
if (typeof window !== 'undefined') {
  // In Pages router you could also import useRouter from 'next/router'
  pathname = window.location.pathname;
}
// ------------------------------------------------------------------

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Technologies', href: '/technologies' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentPath = usePathname?.() ?? pathname; // works in both routers

  // ------------------------------------------------------------------
  //  Scroll‑shadow toggle
  // ------------------------------------------------------------------
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ------------------------------------------------------------------
  //  Close mobile menu on route change (only works in App Router)
  // ------------------------------------------------------------------
  useEffect(() => {
    setMobileOpen(false);
  }, [currentPath]);

  // ------------------------------------------------------------------
  //  Simple fade‑in animation for the whole header
  // ------------------------------------------------------------------
  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed inset-x-0 top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/40"
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-6">
          {/* ——— Logo ——— */}
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            <span className="text-lg font-bold bg-clip-text text-transparent bg-linear-to-r from-slate-100 via-indigo-200 to-slate-100">
              GhaythApp
            </span>
          </Link>

          {/* ——— Desktop links ——— */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const active = currentPath === link.href;
              return (
                <Link key={link.name} href={link.href}>
                  <motion.span
                    className={`
                      cursor-pointer text-sm font-medium transition-colors
                      ${active ? 'text-indigo-300' : 'text-slate-300 hover:text-white'}
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              );
            })}
          </div>

          {/* ——— Mobile toggle button ——— */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* ——— Mobile drawer (simple version) ——— */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed inset-y-0 right-0 w-64 bg-slate-950/95 backdrop-blur-xl border-l border-slate-800/60 z-50 p-6 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Close button */}
              <button
                className="self-end p-2 text-slate-300 hover:text-white"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Links list */}
              <nav className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => {
                  const active = currentPath === link.href;
                  return (
                    <Link key={link.name} href={link.href}>
                      <motion.span
                        className={`
                          cursor-pointer text-base font-medium
                          ${active ? 'text-indigo-300' : 'text-slate-300 hover:text-white'}
                        `}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
