import Stepper from 'react-stepper-horizontal';
import { selectActiveStep } from '../features/profileSale/profileSaleSlice';
import { useSelector } from 'react-redux';

const Steps = () => {
  const activeStep = useSelector(selectActiveStep);

  return (
    <div style={{ width: '100%' }}>
      <Stepper
        steps={[
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' },
          { title: '' }
        ]}
        activeStep={activeStep}
        activeColor={'#97e595'}
        completeColor={'#97e595'}
        defaultBarColor={'white'}
        defaultColor={'white'}
        defaultTitleColor={'black'}
        circleFontColor={'black'}
        defaultBorderColor={'#ffffff'}
        completeBorderColor={'#ffffff'}
        completeBarColor={'white'}
        lineMarginOffset={0}
        defaultBorderWidth={0}
      />
    </div>
  );
};

export default Steps;
