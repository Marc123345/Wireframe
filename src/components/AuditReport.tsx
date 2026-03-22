import { motion } from 'motion/react';
import {
  AlertTriangle, XCircle, AlertCircle, CheckCircle,
  TrendingDown, Navigation, MousePointer, Star,
  Smartphone, Zap, Eye, ShoppingCart, Globe, Users
} from 'lucide-react';

const SCORE_ITEMS = [
  { label: 'Navigation & IA',       score: 42, color: '#dc2626' },
  { label: 'Visual Hierarchy',      score: 55, color: '#ea580c' },
  { label: 'Conversion Paths',      score: 30, color: '#dc2626' },
  { label: 'Trust & Social Proof',  score: 35, color: '#dc2626' },
  { label: 'Mobile Experience',     score: 50, color: '#ea580c' },
  { label: 'Content Strategy',      score: 45, color: '#ea580c' },
  { label: 'Booking Flow',          score: 28, color: '#dc2626' },
  { label: 'Brand Positioning',     score: 52, color: '#ea580c' },
];

const OVERALL = Math.round(SCORE_ITEMS.reduce((s, i) => s + i.score, 0) / SCORE_ITEMS.length);

type Severity = 'critical' | 'high' | 'medium' | 'low';

const ISSUES: {
  id: string;
  severity: Severity;
  category: string;
  title: string;
  description: string;
  impact: string;
  fix: string;
  icon: React.ElementType;
}[] = [
  {
    id: 'C1',
    severity: 'critical',
    category: 'Conversion',
    title: 'No Persistent "Book Direct" CTA',
    description: 'There is no sticky booking bar or persistent call-to-action button anywhere on the site. Users who want to book must scroll back to find a button — or worse, leave to Booking.com or TripAdvisor.',
    impact: 'Direct bookings are the highest-margin revenue source. Losing users to OTAs costs the hotel 15–25% in commissions per booking.',
    fix: 'Add a sticky header with a date-picker widget + "Check Availability" CTA on every page. Include a "Book Direct — Best Rate Guaranteed" badge.',
    icon: ShoppingCart,
  },
  {
    id: 'C2',
    severity: 'critical',
    category: 'Conversion',
    title: 'No Pricing Transparency',
    description: 'Room rates are completely absent from the website. Visitors have no anchor price before hitting the booking engine. This forces them to compare on OTAs, where competitors are listed side-by-side.',
    impact: 'Users without a price anchor are far more likely to shop around. Showing "from $X per night" significantly improves booking intent.',
    fix: 'Display "from" nightly rates on room cards. Show a "Best Rate Guarantee" badge to discourage OTA comparison.',
    icon: TrendingDown,
  },
  {
    id: 'C3',
    severity: 'critical',
    category: 'Booking Flow',
    title: 'Ambiguous Booking Journey',
    description: 'The website covers two properties (Bluebay Beach Resort & Sultan Sands) but the path from "I want to book" to a confirmed reservation is unclear. There is no property selector, no rate comparison, and no funnel guidance.',
    impact: 'Decision paralysis — users who cannot easily compare properties or initiate a booking drop off entirely.',
    fix: 'Create a property-selector landing for the booking flow. Show both properties side-by-side with key differentiators. Then route into a single booking engine.',
    icon: ShoppingCart,
  },
  {
    id: 'H1',
    severity: 'high',
    category: 'Navigation',
    title: 'Confusing Information Architecture',
    description: 'The nav has /bluebay and /sultan as top-level pages, but shared features like /rooms and /experiences are not attributed to either property. There is no Dining page, no Spa page, and no Offers/Packages page.',
    impact: 'Users researching specific amenities (spa, restaurants) cannot find dedicated information — they give up or call the hotel.',
    fix: 'Restructure IA: Home → [Bluebay Resort | Sultan Sands] → Rooms → Dining → Spa & Wellness → Experiences → Offers → Book. Add mega-menu or clear dropdown per property.',
    icon: Navigation,
  },
  {
    id: 'H2',
    severity: 'high',
    category: 'Trust',
    title: 'Social Proof Buried or Missing',
    description: 'The hotel has a Booking.com score of 9.0/10 and 1,816 TripAdvisor reviews averaging 4/5 — exceptional proof points. None of these are visible on the homepage or room pages.',
    impact: 'Trust signals are the #1 factor in hotel booking decisions. Guests are 3× more likely to book when they see real reviews in context.',
    fix: 'Add a review carousel with star ratings, guest quotes, and source badges (TripAdvisor, Booking.com) directly on the homepage. Place review snippets on individual room pages.',
    icon: Star,
  },
  {
    id: 'H3',
    severity: 'high',
    category: 'Content',
    title: 'No Dedicated Dining or Spa Pages',
    description: 'The resort has 4 distinct dining venues (Makuti, Bahari Grill, Trattoria, The Wok) and an Oasis Spa. Neither has a dedicated page. Dining experiences and spa treatments are arguably the second biggest revenue drivers after rooms.',
    impact: 'Guests cannot discover, plan, or pre-book F&B or spa experiences. Significant upsell revenue is lost.',
    fix: 'Create /dining with all 4 venues, menus, photos, and reservation CTAs. Create /spa with treatment menu, pricing, and a booking form.',
    icon: Eye,
  },
  {
    id: 'H4',
    severity: 'high',
    category: 'Brand',
    title: 'Wix Platform Undercuts 5-Star Positioning',
    description: 'The site is built on Wix, a platform associated with small businesses and DIY websites. The generic Wix UI patterns, slow page loads, and limited typographic control conflict with positioning as a luxury 5-star resort.',
    impact: 'First impressions matter. A guest researching a high-end stay subconsciously judges the resort by the quality of its digital presence.',
    fix: 'Migrate to a custom-coded site (Next.js/Astro) or a premium hospitality CMS (Sojern, Revinate, or custom). Prioritise LCP < 2.5s and visually opulent typography.',
    icon: Globe,
  },
  {
    id: 'M1',
    severity: 'medium',
    category: 'UX',
    title: 'No Property Comparison Feature',
    description: 'Guests choosing between Bluebay Beach Resort and Sultan Sands have no comparison tool. They must visit two separate pages and manually note differences in room types, amenities, and rates.',
    impact: 'Comparison friction causes drop-off. Guests leave to OTAs where both properties appear side-by-side anyway.',
    fix: 'Add a side-by-side comparison module on the homepage and a dedicated "Compare Our Resorts" page.',
    icon: Users,
  },
  {
    id: 'M2',
    severity: 'medium',
    category: 'Mobile',
    title: 'No Mobile-First Booking Experience',
    description: '60%+ of hotel website traffic is mobile. The current Wix site is responsive but not optimised — the booking flow, room browsing, and CTAs are not designed for thumb-first interaction.',
    impact: 'Mobile conversion rates for hotels average 3–4% vs 7–9% desktop. A purpose-built mobile experience closes this gap.',
    fix: 'Design a mobile-first booking bar with large tap targets. Ensure room cards stack cleanly. Add a floating "Book Now" FAB on mobile.',
    icon: Smartphone,
  },
  {
    id: 'M3',
    severity: 'medium',
    category: 'Performance',
    title: 'Slow Page Load (Wix JS Overhead)',
    description: 'Wix loads multiple large JavaScript bundles on every page, delaying time-to-interactive. For a luxury hotel, a slow first load signals a poor guest experience before they have even seen a room photo.',
    impact: 'A 1-second delay in page load reduces conversions by 7%. Google PageSpeed for Wix sites typically scores 40–60 on mobile.',
    fix: 'Audit and optimise images (WebP, lazy-load). Long-term: migrate away from Wix to a platform with proper build optimisation.',
    icon: Zap,
  },
  {
    id: 'M4',
    severity: 'medium',
    category: 'Conversion',
    title: 'No Offers or Packages Page',
    description: 'There is no visible "Special Offers", "Honeymoon Packages", or "All-Inclusive Deals" page. These are high-conversion entry points, especially for guests searching for Zanzibar honeymoon deals.',
    impact: 'Package pages typically have 2–3× higher conversion than standard room pages because they bundle value and reduce perceived price.',
    fix: 'Create /offers featuring: Honeymoon Package, All-Inclusive Getaway, Dive & Stay, Spa Retreat. Each with a clear CTA and scarcity signal.',
    icon: MousePointer,
  },
  {
    id: 'L1',
    severity: 'low',
    category: 'Content',
    title: 'FAQ Page as Main Help Resource',
    description: 'Having /faq as a top-level navigation item suggests content is thin elsewhere. FAQs should be contextual (on the relevant page) not a separate destination.',
    impact: 'Low — but signals to Google and users that content depth is lacking.',
    fix: 'Distribute FAQ content to relevant pages. Add accordion FAQs at the bottom of /rooms, /experiences, and the booking page.',
    icon: AlertCircle,
  },
];

