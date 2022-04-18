import Stepper from 'react-stepper-horizontal';
import { selectActiveStep } from '../features/profileSale/profileSaleSlice';
import { useSelector } from 'react-redux';
import { ContainerStepper } from '../assets/styles/style';
import { items } from '../utils/helper';

const Steps = () => {
  const activeStep = useSelector(selectActiveStep);

  return (
    <ContainerStepper>
      <Stepper
        steps={items}
        size={25}
        circleFontSize={13}
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
    </ContainerStepper>
  );
};

export default Steps;
