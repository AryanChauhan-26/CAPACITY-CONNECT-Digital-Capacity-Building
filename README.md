# CAPACITY CONNECT – A Digital Capacity Building & LMS Portal
### Ministry of Earth Sciences (MoES) / India Meteorological Department (IMD)
**Smart India Hackathon 2026 | Problem Statement ID: 26075 | Theme: Smart Education**

---

## 🌟 Executive Summary
**CAPACITY CONNECT** is a secure, cloud-native Learning Management System (LMS) and competency-tracking platform engineered to unify workforce training across all 6 Regional Meteorological Centres (RMCs) and 120+ observatories of the India Meteorological Department (IMD).

It replaces legacy paper registers, uncoordinated training, and expensive physical travel with an automated, low-bandwidth-resilient digital lifecycle:
**Personnel Registration → Admin Verification → Specialized Enrollment → Low-Bandwidth / Offline Study → Timed Assessment → Cryptographic Verifiable Certification**.

---

## 🚀 Key Differentiators (Core Innovations)

### 1. 🧠 Smart Competency Mapping Engine
- **What it does:** Solves the challenge of identifying internal training experts across decentralized national observatories.
- **The Engine:** Evaluates scientific profiles across 4 weighted vectors:
  - **30% Operational Years:** Real-world radar/AWS observatory experience
  - **25% Peer Publications:** WMO/IMD research citations in meteorology
  - **25% Trainee Ratings:** Historical performance across past training batches
  - **20% Station Proximity:** Regional terrain and RMC jurisdiction alignment
- **Actionable Outcome:** Generates a real-time match percentage (e.g. 96%) with ranking rationale and an instant **"Assign as Course Lead"** action.

### 2. 📊 Automated Skill Matrix & National Readiness Index
- **What it does:** Provides the Director General of Meteorology and MoES executives with a live meteorological competency heatmap across all 6 RMCs and field stations.
- **Emergency Scenarios Engine:** Real-time filter toggles dynamically recalculate workforce preparedness:
  - 🌪️ **Cyclone Tracking Drill:** Pre/Post-Monsoon severe weather readiness (Bay of Bengal / Arabian Sea)
  - 🌧️ **Southwest Monsoon Heavy Inundation:** NWP modeling and Agro-Met block advisories
  - ❄️ **Himalayan Avalanche & Western Disturbance:** High-altitude mountain observatory readiness
- **Actionable Outcome:** Instantly flags deficit observatories (&lt;75%) and allows 1-click **"Deploy Emergency Training Mission"**.

### 3. ⚡ Low-Bandwidth Mode & PWA Offline Document Viewing
- **What it does:** Guarantees continuous learning for remote observatories operating over 2G/VSAT networks (e.g., Leh, Kargil, Port Blair, Minicoy).
- **Features:**
  - One-click global **Low-Bandwidth Mode** toggle that disables video autoplay, loads compressed vector assets, and activates zero-latency text transcripts.
  - Progressive Web App (PWA) service worker (`sw.js`) and manifest (`manifest.json`) that caches technical manuals and SOPs locally in browser cache for 100% offline study.

### 4. 🔒 Tamper-Proof Cryptographic Verifiable Certification
- **What it does:** Completely eliminates credential forgery.
- **Features:**
  - Every certificate cleared with 75%+ score receives an immutable **SHA-256 cryptographic digest**.
  - Includes an official, high-resolution **Print / PDF layout** with Government of India crest and IMD emblem.
  - **Public Verification Registry (`/verify-certificate`):** Anyone can enter a certificate ID or scan the QR code to verify authenticity in real-time.

---

