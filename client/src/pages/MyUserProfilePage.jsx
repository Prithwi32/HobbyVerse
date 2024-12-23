import { useState } from 'react';
import Sidebar from '../components/Profile/Sidebar';
import ProfileSection from '../components/Profile/ProfileSection';
import SessionPage from './SessionPage';
import EventPage from './EventPage';

export default function MyUserProfilePage() {
  const [activeSection, setActiveSection] = useState('profile');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar} // Close the sidebar when a button is clicked
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
        {activeSection === 'events' && <EventPage />}
        {activeSection === 'session' && <SessionPage />}
      </main>
    </div>
  );
}
