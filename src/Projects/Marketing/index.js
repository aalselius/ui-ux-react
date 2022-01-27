import React from 'react';
import './index.css';
import Layout from '../Layout';

const Marketing = () => {
  return (
    <Layout>
      <div className="marketing-parent">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-4 text-center">
            <h1 data-aos="slide-right">Alexandra</h1>
            <div className="h-50">
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_boxe3lx3.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <h3 data-aos="slide-left">Analytics</h3>
          </div>
          <div className="col-md-8">
            <div className="h-50 py-5" data-aos="slide-down">
              <lottie-player
                src="https://assets8.lottiefiles.com/private_files/lf30_rn1i0mvd.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Marketing;
