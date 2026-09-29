import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, PhoneCall, Globe, ExternalLink, Award, Sparkles, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#081426] text-slate-300 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          
          {/* Col 1: Govt Affiliation */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-500/20 p-1 flex items-center justify-center border border-sky-400/40">
                <img src="/imd-logo.svg" alt="IMD Logo" className="w-8 h-8 object-contain" />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-white font-['Outfit']">
                  CAPACITY <span className="text-sky-400">CONNECT</span>
                </span>
                <p className="text-[11px] text-slate-400">
                  A Digital Capacity Building & LMS Portal
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Developed for the Ministry of Earth Sciences (MoES) and India Meteorological Department (IMD).
              Unifying competency assessment, standardized training delivery, and certified readiness tracking
              across all 6 Regional Meteorological Centres (RMCs) and 100+ observatories nationwide.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
              <span className="px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                SIH 2026 Problem ID: 26075
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                Theme: Smart Education
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                Mission Mausam Aligned
              </span>
            </div>
          </div>

          {/* Col 2: Training & Competency */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3.5 flex items-center gap-1.5">
              <span>LMS Modules</span>
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="/courses" className="hover:text-sky-400 transition">Course Catalog</Link>
              </li>
              <li>
                <Link to="/trainee" className="hover:text-sky-400 transition">Trainee Learning Space</Link>
              </li>
              <li>
                <Link to="/trainee/profile" className="hover:text-sky-400 transition">Skill Profile & Gap View</Link>
              </li>
              <li>
                <Link to="/trainer" className="hover:text-sky-400 transition">Trainer Evaluation Suite</Link>
              </li>
              <li>
                <Link to="/verify-certificate" className="hover:text-sky-400 transition">Verifiable Certificate Registry</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Differentiators */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3.5 flex items-center gap-1.5">
              <span>Differentiators</span>
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="/competency-mapping" className="hover:text-amber-300 transition flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Smart Trainer Match</span>
                </Link>
              </li>
              <li>
                <Link to="/skill-matrix" className="hover:text-teal-300 transition flex items-center gap-1">
                  <span>Executive Skill Matrix</span>
                </Link>
              </li>
              <li>
                <Link to="/architecture" className="hover:text-sky-400 transition">Low-Bandwidth 2G Architecture</Link>
              </li>
              <li>
                <Link to="/verify-certificate" className="hover:text-emerald-400 transition">SHA-256 Tamper-Proof Check</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Hackathon Dossier & Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3.5">Dossier & Helplines</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="/about" className="hover:text-sky-400 transition">About the Solution</Link>
              </li>
              <li>
                <Link to="/architecture" className="hover:text-sky-400 transition">System Architecture</Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-sky-400 transition">Impact & Benefits</Link>
              </li>
              <li>
                <Link to="/risks" className="hover:text-sky-400 transition">Risks & Mitigation Matrix</Link>
              </li>
              <li className="pt-2 text-slate-400 flex items-center gap-1.5 text-[11px]">
                <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
                <span>IMD Helpline: 1800-180-1717</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span>© 2026 Ministry of Earth Sciences (MoES) / India Meteorological Department (IMD).</span>
            <span className="hidden md:inline">All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="hover:text-white cursor-pointer">WCAG 2.1 AA Compliant</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">CERT-In Aligned</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">PWA Offline Enabled</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
