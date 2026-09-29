import React, { useState } from 'react';
import {
  Layers,
  Shield,
  Server,
  Database,
  Smartphone,
  Cpu,
  Lock,
  Wifi,
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';

export const ArchitecturePage = () => {
  const [activeLayer, setActiveLayer] = useState('client');

  const layers = [
    {
      id: 'client',
      title: '1. Client & Presentation Layer',
      subtitle: 'PWA, Offline Cache & Low-Bandwidth Adaptive UI',
      icon: Smartphone,
      color: 'sky',
      details: [
        'React 18 Single Page Application with Tailwind CSS responsive tokens',
        'Service Worker (sw.js) & Web App Manifest for complete offline document availability',
        '2G Low-Bandwidth Mode: disables video auto-play, loads compressed SVG assets, and activates zero-buffering text transcripts',
        'WCAG 2.1 AA accessibility with font-size adjusters and bilingual (English/Hindi) support'
      ]
    },
    {
      id: 'gateway',
      title: '2. Gateway & Security Layer',
      subtitle: 'JWT Authentication, RBAC & CERT-In Alignment',
      icon: Shield,
      color: 'purple',
      details: [
        'Stateful JWT token exchange with cryptographic session expiration',
        'Granular 3-tier Role-Based Access Control (RBAC): Trainee, Trainer, Administrator',
        'XSS & SQL Injection sanitization middleware and rate-limiting throttling',
        'Audit Logger tracking IP address, timestamp, actor ID, and security events for CERT-In compliance'
      ]
    },
    {
      id: 'services',
      title: '3. Core Application Microservices',
      subtitle: 'LMS, Competency Engine, Skill Matrix & Assessments',
      icon: Cpu,
      color: 'teal',
      details: [
        'LMS Core Service: manages modular courses, curriculum milestones, and feedback forms',
        'Smart Competency Mapping Engine: multi-factor trainer assignment (30% exp, 25% papers, 25% rating, 20% station proximity)',
        'Automated Skill Matrix & Readiness Index: executive heatmap generator with real-time emergency drill multipliers',
        'Assessment Engine: millisecond-accurate countdown timer, question palette, and instant grading',
        'Verifiable Credential Service: SHA-256 digital signature generator with public QR validation endpoint'
      ]
    },
    {
      id: 'data',
      title: '4. Data & Persistence Layer',
      subtitle: 'PostgreSQL Relational DB, Redis Caching & Object Store',
      icon: Database,
      color: 'emerald',
      details: [
        'PostgreSQL Relational Database: strict schemas for users, stations, competencies, course modules, and audit trails',
        'Redis-style In-Memory Cache: caching course catalogs, national readiness index scores, and active user sessions',
        'Offline Document Store: IndexedDB and CacheStorage holding technical SOPs and SCORM packages locally on client'
      ]
    }
  ];

  const activeLayerData = layers.find((l) => l.id === activeLayer) || layers[0];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#081426] via-[#1e1b4b] to-[#0d3880] text-white p-8 sm:p-10 rounded-3xl border border-slate-700 shadow-2xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-400/20 text-purple-200 text-xs font-semibold uppercase tracking-wider border border-purple-400/30">
          <Layers className="w-3.5 h-3.5" />
          <span>System Architecture & Engineering Design</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black font-['Outfit']">
          End-to-End Enterprise Architecture
        </h1>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-3xl">
          Engineered for fault-tolerant government scalability, low-bandwidth resilience, and tamper-proof verification across 120 national meteorological observatories.
        </p>
      </div>

      {/* Visual Architectural Diagram */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-['Outfit']">
          Visual System Stack (Client → Security → Core → Data)
        </h2>

        {/* 4 Interactive Layer Blocks */}
        <div className="space-y-3">
          {layers.map((layer, idx) => {
            const isSelected = layer.id === activeLayer;
            const Icon = layer.icon;

            return (
              <div
                key={layer.id}
                onClick={() => setActiveLayer(layer.id)}
                className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                  isSelected
                    ? 'border-sky-500 bg-sky-50/50 shadow-md ring-2 ring-sky-500/20'
                    : 'border-slate-200 bg-slate-50/60 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow ${
                      isSelected ? 'bg-sky-600 text-white' : 'bg-slate-800 text-white'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                        {layer.title}
                      </h3>
                      <p className="text-xs text-slate-500">{layer.subtitle}</p>
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold text-sky-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 self-start sm:self-center">
                    {isSelected ? 'Selected Layer Details Below' : 'Click to Inspect'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Layer In-Depth Technical Breakdown */}
        <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <h4 className="font-bold text-sm sm:text-base text-sky-300 font-['Outfit']">
                Technical Specifications: {activeLayerData.title}
              </h4>
            </div>
            <span className="text-[10px] font-mono text-slate-400 uppercase">
              Production Stack Standards
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeLayerData.details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200 bg-white/5 p-3 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Backend Ready Architecture Note */}
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-2">
        <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
          <Server className="w-4 h-4 text-sky-600" />
          <span>Ready for Direct Node.js / Express & PostgreSQL Integration</span>
        </h4>
        <p className="leading-relaxed">
          The code is structured with clean abstraction boundaries: state persistence uses standard REST patterns (`/api/auth`, `/api/courses`, `/api/assessments`, `/api/certificates`), permitting seamless replacement of the client-side mock store with a production Express backend and PostgreSQL database.
        </p>
      </div>

    </div>
  );
};
