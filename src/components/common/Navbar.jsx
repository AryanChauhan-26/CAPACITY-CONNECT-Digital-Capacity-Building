import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useLowBandwidth } from '../../context/LowBandwidthContext';
import {
  BookOpen,
  Compass,
  BarChart3,
  Award,
  ShieldAlert,
  Layers,
  Info,
  LogOut,
  User,
  Menu,
  X,
  FileCheck,
  Zap,
  Sparkles,
  ChevronDown
} from 'lucide-react';

export const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const { lowBandwidthMode } = useLowBandwidth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [presentationDropdownOpen, setPresentationDropdownOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  // Determine dashboard link based on role
  const getDashboardLink = () => {
    if (!currentUser) return '/login';
    if (currentUser.role === 'admin') return '/admin';
    if (currentUser.role === 'trainer') return '/trainer';
    return '/trainee';
  };

  const getDashboardLabel = () => {
    if (!currentUser) return 'Sign In';
    if (currentUser.role === 'admin') return 'National Admin Console';
    if (currentUser.role === 'trainer') return 'Trainer Console';
    return 'My Trainee Portal';
  };

  return (
    <nav className="bg-[#0b1e36] text-white sticky top-0 z-50 shadow-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Title */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400/20 to-teal-500/20 border border-sky-400/40 p-1 flex items-center justify-center shadow-inner group-hover:border-sky-400 transition">
              <img src="/imd-logo.svg" alt="IMD Logo" className="w-10 h-10 object-contain" />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0b1e36]"></div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white font-['Outfit'] flex items-center gap-1.5">
                  CAPACITY <span className="text-sky-400">CONNECT</span>
                </span>
                <span className="text-[10px] bg-sky-500/20 text-sky-300 font-semibold px-2 py-0.5 rounded-full border border-sky-400/30">
                  MoES · IMD
                </span>
              </div>
              <p className="text-xs text-slate-300 tracking-wide font-medium hidden sm:block">
                Digital Capacity Building & LMS Portal
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg transition ${
                isActive('/') ? 'bg-sky-500/20 text-sky-400 font-semibold' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              Home
            </Link>

            <Link
              to="/courses"
              className={`px-3 py-2 rounded-lg transition flex items-center gap-1.5 ${
                isActive('/courses') ? 'bg-sky-500/20 text-sky-400 font-semibold' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <BookOpen className="w-4 h-4 text-sky-400" />
              <span>Courses</span>
            </Link>

            {/* Differentiator 1 */}
            <Link
              to="/competency-mapping"
              className={`px-3 py-2 rounded-lg transition flex items-center gap-1.5 ${
                isActive('/competency-mapping') ? 'bg-sky-500/20 text-sky-400 font-semibold' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Competency Engine</span>
              <span className="text-[9px] bg-amber-400/20 text-amber-300 px-1 py-0.5 rounded font-mono uppercase">AI</span>
            </Link>

            {/* Differentiator 2 */}
            <Link
              to="/skill-matrix"
              className={`px-3 py-2 rounded-lg transition flex items-center gap-1.5 ${
                isActive('/skill-matrix') ? 'bg-sky-500/20 text-sky-400 font-semibold' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <BarChart3 className="w-4 h-4 text-teal-400" />
              <span>Skill Matrix & Readiness</span>
            </Link>

            {/* Public Certificate Verification */}
            <Link
              to="/verify-certificate"
              className={`px-3 py-2 rounded-lg transition flex items-center gap-1.5 ${
                isActive('/verify-certificate') ? 'bg-sky-500/20 text-sky-400 font-semibold' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <FileCheck className="w-4 h-4 text-emerald-400" />
              <span>Verify Cert</span>
            </Link>

            {/* Presentation Dropdown */}
            <div className="relative">
              <button
                onClick={() => setPresentationDropdownOpen(!presentationDropdownOpen)}
                onBlur={() => setTimeout(() => setPresentationDropdownOpen(false), 200)}
                className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 flex items-center gap-1.5"
              >
                <span>Hackathon Dossier</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {presentationDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-2 z-50 text-xs">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    SIH 2026 Presentation
                  </div>
                  <Link
                    to="/about"
                    className="flex items-center gap-2 px-3 py-2 hover:bg-slate-800 text-slate-200"
                  >
                    <Info className="w-4 h-4 text-sky-400" />
                    <div>
                      <div className="font-medium">About the Solution</div>
                      <div className="text-[10px] text-slate-400">Problem 26075 & 3-Tier Model</div>
                    </div>
                  </Link>
                  <Link
                    to="/architecture"
                    className="flex items-center gap-2 px-3 py-2 hover:bg-slate-800 text-slate-200"
                  >
                    <Layers className="w-4 h-4 text-purple-400" />
                    <div>
                      <div className="font-medium">System Architecture</div>
                      <div className="text-[10px] text-slate-400">Security & Cloud Layers</div>
                    </div>
                  </Link>
                  <Link
                    to="/impact"
                    className="flex items-center gap-2 px-3 py-2 hover:bg-slate-800 text-slate-200"
                  >
                    <Zap className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="font-medium">Impact & KPIs</div>
                      <div className="text-[10px] text-slate-400">Operational & Economic Gains</div>
                    </div>
                  </Link>
                  <Link
                    to="/risks"
                    className="flex items-center gap-2 px-3 py-2 hover:bg-slate-800 text-slate-200"
                  >
                    <ShieldAlert className="w-4 h-4 text-rose-400" />
                    <div>
                      <div className="font-medium">Risks & Mitigation</div>
                      <div className="text-[10px] text-slate-400">CERT-In & 2G Redundancy</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {currentUser ? (
              <div className="flex items-center gap-2.5">
                <Link
                  to={getDashboardLink()}
                  className="flex items-center gap-2 px-3.5 py-2 bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-500 hover:to-sky-600 text-white rounded-lg font-semibold text-xs transition shadow-sm border border-sky-400/30"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>{getDashboardLabel()}</span>
                </Link>

                <div className="relative group">
                  <div className="flex items-center gap-2 pl-2 border-l border-slate-700 cursor-pointer">
                    <img
                      src={currentUser.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
                      alt={currentUser.name}
                      className="w-8 h-8 rounded-full border border-sky-400/40 object-cover"
                    />
                    <div className="text-left hidden xl:block">
                      <div className="text-xs font-semibold text-white leading-tight">{currentUser.name}</div>
                      <div className="text-[10px] text-sky-300 capitalize">{currentUser.role} · {currentUser.center?.split(' ')[1] || 'IMD'}</div>
                    </div>
                  </div>

                  {/* Dropdown Logout */}
                  <div className="absolute right-0 top-full mt-2 w-48 bg-slate-900 border border-slate-700 rounded-xl shadow-xl py-1 hidden group-hover:block z-50">
                    <div className="px-3 py-2 border-b border-slate-800 text-xs">
                      <div className="font-semibold text-white">{currentUser.name}</div>
                      <div className="text-[11px] text-slate-400">{currentUser.employeeId}</div>
                    </div>
                    {currentUser.role === 'trainee' && (
                      <Link to="/trainee/profile" className="block px-3 py-2 text-xs text-slate-300 hover:bg-slate-800">
                        Professional Skill Profile
                      </Link>
                    )}
                    {currentUser.role === 'trainee' && (
                      <Link to="/trainee/certificates" className="block px-3 py-2 text-xs text-slate-300 hover:bg-slate-800">
                        My Verifiable Certificates
                      </Link>
                    )}
                    <button
                      onClick={logout}
                      className="w-full text-left px-3 py-2 text-xs text-rose-400 hover:bg-slate-800 flex items-center gap-1.5"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-3 py-1.5 text-xs text-slate-300 hover:text-white font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-3.5 py-1.5 text-xs bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-semibold shadow-sm transition"
                >
                  Register Station Personnel
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to={getDashboardLink()}
              className="px-2.5 py-1 bg-sky-600 text-white rounded text-xs font-semibold"
            >
              {currentUser ? 'Portal' : 'Login'}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 text-sm">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-sky-400"
          >
            Home
          </Link>
          <Link
            to="/courses"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-200 hover:text-sky-400"
          >
            Course Catalog
          </Link>
          <Link
            to="/competency-mapping"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-amber-300 hover:text-amber-200 font-medium"
          >
            ★ Smart Competency Mapping Engine
          </Link>
          <Link
            to="/skill-matrix"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-teal-300 hover:text-teal-200 font-medium"
          >
            ★ Automated Skill Matrix & Readiness Index
          </Link>
          <Link
            to="/verify-certificate"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-emerald-300 hover:text-emerald-200 font-medium"
          >
            Verifiable Certificate Check
          </Link>
          <div className="pt-2 border-t border-slate-800">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider py-1">
              Hackathon Presentation
            </div>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-xs text-slate-300">
              About the Solution (Problem 26075)
            </Link>
            <Link to="/architecture" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-xs text-slate-300">
              Architecture (Client → Core → Data)
            </Link>
            <Link to="/impact" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-xs text-slate-300">
              Impact & Benefits (₹14.2 Cr Saved)
            </Link>
            <Link to="/risks" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-xs text-slate-300">
              Risks & Mitigation Matrix
            </Link>
          </div>
          {currentUser && (
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <div>
                <div className="font-semibold text-white">{currentUser.name}</div>
                <div className="text-xs text-slate-400">{currentUser.designation}</div>
              </div>
              <button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="px-3 py-1 bg-rose-600/20 text-rose-300 text-xs rounded border border-rose-500/30"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};
