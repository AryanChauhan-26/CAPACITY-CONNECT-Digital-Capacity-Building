import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LowBandwidthProvider, useLowBandwidth } from './context/LowBandwidthContext';
import { GovHeader } from './components/common/GovHeader';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ToastContainer } from './components/common/ToastContainer';
import { DemoRoleBar } from './components/common/DemoRoleBar';

// Pages
import { LandingPage } from './pages/LandingPage';
import { CourseCatalogPage } from './pages/CourseCatalogPage';
import { CoursePlayerPage } from './pages/CoursePlayerPage';
import { AssessmentPage } from './pages/AssessmentPage';
import { TraineeDashboard } from './pages/TraineeDashboard';
import { TraineeProfilePage } from './pages/TraineeProfilePage';
import { CertificatesPage } from './pages/CertificatesPage';
import { TrainerDashboard } from './pages/TrainerDashboard';
import { ContentRepositoryPage } from './pages/ContentRepositoryPage';
import { EvaluationSuitePage } from './pages/EvaluationSuitePage';
import { TrainerAnalyticsPage } from './pages/TrainerAnalyticsPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { UserManagementPage } from './pages/UserManagementPage';
import { HomepageManagerPage } from './pages/HomepageManagerPage';
import { CompetencyMappingPage } from './pages/CompetencyMappingPage';
import { SkillMatrixPage } from './pages/SkillMatrixPage';
import { VerifyCertificatePage } from './pages/VerifyCertificatePage';
import { AboutPage } from './pages/AboutPage';
import { ArchitecturePage } from './pages/ArchitecturePage';
import { ImpactPage } from './pages/ImpactPage';
import { RisksPage } from './pages/RisksPage';
import { AuthPage } from './pages/AuthPage';

// Route Guard Component
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  if (allowedRoles && !allowedRoles.includes(currentUser.role)) {
    // If not authorized for this specific role, redirect to appropriate role dashboard
    if (currentUser.role === 'admin') return <Navigate to="/admin" replace />;
    if (currentUser.role === 'trainer') return <Navigate to="/trainer" replace />;
    return <Navigate to="/trainee" replace />;
  }
  return children;
};

// Inner App Layout
const AppLayout = () => {
  const { fontSize } = useLowBandwidth();

  let fontClass = '';
  if (fontSize === 'large') fontClass = 'text-base';
  if (fontSize === 'xl') fontClass = 'text-lg';

  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 text-slate-900 ${fontClass}`}>
      <GovHeader />
      <Navbar />

      <main className="flex-1">
        <Routes>
          {/* Public & Core Pages */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses" element={<CourseCatalogPage />} />
          <Route path="/course/:id" element={<CoursePlayerPage />} />
          <Route path="/assessment/:id" element={<AssessmentPage />} />
          <Route path="/competency-mapping" element={<CompetencyMappingPage />} />
          <Route path="/skill-matrix" element={<SkillMatrixPage />} />
          <Route path="/verify-certificate" element={<VerifyCertificatePage />} />

          {/* Hackathon Presentation Dossier */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/risks" element={<RisksPage />} />

          {/* Auth */}
          <Route path="/login" element={<AuthPage initialMode="login" />} />
          <Route path="/register" element={<AuthPage initialMode="register" />} />

          {/* Trainee Workspace */}
          <Route
            path="/trainee"
            element={
              <ProtectedRoute allowedRoles={['trainee', 'trainer', 'admin']}>
                <TraineeDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trainee/profile"
            element={
              <ProtectedRoute allowedRoles={['trainee', 'trainer', 'admin']}>
                <TraineeProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trainee/certificates"
            element={
              <ProtectedRoute allowedRoles={['trainee', 'trainer', 'admin']}>
                <CertificatesPage />
              </ProtectedRoute>
            }
          />

          {/* Trainer Workspace */}
          <Route
            path="/trainer"
            element={
              <ProtectedRoute allowedRoles={['trainer', 'admin']}>
                <TrainerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trainer/content"
            element={
              <ProtectedRoute allowedRoles={['trainer', 'admin']}>
                <ContentRepositoryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trainer/evaluations"
            element={
              <ProtectedRoute allowedRoles={['trainer', 'admin']}>
                <EvaluationSuitePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/trainer/analytics"
            element={
              <ProtectedRoute allowedRoles={['trainer', 'admin']}>
                <TrainerAnalyticsPage />
              </ProtectedRoute>
            }
          />

          {/* Admin Workspace */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <UserManagementPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/homepage"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <HomepageManagerPage />
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <ToastContainer />
      <DemoRoleBar />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <LowBandwidthProvider>
        <AuthProvider>
          <AppLayout />
        </AuthProvider>
      </LowBandwidthProvider>
    </Router>
  );
}
