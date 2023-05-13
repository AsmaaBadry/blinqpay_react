import React from 'react';
import './banking.css';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Banking = () => {
  return (
    <>
      <div className="container m-5">
        <div className="row  ">
          <div className="col-lg-6 row d-flex gap-0 .Transaction {
  font-size:small;
  color: #e23434;
  font-weight: 700;
}
">
            <div className="col-4 img1">
              <div className="image1 ">
                <img
                  src="assets/person1.png"
                  alt="image1"
                  className="person-img1"
                />
              </div>
            </div>
            <div className="col-4 img1">
              <div className="image2 ">
                <img
                  src="assets/person2.png"
                  alt="image1"
                  className="person-img2"
                />
              </div>
              <div className="image3">
                <img
                  src="assets/person33.png"
                  alt="image3"
                  className="person-img3"
                />
              </div>
            </div>
            <div className="col-4 img1">
              <div className="image4 ">
                <img
                  src="assets/person44.png"
                  alt="image4"
                  className="person-img4"
                />
              </div>
              <div className="image5">
                <img
                  src="assets/person55.png"
                  alt="image5"
                  className="person-img5"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-around align-items-center">
            <div className="Parag2">
              <small className="Transaction">MOBILE TRANSACTION</small>
              <h2 className="Smart">
                Smart Mobile
                <span style={{ color: '#5C0E62' }}> Banking</span>{' '}
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
        </div>
      </div>
    </>
  );
};
export default Banking;
