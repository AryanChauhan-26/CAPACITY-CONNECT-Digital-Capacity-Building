import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  UploadCloud,
  FileText,
  FileCode,
  Video,
  Layers,
  CheckCircle2,
  Trash2,
  Plus,
  Wifi,
  WifiOff,
  Filter,
  ShieldCheck
} from 'lucide-react';

export const ContentRepositoryPage = () => {
  const { addToast } = useAuth();

  const [docs, setDocs] = useState([
    {
      id: 'repo-1',
      title: 'IMD Dual-Pol Radar Operating Manual Rev 2026.pdf',
      course: 'Dual-Polarimetric Doppler Radar (IMD-DWR-401)',
      format: 'PDF',
      size: '4.2 MB',
      bandwidthTag: 'Ultra-light (<5MB)',
      accessScope: 'All Observatories',
      uploadedBy: 'Dr. Sangeeta Rao',
      date: '2026-09-15'
    },
    {
      id: 'repo-2',
      title: 'Dvorak Satellite Curve Analysis Practical Chartbook.pdf',
      course: 'Tropical Cyclone Track Forecasting (IMD-TC-603)',
      format: 'PDF',
      size: '3.4 MB',
      bandwidthTag: 'Ultra-light (<5MB)',
      accessScope: 'Coastal ACWC Stations Only',
      uploadedBy: 'Dr. Meenakshi Sundaram',
      date: '2026-09-12'
    },
    {
      id: 'repo-3',
      title: 'WRF-DA Radar Radial Velocity Ingestion Pipeline.ipynb',
      course: 'High-Res NWP Modeling (IMD-NWP-502)',
      format: 'Python Notebook',
      size: '850 KB',
      bandwidthTag: 'Ultra-light (<5MB)',
      accessScope: 'HPC & Modeling Centres',
      uploadedBy: 'Dr. A. K. Mitra',
      date: '2026-09-08'
    },
    {
      id: 'repo-4',
      title: 'INSAT-3DS RAPID Scan Calibration Video Lecture.mp4',
      course: 'Satellite Meteorology (IMD-SAT-404)',
      format: 'MP4 Video',
      size: '42.5 MB',
      bandwidthTag: 'Standard (Adaptive Bitrate)',
      accessScope: 'All Observatories',
      uploadedBy: 'Dr. Ramesh Sharma',
      date: '2026-09-01'
    }
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newCourse, setNewCourse] = useState('Dual-Polarimetric Doppler Radar (IMD-DWR-401)');
  const [newFormat, setNewFormat] = useState('PDF');
  const [newBandwidth, setNewBandwidth] = useState('Ultra-light (<5MB)');
  const [newAccess, setNewAccess] = useState('All Observatories');
  const [isUploading, setIsUploading] = useState(false);

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) {
      addToast('Please enter a document title', 'error');
      return;
    }

    setIsUploading(true);
    setTimeout(() => {
      const newDoc = {
        id: `repo-${Date.now()}`,
        title: newTitle.trim(),
        course: newCourse,
        format: newFormat,
        size: newFormat === 'PDF' ? '2.4 MB' : newFormat === 'Python Notebook' ? '620 KB' : '18.2 MB',
        bandwidthTag: newBandwidth,
        accessScope: newAccess,
        uploadedBy: 'Dr. Sangeeta Rao (Lead)',
        date: new Date().toISOString().split('T')[0]
      };
      setDocs([newDoc, ...docs]);
      setIsUploading(false);
      setNewTitle('');
      addToast(`Uploaded "${newDoc.title}" to IMD National Content Repository!`, 'success');
    }, 800);
  };

  const handleDelete = (id, title) => {
    setDocs(docs.filter((d) => d.id !== id));
    addToast(`Removed "${title}" from repository`, 'info');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#081426] via-[#044e54] to-[#0d9488] text-white p-6 sm:p-8 rounded-3xl border border-teal-700 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/20 text-teal-200 text-xs font-semibold uppercase tracking-wider mb-2 border border-teal-300/30">
            <Layers className="w-4 h-4" />
            <span>IMD Cloud Content Repository</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black font-['Outfit']">
            Technical Manuals, SCORM & Slide Library
          </h1>
          <p className="text-xs text-teal-100 mt-0.5">
            Upload and organize technical guides, video lectures, Python notebooks, and radar telemetry calibration protocols.
          </p>
        </div>

        <div className="text-right text-xs bg-slate-900/50 p-3 rounded-xl border border-teal-400/20">
          <div className="text-teal-200">Repository Status</div>
          <div className="font-bold text-white">4 Modules · 48 Active Documents</div>
        </div>
      </div>

      {/* Main Grid: Upload Form on Left (5 cols), Documents Table on Right (7 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Upload Form Box */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-base font-['Outfit']">
            Upload New Operational Material
          </h3>

          {/* Drag & Drop Visual Zone */}
          <div className="border-2 border-dashed border-teal-400/60 bg-teal-50/30 rounded-2xl p-6 text-center space-y-2 cursor-pointer hover:bg-teal-50/60 transition">
            <UploadCloud className="w-10 h-10 text-teal-600 mx-auto" />
            <div className="font-bold text-slate-800 text-xs">
              Drag & drop technical documents here, or browse
            </div>
            <div className="text-[11px] text-slate-500">
              Supports PDF, MP4, Jupyter Notebooks (.ipynb), GeoTIFF, SCORM 1.2
            </div>
          </div>

          <form onSubmit={handleUploadSubmit} className="space-y-3.5 text-xs">
            <div>
              <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                Document / Manual Title *
              </label>
              <input
                type="text"
                required
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="e.g. Standard Sun-Pointing DWR Calibration SOP.pdf"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                Target Course Curriculum *
              </label>
              <select
                value={newCourse}
                onChange={(e) => setNewCourse(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-teal-500"
              >
                <option value="Dual-Polarimetric Doppler Radar (IMD-DWR-401)">Dual-Polarimetric Doppler Radar (IMD-DWR-401)</option>
                <option value="Tropical Cyclone Track Forecasting (IMD-TC-603)">Tropical Cyclone Track Forecasting (IMD-TC-603)</option>
                <option value="High-Res NWP Modeling (IMD-NWP-502)">High-Res NWP Modeling (IMD-NWP-502)</option>
                <option value="Satellite Meteorology (IMD-SAT-404)">Satellite Meteorology (IMD-SAT-404)</option>
                <option value="Agro-Meteorology Advisories (IMD-AGRO-305)">Agro-Meteorology Advisories (IMD-AGRO-305)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Format
                </label>
                <select
                  value={newFormat}
                  onChange={(e) => setNewFormat(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs"
                >
                  <option value="PDF">PDF Manual</option>
                  <option value="MP4 Video">MP4 Video</option>
                  <option value="Python Notebook">Python Notebook</option>
                  <option value="SCORM">SCORM Package</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Bandwidth Tier
                </label>
                <select
                  value={newBandwidth}
                  onChange={(e) => setNewBandwidth(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs"
                >
                  <option value="Ultra-light (<5MB)">Ultra-light (&lt;5MB)</option>
                  <option value="Standard (Adaptive Bitrate)">Standard (5-20MB)</option>
                  <option value="High Bandwidth (Broadband)">High Bandwidth</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                Access Authorization Scope
              </label>
              <select
                value={newAccess}
                onChange={(e) => setNewAccess(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-teal-500"
              >
                <option value="All Observatories">All Observatories (Nationwide)</option>
                <option value="Coastal ACWC Stations Only">Coastal ACWC Stations Only (Chennai, Mumbai, Kolkata)</option>
                <option value="Island & High-Altitude Only">Island & High-Altitude Only (Leh, Port Blair, Minicoy)</option>
                <option value="HPC & Modeling Centres">HPC & Modeling Centres (Delhi HQ, Pune)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isUploading}
              className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold transition shadow-sm flex items-center justify-center gap-2"
            >
              {isUploading ? (
                <span>Compressing & Indexing...</span>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Publish to National Repository</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Existing Repository Documents Table */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-bold text-slate-900 text-base font-['Outfit']">
              Published Repository Files ({docs.length})
            </h3>
            <span className="text-xs text-slate-500">Auto-synchronized with PWA Worker</span>
          </div>

          <div className="space-y-3">
            {docs.map((d) => (
              <div
                key={d.id}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:border-teal-300 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded font-mono font-bold bg-teal-100 text-teal-800 text-[10px]">
                      {d.format}
                    </span>
                    <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-medium">
                      {d.size}
                    </span>
                    <span className="text-[10px] text-emerald-700 font-semibold">
                      ✓ {d.bandwidthTag}
                    </span>
                  </div>

                  <div className="font-bold text-slate-900 text-xs sm:text-sm">
                    {d.title}
                  </div>

                  <div className="text-[11px] text-slate-500">
                    Course: {d.course}
                  </div>

                  <div className="text-[10px] text-slate-400">
                    Scope: {d.accessScope} · Published: {d.date}
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={() => addToast(`Simulating download for ${d.title}...`, 'info')}
                    className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-lg text-xs font-semibold"
                  >
                    Download
                  </button>
                  <button
                    onClick={() => handleDelete(d.id, d.title)}
                    className="p-1.5 text-rose-500 hover:text-rose-700 rounded-lg"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
