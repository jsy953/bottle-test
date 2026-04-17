import Nav from '@/components/Nav'

const DARK  = '#1d1d1f'
const MID   = '#6e6e73'
const MUTED = '#aeaeb2'
const WHITE = '#ffffff'
const BG    = '#f0f0f0'

export const metadata = { title: 'About — Bottle' }

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', background: BG }}>
      <Nav />

      {/* Hero */}
      <section style={{ padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,48px)', textAlign: 'center', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.26em', color: MUTED, marginBottom: 20 }}>
          Notre histoire
        </p>
        <h1 style={{ fontSize: 'clamp(40px,6vw,80px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1, color: DARK, marginBottom: 28 }}>
          Repenser l'essentiel.
        </h1>
        <p style={{ maxWidth: 560, margin: '0 auto', fontSize: 16, fontWeight: 300, lineHeight: 1.75, color: MID }}>
          Bottle est né d'une obsession simple : créer la bouteille parfaite.
          Pas seulement belle, pas seulement fonctionnelle — les deux à la fois,
          sans compromis.
        </p>
      </section>

      {/* Manifesto */}
      <section style={{ background: DARK, padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,48px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <blockquote style={{ fontSize: 'clamp(28px,4vw,56px)', fontWeight: 300, lineHeight: 1.2, letterSpacing: '-0.02em', color: WHITE }}>
            "La beauté d'un objet réside dans sa capacité à disparaître —
            ne laisser que{' '}
            <span style={{ color: '#636366' }}>l'usage et l'émotion.</span>"
          </blockquote>
          <p style={{ marginTop: 40, fontSize: 12, fontWeight: 500, color: '#48484a', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Studio Bottle — Paris, 2025
          </p>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: WHITE, padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,48px)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.26em', color: MUTED, marginBottom: 56, textAlign: 'center' }}>
            Nos valeurs
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {[
              { num: '01', title: 'Minimalisme radical', desc: 'Chaque élément qui n\'a pas sa raison d\'être est supprimé. Nous croyons que la perfection est atteinte non pas quand il n\'y a plus rien à ajouter, mais quand il n\'y a plus rien à enlever.' },
              { num: '02', title: 'Matériaux premium', desc: 'Nous utilisons uniquement des alliages d\'aluminium aérospatial — les mêmes que ceux qui équipent les satellites et les avions. Parce que vos boissons le méritent.' },
              { num: '03', title: 'Impact minimal', desc: 'Une bouteille Bottle remplace des milliers de bouteilles plastiques. Chaque achat est un geste concret pour réduire votre empreinte environnementale.' },
            ].map((v) => (
              <div key={v.title} style={{ background: BG, borderRadius: 20, padding: '36px 32px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: 10, letterSpacing: '0.15em', color: MUTED, display: 'block', marginBottom: 20 }}>{v.num}</span>
                <h3 style={{ fontSize: 18, fontWeight: 600, color: DARK, marginBottom: 14 }}>{v.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: MID }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(60px,8vw,100px) clamp(20px,5vw,48px)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(30px,4vw,52px)', fontWeight: 600, letterSpacing: '-0.03em', color: DARK, marginBottom: 24 }}>
          Prêt à faire le choix ?
        </h2>
        <a href="/shop" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          borderRadius: 980, background: DARK, color: WHITE,
          padding: '14px 32px', fontSize: 15, fontWeight: 600, textDecoration: 'none',
        }}>
          Voir la collection →
        </a>
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
