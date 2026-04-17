import Nav from '@/components/Nav'

const DARK  = '#1d1d1f'
const MID   = '#6e6e73'
const MUTED = '#aeaeb2'
const WHITE = '#ffffff'
const BG    = '#f0f0f0'

export const metadata = { title: 'Contact — Bottle' }

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', background: BG }}>
      <Nav />

      <section style={{ maxWidth: 700, margin: '0 auto', padding: 'clamp(80px,10vw,120px) clamp(20px,5vw,48px)' }}>
        <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.26em', color: MUTED, marginBottom: 16 }}>
          Nous écrire
        </p>
        <h1 style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1, color: DARK, marginBottom: 16 }}>
          On est à<br />votre écoute.
        </h1>
        <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.7, color: MID, marginBottom: 56 }}>
          Une question sur votre commande, un partenariat ou simplement
          envie d'échanger ? Écrivez-nous.
        </p>

        {/* Form */}
        <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { label: 'Prénom', placeholder: 'Marie', type: 'text' },
              { label: 'Nom', placeholder: 'Dupont', type: 'text' },
            ].map((f) => (
              <label key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: DARK, letterSpacing: '0.02em' }}>{f.label}</span>
                <input type={f.type} placeholder={f.placeholder} style={{
                  background: WHITE, border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12,
                  padding: '13px 16px', fontSize: 14, color: DARK, outline: 'none',
                  fontFamily: 'inherit',
                }} />
              </label>
            ))}
          </div>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: DARK, letterSpacing: '0.02em' }}>Email</span>
            <input type="email" placeholder="marie@example.com" style={{
              background: WHITE, border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12,
              padding: '13px 16px', fontSize: 14, color: DARK, outline: 'none',
              fontFamily: 'inherit',
            }} />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: DARK, letterSpacing: '0.02em' }}>Sujet</span>
            <select style={{
              background: WHITE, border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12,
              padding: '13px 16px', fontSize: 14, color: DARK, outline: 'none',
              fontFamily: 'inherit', appearance: 'none',
            }}>
              <option>Commande &amp; livraison</option>
              <option>Retour &amp; remboursement</option>
              <option>Partenariat</option>
              <option>Presse</option>
              <option>Autre</option>
            </select>
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: DARK, letterSpacing: '0.02em' }}>Message</span>
            <textarea rows={6} placeholder="Bonjour, je souhaitais..." style={{
              background: WHITE, border: '1px solid rgba(0,0,0,0.1)', borderRadius: 12,
              padding: '13px 16px', fontSize: 14, color: DARK, outline: 'none',
              fontFamily: 'inherit', resize: 'vertical', lineHeight: 1.6,
            }} />
          </label>
          <button type="submit" style={{
            borderRadius: 980, background: DARK, color: WHITE,
            padding: '14px 32px', fontSize: 14, fontWeight: 600,
            border: 'none', cursor: 'pointer', alignSelf: 'flex-start', marginTop: 8,
          }}>
            Envoyer le message →
          </button>
        </form>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(0,0,0,0.08)', margin: '64px 0 40px' }} />

        {/* Direct contact */}
        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' }}>
          {[
            { label: 'Email', value: 'hello@bottle.co', href: 'mailto:hello@bottle.co' },
            { label: 'Instagram', value: '@bottle.studio', href: '#' },
            { label: 'Localisation', value: 'Paris, France', href: '#' },
          ].map((c) => (
            <div key={c.label}>
              <p style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: MUTED, marginBottom: 6 }}>{c.label}</p>
              <a href={c.href} style={{ fontSize: 14, color: DARK, textDecoration: 'none', fontWeight: 500 }}>{c.value}</a>
            </div>
          ))}
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
