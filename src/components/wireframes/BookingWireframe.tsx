import { motion } from 'motion/react';
import { useState } from 'react';
import { Check, ShieldCheck, Star, ChevronRight, Lock, CreditCard, Phone } from 'lucide-react';

const STEPS = ['Select Dates & Resort', 'Choose Room', 'Add Extras', 'Confirm & Pay'];

const ROOMS_QUICK = [
  { name: 'Garden View Room', from: 220, property: 'Bluebay Resort', tag: 'Best Value' },
  { name: 'Junior Suite', from: 340, property: 'Bluebay Resort', tag: null },
  { name: 'Beachfront Suite', from: 580, property: 'Bluebay Resort', tag: 'Luxury' },
  { name: 'Sultan Deluxe Room', from: 195, property: 'Sultan Sands', tag: null },
  { name: 'Sultan Ocean Suite', from: 490, property: 'Sultan Sands', tag: 'Sea View' },
];

const EXTRAS = [
  { id: 'breakfast', label: 'Breakfast for Two', desc: 'Daily buffet breakfast at Makuti Restaurant', price: 38, per: 'per night' },
  { id: 'transfer', label: 'Airport Transfer', desc: 'Private round-trip transfer from Zanzibar Airport', price: 75, per: 'per trip' },
  { id: 'spa', label: 'Spa Welcome Credit', desc: '$50 credit toward any Oasis Spa treatment', price: 50, per: 'once' },
  { id: 'romance', label: 'Romance Package', desc: 'Rose petals, champagne & private beach dinner for two', price: 180, per: 'once' },
];

