import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Clock, ArrowRight, Star, Droplets, Wind, Flame, Sparkles, Heart } from 'lucide-react';

const CATEGORIES = ['All Treatments', 'Massages', 'Facials', 'Body Rituals', 'Couples'];

const TREATMENTS = [
  {
    id: 't1',
    category: 'Massages',
    name: 'Zanzibar Spice Massage',
    duration: '90 min',
    price: 120,
    rating: 4.9,
    tag: 'Signature',
    tagColor: '#c8a96e',
    desc: 'Our flagship massage — warm clove and cardamom oils combined with traditional Swahili techniques. A deeply restorative journey through the island\'s ancient spice heritage.',
    benefits: ['Deep muscle relief', 'Aromatic therapy', 'Improves circulation'],
  },
  {
    id: 't2',
    category: 'Massages',
    name: 'Ocean Drift Massage',
    duration: '60 min',
    price: 85,
    rating: 4.8,
    tag: null,
    tagColor: '',
    desc: 'Performed in our sea-facing massage rooms, the rhythm of the ocean complements a medium-pressure full-body massage using cold-pressed coconut oil.',
    benefits: ['Ocean views', 'Stress relief', 'Coconut oil treatment'],
  },
  {
    id: 't3',
    category: 'Couples',
    name: 'Sunset Couples Ritual',
    duration: '120 min',
    price: 260,
    rating: 5.0,
    tag: 'Most Booked',
    tagColor: '#e05a3a',
    desc: 'An exclusively designed experience for two — side-by-side ocean-view massage suites, private champagne and canapés, a shared bath ritual, and sunset cocktails on the spa terrace.',
    benefits: ['Private suite', 'Champagne & canapés', 'Sunset cocktails', 'Romantic ritual'],
  },
  {
    id: 't4',
    category: 'Facials',
    name: 'Coral Brightening Facial',
    duration: '75 min',
    price: 95,
    rating: 4.7,
    tag: null,
    tagColor: '',
    desc: 'A rejuvenating facial using sustainably harvested marine extracts and Zanzibar aloe vera. Brightens skin tone and deeply hydrates for a radiant island glow.',
    benefits: ['Marine extracts', 'Deep hydration', 'Brightening effect'],
  },
  {
    id: 't5',
    category: 'Body Rituals',
    name: 'Spice Island Scrub & Wrap',
    duration: '105 min',
    price: 140,
    rating: 4.8,
    tag: 'New',
    tagColor: '#0d7a5f',
    desc: 'A full-body exfoliation with hand-blended Zanzibari spice scrub, followed by a nourishing warm oil body wrap. Leaves skin silky, fragrant, and renewed.',
    benefits: ['Full-body exfoliation', 'Nourishing wrap', 'Spice oil blend'],
  },
  {
    id: 't6',
    category: 'Massages',
    name: 'Hot Stone Therapy',
    duration: '80 min',
    price: 105,
    rating: 4.8,
    tag: null,
    tagColor: '',
    desc: 'Smooth volcanic stones heated to therapeutic temperatures, placed on key tension points and used in flowing massage strokes to melt away deep muscle tension.',
    benefits: ['Volcanic stone therapy', 'Deep tension relief', 'Calming heat'],
  },
];

const FACILITIES = [
  { icon: Droplets, label: 'Sea-Facing Pools' },
  { icon: Flame, label: 'Sauna & Steam' },
  { icon: Wind, label: 'Open-Air Cabanas' },
  { icon: Sparkles, label: 'Spa Tub' },
  { icon: Heart, label: 'Couples Suites' },
  { icon: Star, label: 'Relaxation Lounge' },
];

