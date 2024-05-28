import { ReactElement, useState, useEffect } from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { Backdrop, CircularProgress } from '@mui/material';
import Layout from 'components/layout/layout';
import Login from 'screens/login/login';
import Dashboard from 'screens/dashboard/dashboard';
import NotFound from 'screens/not-found/not-found';
import ScrollToTop from 'hooks/scroll-to-top';

const App = (): ReactElement => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeOut = async () => {
      if (loading) {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
      }
    };
    timeOut();
  }, [loading]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={`/login`} replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ScrollToTop />

      <Backdrop
        open={loading}
        transitionDuration={{ exit: 0 }}
        sx={{
          background: '#FFFF',
          zIndex: theme => theme.zIndex.drawer + 1,
        }}>
        <CircularProgress sx={{ color: '#2d374f' }} role="presentation" />
      </Backdrop>
    </Layout>
  );
};

export default App;
