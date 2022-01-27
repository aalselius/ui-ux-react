import React from 'react';
import Layout from '../Layout';
import './index.css';

function Cars(props) {
  return (
    <div>
      <Layout>
        <div className="cars-parent">
          <div className="row h-100">
            <div className="col-md-6 part-1">
              <img
                src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3328&q=80"
                alt="car"
              />
            </div>
            <div className="col-md-6 part-2">
              <img
                src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3328&q=80"
                alt="car"
              />
            </div>
            <div className="cars-text">C A R S</div>
          </div>
          <div className="text-separator">
            <span>ALEX</span>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Cars;
