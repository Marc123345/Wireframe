import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Clock, ArrowRight, Check } from 'lucide-react';

const CATEGORIES = ['All', 'Massages', 'Facials', 'Body Rituals', 'Couples'];

const TREATMENTS = [
  {
    id: 't1', category: 'Massages',
    name: 'Zanzibar Spice Massage',
    duration: '90 min', price: 120,
    tag: 'Signature',
    desc: 'Our flagship treatment — warm clove and cardamom oils blended with traditional Swahili massage techniques. A deeply restorative journey through the island\'s spice heritage.',
    benefits: ['Deep muscle relief', 'Aromatic therapy', 'Improves circulation'],
  },
  {
    id: 't2', category: 'Massages',
    name: 'Ocean Drift Massage',
    duration: '60 min', price: 85,
    tag: null,
    desc: 'Performed in our sea-facing suites, the rhythm of the ocean accompanies a full-body massage using cold-pressed coconut oil. Medium pressure. Deeply restorative.',
    benefits: ['Ocean views', 'Coconut oil', 'Stress relief'],
  },
  {
    id: 't3', category: 'Couples',
    name: 'Sunset Couples Ritual',
    duration: '120 min', price: 260,
    tag: 'Most Requested',
    desc: 'Side-by-side ocean-view suites, champagne and canapés, a shared bath ritual, and sunset cocktails on the spa terrace. Designed exclusively for two.',
    benefits: ['Private suite', 'Champagne & canapés', 'Sunset cocktails', 'Bath ritual'],
  },
  {
    id: 't4', category: 'Facials',
    name: 'Coral Brightening Facial',
    duration: '75 min', price: 95,
    tag: null,
    desc: 'Marine extracts and Zanzibar aloe vera work together to brighten skin tone and deliver deep hydration. Leaves skin luminous and renewed.',
    benefits: ['Marine extracts', 'Deep hydration', 'Brightening'],
  },
  {
    id: 't5', category: 'Body Rituals',
    name: 'Spice Island Scrub & Wrap',
    duration: '105 min', price: 140,
    tag: 'New',
    desc: 'A full-body exfoliation with hand-blended Zanzibari spice scrub, followed by a warm oil body wrap. Skin is left silky, fragrant, and completely renewed.',
    benefits: ['Full-body exfoliation', 'Spice oil blend', 'Nourishing wrap'],
  },
  {
    id: 't6', category: 'Massages',
    name: 'Hot Stone Therapy',
    duration: '80 min', price: 105,
    tag: null,
    desc: 'Volcanic stones heated to therapeutic temperature are placed on key tension points and used in long flowing strokes to melt away deep muscle tightness.',
    benefits: ['Volcanic stones', 'Deep tension relief', 'Calming heat'],
  },
];

const FACILITIES = [
  { label: 'Sea-facing massage suites' },
  { label: 'Sauna & steam room' },
  { label: 'Open-air relaxation cabanas' },
  { label: 'Spa hydrotherapy tub' },
  { label: 'Private couples suites' },
  { label: 'Spa lounge & refreshments' },
];

