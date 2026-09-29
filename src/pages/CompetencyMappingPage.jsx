import React from 'react';
import { SmartCompetencyMapper } from '../components/differentiators/SmartCompetencyMapper';
import { Sparkles, Brain, ShieldCheck, Zap, Users, Award } from 'lucide-react';

export const CompetencyMappingPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Narrative Intro */}
      <div className="bg-gradient-to-r from-[#081426] via-[#0b1e36] to-[#0d3880] text-white p-8 rounded-3xl border border-slate-700 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider border border-amber-400/30">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Core Differentiator: Intelligent Human Capital Optimization</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black font-['Outfit']">
          Smart Competency Mapping & Trainer Allocation Engine
        </h1>
        <p className="text-xs sm:text-sm text-slate-200 max-w-3xl leading-relaxed">
          In high-stakes atmospheric sciences, generic courses cannot replace domain-specific mentorship. Our proprietary algorithm parses scientific employee profiles—weighing radar telemetry years, peer-reviewed WMO/IMD publications, prior trainee ratings, and geographic station proximity—to autonomously match critical operational topics with premier national scientists.
        </p>

        {/* Algorithm Formulation Cards */}
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <span className="font-bold text-sky-300 block mb-0.5">30% Operational Years</span>
            <span className="text-[11px] text-slate-300">Hands-on DWR/AWS observatory service</span>
          </div>
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <span className="font-bold text-teal-300 block mb-0.5">25% Peer Publications</span>
            <span className="text-[11px] text-slate-300">Published research citations in meteorology</span>
          </div>
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <span className="font-bold text-amber-300 block mb-0.5">25% Trainee Ratings</span>
            <span className="text-[11px] text-slate-300">Verified evaluation scores across past batches</span>
          </div>
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <span className="font-bold text-emerald-300 block mb-0.5">20% Station Proximity</span>
            <span className="text-[11px] text-slate-300">RMC jurisdiction & regional terrain alignment</span>
          </div>
        </div>
      </div>

      {/* Interactive Engine Component */}
      <SmartCompetencyMapper />

    </div>
  );
};
