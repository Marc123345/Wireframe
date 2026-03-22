import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Star } from 'lucide-react';

const FILTERS = ['All Rooms', 'Bluebay Resort', 'Sultan Sands', 'Suites', 'Beach View'];

const ROOMS = [
  {
    id: 'garden',
    property: 'Bluebay Beach Resort',
    name: 'Garden View Room',
    size: '42 m²',
    occupancy: 'Up to 3',
    from: 220,
    rating: 4.8,
    reviews: 312,
    tag: 'Most Popular',
    highlights: ['Private verandah', 'Mosquito-net canopy', 'Separate dressing room', 'Garden terrace'],
    desc: 'Wake to lush tropical garden views from your private verandah. Beautifully appointed in Zanzibari style with hand-carved furniture and a king or twin bed.',
  },
  {
    id: 'junior',
    property: 'Bluebay Beach Resort',
    name: 'Junior Suite',
    size: '58 m²',
    occupancy: 'Up to 2',
    from: 340,
    rating: 4.9,
    reviews: 186,
    tag: 'Best Value',
    highlights: ['Private outdoor shower', 'Garden terrace', 'Upgraded minibar', 'Pillow menu'],
    desc: 'Elevated living with a private outdoor shower garden and expansive terrace. Enhanced furnishings, premium bath amenities, and refined Zanzibari décor throughout.',
  },
  {
    id: 'beachfront',
    property: 'Bluebay Beach Resort',
    name: 'Beachfront Suite',
    size: '75 m²',
    occupancy: 'Up to 2',
    from: 580,
    rating: 5.0,
    reviews: 94,
    tag: 'Signature',
    highlights: ['Direct beach access', 'Plunge pool terrace', 'Butler service', 'Ocean panorama'],
    desc: 'Step from your private terrace directly onto Kiwengwa\'s pristine white sand. A plunge pool, dedicated butler, and unbroken Indian Ocean views.',
  },
  {
    id: 'sultan-deluxe',
    property: 'Sultan Sands',
    name: 'Sultan Deluxe Room',
    size: '46 m²',
    occupancy: 'Up to 3',
    from: 195,
    rating: 4.7,
    reviews: 228,
    tag: null,
    highlights: ['Pool or garden view', 'Swahili décor', 'Private balcony', 'Complimentary snorkelling'],
    desc: 'Authentic Swahili-inspired interiors with rich wood furnishings and vibrant textiles. Pool or garden views from a private balcony.',
  },
  {
    id: 'sultan-suite',
    property: 'Sultan Sands',
    name: 'Sultan Ocean Suite',
    size: '88 m²',
    occupancy: 'Up to 2',
    from: 490,
    rating: 4.9,
    reviews: 71,
    tag: 'Sea View',
    highlights: ['Panoramic sea views', 'Separate living room', 'Outdoor whirlpool', 'Beach access'],
    desc: 'An expansive ocean-facing suite with a separate lounge, outdoor whirlpool, and uninterrupted Indian Ocean vistas.',
  },
];

