import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch,useSelector  } from 'react-redux';
import { Navbar } from "./components";
import ProtectedRoute from "./components/Protected";
import { restoreAuth } from './redux/slices/authSlice';
import GlobalAuthWrapper from './components/GlobalAuthWrapper';


import {
  Login,
  SignUp,
  Welcome,
  Courses,
  Qna,
  Resources,
  Support,
  Profile,
  Module,
  Lesson,
  QnaVault,
  Course,
  Dashboard,
  
} from "./pages";

function App() {

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(restoreAuth());
  }, [dispatch]);

  if (loading) {
    return;
  }

  return (
    
      <Router>
        <GlobalAuthWrapper>
          <Layout />
        </GlobalAuthWrapper>
      </Router>
  );
}

function Layout() {
  const location = useLocation();

  return (
   <>
      {location.pathname !== "/login" && location.pathname !== "/signup" && <Navbar />}

      {/* Render Navbar if not on signin */}
      <Routes>
        <Route path="/" element={<Navigate to="/courses" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
        <Route path="/welcome" element={<ProtectedRoute><Welcome /></ProtectedRoute>} />

        <Route path="/courses" element={<ProtectedRoute><Courses/></ProtectedRoute>} />
        <Route path="/courses/:courseId" element={<ProtectedRoute><Course /></ProtectedRoute>} />
        <Route path="/modules/:moduleId" element={<ProtectedRoute><Module /></ProtectedRoute>} />
        <Route path="/lessons/:lessonId" element={<ProtectedRoute><Lesson /></ProtectedRoute>} />

        <Route path="/qna-vault" element={<ProtectedRoute><QnaVault /></ProtectedRoute>} />
        <Route path="/qna" element={<ProtectedRoute><Qna /></ProtectedRoute>} />
        <Route path="/resources" element={<ProtectedRoute><Resources /></ProtectedRoute>} />
        <Route path="/support" element={<ProtectedRoute><Support /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="Login" />} />

        {/* <Route path="/logout" element={<Logout />} /> */}
      </Routes>
      </>
  );
}

export default App;
