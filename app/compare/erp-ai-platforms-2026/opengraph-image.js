import { ImageResponse } from 'next/og'
import { getPlatform, CRITERIA, NOT_PUBLISHED } from '../../../lib/platforms.js'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Same five platforms the page's nine-criteria matrix carries — the four ERP
// profiles plus SAP Joule from the earlier pass.
const MATRIX_SLUGS = [
  'oracle-fusion-ai-agents',
  'infor-velocity-suite',
  'epicor-prism',
  'netsuite-next',
  'sap-joule',
]

export default function Image() {
  const platforms = MATRIX_SLUGS.map(getPlatform).filter(Boolean)
  const totalCells = platforms.length * CRITERIA.length
  const publishedCells = platforms.reduce(
    (n, p) => n + CRITERIA.filter((c) => p.criteria[c.key]?.value !== NOT_PUBLISHED).length,
    0,
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
          background: 'linear-gradient(135deg, #0B1220 0%, #152238 60%, #1A2E4C 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          color: '#FFFFFF',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #1B5FE8 0%, #0D47A1 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: '900',
              }}
            >
              ▶
            </div>
            <div style={{ display: 'flex', fontSize: '32px', fontWeight: '800', letterSpacing: '-0.03em' }}>
              playthetech<span style={{ color: '#38BDF8' }}>.</span>
            </div>
          </div>
          <div
            style={{
              padding: '6px 18px',
              borderRadius: '999px',
              background: 'rgba(56, 189, 248, 0.15)',
              border: '1px solid rgba(56, 189, 248, 0.4)',
              color: '#38BDF8',
              fontSize: '16px',
              fontWeight: '700',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            ERP AI Benchmark 2026
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '1040px' }}>
          <div style={{ fontSize: '54px', fontWeight: '800', lineHeight: '1.14', letterSpacing: '-0.02em' }}>
            How ERP vendors actually charge for AI
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {platforms.map((p) => (
              <div
                key={p.slug}
                style={{
                  display: 'flex',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: 'rgba(148, 163, 184, 0.12)',
                  border: '1px solid rgba(148, 163, 184, 0.25)',
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#E2E8F0',
                }}
              >
                {p.shortName}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(148, 163, 184, 0.2)',
            paddingTop: '24px',
          }}
        >
          <div style={{ display: 'flex', gap: '40px', fontSize: '18px', color: '#94A3B8' }}>
            <span>5 pricing models · {platforms.length} platforms</span>
            <span>{publishedCells} of {totalCells} cells published by vendors</span>
          </div>
          <div style={{ color: '#38BDF8', fontSize: '20px', fontWeight: '700' }}>playthetech.com</div>
        </div>
      </div>
    ),
    { ...size },
  )
}
