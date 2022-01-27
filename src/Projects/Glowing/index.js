import React from 'react';
import Layout from '../Layout';
import './index.css';

const Glowing = () => {
  return (
    <Layout>
      <div className="glowing-parent">
        <div className="h-100">
          <lottie-player
            src="https://assets1.lottiefiles.com/private_files/lf30_TzV5fo.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="glowing-text">
          <h1>Alexandra</h1>
          <p>Front End Developer</p>
        </div>
      </div>
    </Layout>
  );
};

export default Glowing;
