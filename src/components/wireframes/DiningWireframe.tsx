import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Clock, MapPin, ArrowRight } from 'lucide-react';

const VENUES = [
  {
    id: 'makuti',
    num: '01',
    name: 'Makuti Restaurant',
    type: 'Main Restaurant',
    tagline: 'The social heart of the resort.',
    hours: 'Breakfast 7–10am · Lunch 12–3pm · Dinner 7–10pm',
    location: 'Garden Terrace, Bluebay Resort',
    cuisine: 'East African · International · Seafood',
    tags: ['Breakfast', 'Lunch', 'Dinner', 'Live Music'],
    desc: 'An elegant open-air restaurant where the flavours of Zanzibar take centre stage. Daily breakfast buffets, themed lunches, and spectacular evening dinners with live music and cultural performances nightly.',
    highlights: ['Zanzibari spice cuisine', 'Live entertainment nightly', 'Open-air terrace', 'Children\'s menu'],
  },
  {
    id: 'bahari',
    num: '02',
    name: 'Bahari Grill',
    type: 'Seafood & Grill',
    tagline: 'Fresh from the ocean, daily.',
    hours: 'Lunch 12–3pm · Dinner 6:30–10:30pm',
    location: 'Beachfront, Bluebay Resort',
    cuisine: 'Seafood · Grilled · Swahili',
    tags: ['Lunch', 'Dinner', 'Beachfront'],
    desc: 'Barefoot dining at the ocean\'s edge. Our fishermen deliver the catch of the day each morning — lobster, whole reef fish, and chargrilled octopus served as the sun meets the Indian Ocean.',
    highlights: ['Morning-fresh seafood', 'Sand-floor setting', 'Sunset cocktail hour', 'Pre-booking recommended'],
  },
  {
    id: 'trattoria',
    num: '03',
    name: 'Italian Trattoria',
    type: 'Italian Restaurant',
    tagline: 'La dolce vita in the tropics.',
    hours: 'Dinner only · 7pm–10:30pm',
    location: 'Garden Pavilion, Bluebay Resort',
    cuisine: 'Italian · Wood-fired · Pasta',
    tags: ['Dinner Only', 'Romantic', 'Wine List'],
    desc: 'A candlelit Italian escape set among the tropical gardens. Authentic wood-fired pizzas, handmade pastas, and an extensive Italian wine cellar. The preferred choice for anniversaries and intimate evenings.',
    highlights: ['Wood-fired pizza oven', 'Handmade pasta daily', 'Italian wine cellar', 'Candlelit setting'],
  },
  {
    id: 'wok',
    num: '04',
    name: 'The Wok',
    type: 'Pan-Asian',
    tagline: 'Live wok cooking by the pool.',
    hours: 'Dinner only · 7pm–10pm',
    location: 'Pool Deck, Bluebay Resort',
    cuisine: 'Thai · Japanese · Chinese',
    tags: ['Dinner Only', 'Interactive', 'Family-Friendly'],
    desc: 'A vibrant, interactive dining concept with live wok stations. From Thai curries and Japanese sushi to dim sum — a feast of Asian flavours designed for curious palates of all ages.',
    highlights: ['Live cooking stations', 'Sushi & sashimi bar', 'Vegetarian-friendly', 'Children\'s menu'],
  },
];

const EXPERIENCES = [
  { title: 'Sunset Dhow Dinner',   price: 'from $120 pp', desc: 'A private dinner aboard a traditional dhow as the sun sets over the Indian Ocean.' },
  { title: 'Spice Cooking Class',  price: 'from $65 pp',  desc: 'Blend authentic Zanzibari spices and cook with our head chef — a hands-on island experience.' },
  { title: 'Private Beach Dinner', price: 'from $180 pp', desc: 'A bespoke candlelit dinner curated exclusively for two, right on the sand.' },
];

