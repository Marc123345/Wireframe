import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Star, ChevronDown, ArrowRight, Wifi, Waves, UtensilsCrossed, Sparkles, MapPin, Award, Users, Heart } from 'lucide-react';

const HERO_SLIDES = [
  { label: 'Bluebay Beach Resort & Spa', sub: 'Kiwengwa, Zanzibar' },
  { label: 'Sultan Sands Island Resort', sub: 'Kiwengwa, Zanzibar' },
];

const ROOMS = [
  {
    name: 'Garden View Room',
    desc: 'Lush tropical garden views, twin or king bed, private verandah.',
    from: '$220',
    tag: 'Most Popular',
    accent: '#0a4a6b',
  },
  {
    name: 'Junior Suite',
    desc: 'Private outdoor shower, garden terrace, upgraded amenities.',
    from: '$340',
    tag: 'Best Value',
    accent: '#c8a96e',
  },
  {
    name: 'Beachfront Suite',
    desc: 'Direct beach access, sea views, private plunge pool terrace.',
    from: '$580',
    tag: 'Luxury',
    accent: '#e05a3a',
  },
];

const REVIEWS = [
  {
    name: 'Sarah M.',
    country: 'United Kingdom',
    rating: 5,
    text: '"The most relaxing resort on the east coast of Zanzibar. Staff were exceptional, beach was pristine, and the Oasis Spa is world-class."',
    source: 'TripAdvisor',
  },
  {
    name: 'Johan K.',
    country: 'Germany',
    rating: 5,
    text: '"Most beautiful beach I have ever seen in Zanzibar. The food at Bahari Grill was outstanding — fresh seafood every night."',
    source: 'Booking.com',
  },
  {
    name: 'Amara N.',
    country: 'South Africa',
    rating: 5,
    text: '"Honeymoon package was perfect. Private dinners, spa treatments, sunset dhow cruise — absolutely magical."',
    source: 'Google',
  },
];

const AMENITIES = [
  { icon: Waves, label: '3 Pools' },
  { icon: Sparkles, label: 'Oasis Spa' },
  { icon: UtensilsCrossed, label: '4 Restaurants' },
  { icon: Wifi, label: 'Free WiFi' },
  { icon: MapPin, label: 'Private Beach' },
  { icon: Award, label: '5-Star Service' },
];

const OFFERS = [
  { title: 'Honeymoon Escape', nights: '7 nights', include: 'Spa credit · Private dinner · Sunset cruise', badge: 'Most Booked', color: '#c8a96e' },
  { title: 'All-Inclusive Getaway', nights: '5 nights', include: 'All meals · Drinks · Excursions included', badge: 'Best Value', color: '#0a4a6b' },
  { title: 'Dive & Stay Package', nights: '7 nights', include: '10 guided dives · Airport transfer · Breakfast', badge: 'Adventure', color: '#0d7a5f' },
];

