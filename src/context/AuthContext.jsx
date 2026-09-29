import React, { createContext, useContext, useState, useEffect } from 'react';
import { MOCK_USERS, MOCK_COURSES, VERIFIABLE_CERTIFICATES_DB, MOCK_AUDIT_LOGS } from '../data/mockData';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Load users or initialize
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('capacity_users');
    return saved ? JSON.parse(saved) : MOCK_USERS;
  });

  // Current logged in user (default to Trainee Dr. Ramesh Sharma for interactive demo)
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('capacity_current_user');
    return saved ? JSON.parse(saved) : MOCK_USERS[0];
  });

  // Enrolled courses state for current user
  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem('capacity_courses');
    return saved ? JSON.parse(saved) : MOCK_COURSES;
  });

  // Certificates database
  const [certificates, setCertificates] = useState(() => {
    const saved = localStorage.getItem('capacity_certs');
    return saved ? JSON.parse(saved) : VERIFIABLE_CERTIFICATES_DB;
  });

  // Audit logs
  const [auditLogs, setAuditLogs] = useState(() => {
    const saved = localStorage.getItem('capacity_audit');
    return saved ? JSON.parse(saved) : MOCK_AUDIT_LOGS;
  });

  // Notifications toast list
  const [toasts, setToasts] = useState([]);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('capacity_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('capacity_current_user', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('capacity_courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('capacity_certs', JSON.stringify(certificates));
  }, [certificates]);

  useEffect(() => {
    localStorage.setItem('capacity_audit', JSON.stringify(auditLogs));
  }, [auditLogs]);

  const addToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Switch role seamlessly (Trainee, Trainer, Admin, Guest)
  const switchRole = (role) => {
    if (role === 'guest') {
      setCurrentUser(null);
      addToast('Switched to Public Guest view', 'info');
      return;
    }
    const target = users.find((u) => u.role === role && u.status === 'Active');
    if (target) {
      setCurrentUser(target);
      addToast(`Switched view to ${target.role.toUpperCase()}: ${target.name} (${target.center})`, 'success');
    }
  };

  // Login handler
  const login = (email, password) => {
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      addToast('User not found. Try one of the quick demo accounts.', 'error');
      return { success: false, error: 'User not found' };
    }
    if (user.status === 'Pending Approval') {
      addToast('Your registration is pending MoES/IMD Admin verification.', 'warning');
      return { success: false, error: 'Registration pending approval' };
    }
    setCurrentUser(user);
    addToast(`Welcome back, ${user.name}! Authenticated with JWT session.`, 'success');
    return { success: true, user };
  };

  // Logout handler
  const logout = () => {
    setCurrentUser(null);
    addToast('You have been logged out securely.', 'info');
  };

  // Register new applicant
  const registerUser = (formData) => {
    const newUser = {
      id: `user-pending-${Date.now()}`,
      name: formData.name,
      email: formData.email,
      employeeId: formData.employeeId,
      role: formData.role || 'trainee',
      status: 'Pending Approval',
      center: formData.center,
      stationCode: formData.stationCode || 'NEW-01',
      designation: formData.designation,
      department: formData.department,
      qualification: formData.qualification,
      experienceYears: Number(formData.experienceYears) || 1,
      requestedDate: new Date().toISOString().split('T')[0],
      enrolledCourseIds: [],
      completedCourseIds: [],
      certificates: [],
      badgesEarned: [],
      skills: [
        { name: 'Surface Observation', level: 60 },
        { name: 'Basic Meteorology', level: 65 }
      ]
    };

    setUsers((prev) => [newUser, ...prev]);

    // Record audit
    const newLog = {
      id: `log-${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      ip: '10.14.99.12 (Applicant)',
      action: 'USER_REGISTERED',
      actor: newUser.name,
      details: `New registration submitted for ${newUser.center} (${newUser.designation}). Awaiting Admin verification.`
    };
    setAuditLogs((prev) => [newLog, ...prev]);

    addToast('Registration submitted! Status: "Pending Approval" by Station Head / MoES Admin.', 'success');
    return { success: true };
  };

  // Admin approves applicant
  const approveUser = (userId, allocatedRole) => {
    setUsers((prev) =>
      prev.map((u) => {
        if (u.id === userId) {
          return {
            ...u,
            status: 'Active',
            role: allocatedRole || u.role,
            joinedDate: new Date().toISOString().split('T')[0]
          };
        }
        return u;
      })
    );

    const approvedUser = users.find((u) => u.id === userId);
    const newLog = {
      id: `log-${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      ip: '10.14.88.21 (MoES Admin)',
      action: 'USER_APPROVED',
      actor: currentUser?.name || 'Administrator',
      details: `Approved applicant ${approvedUser?.name} as ${allocatedRole || approvedUser?.role}.`
    };
    setAuditLogs((prev) => [newLog, ...prev]);
    addToast(`Approved ${approvedUser?.name} with role: ${allocatedRole || approvedUser?.role}`, 'success');
  };

  // Admin rejects applicant
  const rejectUser = (userId) => {
    setUsers((prev) => prev.filter((u) => u.id !== userId));
    addToast('Application rejected and archived.', 'info');
  };

  // Trainee enrolls in course
  const enrollCourse = (courseId) => {
    if (!currentUser) {
      addToast('Please login to enroll in courses.', 'warning');
      return;
    }
    const currentEnrolled = currentUser.enrolledCourseIds || [];
    if (currentEnrolled.includes(courseId)) {
      addToast('Already enrolled in this course!', 'info');
      return;
    }

    const updatedUser = {
      ...currentUser,
      enrolledCourseIds: [...currentEnrolled, courseId]
    };

    setCurrentUser(updatedUser);
    setUsers((prev) => prev.map((u) => (u.id === currentUser.id ? updatedUser : u)));

    // Increment course enrollment count
    setCourses((prev) =>
      prev.map((c) => (c.id === courseId ? { ...c, enrolledCount: c.enrolledCount + 1 } : c))
    );

    const targetCourse = courses.find((c) => c.id === courseId);
    addToast(`Successfully enrolled in "${targetCourse?.title}"!`, 'success');
  };

  // Trainee completes assessment & gets certificate
  const issueCertificate = (courseId, score) => {
    const course = courses.find((c) => c.id === courseId);
    if (!course || !currentUser) return null;

    const certId = `IMD-CERT-${new Date().getFullYear()}-${course.code.split('-')[1] || 'MOD'}-${Math.floor(1000 + Math.random() * 9000)}`;
    const randomHash = Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join('');

    const newCertificate = {
      id: certId,
      traineeName: currentUser.name,
      employeeId: currentUser.employeeId,
      designation: currentUser.designation,
      center: currentUser.center,
      courseId: course.id,
      courseName: course.title,
      issueDate: new Date().toISOString().split('T')[0],
      validUntil: 'Lifetime Verification',
      score: score,
      grade: score >= 90 ? 'A+ (Distinction)' : score >= 80 ? 'A (Honors)' : 'B+ (Proficient)',
      trainerName: `${course.trainer.name} (${course.trainer.designation})`,
      authorizedBy: 'Shri Vikramaditya Sen, Director of Capacity Building, MoES & DG Meteorology, IMD',
      sha256Hash: randomHash,
      status: 'AUTHENTIC & VERIFIED',
      accreditation: 'MoES Digital Public Good (DPG) & WMO-RTC Recognized'
    };

    // Add to global certificates DB
    setCertificates((prev) => [newCertificate, ...prev]);

    // Update current user
    const updatedUser = {
      ...currentUser,
      completedCourseIds: [...(currentUser.completedCourseIds || []), courseId],
      certificates: [...(currentUser.certificates || []), newCertificate],
      readinessScore: Math.min(98, (currentUser.readinessScore || 80) + 4)
    };

    setCurrentUser(updatedUser);
    setUsers((prev) => prev.map((u) => (u.id === currentUser.id ? updatedUser : u)));

    // Record audit
    const newLog = {
      id: `log-${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      ip: '10.12.88.99 (LMS Engine)',
      action: 'CERTIFICATE_ISSUED',
      actor: 'System Evaluation Engine',
      details: `Generated verifiable certificate ${certId} for ${currentUser.name} (Score: ${score}%)`
    };
    setAuditLogs((prev) => [newLog, ...prev]);

    addToast(`Congratulations! Verifiable Certificate ${certId} generated!`, 'success');
    return newCertificate;
  };

  // Reset to default mock data (for quick test refresh during demo)
  const resetDemoData = () => {
    localStorage.removeItem('capacity_users');
    localStorage.removeItem('capacity_current_user');
    localStorage.removeItem('capacity_courses');
    localStorage.removeItem('capacity_certs');
    localStorage.removeItem('capacity_audit');
    setUsers(MOCK_USERS);
    setCurrentUser(MOCK_USERS[0]);
    setCourses(MOCK_COURSES);
    setCertificates(VERIFIABLE_CERTIFICATES_DB);
    setAuditLogs(MOCK_AUDIT_LOGS);
    addToast('Demo database restored to default IMD state.', 'info');
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        users,
        courses,
        certificates,
        auditLogs,
        toasts,
        addToast,
        removeToast,
        switchRole,
        login,
        logout,
        registerUser,
        approveUser,
        rejectUser,
        enrollCourse,
        issueCertificate,
        resetDemoData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
