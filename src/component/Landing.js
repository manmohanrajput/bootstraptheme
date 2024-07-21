import React from 'react';
import { useSelector } from 'react-redux';
import "../css/Landing.css";

const Landing = () => {
  const category = useSelector((state) => state.category);

  const renderContent = () => {
    switch (category) {
      case 'admin':
        return (
          <>
            <h1>Admin & Dashboard Content</h1>
            <p>This is the content for Admin & Dashboard.</p>
          </>
        );
      case 'landing':
        return (
          <>
            <h1>Landing Pages Content</h1>
            <p>This is the content for Landing Pages.</p>
          </>
        );
      case 'bussiness':
        return (
          <>
            <h1>Business & Corporate Content</h1>
            <p>This is the content for Business & Corporate.</p>
          </>
        );
      case 'portfolio':
        return (
          <>
            <h1>Portfolio & Resume Content</h1>
            <p>This is the content for Portfolio & Resume.</p>
          </>
        );
      case 'ecommerce':
        return (
          <>
            <h1>Ecommerce Content</h1>
            <p>This is the content for Ecommerce.</p>
          </>
        );
      default:
        return (
          <>
            <h1>All Categories</h1>
            <p>Show all categories content here.</p>
          </>
        );
    }
  };

  return (
    <div className="landing-page">
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Landing;
