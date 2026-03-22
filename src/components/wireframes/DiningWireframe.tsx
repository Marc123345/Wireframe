import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Clock, MapPin, Star, ArrowRight, Utensils, Fish, Pizza, ChefHat } from 'lucide-react';

const VENUES = [
  {
    id: 'makuti',
    name: 'Makuti Restaurant',
    tagline: 'The Heart of the Resort',
    type: 'Main Restaurant',
    icon: ChefHat,
    color: '#0a4a6b',
    hours: 'Breakfast 7–10am · Lunch 12–3pm · Dinner 7–10pm',
    location: 'Garden Terrace, Bluebay Resort',
    description: 'Makuti is the resort\'s social heart — an elegant open-air restaurant where the flavours of Zanzibar shine. Daily breakfast buffets, themed lunches, and spectacular evening dinners with live music and cultural performances.',
    highlights: ['Zanzibari spice cuisine', 'Live entertainment nightly', 'Open-air terrace dining', 'Children\'s menu available'],
    cuisine: ['East African', 'International', 'Seafood', 'Vegetarian'],
    tags: ['Breakfast', 'Lunch', 'Dinner', 'Live Music'],
    rating: 4.8,
    reviews: 412,
  },
  {
    id: 'bahari',
    name: 'Bahari Grill',
    tagline: 'Fresh From the Ocean Daily',
    type: 'Seafood Grill',
    icon: Fish,
    color: '#0d7a5f',
    hours: 'Lunch 12–3pm · Dinner 6:30–10:30pm',
    location: 'Beachfront, Bluebay Resort',
    description: 'Feet-in-the-sand dining at its finest. The Bahari Grill celebrates Zanzibar\'s exceptional seafood — from morning-caught lobster to grilled octopus, served right at the ocean\'s edge. Our fishermen deliver fresh daily.',
    highlights: ['Lobster & whole fish specialities', 'Sand-floor setting', 'Sunset cocktail hour', 'Pre-booking recommended'],
    cuisine: ['Seafood', 'Grilled', 'Swahili'],
    tags: ['Lunch', 'Dinner', 'Beachfront', 'Sunset'],
    rating: 4.9,
    reviews: 287,
  },
  {
    id: 'trattoria',
    name: 'Italian Trattoria',
    tagline: 'La Dolce Vita in Zanzibar',
    type: 'Italian Restaurant',
    icon: Pizza,
    color: '#c8791a',
    hours: 'Dinner only — 7pm to 10:30pm',
    location: 'Garden Pavilion, Bluebay Resort',
    description: 'A romantic Italian escape tucked amid the tropical gardens. Authentic wood-fired pizzas, handmade pastas, and an extensive Italian wine list. An intimate atmosphere perfect for anniversaries and special occasions.',
    highlights: ['Wood-fired pizza oven', 'Handmade pasta daily', 'Italian wine cellar', 'Candlelit setting'],
    cuisine: ['Italian', 'Wood-fired', 'Pasta'],
    tags: ['Dinner Only', 'Romantic', 'Wine List'],
    rating: 4.7,
    reviews: 198,
  },
  {
    id: 'wok',
    name: 'The Wok',
    tagline: 'Asian Flavours, Ocean Breezes',
    type: 'Asian Restaurant',
    icon: Utensils,
    color: '#7c3aed',
    hours: 'Dinner only — 7pm to 10pm',
    location: 'Pool Deck, Bluebay Resort',
    description: 'Pan-Asian cuisine with live wok cooking stations. From Thai curries and Japanese sushi to Chinese dim sum — a vibrant, interactive dining experience that delights guests of all ages.',
    highlights: ['Live cooking stations', 'Sushi & sashimi bar', 'Vegetarian-friendly', 'Children\'s tasting menu'],
    cuisine: ['Thai', 'Japanese', 'Chinese', 'Vegetarian'],
    tags: ['Dinner Only', 'Interactive', 'Family-Friendly'],
    rating: 4.6,
    reviews: 156,
  },
];

const EXPERIENCES = [
  { title: 'Sunset Dhow Dinner', desc: 'A private dinner on a traditional dhow as the sun sets over the Indian Ocean.', price: 'from $120 pp', icon: '🚢' },
  { title: 'Spice Cooking Class', desc: 'Learn authentic Zanzibari spice blending and cooking techniques with our head chef.', price: 'from $65 pp', icon: '🌶️' },
  { title: 'Private Beach Dinner', desc: 'A bespoke candlelit dinner on the beach, curated exclusively for two.', price: 'from $180 pp', icon: '🕯️' },
];