## 🏗️ Technical Architecture
```text
+-------------------------------------------------------------------------------+
|                        1. CLIENT & PRESENTATION LAYER                         |
|  React 18 SPA | Tailwind CSS | Lucide Icons | PWA Service Worker (Offline Cache)|
|  Low-Bandwidth 2G Mode | WCAG 2.1 AA Accessibility | English/Hindi Bilingual  |
+-------------------------------------------------------------------------------+
                                      │
                                      ▼
+-------------------------------------------------------------------------------+
|                       2. GATEWAY & SECURITY LAYER (RBAC)                      |
|  JWT Session Tokens | 3-Tier RBAC Guard (Trainee / Trainer / Admin)           |
|  CERT-In Audit Logging | XSS/SQLi Sanitization | NIC SSO Ready                |
+-------------------------------------------------------------------------------+
                                      │
                                      ▼
+-------------------------------------------------------------------------------+
|                     3. CORE APPLICATION MICROSERVICES                         |
|  LMS Engine | Smart Competency Mapping | Skill Matrix & Readiness Heatmap    |
|  Timed Assessment Engine | SHA-256 Verifiable Credential Registry             |
+-------------------------------------------------------------------------------+
                                      │
                                      ▼
+-------------------------------------------------------------------------------+
|                       4. DATA & PERSISTENCE LAYER                             |
|  PostgreSQL Database (Strict Relational Schemas) | Redis In-Memory Cache      |
|  PWA CacheStorage / IndexedDB for Offline SOP Manuals                         |
+-------------------------------------------------------------------------------+
```

---

## 👥 3-Tier Role Workspaces

| Role | Person | Center / Department | Features Available |
| :--- | :--- | :--- | :--- |
| **🎓 Trainee** | Dr. Ramesh Sharma | MC Pune (Radar Division) | Enrolled courses, timed tests, dynamic skill profile, verifiable certificates, skill gap meter |
| **👨‍🏫 Trainer** | Dr. Sangeeta Rao | RMC New Delhi HQ (Radar Directorate) | Content repository, drag-and-drop uploads, MCQ assessment builder, trainee analytics |
| **🛡️ MoES Admin**| Shri Vikramaditya Sen | MoES HQ Prithvi Bhavan | Registration approvals queue, RBAC user directory, live directives broadcaster, CSV reporting |

> **Hackathon Quick Switcher:** Use the floating **Demo Role Bar** in the bottom-left corner of the screen or the header dropdown to switch between Trainee, Trainer, and Admin roles in 1 click!

---

## 💻 Setup & Running Locally

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Development Server
```bash
npm run dev
```
Open **`http://localhost:3000`** in your browser.

### 3. Build Production Bundle
```bash
npm run build
```
Verify the zero-error production build generated in `/dist`.

---

## 📁 Repository Structure
```text
├── index.html                   # HTML5 Entry with PWA manifest & SW registration
├── package.json                 # Frontend dependencies (React, Lucide, Recharts, Confetti)
├── tailwind.config.js           # Govt/IMD color tokens & dark/low-bandwidth styling
├── public/
│   ├── imd-logo.svg             # Official vector emblem (Ashok Chakra & Radar sweep)
│   ├── manifest.json            # PWA manifest
│   └── sw.js                    # PWA Service Worker for offline document caching
├── src/
│   ├── main.jsx                 # React root
│   ├── App.jsx                  # Routing, Route Guards & Layout
│   ├── index.css                # Tailwind directives & print styles for certificates
│   ├── context/
│   │   ├── AuthContext.jsx      # JWT mock session, RBAC roles, persistent storage
│   │   └── LowBandwidthContext.jsx # 2G mode, document cache state, accessibility
│   ├── data/
│   │   └── mockData.js          # Realistic datasets (12 centers, 8 courses, 20 users)
│   ├── components/
│   │   ├── common/              # GovHeader, Navbar, Footer, ToastContainer, DemoRoleBar
│   │   └── differentiators/     # SmartCompetencyMapper, SkillMatrixHeatmap, CertificateVerifier
│   └── pages/                   # All 18 application pages
└── server/                      # Ready-to-connect Express/PostgreSQL backend scaffolding
    ├── package.json             # Express, JWT, bcrypt, pg dependencies
    ├── server.js                # Express REST API gateway
    ├── schema.sql               # Complete PostgreSQL relational schema
    └── middleware/
        └── authMiddleware.js    # JWT verification and RBAC guards
```

---

## 🏆 SIH 2026 Presentation Dossier Pages
- **About the Solution (`/about`):** Problem 26075, ground reality, 3-tier model, and before/after comparison.
- **Architecture (`/architecture`):** Interactive visual breakdown of the 4 system layers.
- **Impact & Benefits (`/impact`):** Live KPI counters (₹14.2 Cr saved, 100% digital tracking).
- **Risks & Mitigation (`/risks`):** CERT-In compliance, 2G bandwidth, peak concurrency matrix.

---
*Developed with excellence for Smart India Hackathon 2026. Aligned with MoES flagship "Mission Mausam".*
