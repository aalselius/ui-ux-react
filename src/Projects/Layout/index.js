import React from 'react';
import Footer from './Footer';
import Header from './Header';
import './index.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
