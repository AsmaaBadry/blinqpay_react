import React from 'react';
import './home.css';

import Header from '../../components/header/header';
import Start from '../../components/start/start';
import Payments from '../../components/payments/payments';
import Pricing from './../../components/pricing/pricing';
import Banking from './../../components/banking/banking';
import Icons from './../../components/icons/icons';
import Company from './../../components/company/company';
import Developers from './../../components/developers/developers';
import Footer from './../../components/footer/footer';
const Home = () => {
  return (
    <>
      <Header />
      <Start />

      <div className="payments">
        <Payments />
      </div>
      <div className="curve2"></div>

      <div className="icons-lab">
        <Icons />
      </div>
      <Pricing />
      <Banking />
      <Company />
      <Developers />
      <Footer />
    </>
  );
};
export default Home;
