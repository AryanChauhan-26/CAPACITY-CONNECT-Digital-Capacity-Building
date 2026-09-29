import React from 'react';
import { SkillMatrixHeatmap } from '../components/differentiators/SkillMatrixHeatmap';
import { Activity, ShieldCheck, Zap, AlertTriangle, TrendingUp } from 'lucide-react';

export const SkillMatrixPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Narrative Intro */}
      <div className="bg-gradient-to-r from-[#081426] via-[#0b1e36] to-[#044e54] text-white p-8 rounded-3xl border border-slate-700 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 text-xs font-semibold uppercase tracking-wider border border-teal-400/30">
          <Activity className="w-3.5 h-3.5" />
          <span>Core Differentiator: National Executive Heatmap</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black font-['Outfit']">
          Automated Skill Matrix & National Readiness Index
        </h1>
        <p className="text-xs sm:text-sm text-slate-200 max-w-3xl leading-relaxed">
          Provides MoES leadership and the Director General of Meteorology with unprecedented, real-time visibility into the operational competencies of all Regional Meteorological Centres (RMCs) and field observatories. By simulating high-impact emergency drills (Cyclone seasons, Southwest Monsoon surges, Himalayan avalanches), the system immediately detects regional knowledge deficits and dispatches targeted micro-curricula.
        </p>
      </div>

      {/* Interactive Heatmap Component */}
      <SkillMatrixHeatmap />

    </div>
  );
};
