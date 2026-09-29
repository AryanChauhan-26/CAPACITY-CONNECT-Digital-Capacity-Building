import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { IMD_CENTERS } from '../data/mockData';
import {
  Lock,
  Mail,
  User,
  Building,
  Briefcase,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  KeyRound
} from 'lucide-react';

export const AuthPage = ({ initialMode = 'login' }) => {
  const { login, registerUser, currentUser, addToast } = useAuth();
  const navigate = useNavigate();

  const [mode, setMode] = useState(initialMode); // 'login' or 'register'
  const [loginEmail, setLoginEmail] = useState('ramesh.sharma@imd.gov.in');
  const [loginPassword, setLoginPassword] = useState('password123');

  // Registration Form State
  const [regData, setRegData] = useState({
    name: '',
    email: '',
    employeeId: 'IMD-2026-',
    center: 'Meteorological Centre Pune',
    stationCode: 'PUN-07',
    designation: 'Scientific Assistant',
    department: 'Radar Meteorology Division',
    qualification: 'M.Sc. Atmospheric Science / Physics',
    experienceYears: 2,
    role: 'trainee'
  });

  const [regSuccessMessage, setRegSuccessMessage] = useState(null);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const result = login(loginEmail, loginPassword);
    if (result.success) {
      if (result.user.role === 'admin') navigate('/admin');
      else if (result.user.role === 'trainer') navigate('/trainer');
      else navigate('/trainee');
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!regData.name || !regData.email) {
      addToast('Please complete all required fields', 'error');
      return;
    }
    const result = registerUser(regData);
    if (result.success) {
      setRegSuccessMessage({
        name: regData.name,
        email: regData.email,
        employeeId: regData.employeeId,
        center: regData.center
      });
    }
  };

  // Quick Demo Auto-fill helpers
  const fillDemoAccount = (role) => {
    if (role === 'trainee') {
      setLoginEmail('ramesh.sharma@imd.gov.in');
      setLoginPassword('password123');
      setMode('login');
      addToast('Loaded credentials for Trainee Dr. Ramesh Sharma (MC Pune)', 'info');
    } else if (role === 'trainer') {
      setLoginEmail('sangeeta.rao@imd.gov.in');
      setLoginPassword('password123');
      setMode('login');
      addToast('Loaded credentials for Trainer Dr. Sangeeta Rao (IMD HQ)', 'info');
    } else if (role === 'admin') {
      setLoginEmail('director.training@moes.gov.in');
      setLoginPassword('password123');
      setMode('login');
      addToast('Loaded credentials for Admin Shri Vikramaditya Sen (MoES)', 'info');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
        
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-[#081426] via-[#0b1e36] to-[#0d3880] p-8 text-white text-center">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-sky-500/20 p-2 flex items-center justify-center border border-sky-400/40 shadow-inner mb-3">
            <img src="/imd-logo.svg" alt="IMD Logo" className="w-10 h-10 object-contain" />
          </div>
          <h2 className="text-2xl font-black font-['Outfit'] tracking-tight">
            CAPACITY CONNECT ACCESS PORTAL
          </h2>
          <p className="text-xs text-slate-300 max-w-md mx-auto mt-1">
            Government of India · Ministry of Earth Sciences · India Meteorological Department
          </p>

          {/* Quick Demo Fill Buttons Bar */}
          <div className="mt-4 pt-4 border-t border-slate-700/60 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-slate-400 font-mono text-[11px]">Judge Quick Login:</span>
            <button
              type="button"
              onClick={() => fillDemoAccount('trainee')}
              className="px-2.5 py-1 bg-sky-600/80 hover:bg-sky-600 text-white rounded text-[11px] font-semibold transition"
            >
              🎓 Dr. Ramesh (Trainee)
            </button>
            <button
              type="button"
              onClick={() => fillDemoAccount('trainer')}
              className="px-2.5 py-1 bg-teal-600/80 hover:bg-teal-600 text-white rounded text-[11px] font-semibold transition"
            >
              👨‍🏫 Dr. Sangeeta (Trainer)
            </button>
            <button
              type="button"
              onClick={() => fillDemoAccount('admin')}
              className="px-2.5 py-1 bg-purple-600/80 hover:bg-purple-600 text-white rounded text-[11px] font-semibold transition"
            >
              🛡️ Dir. Vikram (Admin)
            </button>
          </div>
        </div>

        {/* Tab Toggle: Login vs Register */}
        <div className="flex border-b border-slate-200">
          <button
            onClick={() => {
              setMode('login');
              setRegSuccessMessage(null);
            }}
            className={`flex-1 py-3.5 text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 border-b-2 ${
              mode === 'login'
                ? 'border-sky-600 text-sky-600 bg-sky-50/40'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <KeyRound className="w-4 h-4" />
            <span>Secure IMD Login</span>
          </button>
          <button
            onClick={() => {
              setMode('register');
              setRegSuccessMessage(null);
            }}
            className={`flex-1 py-3.5 text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 border-b-2 ${
              mode === 'register'
                ? 'border-sky-600 text-sky-600 bg-sky-50/40'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Register Station Personnel (Pending Approval)</span>
          </button>
        </div>

        <div className="p-8">
          {mode === 'login' ? (
            /* Login Form */
            <form onSubmit={handleLoginSubmit} className="max-w-md mx-auto space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Official Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="name@imd.gov.in"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Password / Passcode
                  </label>
                  <a
                    href="#forgot"
                    onClick={(e) => {
                      e.preventDefault();
                      addToast('Self-service OTP password reset link dispatched to registered IMD NIC mail.', 'info');
                    }}
                    className="text-[11px] text-sky-600 hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600 text-white font-bold rounded-xl text-sm transition shadow-md flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Authenticate & Enter Workspace</span>
                </button>
              </div>

              <div className="pt-4 text-center text-xs text-slate-500">
                Protected under National Informatics Centre (NIC) Single Sign-On and CERT-In guidelines.
              </div>
            </form>
          ) : (
            /* Registration Form */
            <div>
              {regSuccessMessage ? (
                <div className="max-w-md mx-auto p-6 bg-emerald-50 border border-emerald-300 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-base font-bold text-emerald-900">
                    Registration Submitted for Verification!
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Applicant <span className="font-bold">{regSuccessMessage.name}</span> ({regSuccessMessage.employeeId}) has been registered for <span className="font-bold">{regSuccessMessage.center}</span>.
                  </p>
                  <div className="p-3 bg-white rounded-xl border border-emerald-200 text-xs text-amber-800 text-left">
                    <div className="font-bold mb-1 flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 text-amber-600" />
                      <span>Current Status: Pending Approval</span>
                    </div>
                    <span>
                      As required by MoES Security Policy, your application has been forwarded to the National Capacity Building Director. You can switch to the <strong>Admin role</strong> to approve this application.
                    </span>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => setMode('login')}
                      className="px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-semibold"
                    >
                      Return to Sign In
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name & Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={regData.name}
                        onChange={(e) => setRegData({ ...regData, name: e.target.value })}
                        placeholder="e.g. Dr. Alok Kumar"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Govt Email Address (@imd.gov.in / @moes.gov.in) *
                      </label>
                      <input
                        type="email"
                        required
                        value={regData.email}
                        onChange={(e) => setRegData({ ...regData, email: e.target.value })}
                        placeholder="alok.kumar@imd.gov.in"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Employee ID / Roll No *
                      </label>
                      <input
                        type="text"
                        required
                        value={regData.employeeId}
                        onChange={(e) => setRegData({ ...regData, employeeId: e.target.value })}
                        placeholder="IMD-2026-XXXX"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Assigned Centre / Station *
                      </label>
                      <select
                        value={regData.center}
                        onChange={(e) => setRegData({ ...regData, center: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-sky-500"
                      >
                        {IMD_CENTERS.map((c) => (
                          <option key={c.id} value={c.name}>
                            {c.name} ({c.region})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Designation *
                      </label>
                      <input
                        type="text"
                        required
                        value={regData.designation}
                        onChange={(e) => setRegData({ ...regData, designation: e.target.value })}
                        placeholder="e.g. Scientific Assistant / Meteorologist-B"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Department / Cell
                      </label>
                      <input
                        type="text"
                        value={regData.department}
                        onChange={(e) => setRegData({ ...regData, department: e.target.value })}
                        placeholder="Radar Cell / NWP / Severe Weather"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Academic Qualification & Research Background
                    </label>
                    <input
                      type="text"
                      value={regData.qualification}
                      onChange={(e) => setRegData({ ...regData, qualification: e.target.value })}
                      placeholder="M.Sc. Atmospheric Science, IIT / B.Tech Electronics"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-bold rounded-xl text-xs sm:text-sm transition shadow-md flex items-center justify-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Submit Station Application for Admin Approval</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
