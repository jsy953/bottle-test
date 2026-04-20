'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const SplineScene = dynamic(() => import('./SplineScene'), { ssr: false })

export default function HeroSection() {
  const sectionRef   = useRef<HTMLElement>(null)
  const leftTextRef  = useRef<HTMLDivElement>(null)
  const rightTextRef = useRef<HTMLDivElement>(null)
  const leftWordRef  = useRef<HTMLParagraphElement>(null)
  const rightWordRef = useRef<HTMLParagraphElement>(null)
  const ctaRef       = useRef<HTMLDivElement>(null)
  const bottomRef    = useRef<HTMLDivElement>(null)
  const navRef       = useRef<HTMLElement>(null)

  useGSAP(() => {
    // Entrance animation
    gsap.timeline({ defaults: { ease: 'power4.out' } })
      .from(navRef.current,       { y: -20, opacity: 0, duration: 0.7  }, 0.05)
      .from(leftWordRef.current,  { x: -70, opacity: 0, duration: 1.1  }, 0.2)
      .from(rightWordRef.current, { x:  70, opacity: 0, duration: 1.1  }, 0.2)
      .from(ctaRef.current,       { y:  20, opacity: 0, duration: 0.8  }, 0.6)
      .from(bottomRef.current,    { y:  16, opacity: 0, duration: 0.7  }, 0.7)

    // CTA: fade out on scroll (native listener — no Lenis lag)
    const handleScroll = () => {
      if (!ctaRef.current) return
      const opacity = Math.max(0, 1 - window.scrollY / 120)
      ctaRef.current.style.opacity = String(opacity)
      ctaRef.current.style.pointerEvents = opacity < 0.05 ? 'none' : 'auto'
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] w-full overflow-hidden"
      style={{ background: '#f0f0f0' }}
    >
      {/* Spline — full bleed */}
      <div className="absolute inset-0 z-0">
        <SplineScene className="h-full w-full" />
      </div>

      {/* ── Navbar ───────────────────────────────────────────────────── */}
      <nav
        ref={navRef}
        className="absolute inset-x-0 top-0 z-30 flex items-center justify-between"
        style={{ padding: 'clamp(24px, 4vw, 40px) clamp(20px, 5vw, 64px)' }}
      >
        <a href="/" className="text-[15px] font-semibold tracking-tight" style={{ color: '#1d1d1f', textDecoration: 'none' }}>
          Bottle
        </a>
        <div className="flex gap-6 sm:gap-10">
          {[['Shop', '/shop'], ['About', '/about'], ['Contact', '/contact']].map(([label, href]) => (
            <a key={label} href={href}
              className="text-[13px] transition-opacity hover:opacity-40"
              style={{ color: '#1d1d1f' }}>
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Stay — upper-left of bottle ──────────────────────────────── */}
      <div ref={leftTextRef}
        className="absolute z-20"
        style={{ left: 'clamp(16px, 4vw, 48px)', top: '36%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
        <p ref={leftWordRef}
          className="font-bold leading-none tracking-[-0.04em] select-none"
          style={{ fontSize: 'clamp(44px, 8.5vw, 148px)', color: '#1d1d1f' }}>
          Stay
        </p>
      </div>

      {/* ── Pure. — lower-right of bottle ────────────────────────────── */}
      <div ref={rightTextRef}
        className="absolute z-20 text-right"
        style={{ right: 'clamp(16px, 4vw, 48px)', top: '62%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
        <p ref={rightWordRef}
          className="font-bold leading-none tracking-[-0.04em] select-none"
          style={{ fontSize: 'clamp(44px, 8.5vw, 148px)', color: '#1d1d1f' }}>
          Pure.
        </p>
      </div>

      {/* ── CTA — fixed, fades out when hero leaves viewport ─────────── */}
      <div ref={ctaRef}
        className="fixed z-40 flex flex-col items-center gap-5 pointer-events-none"
        style={{ bottom: 'clamp(60px, 8vw, 80px)', left: '50%', transform: 'translateX(-50%)' }}>
        <a href="/shop"
          className="cta-ring flex items-center gap-3 rounded-full text-white transition-opacity hover:opacity-75 pointer-events-auto"
          style={{ background: '#1d1d1f', padding: 'clamp(11px,1.2vw,14px) clamp(24px,2.5vw,32px)', fontSize: 'clamp(13px,1.1vw,15px)', fontWeight: 600, whiteSpace: 'nowrap' }}>
          Shop Bottle
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M3 7.5h9M8 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <div className="animate-bounce-slow" style={{ color: '#1d1d1f', opacity: 0.2 }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* ── Scroll indicators (hidden on mobile) ─────────────────────── */}
      <div className="absolute left-5 top-1/2 z-30 -translate-y-1/2 hidden sm:block">
        <span className="block text-[9px] font-semibold uppercase tracking-[0.22em]"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', color: '#b0b0b8' }}>
          Scroll Down
        </span>
      </div>
      <div className="absolute right-5 top-1/2 z-30 -translate-y-1/2 hidden sm:block">
        <span className="block text-[9px] font-semibold uppercase tracking-[0.22em]"
          style={{ writingMode: 'vertical-rl', color: '#b0b0b8' }}>
          Scroll Down
        </span>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────────── */}
      <div ref={bottomRef}
        className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between pb-6"
        style={{ padding: '0 clamp(20px, 5vw, 48px) clamp(20px, 3vw, 28px)' }}>
        {/* Socials */}
        <div className="flex items-center gap-4">
          <a href="#" className="transition-opacity hover:opacity-40" style={{ color: '#8e8e93' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="#" className="transition-opacity hover:opacity-40" style={{ color: '#8e8e93' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
        {/* Tagline — hidden on small screens */}
        <p className="hidden sm:block text-[11px] font-light tracking-wide" style={{ color: '#b0b0b8' }}>
          Beautifully crafted. Impossibly light.
        </p>
        <a href="mailto:hello@bottle.co"
          className="text-[11px] sm:text-[12px] transition-opacity hover:opacity-40"
          style={{ color: '#8e8e93' }}>
          hello@bottle.co
        </a>
      </div>
    </section>
  )
}
