import Nav from '@/components/Nav'

const DARK  = '#1d1d1f'
const MID   = '#6e6e73'
const MUTED = '#aeaeb2'
const WHITE = '#ffffff'
const BG    = '#f0f0f0'

const PRODUCTS = [
  { name: 'Blanc Glacé', hex: '#f5f5f7', border: '1px solid #e0e0e0', price: '89 €', badge: 'Bestseller' },
  { name: 'Minuit',      hex: '#1d1d1f', border: 'none',               price: '89 €', badge: null },
  { name: 'Dune',        hex: '#c9b99a', border: 'none',               price: '89 €', badge: 'New' },
  { name: 'Ciel',        hex: '#b8d4e8', border: 'none',               price: '89 €', badge: null },
]

export const metadata = { title: 'Shop — Bottle' }

export default function ShopPage() {
  return (
    <div style={{ minHeight: '100vh', background: BG }}>
      <Nav />

      {/* Hero */}
      <section style={{ padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,48px) clamp(40px,5vw,80px)', textAlign: 'center', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.26em', color: MUTED, marginBottom: 16 }}>
          Collection 2025
        </p>
        <h1 style={{ fontSize: 'clamp(40px,6vw,80px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1, color: DARK, marginBottom: 20 }}>
          The Bottle.
        </h1>
        <p style={{ maxWidth: 480, margin: '0 auto', fontSize: 16, fontWeight: 300, lineHeight: 1.7, color: MID }}>
          Aluminium aérospatial, double paroi sous vide. Disponible en 4 coloris exclusifs.
        </p>
      </section>

      {/* Grid */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: 'clamp(40px,6vw,80px) clamp(20px,5vw,48px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
          {PRODUCTS.map((p) => (
            <div key={p.name} style={{ background: WHITE, borderRadius: 24, overflow: 'hidden', cursor: 'pointer' }}>
              {/* Color swatch */}
              <div style={{ height: 260, background: p.hex, border: p.border, position: 'relative' }}>
                {p.badge && (
                  <span style={{
                    position: 'absolute', top: 16, right: 16,
                    background: DARK, color: WHITE, borderRadius: 980,
                    padding: '4px 12px', fontSize: 10, fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.1em',
                  }}>{p.badge}</span>
                )}
              </div>
              {/* Info */}
              <div style={{ padding: '20px 24px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: DARK }}>{p.name}</span>
                  <span style={{ fontSize: 15, fontWeight: 500, color: MID }}>{p.price}</span>
                </div>
                <button style={{
                  width: '100%', borderRadius: 980, background: DARK, color: WHITE,
                  padding: '11px 0', fontSize: 13, fontWeight: 600,
                  border: 'none', cursor: 'pointer',
                }}>
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specs */}
      <section style={{ background: WHITE, padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,48px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.26em', color: MUTED, marginBottom: 40, textAlign: 'center' }}>
            Spécifications
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 0 }}>
            {[
              { label: 'Capacité',  value: '500 ml' },
              { label: 'Poids',     value: '180 g' },
              { label: 'Matériau',  value: 'Alu 6061' },
              { label: 'Froid',     value: '24 h' },
              { label: 'Chaud',     value: '12 h' },
              { label: 'Garantie',  value: '2 ans' },
            ].map((s, i) => (
              <div key={s.label} style={{
                padding: '28px 0',
                borderLeft: i % 3 === 0 ? 'none' : '1px solid rgba(0,0,0,0.06)',
                paddingLeft: i % 3 === 0 ? 0 : 32,
              }}>
                <div style={{ fontSize: 'clamp(24px,3vw,36px)', fontWeight: 600, letterSpacing: '-0.03em', color: DARK, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: MUTED, marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(0,0,0,0.06)', padding: 'clamp(20px,3vw,28px) clamp(20px,5vw,48px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: DARK }}>Bottle</span>
          <p style={{ fontSize: 11, color: MUTED }}>© 2025 Bottle Studio. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
