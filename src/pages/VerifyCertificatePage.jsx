import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { CertificateVerifier } from '../components/differentiators/CertificateVerifier';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export const VerifyCertificatePage = () => {
  const [searchParams] = useSearchParams();
  const certIdFromUrl = searchParams.get('id') || '';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider border border-emerald-300">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Public Trust & Integrity Verification</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit']">
          Ministry of Earth Sciences Certificate Registry
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Authenticate training credentials issued to India Meteorological Department meteorologists, scientists, and engineers. Every certificate has an immutable SHA-256 cryptographic digest.
        </p>
      </div>

      {/* Validator Component */}
      <CertificateVerifier initialCertId={certIdFromUrl} />

      {/* Trust & Security Notes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
          <div className="font-bold text-slate-900 flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-sky-600" />
            <span>Cryptographic Integrity</span>
          </div>
          <p className="text-slate-500 text-[11px] leading-relaxed">
            Certificates cannot be forged or duplicated; each payload hash is sealed upon assessment clearance.
          </p>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
          <div className="font-bold text-slate-900 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>WMO-RTC Recognized</span>
          </div>
          <p className="text-slate-500 text-[11px] leading-relaxed">
            Compliant with World Meteorological Organization (WMO) competency requirements for aeronautical and marine weather forecasters.
          </p>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1">
          <div className="font-bold text-slate-900 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            <span>Govt Audit Alignment</span>
          </div>
          <p className="text-slate-500 text-[11px] leading-relaxed">
            All certifications are automatically synchronized with the national MoES employee service book and annual performance appraisals.
          </p>
        </div>
      </div>

    </div>
  );
};
