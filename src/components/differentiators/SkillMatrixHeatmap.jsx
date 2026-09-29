import React, { useState } from 'react';
import { SKILL_MATRIX_DATA } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Zap,
  Shield,
  Layers,
  Sparkles,
  Info,
  Filter,
  Send
} from 'lucide-react';

export const SkillMatrixHeatmap = () => {
  const { addToast } = useAuth();
  const [drillScenario, setDrillScenario] = useState('normal'); // 'normal', 'cyclone', 'monsoon', 'cryosphere'
  const [searchFilter, setSearchFilter] = useState('');

  // Get active scenario details
  const currentScenario = SKILL_MATRIX_DATA.emergencyScenarios[drillScenario];

  // Calculate current national index based on drill scenario
  const getCenterScore = (center) => {
    if (drillScenario === 'cyclone') return center.cycloneDrillReadiness;
    if (drillScenario === 'monsoon') return center.monsoonDrillReadiness;
    if (drillScenario === 'cryosphere') {
      // Cryosphere prioritizes high altitude and northern stations
      return center.id === 'leh' || center.id === 'delhi'
        ? Math.min(96, center.baselineReadiness + 5)
        : Math.max(55, center.baselineReadiness - 12);
    }
    return center.baselineReadiness;
  };

  const filteredCenters = SKILL_MATRIX_DATA.centers.filter(
    (c) =>
      c.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      c.deficitAreas.some((d) => d.toLowerCase().includes(searchFilter.toLowerCase()))
  );

  const avgReadiness = Math.round(
    filteredCenters.reduce((acc, c) => acc + getCenterScore(c), 0) / (filteredCenters.length || 1)
  );

  const handleTriggerEmergencyDrill = (centerName, deficit) => {
    addToast(
      `Emergency Training Mission deployed to ${centerName}! Auto-assigned accelerated module: "${deficit || 'Severe Weather Protocols'}".`,
      'success'
    );
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#081426] via-[#0b1e36] to-[#0f3460] p-6 text-white">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 border border-teal-400/30 text-xs font-semibold uppercase tracking-wider mb-2">
              <Activity className="w-3.5 h-3.5 text-teal-400" />
              <span>Key Differentiator #2: Automated Skill Matrix & Readiness Index</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-['Outfit']">
              Executive Meteorological Competency Heatmap
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
              Live monitoring of IMD regional workforce competencies across Dual-Pol Radar, High-Res NWP, Cyclone Forecasting, Satellite Nowcasting, and Agro-AWS telemetry.
            </p>
          </div>

          {/* National Readiness Index Card */}
          <div className="flex items-center gap-4 bg-slate-900/60 border border-sky-400/30 p-4 rounded-xl backdrop-blur-md">
            <div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                National Readiness Index
              </div>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-3xl font-extrabold text-white font-['Outfit']">
                  {avgReadiness}%
                </span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-0.5">
                  <TrendingUp className="w-3.5 h-3.5" /> Above 80% Benchmark
                </span>
              </div>
              <div className="text-[10px] text-slate-400 mt-1">
                Active Scenario: <span className="text-sky-300 font-medium">{currentScenario.name}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Scenario Selector Tabs */}
        <div className="mt-6 pt-4 border-t border-slate-700/60 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-300 mr-2 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Simulate Emergency Drill:</span>
          </span>

          <button
            onClick={() => setDrillScenario('normal')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              drillScenario === 'normal'
                ? 'bg-sky-600 text-white font-bold shadow'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            Baseline Operational
          </button>

          <button
            onClick={() => setDrillScenario('cyclone')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${
              drillScenario === 'cyclone'
                ? 'bg-rose-600 text-white font-bold shadow'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <span>🌪️ Cyclone Drill (Pre/Post Monsoon)</span>
          </button>

          <button
            onClick={() => setDrillScenario('monsoon')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${
              drillScenario === 'monsoon'
                ? 'bg-emerald-600 text-white font-bold shadow'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <span>🌧️ SW Monsoon Flood Inundation</span>
          </button>

          <button
            onClick={() => setDrillScenario('cryosphere')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${
              drillScenario === 'cryosphere'
                ? 'bg-indigo-600 text-white font-bold shadow'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <span>❄️ Himalayan Avalanche Drill</span>
          </button>
        </div>
      </div>

      {/* Heatmap Matrix Table */}
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="text-xs text-slate-600">
            Showing <span className="font-bold text-slate-900">{filteredCenters.length}</span> Regional Centres & Observatories. Scores evaluated out of 100 based on verified LMS completions.
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search station or deficit area..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="text-xs px-3 py-1.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 w-64"
            />
          </div>
        </div>

        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="text-[11px] uppercase bg-slate-100 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">IMD Centre / Observatory</th>
                <th className="py-3 px-3 text-center">Doppler Radar</th>
                <th className="py-3 px-3 text-center">NWP Modeling</th>
                <th className="py-3 px-3 text-center">Cyclone Tracking</th>
                <th className="py-3 px-3 text-center">Satellite Nowcast</th>
                <th className="py-3 px-3 text-center">Agro & AWS</th>
                <th className="py-3 px-3 text-center bg-slate-200/60 font-bold">
                  Scenario Score
                </th>
                <th className="py-3 px-4">Identified Deficit & Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredCenters.map((center) => {
                const scenarioScore = getCenterScore(center);
                const isDeficit = scenarioScore < 75;

                return (
                  <tr
                    key={center.id}
                    className={`hover:bg-slate-50/80 transition ${
                      isDeficit ? 'bg-rose-50/30' : ''
                    }`}
                  >
                    <td className="py-3 px-4 font-semibold text-slate-900">
                      <div>{center.name}</div>
                      <div className="text-[10px] text-slate-500 font-normal">
                        Baseline: {center.baselineReadiness}%
                      </div>
                    </td>

                    {/* Doppler Radar */}
                    <td className="py-3 px-3 text-center">
                      <span className={`px-2 py-0.5 rounded font-mono font-medium ${
                        center.radarScore >= 90 ? 'bg-emerald-100 text-emerald-800' :
                        center.radarScore >= 80 ? 'bg-sky-100 text-sky-800' :
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {center.radarScore}%
                      </span>
                    </td>

                    {/* NWP Modeling */}
                    <td className="py-3 px-3 text-center">
                      <span className={`px-2 py-0.5 rounded font-mono font-medium ${
                        center.nwpScore >= 90 ? 'bg-emerald-100 text-emerald-800' :
                        center.nwpScore >= 80 ? 'bg-sky-100 text-sky-800' :
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {center.nwpScore}%
                      </span>
                    </td>

                    {/* Cyclone Tracking */}
                    <td className="py-3 px-3 text-center">
                      <span className={`px-2 py-0.5 rounded font-mono font-medium ${
                        center.cycloneScore >= 90 ? 'bg-emerald-100 text-emerald-800' :
                        center.cycloneScore >= 80 ? 'bg-sky-100 text-sky-800' :
                        'bg-rose-100 text-rose-800 font-bold'
                      }`}>
                        {center.cycloneScore}%
                      </span>
                    </td>

                    {/* Satellite Nowcast */}
                    <td className="py-3 px-3 text-center">
                      <span className={`px-2 py-0.5 rounded font-mono font-medium ${
                        center.satelliteScore >= 90 ? 'bg-emerald-100 text-emerald-800' :
                        center.satelliteScore >= 80 ? 'bg-sky-100 text-sky-800' :
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {center.satelliteScore}%
                      </span>
                    </td>

                    {/* Agro & AWS */}
                    <td className="py-3 px-3 text-center">
                      <span className={`px-2 py-0.5 rounded font-mono font-medium ${
                        center.agroScore >= 90 ? 'bg-emerald-100 text-emerald-800' :
                        center.agroScore >= 80 ? 'bg-sky-100 text-sky-800' :
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {center.agroScore}%
                      </span>
                    </td>

                    {/* Active Scenario Score */}
                    <td className="py-3 px-3 text-center bg-slate-50 font-bold">
                      <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-['Outfit'] ${
                        scenarioScore >= 90 ? 'bg-emerald-600 text-white' :
                        scenarioScore >= 80 ? 'bg-sky-600 text-white' :
                        scenarioScore >= 70 ? 'bg-amber-500 text-white' :
                        'bg-rose-600 text-white font-extrabold animate-pulse'
                      }`}>
                        {scenarioScore}%
                      </div>
                    </td>

                    {/* Deficit Areas & Action */}
                    <td className="py-3 px-4">
                      {center.deficitAreas.length > 0 ? (
                        <div className="flex flex-wrap items-center gap-1.5">
                          {center.deficitAreas.map((area, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 bg-rose-100 text-rose-800 rounded text-[10px] font-semibold border border-rose-200"
                            >
                              ⚠ {area}
                            </span>
                          ))}
                          <button
                            onClick={() => handleTriggerEmergencyDrill(center.name, center.deficitAreas[0])}
                            className="ml-auto inline-flex items-center gap-1 px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-semibold rounded shadow-sm transition"
                          >
                            <Send className="w-3 h-3" />
                            <span>Deploy Drill</span>
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>All Core Benchmarks Met</span>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 border-t border-slate-100 pt-3">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-slate-700">Competency Levels:</span>
            <span className="inline-flex items-center gap-1"><span className="w-3 h-3 rounded bg-emerald-500"></span> 90-100%: Master Forecaster</span>
            <span className="inline-flex items-center gap-1"><span className="w-3 h-3 rounded bg-sky-500"></span> 80-89%: Mission Capable</span>
            <span className="inline-flex items-center gap-1"><span className="w-3 h-3 rounded bg-amber-500"></span> 70-79%: Operational Baseline</span>
            <span className="inline-flex items-center gap-1"><span className="w-3 h-3 rounded bg-rose-500"></span> &lt;70%: Immediate Upskill Required</span>
          </div>

          <div className="text-sky-700 font-semibold">
            Data Refresh Cadence: Hourly Automated Cron from LMS Assessments
          </div>
        </div>
      </div>
    </div>
  );
};