export function SpaWireframe() {
  const [activeCategory, setActiveCategory] = useState('All Treatments');
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = TREATMENTS.filter(t =>
    activeCategory === 'All Treatments' ? true : t.category === activeCategory
  );

  return (
    <div style={{ fontFamily: 'DM Sans, Inter, system-ui', background: '#f8fafc' }}>

      {/* Annotation */}
      <div style={{ background: '#0a4a6b', padding: '10px 32px' }}>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, margin: 0, textAlign: 'center', letterSpacing: '0.1em' }}>
          WIREFRAME: Spa & Wellness Page — New Page (Currently Missing from Site)
        </p>
      </div>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #0d4d40 60%, #0a4a6b 100%)',
        padding: '72px 32px 80px', position: 'relative', overflow: 'hidden'
      }}>
        {/* Ghost text */}
        <div style={{
          position: 'absolute', right: -20, bottom: -20,
          fontFamily: 'Playfair Display, serif', fontSize: 'clamp(80px,16vw,220px)',
          color: 'rgba(255,255,255,0.03)', lineHeight: 1, fontWeight: 700, pointerEvents: 'none',
          userSelect: 'none', letterSpacing: '-0.02em'
        }}>OASIS</div>

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ height: 1, width: 28, background: 'var(--bb-sand)' }} />
            <span style={{ color: 'var(--bb-sand)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              Oasis Spa & Wellness
            </span>
          </div>
          <h1 className="font-playfair" style={{ color: '#fff', fontSize: 'clamp(28px,4.5vw,58px)', margin: '0 0 14px', fontWeight: 600, lineHeight: 1.1 }}>
            Sanctuary for the<br />
            <span style={{ color: 'var(--bb-sand)' }}>Senses & Soul.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, maxWidth: 540, margin: '0 0 36px', lineHeight: 1.7 }}>
            Nestled at the ocean's edge, the Oasis Spa blends ancient Swahili healing traditions with modern luxury — an escape within an escape.
          </p>

          {/* Facilities strip */}
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {FACILITIES.map(f => {
              const Icon = f.icon;
              return (
                <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Icon size={15} color="var(--bb-sand)" />
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>{f.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats band */}
      <div style={{ background: 'var(--bb-sand)', padding: '20px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 60, flexWrap: 'wrap' }}>
          {[
            { value: '18+', label: 'Treatments' },
            { value: '5', label: 'Treatment Suites' },
            { value: '4.9', label: 'Average Rating' },
            { value: '100%', label: 'Natural Ingredients' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div className="font-playfair" style={{ fontSize: 28, fontWeight: 700, color: '#1a1a1a' }}>{s.value}</div>
              <div style={{ fontSize: 11, color: 'rgba(0,0,0,0.6)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Treatments */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '56px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
          <h2 className="font-playfair" style={{ fontSize: 28, color: '#111', margin: 0, fontWeight: 600 }}>Our Treatments</h2>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '7px 16px', borderRadius: 20, border: 'none', cursor: 'pointer',
                  fontSize: 13, fontWeight: activeCategory === cat ? 600 : 400,
                  background: activeCategory === cat ? '#0d4d40' : '#f3f4f6',
                  color: activeCategory === cat ? '#fff' : '#4b5563',
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {filtered.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              style={{
                background: '#fff', borderRadius: 12, overflow: 'hidden',
                border: selected === t.id ? '2px solid #0d4d40' : '1px solid #e5e7eb',
                cursor: 'pointer'
              }}
              onClick={() => setSelected(selected === t.id ? null : t.id)}
            >
              {/* Image placeholder */}
              <div style={{
                height: 160, background: 'linear-gradient(135deg, #0d4d4099, #0a4a6b88)',
                position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Treatment Photo
                </span>
                {t.tag && (
                  <div style={{
                    position: 'absolute', top: 12, left: 12,
                    background: t.tagColor, color: t.tagColor === '#c8a96e' ? '#1a1a1a' : '#fff',
                    fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 4
                  }}>{t.tag}</div>
                )}
              </div>

              <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#111', margin: 0, lineHeight: 1.3 }}>{t.name}</h3>
                  <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 8 }}>
                    <div style={{ fontSize: 18, fontWeight: 800, color: '#0d4d40' }}>${t.price}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 3, justifyContent: 'flex-end' }}>
                      <Star size={11} fill="#f59e0b" color="#f59e0b" />
                      <span style={{ fontSize: 11, color: '#6b7280' }}>{t.rating}</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 10 }}>
                  <Clock size={12} color="#9ca3af" />
                  <span style={{ fontSize: 12, color: '#6b7280' }}>{t.duration}</span>
                  <span style={{ fontSize: 12, color: '#d1d5db', margin: '0 4px' }}>·</span>
                  <span style={{ fontSize: 12, color: '#6b7280' }}>{t.category}</span>
                </div>

                <p style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.6, marginBottom: 14 }}>{t.desc}</p>

                <AnimatePresence>
                  {selected === t.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: 'hidden', marginBottom: 14 }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 5, padding: '10px', background: '#f0fdf4', borderRadius: 8 }}>
                        {t.benefits.map(b => (
                          <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <Sparkles size={11} color="#0d7a5f" />
                            <span style={{ fontSize: 12, color: '#065f46' }}>{b}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button style={{
                  width: '100%', background: '#0d4d40', color: '#fff', border: 'none',
                  padding: '10px', borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6
                }}>
                  Book Treatment <ArrowRight size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking CTA */}
      <div style={{
        background: 'linear-gradient(135deg, #0d4d40 0%, #0a4a6b 100%)',
        padding: '56px 32px', textAlign: 'center'
      }}>
        <Heart size={28} color="var(--bb-sand)" style={{ marginBottom: 16 }} />
        <h2 className="font-playfair" style={{ color: '#fff', fontSize: 'clamp(22px,3.5vw,40px)', margin: '0 0 12px', fontWeight: 600 }}>
          Reserve Your Oasis Experience
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, marginBottom: 28 }}>
          Pre-book your treatments before arrival and receive 10% off when combined with your room booking.
        </p>
        <button style={{
          background: 'var(--bb-sand)', color: '#1a1a1a', border: 'none',
          padding: '14px 32px', borderRadius: 8, fontSize: 15, fontWeight: 700,
          cursor: 'pointer', boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
        }}>
          Book Spa Treatments
        </button>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 12 }}>
          10% saving when pre-booked with accommodation · Advance booking recommended
        </p>
      </div>

    </div>
  );
}
