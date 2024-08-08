import React from 'react';
import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
 import LoginPage from './components/LoginPage';
 import RegistrationPage from './components/RegistrationPage';
import LandingPage from './components/landingPage';
import Dashboard from './components/Dashboard';
import ProfilePage from './components/ProfilePage';
import UpdateProfile from './components/UpdateProfile'; 
import UploadProof from './components/UploadProof';
import TaskCards from './components/TaskCards';
import ProofDetails from './components/ProofDetails';
import PendingVerifications from './components/PendingVerifications';
import CreateProject from './components/CreateProject';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import ExistingProject from './components/ExistingProject';
import ProjectDetails from './components/ProjectDetails';
import EditProjectDetails from './components/EditProjectDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard/:username" element={<Dashboard />} />
        <Route path="/profile/:username" element={<ProfilePage />} /> 
        <Route path="/updateprofile/:username" element={<UpdateProfile />} />
        <Route path="/upload-proof/:username" element={<UploadProof />} />
        <Route path="/tasksAssigned/:username" element={<TaskCards />} />
        <Route path="/proof-details/:taskId" element={<ProofDetails />} />
        <Route path="/pending-verifications/:username" element={<PendingVerifications />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="*" element={<Navigate to="/LandingPage" />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/existing-project/:username" element={<ExistingProject />} />
        <Route path="/project/:projectname" element={<ProjectDetails />} />
        <Route path="/project/:projectname/edit" element={<EditProjectDetails />} />
        {/* Other routes can be added here */}
      </Routes>
    </Router>
  );
}

export default App;
