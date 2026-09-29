// Comprehensive Realistic Mock Data for MoES / IMD Capacity Connect Portal

export const IMD_CENTERS = [
  { id: 'delhi', name: 'RMC New Delhi (HQ)', region: 'Northern', code: 'NDLS-01', staff: 420, readiness: 94 },
  { id: 'mumbai', name: 'RMC Mumbai', region: 'Western', code: 'BOM-02', staff: 340, readiness: 88 },
  { id: 'chennai', name: 'RMC Chennai', region: 'Southern', code: 'MAA-03', staff: 310, readiness: 92 },
  { id: 'kolkata', name: 'RMC Kolkata', region: 'Eastern', code: 'CCU-04', staff: 290, readiness: 86 },
  { id: 'guwahati', name: 'RMC Guwahati', region: 'North-Eastern', code: 'GAU-05', staff: 210, readiness: 78 },
  { id: 'nagpur', name: 'RMC Nagpur', region: 'Central', code: 'NAG-06', staff: 195, readiness: 82 },
  { id: 'pune', name: 'Meteorological Centre Pune', region: 'Western', code: 'PUN-07', staff: 180, readiness: 91 },
  { id: 'leh', name: 'MC Leh Ladakh', region: 'Northern (High Altitude)', code: 'IXL-08', staff: 45, readiness: 74 },
  { id: 'portblair', name: 'MC Port Blair (A&N Islands)', region: 'Island Station', code: 'IXZ-09', staff: 55, readiness: 80 },
  { id: 'minicoy', name: 'MC Minicoy (Lakshadweep)', region: 'Island Station', code: 'MYI-10', staff: 38, readiness: 76 },
  { id: 'dehradun', name: 'MC Dehradun', region: 'Himalayan / Cryosphere', code: 'DED-11', staff: 68, readiness: 85 },
  { id: 'bhubaneswar', name: 'MC Bhubaneswar', region: 'Eastern Coastal', code: 'BBI-12', staff: 115, readiness: 93 },
];

