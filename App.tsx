
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ViewPastePage from './pages/ViewPastePage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/paste/:id" element={<ViewPastePage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </Layout>
  );
};

export default App;
