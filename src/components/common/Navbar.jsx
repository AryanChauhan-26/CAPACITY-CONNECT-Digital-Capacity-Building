import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  BookOpen,
  BarChart3,
  Sparkles,
  FileCheck,
  ChevronDown,
  User,
  LogOut,
  Menu,
  X,
  Home,
  Info,
  Layers,
  Zap,
  ShieldAlert
} from 'lucide-react';

export const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dossierOpen, setDossierOpen] = useState(false);

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
    if (currentUser.role === 'admin') return 'Admin Console';
    if (currentUser.role === 'trainer') return 'Trainer Console';
    return 'My Trainee Portal';
  };

  return (
    <nav className="bg-[#0c2340] text-white sticky top-0 z-50 shadow-sm border-b border-slate-700/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-13">
          
          {/* Main Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5 text-xs font-medium">
            <Link
              to="/"
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                isActive('/') ? 'bg-white/15 text-white font-semibold shadow-xs' : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Home className="w-3.5 h-3.5 text-sky-400" />
              <span>Home</span>
            </Link>

            <Link
              to="/courses"
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                isActive('/courses') ? 'bg-white/15 text-white font-semibold shadow-xs' : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-sky-400" />
              <span>Courses</span>
            </Link>

            {/* Differentiator 1 */}
            <Link
              to="/competency-mapping"
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                isActive('/competency-mapping') ? 'bg-white/15 text-white font-semibold shadow-xs' : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Competency AI</span>
            </Link>

            {/* Differentiator 2 */}
            <Link
              to="/skill-matrix"
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                isActive('/skill-matrix') ? 'bg-white/15 text-white font-semibold shadow-xs' : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5 text-teal-300" />
              <span>Skill Matrix</span>
            </Link>

            {/* Public Certificate Registry */}
            <Link
              to="/verify-certificate"
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                isActive('/verify-certificate') ? 'bg-white/15 text-white font-semibold shadow-xs' : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verify Certificate</span>
            </Link>

            {/* SIH Presentation Dossier */}
            <div className="relative">
              <button
                onClick={() => setDossierOpen(!dossierOpen)}
                onBlur={() => setTimeout(() => setDossierOpen(false), 200)}
                className="px-3 py-1.5 rounded-lg text-slate-300 hover:bg-white/10 hover:text-white flex items-center gap-1.5 transition-all"
              >
                <span>Documentation</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {dossierOpen && (
                <div className="absolute top-full left-0 mt-1.5 w-56 bg-white text-slate-800 border border-slate-200 rounded-xl shadow-xl py-1.5 z-50 text-xs font-normal">
                  <div className="px-3 py-1 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Institutional Dossier
                  </div>
                  <Link to="/about" className="flex items-center gap-2.5 px-3 py-2 hover:bg-slate-50 transition">
                    <Info className="w-4 h-4 text-sky-600" />
                    <span className="font-medium text-slate-700">Problem 26075 Context</span>
                  </Link>
                  <Link to="/architecture" className="flex items-center gap-2.5 px-3 py-2 hover:bg-slate-50 transition">
                    <Layers className="w-4 h-4 text-purple-600" />
                    <span className="font-medium text-slate-700">System Architecture</span>
                  </Link>
                  <Link to="/impact" className="flex items-center gap-2.5 px-3 py-2 hover:bg-slate-50 transition">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span className="font-medium text-slate-700">Impact & Fiscal Metrics</span>
                  </Link>
                  <Link to="/risks" className="flex items-center gap-2.5 px-3 py-2 hover:bg-slate-50 transition">
                    <ShieldAlert className="w-4 h-4 text-rose-500" />
                    <span className="font-medium text-slate-700">Security & Risk Matrix</span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Action: Role Dashboard & Login */}
          <div className="hidden sm:flex items-center gap-3">
            {currentUser ? (
              <div className="flex items-center gap-2.5">
                <Link
                  to={getDashboardLink()}
                  className="px-3.5 py-1.5 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg text-xs transition shadow-xs flex items-center gap-1.5"
                >
                  <User className="w-3.5 h-3.5 text-white" />
                  <span>{getDashboardLabel()}</span>
                </Link>

                <div className="relative group">
                  <div className="flex items-center gap-2 pl-2 border-l border-slate-700/80 cursor-pointer">
                    <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-[11px] font-bold text-slate-200">
                      {currentUser.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div className="text-left hidden xl:block">
                      <div className="text-xs font-medium text-white leading-tight">{currentUser.name}</div>
                      <div className="text-[10px] text-slate-400 capitalize">{currentUser.role}</div>
                    </div>
                  </div>

                  <div className="absolute right-0 top-full mt-1.5 w-48 bg-white text-slate-800 border border-slate-200 rounded-xl shadow-xl py-1.5 hidden group-hover:block z-50 text-xs">
                    <div className="px-3 py-2 border-b border-slate-100">
                      <div className="font-semibold text-slate-900">{currentUser.name}</div>
                      <div className="text-[10px] text-slate-500 capitalize">{currentUser.role} · {currentUser.center}</div>
                    </div>
                    {currentUser.role === 'trainee' && (
                      <>
                        <Link to="/trainee/profile" className="block px-3 py-2 hover:bg-slate-50 text-slate-700 transition">
                          My Profile
                        </Link>
                        <Link to="/trainee/certificates" className="block px-3 py-2 hover:bg-slate-50 text-slate-700 transition">
                          My Certificates
                        </Link>
                      </>
                    )}
                    <button
                      onClick={logout}
                      className="w-full text-left px-3 py-2 text-rose-600 hover:bg-rose-50 flex items-center gap-1.5 transition"
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
                  className="px-3 py-1.5 text-xs text-slate-300 hover:text-white font-medium transition"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-3.5 py-1.5 text-xs bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg shadow-xs transition"
                >
                  Register Personnel
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to={getDashboardLink()}
              className="px-2.5 py-1 bg-sky-600 text-white rounded-md text-xs font-semibold"
            >
              {currentUser ? 'Portal' : 'Login'}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1c33] border-t border-slate-800 px-4 py-3 space-y-1.5 text-xs font-medium">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-slate-200">
            Home
          </Link>
          <Link to="/courses" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-slate-200">
            Course Catalog
          </Link>
          <Link to="/competency-mapping" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-amber-300 font-semibold">
            Competency AI
          </Link>
          <Link to="/skill-matrix" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-teal-300 font-semibold">
            Skill Matrix & Readiness
          </Link>
          <Link to="/verify-certificate" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-emerald-300 font-semibold">
            Verify Certificate
          </Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-slate-300">
            Documentation Dossier
          </Link>
        </div>
      )}
    </nav>
  );
};
