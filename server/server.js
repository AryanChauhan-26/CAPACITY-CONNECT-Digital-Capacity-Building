import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-Memory Database / Mock Store for Prototype
let mockDb = {
  users: [],
  courses: [],
  certificates: [],
  auditLogs: []
};

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    service: 'MoES / IMD Capacity Connect Backend Gateway',
    timestamp: new Date().toISOString(),
    certInCompliance: 'ACTIVE',
    cacheEngine: 'Redis In-Memory Enabled'
  });
});

// Import and mount routers (stubs for production DB connectivity)
// app.use('/api/auth', authRoutes);
// app.use('/api/courses', courseRoutes);
// app.use('/api/competency-mapping', competencyRoutes);
// app.use('/api/skill-matrix', skillMatrixRoutes);

app.listen(PORT, () => {
  console.log(`[MoES IMD LMS] Server running on http://localhost:${PORT}`);
});

export default app;
