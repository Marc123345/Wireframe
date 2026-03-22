import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ClipboardList, LayoutTemplate, BedDouble, UtensilsCrossed, Sparkles, ShoppingCart } from 'lucide-react';
import { AuditReport } from './components/AuditReport';
import { HomepageWireframe } from './components/wireframes/HomepageWireframe';
import { RoomsWireframe } from './components/wireframes/RoomsWireframe';
import { DiningWireframe } from './components/wireframes/DiningWireframe';
import { SpaWireframe } from './components/wireframes/SpaWireframe';
import { BookingWireframe } from './components/wireframes/BookingWireframe';

const TABS = [
  { id: 'audit',   label: 'UX Audit',       Icon: ClipboardList,   color: '#dc2626' },
  { id: 'home',    label: 'Homepage',        Icon: LayoutTemplate,  color: '#0a4a6b' },
  { id: 'rooms',   label: 'Rooms & Suites',  Icon: BedDouble,       color: '#0a4a6b' },
  { id: 'dining',  label: 'Dining',          Icon: UtensilsCrossed, color: '#0d7a5f' },
  { id: 'spa',     label: 'Spa & Wellness',  Icon: Sparkles,        color: '#0d4d40' },
  { id: 'booking', label: 'Booking Flow',    Icon: ShoppingCart,    color: '#7c3aed' },
];

export default function App() {
  const [tab, setTab] = useState('audit');
  const activeTab = TABS.find(t => t.id === tab)!;

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', fontFamily: 'DM Sans, Inter, system-ui' }}>

      {/* Top masthead */}
      <div style={{
        background: '#0f0f0f', padding: '14px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid #1e1e1e'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span className="font-playfair" style={{ color: '#fff', fontSize: 15, fontWeight: 600, letterSpacing: '0.02em' }}>
            BLUEBAY <span style={{ color: '#c8a96e' }}>HOTELS</span>
          </span>
          <div style={{ width: 1, height: 16, background: '#333' }} />
          <span style={{ color: '#555', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>UX / UI Audit & Wireframes — March 2026</span>
        </div>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: '#555', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.18em' }}>Overall Score</div>
            <div style={{ color: '#dc2626', fontSize: 18, fontWeight: 800, lineHeight: 1.2, fontFamily: 'Playfair Display, serif' }}>42<span style={{ fontSize: 11, color: '#444', fontWeight: 400 }}>/100</span></div>
          </div>
          <div style={{ width: 1, height: 28, background: '#222' }} />
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: '#555', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.18em' }}>Issues</div>
            <div style={{ color: '#c8a96e', fontSize: 18, fontWeight: 800, lineHeight: 1.2, fontFamily: 'Playfair Display, serif' }}>12</div>
          </div>
        </div>
      </div>

      {/* Tab bar */}
      <div style={{
        background: '#fff', borderBottom: '1px solid #e8e8e8',
        padding: '0 32px', display: 'flex', alignItems: 'center', gap: 0,
        overflowX: 'auto', position: 'sticky', top: 0, zIndex: 100,
      }}>
        {TABS.map(t => {
          const Icon = t.Icon;
          const isActive = tab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 7,
                padding: '16px 20px', border: 'none', background: 'transparent',
                fontSize: 11, fontWeight: isActive ? 700 : 400,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                cursor: 'pointer',
                color: isActive ? '#0f0f0f' : '#999', whiteSpace: 'nowrap',
                borderBottom: isActive ? '2px solid #0f0f0f' : '2px solid transparent',
                marginBottom: -1, transition: 'all 0.18s'
              }}
            >
              <Icon size={13} strokeWidth={isActive ? 2.5 : 1.5} />
              {t.label}
              {t.id === 'audit' && (
                <span style={{
                  background: '#dc2626', color: '#fff', fontSize: 9, fontWeight: 800,
                  padding: '2px 6px', marginLeft: 2, letterSpacing: '0.06em'
                }}>12</span>
              )}
              {(t.id === 'dining' || t.id === 'spa') && (
                <span style={{
                  background: '#0f0f0f', color: '#fff', fontSize: 9, fontWeight: 800,
                  padding: '2px 6px', marginLeft: 2, letterSpacing: '0.06em'
                }}>NEW</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Context bar */}
      <div style={{
        background: '#fafaf8', borderBottom: '1px solid #e8e8e8',
        padding: '8px 32px', display: 'flex', alignItems: 'center', gap: 10
      }}>
        <activeTab.Icon size={12} color="#aaa" strokeWidth={1.5} />
        <span style={{ fontSize: 11, color: '#aaa', letterSpacing: '0.06em' }}>
          {activeTab.id === 'audit'
            ? 'UX/UI Audit Report — 12 issues, scored across 8 categories with fix recommendations'
            : `Wireframe — Proposed ${activeTab.label} redesign for improved UX and direct booking conversion`}
        </span>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {tab === 'audit'   && <AuditReport />}
          {tab === 'home'    && <HomepageWireframe />}
          {tab === 'rooms'   && <RoomsWireframe />}
          {tab === 'dining'  && <DiningWireframe />}
          {tab === 'spa'     && <SpaWireframe />}
          {tab === 'booking' && <BookingWireframe />}
        </motion.div>
      </AnimatePresence>

    </div>
  );
}
