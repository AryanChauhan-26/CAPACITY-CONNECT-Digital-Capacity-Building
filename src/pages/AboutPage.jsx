import React from 'react';
import { Link } from 'react-router-dom';
import {
  Info,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Users,
  Briefcase,
  Award,
  Sparkles,
  ArrowRight,
  MapPin,
  Clock,
  Layers
} from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#081426] via-[#0b1e36] to-[#0d3880] text-white p-8 sm:p-10 rounded-3xl border border-slate-700 shadow-2xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold uppercase tracking-wider border border-sky-400/30">
          <Info className="w-3.5 h-3.5" />
          <span>SIH 2026 Problem Statement ID: 26075</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black font-['Outfit']">
          CAPACITY CONNECT: A Digital Capacity Building & LMS Portal
        </h1>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-3xl">
          Designed for the Ministry of Earth Sciences (MoES) and India Meteorological Department (IMD) under the Smart Education theme. A secure, cloud-native Learning Management System that replaces fragmented offline training and manual record-keeping with a unified digital ecosystem.
        </p>
      </div>

      {/* The Ground Reality & Legacy Challenges */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded">
            Context & Background
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit'] mt-2">
            The Ground Reality of India's Meteorological Workforce
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
            The India Meteorological Department (IMD) operates a mission-critical infrastructure comprising 6 Regional Meteorological Centres (RMCs) and over 120 field observatories scattered from high-altitude Himalayan summits (Leh, Kargil) to remote island stations (Port Blair, Minicoy).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="p-5 bg-rose-50/50 border border-rose-200 rounded-2xl space-y-2">
            <div className="font-bold text-rose-900 text-sm flex items-center gap-1.5">
              <XCircle className="w-4 h-4 text-rose-600" />
              <span>Fragmented Manual Records</span>
            </div>
            <p className="text-rose-800 leading-relaxed">
              Previously, capacity tracking relied on manual paper service registers and uncoordinated zonal training workshops. Tracking nationwide certification compliance was slow and error-prone.
            </p>
          </div>

          <div className="p-5 bg-rose-50/50 border border-rose-200 rounded-2xl space-y-2">
            <div className="font-bold text-rose-900 text-sm flex items-center gap-1.5">
              <XCircle className="w-4 h-4 text-rose-600" />
              <span>Excessive Physical TA/DA Costs</span>
            </div>
            <p className="text-rose-800 leading-relaxed">
              Flying officers from remote mountain and coastal stations to New Delhi or Pune for standard refresher training cost the public exchequer over ₹14 Crores annually in travel allowances.
            </p>
          </div>

          <div className="p-5 bg-rose-50/50 border border-rose-200 rounded-2xl space-y-2">
            <div className="font-bold text-rose-900 text-sm flex items-center gap-1.5">
              <XCircle className="w-4 h-4 text-rose-600" />
              <span>Network Latency in Remote Stations</span>
            </div>
            <p className="text-rose-800 leading-relaxed">
              Island and high-altitude stations frequently operate on 2G/VSAT channels. Heavy commercial video platforms buffer endlessly, isolating remote meteorologists from new technical advances.
            </p>
          </div>
        </div>
      </div>

      {/* 3-Tier Role Architecture */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-bold text-teal-600 uppercase tracking-wider bg-teal-50 px-2.5 py-1 rounded">
            Role-Based Access Control (RBAC)
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit'] mt-2">
            3-Tier Governance & User Architecture
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Carefully structured to meet Government of India security protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-sky-200 bg-sky-50/30 space-y-3 text-xs">
            <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold text-base shadow">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-base">Trainee / Forecaster</h3>
            <p className="text-slate-600 leading-relaxed">
              Meteorologists, Scientific Assistants, and Radar Engineers at observatories. Access curriculum, offline PWA manuals, timed assessments, dynamic skill profiles, and verifiable certificates.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-teal-200 bg-teal-50/30 space-y-3 text-xs">
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-base shadow">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-base">Trainer / Senior Scientist</h3>
            <p className="text-slate-600 leading-relaxed">
              Distinguished Scientists and Division Leads. Upload technical documentation, build MCQ evaluations with scientific rationales, monitor trainee pass rates, and mentor matched cohorts.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-purple-200 bg-purple-50/30 space-y-3 text-xs">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center font-bold text-base shadow">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-base">MoES / IMD Administrator</h3>
            <p className="text-slate-600 leading-relaxed">
              Directorate of National Capacity Building. Oversee registration approvals, national readiness index, emergency drill triggers, broadcast directives, and audit log compliance.
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Table: Before vs After */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded">
            Digital Transformation Impact
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Outfit'] mt-2">
            Before vs. After Capacity Connect
          </h2>
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-2xl">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="text-[11px] uppercase bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4 w-1/4">Feature / Dimension</th>
                <th className="py-3 px-4 w-3/8 text-rose-800 bg-rose-50/60">Legacy IMD Manual Workflow</th>
                <th className="py-3 px-4 w-3/8 text-emerald-800 bg-emerald-50/60 font-bold">With CAPACITY CONNECT Portal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs">
              {[
                {
                  dim: 'Competency Tracking',
                  before: 'Paper registers and physical training attendance sheets.',
                  after: 'Real-time Automated Skill Matrix & National Readiness Index across 120 observatories.'
                },
                {
                  dim: 'Trainer Assignment',
                  before: 'Ad-hoc manual phone calls and administrative delays.',
                  after: 'AI-driven Smart Competency Mapping Engine matching 4 multi-variable criteria.'
                },
                {
                  dim: 'Low-Bandwidth Support',
                  before: 'No offline support; streaming failed on 2G/VSAT remote mountain stations.',
                  after: 'Full PWA caching, compressed text transcripts, and adaptive bitrate mode.'
                },
                {
                  dim: 'Certification Trust',
                  before: 'Unverified paper certificates prone to loss or misplacement.',
                  after: 'Cryptographically sealed SHA-256 verifiable credentials with instant QR lookup.'
                },
                {
                  dim: 'Emergency Drills',
                  before: 'Weeks of logistical preparation to schedule physical drills.',
                  after: '1-click deployment of simulated Cyclone or SW Monsoon readiness audits.'
                }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition">
                  <td className="py-3 px-4 font-bold text-slate-900">{row.dim}</td>
                  <td className="py-3 px-4 text-rose-900 bg-rose-50/20">{row.before}</td>
                  <td className="py-3 px-4 text-emerald-950 bg-emerald-50/20 font-medium">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
