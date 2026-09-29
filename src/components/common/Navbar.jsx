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
    <nav className="bg-[#0c2340] text-white sticky top-0 z-50 shadow-md border-b-2 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Main Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 text-xs font-semibold tracking-wide">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md transition flex items-center gap-1.5 ${
                isActive('/') ? 'bg-[#1e3a66] text-amber-300 font-bold border-b-2 border-amber-400' : 'text-slate-200 hover:bg-[#15345d] hover:text-white'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>

            <Link
              to="/courses"
              className={`px-3 py-2 rounded-md transition flex items-center gap-1.5 ${
                isActive('/courses') ? 'bg-[#1e3a66] text-amber-300 font-bold border-b-2 border-amber-400' : 'text-slate-200 hover:bg-[#15345d] hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-sky-400" />
              <span>Courses Catalog</span>
            </Link>

            {/* Differentiator 1 */}
            <Link
              to="/competency-mapping"
              className={`px-3 py-2 rounded-md transition flex items-center gap-1.5 ${
                isActive('/competency-mapping') ? 'bg-[#1e3a66] text-amber-300 font-bold border-b-2 border-amber-400' : 'text-slate-200 hover:bg-[#15345d] hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Competency Mapping</span>
            </Link>

            {/* Differentiator 2 */}
            <Link
              to="/skill-matrix"
              className={`px-3 py-2 rounded-md transition flex items-center gap-1.5 ${
                isActive('/skill-matrix') ? 'bg-[#1e3a66] text-amber-300 font-bold border-b-2 border-amber-400' : 'text-slate-200 hover:bg-[#15345d] hover:text-white'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5 text-teal-400" />
              <span>Skill Matrix & Readiness</span>
            </Link>

            {/* Public Certificate Registry */}
            <Link
              to="/verify-certificate"
              className={`px-3 py-2 rounded-md transition flex items-center gap-1.5 ${
                isActive('/verify-certificate') ? 'bg-[#1e3a66] text-amber-300 font-bold border-b-2 border-amber-400' : 'text-slate-200 hover:bg-[#15345d] hover:text-white'
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
                className="px-3 py-2 rounded-md text-slate-200 hover:bg-[#15345d] hover:text-white flex items-center gap-1.5 transition"
              >
                <span>SIH 2026 Dossier</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {dossierOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white text-slate-800 border border-slate-200 rounded-lg shadow-xl py-1.5 z-50 text-xs font-normal">
                  <Link to="/about" className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100">
                    <Info className="w-4 h-4 text-sky-700" />
                    <span>About Solution (Problem 26075)</span>
                  </Link>
                  <Link to="/architecture" className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100">
                    <Layers className="w-4 h-4 text-purple-700" />
                    <span>System Architecture</span>
                  </Link>
                  <Link to="/impact" className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100">
                    <Zap className="w-4 h-4 text-amber-600" />
                    <span>Impact & Fiscal Savings</span>
                  </Link>
                  <Link to="/risks" className="flex items-center gap-2 px-3 py-2 hover:bg-slate-100">
                    <ShieldAlert className="w-4 h-4 text-rose-600" />
                    <span>Risks & Mitigation Matrix</span>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Action: Role Dashboard & Login */}
          <div className="hidden sm:flex items-center gap-3">
            {currentUser ? (
              <div className="flex items-center gap-2">
                <Link
                  to={getDashboardLink()}
                  className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded text-xs transition shadow-sm flex items-center gap-1.5"
                >
                  <User className="w-3.5 h-3.5 text-slate-950" />
                  <span>{getDashboardLabel()}</span>
                </Link>

                <div className="relative group">
                  <div className="flex items-center gap-2 pl-2 border-l border-slate-700 cursor-pointer">
                    <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-400 flex items-center justify-center text-xs font-bold text-white">
                      {currentUser.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div className="text-left hidden xl:block">
                      <div className="text-xs font-semibold text-white leading-tight">{currentUser.name}</div>
                      <div className="text-[10px] text-amber-300 capitalize font-medium">{currentUser.role} · {currentUser.center?.split(' ')[1] || 'IMD'}</div>
                    </div>
                  </div>

                  <div className="absolute right-0 top-full mt-1 w-44 bg-white text-slate-800 border border-slate-200 rounded-lg shadow-xl py-1 hidden group-hover:block z-50 text-xs">
                    <div className="px-3 py-2 border-b border-slate-100 font-semibold text-slate-900">
                      {currentUser.name}
                    </div>
                    {currentUser.role === 'trainee' && (
                      <>
                        <Link to="/trainee/profile" className="block px-3 py-2 hover:bg-slate-50 text-slate-700">
                          My Profile
                        </Link>
                        <Link to="/trainee/certificates" className="block px-3 py-2 hover:bg-slate-50 text-slate-700">
                          My Certificates
                        </Link>
                      </>
                    )}
                    <button
                      onClick={logout}
                      className="w-full text-left px-3 py-2 text-rose-600 hover:bg-rose-50 flex items-center gap-1.5"
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
                  className="px-3 py-1.5 text-xs text-white hover:text-amber-300 font-semibold"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-3.5 py-1.5 text-xs bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded shadow-sm transition"
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
              className="px-2.5 py-1 bg-amber-500 text-slate-950 rounded text-xs font-bold"
            >
              {currentUser ? 'Portal' : 'Login'}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1c33] border-t border-slate-700 px-4 py-3 space-y-2 text-xs font-medium">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-slate-200">
            Home
          </Link>
          <Link to="/courses" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-slate-200">
            Course Catalog
          </Link>
          <Link to="/competency-mapping" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-amber-300 font-semibold">
            Competency Mapping Engine
          </Link>
          <Link to="/skill-matrix" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-teal-300 font-semibold">
            Skill Matrix & Readiness Index
          </Link>
          <Link to="/verify-certificate" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-emerald-300 font-semibold">
            Verify Certificate
          </Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-slate-300">
            About the Solution (Problem 26075)
          </Link>
        </div>
      )}
    </nav>
  );
};
