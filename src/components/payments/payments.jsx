import React from 'react';
import './payments.css';
import { Card } from 'react-bootstrap';
import {
  IoBodyOutline,
  IoCashOutline,
  IoReceiptOutline,
  IoAnalyticsOutline,
} from 'react-icons/io5';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Payments = () => {
  return (
    <>
      <div className="container pay">
        <div className="row Cards">
          <div className="col-lg-8 d-flex justify-content-evenly align-items-center text-secondary row CardsSection">
            <div className="col-lg-4 first ">
              <Card className="card ">
                <Card.Body className="cardBody">
                  <h5 className="icons">
                    <IoBodyOutline />
                  </h5>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <b> Easy Access</b>
                  </Card.Text>
                  <Card.Text>
                    Now track all of your transaction easily.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="  card">
                <Card.Body className="cardBody">
                  <h5 className="icons">
                    <IoAnalyticsOutline />
                  </h5>
                  <Card.Text>
                    <b> Use You Connect</b>
                  </Card.Text>
                  <Card.Text>
                    Now track all of your transaction easily.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 second ">
              <Card className="card">
                <Card.Body className="cardBody">
                  <h5 className="icons">
                    <IoCashOutline />
                  </h5>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <b> Cashflow Visiblity</b>
                  </Card.Text>
                  <Card.Text>
                    Now track all of your transaction easily.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="card">
                <Card.Body className="cardBody">
                  <h5 className="icons">
                    <IoReceiptOutline />
                  </h5>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <b> Manage Invoicing</b>
                  </Card.Text>
                  <Card.Text>
                    Now track all of your transaction easily.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="svg-container">
              <svg
                className="svg"
                width="59"
                height="59"
                viewBox="0 0 87 88"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M82.9428 70.2797C89.4047 39.7956 84.1439 19.6896 80.7791 13.5256L80.7668 13.5031L80.7569 13.4795C79.3862 10.2119 76.2274 5.69298 71.2307 2.80961C66.5343 0.0995238 60.1809 -1.18614 52.0815 1.42179L52.0864 1.43633C22.5642 11.41 7.94519 26.1821 4.35617 32.2182L4.34306 32.2402L4.32777 32.2608C2.21474 35.1053 -0.0638587 40.1259 0.00136924 45.8945C0.0627894 51.3263 2.20178 57.4606 8.60024 63.1092L8.60305 63.1059C32.221 82.9036 52.3343 87.6211 59.3353 87.5328L59.3608 87.5325L59.3862 87.5348C62.9007 87.8497 68.364 87.179 73.2708 84.1388C77.44 81.5555 81.2332 77.2466 83.0859 70.31L82.9428 70.2797Z"
                  fill="white"
                />
              </svg>
              <div className="text-container">
                <h1 className="Share  ms-2 mt-4">
                  Make & Share{' '}
                  <span style={{ color: '#5C0E62' }}> Payments</span> With
                  Community
                </h1>

                <p className="mini-paragraph">
                  Hac sem ut eget tellus diam convallis lacus a, interdum nulla
                  sem adipiscing inw
                </p>
                <span style={{ color: '#5C0E62' }}>
                  Learn more <HiArrowNarrowRight className="arrow" />{' '}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
