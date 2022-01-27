import React from 'react';
import { Parallax, Background } from 'react-parallax';

import Layout from '../Layout';
import './index.css';

function ParallaxEffect() {
  return (
    <Layout>
      <div className="parallax-parent">
        <Parallax strength={500}>
          <Background>
            <img
              src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1217&q=80"
              alt="fill murray"
            />
          </Background>
          <div className="parallax-content">
            <div>
              <h1>Alexandra</h1>
              <h3>Front End Developer</h3>
              <button>Get Started</button>
            </div>
          </div>
        </Parallax>
        <div className="bottom-content">
          <div className="p-5 m-5">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="container">
            <p>
              Mollit et commodo irure ullamco cillum. Deserunt cillum elit ea
              incididunt elit veniam. Cillum dolore et aute Lorem veniam. Fugiat
              commodo est proident qui mollit consequat sunt. Veniam excepteur
              consequat consequat excepteur consectetur Lorem. Mollit aute
              consequat ullamco officia. Ea in labore magna ipsum aute ad
              officia in ea aliqua ad aliquip enim labore.
            </p>
          </div>
        </div>
        <div className="parallax-footer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ff5500"
              fillOpacity="1"
              d="M0,192L1440,96L1440,320L0,320Z"
            ></path>
          </svg>
          <div className="footer-content">
            <p>Designed and Developed By</p>
            <h4>Alexandra</h4>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ParallaxEffect;
