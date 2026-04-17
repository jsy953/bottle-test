'use client'

import Script from 'next/script'

const SPLINE_URL = 'https://prod.spline.design/yKiyLNcSIoAfwfMM/scene.splinecode'


export default function SplineScene({ className }: { className?: string }) {
  return (
    <div className={className} style={{ background: 'transparent' }}>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.12.85/build/spline-viewer.js"
        strategy="afterInteractive"
      />
      <spline-viewer
        url={SPLINE_URL}
        loading-anim-type="spinner-small-dark"
        style={{ width: '100%', height: '100%', background: 'transparent' }}
      />
    </div>
  )
}
