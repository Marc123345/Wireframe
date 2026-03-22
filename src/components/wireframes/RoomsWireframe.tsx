import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wifi, Wind, Tv, Coffee, Bath, ShieldCheck, Star, ArrowRight, Check } from 'lucide-react';

const FILTERS = ['All Rooms', 'Bluebay Resort', 'Sultan Sands', 'Suites', 'Beach View'];

const ROOMS = [
  {
    id: 'garden',
    property: 'Bluebay Resort',
    name: 'Garden View Room',
    size: '42 m²',
    occupancy: 'Up to 3 guests',
    from: 220,
    rating: 4.8,
    reviews: 312,
    tag: 'Most Popular',
    tagColor: '#0a4a6b',
    color: '#1a6a96',
    highlights: ['Private verandah', 'Mosquito net canopy', 'Separate dressing room', 'Garden terrace'],
    amenities: [Wifi, Wind, Tv, Coffee, Bath],
    desc: 'Wake to lush tropical garden views from your private verandah. Beautifully decorated in Zanzibari style with hand-carved furniture, a king or twin bed draped in billowing mosquito nets, and a separate dressing room.',
  },
  {
    id: 'junior',
    property: 'Bluebay Resort',
    name: 'Junior Suite',
    size: '58 m²',
    occupancy: 'Up to 2 guests',
    from: 340,
    rating: 4.9,
    reviews: 186,
    tag: 'Best Value',
    tagColor: '#c8a96e',
    color: '#c8a96e',
    highlights: ['Private outdoor shower', 'Garden terrace', 'Upgraded minibar', 'Pillow menu'],
    amenities: [Wifi, Wind, Tv, Coffee, Bath],
    desc: 'The Junior Suite elevates your stay with a private outdoor shower garden and expansive terrace. The spacious interior features upgraded Zanzibari furnishings, an enhanced minibar, and premium bath amenities.',
  },
  {
    id: 'beachfront',
    property: 'Bluebay Resort',
    name: 'Beachfront Suite',
    size: '75 m²',
    occupancy: 'Up to 2 guests',
    from: 580,
    rating: 5.0,
    reviews: 94,
    tag: 'Luxury',
    tagColor: '#e05a3a',
    color: '#0d7a5f',
    highlights: ['Direct beach access', 'Ocean panorama', 'Plunge pool terrace', 'Butler service'],
    amenities: [Wifi, Wind, Tv, Coffee, Bath, ShieldCheck],
    desc: "Our most coveted accommodation. Step directly from your private terrace onto Kiwengwa's pristine white sand beach. Sea views from every room, a private plunge pool, and dedicated butler service define the ultimate Zanzibar luxury.",
  },
  {
    id: 'sultan-deluxe',
    property: 'Sultan Sands',
    name: 'Sultan Deluxe Room',
    size: '46 m²',
    occupancy: 'Up to 3 guests',
    from: 195,
    rating: 4.7,
    reviews: 228,
    tag: null,
    tagColor: '#0a4a6b',
    color: '#7c3aed',
    highlights: ['Pool or garden view', 'Swahili-style décor', 'Private balcony', 'Complimentary snorkelling gear'],
    amenities: [Wifi, Wind, Tv, Coffee, Bath],
    desc: 'Authentic Swahili-inspired interiors with rich wood furnishings and vibrant fabrics. Enjoy pool or garden views from your private balcony, with complimentary snorkelling gear to explore the reef at your doorstep.',
  },
  {
    id: 'sultan-suite',
    property: 'Sultan Sands',
    name: 'Sultan Ocean Suite',
    size: '88 m²',
    occupancy: 'Up to 2 guests',
    from: 490,
    rating: 4.9,
    reviews: 71,
    tag: 'Sea View',
    tagColor: '#0d7a5f',
    color: '#1a6a96',
    highlights: ['Panoramic sea views', 'Separate living room', 'Outdoor whirlpool', 'Private beach access'],
    amenities: [Wifi, Wind, Tv, Coffee, Bath, ShieldCheck],
    desc: 'An expansive ocean-facing suite with a separate lounge, outdoor whirlpool, and uninterrupted Indian Ocean vistas. A preferred choice for honeymooners and anniversary escapes.',
  },
];