const SEV_CONFIG: Record<Severity, { label: string; color: string; bg: string; Icon: React.ElementType }> = {
  critical: { label: 'Critical',  color: '#dc2626', bg: '#fef2f2', Icon: XCircle       },
  high:     { label: 'High',      color: '#ea580c', bg: '#fff7ed', Icon: AlertTriangle  },
  medium:   { label: 'Medium',    color: '#d97706', bg: '#fffbeb', Icon: AlertCircle    },
  low:      { label: 'Low',       color: '#16a34a', bg: '#f0fdf4', Icon: CheckCircle    },
};

function ScoreBar({ score, color }: { score: number; color: string }) {
  return (
    <div className="w-full h-2 rounded-full" style={{ background: '#e5e7eb' }}>
      <motion.div
        className="h-2 rounded-full"
        style={{ background: color }}
        initial={{ width: 0 }}
        whileInView={{ width: `${score}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export function AuditReport() {
  const counts = {
    critical: ISSUES.filter(i => i.severity === 'critical').length,
    high:     ISSUES.filter(i => i.severity === 'high').length,
    medium:   ISSUES.filter(i => i.severity === 'medium').length,
    low:      ISSUES.filter(i => i.severity === 'low').length,
  };

  return (
    <div style={{ background: '#f8fafc' }}>

      {/* ── HERO ── */}
      <div style={{ background: 'var(--bb-ocean)', padding: '56px 0 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <div style={{ height: 2, width: 32, background: 'var(--bb-sand)' }} />
            <span style={{ color: 'var(--bb-sand)', fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase', fontFamily: 'Inter' }}>
              UX / UI Audit — March 2026
            </span>
          </div>
          <h1 className="font-playfair" style={{ color: '#fff', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 600, margin: '0 0 16px', lineHeight: 1.15 }}>
            Bluebay Hotels Zanzibar<br />
            <span style={{ color: 'var(--bb-sand)' }}>Website Audit Report</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 16, maxWidth: 620, margin: 0, lineHeight: 1.7 }}>
            A full UX/UI, conversion, and content analysis of bluebayhotelszanzibar.com — covering both the Bluebay Beach Resort & Spa and Sultan Sands Island Resort & Spa.
          </p>

          {/* Severity summary pills */}
          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            {(['critical','high','medium','low'] as Severity[]).map(sev => {
              const cfg = SEV_CONFIG[sev];
              const count = counts[sev];
              return (
                <div key={sev} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: 'rgba(255,255,255,0.1)', borderRadius: 6,
                  padding: '8px 16px', border: '1px solid rgba(255,255,255,0.15)'
                }}>
                  <cfg.Icon size={15} color={cfg.color} />
                  <span style={{ color: '#fff', fontSize: 13, fontWeight: 600 }}>{count}</span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>{cfg.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── SCORES ── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 32px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 24 }}>

          {/* Overall score */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: '#fff', borderRadius: 12, padding: '32px',
              border: '1px solid #e5e7eb', textAlign: 'center',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
            }}
          >
            <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6b7280', marginBottom: 12 }}>Overall Score</div>
            <div style={{ fontSize: 80, fontWeight: 700, color: '#dc2626', lineHeight: 1, fontFamily: 'Inter' }}>{OVERALL}</div>
            <div style={{ fontSize: 14, color: '#6b7280', marginTop: 4 }}>out of 100</div>
            <div style={{ marginTop: 20, padding: '8px 18px', background: '#fef2f2', borderRadius: 20, fontSize: 12, color: '#dc2626', fontWeight: 600 }}>
              Needs Significant Improvement
            </div>
          </motion.div>

          {/* Score breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ background: '#fff', borderRadius: 12, padding: '32px', border: '1px solid #e5e7eb' }}
          >
            <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6b7280', marginBottom: 20 }}>Score Breakdown</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {SCORE_ITEMS.map(item => (
                <div key={item.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                    <span style={{ fontSize: 13, color: '#374151', fontWeight: 500 }}>{item.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: item.color }}>{item.score}</span>
                  </div>
                  <ScoreBar score={item.score} color={item.color} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── ISSUES ── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 32px 64px' }}>
        <div style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, color: '#111', margin: '0 0 6px' }}>Issues Found</h2>
          <p style={{ color: '#6b7280', fontSize: 14 }}>12 issues identified across navigation, conversion, content, and performance.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {ISSUES.map((issue, i) => {
            const cfg = SEV_CONFIG[issue.severity];
            const SevIcon = cfg.Icon;
            const IssueIcon = issue.icon;
            return (
              <motion.div
                key={issue.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                style={{
                  background: '#fff', borderRadius: 12,
                  border: `1px solid #e5e7eb`,
                  borderLeft: `4px solid ${cfg.color}`,
                  padding: '24px 28px',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>

                  {/* Icon */}
                  <div style={{
                    width: 40, height: 40, borderRadius: 8, flexShrink: 0,
                    background: cfg.bg, display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <IssueIcon size={18} color={cfg.color} />
                  </div>

                  <div style={{ flex: 1 }}>
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 8 }}>
                      <span style={{
                        fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
                        textTransform: 'uppercase', color: cfg.color,
                        background: cfg.bg, padding: '3px 8px', borderRadius: 4,
                        display: 'flex', alignItems: 'center', gap: 5
                      }}>
                        <SevIcon size={11} />
                        {cfg.label}
                      </span>
                      <span style={{ fontSize: 11, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{issue.category}</span>
                      <span style={{ fontSize: 11, color: '#d1d5db', marginLeft: 'auto' }}>{issue.id}</span>
                    </div>

                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111', margin: '0 0 8px' }}>{issue.title}</h3>
                    <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.7, marginBottom: 14 }}>{issue.description}</p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                      <div style={{ background: '#fef9f0', borderRadius: 8, padding: '12px 14px', border: '1px solid #fde68a' }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: '#92400e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Impact</div>
                        <p style={{ fontSize: 13, color: '#78350f', lineHeight: 1.6 }}>{issue.impact}</p>
                      </div>
                      <div style={{ background: '#f0fdf4', borderRadius: 8, padding: '12px 14px', border: '1px solid #bbf7d0' }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: '#14532d', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Recommendation</div>
                        <p style={{ fontSize: 13, color: '#15803d', lineHeight: 1.6 }}>{issue.fix}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
