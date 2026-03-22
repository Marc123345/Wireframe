import { motion } from 'motion/react';
import { useState } from 'react';
import { Check, ChevronRight, Lock, Phone } from 'lucide-react';
import { Footer } from './Footer';

const STEPS = ['Dates & Resort', 'Choose Room', 'Extras', 'Confirm & Pay'];

const ROOMS_QUICK = [
  { name: 'Garden View Room',   from: 220, property: 'Bluebay Resort', tag: 'Most Popular' },
  { name: 'Junior Suite',       from: 340, property: 'Bluebay Resort', tag: null           },
  { name: 'Beachfront Suite',   from: 580, property: 'Bluebay Resort', tag: 'Signature'   },
  { name: 'Sultan Deluxe Room', from: 195, property: 'Sultan Sands',   tag: null           },
  { name: 'Sultan Ocean Suite', from: 490, property: 'Sultan Sands',   tag: 'Sea View'    },
];

const EXTRAS = [
  { id: 'breakfast', label: 'Breakfast for Two',  desc: 'Daily buffet at Makuti Restaurant',                           price: 38,  per: '/night' },
  { id: 'transfer',  label: 'Airport Transfer',    desc: 'Private round-trip from Zanzibar Airport',                   price: 75,  per: '/trip'  },
  { id: 'spa',       label: '$50 Spa Credit',      desc: 'Redeemable against any Oasis Spa treatment',                price: 50,  per: ''       },
  { id: 'romance',   label: 'Romance Package',     desc: 'Rose petals, champagne & private beach dinner for two',      price: 180, per: ''       },
];

interface Props { onNavigate: (tab: string) => void; }

