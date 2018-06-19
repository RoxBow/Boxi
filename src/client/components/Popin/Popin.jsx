import '../../styles/_popin.scss';
import React from 'react';
import { STEP1BUY, STEP2BUY, STEP3BUY } from '../../constants';
import Step1 from '../Steps/Step1/Step1Container';
import Step2 from '../Steps/Step2/Step2Container';
import Step3 from '../Steps/Step3/Step3Container';

const renderContent = popinType => {
  switch (popinType) {
    case STEP1BUY:
      return <Step1 />;
    case STEP2BUY:
      return <Step2 />;
    case STEP3BUY:
      return <Step3 />;
    default:
      return false;
  }
};

const Popin = ({ isOpen, hidePopin, popinType }) => (
  <div className={`overlay ${isOpen ? 'active' : ''}`}>
    <div className="popin">
      <div className="wrapper-popin-top">
        <span className="close" onClick={hidePopin}></span>
        {renderContent(popinType)}
      </div>
      <div className="wrapper-popin-bottom">
        <img src="../../../images/image-product.png" alt="image magazine" />
      </div>
    </div>
  </div>
);

export default Popin;
