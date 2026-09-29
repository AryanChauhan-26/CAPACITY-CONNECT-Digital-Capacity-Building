import React from 'react';
import {
  TrendingUp,
  Award,
  Zap,
  Globe,
  Coins,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Sparkles,
  TreePine
} from 'lucide-react';

export const ImpactPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#081426] via-[#0b1e36] to-[#047857] text-white p-8 sm:p-10 rounded-3xl border border-slate-700 shadow-2xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider border border-emerald-400/30">
          <Zap className="w-3.5 h-3.5" />
          <span>Measurable Outcomes & Public Impact</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black font-['Outfit']">
          Transformative Benefits & National Impact
        </h1>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-3xl">
          By unifying workforce training and competency mapping under Capacity Connect, the Ministry of Earth Sciences eliminates geographical barriers, slashes administrative delays, and secures fiscal savings.
        </p>
      </div>

      {/* 4 Primary KPI Counters */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-1">
          <div className="text-3xl sm:text-4xl font-black text-sky-700 font-['Outfit']">
            100%
          </div>
          <div className="font-bold text-slate-900 text-sm">Digital Competency Tracking</div>
          <p className="text-[11px] text-slate-500 leading-snug">
            Complete elimination of manual paper training records across all 6 RMCs.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-1">
          <div className="text-3xl sm:text-4xl font-black text-teal-700 font-['Outfit']">
            70%+
          </div>
          <div className="font-bold text-slate-900 text-sm">Admin Overhead Reduction</div>
          <p className="text-[11px] text-slate-500 leading-snug">
            Automated RBAC approvals, quiz grading, and certificate delivery in seconds.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-1">
          <div className="text-3xl sm:text-4xl font-black text-emerald-700 font-['Outfit']">
            ₹14.2 Cr
          </div>
          <div className="font-bold text-slate-900 text-sm">Annual Fiscal Savings</div>
          <p className="text-[11px] text-slate-500 leading-snug">
            Saved on travel allowances, hotels, and physical venue logistics annually.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-1">
          <div className="text-3xl sm:text-4xl font-black text-purple-700 font-['Outfit']">
            Zero
          </div>
          <div className="font-bold text-slate-900 text-sm">Geographic Disparity</div>
          <p className="text-[11px] text-slate-500 leading-snug">
            Equal access to advanced Doppler Radar & NWP courses for Leh & Port Blair.
          </p>
        </div>
      </div>

      {/* Triple Bottom-Line Benefits Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 1. Operational Benefits */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-base font-['Outfit']">
            Operational Excellence
          </h3>
          <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Real-time executive heatmap highlights deficit stations before cyclone season strikes.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Smart Competency Engine matches the right scientific mentors without administrative delay.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Rapid emergency drill simulation deploys accelerated micro-courses in 1 click.</span>
            </li>
          </ul>
        </div>

        {/* 2. Economic Benefits */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            <Coins className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-base font-['Outfit']">
            Economic Efficiencies
          </h3>
          <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Over ₹14.2 Crores redirected into advanced radar equipment and HPC compute infrastructure.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Eliminates observatory roster disruptions caused by officers traveling for physical classes.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Lifetime reusable course assets and question banks reduce recurring curriculum creation overhead.</span>
            </li>
          </ul>
        </div>

        {/* 3. Social & Environmental Benefits */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <TreePine className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-slate-900 text-base font-['Outfit']">
            Social & Environmental Impact
          </h3>
          <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Reduced air and rail travel eliminates ~420 metric tons of CO2 emissions annually.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Paperless digital exams and verifiable PDF credentials save thousands of paper records.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Higher nowcasting accuracy directly safeguards human lives during tropical cyclones.</span>
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
};
