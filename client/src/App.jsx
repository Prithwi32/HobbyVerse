import { Route, Routes } from "react-router-dom";
// import axios from "axios";
import AppLayout from "./layout/AppLayout";
import { SignupCard } from "./components/Auth/SignupCard";
import { LoginCard } from "./components/Auth/LoginCard";
import ReportUserForm from "./components/Forms/ReportUserForm";
import EventCreationForm from "./components/Forms/EventCreation";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./pages/ProtectedRoutes";
import MyUserProfilePage from "./pages/MyUserProfilePage";
import LandingPage from "./pages/LandingPage";
import UsersPage from "./components/AllUsersPage";
import UserProfilePage from "./pages/UserProfilePage";
import EventListPage from "./pages/EventListPage";
import NotFoundPage from "./pages/NotFoundPage";
import AllSuggestedLearningPage from "./pages/AllSuggestedLearningPage";

// axios.defaults.baseURL = "http://localhost:5000";
// axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<LandingPage />} />

          {/* Public routes */}
          <Route path="signup" element={<SignupCard />} />
          <Route path="login" element={<LoginCard />} />
          <Route path="events" element={<EventListPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route
            path="allSuggestedLearning"
            element={<AllSuggestedLearningPage />}
          />

          {/*Protected routes with AppLayout */}
          <Route element={<ProtectedRoute />}>
            <Route path="/users/:userId" element={<UserProfilePage />} />
            <Route path="reportuser" element={<ReportUserForm />} />
          </Route>
        </Route>

        {/* Protected routes with no AppLayout*/}
        <Route element={<ProtectedRoute />}>
          <Route path="createEvent" element={<EventCreationForm />} />
          <Route path="userDashboard" element={<MyUserProfilePage />} />
        </Route>

        {/* 404 Page for undefined routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
