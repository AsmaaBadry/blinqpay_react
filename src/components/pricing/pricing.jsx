import React from "react";
import "./pricing.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import Icons from './../icons/icons';
const Pricing = () => {
  return (
   <>
    {/* <div className='container cont'>
    <svg className="svg-sec" width="1500" height="1982" viewBox="0 0 1500 1982" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M833.175 12.5232C1259.08 -58.3726 1441.67 199.404 1500.5 337.153L1500.5 1703.6L-1.50037 1981.47L-1.49961 639.972L-1.50029 160.487C129 140.705 407.265 83.419 833.175 12.5232Z" fill="white"/>
</svg>
     </div>
<Icons/> */}
    <div className="bg-white" id="pricing">
      <div className="container-fluid row Payment-section">
        <div className="col-md-6 d-flex justify-content-around align-items-center">
          <div className="Parag">
          <svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M76.657 65.102C82.5581 37.2638 77.7539 18.9029 74.6812 13.2739L74.6699 13.2534L74.6609 13.2318C73.4091 10.2478 70.5245 6.1211 65.9615 3.48799C61.6727 1.01312 55.8708 -0.160957 48.4743 2.22063L48.4788 2.2339C21.519 11.3419 8.1688 24.8319 4.89128 30.344L4.87932 30.3642L4.86535 30.383C2.93572 32.9806 0.854889 37.5654 0.914456 42.8333C0.970545 47.7937 2.92388 53.3956 8.767 58.554L8.76956 58.5509C30.3376 76.6303 48.7051 80.9383 55.0985 80.8577L55.1218 80.8574L55.145 80.8595C58.3545 81.1471 63.3436 80.5346 67.8245 77.7583C71.6319 75.3992 75.0958 71.4643 76.7877 65.1297L76.657 65.102Z" fill="#F7F3FA"/>
</svg>

            <small className="credit">CREDIT CARD</small>
            <h2 className="Payment">
              Payment <span style={{ color: "#5C0E62" }}><br/> Gets Easier</span>{" "}
            </h2>
            <p className="Paypar">
              Hac sem ut eget tellus diam convallis lacus a, interdum nulla sem
              adipiscing inw
            </p>
            <span className="LearnMore">Learn more <HiArrowNarrowRight className="arrow"/> </span> 
          </div>
        </div>
        <div className="col-md-6 reArrange">
          <img src="assets/iPad.png" className="iPad" alt="" />
        </div>

      </div>
    </div>
   </>
  );
};
export default Pricing;
