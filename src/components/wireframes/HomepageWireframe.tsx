import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Star, ArrowRight, ChevronDown } from 'lucide-react';
import { Footer } from './Footer';

const ROOMS = [
  { name: 'Garden View Room',  from: '$220', desc: 'Private verandah, tropical gardens, mosquito-net canopy bed.' },
  { name: 'Junior Suite',      from: '$340', desc: 'Outdoor shower garden, terrace, upgraded Zanzibari furnishings.' },
  { name: 'Beachfront Suite',  from: '$580', desc: 'Direct beach access, plunge pool terrace, butler service.' },
];

const REVIEWS = [
  { name: 'Sarah M.', country: 'United Kingdom', text: 'The most relaxing resort on the east coast of Zanzibar. Staff were exceptional, the beach pristine, and the Oasis Spa is world-class.', source: 'TripAdvisor' },
  { name: 'Johan K.', country: 'Germany',         text: 'Most beautiful beach I have seen in Zanzibar. The food at Bahari Grill was outstanding — fresh seafood every night.',           source: 'Booking.com' },
  { name: 'Amara N.', country: 'South Africa',    text: 'The honeymoon package was perfect. Private dinners, spa treatments, sunset dhow cruise — absolutely magical.',                 source: 'Google'      },
];

const OFFERS = [
  { idx: '01', title: 'Honeymoon Escape',       nights: '7 nights', include: 'Spa credit · Private dinner · Sunset cruise' },
  { idx: '02', title: 'All-Inclusive Getaway',  nights: '5 nights', include: 'All meals, drinks & excursions included'      },
  { idx: '03', title: 'Dive & Stay Package',    nights: '7 nights', include: '10 guided dives · Airport transfer · Breakfast' },
];

const NAV = ['Our Resorts', 'Rooms & Suites', 'Dining', 'Spa & Wellness', 'Experiences', 'Offers'];

interface Props { onNavigate: (tab: string) => void; }

