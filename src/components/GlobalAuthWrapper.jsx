import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation  } from 'react-router-dom';
import { restoreAuth } from '../redux/slices/authSlice';

const GlobalAuthWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(restoreAuth());
  }, [dispatch]);

  if (loading) {
    return <div>Loading... Auth</div>; // Or loading spinner
  }
   if (!isAuthenticated && location.pathname !== '/login' && location.pathname !== '/signup') {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default GlobalAuthWrapper;