export function DiningWireframe() {
  const [active, setActive] = useState('makuti');
  const venue = VENUES.find(v => v.id === active)!;
  const VenueIcon = venue.icon;

  return (
    <div style={{ fontFamily: 'DM Sans, Inter, system-ui', background: '#f8fafc' }}>

      {/* Annotation */}
      <div style={{ background: '#0a4a6b', padding: '10px 32px' }}>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, margin: 0, textAlign: 'center', letterSpacing: '0.1em' }}>
          WIREFRAME: Dining Page — New Page (Currently Missing from Site)
        </p>
      </div>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #0d7a5f 0%, #0a4a6b 100%)',
        padding: '56px 32px 64px'
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ height: 2, width: 28, background: 'var(--bb-sand)' }} />
            <span style={{ color: 'var(--bb-sand)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              Food & Drink
            </span>
          </div>
          <h1 className="font-playfair" style={{ color: '#fff', fontSize: 'clamp(28px,4.5vw,56px)', margin: '0 0 14px', fontWeight: 600, lineHeight: 1.1 }}>
            Dining at Bluebay<br />
            <span style={{ color: 'var(--bb-sand)' }}>Four Venues, One Exceptional Island.</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 16, maxWidth: 580, margin: 0, lineHeight: 1.7 }}>
            From barefoot beachfront grills to candlelit Italian evenings — every meal at Bluebay is an experience worth savouring.
          </p>

          {/* Venue quick-select tabs */}
          <div style={{ display: 'flex', gap: 10, marginTop: 36, flexWrap: 'wrap' }}>
            {VENUES.map(v => {
              const VIcon = v.icon;
              return (
                <button
                  key={v.id}
                  onClick={() => setActive(v.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '10px 18px', borderRadius: 8, border: 'none', cursor: 'pointer',
                    background: active === v.id ? '#fff' : 'rgba(255,255,255,0.1)',
                    color: active === v.id ? v.color : 'rgba(255,255,255,0.8)',
                    fontWeight: active === v.id ? 700 : 400, fontSize: 13,
                    transition: 'all 0.2s'
                  }}
                >
                  <VIcon size={15} />
                  {v.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Venue detail panel */}
      <div style={{ maxWidth: 1100, margin: '-32px auto 0', padding: '0 32px 48px', position: 'relative', zIndex: 10 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            style={{
              background: '#fff', borderRadius: 16, overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px' }}>

              {/* Left — image placeholder */}
              <div style={{
                background: `linear-gradient(135deg, ${venue.color}cc, ${venue.color}44)`,
                minHeight: 380, position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Restaurant Photo
                </span>
                {/* Venue type badge */}
                <div style={{
                  position: 'absolute', top: 20, left: 20,
                  background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
                  color: '#fff', fontSize: 11, padding: '6px 12px', borderRadius: 6,
                  display: 'flex', alignItems: 'center', gap: 6
                }}>
                  <VenueIcon size={12} />
                  {venue.type}
                </div>
                {/* Rating */}
                <div style={{
                  position: 'absolute', bottom: 20, left: 20,
                  background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
                  color: '#fff', padding: '8px 14px', borderRadius: 8,
                  display: 'flex', alignItems: 'center', gap: 8
                }}>
                  <Star size={13} fill="#f59e0b" color="#f59e0b" />
                  <span style={{ fontWeight: 700 }}>{venue.rating}</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>({venue.reviews} reviews)</span>
                </div>
              </div>

              {/* Right — content */}
              <div style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: 11, color: venue.color, textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600, marginBottom: 8 }}>
                  {venue.tagline}
                </div>
                <h2 className="font-playfair" style={{ fontSize: 28, color: '#111', margin: '0 0 14px', fontWeight: 600 }}>{venue.name}</h2>
                <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.7, marginBottom: 20 }}>{venue.description}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <Clock size={14} color="#9ca3af" style={{ marginTop: 2 }} />
                    <span style={{ fontSize: 13, color: '#6b7280' }}>{venue.hours}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <MapPin size={14} color="#9ca3af" />
                    <span style={{ fontSize: 13, color: '#6b7280' }}>{venue.location}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 20 }}>
                  {venue.tags.map(t => (
                    <span key={t} style={{
                      fontSize: 11, padding: '4px 10px', borderRadius: 20,
                      background: `${venue.color}14`, color: venue.color, fontWeight: 600,
                      letterSpacing: '0.05em'
                    }}>{t}</span>
                  ))}
                </div>

                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#111', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>Highlights</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {venue.highlights.map(h => (
                      <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: venue.color, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: '#374151' }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', gap: 10 }}>
                  <button style={{
                    flex: 1, background: venue.color, color: '#fff', border: 'none',
                    padding: '12px', borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: 'pointer'
                  }}>
                    Reserve a Table
                  </button>
                  <button style={{
                    padding: '12px 16px', background: 'transparent', border: `1.5px solid ${venue.color}`,
                    color: venue.color, borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: 6
                  }}>
                    View Menu <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dining Experiences */}
      <div style={{ background: 'var(--bb-ocean)', padding: '64px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', marginBottom: 12 }}>
              <div style={{ height: 1, width: 28, background: 'var(--bb-sand)' }} />
              <span style={{ color: 'var(--bb-sand)', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase' }}>Exclusive Experiences</span>
              <div style={{ height: 1, width: 28, background: 'var(--bb-sand)' }} />
            </div>
            <h2 className="font-playfair" style={{ color: '#fff', fontSize: 'clamp(22px,3vw,36px)', margin: 0, fontWeight: 600 }}>
              Dining Experiences Beyond the Restaurant
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: 'rgba(255,255,255,0.08)', borderRadius: 12, padding: '28px 24px',
                  border: '1px solid rgba(255,255,255,0.12)'
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 14 }}>{exp.icon}</div>
                <h3 className="font-playfair" style={{ color: '#fff', fontSize: 18, margin: '0 0 8px', fontWeight: 600 }}>{exp.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.6, marginBottom: 16 }}>{exp.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--bb-sand)', fontSize: 14, fontWeight: 700 }}>{exp.price}</span>
                  <button style={{
                    background: 'transparent', border: '1px solid var(--bb-sand)',
                    color: 'var(--bb-sand)', padding: '7px 14px', borderRadius: 6,
                    fontSize: 12, fontWeight: 600, cursor: 'pointer'
                  }}>
                    Enquire
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