export function DiningWireframe() {
  const [active, setActive] = useState('makuti');
  const venue = VENUES.find(v => v.id === active)!;

  return (
    <div style={{ fontFamily: 'DM Sans, Inter, system-ui', background: '#fff', color: '#0f0f0f' }}>

      {/* Annotation */}
      <div style={{ background: '#0f0f0f', padding: '8px 32px', textAlign: 'center' }}>
        <span style={{ color: '#666', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          Wireframe — Dining Page (New — Currently Missing from Site)
        </span>
      </div>

      {/* Header */}
      <div style={{ background: '#0f0f0f', padding: '60px 40px 56px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ width: 24, height: 1, background: '#c8a96e' }} />
          <span style={{ fontSize: 10, color: '#c8a96e', letterSpacing: '0.28em', textTransform: 'uppercase' }}>Food & Drink</span>
        </div>
        <h1 className="font-playfair" style={{ color: '#fff', fontSize: 'clamp(32px,5vw,64px)', margin: '0 0 14px', fontWeight: 600, lineHeight: 1.05 }}>
          Dining at Bluebay.
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, maxWidth: 520, margin: 0, lineHeight: 1.7 }}>
          Four distinct venues. One shared commitment to exceptional food, island ingredients, and memorable evenings.
        </p>
      </div>

      {/* Venue selector + detail panel */}
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', minHeight: 520 }}>

        {/* Left — venue list */}
        <div style={{ borderRight: '1px solid #e8e8e8' }}>
          {VENUES.map((v, i) => (
            <div
              key={v.id}
              onClick={() => setActive(v.id)}
              style={{
                padding: '28px 32px', cursor: 'pointer',
                borderBottom: i < VENUES.length - 1 ? '1px solid #e8e8e8' : 'none',
                background: active === v.id ? '#fafaf8' : '#fff',
                borderLeft: active === v.id ? '3px solid #0a4a6b' : '3px solid transparent',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <span style={{ fontSize: 12, color: active === v.id ? '#0a4a6b' : '#ccc', fontFamily: 'Playfair Display, serif' }}>{v.num}</span>
                <span style={{ fontSize: 10, color: '#aaa', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{v.type}</span>
              </div>
              <h3 className="font-playfair" style={{
                fontSize: 18, fontWeight: 600, margin: '0 0 4px',
                color: active === v.id ? '#0f0f0f' : '#666'
              }}>{v.name}</h3>
              <p style={{ fontSize: 12, color: '#aaa', margin: 0 }}>{v.tagline}</p>
            </div>
          ))}
        </div>

        {/* Right — venue detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {/* Image placeholder */}
            <div style={{
              height: 280, background: '#f0f0ee',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative'
            }}>
              <span style={{ fontSize: 10, color: '#ccc', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Restaurant Photography</span>
              {/* Tags */}
              <div style={{ position: 'absolute', top: 20, left: 24, display: 'flex', gap: 8 }}>
                {venue.tags.map(t => (
                  <span key={t} style={{
                    fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                    background: '#fff', color: '#0f0f0f', padding: '4px 10px'
                  }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '36px 40px', flex: 1 }}>
              <h2 className="font-playfair" style={{ fontSize: 30, fontWeight: 600, margin: '0 0 6px' }}>{venue.name}</h2>
              <p style={{ fontSize: 13, color: '#aaa', fontStyle: 'italic', margin: '0 0 20px' }}>{venue.tagline}</p>
              <p style={{ fontSize: 14, color: '#555', lineHeight: 1.75, margin: '0 0 24px' }}>{venue.desc}</p>

              <div style={{ display: 'flex', gap: 28, marginBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <Clock size={13} color="#aaa" style={{ marginTop: 2 }} />
                  <span style={{ fontSize: 12, color: '#888', lineHeight: 1.6 }}>{venue.hours}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <MapPin size={13} color="#aaa" />
                  <span style={{ fontSize: 12, color: '#888' }}>{venue.location}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 12, marginBottom: 28 }}>
                {venue.highlights.map(h => (
                  <span key={h} style={{
                    fontSize: 11, color: '#555', border: '1px solid #e8e8e8',
                    padding: '5px 12px', letterSpacing: '0.04em'
                  }}>{h}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 12 }}>
                <button style={{
                  background: '#0a4a6b', color: '#fff', border: 'none',
                  padding: '12px 24px', fontSize: 10, fontWeight: 800,
                  letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer'
                }}>
                  Reserve a Table
                </button>
                <button style={{
                  background: 'transparent', color: '#0f0f0f',
                  border: '1px solid #0f0f0f', padding: '12px 24px',
                  fontSize: 10, fontWeight: 700, letterSpacing: '0.12em',
                  textTransform: 'uppercase', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 7
                }}>
                  View Menu <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── DINING EXPERIENCES ── */}
      <div style={{ background: '#fafaf8', borderTop: '1px solid #e8e8e8', padding: '72px 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <div style={{ width: 24, height: 1, background: '#c8a96e' }} />
          <span style={{ fontSize: 10, color: '#c8a96e', letterSpacing: '0.28em', textTransform: 'uppercase' }}>Exclusive Experiences</span>
        </div>
        <h2 className="font-playfair" style={{ fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 600, margin: '0 0 48px', lineHeight: 1.1 }}>
          Beyond the Restaurant
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}>
          {EXPERIENCES.map((exp, i) => (
            <div key={exp.title} style={{
              padding: '36px 40px',
              borderLeft: i > 0 ? '1px solid #e8e8e8' : 'none'
            }}>
              <div className="font-playfair" style={{ fontSize: 48, color: '#e8e8e8', fontWeight: 600, lineHeight: 1, marginBottom: 16 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-playfair" style={{ fontSize: 20, fontWeight: 600, margin: '0 0 10px' }}>{exp.title}</h3>
              <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7, margin: '0 0 20px' }}>{exp.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 13, color: '#c8a96e', fontWeight: 700 }}>{exp.price}</span>
                <button style={{
                  background: 'transparent', border: 'none',
                  color: '#0f0f0f', fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  cursor: 'pointer', borderBottom: '1px solid #0f0f0f',
                  paddingBottom: 2, display: 'flex', alignItems: 'center', gap: 5
                }}>
                  Enquire <ArrowRight size={11} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
