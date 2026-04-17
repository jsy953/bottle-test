'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const DARK  = '#1d1d1f'
const MID   = '#6e6e73'

export default function Nav() {
  const pathname = usePathname()

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(240,240,240,0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0,0,0,0.06)',
    }}>
      <nav style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: 'clamp(16px,2.5vw,24px) clamp(20px,5vw,48px)',
      }}>
        <Link href="/" style={{ fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em', color: DARK, textDecoration: 'none' }}>
          Bottle
        </Link>
        <div style={{ display: 'flex', gap: 'clamp(20px,3vw,40px)' }}>
          {[['Shop', '/shop'], ['About', '/about'], ['Contact', '/contact']].map(([label, href]) => (
            <Link key={label} href={href} style={{
              fontSize: 13, color: pathname === href ? DARK : MID,
              fontWeight: pathname === href ? 600 : 400,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}>
              {label}
            </Link>
          ))}
        </div>
        <a href="/shop" style={{
          borderRadius: 980, background: DARK, color: '#fff',
          padding: '9px 20px', fontSize: 13, fontWeight: 600,
          textDecoration: 'none', whiteSpace: 'nowrap',
        }}>
          Commander →
        </a>
      </nav>
    </header>
  )
}
