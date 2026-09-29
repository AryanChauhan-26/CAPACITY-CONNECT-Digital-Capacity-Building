import React, { useState } from 'react';
import { COMPETENCY_MAPPING_DATA } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';
import {
  Sparkles,
  Award,
  BookOpen,
  MapPin,
  CheckCircle2,
  Users,
  Star,
  FileText,
  Clock,
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export const SmartCompetencyMapper = () => {
  const { addToast } = useAuth();
  const [topics, setTopics] = useState(COMPETENCY_MAPPING_DATA);
  const [selectedTopicId, setSelectedTopicId] = useState(topics[0].topicId);

  const activeTopic = topics.find((t) => t.topicId === selectedTopicId) || topics[0];

  const handleAssignTrainer = (topicId, scientistId, scientistName) => {
    setTopics((prev) =>
      prev.map((t) => {
        if (t.topicId === topicId) {
          return {
            ...t,
            matches: t.matches.map((m) => {
              if (m.scientistId === scientistId) {
                return { ...m, status: 'Assigned as Course Lead' };
              }
              return { ...m, status: 'Available for Backup' };
            })
          };
        }
        return t;
      })
    );
    addToast(`Successfully assigned ${scientistName} as Course Lead for "${activeTopic.subject}"!`, 'success');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0b1e36] via-[#0d3880] to-[#0284c7] p-6 text-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Key Differentiator #1: Smart Competency Mapping Engine</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-['Outfit']">
              Automated IMD Internal Trainer Recommender
            </h2>
            <p className="text-xs sm:text-sm text-sky-100 max-w-2xl mt-1">
              Leverages multi-variable skill weighting (operational years, peer-reviewed citations, prior trainee ratings, and geographic station proximity) to pair critical meteorological subjects with the nation's premier domain scientists.
            </p>
          </div>

          <div className="text-right bg-slate-900/40 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 hidden sm:block">
            <div className="text-xs text-slate-300">Algorithm Status</div>
            <div className="text-sm font-bold text-emerald-300 flex items-center gap-1.5 justify-end">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Operational & Verified
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Subject Selector on Left, Match Results on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        
        {/* Left Column: Topics List */}
        <div className="lg:col-span-4 p-5 bg-slate-50/60 space-y-3">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
            Target Competency Topics ({topics.length})
          </div>

          {topics.map((t) => {
            const isSelected = t.topicId === selectedTopicId;
            return (
              <button
                key={t.topicId}
                onClick={() => setSelectedTopicId(t.topicId)}
                className={`w-full text-left p-3.5 rounded-xl transition-all border ${
                  isSelected
                    ? 'bg-white border-sky-500 shadow-md ring-2 ring-sky-500/20'
                    : 'bg-white hover:bg-slate-100 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1.5">
                  <span className="font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                    {t.domain}
                  </span>
                  <span
                    className={`font-medium px-1.5 py-0.5 rounded text-[10px] ${
                      t.urgency.includes('Critical')
                        ? 'bg-rose-100 text-rose-700 font-bold'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {t.urgency}
                  </span>
                </div>

                <div className="font-semibold text-xs sm:text-sm text-slate-900 leading-snug line-clamp-2">
                  {t.subject}
                </div>

                <div className="mt-2 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Req: {t.requiredLevel}</span>
                  <span className="text-sky-600 font-bold flex items-center gap-1">
                    {t.matches[0]?.matchScore}% Top Match <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Matched Scientists & Match Score Breakdown */}
        <div className="lg:col-span-8 p-6 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider">
                  Target Domain: {activeTopic.domain}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  {activeTopic.subject}
                </h3>
              </div>
              <div className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200">
                <span className="font-semibold">Target Observatories: </span>
                {activeTopic.targetStations.join(', ')}
              </div>
            </div>
          </div>

          {/* Matched Scientists Cards */}
          <div className="space-y-4">
            {activeTopic.matches.map((match, idx) => {
              const isLead = match.status === 'Assigned as Course Lead';

              return (
                <div
                  key={match.scientistId}
                  className={`p-5 rounded-2xl border transition-all ${
                    idx === 0
                      ? 'bg-gradient-to-r from-sky-50/60 via-white to-sky-50/20 border-sky-300 shadow-md ring-1 ring-sky-400/20'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    
                    {/* Scientist Identity */}
                    <div className="flex items-start gap-3.5">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 text-white font-bold flex items-center justify-center text-sm shadow">
                          {match.name.split(' ').map((n) => n[0]).join('')}
                        </div>
                        {idx === 0 && (
                          <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full shadow">
                            #1 Rank
                          </span>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                            {match.name}
                          </h4>
                          {isLead && (
                            <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              Active Course Lead
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-600 mt-0.5">{match.designation}</div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                          <MapPin className="w-3.5 h-3.5 text-sky-600" />
                          <span>{match.center}</span>
                        </div>
                      </div>
                    </div>

                    {/* Match Score Badge & Action */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2">
                      <div className="text-left sm:text-right">
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                          Match Score
                        </div>
                        <div className="text-2xl font-black text-sky-700 font-['Outfit']">
                          {match.matchScore}%
                        </div>
                      </div>

                      <button
                        onClick={() => handleAssignTrainer(activeTopic.topicId, match.scientistId, match.name)}
                        disabled={isLead}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                          isLead
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-300 cursor-default'
                            : 'bg-sky-600 hover:bg-sky-700 text-white shadow-sm'
                        }`}
                      >
                        {isLead ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Assigned</span>
                          </>
                        ) : (
                          <>
                            <span>Assign as Lead</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Match Criteria Breakdown Grid */}
                  <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-2 text-slate-600 bg-slate-50 p-2 rounded-lg">
                      <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                      <span className="text-[11px]">{match.criteria.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 bg-slate-50 p-2 rounded-lg">
                      <FileText className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span className="text-[11px]">{match.criteria.publications}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 bg-slate-50 p-2 rounded-lg">
                      <Star className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="text-[11px]">{match.criteria.trainerRating}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 bg-slate-50 p-2 rounded-lg">
                      <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-[11px]">{match.criteria.stationProximity}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
