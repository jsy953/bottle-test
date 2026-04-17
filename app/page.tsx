'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import HeroSection from '@/components/HeroSection'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const BG    = '#f0f0f0'
const DARK  = '#1d1d1f'
const MID   = '#6e6e73'
const MUTED = '#aeaeb2'
const WHITE = '#ffffff'

const SP = {
  sectionLg:  { padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,48px)' },
  sectionMd:  { padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,48px)' },
  sectionSm:  { padding: 'clamp(40px,5vw,64px) clamp(20px,5vw,48px)' },
  container:  { maxWidth: 900,  margin: '0 auto' },
  containerW: { maxWidth: 1100, margin: '0 auto' },
}

export default function Home() {
  const mainRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const root = mainRef.current
    if (!root) return
    const E = 'power3.out'

    // ── Stagger groups (gs-section → gs-item children) ──────────────────
    root.querySelectorAll<HTMLElement>('.gs-section').forEach((section) => {
      const items = section.querySelectorAll<HTMLElement>('.gs-item')
      if (!items.length) return
      gsap.from(items, {
        y: 44, opacity: 0, duration: 0.88, stagger: 0.13, ease: E,
        scrollTrigger: { trigger: section, start: 'top 82%', once: true },
      })
    })

    // ── Slide from left ──────────────────────────────────────────────────
    root.querySelectorAll<HTMLElement>('.gs-left').forEach((el) => {
      gsap.from(el, {
        x: -60, opacity: 0, duration: 1.05, ease: E,
        scrollTrigger: { trigger: el, start: 'top 84%', once: true },
      })
    })

    // ── Slide from right ─────────────────────────────────────────────────
    root.querySelectorAll<HTMLElement>('.gs-right').forEach((el) => {
      gsap.from(el, {
        x: 60, opacity: 0, duration: 1.05, ease: E,
        scrollTrigger: { trigger: el, start: 'top 84%', once: true },
      })
    })

    // ── Scale + fade (color swatches) ────────────────────────────────────
    root.querySelectorAll<HTMLElement>('.gs-scale').forEach((el, i) => {
      gsap.from(el, {
        scale: 0.88, opacity: 0, duration: 0.65, ease: E,
        delay: i * 0.08,
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      })
    })

    // ── Divider line reveal ──────────────────────────────────────────────
    root.querySelectorAll<HTMLElement>('.gs-line').forEach((el) => {
      gsap.from(el, {
        scaleX: 0, transformOrigin: 'left center', duration: 1.2, ease: E,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      })
    })
  }, { scope: mainRef })

  return (
    <main ref={mainRef} style={{ background: BG, color: DARK }}>
      <HeroSection />

      {/* ── 01 · STATS ──────────────────────────────────────────────────── */}
      <section style={{ background: DARK, ...SP.sectionSm }}>
        <div className="gs-section grid-stats"
          style={{ ...SP.containerW }}>
          {[
            { value: '500ml',  label: 'Capacité' },
            { value: '0.18kg', label: 'Poids' },
            { value: '24h',    label: 'Conservation froid' },
            { value: '12h',    label: 'Conservation chaud' },
          ].map((s, i) => (
            <div key={s.label} className="gs-item" style={{
              display: 'flex', flexDirection: 'column', gap: 6,
              borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.06)',
              paddingLeft: i === 0 ? 0 : 40,
            }}>
              <span style={{ fontSize: 'clamp(28px,3vw,44px)', fontWeight: 600, lineHeight: 1, letterSpacing: '-0.03em', color: WHITE }}>
                {s.value}
              </span>
              <span style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#636366' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 02 · MANIFESTO ──────────────────────────────────────────────── */}
      <section id="about" style={{ background: BG, ...SP.sectionLg }}>
        <div className="gs-section" style={{ ...SP.container, textAlign: 'center' }}>
          <p className="gs-item" style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.26em', color: MUTED, marginBottom: 28 }}>
            Notre vision
          </p>
          <h2 className="gs-item" style={{ fontSize: 'clamp(32px,4.5vw,64px)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.03em', color: DARK }}>
            L'hydratation ne devrait{' '}
            <br />jamais être <span style={{ color: MUTED }}>un compromis.</span>
          </h2>
          <p className="gs-item" style={{ maxWidth: 520, margin: '32px auto 0', fontSize: 16, fontWeight: 300, lineHeight: 1.7, color: MID }}>
            Nous avons repensé chaque détail — du matériau au goulot, de l'ergonomie
            au couvercle — pour créer une bouteille à la hauteur de votre exigence.
          </p>
        </div>
      </section>

      {/* ── 03 · PRODUCT SPLIT ──────────────────────────────────────────── */}
      <section style={{ background: WHITE, ...SP.sectionLg }}>
        <div className="grid-split" style={{ ...SP.containerW }}>
          {/* Copy */}
          <div className="gs-left">
            <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.26em', color: MUTED, marginBottom: 20 }}>
              Le produit
            </p>
            <h2 style={{ fontSize: 'clamp(36px,4vw,58px)', fontWeight: 600, lineHeight: 1.05, letterSpacing: '-0.03em', color: DARK, marginBottom: 24 }}>
              The Bottle.<br />
              <span style={{ color: MUTED }}>2025 Edition.</span>
            </h2>
            <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.75, color: MID, marginBottom: 36 }}>
              Fabriquée en aluminium aérospatial double paroi, la Bottle conserve
              vos boissons froides 24h et chaudes 12h. Un équilibre parfait entre
              forme et fonction.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                ['Aluminium aérospatial', 'Double paroi sous vide'],
                ['Couvercle magnétique', 'Fermeture hermétique'],
                ['Finition mate soyeuse', 'Anti-traces, anti-chocs'],
              ].map(([title, sub]) => (
                <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: DARK, marginTop: 7, flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: DARK, fontWeight: 500 }}>{title}</span>
                  <span style={{ fontSize: 14, color: MID, fontWeight: 300 }}>{sub}</span>
                </div>
              ))}
            </div>
            <a href="#shop" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              marginTop: 40, borderRadius: 980, background: DARK, color: WHITE,
              padding: '12px 24px', fontSize: 14, fontWeight: 600, textDecoration: 'none',
            }}>
              Voir le produit
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6h7M6 2.5l3.5 3.5L6 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          {/* Visual */}
          <div className="gs-right" style={{
            height: 500, borderRadius: 28, background: '#f5f5f7',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
          }}>
            <span style={{ fontSize: 'clamp(80px,12vw,160px)', fontWeight: 700, letterSpacing: '-0.05em', color: DARK, opacity: 0.07, lineHeight: 1 }}>
              B.
            </span>
            <p style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.22em', color: MUTED, whiteSpace: 'nowrap' }}>
              500ml · Aluminium aérospatial
            </p>
            <div style={{ position: 'absolute', top: 20, right: 20, background: DARK, color: WHITE, borderRadius: 980, padding: '4px 12px', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              New
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 · FEATURES ───────────────────────────────────────────────── */}
      <section id="shop" style={{ background: BG, ...SP.sectionLg }}>
        <div style={{ ...SP.containerW }}>
          {/* Header */}
          <div className="gs-section" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56 }}>
            <div>
              <p className="gs-item" style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.26em', color: MUTED, marginBottom: 14 }}>
                Fonctionnalités
              </p>
              <h2 className="gs-item" style={{ fontSize: 'clamp(30px,3.5vw,48px)', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.025em', color: DARK }}>
                Pensé pour<br />chaque instant.
              </h2>
            </div>
            <a className="gs-item" href="#shop" style={{ fontSize: 13, fontWeight: 500, color: MID, textDecoration: 'none' }}>
              Tout voir →
            </a>
          </div>
          {/* Cards */}
          <div className="gs-section grid-features">
            {[
              {
                num: '01', tag: 'Isolation',
                title: 'Double paroi sous vide',
                desc: 'Technologie d\'isolation avancée maintenant vos boissons à la température idéale quelles que soient les conditions extérieures.',
              },
              {
                num: '02', tag: 'Matériaux',
                title: 'Aluminium aérospatial',
                desc: 'Alliage 6061 utilisé dans l\'industrie aérospatiale pour une légèreté extrême sans compromis sur la robustesse.',
              },
              {
                num: '03', tag: 'Design',
                title: 'Couvercle magnétique',
                desc: 'Fermeture hermétique innovante, d\'une seule main, sans vis ni pièces mobiles susceptibles de s\'user.',
              },
            ].map((f) => (
              <div key={f.title} className="gs-item" style={{ background: WHITE, borderRadius: 20, padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: 0 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 32 }}>
                  <span style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.15em', color: MUTED }}>{f.num}</span>
                  <span style={{ background: BG, borderRadius: 980, padding: '4px 12px', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: MID }}>{f.tag}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: DARK, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: MID }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 · QUOTE ──────────────────────────────────────────────────── */}
      <section style={{ background: DARK, ...SP.sectionLg }}>
        <div style={{ ...SP.containerW }}>
          <p className="gs-item" style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.26em', color: '#48484a', marginBottom: 40 }}>
            Philosophie
          </p>
          <blockquote className="gs-item" style={{ fontSize: 'clamp(26px,3.8vw,54px)', fontWeight: 300, lineHeight: 1.25, letterSpacing: '-0.02em', color: WHITE }}>
            "La beauté d'un objet réside dans sa capacité à disparaître —
            ne laisser que{' '}
            <span style={{ color: '#636366' }}>l'usage et l'émotion.</span>"
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 48 }}>
            <div className="gs-line" style={{ flex: 1, height: 1, background: '#2c2c2e' }} />
            <span className="gs-item" style={{ fontSize: 12, fontWeight: 500, color: '#48484a', whiteSpace: 'nowrap' }}>
              Studio Bottle — Paris, 2025
            </span>
          </div>
        </div>
      </section>

      {/* ── 06 · COLORIS ────────────────────────────────────────────────── */}
      <section style={{ background: WHITE, ...SP.sectionLg }}>
        <div style={{ ...SP.containerW }}>
          <div className="gs-section" style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="gs-item" style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.26em', color: MUTED, marginBottom: 14 }}>
              Coloris
            </p>
            <h2 className="gs-item" style={{ fontSize: 'clamp(28px,3.5vw,46px)', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-0.025em', color: DARK }}>
              À votre image.
            </h2>
          </div>
          <div className="grid-colors">
            {[
              { name: 'Blanc Glacé', hex: '#f5f5f7', border: '1px solid #e5e5e5' },
              { name: 'Minuit',      hex: '#1d1d1f', border: 'none' },
              { name: 'Dune',        hex: '#c9b99a', border: 'none' },
              { name: 'Ciel',        hex: '#b8d4e8', border: 'none' },
            ].map((c) => (
              <div key={c.name} className="gs-scale" style={{ display: 'flex', flexDirection: 'column', gap: 12, cursor: 'pointer' }}>
                <div style={{ height: 200, borderRadius: 20, background: c.hex, border: c.border }} />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 4px' }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: DARK }}>{c.name}</span>
                  <div style={{ width: 14, height: 14, borderRadius: '50%', background: c.hex, border: '1px solid #d0d0d0' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 · BUY CTA ────────────────────────────────────────────────── */}
      <section id="contact" style={{ background: DARK, ...SP.sectionLg, textAlign: 'center' }}>
        <div className="gs-section" style={{ ...SP.container }}>
          <p className="gs-item" style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.26em', color: '#636366', marginBottom: 20 }}>
            Disponible maintenant
          </p>
          <h2 className="gs-item" style={{ fontSize: 'clamp(48px,7vw,96px)', fontWeight: 700, lineHeight: 0.95, letterSpacing: '-0.04em', color: WHITE, marginBottom: 16 }}>
            Stay Pure.
          </h2>
          <p className="gs-item" style={{ fontSize: 15, fontWeight: 300, color: '#636366', marginBottom: 40 }}>
            La Bottle 2025 — à partir de 89 €
          </p>
          <div className="gs-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <a href="#" style={{ borderRadius: 980, background: WHITE, color: DARK, padding: '14px 32px', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
              Commander maintenant
            </a>
            <a href="#" style={{ borderRadius: 980, border: '1px solid #3a3a3c', color: '#8e8e93', padding: '14px 32px', fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer style={{ background: DARK, borderTop: '1px solid #2c2c2e', padding: '28px 48px' }}>
        <div style={{ ...SP.containerW, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: WHITE }}>Bottle</span>
          <p style={{ fontSize: 11, color: '#48484a' }}>© 2025 Bottle Studio. Tous droits réservés.</p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Mentions légales', 'Confidentialité'].map((l) => (
              <a key={l} href="#" style={{ fontSize: 11, color: '#48484a', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  )
}
