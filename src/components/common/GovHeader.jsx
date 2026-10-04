import React from 'react';
import { useLowBandwidth } from '../../context/LowBandwidthContext';
import { useAuth } from '../../context/AuthContext';
import { Wifi, WifiOff, Eye, Volume2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GovHeader = () => {
  const { lowBandwidthMode, toggleLowBandwidth, fontSize, setFontSize, lang, setLang } = useLowBandwidth();

  return (
    <header className="w-full bg-white border-b border-slate-200 select-none transition-colors">
      {/* 1. Indian National Flag Tri-color Stripe */}
      <div className="h-1 w-full flex">
        <div className="w-1/3 bg-[#FF9933]"></div>
        <div className="w-1/3 bg-white border-b border-t border-slate-100"></div>
        <div className="w-1/3 bg-[#138808]"></div>
      </div>

      {/* 2. Top Accessibility & Utility Bar */}
      <div className="bg-slate-50/90 text-slate-600 text-xs border-b border-slate-200/80 py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Left: Official Identification */}
          <div className="flex items-center gap-2.5 text-[11px] sm:text-xs">
            <span className="font-semibold text-slate-800">
              भारत सरकार <span className="font-normal text-slate-400">|</span> Government of India
            </span>
            <span className="text-slate-300 hidden md:inline">|</span>
            <span className="text-slate-500 hidden md:inline font-medium">
              पृथ्वी विज्ञान मंत्रालय <span className="font-normal text-slate-400">|</span> Ministry of Earth Sciences
            </span>
          </div>

          {/* Right: Accessibility & Utility Controls */}
          <div className="flex items-center gap-2.5 ml-auto text-xs">
            {/* Screen Reader Access link */}
            <span className="hidden lg:flex items-center gap-1 text-slate-500 hover:text-slate-900 cursor-pointer text-[11px] transition">
              <Volume2 className="w-3 h-3 text-slate-400" />
              <span>Screen Reader</span>
            </span>

            {/* Skip to Content */}
            <a href="#main-content" className="hidden sm:inline text-slate-500 hover:text-sky-700 text-[11px] transition">
              Skip to Content
            </a>

            <span className="text-slate-200 hidden sm:inline">|</span>

            {/* Font Size Adjuster */}
            <div className="inline-flex items-center bg-white border border-slate-200 rounded-md p-0.5 shadow-xs">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-1.5 py-0.5 text-[11px] rounded transition ${
                  fontSize === 'normal' ? 'bg-[#0c2340] text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Default Font Size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-1.5 py-0.5 text-[11px] rounded transition ${
                  fontSize === 'large' ? 'bg-[#0c2340] text-white font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Large Font Size"
              >
                A+
              </button>
            </div>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="px-2 py-0.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-md text-[11px] font-semibold text-slate-700 shadow-xs transition"
            >
              {lang === 'en' ? 'हिन्दी' : 'English'}
            </button>

            {/* Low-Bandwidth Mode Button */}
            <button
              onClick={toggleLowBandwidth}
              title="Toggle Low-Bandwidth Mode for remote/2G IMD observatories"
              className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-medium border transition ${
                lowBandwidthMode
                  ? 'bg-amber-100 text-amber-900 border-amber-300 font-semibold'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 shadow-xs'
              }`}
            >
              {lowBandwidthMode ? (
                <>
                  <WifiOff className="w-3 h-3 text-amber-700" />
                  <span>2G Active</span>
                </>
              ) : (
                <>
                  <Wifi className="w-3 h-3 text-sky-600" />
                  <span className="hidden sm:inline">Low Bandwidth</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Official Departmental Branding Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
        
        {/* State Emblem of India + Ministry & Department Names */}
        <div className="flex items-center gap-3.5">
          <Link to="/" className="flex items-center gap-3.5 group">
            <img
              src="/emblem-india.svg"
              alt="State Emblem of India"
              className="h-13 w-auto object-contain transition group-hover:opacity-90"
            />
            <div className="border-l border-slate-200 pl-3.5 space-y-0.5">
              <div className="text-xs sm:text-sm font-bold text-slate-900 tracking-wide">
                {lang === 'hi' ? 'भारत मौसम विज्ञान विभाग' : 'INDIA METEOROLOGICAL DEPARTMENT'}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 font-medium">
                {lang === 'hi' ? 'पृथ्वी विज्ञान मंत्रालय, भारत सरकार' : 'Ministry of Earth Sciences, Government of India'}
              </div>
            </div>
          </Link>
        </div>

        {/* Portal Name & IMD Logo */}
        <div className="flex items-center gap-3 ml-auto sm:ml-0">
          <div className="text-right hidden sm:block">
            <div className="text-base sm:text-lg font-bold text-[#0c2340] tracking-tight font-['Outfit']">
              CAPACITY <span className="text-sky-600">CONNECT</span>
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              National Digital Capacity Building & LMS
            </div>
          </div>

          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 p-1.5 flex items-center justify-center shadow-xs">
            <img src="/imd-logo.svg" alt="IMD Logo" className="w-7 h-7 object-contain" />
          </div>
        </div>

      </div>
    </header>
  );
};
