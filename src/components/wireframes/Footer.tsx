import { ArrowRight, Star } from 'lucide-react';

const NAV_COLS = [
  {
    heading: 'Explore',
    links: [
      { label: 'Bluebay Beach Resort', tab: 'home' },
      { label: 'Sultan Sands Resort',  tab: 'home' },
      { label: 'Rooms & Suites',       tab: 'rooms' },
      { label: 'Dining',               tab: 'dining' },
      { label: 'Spa & Wellness',       tab: 'spa' },
      { label: 'Experiences',          tab: null },
      { label: 'Special Offers',       tab: null },
    ],
  },
  {
    heading: 'Bluebay Beach Resort',
    links: [
      { label: 'Kiwengwa, Zanzibar', tab: null },
      { label: '+255 777 000 001',   tab: null },
      { label: 'bluebay@bluebayhotels.com', tab: null },
    ],
  },
  {
    heading: 'Sultan Sands Resort',
    links: [
      { label: 'Kiwengwa, Zanzibar', tab: null },
      { label: '+255 777 000 002',   tab: null },
      { label: 'sultan@bluebayhotels.com', tab: null },
    ],
  },
  {
    heading: 'Policies',
    links: [
      { label: 'Privacy Policy',       tab: null },
      { label: 'Terms & Conditions',   tab: null },
      { label: 'Cookie Policy',        tab: null },
      { label: 'Accessibility',        tab: null },
      { label: 'Sustainability',       tab: null },
    ],
  },
];

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer style={{ background: '#0f0f0f', color: '#fff', fontFamily: 'DM Sans, Inter, system-ui' }}>

      {/* Book direct band */}
      <div style={{
        borderBottom: '1px solid #1e1e1e', padding: '28px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <div style={{ width: 18, height: 1, background: '#c8a96e' }} />
            <span style={{ fontSize: 9, color: '#c8a96e', letterSpacing: '0.28em', textTransform: 'uppercase' }}>Best Rate Guarantee</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, margin: 0 }}>
            Book direct and we'll match any lower rate you find — guaranteed.
          </p>
        </div>
        <button
          onClick={() => onNavigate('booking')}
          style={{
            background: '#c8a96e', color: '#0f0f0f', border: 'none',
            padding: '12px 28px', fontSize: 10, fontWeight: 800,
            letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap'
          }}
        >
          Book Direct <ArrowRight size={13} strokeWidth={2.5} />
        </button>
      </div>

      {/* Main footer grid */}
      <div style={{ padding: '56px 40px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr 1fr 1fr 1fr', gap: 48, alignItems: 'start' }}>

          {/* Brand column */}
          <div>
            <div className="font-playfair" style={{ fontSize: 20, fontWeight: 600, letterSpacing: '0.02em', marginBottom: 6 }}>
              BLUEBAY <span style={{ color: '#c8a96e' }}>HOTELS</span>
            </div>
            <div style={{ fontSize: 9, color: '#555', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 20 }}>
              Zanzibar
            </div>
            <p style={{ fontSize: 12, color: '#555', lineHeight: 1.8, margin: '0 0 24px' }}>
              Two world-class resorts on Zanzibar's most beautiful stretch of beach. Thirty acres of tropical paradise.
            </p>
            {/* Ratings */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={11} fill="#c8a96e" color="#c8a96e" />)}
                </div>
                <span style={{ fontSize: 11, color: '#666' }}>4.0 · TripAdvisor</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 14, fontWeight: 800, color: '#fff', background: '#003580', padding: '1px 6px' }}>9.0</span>
                <span style={{ fontSize: 11, color: '#666' }}>Exceptional · Booking.com</span>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          {NAV_COLS.map(col => (
            <div key={col.heading}>
              <div style={{
                fontSize: 9, fontWeight: 800, color: '#555',
                letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 18
              }}>
                {col.heading}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {col.links.map(link => (
                  <span
                    key={link.label}
                    onClick={link.tab ? () => onNavigate(link.tab!) : undefined}
                    style={{
                      fontSize: 12, color: link.tab ? 'rgba(255,255,255,0.55)' : '#444',
                      cursor: link.tab ? 'pointer' : 'default',
                      transition: 'color 0.15s',
                      letterSpacing: '0.02em'
                    }}
                    onMouseEnter={e => { if (link.tab) (e.target as HTMLElement).style.color = '#fff'; }}
                    onMouseLeave={e => { if (link.tab) (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.55)'; }}
                  >
                    {link.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social row */}
        <div style={{ borderTop: '1px solid #1e1e1e', marginTop: 48, paddingTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Facebook', 'Instagram', 'TripAdvisor', 'YouTube'].map(s => (
              <span key={s} style={{
                fontSize: 11, color: '#444', cursor: 'pointer', letterSpacing: '0.06em',
                textTransform: 'uppercase', transition: 'color 0.15s'
              }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = '#c8a96e'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = '#444'}
              >
                {s}
              </span>
            ))}
          </div>
          <div style={{ fontSize: 11, color: '#333', letterSpacing: '0.04em' }}>
            © {new Date().getFullYear()} Bluebay Hotels Zanzibar. All rights reserved.
          </div>
        </div>
      </div>

    </footer>
  );
}
