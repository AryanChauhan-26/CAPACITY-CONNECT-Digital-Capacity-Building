import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { MOCK_ANNOUNCEMENTS } from '../data/mockData';
import {
  Sparkles,
  Bell,
  Plus,
  Trash2,
  CheckCircle2,
  Calendar,
  AlertCircle
} from 'lucide-react';

export const HomepageManagerPage = () => {
  const { addToast } = useAuth();
  const [announcements, setAnnouncements] = useState(MOCK_ANNOUNCEMENTS);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Directive');
  const [priority, setPriority] = useState('High');
  const [content, setContent] = useState('');

  const handleAddAnnouncement = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      addToast('Please enter announcement title and body', 'error');
      return;
    }

    const newAnn = {
      id: `ann-${Date.now()}`,
      title: title.trim(),
      date: new Date().toISOString().split('T')[0],
      category,
      priority,
      content: content.trim()
    };

    setAnnouncements([newAnn, ...announcements]);
    setTitle('');
    setContent('');
    addToast('Published announcement to live portal marquee ticker!', 'success');
  };

  const handleDelete = (id, annTitle) => {
    setAnnouncements(announcements.filter((a) => a.id !== id));
    addToast(`Removed announcement: "${annTitle}"`, 'info');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#081426] via-[#1e1b4b] to-[#4c1d95] text-white p-6 sm:p-8 rounded-3xl border border-purple-700 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-400/20 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-2 border border-purple-300/30">
            <Sparkles className="w-4 h-4" />
            <span>Portal Broadcast Manager</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black font-['Outfit']">
            Announcements & Mission Directives
          </h1>
          <p className="text-xs text-purple-200 mt-0.5">
            Broadcast emergency weather capacity notices and national training mandates to all IMD observatories.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (5 cols): New Announcement Form */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-base font-['Outfit']">
            Broadcast New Directive
          </h3>

          <form onSubmit={handleAddAnnouncement} className="space-y-3.5 text-xs">
            <div>
              <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                Announcement Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Cyclone Warning Drill 2026 Scheduled"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs"
                >
                  <option value="Directive">National Directive</option>
                  <option value="Simulation Drill">Simulation Drill</option>
                  <option value="Training">Training Workshop</option>
                  <option value="System Update">System Update</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Priority
                </label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs"
                >
                  <option value="High">High Priority</option>
                  <option value="Urgent">Urgent / Red Alert</option>
                  <option value="Normal">Normal</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                Directive Details & Instructions *
              </label>
              <textarea
                rows={4}
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter mandatory directives for station heads and trainees..."
                className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs transition shadow-sm flex items-center justify-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Broadcast to Live Portal Marquee</span>
            </button>
          </form>
        </div>

        {/* Right Column (7 cols): Active Directives List */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-base font-['Outfit']">
            Active Broadcast Directives ({announcements.length})
          </h3>

          <div className="space-y-3">
            {announcements.map((ann) => (
              <div
                key={ann.id}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2 text-xs"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        ann.priority === 'Urgent'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {ann.priority}
                      </span>
                      <span className="text-slate-500 text-[11px] font-medium">{ann.category}</span>
                      <span className="text-slate-400 text-[11px]">({ann.date})</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm leading-snug">{ann.title}</h4>
                  </div>

                  <button
                    onClick={() => handleDelete(ann.id, ann.title)}
                    className="p-1.5 text-rose-500 hover:text-rose-700 rounded-lg shrink-0"
                    title="Delete Announcement"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-slate-600 leading-relaxed pt-1">{ann.content}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