export function RoomsWireframe() {
  const [activeFilter, setActiveFilter] = useState('All Rooms');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = ROOMS.filter(r => {
    if (activeFilter === 'All Rooms') return true;
    if (activeFilter === 'Bluebay Resort') return r.property === 'Bluebay Beach Resort';
    if (activeFilter === 'Sultan Sands') return r.property === 'Sultan Sands';
    if (activeFilter === 'Suites') return r.name.toLowerCase().includes('suite');
    if (activeFilter === 'Beach View') return r.highlights.some(h => h.toLowerCase().includes('beach'));
    return true;
  });

  return (
    <div style={{ fontFamily: 'DM Sans, Inter, system-ui', background: '#fff', color: '#0f0f0f' }}>

      {/* Annotation */}
      <div style={{ background: '#0f0f0f', padding: '8px 32px', textAlign: 'center' }}>
        <span style={{ color: '#666', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          Wireframe — Rooms & Suites
        </span>
      </div>

      {/* Header */}
      <div style={{ background: '#0a4a6b', padding: '60px 40px 56px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ width: 24, height: 1, background: '#c8a96e' }} />
          <span style={{ fontSize: 10, color: '#c8a96e', letterSpacing: '0.28em', textTransform: 'uppercase' }}>Accommodation</span>
        </div>
        <h1 className="font-playfair" style={{ color: '#fff', fontSize: 'clamp(32px,5vw,60px)', margin: '0 0 14px', fontWeight: 600, lineHeight: 1.05 }}>
          Rooms & Suites
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, maxWidth: 520, margin: 0, lineHeight: 1.7 }}>
          Spacious, beautifully appointed rooms across two world-class resorts — from garden-view retreats to beachfront suites with plunge pools.
        </p>
      </div>

      {/* Sticky filter + date bar */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 30, background: '#fff',
        borderBottom: '1px solid #e8e8e8', display: 'flex',
        alignItems: 'center', padding: '0 40px'
      }}>
        <div style={{ display: 'flex', gap: 0, flex: 1, paddingRight: 32 }}>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: '16px 20px', border: 'none', cursor: 'pointer',
                fontSize: 11, fontWeight: activeFilter === f ? 700 : 400,
                letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                background: 'transparent',
                color: activeFilter === f ? '#0f0f0f' : '#999',
                borderBottom: activeFilter === f ? '2px solid #0f0f0f' : '2px solid transparent',
                marginBottom: -1,
              }}
            >
              {f}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, borderLeft: '1px solid #e8e8e8', paddingLeft: 32 }}>
          <span style={{ fontSize: 12, color: '#888' }}>
            <strong style={{ color: '#0f0f0f' }}>Apr 10–17</strong> · 2 guests
          </span>
          <button style={{
            background: 'transparent', border: '1px solid #0f0f0f',
            padding: '8px 16px', fontSize: 10, fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer'
          }}>
            Change
          </button>
        </div>
      </div>

      {/* Room list */}
      <div style={{ padding: '0 40px 80px' }}>
        <div style={{ padding: '20px 0', fontSize: 12, color: '#888', borderBottom: '1px solid #e8e8e8' }}>
          {filtered.length} room{filtered.length !== 1 ? 's' : ''} available · Apr 10–17
        </div>

        {filtered.map((room, i) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            {/* Main row */}
            <div
              style={{
                display: 'grid', gridTemplateColumns: '260px 1fr auto',
                borderBottom: '1px solid #e8e8e8', cursor: 'pointer',
                background: expanded === room.id ? '#fafaf8' : '#fff'
              }}
              onClick={() => setExpanded(expanded === room.id ? null : room.id)}
            >
              {/* Image */}
              <div style={{
                background: '#f0f0ee', height: 200, margin: '24px 0',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <span style={{ fontSize: 9, color: '#bbb', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Room Photo</span>
              </div>

              {/* Details */}
              <div style={{ padding: '28px 36px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                  <span style={{ fontSize: 10, color: '#aaa', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{room.property}</span>
                  {room.tag && (
                    <span style={{
                      fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      border: '1px solid #c8a96e', color: '#c8a96e', padding: '2px 8px'
                    }}>{room.tag}</span>
                  )}
                </div>
                <h3 className="font-playfair" style={{ fontSize: 22, fontWeight: 600, margin: '0 0 8px' }}>{room.name}</h3>
                <div style={{ display: 'flex', gap: 20, marginBottom: 12 }}>
                  <span style={{ fontSize: 12, color: '#888' }}>{room.size}</span>
                  <span style={{ fontSize: 12, color: '#888' }}>Up to {room.occupancy} guests</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12 }}>
                    <Star size={11} fill="#c8a96e" color="#c8a96e" />
                    <strong>{room.rating}</strong>
                    <span style={{ color: '#aaa' }}>({room.reviews})</span>
                  </span>
                </div>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7, margin: '0 0 16px' }}>{room.desc}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {room.highlights.map(h => (
                    <span key={h} style={{
                      fontSize: 11, color: '#555', border: '1px solid #e8e8e8',
                      padding: '4px 10px', letterSpacing: '0.04em'
                    }}>{h}</span>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div style={{
                padding: '28px 32px', display: 'flex', flexDirection: 'column',
                alignItems: 'flex-end', justifyContent: 'center', gap: 16,
                borderLeft: '1px solid #e8e8e8', minWidth: 180
              }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 10, color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>from</div>
                  <div className="font-playfair" style={{ fontSize: 32, fontWeight: 600, color: '#0a4a6b', lineHeight: 1 }}>${room.from}</div>
                  <div style={{ fontSize: 11, color: '#aaa', marginTop: 4 }}>per night</div>
                </div>
                <button style={{
                  background: '#0a4a6b', color: '#fff', border: 'none',
                  padding: '11px 22px', fontSize: 10, fontWeight: 800,
                  letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer'
                }}>
                  Book Now
                </button>
                <button style={{
                  background: 'transparent', color: '#888', border: 'none',
                  fontSize: 11, cursor: 'pointer', textDecoration: 'underline', padding: 0
                }}>
                  {expanded === room.id ? 'Hide rates ▲' : 'Compare rates ▼'}
                </button>
              </div>
            </div>

            {/* Expanded rate options */}
            <AnimatePresence>
              {expanded === room.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  style={{ overflow: 'hidden', background: '#fafaf8', borderBottom: '1px solid #e8e8e8' }}
                >
                  <div style={{ padding: '28px 40px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}>
                    {[
                      { name: 'Flexible Rate',      price: room.from,                     perks: ['Free cancellation', 'Pay at hotel', 'Breakfast optional'] },
                      { name: 'Breakfast Included', price: Math.round(room.from * 1.18),   perks: ['Daily breakfast for 2', '48h cancellation', 'Priority check-in'] },
                      { name: 'All-Inclusive',       price: Math.round(room.from * 1.65),  perks: ['All meals & drinks', 'Excursions included', '$50 spa credit'] },
                    ].map((rate, ri) => (
                      <div key={rate.name} style={{
                        padding: '24px 28px',
                        borderLeft: ri > 0 ? '1px solid #e8e8e8' : 'none'
                      }}>
                        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0f0f0f', marginBottom: 8 }}>{rate.name}</div>
                        <div className="font-playfair" style={{ fontSize: 28, fontWeight: 600, color: '#0a4a6b', marginBottom: 14, lineHeight: 1 }}>
                          ${rate.price}<span style={{ fontSize: 13, color: '#aaa', fontWeight: 400 }}>/night</span>
                        </div>
                        {rate.perks.map(p => (
                          <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                            <Check size={12} color="#0a4a6b" strokeWidth={2.5} />
                            <span style={{ fontSize: 12, color: '#555' }}>{p}</span>
                          </div>
                        ))}
                        <button style={{
                          marginTop: 16, width: '100%', background: '#0f0f0f', color: '#fff',
                          border: 'none', padding: '11px', fontSize: 10, fontWeight: 800,
                          letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer'
                        }}>
                          Select
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Best rate strip */}
      <div style={{ background: '#0f0f0f', padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '0.04em', marginBottom: 4 }}>Best Rate Guarantee</div>
          <p style={{ fontSize: 12, color: '#666', margin: 0 }}>Find a lower rate elsewhere and we'll match it — guaranteed.</p>
        </div>
        <div style={{ display: 'flex', gap: 32 }}>
          {['No booking fees', 'Free upgrades when available', 'Flexible cancellation'].map(p => (
            <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
              <Check size={12} color="#c8a96e" />
              <span style={{ fontSize: 12, color: '#888' }}>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
