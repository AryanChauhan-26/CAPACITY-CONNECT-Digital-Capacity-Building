import React from 'react';
import { useLowBandwidth } from '../../context/LowBandwidthContext';
import { useAuth } from '../../context/AuthContext';
import { Wifi, WifiOff, Eye, Volume2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GovHeader = () => {
  const { lowBandwidthMode, toggleLowBandwidth, fontSize, setFontSize, lang, setLang } = useLowBandwidth();
  const { currentUser, switchRole } = useAuth();

  return (
    <header className="w-full bg-white border-b border-slate-200 select-none">
      {/* 1. Indian National Flag Tri-color Stripe */}
      <div className="h-1 w-full flex">
        <div className="w-1/3 bg-[#FF9933]"></div>
        <div className="w-1/3 bg-white border-b border-t border-slate-200"></div>
        <div className="w-1/3 bg-[#138808]"></div>
      </div>

      {/* 2. Top Accessibility & National Utility Strip */}
      <div className="bg-slate-100 text-slate-700 text-[11px] border-b border-slate-200 py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Left: Official Identification */}
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-800">
              भारत सरकार | Government of India
            </span>
            <span className="text-slate-400 hidden sm:inline">|</span>
            <span className="text-slate-600 hidden md:inline">
              पृथ्वी विज्ञान मंत्रालय | Ministry of Earth Sciences
            </span>
          </div>

          {/* Right: Accessibility Controls & Bandwidth Toggle */}
          <div className="flex items-center flex-wrap gap-2.5 sm:gap-4 ml-auto">
            {/* Screen Reader Access link */}
            <span className="hidden lg:flex items-center gap-1 text-slate-600 hover:text-slate-900 cursor-pointer">
              <Volume2 className="w-3 h-3 text-slate-500" />
              <span>Screen Reader Access</span>
            </span>

            {/* Skip to Content */}
            <a href="#main-content" className="hidden sm:inline text-slate-600 hover:text-sky-700 font-medium">
              Skip to Main Content
            </a>

            <span className="text-slate-300 hidden sm:inline">|</span>

            {/* Font Size Adjuster */}
            <div className="flex items-center bg-white border border-slate-300 rounded px-1 py-0.5 gap-1 shadow-sm">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-1.5 rounded ${fontSize === 'normal' ? 'bg-sky-700 text-white font-bold' : 'text-slate-600 hover:text-slate-900'}`}
                title="Default Font Size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-1.5 rounded ${fontSize === 'large' ? 'bg-sky-700 text-white font-bold' : 'text-slate-600 hover:text-slate-900'}`}
                title="Large Font Size"
              >
                A+
              </button>
            </div>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="px-2 py-0.5 bg-white hover:bg-slate-50 border border-slate-300 rounded font-semibold text-slate-800 shadow-sm"
            >
              {lang === 'en' ? 'हिन्दी' : 'English'}
            </button>

            {/* Low-Bandwidth Mode Button */}
            <button
              onClick={toggleLowBandwidth}
              title="Toggle Low-Bandwidth Mode for remote/2G IMD observatories"
              className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded font-semibold border transition ${
                lowBandwidthMode
                  ? 'bg-amber-100 text-amber-900 border-amber-400 font-bold'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 shadow-sm'
              }`}
            >
              {lowBandwidthMode ? (
                <>
                  <WifiOff className="w-3 h-3 text-amber-700" />
                  <span>Low-Bandwidth (2G Active)</span>
                </>
              ) : (
                <>
                  <Wifi className="w-3 h-3 text-sky-600" />
                  <span>Low-Bandwidth Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Official Departmental Branding Banner (White Clean Background) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        
        {/* State Emblem of India + Ministry & Department Names */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/emblem-india.svg"
              alt="State Emblem of India"
              className="h-16 w-auto object-contain"
            />
            <div className="border-l border-slate-300 pl-3.5 space-y-0.5">
              <div className="text-[12px] sm:text-[13px] font-bold text-slate-800 tracking-wide font-serif">
                {lang === 'hi' ? 'भारत मौसम विज्ञान विभाग' : 'INDIA METEOROLOGICAL DEPARTMENT'}
              </div>
              <div className="text-[11px] sm:text-[12px] font-medium text-slate-600">
                {lang === 'hi' ? 'पृथ्वी विज्ञान मंत्रालय, भारत सरकार' : 'Ministry of Earth Sciences, Govt. of India'}
              </div>
              <div className="text-[10px] text-sky-800 font-semibold uppercase tracking-wider flex items-center gap-1">
                <span>Mausham Bhawan, Lodhi Road, New Delhi</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Portal Name & Mission Mausam Tag */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="text-lg sm:text-xl font-extrabold text-[#0c2340] tracking-tight font-['Outfit']">
              CAPACITY <span className="text-sky-700">CONNECT</span>
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              National Digital Capacity Building & LMS Portal
            </div>
          </div>

          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-50 to-teal-50 border border-sky-300 p-1 flex items-center justify-center shadow-sm">
            <img src="/imd-logo.svg" alt="IMD Logo" className="w-9 h-9 object-contain" />
          </div>
        </div>

      </div>
    </header>
  );
};
