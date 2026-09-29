import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import {
  Award,
  ShieldCheck,
  Printer,
  Download,
  QrCode,
  Calendar,
  Building,
  User,
  CheckCircle2,
  ExternalLink,
  Copy
} from 'lucide-react';

export const CertificatesPage = () => {
  const { currentUser, certificates, addToast } = useAuth();
  const [selectedCertId, setSelectedCertId] = useState(
    currentUser?.certificates?.[0]?.id || certificates[0]?.id
  );

  const activeCert = certificates.find((c) => c.id === selectedCertId) || certificates[0];

  const handlePrint = () => {
    window.print();
  };

  const copyHash = (hash) => {
    navigator.clipboard.writeText(hash);
    addToast('SHA-256 integrity hash copied to clipboard.', 'info');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#081426] via-[#0b1e36] to-[#047857] text-white p-6 sm:p-8 rounded-3xl border border-slate-700 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-emerald-400/30">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Official Government of India Digital Credential</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black font-['Outfit']">
            My Verifiable Competency Certificates
          </h1>
          <p className="text-xs text-slate-200 mt-0.5">
            Cryptographically signed digital credentials compliant with MoES and WMO Regional Training Centre standards.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Certificate Selector on Left (4 cols), Official Certificate Sheet on Right (8 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Certificate List (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <h3 className="font-bold text-slate-900 text-sm">
              Available Credentials ({certificates.length})
            </h3>

            <div className="space-y-2.5">
              {certificates.map((cert) => {
                const isSelected = cert.id === selectedCertId;
                return (
                  <button
                    key={cert.id}
                    onClick={() => setSelectedCertId(cert.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition ${
                      isSelected
                        ? 'bg-emerald-50 border-emerald-500 shadow-sm ring-2 ring-emerald-500/20'
                        : 'bg-slate-50/50 hover:bg-slate-100 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span className="font-mono font-bold text-emerald-800">{cert.id}</span>
                      <span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded text-[10px] font-bold">
                        {cert.score}%
                      </span>
                    </div>
                    <div className="font-bold text-slate-900 text-xs leading-snug line-clamp-1">
                      {cert.courseName}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Awarded to {cert.traineeName} · {cert.issueDate}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 text-xs text-slate-600">
              <Link
                to={`/verify-certificate?id=${activeCert?.id}`}
                className="text-sky-600 hover:underline font-semibold flex items-center gap-1"
              >
                <span>Test Online Public Verification</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Official Printable Certificate Canvas (8 cols) */}
        <div className="lg:col-span-8">
          <div
            id="printable-certificate"
            className="bg-white rounded-3xl border-8 border-double border-[#0b1e36] p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center"
            style={{ minHeight: '620px' }}
          >
            {/* Corner Decorative Ornaments */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-600"></div>
            <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-600"></div>
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-600"></div>
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-600"></div>

            {/* Background Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <img src="/imd-logo.svg" alt="Watermark" className="w-96 h-96 object-contain" />
            </div>

            <div className="relative z-10 space-y-6">
              
              {/* Certificate Top Header */}
              <div className="space-y-2">
                {/* Tiranga Accent */}
                <div className="w-24 h-1 mx-auto flex rounded overflow-hidden">
                  <div className="w-1/3 bg-[#FF9933]"></div>
                  <div className="w-1/3 bg-slate-300"></div>
                  <div className="w-1/3 bg-[#138808]"></div>
                </div>

                <div className="text-xs font-bold tracking-[0.2em] uppercase text-slate-600">
                  GOVERNMENT OF INDIA · MINISTRY OF EARTH SCIENCES
                </div>
                <div className="text-sm font-extrabold tracking-wider uppercase text-sky-900">
                  INDIA METEOROLOGICAL DEPARTMENT
                </div>

                <div className="pt-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1e36] tracking-tight font-['Outfit'] uppercase">
                    Certificate of Competency
                  </h2>
                  <div className="text-xs text-amber-700 font-semibold tracking-widest uppercase mt-0.5">
                    MoES National Capacity Building & LMS Portal
                  </div>
                </div>
              </div>

              {/* Recipient Statement */}
              <div className="space-y-2 text-xs sm:text-sm text-slate-700 max-w-xl mx-auto leading-relaxed">
                <p>This is to certify that</p>
                <div className="text-xl sm:text-2xl font-black text-slate-900 font-['Outfit'] border-b border-slate-300 pb-1 inline-block px-8">
                  {activeCert?.traineeName}
                </div>
                <p className="text-xs text-slate-600">
                  Designation: <span className="font-semibold text-slate-900">{activeCert?.designation}</span> · Employee ID: <span className="font-mono font-bold text-slate-900">{activeCert?.employeeId}</span>
                </p>
                <p className="text-xs text-slate-600">
                  Station: <span className="font-semibold text-slate-900">{activeCert?.center}</span>
                </p>
              </div>

              {/* Achievement Body */}
              <div className="space-y-1.5 max-w-xl mx-auto">
                <p className="text-xs text-slate-600">
                  has successfully completed the comprehensive training curriculum and cleared the rigorous timed assessment for:
                </p>
                <div className="text-sm sm:text-base font-extrabold text-sky-900 bg-sky-50/70 p-3 rounded-xl border border-sky-200">
                  {activeCert?.courseName}
                </div>
                <p className="text-xs text-slate-600 pt-1">
                  Achieving a proficiency score of <span className="font-bold text-slate-900">{activeCert?.score}%</span> with grade <span className="font-bold text-emerald-800">{activeCert?.grade}</span>.
                </p>
              </div>

              {/* Bottom Signatures & QR Block */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-3 items-end gap-4 text-left text-xs">
                
                {/* QR Code Simulation */}
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-slate-900 text-white rounded-lg p-1.5 flex flex-col items-center justify-center border border-slate-700 shadow-sm">
                    <QrCode className="w-12 h-12 text-white" />
                  </div>
                  <span className="text-[9px] font-mono text-slate-500 mt-1">Scan to Verify</span>
                </div>

                {/* Signatory 1 */}
                <div className="text-center space-y-0.5">
                  <div className="font-serif italic text-slate-700 text-xs">Dr. Sangeeta Rao</div>
                  <div className="border-t border-slate-400 pt-1 font-bold text-slate-800 text-[11px]">
                    Chief Radar Scientist
                  </div>
                  <div className="text-[10px] text-slate-500">Course Lead & Evaluator, IMD</div>
                </div>

                {/* Signatory 2 */}
                <div className="text-center space-y-0.5">
                  <div className="font-serif italic text-slate-700 text-xs">Vikramaditya Sen</div>
                  <div className="border-t border-slate-400 pt-1 font-bold text-slate-800 text-[11px]">
                    Director (Capacity Building)
                  </div>
                  <div className="text-[10px] text-slate-500">Ministry of Earth Sciences (MoES)</div>
                </div>

              </div>

              {/* SHA-256 Digest Bar */}
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[10px] text-slate-500 font-mono">
                <div>
                  <span className="font-bold text-slate-700">Certificate ID: </span>
                  <span className="text-sky-800 font-bold">{activeCert?.id}</span>
                </div>
                <div className="truncate max-w-xs sm:max-w-md">
                  <span className="font-bold text-slate-700">SHA-256: </span>
                  <span>{activeCert?.sha256Hash}</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
