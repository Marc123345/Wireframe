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
        background: '#111', padding: '14px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ color: '#fff', fontSize: 15, fontWeight: 700 }}>Bluebay Hotels Zanzibar</span>
            <span style={{ color: '#6b7280', fontSize: 13 }}>·</span>
            <span style={{ color: '#6b7280', fontSize: 13 }}>UX/UI Audit & Wireframes</span>
          </div>
          <div style={{ color: '#4b5563', fontSize: 11, marginTop: 2 }}>March 2026 · bluebayhotelszanzibar.com</div>
        </div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: '#9ca3af', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Overall Score</div>
            <div style={{ color: '#dc2626', fontSize: 20, fontWeight: 800, lineHeight: 1 }}>42<span style={{ fontSize: 12, color: '#4b5563', fontWeight: 400 }}>/100</span></div>
          </div>
          <div style={{ width: 1, height: 36, background: '#2a2a2a' }} />
          <div style={{ textAlign: 'right' }}>
            <div style={{ color: '#9ca3af', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Issues Found</div>
            <div style={{ color: '#f59e0b', fontSize: 20, fontWeight: 800, lineHeight: 1 }}>12</div>
          </div>
        </div>
      </div>

      {/* Tab bar */}
      <div style={{
        background: '#fff', borderBottom: '1px solid #e5e7eb',
        padding: '0 32px', display: 'flex', alignItems: 'center', gap: 2,
        overflowX: 'auto', position: 'sticky', top: 0, zIndex: 100,
        boxShadow: '0 1px 8px rgba(0,0,0,0.06)'
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
                padding: '14px 20px', border: 'none', background: 'transparent',
                fontSize: 13, fontWeight: isActive ? 700 : 400, cursor: 'pointer',
                color: isActive ? t.color : '#6b7280', whiteSpace: 'nowrap',
                borderBottom: isActive ? `3px solid ${t.color}` : '3px solid transparent',
                marginBottom: -1, transition: 'all 0.18s'
              }}
            >
              <Icon size={15} />
              {t.label}
              {t.id === 'audit' && (
                <span style={{
                  background: '#dc2626', color: '#fff', fontSize: 10, fontWeight: 700,
                  padding: '1px 6px', borderRadius: 10, marginLeft: 2
                }}>12</span>
              )}
              {(t.id === 'dining' || t.id === 'spa') && (
                <span style={{
                  background: '#0d7a5f', color: '#fff', fontSize: 10, fontWeight: 700,
                  padding: '1px 6px', borderRadius: 10, marginLeft: 2
                }}>NEW</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Context bar */}
      <div style={{
        background: activeTab.id === 'audit' ? '#fef2f2' : '#f0f8ff',
        borderBottom: `2px solid ${activeTab.color}20`,
        padding: '10px 32px', display: 'flex', alignItems: 'center', gap: 10
      }}>
        <activeTab.Icon size={14} color={activeTab.color} />
        <span style={{ fontSize: 12, color: activeTab.color, fontWeight: 600 }}>
          {activeTab.id === 'audit'
            ? 'UX/UI Audit Report — Issues, scores, and recommendations for bluebayhotelszanzibar.com'
            : `Wireframe: Proposed ${activeTab.label} — Redesign recommendation with improved UX and conversion`}
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