export function HomepageWireframe({ onNavigate }: Props) {
  const [slide, setSlide] = useState(0);
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);
  const [hoveredOffer, setHoveredOffer] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: 'DM Sans, Inter, system-ui', background: '#fff', color: '#0f0f0f' }}>

      {/* ── ANNOTATION ── */}
      <div style={{ background: '#0f0f0f', padding: '8px 32px', textAlign: 'center' }}>
        <span style={{ color: '#666', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          Wireframe — Proposed Homepage Redesign
        </span>
      </div>

      {/* ── NAV ── */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 50, background: '#fff',
        borderBottom: '1px solid #e8e8e8',
        display: 'flex', alignItems: 'center', padding: '0 40px', gap: 0
      }}>
        {/* Logo */}
        <div style={{ paddingRight: 48, paddingTop: 16, paddingBottom: 16, borderRight: '1px solid #e8e8e8' }}>
          <div className="font-playfair" style={{ fontSize: 17, fontWeight: 600, letterSpacing: '0.03em', color: '#0f0f0f' }}>
            BLUEBAY <span style={{ color: '#c8a96e' }}>HOTELS</span>
          </div>
          <div style={{ fontSize: 9, color: '#aaa', letterSpacing: '0.3em', textTransform: 'uppercase', marginTop: 1 }}>Zanzibar</div>
        </div>

        <nav style={{ display: 'flex', flex: 1, paddingLeft: 32 }}>
          {NAV.map((item, i) => {
            const TAB_MAP: Record<string, string> = {
              'Our Resorts': 'home', 'Rooms & Suites': 'rooms',
              'Dining': 'dining', 'Spa & Wellness': 'spa',
              'Experiences': 'home', 'Offers': 'home',
            };
            return (
              <div key={item}
                onClick={() => onNavigate(TAB_MAP[item] ?? 'home')}
                style={{
                  padding: '20px 16px', fontSize: 12, letterSpacing: '0.06em',
                  color: i === 5 ? '#c8a96e' : '#555',
                  cursor: 'pointer', whiteSpace: 'nowrap',
                  display: 'flex', alignItems: 'center', gap: 4,
                  borderBottom: i === 5 ? '1px solid #c8a96e' : '1px solid transparent',
                  textTransform: 'uppercase'
                }}>
                {item}
                {i < 3 && <ChevronDown size={11} strokeWidth={1.5} />}
              </div>
            );
          })}
        </nav>

        <button
          onClick={() => onNavigate('booking')}
          style={{
            background: '#0f0f0f', color: '#fff', border: 'none',
            padding: '11px 24px', fontSize: 11, fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer',
            marginLeft: 'auto'
          }}>
          Book Direct
        </button>
      </div>

      {/* ── HERO ── */}
      <div style={{ position: 'relative', height: 'clamp(480px, 78vh, 820px)', background: '#111', overflow: 'hidden' }}>

        {/* Image placeholder */}
        <div style={{ position: 'absolute', inset: 0, background: '#1a1a1a' }}>
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <span style={{ color: '#2a2a2a', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              Hero Photography — Kiwengwa Beach
            </span>
          </div>
        </div>

        {/* Flat dark overlay — bottom half only */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)'
        }} />

        {/* Property toggle — top left */}
        <div style={{
          position: 'absolute', top: 32, left: 40,
          display: 'flex', gap: 0, border: '1px solid rgba(255,255,255,0.2)'
        }}>
          {['Bluebay Beach Resort', 'Sultan Sands Resort'].map((s, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              style={{
                padding: '9px 20px', border: 'none', cursor: 'pointer',
                fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
                background: slide === i ? '#fff' : 'transparent',
                color: slide === i ? '#0f0f0f' : 'rgba(255,255,255,0.65)',
                fontWeight: slide === i ? 700 : 400,
                borderRight: i === 0 ? '1px solid rgba(255,255,255,0.2)' : 'none'
              }}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Hero text — bottom left */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0 40px 40px'
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 24, height: 1, background: '#c8a96e' }} />
                <span style={{ color: '#c8a96e', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                  Kiwengwa, Zanzibar — 5-Star Resort
                </span>
              </div>
              <h1 className="font-playfair" style={{
                color: '#fff', fontSize: 'clamp(36px, 6vw, 82px)',
                fontWeight: 600, margin: 0, lineHeight: 1.05, maxWidth: 700
              }}>
                {slide === 0 ? 'Bluebay Beach\nResort & Spa.' : 'Sultan Sands\nIsland Resort.'}
              </h1>
            </motion.div>
          </AnimatePresence>

          {/* Booking bar */}
          <div style={{
            marginTop: 32, display: 'flex', background: '#fff',
            maxWidth: 720
          }}>
            {['Check In', 'Check Out', 'Guests', 'Resort'].map((label, i) => (
              <div key={label} style={{
                flex: 1, padding: '14px 18px',
                borderRight: i < 3 ? '1px solid #e8e8e8' : 'none'
              }}>
                <div style={{ fontSize: 9, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 13, color: '#555' }}>
                  {label === 'Check In' ? 'Select date' : label === 'Check Out' ? 'Select date' : label === 'Guests' ? '2 Adults' : 'Both ▾'}
                </div>
              </div>
            ))}
            <button
              onClick={() => onNavigate('booking')}
              style={{
                background: '#0a4a6b', color: '#fff', border: 'none',
                padding: '0 28px', display: 'flex', alignItems: 'center', gap: 8,
                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                cursor: 'pointer', whiteSpace: 'nowrap'
              }}>
              <Search size={14} strokeWidth={2} />
              Check Availability
            </button>
          </div>

          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, marginTop: 10, letterSpacing: '0.05em' }}>
            Book direct — best rate guaranteed. No OTA commissions.
          </p>
        </div>
      </div>

      {/* ── TRUST STRIP ── */}
      <div style={{ borderBottom: '1px solid #e8e8e8', padding: '18px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex', gap: 2 }}>
              {[1,2,3,4,5].map(s => <Star key={s} size={13} fill="#c8a96e" color="#c8a96e" />)}
            </div>
            <span style={{ fontSize: 13, fontWeight: 700 }}>4.0</span>
            <span style={{ fontSize: 12, color: '#888' }}>1,816 reviews · TripAdvisor</span>
          </div>
          <div style={{ width: 1, height: 18, background: '#e8e8e8' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 18, fontWeight: 800, color: '#003580' }}>9.0</span>
            <span style={{ fontSize: 12, color: '#888' }}>Exceptional · Booking.com</span>
          </div>
          <div style={{ width: 1, height: 18, background: '#e8e8e8' }} />
          <span style={{ fontSize: 12, color: '#888' }}>5-Star Resort · Kiwengwa Beach · 30 Acres of Tropical Gardens</span>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 11, color: '#c8a96e', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Best Rate Guaranteed</span>
            <span style={{ fontSize: 11, color: '#ccc' }}>when you book direct</span>
          </div>
        </div>
      </div>

      {/* ── ROOMS ── */}
      <div style={{ padding: '80px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{ width: 24, height: 1, background: '#c8a96e' }} />
              <span style={{ fontSize: 10, color: '#c8a96e', letterSpacing: '0.28em', textTransform: 'uppercase' }}>Rooms & Suites</span>
            </div>
            <h2 className="font-playfair" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 600, margin: 0, lineHeight: 1.1 }}>
              Your Perfect Retreat
            </h2>
          </div>
          <button
            onClick={() => onNavigate('rooms')}
            style={{
              display: 'flex', alignItems: 'center', gap: 6, background: 'transparent',
              border: 'none', color: '#0f0f0f', fontSize: 11, fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer',
              borderBottom: '1px solid #0f0f0f', paddingBottom: 2
            }}>
            View All Rooms <ArrowRight size={13} strokeWidth={2} />
          </button>
        </div>

        {/* Room rows */}
        {ROOMS.map((room, i) => (
          <motion.div
            key={room.name}
            onHoverStart={() => setHoveredRoom(i)}
            onHoverEnd={() => setHoveredRoom(null)}
            style={{
              display: 'grid', gridTemplateColumns: '280px 1fr auto',
              borderTop: '1px solid #e8e8e8',
              borderBottom: i === ROOMS.length - 1 ? '1px solid #e8e8e8' : 'none',
              padding: '0', overflow: 'hidden', cursor: 'pointer', position: 'relative'
            }}
          >
            {/* Hover fill */}
            <motion.div
              style={{ position: 'absolute', inset: 0, background: '#fafaf8', zIndex: 0, pointerEvents: 'none' }}
              animate={{ opacity: hoveredRoom === i ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* Image */}
            <div style={{
              position: 'relative', zIndex: 1,
              height: 180, background: '#1a1a1a',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '20px 0 20px 0'
            }}>
              <span style={{ color: '#333', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Photo</span>
            </div>

            {/* Content */}
            <div style={{ padding: '28px 32px', position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: 10, color: '#aaa', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>
                Bluebay Beach Resort
              </div>
              <h3 className="font-playfair" style={{ fontSize: 22, fontWeight: 600, margin: '0 0 10px' }}>{room.name}</h3>
              <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7, margin: 0 }}>{room.desc}</p>
            </div>

            {/* Price + CTA */}
            <div style={{
              padding: '28px 32px', display: 'flex', flexDirection: 'column',
              alignItems: 'flex-end', justifyContent: 'center', gap: 14,
              position: 'relative', zIndex: 1, borderLeft: '1px solid #e8e8e8'
            }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 10, color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>from</div>
                <div className="font-playfair" style={{ fontSize: 28, fontWeight: 600, color: '#0a4a6b' }}>{room.from}</div>
                <div style={{ fontSize: 11, color: '#aaa' }}>per night</div>
              </div>
              <button
                onClick={() => onNavigate('booking')}
                style={{
                  background: '#0a4a6b', color: '#fff', border: 'none',
                  padding: '10px 20px', fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer'
                }}>
                Book
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── OFFERS ── */}
      <div style={{ background: '#0f0f0f', padding: '80px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{ width: 24, height: 1, background: '#c8a96e' }} />
              <span style={{ fontSize: 10, color: '#c8a96e', letterSpacing: '0.28em', textTransform: 'uppercase' }}>Special Offers</span>
            </div>
            <h2 className="font-playfair" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 600, margin: 0, color: '#fff', lineHeight: 1.1 }}>
              Curated Packages
            </h2>
          </div>
        </div>

        {OFFERS.map((offer, i) => (
          <motion.div
            key={offer.idx}
            onHoverStart={() => setHoveredOffer(i)}
            onHoverEnd={() => setHoveredOffer(null)}
            style={{
              display: 'grid', gridTemplateColumns: '60px 1fr 180px 140px',
              alignItems: 'center', gap: 0,
              borderTop: '1px solid #2a2a2a',
              borderBottom: i === OFFERS.length - 1 ? '1px solid #2a2a2a' : 'none',
              padding: '28px 0', cursor: 'pointer', position: 'relative'
            }}
          >
            <motion.div
              style={{ position: 'absolute', inset: 0, background: '#1a1a1a', zIndex: 0, pointerEvents: 'none' }}
              animate={{ opacity: hoveredOffer === i ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <div className="font-playfair" style={{ fontSize: 13, color: '#444', position: 'relative', zIndex: 1 }}>{offer.idx}</div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 className="font-playfair" style={{ fontSize: 22, color: '#fff', margin: '0 0 6px', fontWeight: 600 }}>{offer.title}</h3>
              <p style={{ fontSize: 12, color: '#666', margin: 0, letterSpacing: '0.02em' }}>{offer.include}</p>
            </div>
            <div style={{ fontSize: 12, color: '#888', letterSpacing: '0.06em', position: 'relative', zIndex: 1 }}>{offer.nights}</div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative', zIndex: 1 }}>
              <motion.div
                onClick={() => onNavigate('booking')}
                animate={{ x: hoveredOffer === i ? 0 : -8, opacity: hoveredOffer === i ? 1 : 0.3 }}
                style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#c8a96e', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer' }}
              >
                View Package <ArrowRight size={13} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── REVIEWS ── */}
      <div style={{ padding: '80px 40px', borderTop: '1px solid #e8e8e8' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{ width: 24, height: 1, background: '#c8a96e' }} />
              <span style={{ fontSize: 10, color: '#c8a96e', letterSpacing: '0.28em', textTransform: 'uppercase' }}>Guest Reviews</span>
            </div>
            <h2 className="font-playfair" style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 600, margin: 0, lineHeight: 1.1 }}>
              What Our Guests Say
            </h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="font-playfair" style={{ fontSize: 48, fontWeight: 600, color: '#0a4a6b', lineHeight: 1 }}>9.0</div>
            <div style={{ fontSize: 11, color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2 }}>Booking.com · Exceptional</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}>
          {REVIEWS.map((rev, i) => (
            <div key={i} style={{
              padding: '32px',
              borderLeft: i > 0 ? '1px solid #e8e8e8' : 'none'
            }}>
              <div style={{ display: 'flex', gap: 2, marginBottom: 20 }}>
                {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="#c8a96e" color="#c8a96e" />)}
              </div>
              <p className="font-playfair" style={{ fontSize: 15, color: '#0f0f0f', lineHeight: 1.75, margin: '0 0 24px', fontStyle: 'italic' }}>
                "{rev.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{rev.name}</div>
                  <div style={{ fontSize: 11, color: '#aaa', marginTop: 2 }}>{rev.country}</div>
                </div>
                <div style={{ fontSize: 10, color: '#aaa', letterSpacing: '0.12em', textTransform: 'uppercase', border: '1px solid #e8e8e8', padding: '4px 8px' }}>
                  {rev.source}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FINAL CTA ── */}
      <div style={{ background: '#0a4a6b', padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center', marginBottom: 20 }}>
          <div style={{ width: 24, height: 1, background: '#c8a96e' }} />
          <span style={{ fontSize: 10, color: '#c8a96e', letterSpacing: '0.28em', textTransform: 'uppercase' }}>Book Direct</span>
          <div style={{ width: 24, height: 1, background: '#c8a96e' }} />
        </div>
        <h2 className="font-playfair" style={{ color: '#fff', fontSize: 'clamp(28px, 4vw, 52px)', margin: '0 0 16px', fontWeight: 600 }}>
          Ready for Your Zanzibar Escape?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, marginBottom: 36, letterSpacing: '0.02em' }}>
          Book direct and receive our best rates — exclusively on this website.
        </p>
        <button
          onClick={() => onNavigate('booking')}
          style={{
            background: '#c8a96e', color: '#0f0f0f', border: 'none',
            padding: '16px 40px', fontSize: 11, fontWeight: 800,
            letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer'
          }}>
          Check Availability
        </button>
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11, marginTop: 16, letterSpacing: '0.04em' }}>
          Free cancellation on most rates · No booking fees · Instant confirmation
        </p>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