export const MOCK_COURSES = [
  {
    id: 'course-1',
    title: 'Dual-Polarimetric Doppler Weather Radar (DWR) Operation & Interpretation',
    code: 'IMD-DWR-401',
    domain: 'Radar & Remote Sensing',
    level: 'Advanced',
    duration: '6 Weeks (36 Hours)',
    rating: 4.9,
    enrolledCount: 384,
    completionRate: 88,
    badge: 'DWR Master Analyst',
    thumbnail: 'https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?auto=format&fit=crop&w=800&q=80',
    description: 'Master operational procedures, calibration, differential reflectivity (ZDR), specific differential phase (KDP), hydrometeor classification, and nowcasting storm severe cells using C-Band and S-Band DWR networks across India.',
    trainer: {
      name: 'Dr. Sangeeta Rao',
      designation: 'Scientist-F & Radar Operations Lead',
      center: 'RMC New Delhi',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    modules: [
      {
        id: 'mod-1',
        title: 'Module 1: Principles of Radar Polarimetry & Dual-Pol Moments',
        lessons: [
          { id: 'l1', title: 'Radar Equation, Pulse Compression & PRF Dynamics', duration: '45 mins', type: 'video', completed: true },
          { id: 'l2', title: 'Reflectivity (Z), Doppler Velocity (V) and Spectrum Width (W)', duration: '50 mins', type: 'video', completed: true },
          { id: 'l3', title: 'IMD Standard DWR Scan Strategies (VCP 21 & VCP 12)', duration: '30 mins', type: 'document', completed: true },
        ]
      },
      {
        id: 'mod-2',
        title: 'Module 2: Hydrometeor Classification & Severe Weather Signatures',
        lessons: [
          { id: 'l4', title: 'Identifying Hail Cores, Hook Echoes and Tornadic Vortex Signatures (TVS)', duration: '60 mins', type: 'video', completed: false },
          { id: 'l5', title: 'Differential Phase (PhiDP) & Specific Differential Phase (KDP) Calculations', duration: '40 mins', type: 'document', completed: false },
          { id: 'l6', title: 'Hands-on Radar Quality Control & Clutter Suppression Filters', duration: '55 mins', type: 'lab', completed: false },
        ]
      },
      {
        id: 'mod-3',
        title: 'Module 3: Hands-On Field Calibration & Low-Bandwidth Data Transmission',
        lessons: [
          { id: 'l7', title: 'Sun-Pointing Calibration and Transmitter Tuning Protocols', duration: '45 mins', type: 'video', completed: false },
          { id: 'l8', title: 'Optimizing DWR Max-Z Composite Transmission over 2G/VSAT Channels', duration: '35 mins', type: 'document', completed: false },
        ]
      }
    ],
    documents: [
      { id: 'doc-1', title: 'IMD Dual-Pol Radar Operating Manual Rev 2026.pdf', size: '4.2 MB', pages: 84, offlineCached: true },
      { id: 'doc-2', title: 'Hydrometeor Classification Algorithm (HCA) Lookup Matrix.pdf', size: '1.8 MB', pages: 28, offlineCached: true },
      { id: 'doc-3', title: 'Standard Calibration Checklist for S-Band DWR.pdf', size: '890 KB', pages: 12, offlineCached: false },
    ],
    quiz: {
      id: 'quiz-dwr',
      title: 'Certification Assessment: DWR Dual-Polarimetric Operations',
      durationMinutes: 15,
      totalQuestions: 5,
      passPercentage: 75,
      questions: [
        {
          id: 'q1',
          question: 'In dual-polarimetric radar analysis, a region with high horizontal reflectivity (Z > 55 dBZ) accompanied by near-zero or negative Differential Reflectivity (ZDR ≈ 0 dB) typically signifies:',
          options: [
            'Light stratiform drizzle droplets',
            'Large tumbling hailstones',
            'Heavy rain with oblate raindrops',
            'Biological clutter (migrating birds/insects)'
          ],
          correctAnswer: 1,
          explanation: 'Large hailstones tumble randomly as they fall, presenting an isotropic cross-section to both horizontal and vertical radar pulses, leading to ZDR near 0 dB despite very high reflectivity (Z > 55 dBZ).'
        },
        {
          id: 'q2',
          question: 'Which dual-polarimetric parameter is immune to partial radar beam blockage and absolute radar calibration errors?',
          options: [
            'Differential Reflectivity (ZDR)',
            'Equivalent Radar Reflectivity Factor (Zh)',
            'Specific Differential Phase (KDP)',
            'Correlation Coefficient (RhoHV)'
          ],
          correctAnswer: 2,
          explanation: 'Specific Differential Phase (KDP) is the range derivative of differential phase shift (PhiDP). Because it depends on phase difference along the path rather than received power amplitude, it is completely immune to beam blockage and transmitter power calibration drift.'
        },
        {
          id: 'q3',
          question: 'What is the primary operational purpose of the Volume Coverage Pattern 21 (VCP 21) in IMD DWR network?',
          options: [
            'Clear-air boundary layer surveillance with slow antenna rotation',
            'Deep convective storm monitoring with 9 elevation angles in 6 minutes',
            'Tsunami ocean surface ripple detection',
            'Ionospheric electron density sounding'
          ],
          correctAnswer: 1,
          explanation: 'VCP 21 is the standard precipitation mode scan strategy covering 9 elevation slices from 0.5° to 19.5° within 6 minutes, optimized for deep tropical convection.'
        },
        {
          id: 'q4',
          question: 'Correlation Coefficient (RhoHV) values dropping below 0.80 within an intense mesocyclone radar signature indicates:',
          options: [
            'Tornadic Debris Signature (TDS) containing non-meteorological lofted debris',
            'Dry pristine snow crystals',
            'Uniform laminar cloud droplets',
            'Optimal antenna azimuth alignment'
          ],
          correctAnswer: 0,
          explanation: 'RhoHV measures the physical diversity of shapes in the pulse volume. Values below 0.8 coincident with a velocity couplet confirm non-meteorological lofted debris (TDS).'
        },
        {
          id: 'q5',
          question: 'When transmitting radar products from remote mountain stations over low-bandwidth VSAT links, which data compression strategy preserves critical storm centroids?',
          options: [
            'Raw I/Q time-series transmission without processing',
            'Run-Length Encoded Plan Position Indicator (PPI) at base elevation with compressed color-palette indices',
            'Uncompressed 32-bit TIFF full-volume matrices',
            'Continuous 4K MPEG video stream'
          ],
          correctAnswer: 1,
          explanation: 'RLE-compressed indexed base PPI images reduce data payload by 95% while retaining exact reflectivity decibel values for mission-critical nowcasting.'
        }
      ]
    }
  },
  {
    id: 'course-2',
    title: 'High-Resolution Numerical Weather Prediction (NWP) & WRF Modeling',
    code: 'IMD-NWP-502',
    domain: 'Modeling & Computing',
    level: 'Advanced',
    duration: '8 Weeks (48 Hours)',
    rating: 4.8,
    enrolledCount: 295,
    completionRate: 82,
    badge: 'NWP Computational Specialist',
    thumbnail: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
    description: 'In-depth simulation setup, domain nesting, convective parameterization, GFS/ECMWF boundary conditions, and data assimilation (WRF-DA) for regional extreme rainfall forecasting over the Indian subcontinent.',
    trainer: {
      name: 'Dr. A. K. Mitra',
      designation: 'Scientist-G & Head of Numerical Modeling',
      center: 'RMC New Delhi',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    modules: [
      {
        id: 'mod-21',
        title: 'Module 1: WRF Model Architecture & Pre-processing System (WPS)',
        lessons: [
          { id: 'l21', title: 'Geogrid, Ungrib, and Metgrid Pipeline Execution', duration: '50 mins', type: 'video', completed: true },
          { id: 'l22', title: 'Static Terrestrial Datasets (Topography, Land Use, Soil Types)', duration: '40 mins', type: 'document', completed: true },
        ]
      },
      {
        id: 'mod-22',
        title: 'Module 2: Microphysics & Cumulus Schemes for Indian Monsoon',
        lessons: [
          { id: 'l23', title: 'Kain-Fritsch vs Grell-Freitas Cumulus Schemes', duration: '60 mins', type: 'video', completed: true },
          { id: 'l24', title: 'WRF-Chem Aerosol-Cloud Interactions in Indo-Gangetic Plains', duration: '45 mins', type: 'lab', completed: false },
        ]
      }
    ],
    documents: [
      { id: 'doc-21', title: 'WRF 4.5 User Guide for IMD HPC Clusters.pdf', size: '6.4 MB', pages: 140, offlineCached: true },
      { id: 'doc-22', title: 'NWP Ensemble Verification Metrics Handbook.pdf', size: '2.1 MB', pages: 36, offlineCached: false },
    ],
    quiz: {
      id: 'quiz-nwp',
      title: 'Assessment: WRF Physics & Data Assimilation',
      durationMinutes: 15,
      totalQuestions: 5,
      passPercentage: 75,
      questions: [
        {
          id: 'q1',
          question: 'When grid resolution in a WRF domain is refined to 3 km or finer (convection-permitting scale), which parameterization scheme MUST typically be turned off?',
          options: [
            'Microphysics scheme',
            'Cumulus parameterization scheme',
            'Planetary Boundary Layer (PBL) scheme',
            'Longwave radiation scheme'
          ],
          correctAnswer: 1,
          explanation: 'At grid spacing below ~3-4 km, deep updrafts and downdrafts are explicitly resolved by the non-hydrostatic dynamical equations, so subgrid cumulus parameterization must be disabled to avoid double-counting.'
        },
        {
          id: 'q2',
          question: 'Which IMD High-Performance Computing (HPC) system runs the operational Unified Model (NCUM) at 12 km global and 4 km regional resolutions?',
          options: [
            'PARAM Yuva II',
            'Pratyush (IITM) and Mihir (NCMRWF/IMD)',
            'PARAM Shivay',
            'SahasraT'
          ],
          correctAnswer: 1,
          explanation: 'Pratyush (Cray XC40 at IITM Pune) and Mihir (Cray XC40 at NCMRWF Noida) form the dedicated MoES HPC cluster providing operational weather and monsoon forecasts.'
        },
        {
          id: 'q3',
          question: 'What is the function of the "ungrib" program in the WRF Preprocessing System (WPS)?',
          options: [
            'Interpolating meteorological fields horizontally to the simulation domain',
            'Unpacking GRIB1 and GRIB2 formatted meteorological files into intermediate binary format',
            'Computing radiative transfer coefficients',
            'Filtering high-frequency acoustic waves'
          ],
          correctAnswer: 1,
          explanation: 'Ungrib reads GRIB format global forecast files (like GFS/ECMWF) and writes intermediate files that metgrid can interpolate.'
        },
        {
          id: 'q4',
          question: 'In 3D-Var Data Assimilation, what represents the matrix "B"?',
          options: [
            'Observation error covariance matrix',
            'Background (prior) error covariance matrix',
            'Forward observation operator',
            'Boundary condition matrix'
          ],
          correctAnswer: 1,
          explanation: 'Matrix B denotes the background error covariance, determining how observation increments are spatially spread and balanced dynamically.'
        },
        {
          id: 'q5',
          question: 'For heavy orographic rainfall along the Western Ghats, which planetary boundary layer (PBL) scheme performs most reliably in operational studies?',
          options: [
            'YSU (Yonsei University) non-local scheme',
            'Zero-order slab model',
            'Bulk aerodynamic simple drag formula',
            'Constant eddy viscosity approximation'
          ],
          correctAnswer: 0,
          explanation: 'YSU non-local scheme accounts for deep boundary-layer entrainment and orographic turbulence more realistically than local 1.5-order closures.'
        }
      ]
    }
  },
  {
    id: 'course-3',
    title: 'Bay of Bengal & Arabian Sea Tropical Cyclone Genesis, Intensity & Track Forecasting',
    code: 'IMD-TC-603',
    domain: 'Cyclone Tracking & Severe Weather',
    level: 'Advanced Specialist',
    duration: '5 Weeks (30 Hours)',
    rating: 5.0,
    enrolledCount: 512,
    completionRate: 94,
    badge: 'Cyclone Mission Commander',
    thumbnail: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive operational manual on Dvorak technique, Ocean Thermal Energy (TCHP), upper tropospheric divergence, Rapid Intensification (RI) triggers, storm surge SLOSH modeling, and bulletined warning generation.',
    trainer: {
      name: 'Dr. Meenakshi Sundaram',
      designation: 'Scientist-F & Cyclone Warning Lead',
      center: 'RMC Chennai',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    modules: [
      {
        id: 'mod-31',
        title: 'Module 1: Tropical Cyclogenesis Environment in North Indian Ocean',
        lessons: [
          { id: 'l31', title: 'Coriolis Parameter, Low-Level Vorticity & Vertical Wind Shear Thresholds', duration: '50 mins', type: 'video', completed: true },
          { id: 'l32', title: 'Ocean Heat Content (TCHP) & 26°C Isotherm Depth in Bay of Bengal', duration: '45 mins', type: 'video', completed: true },
        ]
      },
      {
        id: 'mod-32',
        title: 'Module 2: Satellite Dvorak T-Number Analysis & Rapid Intensification',
        lessons: [
          { id: 'l33', title: 'Curved Band, Shear, CDO and Eye Patterns on INSAT-3D TIR-1', duration: '60 mins', type: 'video', completed: true },
          { id: 'l34', title: 'Rapid Intensification (RI) Predictors in Post-Monsoon Depressions', duration: '40 mins', type: 'document', completed: true },
        ]
      },
      {
        id: 'mod-33',
        title: 'Module 3: Storm Surge Modeling & Public Warning Dissemination',
        lessons: [
          { id: 'l35', title: 'IIT Delhi / INCOIS Storm Surge Matrix & Astronomical Tide Coupling', duration: '55 mins', type: 'lab', completed: false },
          { id: 'l36', title: 'Standard Color Coded Warnings (Yellow, Orange, Red) and Port Signals', duration: '35 mins', type: 'document', completed: false },
        ]
      }
    ],
    documents: [
      { id: 'doc-31', title: 'Standard Operating Procedure (SOP) for Cyclone Warning in India.pdf', size: '5.8 MB', pages: 112, offlineCached: true },
      { id: 'doc-32', title: 'Dvorak Technique Practical Chartbook for North Indian Ocean.pdf', size: '3.4 MB', pages: 48, offlineCached: true },
    ],
    quiz: {
      id: 'quiz-tc',
      title: 'Operational Assessment: Tropical Cyclone Forecasting',
      durationMinutes: 15,
      totalQuestions: 5,
      passPercentage: 75,
      questions: [
        {
          id: 'q1',
          question: 'According to the IMD tropical cyclone classification scale, a cyclonic storm with maximum sustained surface winds (MSW) of 64 to 89 knots (119 to 165 kmph) is designated as:',
          options: [
            'Severe Cyclonic Storm (SCS)',
            'Very Severe Cyclonic Storm (VSCS)',
            'Extremely Severe Cyclonic Storm (ESCS)',
            'Super Cyclonic Storm (SuCS)'
          ],
          correctAnswer: 1,
          explanation: 'In the IMD scale, a Very Severe Cyclonic Storm (VSCS) corresponds to 3-minute MSW between 64-89 knots (119-165 kmph).'
        },
        {
          id: 'q2',
          question: 'In the Dvorak satellite technique, what is the primary diagnostic sign indicating that a storm has transitioned into an "Eye Pattern"?',
          options: [
            'The cloud top temperature of the surrounding eye wall becomes warmer than the eye center',
            'A defined warm temperature eye is completely encircled by a dense cold overcast cloud ring',
            'Spiral rainbands vanish completely from the microwave swath',
            'The storm begins moving due south'
          ],
          correctAnswer: 1,
          explanation: 'An Eye Pattern is established when the Central Dense Overcast (CDO) wraps completely around a warm eye pixel, allowing temperature difference determination.'
        },
        {
          id: 'q3',
          question: 'Why does the Bay of Bengal witness significantly higher storm surge inundation compared to the Arabian Sea for cyclones of comparable intensity?',
          options: [
            'Bay of Bengal has a shallower continental shelf, funnel-shaped bathymetry and high astronomical tidal range',
            'Arabian Sea has higher sea surface temperatures',
            'Bay of Bengal cyclones have higher translational forward speed',
            'Arabian Sea waters have lower salinity'
          ],
          correctAnswer: 0,
          explanation: 'Shallow continental shelf, semi-enclosed funnel bathymetry, and convergence of large river deltas amplify storm surge heights dramatically in the Bay of Bengal.'
        },
        {
          id: 'q4',
          question: 'What is the threshold value of Tropical Cyclone Heat Potential (TCHP) widely recognized by IMD as conducive for Rapid Intensification (RI)?',
          options: [
            '> 10 kJ/cm²',
            '> 30 kJ/cm²',
            '> 70-80 kJ/cm²',
            '< 5 kJ/cm²'
          ],
          correctAnswer: 2,
          explanation: 'TCHP exceeding 70-80 kJ/cm² provides deep oceanic thermal reservoir preventing cold water upwelling from weakening the tropical cyclone core.'
        },
        {
          id: 'q5',
          question: 'Which stage of IMD 4-stage cyclone warning protocol is issued 24 hours in advance of expected landfall, specifying exact landfall district?',
          options: [
            'Pre-Cyclone Watch (72 hours)',
            'Cyclone Alert (Yellow - 48 hours)',
            'Cyclone Warning (Orange - 24 hours)',
            'Post-Landfall Outlook (12 hours)'
          ],
          correctAnswer: 2,
          explanation: 'Cyclone Warning (Orange message) is issued at least 24 hours before landfall indicating target districts, wind hazards, and storm surge.'
        }
      ]
    }
  },
  {
    id: 'course-4',
    title: 'Satellite Meteorology: INSAT-3DR & 3DS Payload Analysis & Nowcasting',
    code: 'IMD-SAT-404',
    domain: 'Satellite Meteorology',
    level: 'Intermediate',
    duration: '4 Weeks (24 Hours)',
    rating: 4.7,
    enrolledCount: 420,
    completionRate: 89,
    badge: 'Satellite Nowcaster',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    description: 'Operational decoding of Visible, Thermal Infrared (TIR1/TIR2), Water Vapor (WV), and Middle Infrared (MIR) bands on INSAT-3DR and newest INSAT-3DS satellites, with RAPID imagery for convective storm nowcasting.',
    trainer: {
      name: 'Dr. Ramesh Sharma',
      designation: 'Scientist-E & Satellite Meteorology Lead',
      center: 'RMC New Delhi',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    modules: [
      {
        id: 'mod-41',
        title: 'Module 1: INSAT Imager and Sounder Payloads',
        lessons: [
          { id: 'l41', title: '6-Channel Imager Overview & Spectral Response Functions', duration: '40 mins', type: 'video', completed: true },
          { id: 'l42', title: '19-Channel Sounder Profiles: Total Precipitable Water (TPW)', duration: '45 mins', type: 'document', completed: true },
        ]
      }
    ],
    documents: [
      { id: 'doc-41', title: 'INSAT-3DS Geophysical Products Handbook.pdf', size: '3.9 MB', pages: 64, offlineCached: true }
    ],
    quiz: {
      id: 'quiz-sat',
      title: 'Assessment: Satellite Meteorology Nowcasting',
      durationMinutes: 10,
      totalQuestions: 3,
      passPercentage: 70,
      questions: [
        {
          id: 'q1',
          question: 'Which spectral channel combination on INSAT-3DS is optimal for discriminating low fog/stratus cloud from snow-covered terrain during night?',
          options: [
            'Brightness Temperature Difference between 3.9 µm (MIR) and 10.8 µm (TIR1)',
            'Visible 0.65 µm single channel',
            'Water Vapor 6.7 µm channel',
            'Thermal Infrared 12.0 µm channel only'
          ],
          correctAnswer: 0,
          explanation: 'Because water droplet clouds have low emissivity at 3.9 µm compared to 10.8 µm, the BTD (TIR1 - MIR) exhibits a large negative difference, highlighting night fog.'
        },
        {
          id: 'q2',
          question: 'What is the temporal cadence of INSAT-3D/3DR RAPID sector scanning mode over the Indian region during high-impact weather?',
          options: ['Every 4.5 minutes', 'Every 30 minutes', 'Once every 3 hours', 'Every 12 hours'],
          correctAnswer: 0,
          explanation: 'In RAPID mode, INSAT can scan a dedicated sub-sector over India every 4.5 minutes to monitor severe convective storm evolution.'
        },
        {
          id: 'q3',
          question: 'Upper tropospheric dry air intrusions that inhibit monsoon depression development appear as what feature on the 6.7 µm Water Vapor channel?',
          options: ['Bright white clouds', 'Dark black/grey dry slots with warm brightness temperature', 'Greenish diffuse halos', 'Zero radiance null points'],
          correctAnswer: 1,
          explanation: 'Dry air in the middle-to-upper troposphere lacks moisture to absorb upwelling radiation from below, yielding warmer brightness temperatures visible as dark features.'
        }
      ]
    }
  },
  {
    id: 'course-5',
    title: 'Operational Agro-Meteorological Advisory Systems & Gramin Krishi Mausam Sewa',
    code: 'IMD-AGRO-305',
    domain: 'Agro-Meteorology',
    level: 'Intermediate',
    duration: '4 Weeks (20 Hours)',
    rating: 4.8,
    enrolledCount: 360,
    completionRate: 91,
    badge: 'Agro-Advisory Champion',
    thumbnail: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    description: 'Formulating district and block-level agro-meteorological advisories under GKMS scheme, utilizing Meghdoot app integrations, crop growth simulation models, and pest-weather relationship matrices.',
    trainer: {
      name: 'Dr. K. Radhakrishnan',
      designation: 'Senior Scientist & Agro-Met Head',
      center: 'Meteorological Centre Pune',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
    },
    modules: [
      {
        id: 'mod-51',
        title: 'Module 1: GKMS Architecture & Block-Level Advisories',
        lessons: [
          { id: 'l51', title: 'District Agromet Units (DAMUs) & Block-Scale Forecast Integration', duration: '35 mins', type: 'video', completed: true },
          { id: 'l52', title: 'Meghdoot & Damini Mobile Services for Farmers', duration: '30 mins', type: 'document', completed: true },
        ]
      }
    ],
    documents: [
      { id: 'doc-51', title: 'GKMS Operational Manual & Weather-Crop Calendar.pdf', size: '2.8 MB', pages: 52, offlineCached: false }
    ],
    quiz: {
      id: 'quiz-agro',
      title: 'Assessment: Agro-Meteorological Advisory Formulations',
      durationMinutes: 10,
      totalQuestions: 2,
      passPercentage: 70,
      questions: [
        {
          id: 'q1',
          question: 'Under the GKMS scheme, on which two days of the week are bi-weekly block-level agro-meteorological advisories routinely issued by IMD DAMUs?',
          options: ['Tuesday and Friday', 'Monday and Thursday', 'Wednesday and Saturday', 'Sunday only'],
          correctAnswer: 0,
          explanation: 'Operational GKMS bulletins are standardized nationwide to release every Tuesday and Friday afternoon.'
        },
        {
          id: 'q2',
          question: 'Which MoES/IMD mobile application delivers lightning warnings with a 20-40 km buffer and 30-45 minute lead time?',
          options: ['Damini App', 'Mausam App', 'Meghdoot App', 'Sagar Vani'],
          correctAnswer: 0,
          explanation: 'The Damini Lightning app uses IITM lightning location network data to alert farmers and rural workers.'
        }
      ]
    }
  },
  {
    id: 'course-6',
    title: 'Ocean State Forecast (OSF), Tsunami Early Warning & Coastal Hazards',
    code: 'IMD-OCEAN-406',
    domain: 'Oceanography & Coastal Hazards',
    level: 'Advanced',
    duration: '5 Weeks (28 Hours)',
    rating: 4.9,
    enrolledCount: 270,
    completionRate: 85,
    badge: 'Ocean Hazards Specialist',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    description: 'Joint MoES-IMD-INCOIS module covering wave rider buoys, SWAN/WAVEWATCH III models, high wave alerts, swell surges (Kallakkadal), and Indian Tsunami Early Warning Centre (ITEWC) protocols.',
    trainer: {
      name: 'Dr. K. Radhakrishnan',
      designation: 'Director of Coastal Marine Observation',
      center: 'RMC Chennai',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
    },
    modules: [
      {
        id: 'mod-61',
        title: 'Module 1: Deep Sea & Coastal Ocean Observation Systems',
        lessons: [
          { id: 'l61', title: 'Moored OMNI Buoy Network & Bottom Pressure Recorders (BPR)', duration: '45 mins', type: 'video', completed: true },
          { id: 'l62', title: 'Swell Waves vs Local Wind Waves Discrimination', duration: '40 mins', type: 'document', completed: false }
        ]
      }
    ],
    documents: [
      { id: 'doc-61', title: 'INCOIS-IMD Joint Marine Warning Protocol 2026.pdf', size: '3.1 MB', pages: 44, offlineCached: true }
    ],
    quiz: {
      id: 'quiz-ocean',
      title: 'Assessment: Ocean State & Coastal Hazards',
      durationMinutes: 10,
      totalQuestions: 2,
      passPercentage: 75,
      questions: [
        {
          id: 'q1',
          question: 'What meteorological phenomenon triggers "Kallakkadal" (swell surge) flooding along the southwest coast of India?',
          options: [
            'Distant intense low-pressure storm systems in the Southern Indian Ocean creating long-period swell waves',
            'Local afternoon sea breeze',
            'Subsea volcanic eruptions',
            'High river discharge from the Western Ghats'
          ],
          correctAnswer: 0,
          explanation: 'Kallakkadal is caused by long-period swells generated by distant storms in the South Indian Ocean (30°S to 50°S) that travel thousands of kilometers.'
        },
        {
          id: 'q2',
          question: 'The Indian Tsunami Early Warning Centre (ITEWC) can issue actionable tsunami advisories for coastal regions within how many minutes of an undersea earthquake?',
          options: ['10-15 minutes', '2 hours', '6 hours', '24 hours'],
          correctAnswer: 0,
          explanation: 'ITEWC at INCOIS/MoES computes focal mechanisms, travel times, and ocean height simulations within 10-15 minutes of seismic trigger.'
        }
      ]
    }
  },
  {
    id: 'course-7',
    title: 'Automatic Weather Stations (AWS) Calibration, Quality Control & Sensor Maintenance',
    code: 'IMD-AWS-207',
    domain: 'Instrumentation & Surface Obs',
    level: 'Foundational',
    duration: '3 Weeks (18 Hours)',
    rating: 4.6,
    enrolledCount: 460,
    completionRate: 93,
    badge: 'Surface Instrumentation Pro',
    thumbnail: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: 'Hands-on procedures for calibrating tipping bucket rain gauges, barometric sensors, sonic anemometers, solar pyranometers, and troubleshooting GSM/GPRS data telemetry from remote stations.',
    trainer: {
      name: 'Er. Rajesh Varma',
      designation: 'Senior Technical Officer (Instrumentation)',
      center: 'RMC Nagpur',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80'
    },
    modules: [
      {
        id: 'mod-71',
        title: 'Module 1: AWS Architecture & Sensor Specifications',
        lessons: [
          { id: 'l71', title: 'Data Loggers, Solar Power Management & Lightning Protection', duration: '35 mins', type: 'video', completed: true },
          { id: 'l72', title: 'Quality Control Flags (QC0 to QC3) in Real-Time Ingestion', duration: '40 mins', type: 'document', completed: true }
        ]
      }
    ],
    documents: [
      { id: 'doc-71', title: 'IMD Surface Instrumentation Field Guide.pdf', size: '2.5 MB', pages: 38, offlineCached: true }
    ],
    quiz: {
      id: 'quiz-aws',
      title: 'Assessment: AWS Maintenance & Calibration',
      durationMinutes: 10,
      totalQuestions: 2,
      passPercentage: 70,
      questions: [
        {
          id: 'q1',
          question: 'What is the standard resolution per tip of an IMD operational tipping-bucket rain gauge sensor?',
          options: ['0.2 mm (or 0.5 mm in high-intensity hill networks)', '5.0 mm', '10.0 mm', '0.01 mm'],
          correctAnswer: 0,
          explanation: 'Standard meteorological tipping buckets tip at 0.2 mm (or 0.5 mm for high rainfall intensity).'
        },
        {
          id: 'q2',
          question: 'Which check in IMD real-time automated quality control flag pipeline identifies stuck temperature sensors reporting identical values for 6 consecutive hours?',
          options: ['Persistence Check', 'Climatological Limit Check', 'Step Change Check', 'Internal Consistency Check'],
          correctAnswer: 0,
          explanation: 'The persistence test flags sensor readings that fail to exhibit natural diurnal variance over time.'
        }
      ]
    }
  },
  {
    id: 'course-8',
    title: 'Aviation Meteorology: METAR/SPECI Reporting & TAF Generation',
    code: 'IMD-AVN-308',
    domain: 'Aviation Meteorology',
    level: 'Intermediate',
    duration: '4 Weeks (22 Hours)',
    rating: 4.8,
    enrolledCount: 310,
    completionRate: 89,
    badge: 'Aviation Weather Forecaster',
    thumbnail: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    description: 'ICAO Annex 3 standards, Runway Visual Range (RVR) transmissometers, wind shear alerts, aerodrome forecasts (TAF), SIGMET issuance, and briefing commercial and defence flights.',
    trainer: {
      name: 'Dr. Meenakshi Sundaram',
      designation: 'Aerodrome Meteorological Office (AMO) Lead',
      center: 'RMC Mumbai',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    modules: [
      {
        id: 'mod-81',
        title: 'Module 1: ICAO Coding Standards & Aerodrome Routine Reports',
        lessons: [
          { id: 'l81', title: 'METAR & SPECI Decoding & Criteria for Special Reports', duration: '40 mins', type: 'video', completed: true },
          { id: 'l82', title: 'RVR Transmissometer Calibration for CAT-III B Operations', duration: '45 mins', type: 'document', completed: false }
        ]
      }
    ],
    documents: [
      { id: 'doc-81', title: 'Manual of Aerodrome Meteorological Practices (ICAO/IMD).pdf', size: '4.1 MB', pages: 80, offlineCached: true }
    ],
    quiz: {
      id: 'quiz-avn',
      title: 'Assessment: Aviation Weather Reporting',
      durationMinutes: 10,
      totalQuestions: 2,
      passPercentage: 75,
      questions: [
        {
          id: 'q1',
          question: 'In a METAR report, what does the descriptor "TSRA" signify?',
          options: ['Thunderstorm with moderate rain', 'Tropical Storm Rapid Acceleration', 'Tornado and Sandstorm', 'Turbulence and Stratus Rain'],
          correctAnswer: 0,
          explanation: 'TS = Thunderstorm, RA = Rain. Hence TSRA designates thunderstorm with rain.'
        },
        {
          id: 'q2',
          question: 'For low-visibility Category III-B instrument landings, down to what minimum Runway Visual Range (RVR) can flights operate safely?',
          options: ['50 meters', '500 meters', '1500 meters', '3000 meters'],
          correctAnswer: 0,
          explanation: 'CAT III-B allows precision approach down to RVR of 50 meters with auto-land autopilot systems.'
        }
      ]
    }
  }
];

export const MOCK_USERS = [
  // 1. Logged-in Trainee
  {
    id: 'user-trainee-1',
    name: 'Dr. Ramesh Sharma',
    email: 'ramesh.sharma@imd.gov.in',
    employeeId: 'IMD-2021-9482',
    role: 'trainee',
    status: 'Active',
    center: 'Meteorological Centre Pune',
    stationCode: 'PUN-07',
    designation: 'Meteorologist-B (Radar & Nowcasting)',
    department: 'Radar Meteorology Division',
    experienceYears: 6,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    joinedDate: '2021-08-15',
    qualifications: ['M.Sc. Physics (Atmospheric Sciences), Pune University', 'Ph.D. Radar Meteorology, IIT Delhi'],
    domainInterests: ['Doppler Radar', 'Nowcasting', 'Severe Convection', 'NWP Validation'],
    readinessScore: 84,
    enrolledCourseIds: ['course-1', 'course-2', 'course-4'],
    completedCourseIds: ['course-4'],
    certificates: [
      {
        id: 'IMD-CERT-2025-SAT-4819',
        courseId: 'course-4',
        courseTitle: 'Satellite Meteorology: INSAT-3DR & 3DS Payload Analysis & Nowcasting',
        issueDate: '2025-11-20',
        grade: 'A+ (Distinction - 94%)',
        hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
        verifiableUrl: 'https://capacityconnect.imd.gov.in/verify?id=IMD-CERT-2025-SAT-4819'
      }
    ],
    badgesEarned: [
      { id: 'b1', name: 'INSAT Satellite Pro', icon: 'satellite', earnedOn: 'Nov 2025' },
      { id: 'b2', name: 'Monsoon Readiness 2025', icon: 'cloud-rain', earnedOn: 'Jul 2025' },
      { id: 'b3', name: 'Rapid Learner', icon: 'zap', earnedOn: 'Oct 2025' }
    ],
    skills: [
      { name: 'Doppler Radar (DWR) Analysis', level: 85 },
      { name: 'NWP WRF Modeling', level: 68 },
      { name: 'Satellite Nowcasting', level: 92 },
      { name: 'Tropical Cyclone Tracking', level: 60 },
      { name: 'AWS Sensor Calibration', level: 75 }
    ]
  },
  // 2. Logged-in Trainer
  {
    id: 'user-trainer-1',
    name: 'Dr. Sangeeta Rao',
    email: 'sangeeta.rao@imd.gov.in',
    employeeId: 'IMD-1998-1042',
    role: 'trainer',
    status: 'Active',
    center: 'RMC New Delhi (HQ)',
    stationCode: 'NDLS-01',
    designation: 'Scientist-F & Chief Radar Scientist',
    department: 'Radar & Remote Sensing Directorate',
    experienceYears: 22,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    joinedDate: '2004-03-10',
    qualifications: ['M.Tech. Atmospheric Physics, IIT Kharagpur', 'Ph.D. Dual-Pol Radar Networks, University of Reading (UK)'],
    domainInterests: ['Dual-Polarimetric Radar', 'Mission Mausam Radar Upgrades', 'Nowcasting'],
    assignedCourseIds: ['course-1', 'course-4'],
    totalTraineesTrained: 840,
    averageRating: 4.9,
    publishedPapers: 28,
  },
  // 3. Logged-in Admin
  {
    id: 'user-admin-1',
    name: 'Shri Vikramaditya Sen',
    email: 'director.training@moes.gov.in',
    employeeId: 'MOES-ADMIN-001',
    role: 'admin',
    status: 'Active',
    center: 'Ministry of Earth Sciences (MoES HQ), Prithvi Bhavan',
    stationCode: 'MOES-HQ',
    designation: 'Joint Secretary & Director (National Capacity Building)',
    department: 'Capacity Building & Human Resources Division',
    experienceYears: 26,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    joinedDate: '2015-01-05',
    permissions: ['ALL_ACCESS', 'USER_APPROVAL', 'ROLE_MANAGEMENT', 'ANNOUNCEMENTS', 'AUDIT_LOGS']
  },
  // 4. Additional Trainees
  {
    id: 'user-trainee-2',
    name: 'Ananya Sen',
    email: 'ananya.sen@imd.gov.in',
    employeeId: 'IMD-2023-4412',
    role: 'trainee',
    status: 'Active',
    center: 'RMC Kolkata',
    stationCode: 'CCU-04',
    designation: 'Scientific Assistant (Nor\'wester Cell)',
    department: 'Severe Weather Warning',
    experienceYears: 2,
    enrolledCourseIds: ['course-1', 'course-3'],
    readinessScore: 78
  },
  {
    id: 'user-trainee-3',
    name: 'Vikram Rathore',
    email: 'vikram.rathore@imd.gov.in',
    employeeId: 'IMD-2022-7721',
    role: 'trainee',
    status: 'Active',
    center: 'MC Leh Ladakh',
    stationCode: 'IXL-08',
    designation: 'Assistant Meteorologist (High Altitude Station)',
    department: 'Cryosphere & Mountain Meteorology',
    experienceYears: 4,
    enrolledCourseIds: ['course-2', 'course-7'],
    readinessScore: 72
  },
  {
    id: 'user-trainee-4',
    name: 'Priya Pillai',
    email: 'priya.pillai@imd.gov.in',
    employeeId: 'IMD-2020-3390',
    role: 'trainee',
    status: 'Active',
    center: 'RMC Chennai',
    stationCode: 'MAA-03',
    designation: 'Meteorologist-A (Ocean Forecaster)',
    department: 'Marine & Cyclone Warning',
    experienceYears: 5,
    enrolledCourseIds: ['course-3', 'course-6'],
    readinessScore: 89
  },
  // 5. Additional Trainers
  {
    id: 'user-trainer-2',
    name: 'Dr. Meenakshi Sundaram',
    email: 'meenakshi.s@imd.gov.in',
    employeeId: 'IMD-2002-1877',
    role: 'trainer',
    status: 'Active',
    center: 'RMC Chennai',
    stationCode: 'MAA-03',
    designation: 'Scientist-F & Cyclone Warning Lead',
    department: 'Area Cyclone Warning Centre (ACWC)',
    experienceYears: 21,
    assignedCourseIds: ['course-3', 'course-8'],
    totalTraineesTrained: 620,
    averageRating: 5.0,
    publishedPapers: 34
  },
  {
    id: 'user-trainer-3',
    name: 'Dr. K. Radhakrishnan',
    email: 'radhakrishnan.k@imd.gov.in',
    employeeId: 'IMD-2005-2244',
    role: 'trainer',
    status: 'Active',
    center: 'Meteorological Centre Pune',
    stationCode: 'PUN-07',
    designation: 'Senior Scientist (Agro-Met & Ocean State)',
    department: 'Agro-Meteorology Directorate',
    experienceYears: 18,
    assignedCourseIds: ['course-5', 'course-6'],
    totalTraineesTrained: 540,
    averageRating: 4.8,
    publishedPapers: 19
  },
  // 6. Pending Approval Users (For Admin workflow)
  {
    id: 'user-pending-1',
    name: 'Sunil Kumar Das',
    email: 'sunil.das@imd.gov.in',
    employeeId: 'IMD-2026-0199',
    role: 'trainee',
    status: 'Pending Approval',
    center: 'MC Bhubaneswar',
    stationCode: 'BBI-12',
    designation: 'Scientific Assistant (Coastal Radar)',
    department: 'Radar Maintenance Cell',
    requestedDate: '2026-09-28',
    qualification: 'M.Sc. Electronics & Oceanography'
  },
  {
    id: 'user-pending-2',
    name: 'Dr. Tashi Norbu',
    email: 'tashi.norbu@imd.gov.in',
    employeeId: 'IMD-2026-0245',
    role: 'trainer',
    status: 'Pending Approval',
    center: 'MC Leh Ladakh',
    stationCode: 'IXL-08',
    designation: 'Scientist-D (Himalayan Cryosphere)',
    department: 'Mountain Weather Forecasting',
    requestedDate: '2026-09-29',
    qualification: 'Ph.D. Glaciology, Wadia Institute'
  },
  {
    id: 'user-pending-3',
    name: 'Sneha Patel',
    email: 'sneha.patel@imd.gov.in',
    employeeId: 'IMD-2026-0310',
    role: 'trainee',
    status: 'Pending Approval',
    center: 'RMC Mumbai',
    stationCode: 'BOM-02',
    designation: 'Junior Forecaster',
    department: 'Aviation Met Office, CSI Airport',
    requestedDate: '2026-09-29',
    qualification: 'M.Sc. Atmospheric Science'
  }
];

export const MOCK_ANNOUNCEMENTS = [
  {
    id: 'ann-1',
    title: 'MISSION MAUSAM: Mandatory National Capacity Building Certification Drive 2026',
    date: '2026-09-25',
    category: 'Directive',
    priority: 'High',
    content: 'Under MoES flagship Mission Mausam, all IMD Scientists and Scientific Assistants across all 6 RMCs are instructed to complete the Dual-Pol DWR & NWP Certification by 15 November 2026 to align with next-gen X-Band & C-Band radar inductees.'
  },
  {
    id: 'ann-2',
    title: 'Post-Monsoon Cyclone Preparedness Simulation Drill Scheduled for 12-14 October',
    date: '2026-09-20',
    category: 'Simulation Drill',
    priority: 'Urgent',
    content: 'All coastal station forecasters (Chennai, Kolkata, Bhubaneswar, Mumbai, Thiruvananthapuram) must access the Timed Cyclone Warning Assessment module for the automated readiness audit.'
  },
  {
    id: 'ann-3',
    title: 'New Offline PWA Pack for High Altitude & Island Stations Released',
    date: '2026-09-18',
    category: 'System Update',
    priority: 'Normal',
    content: 'Trainees stationed at Leh, Port Blair, Minicoy, and Kargil can now cache all 8 core technical manuals and video transcripts locally with zero network latency.'
  },
  {
    id: 'ann-4',
    title: 'INSAT-3DS Advanced Nowcasting Workshops Open for Enrollment',
    date: '2026-09-15',
    category: 'Training',
    priority: 'Normal',
    content: 'Batch-IV registrations are now open with live interactive sessions led by Senior Satellite Scientists from IMD HQ New Delhi and SAC-ISRO.'
  }
];

export const MOCK_ACHIEVEMENTS = [
  {
    id: 'ach-1',
    metric: '4,820+',
    title: 'IMD Personnel Upskilled',
    subtitle: 'Across 120 national observatories & regional meteorological centers'
  },
  {
    id: 'ach-2',
    metric: '99.4%',
    title: 'Operational Readiness Index',
    subtitle: 'Achieved across Eastern & Western Coastal Cyclone Early Warning networks'
  },
  {
    id: 'ach-3',
    metric: '3,410+',
    title: 'Verifiable Digital Certificates',
    subtitle: 'Cryptographically authenticated with SHA-256 and QR lookup'
  },
  {
    id: 'ach-4',
    metric: '₹14.2 Cr',
    title: 'Public Funds Saved',
    subtitle: 'Annual reduction in physical TA/DA travel overhead via cloud LMS'
  }
];

// Differentiator 1: Smart Competency Mapping Engine Data
export const COMPETENCY_MAPPING_DATA = [
  {
    topicId: 'comp-dwr-calib',
    subject: 'Dual-Pol Doppler Radar Sun-Pointing & Antenna Beam Calibration',
    domain: 'Radar & Remote Sensing',
    requiredLevel: 'Senior Specialist / Master Trainer',
    urgency: 'High (Pre-Cyclone Season)',
    targetStations: ['MC Leh', 'RMC Kolkata', 'MC Port Blair'],
    matches: [
      {
        scientistId: 'user-trainer-1',
        name: 'Dr. Sangeeta Rao',
        center: 'RMC New Delhi',
        designation: 'Scientist-F (22 Yrs Exp)',
        matchScore: 96,
        criteria: {
          experience: '22 years operational radar telemetry (Weight 30% → 29.5%)',
          publications: '28 peer-reviewed DWR research papers (Weight 25% → 24.5%)',
          trainerRating: '4.9 / 5.0 across 840 trainee evaluations (Weight 25% → 24.0%)',
          stationProximity: 'Direct RMC Lead / Master Certifier (Weight 20% → 18.0%)'
        },
        status: 'Assigned as Course Lead'
      },
      {
        scientistId: 'user-trainer-extra-1',
        name: 'Dr. Bhupendra Singh',
        center: 'RMC Nagpur',
        designation: 'Scientist-E (17 Yrs Exp)',
        matchScore: 89,
        criteria: {
          experience: '17 years C-Band DWR operational maintenance (Weight 30% → 26.0%)',
          publications: '14 papers on radar reflectivity calibration (Weight 25% → 21.0%)',
          trainerRating: '4.7 / 5.0 across 320 trainees (Weight 25% → 23.5%)',
          stationProximity: 'Central India Hub (Weight 20% → 18.5%)'
        },
        status: 'Available for Backup'
      },
      {
        scientistId: 'user-trainer-extra-2',
        name: 'Dr. Aniruddha Roy',
        center: 'RMC Kolkata',
        designation: 'Scientist-E (14 Yrs Exp)',
        matchScore: 84,
        criteria: {
          experience: '14 years Doppler radar operations in Bay of Bengal (Weight 30% → 24.0%)',
          publications: '9 papers on thunderstorm cell tracking (Weight 25% → 19.0%)',
          trainerRating: '4.6 / 5.0 (Weight 25% → 22.0%)',
          stationProximity: 'Direct Eastern Coast station (Weight 20% → 19.0%)'
        },
        status: 'Available'
      }
    ]
  },
  {
    topicId: 'comp-tc-rapid',
    subject: 'Tropical Cyclone Rapid Intensification (RI) & Ocean Heat Potential (TCHP)',
    domain: 'Cyclone Tracking',
    requiredLevel: 'Chief Forecaster',
    urgency: 'Critical',
    targetStations: ['RMC Chennai', 'MC Bhubaneswar', 'RMC Mumbai'],
    matches: [
      {
        scientistId: 'user-trainer-2',
        name: 'Dr. Meenakshi Sundaram',
        center: 'RMC Chennai',
        designation: 'Scientist-F & Cyclone Warning Lead (21 Yrs Exp)',
        matchScore: 98,
        criteria: {
          experience: '21 years tropical cyclone warning director (Weight 30% → 30.0%)',
          publications: '34 WMO / IMD technical bulletins & publications (Weight 25% → 25.0%)',
          trainerRating: '5.0 / 5.0 across 620 trainees (Weight 25% → 25.0%)',
          stationProximity: 'On-site Area Cyclone Warning Centre Chennai (Weight 20% → 18.0%)'
        },
        status: 'Assigned as Course Lead'
      },
      {
        scientistId: 'user-trainer-extra-3',
        name: 'Dr. K. S. Hosalikar',
        center: 'RMC Mumbai',
        designation: 'Scientist-G (24 Yrs Exp)',
        matchScore: 92,
        criteria: {
          experience: '24 years coastal forecasting & Arabian Sea cyclones (Weight 30% → 28.5%)',
          publications: '22 papers on monsoon depressions (Weight 25% → 22.5%)',
          trainerRating: '4.8 / 5.0 (Weight 25% → 23.0%)',
          stationProximity: 'Western Coast Lead (Weight 20% → 18.0%)'
        },
        status: 'Available'
      }
    ]
  },
  {
    topicId: 'comp-nwp-wrfda',
    subject: 'WRF Data Assimilation (WRF-DA) of Doppler Radial Velocities & INSAT-3D Sounder',
    domain: 'Modeling & Computing',
    requiredLevel: 'Computational Scientist',
    urgency: 'Medium',
    targetStations: ['RMC New Delhi', 'MC Pune'],
    matches: [
      {
        scientistId: 'user-trainer-nwp',
        name: 'Dr. A. K. Mitra',
        center: 'RMC New Delhi',
        designation: 'Scientist-G & Head of Numerical Modeling (25 Yrs Exp)',
        matchScore: 95,
        criteria: {
          experience: '25 years High Performance Computing & NCUM/WRF lead (Weight 30% → 29.5%)',
          publications: '42 international peer-reviewed citations (Weight 25% → 25.0%)',
          trainerRating: '4.8 / 5.0 across 410 trainees (Weight 25% → 23.5%)',
          stationProximity: 'MoES NCMRWF / IMD HQ cluster (Weight 20% → 17.0%)'
        },
        status: 'Assigned as Course Lead'
      }
    ]
  }
];

// Differentiator 2: Automated Skill Matrix & National Readiness Index
export const SKILL_MATRIX_DATA = {
  nationalReadinessIndex: 86.4,
  targetBenchmark: 80.0,
  lastUpdated: '2026-09-29 18:30 IST',
  emergencyScenarios: {
    normal: { name: 'Standard Operational Baseline', weight: 'Normal 1.0x' },
    cyclone: { name: 'Post-Monsoon Cyclone Tracking Drill', weight: 'Cyclone & Surge 2.5x' },
    monsoon: { name: 'Southwest Monsoon Heavy Inundation', weight: 'NWP & Agro-Met 2.2x' },
    cryosphere: { name: 'Himalayan Western Disturbance & Avalanche', weight: 'Satellite & High-Alt 2.0x' }
  },
  centers: [
    {
      id: 'delhi',
      name: 'RMC New Delhi (Northern HQ)',
      radarScore: 94,
      nwpScore: 96,
      cycloneScore: 82,
      satelliteScore: 95,
      agroScore: 90,
      baselineReadiness: 91.4,
      cycloneDrillReadiness: 88.2,
      monsoonDrillReadiness: 94.8,
      status: 'Fully Ready',
      deficitAreas: []
    },
    {
      id: 'chennai',
      name: 'RMC Chennai (Southern)',
      radarScore: 92,
      nwpScore: 85,
      cycloneScore: 98,
      satelliteScore: 91,
      agroScore: 88,
      baselineReadiness: 90.8,
      cycloneDrillReadiness: 96.5,
      monsoonDrillReadiness: 89.0,
      status: 'Fully Ready',
      deficitAreas: []
    },
    {
      id: 'kolkata',
      name: 'RMC Kolkata (Eastern)',
      radarScore: 88,
      nwpScore: 82,
      cycloneScore: 94,
      satelliteScore: 86,
      agroScore: 84,
      baselineReadiness: 86.8,
      cycloneDrillReadiness: 92.4,
      monsoonDrillReadiness: 85.6,
      status: 'Adequate',
      deficitAreas: ['NWP Ensemble Interpretation']
    },
    {
      id: 'mumbai',
      name: 'RMC Mumbai (Western)',
      radarScore: 90,
      nwpScore: 86,
      cycloneScore: 91,
      satelliteScore: 88,
      agroScore: 86,
      baselineReadiness: 88.2,
      cycloneDrillReadiness: 90.5,
      monsoonDrillReadiness: 88.4,
      status: 'Fully Ready',
      deficitAreas: []
    },
    {
      id: 'guwahati',
      name: 'RMC Guwahati (North-Eastern)',
      radarScore: 74,
      nwpScore: 72,
      cycloneScore: 68,
      satelliteScore: 84,
      agroScore: 82,
      baselineReadiness: 76.0,
      cycloneDrillReadiness: 71.5,
      monsoonDrillReadiness: 78.2,
      status: 'Deficit Alert',
      deficitAreas: ['Dual-Pol Radar Calibration', 'Complex Terrain NWP Modeling']
    },
    {
      id: 'nagpur',
      name: 'RMC Nagpur (Central)',
      radarScore: 85,
      nwpScore: 80,
      cycloneScore: 76,
      satelliteScore: 82,
      agroScore: 92,
      baselineReadiness: 83.0,
      cycloneDrillReadiness: 79.2,
      monsoonDrillReadiness: 86.0,
      status: 'Adequate',
      deficitAreas: ['Cyclone SLOSH Storm Surge']
    },
    {
      id: 'leh',
      name: 'MC Leh Ladakh (High Altitude)',
      radarScore: 68,
      nwpScore: 70,
      cycloneScore: 50,
      satelliteScore: 88,
      agroScore: 65,
      baselineReadiness: 68.2,
      cycloneDrillReadiness: 58.0,
      monsoonDrillReadiness: 71.0,
      status: 'Critical Attention',
      deficitAreas: ['Mountain AWS Maintenance', 'Low-Bandwidth Satellite Feeds']
    },
    {
      id: 'portblair',
      name: 'MC Port Blair (Andaman & Nicobar)',
      radarScore: 82,
      nwpScore: 75,
      cycloneScore: 90,
      satelliteScore: 84,
      agroScore: 70,
      baselineReadiness: 80.2,
      cycloneDrillReadiness: 87.5,
      monsoonDrillReadiness: 77.0,
      status: 'Adequate',
      deficitAreas: ['AWS Sea Spray Corrosion Protocol']
    }
  ]
};

// Verifiable Certificates Records
export const VERIFIABLE_CERTIFICATES_DB = [
  {
    id: 'IMD-CERT-2025-SAT-4819',
    traineeName: 'Dr. Ramesh Sharma',
    employeeId: 'IMD-2021-9482',
    designation: 'Meteorologist-B',
    center: 'Meteorological Centre Pune',
    courseId: 'course-4',
    courseName: 'Satellite Meteorology: INSAT-3DR & 3DS Payload Analysis & Nowcasting',
    issueDate: '2025-11-20',
    validUntil: 'Lifetime Verification',
    score: 94,
    grade: 'A+ (Distinction)',
    trainerName: 'Dr. Ramesh Sharma (Lead) & SAC-ISRO Panel',
    authorizedBy: 'Shri Vikramaditya Sen, Director of Capacity Building, MoES',
    sha256Hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    status: 'AUTHENTIC & VERIFIED',
    accreditation: 'MoES Digital Public Good (DPG) & WMO-RTC Recognized'
  },
  {
    id: 'IMD-CERT-2026-DWR-9012',
    traineeName: 'Ananya Sen',
    employeeId: 'IMD-2023-4412',
    designation: 'Scientific Assistant',
    center: 'RMC Kolkata',
    courseId: 'course-1',
    courseName: 'Dual-Polarimetric Doppler Weather Radar (DWR) Operation & Interpretation',
    issueDate: '2026-02-14',
    validUntil: 'Lifetime Verification',
    score: 88,
    grade: 'A (High Honors)',
    trainerName: 'Dr. Sangeeta Rao, Scientist-F',
    authorizedBy: 'Director General of Meteorology, IMD New Delhi',
    sha256Hash: 'a7c93e449b2910fa48f8b8269e0618df4f5d688cf6cfefb038e8f8045610ec87',
    status: 'AUTHENTIC & VERIFIED',
    accreditation: 'MoES Digital Public Good (DPG) & WMO-RTC Recognized'
  },
  {
    id: 'IMD-CERT-2026-TC-7741',
    traineeName: 'Priya Pillai',
    employeeId: 'IMD-2020-3390',
    designation: 'Meteorologist-A',
    center: 'RMC Chennai',
    courseId: 'course-3',
    courseName: 'Bay of Bengal & Arabian Sea Tropical Cyclone Genesis, Intensity & Track Forecasting',
    issueDate: '2026-05-18',
    validUntil: 'Lifetime Verification',
    score: 96,
    grade: 'A+ (Distinction)',
    trainerName: 'Dr. Meenakshi Sundaram, Scientist-F',
    authorizedBy: 'Director General of Meteorology, IMD New Delhi',
    sha256Hash: 'f4129b09a128e404b901fa49586119857d42cf38965825a0758bb8efc8646b9a',
    status: 'AUTHENTIC & VERIFIED',
    accreditation: 'MoES Digital Public Good (DPG) & WMO-RTC Recognized'
  }
];

export const MOCK_AUDIT_LOGS = [
  { id: 'log-1', timestamp: '2026-09-29 18:24:10', ip: '10.14.88.21 (NIC-Gov)', action: 'USER_APPROVED', actor: 'Shri Vikramaditya Sen (Admin)', details: 'Approved registration of Ananya Sen (RMC Kolkata) as Trainee' },
  { id: 'log-2', timestamp: '2026-09-29 17:15:44', ip: '10.14.88.19 (NIC-Gov)', action: 'CERTIFICATE_GENERATED', actor: 'System Auto-Engine', details: 'Issued IMD-CERT-2026-DWR-9012 with SHA-256 integrity hash' },
  { id: 'log-3', timestamp: '2026-09-29 15:40:02', ip: '10.12.44.11 (Pune MC)', action: 'ASSESSMENT_COMPLETED', actor: 'Dr. Ramesh Sharma (Trainee)', details: 'Completed DWR Module 1 Timed Test with 100% score' },
  { id: 'log-4', timestamp: '2026-09-29 14:02:18', ip: '10.10.02.50 (IMD HQ)', action: 'COMPETENCY_ASSIGNED', actor: 'Dr. Sangeeta Rao (Trainer)', details: 'Assigned as Course Lead for DWR Sun-Pointing Calibration' },
  { id: 'log-5', timestamp: '2026-09-29 11:12:00', ip: '10.14.88.21 (NIC-Gov)', action: 'ANNOUNCEMENT_PUBLISHED', actor: 'Shri Vikramaditya Sen (Admin)', details: 'Published Mission Mausam Capacity Directive 2026' }
];
