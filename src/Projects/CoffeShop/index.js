import React from 'react';
import Layout from '../Layout';
import './index.css';

function CoffeShop() {
  return (
    <div>
      <Layout>
        <div className="coffeshop-parent">
          <div className="row h-100 align-items-center">
            <div
              className="col-md-6 coffeeshop-text-part p-5"
              data-aos="slide-down"
            >
              <h1>
                It's not just <b>COFFEE</b>
              </h1>
              <h2>
                It's <b>SOMETHING</b> more...
              </h2>
              <p>
                Lorem non incididunt proident adipisicing voluptate eiusmod
                veniam incididunt dolore ad. Culpa consequat culpa tempor esse
                sint labore non in nulla. Officia reprehenderit tempor ut
                laborum dolore quis sunt. Commodo labore Lorem incididunt esse
                dolore magna reprehenderit reprehenderit ex pariatur id
                voluptate cillum ut.
              </p>
            </div>
            <div
              className="col-md-6 h-50 d-flex align-items-center coffee-cup"
              data-aos="slide-up"
            >
              <lottie-player
                src="https://assets8.lottiefiles.com/packages/lf20_KMqzGr.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="circle"></div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default CoffeShop;
