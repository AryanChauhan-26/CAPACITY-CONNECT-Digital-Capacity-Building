-- PostgreSQL Schema for MoES / IMD Capacity Connect Portal
-- Smart India Hackathon 2026, Problem Statement 26075

-- 1. IMD Regional Centres & Observatories
CREATE TABLE imd_centers (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    region VARCHAR(50) NOT NULL,
    code VARCHAR(20) UNIQUE NOT NULL,
    staff_count INT DEFAULT 0,
    readiness_index DECIMAL(5,2) DEFAULT 80.00,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Users Table (RBAC: trainee, trainer, admin)
CREATE TABLE users (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    employee_id VARCHAR(50) UNIQUE NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('trainee', 'trainer', 'admin')),
    status VARCHAR(30) NOT NULL DEFAULT 'Pending Approval' CHECK (status IN ('Pending Approval', 'Active', 'Deactivated')),
    center_id VARCHAR(50) REFERENCES imd_centers(id),
    designation VARCHAR(150),
    department VARCHAR(150),
    qualification TEXT,
    experience_years INT DEFAULT 1,
    avatar_url TEXT,
    readiness_score INT DEFAULT 80,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. User Assessed Competencies
CREATE TABLE user_skills (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(50) REFERENCES users(id) ON DELETE CASCADE,
    skill_name VARCHAR(150) NOT NULL,
    proficiency_level INT CHECK (proficiency_level BETWEEN 0 AND 100),
    last_evaluated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Courses Catalog
CREATE TABLE courses (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    code VARCHAR(50) UNIQUE NOT NULL,
    domain VARCHAR(100) NOT NULL,
    level VARCHAR(50) NOT NULL,
    duration VARCHAR(50) NOT NULL,
    rating DECIMAL(3,2) DEFAULT 4.8,
    enrolled_count INT DEFAULT 0,
    completion_rate INT DEFAULT 85,
    lead_trainer_id VARCHAR(50) REFERENCES users(id),
    description TEXT,
    thumbnail_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Course Modules & Lessons
CREATE TABLE modules (
    id VARCHAR(50) PRIMARY KEY,
    course_id VARCHAR(50) REFERENCES courses(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    module_order INT NOT NULL
);

CREATE TABLE lessons (
    id VARCHAR(50) PRIMARY KEY,
    module_id VARCHAR(50) REFERENCES modules(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    duration VARCHAR(50),
    lesson_type VARCHAR(20) CHECK (lesson_type IN ('video', 'document', 'lab')),
    content_url TEXT,
    text_transcript TEXT
);

-- 6. Course Enrollments
CREATE TABLE enrollments (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(50) REFERENCES users(id) ON DELETE CASCADE,
    course_id VARCHAR(50) REFERENCES courses(id) ON DELETE CASCADE,
    progress_percentage INT DEFAULT 0,
    status VARCHAR(30) DEFAULT 'In Progress' CHECK (status IN ('In Progress', 'Completed')),
    enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP WITH TIME ZONE
);

-- 7. Verifiable Digital Certificates
CREATE TABLE certificates (
    id VARCHAR(100) PRIMARY KEY,
    trainee_id VARCHAR(50) REFERENCES users(id),
    course_id VARCHAR(50) REFERENCES courses(id),
    score INT NOT NULL,
    grade VARCHAR(50) NOT NULL,
    sha256_hash CHAR(64) NOT NULL,
    authorized_by VARCHAR(255) NOT NULL,
    issue_date DATE NOT NULL,
    status VARCHAR(50) DEFAULT 'AUTHENTIC & VERIFIED',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 8. CERT-In Compliant Security Audit Logs
CREATE TABLE audit_logs (
    id SERIAL PRIMARY KEY,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    source_ip VARCHAR(45) NOT NULL,
    action VARCHAR(100) NOT NULL,
    actor_id VARCHAR(50) REFERENCES users(id),
    details TEXT
);
