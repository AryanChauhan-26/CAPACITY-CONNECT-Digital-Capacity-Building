import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  User,
  Building,
  GraduationCap,
  Briefcase,
  Award,
  BarChart2,
  CheckCircle2,
  Plus,
  Trash2,
  Save,
  Sparkles,
  AlertTriangle
} from 'lucide-react';

export const TraineeProfilePage = () => {
  const { currentUser, addToast } = useAuth();

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: currentUser?.name || 'Dr. Ramesh Sharma',
    designation: currentUser?.designation || 'Meteorologist-B',
    center: currentUser?.center || 'Meteorological Centre Pune',
    department: currentUser?.department || 'Radar Meteorology Division',
    experienceYears: currentUser?.experienceYears || 6,
    qualifications: currentUser?.qualifications || [
      'M.Sc. Physics (Atmospheric Sciences), Pune University',
      'Ph.D. Radar Meteorology, IIT Delhi'
    ],
    domainInterests: currentUser?.domainInterests || [
      'Doppler Radar',
      'Nowcasting',
      'Severe Convection',
      'NWP Validation'
    ],
    skills: currentUser?.skills || [
      { name: 'Doppler Radar (DWR) Analysis', level: 85 },
      { name: 'NWP WRF Modeling', level: 68 },
      { name: 'Satellite Nowcasting', level: 92 },
      { name: 'Tropical Cyclone Tracking', level: 60 },
      { name: 'AWS Sensor Calibration', level: 75 }
    ]
  });

  const [newQual, setNewQual] = useState('');
  const [newInterest, setNewInterest] = useState('');

  const handleSave = () => {
    setIsEditing(false);
    addToast('Professional skill profile updated successfully!', 'success');
  };

  const handleAddQualification = (e) => {
    e.preventDefault();
    if (!newQual.trim()) return;
    setProfileData({
      ...profileData,
      qualifications: [...profileData.qualifications, newQual.trim()]
    });
    setNewQual('');
  };

  const handleRemoveQualification = (idx) => {
    setProfileData({
      ...profileData,
      qualifications: profileData.qualifications.filter((_, i) => i !== idx)
    });
  };

  const handleAddInterest = (e) => {
    e.preventDefault();
    if (!newInterest.trim()) return;
    setProfileData({
      ...profileData,
      domainInterests: [...profileData.domainInterests, newInterest.trim()]
    });
    setNewInterest('');
  };

  const handleSkillChange = (idx, newLevel) => {
    const updated = [...profileData.skills];
    updated[idx].level = Number(newLevel);
    setProfileData({ ...profileData, skills: updated });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#081426] via-[#0b1e36] to-[#0f3460] text-white p-6 sm:p-8 rounded-3xl border border-slate-700 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
            alt="Profile Avatar"
            className="w-16 h-16 rounded-2xl border-2 border-sky-400 object-cover shadow"
          />
          <div>
            <h1 className="text-xl sm:text-2xl font-black font-['Outfit']">{profileData.name}</h1>
            <p className="text-xs text-sky-200 mt-0.5">
              {profileData.designation} · {profileData.center}
            </p>
            <div className="text-[11px] text-slate-300 font-mono mt-1">
              Employee ID: {currentUser?.employeeId || 'IMD-2021-9482'}
            </div>
          </div>
        </div>

        <div>
          {isEditing ? (
            <button
              onClick={handleSave}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition shadow flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold transition shadow flex items-center gap-2"
            >
              <span>Edit Profile</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Grid: Details on Left (7 cols), Competencies & Gap View on Right (5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (7 cols): Qualifications, History, Interests */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Work Experience & Postings */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-sky-600" />
              <span>Operational Experience & Station Postings</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-500 block text-[11px] uppercase tracking-wider">Years of Service</span>
                <span className="font-bold text-slate-900 text-sm">{profileData.experienceYears} Years (Joined 2021)</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px] uppercase tracking-wider">Current Department</span>
                <span className="font-bold text-slate-900 text-sm">{profileData.department}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <div className="text-xs font-semibold text-slate-700 mb-2">Posting History:</div>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                  <div>
                    <span className="font-bold text-slate-800">MC Pune (2023 - Present):</span> Radar Meteorology Division, lead for dual-pol data quality control.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-slate-400 mt-1.5 shrink-0"></span>
                  <div>
                    <span className="font-bold text-slate-800">RMC New Delhi HQ (2021 - 2023):</span> Satellite Nowcasting Cell & INSAT-3DR data assimilation trainee.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Academic Qualifications */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-sky-600" />
              <span>Verified Qualifications & Degrees</span>
            </h3>

            <div className="space-y-2">
              {profileData.qualifications.map((q, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs"
                >
                  <span className="font-medium text-slate-800">{q}</span>
                  {isEditing && (
                    <button
                      onClick={() => handleRemoveQualification(idx)}
                      className="text-rose-500 hover:text-rose-700 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {isEditing && (
              <form onSubmit={handleAddQualification} className="flex gap-2 pt-2">
                <input
                  type="text"
                  placeholder="Add Degree / Certification (e.g. M.Sc. Physics)"
                  value={newQual}
                  onChange={(e) => setNewQual(e.target.value)}
                  className="flex-1 px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-sky-600 text-white rounded-lg text-xs font-semibold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add
                </button>
              </form>
            )}
          </div>

          {/* Domain Interests */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Domain Interests & Research Focus</span>
            </h3>

            <div className="flex flex-wrap items-center gap-2">
              {profileData.domainInterests.map((interest, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-sky-50 text-sky-800 rounded-full text-xs font-semibold border border-sky-200"
                >
                  {interest}
                </span>
              ))}
            </div>

            {isEditing && (
              <form onSubmit={handleAddInterest} className="flex gap-2 pt-2">
                <input
                  type="text"
                  placeholder="Add interest (e.g. Numerical Weather Prediction)"
                  value={newInterest}
                  onChange={(e) => setNewInterest(e.target.value)}
                  className="flex-1 px-3 py-1.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-sky-600 text-white rounded-lg text-xs font-semibold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Add
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Right Column (5 cols): Dynamic Competency Sliders & Gap View */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-teal-600" />
                <span>Assessed Competencies</span>
              </h3>
              <span className="text-[10px] text-slate-400 font-mono">0 - 100%</span>
            </div>

            <div className="space-y-4">
              {profileData.skills.map((skill, idx) => (
                <div key={idx} className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center text-slate-800 font-medium">
                    <span>{skill.name}</span>
                    <span className="font-mono font-bold text-sky-800">{skill.level}%</span>
                  </div>

                  {isEditing ? (
                    <input
                      type="range"
                      min="30"
                      max="100"
                      value={skill.level}
                      onChange={(e) => handleSkillChange(idx, e.target.value)}
                      className="w-full accent-sky-600"
                    />
                  ) : (
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          skill.level >= 85
                            ? 'bg-emerald-500'
                            : skill.level >= 70
                            ? 'bg-sky-500'
                            : 'bg-amber-500'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Gap Analysis Box */}
            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-2 text-xs text-amber-900">
              <div className="font-bold flex items-center gap-1.5 text-amber-950">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Executive Skill Gap Analysis</span>
              </div>
              <p className="text-[11px] leading-relaxed text-amber-800">
                Based on your station posting at MC Pune and MoES Monsoon directives:
              </p>
              <ul className="list-disc list-inside text-[11px] space-y-1 text-amber-800">
                <li>
                  <strong>Cyclone Tracking (60%):</strong> Deficit of 15% against coastal emergency protocols.
                </li>
                <li>
                  <strong>NWP WRF Modeling (68%):</strong> Deficit of 7% against high-performance computing readiness.
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