function AmenityIcon({ Icon }: { Icon: React.ElementType }) {
  return (
    <div style={{
      width: 32, height: 32, borderRadius: 6, background: 'rgba(10,74,107,0.08)',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <Icon size={14} color="#0a4a6b" />
    </div>
  );
}

export function RoomsWireframe() {
  const [activeFilter, setActiveFilter] = useState('All Rooms');
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = ROOMS.filter(r =>
    activeFilter === 'All Rooms' ? true :
    activeFilter === 'Bluebay Resort' ? r.property === 'Bluebay Resort' :
    activeFilter === 'Sultan Sands' ? r.property === 'Sultan Sands' :
    activeFilter === 'Suites' ? r.name.toLowerCase().includes('suite') :
    activeFilter === 'Beach View' ? r.highlights.some(h => h.toLowerCase().includes('beach')) :
    true
  );

  return (
    <div style={{ fontFamily: 'DM Sans, Inter, system-ui', background: '#f8fafc' }}>

      {/* Annotation */}
      <div style={{ background: '#0a4a6b', padding: '10px 32px' }}>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, margin: 0, textAlign: 'center', letterSpacing: '0.1em' }}>
          WIREFRAME: Rooms & Suites Page — Proposed Redesign
        </p>
      </div>

      {/* Header */}
      <div style={{ background: 'var(--bb-ocean)', padding: '48px 32px 56px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ height: 2, width: 28, background: 'var(--bb-sand)' }} />
            <span style={{ color: 'var(--bb-sand)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Accommodation</span>
          </div>
          <h1 className="font-playfair" style={{ color: '#fff', fontSize: 'clamp(28px,4vw,52px)', margin: '0 0 12px', fontWeight: 600 }}>
            Rooms & Suites
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 16, maxWidth: 560, margin: 0 }}>
            Spacious, beautifully appointed rooms across two world-class resorts — from garden-view retreats to beachfront suites.
          </p>
        </div>
      </div>

      {/* Sticky filter + booking reminder */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 30,
        background: '#fff', borderBottom: '1px solid #e5e7eb',
        padding: '0 32px', display: 'flex', alignItems: 'center',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
      }}>
        <div style={{ display: 'flex', gap: 4, flex: 1, overflowX: 'auto', padding: '14px 0' }}>
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: '7px 16px', borderRadius: 20, border: 'none', cursor: 'pointer',
                fontSize: 13, fontWeight: activeFilter === f ? 600 : 400, whiteSpace: 'nowrap',
                background: activeFilter === f ? 'var(--bb-ocean)' : '#f3f4f6',
                color: activeFilter === f ? '#fff' : '#4b5563',
                transition: 'all 0.2s'
              }}
            >
              {f}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingLeft: 24, borderLeft: '1px solid #e5e7eb', marginLeft: 16 }}>
          <div style={{ fontSize: 12, color: '#6b7280' }}>
            <span style={{ fontWeight: 600, color: '#111' }}>Apr 10–17</span> · 2 guests
          </div>
          <button style={{
            background: 'var(--bb-sand)', color: '#1a1a1a', border: 'none',
            padding: '8px 16px', borderRadius: 6, fontSize: 12, fontWeight: 700, cursor: 'pointer'
          }}>
            Change Dates
          </button>
        </div>
      </div>

      {/* Room grid */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 32px' }}>
        <div style={{ marginBottom: 16, fontSize: 13, color: '#6b7280' }}>
          {filtered.length} room{filtered.length !== 1 ? 's' : ''} available for your dates
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {filtered.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              style={{
                background: '#fff', borderRadius: 14, overflow: 'hidden',
                border: selected === room.id ? `2px solid var(--bb-ocean)` : '1px solid #e5e7eb',
                boxShadow: selected === room.id ? '0 0 0 4px rgba(10,74,107,0.08)' : 'none',
                cursor: 'pointer',
              }}
              onClick={() => setSelected(selected === room.id ? null : room.id)}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', minHeight: 200 }}>

                {/* Image block */}
                <div style={{
                  background: `linear-gradient(135deg, ${room.color}cc, ${room.color}55)`,
                  position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                    Room Photo
                  </span>
                  {room.tag && (
                    <div style={{
                      position: 'absolute', top: 14, left: 14,
                      background: room.tagColor, color: room.tagColor === '#c8a96e' ? '#1a1a1a' : '#fff',
                      fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 4
                    }}>{room.tag}</div>
                  )}
                  <div style={{
                    position: 'absolute', bottom: 12, left: 14, right: 14,
                    display: 'flex', gap: 4
                  }}>
                    {[1,2,3].map(n => (
                      <div key={n} style={{
                        flex: 1, height: 3, borderRadius: 2,
                        background: n === 1 ? '#fff' : 'rgba(255,255,255,0.3)'
                      }} />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 10 }}>
                    <div>
                      <div style={{ fontSize: 11, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 4 }}>
                        {room.property}
                      </div>
                      <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111', margin: 0 }}>{room.name}</h3>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'flex-end', marginBottom: 4 }}>
                        <Star size={13} fill="#f59e0b" color="#f59e0b" />
                        <span style={{ fontSize: 13, fontWeight: 700, color: '#111' }}>{room.rating}</span>
                        <span style={{ fontSize: 12, color: '#9ca3af' }}>({room.reviews})</span>
                      </div>
                      <div>
                        <span style={{ fontSize: 11, color: '#9ca3af' }}>from </span>
                        <span style={{ fontSize: 26, fontWeight: 800, color: 'var(--bb-ocean)' }}>${room.from}</span>
                        <span style={{ fontSize: 12, color: '#9ca3af' }}>/night</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
                    <span style={{ fontSize: 12, color: '#6b7280' }}>📐 {room.size}</span>
                    <span style={{ fontSize: 12, color: '#6b7280' }}>👤 {room.occupancy}</span>
                  </div>

                  <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.6, marginBottom: 16, flex: 1 }}>{room.desc}</p>

                  <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
                    {room.highlights.map(h => (
                      <span key={h} style={{
                        fontSize: 11, color: 'var(--bb-ocean)', background: 'rgba(10,74,107,0.07)',
                        padding: '4px 10px', borderRadius: 20, fontWeight: 500
                      }}>{h}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: 6 }}>
                      {room.amenities.map((Icon, idx) => <AmenityIcon key={idx} Icon={Icon} />)}
                    </div>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <button style={{
                        color: 'var(--bb-ocean)', background: 'transparent',
                        border: '1.5px solid var(--bb-ocean)', padding: '9px 16px',
                        borderRadius: 6, fontSize: 13, fontWeight: 600, cursor: 'pointer'
                      }}>
                        View Details
                      </button>
                      <button style={{
                        background: 'var(--bb-ocean)', color: '#fff', border: 'none',
                        padding: '9px 20px', borderRadius: 6, fontSize: 13, fontWeight: 700,
                        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6
                      }}>
                        Book This Room <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded rate options */}
              <AnimatePresence>
                {selected === room.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden', borderTop: '1px solid #e5e7eb' }}
                  >
                    <div style={{ padding: '20px 28px', background: '#fafaf8' }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: '#111', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>
                        Rate Options
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
                        {[
                          { name: 'Flexible Rate', price: room.from, perks: ['Free cancellation', 'Pay at hotel', 'Breakfast optional'] },
                          { name: 'Breakfast Included', price: Math.round(room.from * 1.18), perks: ['Daily breakfast for 2', 'Free cancellation 48h', 'Priority check-in'] },
                          { name: 'All-Inclusive', price: Math.round(room.from * 1.65), perks: ['All meals & drinks', 'Excursions included', 'Spa credit $50'] },
                        ].map(rate => (
                          <div key={rate.name} style={{
                            background: '#fff', borderRadius: 10, padding: '16px 18px',
                            border: '1px solid #e5e7eb'
                          }}>
                            <div style={{ fontSize: 14, fontWeight: 700, color: '#111', marginBottom: 4 }}>{rate.name}</div>
                            <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--bb-ocean)', marginBottom: 10 }}>
                              ${rate.price}<span style={{ fontSize: 12, color: '#9ca3af', fontWeight: 400 }}>/night</span>
                            </div>
                            {rate.perks.map(p => (
                              <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
                                <Check size={12} color="#16a34a" />
                                <span style={{ fontSize: 12, color: '#4b5563' }}>{p}</span>
                              </div>
                            ))}
                            <button style={{
                              width: '100%', marginTop: 12, background: 'var(--bb-ocean)', color: '#fff',
                              border: 'none', padding: '9px', borderRadius: 6, fontSize: 12,
                              fontWeight: 700, cursor: 'pointer'
                            }}>
                              Select Rate
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Best rate guarantee */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px 64px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #0a4a6b, #1a6a96)',
          borderRadius: 14, padding: '28px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <ShieldCheck size={36} color="var(--bb-sand)" />
            <div>
              <div className="font-playfair" style={{ color: '#fff', fontSize: 20, fontWeight: 600, marginBottom: 4 }}>
                Best Rate Guarantee
              </div>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, margin: 0 }}>
                Book direct and we'll match any lower rate you find — guaranteed.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {['No booking fees', 'Free upgrades when available', 'Flexible cancellation'].map(p => (
              <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Check size={14} color="var(--bb-sand)" />
                <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
