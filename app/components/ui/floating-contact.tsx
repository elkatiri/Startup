'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      <AnimatePresence>
        {open && (
          <>
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/212651625941"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.85 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="group flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-slate-900/90 backdrop-blur-xl px-4 py-3 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] hover:border-emerald-500/60 hover:bg-slate-800/90 transition-all duration-300"
            >
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-emerald-400/30 blur-md group-hover:bg-emerald-400/50 transition-all duration-300" />
                <div className="relative w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 leading-none mb-0.5">Chat with us</span>
                <span className="text-sm font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors leading-none">WhatsApp</span>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:helloahmed2002@gmail.com"
              initial={{ opacity: 0, y: 16, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.85 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center gap-3 rounded-2xl border border-indigo-500/30 bg-slate-900/90 backdrop-blur-xl px-4 py-3 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] hover:border-indigo-500/60 hover:bg-slate-800/90 transition-all duration-300"
            >
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-indigo-400/30 blur-md group-hover:bg-indigo-400/50 transition-all duration-300" />
                <div className="relative w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 leading-none mb-0.5">Send us a message</span>
                <span className="text-sm font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors leading-none">Email us</span>
              </div>
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.92 }}
        className={`relative w-14 h-14 rounded-2xl flex items-center justify-center shadow-[0_8px_32px_-8px_rgba(99,102,241,0.6)] transition-all duration-300 ${
          open
            ? 'bg-slate-800 border border-slate-700/60'
            : 'bg-gradient-to-br from-indigo-500 to-violet-600 border border-indigo-400/30'
        }`}
      >
        {!open && (
          <span className="absolute inset-0 rounded-2xl animate-ping bg-indigo-500/30" />
        )}
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {open
            ? <X className="w-5 h-5 text-slate-300" />
            : <MessageCircle className="w-5 h-5 text-white" />
          }
        </motion.div>
      </motion.button>

    </div>
  );
}