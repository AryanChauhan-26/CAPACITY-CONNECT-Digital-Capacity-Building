import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, PhoneCall, Globe, ExternalLink, Award } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#0c2340] text-slate-300 text-xs border-t border-slate-700/80">
      
      {/* Upper Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Government Affiliation */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <img src="/emblem-india.svg" alt="India Emblem" className="h-10 w-auto brightness-200" />
              <div>
                <div className="font-bold text-white uppercase text-xs tracking-wider">
                  Government of India
                </div>
                <div className="text-[11px] text-slate-300">
                  Ministry of Earth Sciences (MoES)
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              CAPACITY CONNECT is the official national digital capacity building portal for the India Meteorological Department (IMD), empowering personnel across 120+ observatories nationwide.
            </p>
            <div className="text-[11px] text-sky-300 font-medium">
              National Digital Training Framework · Problem 26075
            </div>
          </div>

          {/* Col 2: Useful Links */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider border-b border-slate-700/80 pb-1.5">
              LMS Modules
            </h4>
            <ul className="space-y-1.5 text-slate-300 text-xs">
              <li>
                <Link to="/courses" className="hover:text-white transition">Course Catalog</Link>
              </li>
              <li>
                <Link to="/trainee" className="hover:text-white transition">Trainee Learning Space</Link>
              </li>
              <li>
                <Link to="/trainer" className="hover:text-white transition">Trainer Console</Link>
              </li>
              <li>
                <Link to="/verify-certificate" className="hover:text-white transition">Verify Certificate</Link>
              </li>
              <li>
                <Link to="/trainee/profile" className="hover:text-white transition">Competency Profile</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Differentiators & Hackathon Dossier */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider border-b border-slate-700/80 pb-1.5">
              System Innovations
            </h4>
            <ul className="space-y-1.5 text-slate-300 text-xs">
              <li>
                <Link to="/competency-mapping" className="hover:text-white transition">Smart Competency AI</Link>
              </li>
              <li>
                <Link to="/skill-matrix" className="hover:text-white transition">Skill Matrix & Readiness Index</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">Solution Architecture Dossier</Link>
              </li>
              <li>
                <Link to="/architecture" className="hover:text-white transition">System Architecture</Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-white transition">Fiscal Savings & Impact</Link>
              </li>
              <li>
                <Link to="/risks" className="hover:text-white transition">Risk Mitigation Matrix</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Helpdesk & National Portals */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider border-b border-slate-700/80 pb-1.5">
              Contact & Support
            </h4>
            <div className="space-y-1.5 text-slate-300 text-xs">
              <div>India Meteorological Department HQ</div>
              <div className="text-slate-400">Mausam Bhawan, Lodhi Road, New Delhi - 110003</div>
              <div className="pt-1 text-slate-300 flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
                <span>Weather Helpline: 1800-180-1717</span>
              </div>
              <div className="pt-2">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-950/60 text-emerald-300 text-[10px] font-mono border border-emerald-800/80">
                  GIGW & WCAG 2.1 AA Compliant
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Mandatory Govt Disclaimers */}
      <div className="bg-[#08172b] py-3.5 border-t border-slate-800 text-[11px] text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            Website content managed by <strong>Ministry of Earth Sciences (MoES)</strong>, Government of India.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300 text-[11px]">
            <span className="hover:text-white cursor-pointer transition">Terms & Conditions</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer transition">Hyperlink Policy</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer transition">Security Policy</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
