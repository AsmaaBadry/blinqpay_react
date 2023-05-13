import React from 'react';
import './developers.css';

const Developers = () => {
  return (
    <>
      <div className="section" id="developers">
        <div>
          <svg className='last-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,320L1440,0L1440,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="row container">
          <div className="col-lg-6 d-flex justify-content-around align-items-center">
            <div>
              <h2 style={{ color: '#ffffff', marginTop: '200px' }}>
                Payment <span style={{ color: '#ffffff' }}>Gets Easier</span>{' '}
              </h2>
              <p className="customer-paragraph">
                Hac sem ut eget tellus diam convallis lacus a, interdum nulla
                sem adipiscing inw
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="customer-div">
              <img
                className="customer-img customer1"
                src="assets/human1.png"
                alt=""
              />
              <p className="customer-paragraph">
                Hac sem ut eget tellus diam convallis lacus a, interdum nulla
                sem lacus a, interdum nulla sem adipiscing inw
              </p>
              <span className="customer-name">LEO MAYNUS</span>
              <span className="customer-title">CEO at Softpanda</span>
            </div>
            <img
              className="customer-img customer2"
              src="assets/human2.png"
              alt=""
            />
            <img
              className="customer-img customer3"
              src="assets/human3.png"
              alt=""
            />
            <img
              className="customer-img customer4"
              src="assets/human4.png"
              alt=""
            />
            <img
              className="customer-img customer5"
              src="assets/human5.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Developers;
