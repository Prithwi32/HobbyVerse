import React, { useState } from 'react';
import Sidebar from '../components/profile/Sidebar';
import ProfileSection from '../components/profile/ProfileSection';
import SkillsSection from '../components/profile/SkillsSection';
import EventsSection from '../components/profile/EventsSection';
import FeedbackSection from '../components/profile/FeedbackSection';

export default function UserProfilePage() {
  const [activeSection, setActiveSection] = useState('profile');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="flex-grow p-8">
        <button
          onClick={toggleSidebar}
          className="fixed top-2 left-4 z-50 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        {activeSection === 'profile' && <ProfileSection />}
        {activeSection === 'skills' && <SkillsSection />}
        {activeSection === 'events' && <EventsSection />}
        {activeSection === 'feedback' && <FeedbackSection />}
      </main>
      
    </div>
  );
}