import React from 'react';
import Layout from '../Layout';
import './index.css';

const Bubbles = () => {
  const name = ['A', 'L', 'E', 'X', 'A', 'N', 'D', 'R', 'A'];
  return (
    <div>
      <Layout>
        <div className="colors-container">
          <div className="row h-100 align-items-center justify-content-center">
            {name.map((letter, index) => {
              return (
                <div className={`col-md-1 letter letter-${index}`}>
                  {letter}
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Bubbles;