export function HomepageWireframe() {
  const [slide, setSlide] = useState(0);

  return (
    <div style={{ fontFamily: 'DM Sans, Inter, system-ui', background: '#fff' }}>

      {/* ══ ANNOTATION BANNER ══ */}
      <div style={{ background: '#0a4a6b', padding: '10px 32px' }}>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, margin: 0, textAlign: 'center', letterSpacing: '0.1em' }}>
          WIREFRAME: Proposed Homepage Redesign — Bluebay Hotels Zanzibar
        </p>
      </div>

      {/* ══ STICKY NAV ══ */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(10,74,107,0.97)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(200,169,110,0.3)',
        padding: '0 32px', display: 'flex', alignItems: 'center', gap: 0
      }}>
        <div style={{ padding: '14px 0', marginRight: 40 }}>
          <div className="font-playfair" style={{ color: '#fff', fontSize: 20, fontWeight: 600, letterSpacing: '0.02em' }}>
            Bluebay<span style={{ color: 'var(--bb-sand)' }}>Hotels</span>
          </div>
          <div style={{ fontSize: 9, color: 'rgba(200,169,110,0.7)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>Zanzibar</div>
        </div>

        <nav style={{ display: 'flex', flex: 1, gap: 0 }}>
          {['Our Resorts','Rooms & Suites','Dining','Spa & Wellness','Experiences','Offers'].map((item, i) => (
            <div key={item} style={{
              padding: '20px 16px', fontSize: 13, color: i === 4 ? 'var(--bb-sand)' : 'rgba(255,255,255,0.75)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4,
              borderBottom: i === 4 ? '2px solid var(--bb-sand)' : '2px solid transparent',
              whiteSpace: 'nowrap'
            }}>
              {item}
              {(i === 0 || i === 1 || i === 3) && <ChevronDown size={12} />}
            </div>
          ))}
        </nav>

        {/* Sticky book CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: 'auto' }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', textAlign: 'right' }}>
            <div style={{ color: 'var(--bb-sand)', fontWeight: 600 }}>Best Rate Guaranteed</div>
            <div>Book Direct & Save</div>
          </div>
          <button style={{
            background: 'var(--bb-sand)', color: '#1a1a1a', border: 'none',
            padding: '10px 20px', borderRadius: 6, fontSize: 13, fontWeight: 700,
            cursor: 'pointer', whiteSpace: 'nowrap'
          }}>
            Book Now
          </button>
        </div>
      </div>

      {/* ══ HERO ══ */}
      <div style={{ position: 'relative', height: 'clamp(460px, 70vh, 760px)', overflow: 'hidden' }}>
        {/* Background */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, #0a4a6b 0%, #1a6a96 40%, #0d7a5f 100%)',
        }} />
        {/* Watermark */}
        <div style={{
          position: 'absolute', bottom: -10, right: -20,
          fontFamily: 'Playfair Display, serif', fontSize: 'clamp(80px,18vw,260px)',
          color: 'rgba(255,255,255,0.04)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
          fontWeight: 700, letterSpacing: '-0.02em'
        }}>ZANZIBAR</div>

        {/* Property toggle */}
        <div style={{
          position: 'absolute', top: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', background: 'rgba(0,0,0,0.3)', borderRadius: 40, padding: 4,
          backdropFilter: 'blur(10px)', gap: 4, zIndex: 10
        }}>
          {HERO_SLIDES.map((s, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              style={{
                padding: '8px 20px', borderRadius: 36, border: 'none', cursor: 'pointer',
                fontSize: 12, fontWeight: 600,
                background: slide === i ? 'var(--bb-sand)' : 'transparent',
                color: slide === i ? '#1a1a1a' : 'rgba(255,255,255,0.7)',
                transition: 'all 0.25s',
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Hero content */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: '0 32px', textAlign: 'center', zIndex: 5
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginBottom: 16 }}>
                <div style={{ height: 1, width: 28, background: 'var(--bb-sand)' }} />
                <span style={{ color: 'var(--bb-sand)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                  {HERO_SLIDES[slide].sub}
                </span>
                <div style={{ height: 1, width: 28, background: 'var(--bb-sand)' }} />
              </div>
              <h1 className="font-playfair" style={{
                color: '#fff', fontSize: 'clamp(32px, 5.5vw, 72px)',
                fontWeight: 600, margin: '0 0 12px', lineHeight: 1.1
              }}>
                {HERO_SLIDES[slide].label}
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(15px,1.5vw,18px)', maxWidth: 500, margin: '0 auto 32px' }}>
                Five-star luxury on Zanzibar's most beautiful beachfront — 30 acres of tropical paradise.
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Booking bar */}
          <div style={{
            background: '#fff', borderRadius: 12, padding: 6,
            display: 'flex', gap: 4, alignItems: 'center',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            maxWidth: 700, width: '100%'
          }}>
            <div style={{ flex: 1, padding: '10px 16px', borderRight: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: 10, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>Check In</div>
              <div style={{ fontSize: 14, color: '#111', fontWeight: 500 }}>Select date</div>
            </div>
            <div style={{ flex: 1, padding: '10px 16px', borderRight: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: 10, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>Check Out</div>
              <div style={{ fontSize: 14, color: '#111', fontWeight: 500 }}>Select date</div>
            </div>
            <div style={{ flex: 1, padding: '10px 16px', borderRight: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: 10, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>Guests</div>
              <div style={{ fontSize: 14, color: '#111', fontWeight: 500 }}>2 Adults</div>
            </div>
            <div style={{ padding: '10px 16px', borderRight: '1px solid #e5e7eb' }}>
              <div style={{ fontSize: 10, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>Resort</div>
              <div style={{ fontSize: 14, color: '#111', fontWeight: 500 }}>Both ▾</div>
            </div>
            <button style={{
              background: 'var(--bb-ocean)', color: '#fff', border: 'none',
              padding: '14px 22px', borderRadius: 8, fontSize: 14, fontWeight: 700,
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8
            }}>
              <Search size={16} />
              Check Availability
            </button>
          </div>

          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12, marginTop: 12 }}>
            Book direct for best rates — no OTA fees
          </p>
        </div>

        {/* Bottom gradient */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(transparent, #fff)' }} />
      </div>

      {/* ══ TRUST BAND ══ */}
      <div style={{ background: 'var(--bb-ocean)', padding: '16px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex', gap: 2 }}>
              {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#f59e0b" color="#f59e0b" />)}
            </div>
            <span style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>4.0 / 5</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>1,816 Reviews · TripAdvisor</span>
          </div>
          <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.2)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ background: '#003580', borderRadius: 4, padding: '2px 8px', color: '#fff', fontSize: 13, fontWeight: 800 }}>9.0</div>
            <span style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>Exceptional</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>Booking.com</span>
          </div>
          <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.2)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Award size={16} color="var(--bb-sand)" />
            <span style={{ color: '#fff', fontSize: 13 }}>5-Star Resort · Kiwengwa Beach</span>
          </div>
          <div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.2)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Users size={16} color="var(--bb-sand)" />
            <span style={{ color: '#fff', fontSize: 13 }}>30 Acres · 1,000+ Palm Trees</span>
          </div>
        </div>
      </div>

      {/* ══ AMENITIES STRIP ══ */}
      <div style={{ background: '#fafaf8', padding: '24px 32px', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
          {AMENITIES.map(a => {
            const Icon = a.icon;
            return (
              <div key={a.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <Icon size={20} color="var(--bb-ocean)" />
                <span style={{ fontSize: 11, color: '#6b7280', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{a.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ══ FEATURED ROOMS ══ */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 36 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <div style={{ height: 2, width: 28, background: 'var(--bb-sand)' }} />
              <span style={{ fontSize: 11, color: 'var(--bb-ocean)', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>
                Rooms & Suites
              </span>
            </div>
            <h2 className="font-playfair" style={{ fontSize: 'clamp(26px,3.5vw,42px)', color: '#111', margin: 0, fontWeight: 600 }}>
              Your Perfect Retreat Awaits
            </h2>
          </div>
          <button style={{
            display: 'flex', alignItems: 'center', gap: 6,
            color: 'var(--bb-ocean)', background: 'transparent', border: '1.5px solid var(--bb-ocean)',
            padding: '10px 18px', borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: 'pointer'
          }}>
            View All Rooms <ArrowRight size={14} />
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {ROOMS.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              {/* Image placeholder */}
              <div style={{
                height: 200, position: 'relative',
                background: `linear-gradient(135deg, ${room.accent}cc, ${room.accent}44)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Room Photo
                </span>
                {room.tag && (
                  <div style={{
                    position: 'absolute', top: 14, left: 14,
                    background: 'var(--bb-sand)', color: '#1a1a1a',
                    fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 4,
                    letterSpacing: '0.05em'
                  }}>{room.tag}</div>
                )}
              </div>

              <div style={{ padding: '20px 22px' }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#111', margin: '0 0 6px' }}>{room.name}</h3>
                <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6, margin: '0 0 16px' }}>{room.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: 11, color: '#9ca3af' }}>from </span>
                    <span style={{ fontSize: 22, fontWeight: 700, color: 'var(--bb-ocean)' }}>{room.from}</span>
                    <span style={{ fontSize: 12, color: '#9ca3af' }}> / night</span>
                  </div>
                  <button style={{
                    background: 'var(--bb-ocean)', color: '#fff', border: 'none',
                    padding: '8px 16px', borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: 'pointer'
                  }}>
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══ OFFERS ══ */}
      <div style={{ background: '#0a4a6b', padding: '64px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', marginBottom: 10 }}>
              <div style={{ height: 1, width: 28, background: 'var(--bb-sand)' }} />
              <span style={{ fontSize: 11, color: 'var(--bb-sand)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>Special Offers</span>
              <div style={{ height: 1, width: 28, background: 'var(--bb-sand)' }} />
            </div>
            <h2 className="font-playfair" style={{ color: '#fff', fontSize: 'clamp(24px,3vw,38px)', margin: 0, fontWeight: 600 }}>
              Curated Packages for Every Guest
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {OFFERS.map((offer, i) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: 'rgba(255,255,255,0.07)', borderRadius: 12, padding: '28px 24px',
                  border: '1px solid rgba(255,255,255,0.12)', cursor: 'pointer'
                }}
              >
                <div style={{
                  display: 'inline-block', background: offer.color, color: '#fff',
                  fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 4,
                  letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14
                }}>{offer.badge}</div>
                <h3 className="font-playfair" style={{ color: '#fff', fontSize: 20, margin: '0 0 6px', fontWeight: 600 }}>{offer.title}</h3>
                <div style={{ color: 'var(--bb-sand)', fontSize: 13, marginBottom: 10 }}>{offer.nights}</div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6, marginBottom: 20 }}>{offer.include}</p>
                <button style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  color: 'var(--bb-sand)', background: 'transparent', border: '1px solid var(--bb-sand)',
                  padding: '9px 16px', borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: 'pointer'
                }}>
                  View Package <ArrowRight size={13} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ REVIEWS ══ */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', marginBottom: 10 }}>
            <div style={{ height: 2, width: 28, background: 'var(--bb-sand)' }} />
            <span style={{ fontSize: 11, color: 'var(--bb-ocean)', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>Guest Reviews</span>
            <div style={{ height: 2, width: 28, background: 'var(--bb-sand)' }} />
          </div>
          <h2 className="font-playfair" style={{ fontSize: 'clamp(24px,3vw,38px)', color: '#111', margin: 0, fontWeight: 600 }}>
            What Our Guests Say
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {REVIEWS.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: '#fafaf8', borderRadius: 12, padding: '28px 24px',
                border: '1px solid #e5e7eb'
              }}
            >
              <div style={{ display: 'flex', gap: 2, marginBottom: 14 }}>
                {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#f59e0b" color="#f59e0b" />)}
              </div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' }}>{rev.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13, color: '#111' }}>{rev.name}</div>
                  <div style={{ fontSize: 12, color: '#9ca3af' }}>{rev.country}</div>
                </div>
                <div style={{
                  fontSize: 10, fontWeight: 700, color: 'var(--bb-ocean)',
                  background: 'rgba(10,74,107,0.08)', padding: '3px 8px', borderRadius: 4,
                  letterSpacing: '0.08em'
                }}>{rev.source}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <button style={{
            color: 'var(--bb-ocean)', background: 'transparent',
            border: '1.5px solid var(--bb-ocean)', padding: '11px 24px',
            borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: 'pointer'
          }}>
            Read All 1,816 Reviews
          </button>
        </div>
      </div>

      {/* ══ CTA BAND ══ */}
      <div style={{
        background: 'linear-gradient(135deg, #c8a96e 0%, #e8d5a8 100%)',
        padding: '56px 32px', textAlign: 'center'
      }}>
        <Heart size={28} color="#0a4a6b" style={{ marginBottom: 16 }} />
        <h2 className="font-playfair" style={{ fontSize: 'clamp(24px,3.5vw,44px)', color: '#0a4a6b', margin: '0 0 12px', fontWeight: 700 }}>
          Ready for Your Zanzibar Escape?
        </h2>
        <p style={{ color: 'rgba(10,74,107,0.7)', fontSize: 16, marginBottom: 28 }}>
          Book direct and receive our best rates — exclusively on this website.
        </p>
        <button style={{
          background: 'var(--bb-ocean)', color: '#fff', border: 'none',
          padding: '16px 36px', borderRadius: 8, fontSize: 16, fontWeight: 700,
          cursor: 'pointer', boxShadow: '0 8px 24px rgba(10,74,107,0.35)'
        }}>
          Check Availability
        </button>
        <p style={{ color: 'rgba(10,74,107,0.5)', fontSize: 12, marginTop: 12 }}>
          Free cancellation on most rates · No booking fees
        </p>
      </div>

    </div>
  );
}
