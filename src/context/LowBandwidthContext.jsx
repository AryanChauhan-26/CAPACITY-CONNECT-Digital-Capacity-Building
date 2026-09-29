import React, { createContext, useContext, useState, useEffect } from 'react';

const LowBandwidthContext = createContext();

export const LowBandwidthProvider = ({ children }) => {
  // Low-bandwidth mode state (persisted)
  const [lowBandwidthMode, setLowBandwidthMode] = useState(() => {
    return localStorage.getItem('capacity_low_bandwidth') === 'true';
  });

  // Offline document cache records
  const [cachedDocs, setCachedDocs] = useState(() => {
    const saved = localStorage.getItem('capacity_cached_docs');
    return saved ? JSON.parse(saved) : ['doc-1', 'doc-2', 'doc-31', 'doc-32'];
  });

  // Accessibility Font Size
  const [fontSize, setFontSize] = useState('normal'); // 'normal', 'large', 'xl'

  // Language toggle (English / Hindi)
  const [lang, setLang] = useState('en'); // 'en' or 'hi'

  // Simulated connection status
  const [networkSpeed, setNetworkSpeed] = useState('4G/Broadband'); // '4G/Broadband', '2G/VSAT (Low Speed)', 'Offline Cache Mode'

  useEffect(() => {
    localStorage.setItem('capacity_low_bandwidth', lowBandwidthMode);
    if (lowBandwidthMode) {
      document.body.classList.add('low-bandwidth-mode');
    } else {
      document.body.classList.remove('low-bandwidth-mode');
    }
  }, [lowBandwidthMode]);

  useEffect(() => {
    localStorage.setItem('capacity_cached_docs', JSON.stringify(cachedDocs));
  }, [cachedDocs]);

  const toggleLowBandwidth = () => {
    setLowBandwidthMode((prev) => !prev);
  };

  const toggleDocCache = (docId) => {
    setCachedDocs((prev) => {
      if (prev.includes(docId)) {
        return prev.filter((id) => id !== docId);
      } else {
        return [...prev, docId];
      }
    });
  };

  const isDocCached = (docId) => cachedDocs.includes(docId);

  return (
    <LowBandwidthContext.Provider
      value={{
        lowBandwidthMode,
        toggleLowBandwidth,
        cachedDocs,
        toggleDocCache,
        isDocCached,
        fontSize,
        setFontSize,
        lang,
        setLang,
        networkSpeed,
        setNetworkSpeed
      }}
    >
      {children}
    </LowBandwidthContext.Provider>
  );
};

export const useLowBandwidth = () => useContext(LowBandwidthContext);
