import React from 'react';
import './company.css';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Company = () => {
  return (
    <>
      <div className="container" id="company">
        <div className="row Fontcol ">
          <div className="col-lg-6">
            <div className="Parag">
              <small className="Secure">SECURE TRANSACTION</small>
              <h2 className="Savings">
                Safe Yours <span style={{ color: '#5C0E62' }}> Savings </span>{' '}
              </h2>
              <p className="paragraph">
                Hac sem ut eget tellus diam convallis lacus a, interdum nulla
                sem adipiscing inw
              </p>
              <span className="LearnMore">
                Learn more <HiArrowNarrowRight className="arrow" />{' '}
              </span>
            </div>
          </div>
          <div
            className="col-lg-6 "
            style={{ width: '553px', overflow: 'hidden' }}
          >
            <div
              style={{
                height: '230px',
                width: '480px',
                overflow: 'hidden',
              }}
            >
              <div className=" container ">
                <img
                  src="assets/img1.png"
                  style={{ width: '200px', height: '100px' }}
                  alt=""
                  className="imgGallery"
                />

                <img
                  src="assets/img2.png"
                  alt=""
                  style={{ width: '130px', height: '100px' }}
                  className="imgGallery"
                />

                <img
                  src="assets/img33.png"
                  alt=""
                  style={{ width: '100px', height: '100px' }}
                  className="imgGallery"
                />
              </div>
              <div
                style={{ marginLeft: '-40px', marginRight: '-70' }}
                className=""
              >
                <img
                  src="assets/img4.png"
                  style={{ width: '100px', height: '100px' }}
                  alt=""
                  className="imgGallery"
                />

                <img
                  src="assets/img5.png"
                  alt=""
                  style={{ width: '180px', height: '100px' }}
                  className="imgGallery"
                />

                <img
                  src="assets/img6.png"
                  alt=""
                  style={{ width: '170px', height: '100px' }}
                  className="imgGallery"
                />
                <img
                  src="assets/img7.png"
                  style={{ width: '70px', height: '100px' }}
                  alt=""
                  className="imgGallery"
                />
              </div>
              <div className=" container">
                <img
                  src="assets/img1.png"
                  style={{ width: '200px', height: '100px' }}
                  alt=""
                  className="imgGallery"
                />

                <img
                  src="assets/img2.png"
                  alt=""
                  style={{ width: '130px', height: '100px' }}
                  className="imgGallery"
                />

                <img
                  src="assets/img33.png"
                  alt=""
                  style={{ width: '100px', height: '100px' }}
                  className="imgGallery"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Company;