export function BookingWireframe({ onNavigate }: Props) {
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [property, setProperty] = useState<string>('bluebay');

  const toggleExtra = (id: string) => {
    setSelectedExtras(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]);
  };

  const nightlyRate = ROOMS_QUICK.find(r => r.name === selectedRoom)?.from ?? 0;
  const extrasTotal = selectedExtras.reduce((s, id) => s + (EXTRAS.find(e => e.id === id)?.price ?? 0), 0);
  const nights = 7;
  const total = nightlyRate * nights + extrasTotal;

  return (
    <div style={{ fontFamily: 'DM Sans, Inter, system-ui', background: '#fff', color: '#0f0f0f' }}>

      {/* Annotation */}
      <div style={{ background: '#0f0f0f', padding: '8px 32px', textAlign: 'center' }}>
        <span style={{ color: '#666', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          Wireframe — Direct Booking Flow (4-Step Conversion Funnel)
        </span>
      </div>

      {/* Step progress */}
      <div style={{ background: '#fafaf8', borderBottom: '1px solid #e8e8e8', padding: '0 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', maxWidth: 800 }}>
          {STEPS.map((s, i) => {
            const num = i + 1;
            const done = num < step;
            const active = num === step;
            return (
              <div key={s} style={{ display: 'flex', alignItems: 'center', flex: i < STEPS.length - 1 ? 1 : 0 }}>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '18px 0', cursor: done ? 'pointer' : 'default' }}
                  onClick={() => done && setStep(num)}
                >
                  <div style={{
                    width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: done ? '#0f0f0f' : active ? '#0a4a6b' : 'transparent',
                    border: done || active ? 'none' : '1px solid #d1d5db',
                    color: done || active ? '#fff' : '#aaa',
                    fontSize: 11, fontWeight: 700, flexShrink: 0
                  }}>
                    {done ? <Check size={12} /> : num}
                  </div>
                  <span style={{
                    fontSize: 11, fontWeight: active ? 700 : 400,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: active ? '#0f0f0f' : done ? '#555' : '#aaa',
                    whiteSpace: 'nowrap'
                  }}>{s}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{ flex: 1, height: 1, marginLeft: 16, background: done ? '#0f0f0f' : '#e8e8e8' }} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', alignItems: 'start', minHeight: '60vh' }}>

        {/* Main content */}
        <div style={{ padding: '48px 40px', borderRight: '1px solid #e8e8e8' }}>

          {/* ── STEP 1 ── */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="font-playfair" style={{ fontSize: 28, fontWeight: 600, margin: '0 0 32px' }}>
                When are you visiting?
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid #e8e8e8', marginBottom: 24 }}>
                {['Check-In Date', 'Check-Out Date'].map((label, i) => (
                  <div key={label} style={{
                    padding: '16px 20px',
                    borderRight: i === 0 ? '1px solid #e8e8e8' : 'none'
                  }}>
                    <div style={{ fontSize: 9, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 8 }}>{label}</div>
                    <div style={{ fontSize: 14, color: '#aaa' }}>Select a date</div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
                {['Adults', 'Children'].map(f => (
                  <div key={f}>
                    <div style={{ fontSize: 9, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 8 }}>{f}</div>
                    <select style={{
                      width: '100%', border: '1px solid #e8e8e8', padding: '13px 16px',
                      fontSize: 13, color: '#0f0f0f', background: '#fff', appearance: 'auto'
                    }}>
                      {(f === 'Adults' ? [1,2,3,4] : [0,1,2,3]).map(n => (
                        <option key={n}>{n} {f === 'Adults' ? `Adult${n !== 1 ? 's' : ''}` : `${n === 1 ? 'Child' : 'Children'}`}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: 36 }}>
                <div style={{ fontSize: 9, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 12 }}>Which Resort?</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, border: '1px solid #e8e8e8' }}>
                  {[
                    { id: 'both',    label: 'Both Resorts',        sub: 'Compare options' },
                    { id: 'bluebay', label: 'Bluebay Beach Resort', sub: '5-star beachfront' },
                    { id: 'sultan',  label: 'Sultan Sands',         sub: 'Boutique luxury' },
                  ].map((opt, i) => (
                    <div
                      key={opt.id}
                      onClick={() => setProperty(opt.id)}
                      style={{
                        padding: '16px 20px', cursor: 'pointer', textAlign: 'center',
                        borderRight: i < 2 ? '1px solid #e8e8e8' : 'none',
                        background: property === opt.id ? '#0f0f0f' : '#fff'
                      }}
                    >
                      <div style={{ fontSize: 12, fontWeight: 700, color: property === opt.id ? '#fff' : '#0f0f0f' }}>{opt.label}</div>
                      <div style={{ fontSize: 11, color: property === opt.id ? 'rgba(255,255,255,0.5)' : '#aaa', marginTop: 3 }}>{opt.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                style={{
                  background: '#0a4a6b', color: '#fff', border: 'none',
                  padding: '14px 32px', fontSize: 11, fontWeight: 800,
                  letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 10
                }}
              >
                Check Availability <ChevronRight size={14} />
              </button>
            </motion.div>
          )}

          {/* ── STEP 2 ── */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="font-playfair" style={{ fontSize: 28, fontWeight: 600, margin: '0 0 6px' }}>Choose Your Room</h2>
              <p style={{ color: '#888', fontSize: 13, marginBottom: 32 }}>5 rooms available · Apr 10–17 · 2 guests</p>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {ROOMS_QUICK.map((room, i) => (
                  <div
                    key={room.name}
                    onClick={() => setSelectedRoom(room.name)}
                    style={{
                      display: 'grid', gridTemplateColumns: '24px 80px 1fr auto',
                      alignItems: 'center', gap: 20, padding: '20px 0',
                      borderTop: i === 0 ? '1px solid #e8e8e8' : 'none',
                      borderBottom: '1px solid #e8e8e8', cursor: 'pointer',
                      background: selectedRoom === room.name ? '#fafaf8' : '#fff'
                    }}
                  >
                    {/* Radio */}
                    <div style={{
                      width: 18, height: 18, border: selectedRoom === room.name ? 'none' : '1px solid #ccc',
                      background: selectedRoom === room.name ? '#0a4a6b' : 'transparent',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      {selectedRoom === room.name && <Check size={11} color="#fff" />}
                    </div>
                    {/* Image stub */}
                    <div style={{ height: 56, background: '#f0f0ee' }} />
                    {/* Info */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ fontSize: 14, fontWeight: 600 }}>{room.name}</span>
                        {room.tag && (
                          <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', border: '1px solid #c8a96e', color: '#c8a96e', padding: '2px 7px' }}>
                            {room.tag}
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: 11, color: '#aaa', marginTop: 2 }}>{room.property}</div>
                    </div>
                    {/* Price */}
                    <div style={{ textAlign: 'right' }}>
                      <div className="font-playfair" style={{ fontSize: 22, fontWeight: 600, color: '#0a4a6b' }}>${room.from}</div>
                      <div style={{ fontSize: 11, color: '#aaa' }}>per night</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
                <button onClick={() => setStep(1)} style={{ background: 'transparent', color: '#888', border: '1px solid #e8e8e8', padding: '12px 24px', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 700 }}>← Back</button>
                <button
                  onClick={() => selectedRoom && setStep(3)}
                  disabled={!selectedRoom}
                  style={{
                    background: selectedRoom ? '#0a4a6b' : '#e8e8e8',
                    color: selectedRoom ? '#fff' : '#aaa', border: 'none',
                    padding: '12px 28px', fontSize: 11, fontWeight: 800,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    cursor: selectedRoom ? 'pointer' : 'not-allowed',
                    display: 'flex', alignItems: 'center', gap: 8
                  }}
                >
                  Continue <ChevronRight size={13} />
                </button>
              </div>
            </motion.div>
          )}

          {/* ── STEP 3 ── */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="font-playfair" style={{ fontSize: 28, fontWeight: 600, margin: '0 0 6px' }}>Enhance Your Stay</h2>
              <p style={{ color: '#888', fontSize: 13, marginBottom: 32 }}>Optional add-ons for an even more memorable experience.</p>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {EXTRAS.map((extra, i) => (
                  <div
                    key={extra.id}
                    onClick={() => toggleExtra(extra.id)}
                    style={{
                      display: 'grid', gridTemplateColumns: '24px 1fr auto',
                      alignItems: 'center', gap: 20, padding: '20px 0',
                      borderTop: i === 0 ? '1px solid #e8e8e8' : 'none',
                      borderBottom: '1px solid #e8e8e8', cursor: 'pointer',
                      background: selectedExtras.includes(extra.id) ? '#fafaf8' : '#fff'
                    }}
                  >
                    <div style={{
                      width: 18, height: 18,
                      border: selectedExtras.includes(extra.id) ? 'none' : '1px solid #ccc',
                      background: selectedExtras.includes(extra.id) ? '#0a4a6b' : 'transparent',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      {selectedExtras.includes(extra.id) && <Check size={11} color="#fff" />}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>{extra.label}</div>
                      <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>{extra.desc}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div className="font-playfair" style={{ fontSize: 20, fontWeight: 600, color: '#0a4a6b' }}>+${extra.price}</div>
                      <div style={{ fontSize: 11, color: '#aaa' }}>{extra.per}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 12, marginTop: 32, alignItems: 'center' }}>
                <button onClick={() => setStep(2)} style={{ background: 'transparent', color: '#888', border: '1px solid #e8e8e8', padding: '12px 24px', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', fontWeight: 700 }}>← Back</button>
                <button onClick={() => setStep(4)} style={{ background: '#0a4a6b', color: '#fff', border: 'none', padding: '12px 28px', fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                  Continue <ChevronRight size={13} />
                </button>
                <button onClick={() => setStep(4)} style={{ background: 'transparent', color: '#aaa', border: 'none', fontSize: 11, cursor: 'pointer', textDecoration: 'underline', padding: 0 }}>
                  Skip
                </button>
              </div>
            </motion.div>
          )}

          {/* ── STEP 4 ── */}
          {step === 4 && (
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
              <h2 className="font-playfair" style={{ fontSize: 28, fontWeight: 600, margin: '0 0 32px' }}>Confirm Your Booking</h2>

              {/* Guest details */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 16 }}>Guest Details</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {['First Name', 'Last Name', 'Email Address', 'Phone Number'].map(f => (
                    <div key={f}>
                      <div style={{ fontSize: 9, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 6 }}>{f}</div>
                      <input
                        placeholder=""
                        style={{
                          width: '100%', border: '1px solid #e8e8e8', padding: '12px 14px',
                          fontSize: 13, color: '#0f0f0f', fontFamily: 'inherit', outline: 'none',
                          background: '#fafaf8'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment */}
              <div style={{ marginBottom: 32 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <Lock size={12} color="#aaa" />
                  <span style={{ fontSize: 9, fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                    Payment Details — 256-bit SSL Secured
                  </span>
                </div>
                <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
                  {['Visa', 'MC', 'Amex', 'PayPal'].map(p => (
                    <div key={p} style={{ border: '1px solid #e8e8e8', padding: '5px 12px', fontSize: 11, color: '#555', fontWeight: 700 }}>{p}</div>
                  ))}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div>
                    <div style={{ fontSize: 9, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 6 }}>Card Number</div>
                    <input placeholder="•••• •••• •••• ••••" style={{ width: '100%', border: '1px solid #e8e8e8', padding: '12px 14px', fontSize: 13, fontFamily: 'inherit', background: '#fafaf8' }} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    {['Expiry (MM / YY)', 'CVV'].map(f => (
                      <div key={f}>
                        <div style={{ fontSize: 9, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 6 }}>{f}</div>
                        <input style={{ width: '100%', border: '1px solid #e8e8e8', padding: '12px 14px', fontSize: 13, fontFamily: 'inherit', background: '#fafaf8' }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button style={{
                width: '100%', background: '#0a4a6b', color: '#fff', border: 'none',
                padding: '16px', fontSize: 11, fontWeight: 800,
                letterSpacing: '0.18em', textTransform: 'uppercase', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10
              }}>
                <Lock size={14} />
                Confirm & Pay — ${total > 0 ? total.toLocaleString() : '—'}
              </button>
              <p style={{ textAlign: 'center', color: '#aaa', fontSize: 11, marginTop: 12 }}>
                Free cancellation up to 48h before arrival · Instant confirmation by email
              </p>
            </motion.div>
          )}
        </div>

        {/* Sidebar — booking summary */}
        <div style={{ background: '#fafaf8', borderLeft: '1px solid #e8e8e8', position: 'sticky', top: 0 }}>

          {/* Header */}
          <div style={{ padding: '24px 28px', borderBottom: '1px solid #e8e8e8' }}>
            <div style={{ fontSize: 9, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 4 }}>Booking Summary</div>
            <div style={{ fontSize: 11, color: '#c8a96e', fontWeight: 700, letterSpacing: '0.08em' }}>Best Rate Guaranteed</div>
          </div>

          {/* Details */}
          <div style={{ padding: '24px 28px', borderBottom: '1px solid #e8e8e8' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Resort',    value: property === 'both' ? 'Both Resorts' : property === 'bluebay' ? 'Bluebay Resort' : 'Sultan Sands' },
                { label: 'Check-in',  value: 'Apr 10, 2026' },
                { label: 'Check-out', value: 'Apr 17, 2026' },
                { label: 'Duration',  value: '7 nights' },
                { label: 'Guests',    value: '2 Adults' },
              ].map(r => (
                <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                  <span style={{ color: '#aaa' }}>{r.label}</span>
                  <span style={{ color: '#0f0f0f', fontWeight: 500 }}>{r.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          {selectedRoom && (
            <div style={{ padding: '24px 28px', borderBottom: '1px solid #e8e8e8' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 12 }}>
                <span style={{ color: '#555' }}>{selectedRoom}</span>
                <span>${nightlyRate} × {nights}n</span>
              </div>
              {selectedExtras.map(id => {
                const e = EXTRAS.find(ex => ex.id === id);
                if (!e) return null;
                return (
                  <div key={id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 12 }}>
                    <span style={{ color: '#888' }}>{e.label}</span>
                    <span>+${e.price}</span>
                  </div>
                );
              })}
              <div style={{ borderTop: '1px solid #e8e8e8', paddingTop: 12, marginTop: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Total</span>
                <span className="font-playfair" style={{ fontSize: 26, fontWeight: 600, color: '#0a4a6b' }}>${total.toLocaleString()}</span>
              </div>
              <div style={{ fontSize: 10, color: '#aaa', textAlign: 'right', marginTop: 2 }}>Taxes & fees included</div>
            </div>
          )}

          {/* Trust signals */}
          <div style={{ padding: '20px 28px' }}>
            {['Free cancellation (48h)', 'No hidden fees', 'Best rate promise', 'Instant confirmation'].map(p => (
              <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7 }}>
                <Check size={11} color="#0a4a6b" />
                <span style={{ fontSize: 11, color: '#555' }}>{p}</span>
              </div>
            ))}
            <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 6, color: '#aaa', fontSize: 11 }}>
              <Phone size={11} />
              Need help? +255 777 000 000
            </div>
          </div>
        </div>
      </div>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
