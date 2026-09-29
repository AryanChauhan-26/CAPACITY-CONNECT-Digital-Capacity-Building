import React from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  Wifi,
  Lock,
  Users,
  Server,
  Globe,
  AlertTriangle
} from 'lucide-react';

export const RisksPage = () => {
  const riskMatrix = [
    {
      risk: 'Low Bandwidth & Remote Observatory Latency',
      severity: 'High Impact / High Likelihood',
      threat: 'Island (Port Blair/Minicoy) and high-altitude (Leh/Kargil) observatories operate over unstable 2G/VSAT lines, causing video streaming buffer freezes.',
      mitigation: 'Low-Bandwidth Mode toggle activates compressed text transcripts and lightweight SVG assets. Built-in PWA Service Worker (sw.js) caches technical SOP manuals locally in IndexedDB for 100% offline study.',
      status: 'Mitigated via PWA & 2G Mode'
    },
    {
      risk: 'Security, Data Sovereignty & CERT-In Compliance',
      severity: 'Critical Impact / Low Likelihood',
      threat: 'Unauthorized access, credential tampering, or exfiltration of sensitive meteorological infrastructure data.',
      mitigation: 'Granular 3-tier Role-Based Access Control (RBAC), stateful JWT tokens, rate-limited endpoints, input sanitization against XSS/SQLi, and an immutable security audit trail capturing IP addresses, timestamps, and actor events.',
      status: 'Enforced via RBAC & Audit Trails'
    },
    {
      risk: 'Trainee Engagement & Bureaucratic Fatigue',
      severity: 'Medium Impact / Medium Likelihood',
      threat: 'Busy field meteorologists treating capacity courses as burdensome bureaucratic paperwork rather than career growth.',
      mitigation: 'Interactive gamification with milestone badges, transparent Competency Matrices, verifiable digital certificates with SHA-256 signatures, and direct integration into annual MoES appraisal readiness metrics.',
      status: 'Incentivized via Badges & Certs'
    },
    {
      risk: 'Peak Assessment Concurrency Load',
      severity: 'High Impact / Medium Likelihood',
      threat: 'Over 2,000 personnel taking timed assessments simultaneously during nationwide pre-cyclone mandatory evaluation windows.',
      mitigation: 'Decoupled client-side assessment evaluation engine with client-side countdown timer and Redis-style session caching, reducing server roundtrips to a single encrypted submission payload.',
      status: 'Architected for 5,000+ Concurrent Tests'
    },
    {
      risk: 'Multi-Lingual & Accessibility Barriers',
      severity: 'Medium Impact / Low Likelihood',
      threat: 'Non-English primary technicians struggling with technical terminologies or visual impairment limitations.',
      mitigation: 'Full WCAG 2.1 AA compliance, dynamic font-size scaling (A- / A / A+), high-contrast palettes, screen-reader semantic HTML tags, and bilingual English/Hindi interface switching.',
      status: 'WCAG AA & Bilingual Active'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#081426] via-[#1e1b4b] to-[#881337] text-white p-8 sm:p-10 rounded-3xl border border-rose-800 shadow-2xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold uppercase tracking-wider border border-rose-500/30">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Governance & Risk Engineering</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black font-['Outfit']">
          Risks & Mitigation Matrix
        </h1>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-3xl">
          Comprehensive identification of technological, security, human, and infrastructure risks, paired with proven architectural countermeasures.
        </p>
      </div>

      {/* Risk Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="text-[11px] uppercase bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-4 px-4 w-1/5">Risk Category</th>
                <th className="py-4 px-3 w-1/6 text-center">Threat Level</th>
                <th className="py-4 px-4 w-1/3">Identified Vulnerability</th>
                <th className="py-4 px-4 w-1/3 text-emerald-900 bg-emerald-50/60 font-bold">
                  Implemented Mitigation Strategy
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs">
              {riskMatrix.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition">
                  <td className="py-4 px-4 font-bold text-slate-900 align-top">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{item.risk}</span>
                    </div>
                  </td>
                  <td className="py-4 px-3 text-center align-top">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                      {item.severity}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-600 leading-relaxed align-top">
                    {item.threat}
                  </td>
                  <td className="py-4 px-4 bg-emerald-50/20 text-slate-800 leading-relaxed align-top">
                    <div className="space-y-1.5">
                      <p>{item.mitigation}</p>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        {item.status}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
