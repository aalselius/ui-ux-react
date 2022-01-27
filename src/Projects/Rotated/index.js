import React from 'react';
import Layout from '../Layout';
import './index.css';

const Rotated = () => {
  return (
    <Layout>
      <div className="rotated-parent">
        <div className="row h-100 align-items-center">
          <div className="col md-6">
            <div className="h-75 p-5">
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_qhrndegx.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="col md-6">
            <div className="rotated-text">
              <h1 data-aos="slide-right">
                <b>Alexandra</b>
              </h1>
              <p data-aos="slide-left">
                Front End <b>Developer</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Rotated;