export function BookingWireframe() {
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [property, setProperty] = useState<'both' | 'bluebay' | 'sultan'>('bluebay');

  const toggleExtra = (id: string) => {
    setSelectedExtras(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]);
  };

  const nightlyRate = selectedRoom ? (ROOMS_QUICK.find(r => r.name === selectedRoom)?.from ?? 0) : 0;
  const extrasTotal = selectedExtras.reduce((sum, id) => {
    const e = EXTRAS.find(ex => ex.id === id);
    return sum + (e?.price ?? 0);
  }, 0);
  const nights = 7;
  const subtotal = nightlyRate * nights + extrasTotal;

  return (
    <div style={{ fontFamily: 'DM Sans, Inter, system-ui', background: '#f8fafc' }}>

      {/* Annotation */}
      <div style={{ background: '#0a4a6b', padding: '10px 32px' }}>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, margin: 0, textAlign: 'center', letterSpacing: '0.1em' }}>
          WIREFRAME: Direct Booking Flow — Clear 4-Step Conversion Funnel
        </p>
      </div>

      {/* Progress bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e5e7eb', padding: '0 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', alignItems: 'center' }}>
          {STEPS.map((s, i) => {
            const num = i + 1;
            const done = num < step;
            const active = num === step;
            return (
              <div key={s} style={{ display: 'flex', alignItems: 'center', flex: i < STEPS.length - 1 ? 1 : 0 }}>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 0', cursor: done ? 'pointer' : 'default' }}
                  onClick={() => done && setStep(num)}
                >
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: done ? '#0d7a5f' : active ? 'var(--bb-ocean)' : '#e5e7eb',
                    color: done || active ? '#fff' : '#9ca3af', fontSize: 12, fontWeight: 700, flexShrink: 0
                  }}>
                    {done ? <Check size={14} /> : num}
                  </div>
                  <span style={{
                    fontSize: 13, fontWeight: active ? 700 : 400,
                    color: active ? '#111' : done ? '#0d7a5f' : '#6b7280',
                    whiteSpace: 'nowrap'
                  }}>{s}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{
                    flex: 1, height: 2, marginLeft: 12,
                    background: done ? '#0d7a5f' : '#e5e7eb', borderRadius: 2
                  }} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 28, alignItems: 'start' }}>

          {/* Main content */}
          <div>

            {/* ── STEP 1: Dates & Resort ── */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="font-playfair" style={{ fontSize: 26, color: '#111', margin: '0 0 24px', fontWeight: 600 }}>
                  When are you visiting Zanzibar?
                </h2>

                {/* Date picker mock */}
                <div style={{ background: '#fff', borderRadius: 12, padding: '28px', border: '1px solid #e5e7eb', marginBottom: 20 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
                    {['Check-In Date', 'Check-Out Date'].map(label => (
                      <div key={label}>
                        <label style={{ fontSize: 11, fontWeight: 700, color: '#111', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 8 }}>{label}</label>
                        <div style={{
                          border: '1.5px solid #d1d5db', borderRadius: 8, padding: '12px 14px',
                          fontSize: 14, color: '#9ca3af', cursor: 'pointer',
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                        }}>
                          Select a date
                          <span style={{ fontSize: 18 }}>📅</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={{ fontSize: 11, fontWeight: 700, color: '#111', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 8 }}>Adults</label>
                      <select style={{
                        width: '100%', border: '1.5px solid #d1d5db', borderRadius: 8, padding: '12px 14px',
                        fontSize: 14, color: '#111', background: '#fff'
                      }}>
                        {[1,2,3,4].map(n => <option key={n}>{n} Adult{n > 1 ? 's' : ''}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 11, fontWeight: 700, color: '#111', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 8 }}>Children</label>
                      <select style={{
                        width: '100%', border: '1.5px solid #d1d5db', borderRadius: 8, padding: '12px 14px',
                        fontSize: 14, color: '#111', background: '#fff'
                      }}>
                        {[0,1,2,3].map(n => <option key={n}>{n} {n === 1 ? 'Child' : 'Children'}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Property selector */}
                <div style={{ background: '#fff', borderRadius: 12, padding: '28px', border: '1px solid #e5e7eb', marginBottom: 28 }}>
                  <label style={{ fontSize: 11, fontWeight: 700, color: '#111', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 16 }}>
                    Which Resort?
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
                    {[
                      { id: 'both', label: 'Show Both', sub: 'Compare options' },
                      { id: 'bluebay', label: 'Bluebay Beach Resort', sub: '5-star beachfront' },
                      { id: 'sultan', label: 'Sultan Sands', sub: 'Boutique luxury' },
                    ].map(opt => (
                      <div
                        key={opt.id}
                        onClick={() => setProperty(opt.id as any)}
                        style={{
                          border: property === opt.id ? '2px solid var(--bb-ocean)' : '1.5px solid #e5e7eb',
                          borderRadius: 10, padding: '14px', cursor: 'pointer', textAlign: 'center',
                          background: property === opt.id ? 'rgba(10,74,107,0.04)' : '#fff'
                        }}
                      >
                        <div style={{ fontSize: 13, fontWeight: property === opt.id ? 700 : 500, color: '#111' }}>{opt.label}</div>
                        <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 3 }}>{opt.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  style={{
                    background: 'var(--bb-ocean)', color: '#fff', border: 'none',
                    padding: '14px 32px', borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: 8
                  }}
                >
                  Check Availability <ChevronRight size={16} />
                </button>
              </motion.div>
            )}

            {/* ── STEP 2: Room selection ── */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="font-playfair" style={{ fontSize: 26, color: '#111', margin: '0 0 6px', fontWeight: 600 }}>
                  Choose Your Room
                </h2>
                <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 24 }}>5 rooms available for 7 nights · Apr 10–17 · 2 guests</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {ROOMS_QUICK.map(room => (
                    <div
                      key={room.name}
                      onClick={() => setSelectedRoom(room.name)}
                      style={{
                        background: '#fff', borderRadius: 10, padding: '20px 24px',
                        border: selectedRoom === room.name ? '2px solid var(--bb-ocean)' : '1px solid #e5e7eb',
                        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16,
                        boxShadow: selectedRoom === room.name ? '0 0 0 3px rgba(10,74,107,0.1)' : 'none'
                      }}
                    >
                      {/* Radio */}
                      <div style={{
                        width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                        border: selectedRoom === room.name ? '6px solid var(--bb-ocean)' : '2px solid #d1d5db'
                      }} />
                      {/* Image stub */}
                      <div style={{
                        width: 80, height: 60, borderRadius: 6, flexShrink: 0,
                        background: 'linear-gradient(135deg, #0a4a6b66, #c8a96e44)',
                      }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                          <span style={{ fontSize: 14, fontWeight: 700, color: '#111' }}>{room.name}</span>
                          {room.tag && (
                            <span style={{ fontSize: 10, fontWeight: 700, background: 'var(--bb-sand)', color: '#1a1a1a', padding: '2px 8px', borderRadius: 4 }}>
                              {room.tag}
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: 12, color: '#9ca3af' }}>{room.property}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--bb-ocean)' }}>${room.from}</div>
                        <div style={{ fontSize: 11, color: '#9ca3af' }}>per night</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                  <button onClick={() => setStep(1)} style={{
                    background: 'transparent', color: '#6b7280', border: '1.5px solid #d1d5db',
                    padding: '12px 24px', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer'
                  }}>← Back</button>
                  <button
                    onClick={() => selectedRoom && setStep(3)}
                    disabled={!selectedRoom}
                    style={{
                      background: selectedRoom ? 'var(--bb-ocean)' : '#e5e7eb',
                      color: selectedRoom ? '#fff' : '#9ca3af', border: 'none',
                      padding: '12px 28px', borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: selectedRoom ? 'pointer' : 'not-allowed',
                      display: 'flex', alignItems: 'center', gap: 8
                    }}
                  >
                    Continue <ChevronRight size={15} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ── STEP 3: Extras ── */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="font-playfair" style={{ fontSize: 26, color: '#111', margin: '0 0 6px', fontWeight: 600 }}>
                  Enhance Your Stay
                </h2>
                <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 24 }}>Add experiences and services to make your trip unforgettable.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {EXTRAS.map(extra => (
                    <div
                      key={extra.id}
                      onClick={() => toggleExtra(extra.id)}
                      style={{
                        background: '#fff', borderRadius: 10, padding: '20px 24px',
                        border: selectedExtras.includes(extra.id) ? '2px solid var(--bb-ocean)' : '1px solid #e5e7eb',
                        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16
                      }}
                    >
                      <div style={{
                        width: 22, height: 22, borderRadius: 5, flexShrink: 0,
                        background: selectedExtras.includes(extra.id) ? 'var(--bb-ocean)' : 'transparent',
                        border: selectedExtras.includes(extra.id) ? 'none' : '2px solid #d1d5db',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        {selectedExtras.includes(extra.id) && <Check size={13} color="#fff" />}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: '#111', marginBottom: 3 }}>{extra.label}</div>
                        <div style={{ fontSize: 13, color: '#6b7280' }}>{extra.desc}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--bb-ocean)' }}>+${extra.price}</div>
                        <div style={{ fontSize: 11, color: '#9ca3af' }}>{extra.per}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                  <button onClick={() => setStep(2)} style={{ background: 'transparent', color: '#6b7280', border: '1.5px solid #d1d5db', padding: '12px 24px', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>← Back</button>
                  <button onClick={() => setStep(4)} style={{ background: 'var(--bb-ocean)', color: '#fff', border: 'none', padding: '12px 28px', borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                    Review & Pay <ChevronRight size={15} />
                  </button>
                  <button onClick={() => setStep(4)} style={{ background: 'transparent', color: '#6b7280', border: 'none', padding: '12px', fontSize: 13, cursor: 'pointer' }}>
                    Skip extras
                  </button>
                </div>
              </motion.div>
            )}

            {/* ── STEP 4: Payment ── */}
            {step === 4 && (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="font-playfair" style={{ fontSize: 26, color: '#111', margin: '0 0 24px', fontWeight: 600 }}>Confirm Your Booking</h2>
                <div style={{ background: '#fff', borderRadius: 12, padding: '28px', border: '1px solid #e5e7eb', marginBottom: 20 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#111', marginBottom: 20 }}>Guest Details</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    {['First Name', 'Last Name', 'Email Address', 'Phone Number'].map(f => (
                      <div key={f} style={{ gridColumn: f === 'Email Address' || f === 'Phone Number' ? 'span 1' : 'span 1' }}>
                        <label style={{ fontSize: 11, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>{f}</label>
                        <input
                          placeholder={f}
                          style={{
                            width: '100%', border: '1.5px solid #d1d5db', borderRadius: 8, padding: '11px 14px',
                            fontSize: 14, color: '#111', fontFamily: 'inherit', outline: 'none'
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ background: '#fff', borderRadius: 12, padding: '28px', border: '1px solid #e5e7eb', marginBottom: 24 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                    <Lock size={14} color="#6b7280" />
                    <span style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#111' }}>Payment Details</span>
                    <span style={{ fontSize: 11, color: '#6b7280', marginLeft: 4 }}>— Secure 256-bit SSL</span>
                  </div>
                  <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
                    {['Visa', 'Mastercard', 'Amex', 'PayPal'].map(p => (
                      <div key={p} style={{ padding: '5px 12px', border: '1px solid #e5e7eb', borderRadius: 6, fontSize: 12, color: '#374151', fontWeight: 600 }}>{p}</div>
                    ))}
                  </div>
                  <div style={{ display: 'grid', gap: 14 }}>
                    <div>
                      <label style={{ fontSize: 11, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>Card Number</label>
                      <div style={{ border: '1.5px solid #d1d5db', borderRadius: 8, padding: '11px 14px', fontSize: 14, color: '#9ca3af', display: 'flex', alignItems: 'center', gap: 10 }}>
                        <CreditCard size={16} color="#9ca3af" />
                        •••• •••• •••• ••••
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                      {['Expiry Date', 'CVV'].map(f => (
                        <div key={f}>
                          <label style={{ fontSize: 11, fontWeight: 600, color: '#374151', display: 'block', marginBottom: 6 }}>{f}</label>
                          <input placeholder={f === 'Expiry Date' ? 'MM / YY' : '•••'} style={{ width: '100%', border: '1.5px solid #d1d5db', borderRadius: 8, padding: '11px 14px', fontSize: 14, fontFamily: 'inherit' }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button style={{
                  width: '100%', background: 'var(--bb-ocean)', color: '#fff', border: 'none',
                  padding: '16px', borderRadius: 10, fontSize: 16, fontWeight: 700, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10
                }}>
                  <Lock size={16} />
                  Confirm Booking — ${subtotal.toLocaleString()}
                </button>
                <p style={{ textAlign: 'center', color: '#9ca3af', fontSize: 12, marginTop: 10 }}>
                  Free cancellation up to 48 hours before arrival · Confirmation sent immediately
                </p>
              </motion.div>
            )}
          </div>

          {/* Sidebar — booking summary */}
          <div style={{ position: 'sticky', top: 80 }}>
            <div style={{ background: '#fff', borderRadius: 14, border: '1px solid #e5e7eb', overflow: 'hidden' }}>
              <div style={{ background: 'var(--bb-ocean)', padding: '20px 24px' }}>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Booking Summary</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Star size={13} fill="#f59e0b" color="#f59e0b" />
                  <span style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>Best Rate Guaranteed</span>
                </div>
              </div>
              <div style={{ padding: '20px 24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
                  {[
                    { label: 'Property', value: property === 'both' ? 'Both Resorts' : property === 'bluebay' ? 'Bluebay Resort' : 'Sultan Sands' },
                    { label: 'Check-in', value: 'Apr 10, 2026' },
                    { label: 'Check-out', value: 'Apr 17, 2026' },
                    { label: 'Duration', value: '7 nights' },
                    { label: 'Guests', value: '2 Adults' },
                  ].map(r => (
                    <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
                      <span style={{ color: '#9ca3af' }}>{r.label}</span>
                      <span style={{ color: '#111', fontWeight: 500 }}>{r.value}</span>
                    </div>
                  ))}
                </div>

                {selectedRoom && (
                  <>
                    <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: 16, marginBottom: 12 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
                        <span style={{ color: '#4b5563', fontWeight: 500 }}>{selectedRoom}</span>
                        <span style={{ color: '#111' }}>${nightlyRate} × {nights}n</span>
                      </div>
                      {selectedExtras.map(id => {
                        const e = EXTRAS.find(ex => ex.id === id);
                        if (!e) return null;
                        return (
                          <div key={id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
                            <span style={{ color: '#4b5563' }}>+ {e.label}</span>
                            <span style={{ color: '#111' }}>+${e.price}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: 14 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: 15, fontWeight: 700, color: '#111' }}>Total</span>
                        <span style={{ fontSize: 20, fontWeight: 800, color: 'var(--bb-ocean)' }}>${subtotal.toLocaleString()}</span>
                      </div>
                      <div style={{ fontSize: 11, color: '#9ca3af', textAlign: 'right', marginTop: 2 }}>Taxes & fees included</div>
                    </div>
                  </>
                )}

                <div style={{ marginTop: 20, padding: '14px', background: '#f0fdf4', borderRadius: 8, border: '1px solid #bbf7d0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <ShieldCheck size={15} color="#16a34a" />
                    <span style={{ fontSize: 12, fontWeight: 700, color: '#14532d' }}>Book With Confidence</span>
                  </div>
                  {['Free cancellation (48h)', 'No hidden fees', 'Best rate promise', 'Instant confirmation'].map(p => (
                    <div key={p} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                      <Check size={11} color="#16a34a" />
                      <span style={{ fontSize: 12, color: '#15803d' }}>{p}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 14, textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, color: '#6b7280', fontSize: 12 }}>
                    <Phone size={12} />
                    Need help? Call +255 777 000 000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