export function SpaWireframe() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered = TREATMENTS.filter(t =>
    activeCategory === 'All' ? true : t.category === activeCategory
  );

  return (
    <div style={{ fontFamily: 'DM Sans, Inter, system-ui', background: '#fff', color: '#0f0f0f' }}>

      {/* Annotation */}
      <div style={{ background: '#0f0f0f', padding: '8px 32px', textAlign: 'center' }}>
        <span style={{ color: '#666', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          Wireframe — Spa & Wellness Page (New — Currently Missing from Site)
        </span>
      </div>

      {/* Hero */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 500 }}>
        {/* Left — image */}
        <div style={{
          background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative'
        }}>
          <span style={{ fontSize: 10, color: '#333', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Oasis Spa Photography
          </span>
          <div style={{ position: 'absolute', bottom: 24, left: 32 }}>
            <div style={{ width: 32, height: 1, background: '#c8a96e', marginBottom: 12 }} />
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Beachfront · Kiwengwa
            </span>
          </div>
        </div>

        {/* Right — text */}
        <div style={{ background: '#fafaf8', padding: '64px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 24, height: 1, background: '#c8a96e' }} />
            <span style={{ fontSize: 10, color: '#c8a96e', letterSpacing: '0.28em', textTransform: 'uppercase' }}>Oasis Spa & Wellness</span>
          </div>
          <h1 className="font-playfair" style={{ fontSize: 'clamp(30px,4vw,52px)', fontWeight: 600, margin: '0 0 20px', lineHeight: 1.1 }}>
            Sanctuary for the<br />Senses & Soul.
          </h1>
          <p style={{ fontSize: 14, color: '#666', lineHeight: 1.8, margin: '0 0 36px' }}>
            Nestled at the ocean's edge, the Oasis Spa blends ancient Swahili healing traditions with modern luxury. An escape within an escape — idyllically positioned right on the beach.
          </p>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, borderTop: '1px solid #e8e8e8', paddingTop: 28 }}>
            {[
              { value: '18+', label: 'Treatments' },
              { value: '5',   label: 'Private Suites' },
              { value: '4.9', label: 'Guest Rating' },
            ].map((s, i) => (
              <div key={s.label} style={{ paddingRight: 24, borderRight: i < 2 ? '1px solid #e8e8e8' : 'none', paddingLeft: i > 0 ? 24 : 0 }}>
                <div className="font-playfair" style={{ fontSize: 32, fontWeight: 600, color: '#0a4a6b', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 10, color: '#aaa', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Facilities */}
          <div style={{ marginTop: 28 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {FACILITIES.map(f => (
                <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 3, height: 3, background: '#c8a96e', flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: '#555' }}>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Treatments */}
      <div style={{ padding: '72px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{ width: 24, height: 1, background: '#c8a96e' }} />
              <span style={{ fontSize: 10, color: '#c8a96e', letterSpacing: '0.28em', textTransform: 'uppercase' }}>Treatment Menu</span>
            </div>
            <h2 className="font-playfair" style={{ fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 600, margin: 0, lineHeight: 1.1 }}>
              Our Treatments
            </h2>
          </div>

          {/* Category filter */}
          <div style={{ display: 'flex', gap: 0, border: '1px solid #e8e8e8' }}>
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '9px 18px', border: 'none', cursor: 'pointer',
                  fontSize: 11, fontWeight: activeCategory === cat ? 700 : 400,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  background: activeCategory === cat ? '#0f0f0f' : '#fff',
                  color: activeCategory === cat ? '#fff' : '#888',
                  borderRight: i < CATEGORIES.length - 1 ? '1px solid #e8e8e8' : 'none',
                  transition: 'all 0.18s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Treatment rows */}
        {filtered.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            onHoverStart={() => setHoveredId(t.id)}
            onHoverEnd={() => setHoveredId(null)}
            style={{
              display: 'grid', gridTemplateColumns: '200px 1fr auto',
              borderTop: '1px solid #e8e8e8',
              borderBottom: i === filtered.length - 1 ? '1px solid #e8e8e8' : 'none',
              background: hoveredId === t.id ? '#fafaf8' : '#fff',
              transition: 'background 0.2s', cursor: 'pointer'
            }}
          >
            {/* Image stub */}
            <div style={{
              height: 140, background: '#f0f0ee', margin: '20px 0',
              display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'
            }}>
              {t.tag && (
                <div style={{
                  position: 'absolute', top: 0, left: 0,
                  background: '#0a4a6b', color: '#fff',
                  fontSize: 9, fontWeight: 800, padding: '4px 10px',
                  letterSpacing: '0.12em', textTransform: 'uppercase'
                }}>{t.tag}</div>
              )}
              <span style={{ fontSize: 9, color: '#ccc', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Photo</span>
            </div>

            {/* Content */}
            <div style={{ padding: '24px 32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                <span style={{ fontSize: 10, color: '#aaa', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{t.category}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <Clock size={11} color="#aaa" />
                  <span style={{ fontSize: 11, color: '#aaa' }}>{t.duration}</span>
                </div>
              </div>
              <h3 className="font-playfair" style={{ fontSize: 20, fontWeight: 600, margin: '0 0 8px' }}>{t.name}</h3>
              <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7, margin: '0 0 14px' }}>{t.desc}</p>

              <AnimatePresence>
                {hoveredId === t.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{ display: 'flex', gap: 16 }}
                  >
                    {t.benefits.map(b => (
                      <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <Check size={11} color="#0a4a6b" />
                        <span style={{ fontSize: 11, color: '#555' }}>{b}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Price + CTA */}
            <div style={{
              padding: '24px 32px', display: 'flex', flexDirection: 'column',
              alignItems: 'flex-end', justifyContent: 'center', gap: 14,
              borderLeft: '1px solid #e8e8e8', minWidth: 160
            }}>
              <div style={{ textAlign: 'right' }}>
                <div className="font-playfair" style={{ fontSize: 28, fontWeight: 600, color: '#0a4a6b', lineHeight: 1 }}>${t.price}</div>
                <div style={{ fontSize: 11, color: '#aaa', marginTop: 2 }}>per person</div>
              </div>
              <button style={{
                background: '#0a4a6b', color: '#fff', border: 'none',
                padding: '10px 20px', fontSize: 10, fontWeight: 800,
                letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer'
              }}>
                Book
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: '#0f0f0f', padding: '64px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 24, height: 1, background: '#c8a96e' }} />
              <span style={{ fontSize: 10, color: '#c8a96e', letterSpacing: '0.28em', textTransform: 'uppercase' }}>Advance Booking</span>
            </div>
            <h2 className="font-playfair" style={{ color: '#fff', fontSize: 'clamp(24px,3.5vw,40px)', margin: '0 0 10px', fontWeight: 600 }}>
              Reserve Your Oasis Experience
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, margin: 0, lineHeight: 1.7 }}>
              Pre-book treatments alongside your room and receive 10% off. Advance booking is strongly recommended during peak season.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
            <button style={{
              background: '#c8a96e', color: '#0f0f0f', border: 'none',
              padding: '14px 32px', fontSize: 10, fontWeight: 800,
              letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}>
              Book Spa Treatments
            </button>
            <button style={{
              background: 'transparent', color: 'rgba(255,255,255,0.4)', border: 'none',
              fontSize: 11, cursor: 'pointer', textDecoration: 'underline', padding: 0,
              display: 'flex', alignItems: 'center', gap: 5
            }}>
              Download full treatment menu <ArrowRight size={11} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
