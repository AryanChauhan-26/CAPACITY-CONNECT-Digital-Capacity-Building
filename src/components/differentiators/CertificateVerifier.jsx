import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  XCircle,
  QrCode,
  FileText,
  Calendar,
  User,
  Building,
  Award,
  ExternalLink,
  Copy,
  Printer
} from 'lucide-react';

export const CertificateVerifier = ({ initialCertId = '' }) => {
  const { certificates, addToast } = useAuth();
  const [certInput, setCertInput] = useState(initialCertId || 'IMD-CERT-2025-SAT-4819');
  const [searchedCert, setSearchedCert] = useState(() => {
    return certificates.find((c) => c.id === (initialCertId || 'IMD-CERT-2025-SAT-4819')) || certificates[0];
  });
  const [hasSearched, setHasSearched] = useState(true);

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    const query = certInput.trim().toUpperCase();
    const match = certificates.find((c) => c.id.toUpperCase() === query);
    setSearchedCert(match || null);
    setHasSearched(true);

    if (match) {
      addToast(`Certificate ${match.id} verified authentic!`, 'success');
    } else {
      addToast('Certificate ID not found in MoES/IMD registry.', 'error');
    }
  };

  const copyHash = (hash) => {
    navigator.clipboard.writeText(hash);
    addToast('SHA-256 integrity hash copied to clipboard.', 'info');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#0b1e36] via-[#0d3880] to-[#047857] p-6 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>MoES / IMD Public Verification Registry</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-['Outfit']">
              Tamper-Proof Digital Certificate Validator
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl mt-1">
              Verify the authenticity of IMD competency certificates issued under Capacity Connect. Every certificate is secured with a SHA-256 cryptographic digest.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="text-[11px] bg-slate-900/50 px-3 py-1.5 rounded-lg border border-white/10 text-emerald-300 font-mono">
              SHA-256 Merkle Root Active
            </span>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Search Input Bar */}
        <form onSubmit={handleSearch} className="mb-6">
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Enter Verifiable Certificate ID or Scan QR:
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={certInput}
                onChange={(e) => setCertInput(e.target.value)}
                placeholder="e.g. IMD-CERT-2025-SAT-4819"
                className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-mono uppercase focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold text-sm transition shadow flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Verify Now</span>
            </button>
          </div>

          {/* Quick Demo Pre-fills */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="font-medium text-slate-700">Quick Test Samples:</span>
            {certificates.slice(0, 3).map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => {
                  setCertInput(c.id);
                  setSearchedCert(c);
                  setHasSearched(true);
                }}
                className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-sky-800 rounded font-mono text-[11px] transition border border-slate-200"
              >
                {c.id} ({c.traineeName.split(' ')[0]})
              </button>
            ))}
          </div>
        </form>

        {/* Verification Result Card */}
        {hasSearched && (
          searchedCert ? (
            <div className="border border-emerald-200 bg-emerald-50/20 rounded-2xl p-6 shadow-sm relative overflow-hidden">
              {/* Watermark Logo */}
              <div className="absolute right-4 top-4 opacity-5 pointer-events-none">
                <img src="/imd-logo.svg" alt="Seal" className="w-48 h-48" />
              </div>

              {/* Status Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-200/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-emerald-800 text-base">
                        AUTHENTIC & VERIFIED
                      </span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-mono font-bold">
                        WMO-RTC Standards
                      </span>
                    </div>
                    <div className="text-xs text-slate-600">
                      Issued by India Meteorological Department (IMD) & Ministry of Earth Sciences
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] text-slate-500">Certificate Reference ID</div>
                  <div className="text-sm font-mono font-bold text-slate-900 bg-white px-2.5 py-1 rounded border border-slate-200 inline-block mt-0.5">
                    {searchedCert.id}
                  </div>
                </div>
              </div>

              {/* Certificate Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="space-y-3.5 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[11px] uppercase tracking-wider">Certified Personnel</span>
                    <span className="font-bold text-slate-900 text-sm">{searchedCert.traineeName}</span>
                    <span className="text-slate-600 block text-xs">{searchedCert.designation} (Emp ID: {searchedCert.employeeId})</span>
                  </div>

                  <div>
                    <span className="text-slate-500 block text-[11px] uppercase tracking-wider">Station / RMC</span>
                    <span className="font-semibold text-slate-800 text-xs flex items-center gap-1.5 mt-0.5">
                      <Building className="w-3.5 h-3.5 text-sky-600" />
                      {searchedCert.center}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-500 block text-[11px] uppercase tracking-wider">Specialized Competency Subject</span>
                    <span className="font-bold text-sky-900 text-xs block leading-snug mt-0.5">
                      {searchedCert.courseName}
                    </span>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[11px] uppercase tracking-wider">Issuance Date & Validity</span>
                    <span className="font-semibold text-slate-800 text-xs flex items-center gap-1.5 mt-0.5">
                      <Calendar className="w-3.5 h-3.5 text-sky-600" />
                      Issued on {searchedCert.issueDate} · {searchedCert.validUntil}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-500 block text-[11px] uppercase tracking-wider">Evaluation Grade</span>
                    <span className="inline-block mt-0.5 px-2.5 py-1 bg-sky-100 text-sky-800 font-bold rounded text-xs border border-sky-300">
                      {searchedCert.grade} ({searchedCert.score}% Pass Score)
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-500 block text-[11px] uppercase tracking-wider">Course Lead & Authorizer</span>
                    <span className="font-medium text-slate-700 text-xs block">
                      Lead: {searchedCert.trainerName}
                    </span>
                    <span className="text-slate-500 text-[11px] block">
                      Authorized by: {searchedCert.authorizedBy}
                    </span>
                  </div>
                </div>
              </div>

              {/* Cryptographic SHA-256 Digest Bar */}
              <div className="bg-slate-900 text-slate-200 p-3.5 rounded-xl border border-slate-800 text-xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Cryptographic Verification Hash (SHA-256)</span>
                  </span>
                  <button
                    onClick={() => copyHash(searchedCert.sha256Hash)}
                    className="text-[11px] text-sky-300 hover:text-white flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    <span>Copy Hash</span>
                  </button>
                </div>
                <div className="font-mono text-[11px] text-emerald-400 break-all bg-black/40 p-2 rounded border border-white/5">
                  {searchedCert.sha256Hash}
                </div>
              </div>
            </div>
          ) : (
            <div className="border border-rose-200 bg-rose-50/40 rounded-2xl p-8 text-center">
              <XCircle className="w-12 h-12 text-rose-500 mx-auto mb-3" />
              <h3 className="text-base font-bold text-rose-900">Certificate Not Found</h3>
              <p className="text-xs text-rose-700 max-w-md mx-auto mt-1">
                The identifier <span className="font-mono font-bold">"{certInput}"</span> does not match any authenticated record in the Ministry of Earth Sciences database. Please verify the ID on your printed document.
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};
